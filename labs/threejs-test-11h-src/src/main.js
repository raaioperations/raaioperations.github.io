import {GameApp} from './app/GameApp.js';
import {ACTORS,COMBAT,COMBAT_PHASE,INTERACTION,LIMITS,WORLD} from './config.js';

document.documentElement.dataset.runtimeError='0';
window.addEventListener('error',()=>document.documentElement.dataset.runtimeError='1');
window.addEventListener('unhandledrejection',()=>document.documentElement.dataset.runtimeError='1');

const host=document.getElementById('app');
const app=new GameApp(host).mount();
const smoke=new URLSearchParams(location.search).get('smoke')==='1';

function teleportPlayer(x,z){
  app.world.playerRoot.position.set(x,app.world.groundHeight(x,z),z);
  app.player.velocity.set(0,0,0);
  app.player.verticalVelocity=0;
  app.player.grounded=true;
}

async function runSmoke(){
  await app.ready;
  app.start('SMOKE');
  app.pause('SMOKE');

  const base=performance.now();
  const start=app.world.playerRoot.position.clone();

  app.input.setTestIntent({moveY:1,sprint:true});
  for(let i=1;i<=75;i++)app.scheduler.step(base+i*16.6667);
  const moved=app.world.playerRoot.position.distanceTo(start)>3;

  app.input.setTestIntent({jump:true});
  app.scheduler.step(base+76*16.6667);
  const leftGround=!app.player.grounded;

  app.input.setTestIntent({moveY:0});
  for(let i=77;i<=210;i++)app.scheduler.step(base+i*16.6667);
  const landed=app.player.grounded&&app.player.snapshot().groundError<.02;

  for(let i=211;i<=330;i++)app.scheduler.step(base+i*16.6667);

  // Put one active actor directly in front of the current camera direction.
  const actor=[...app.actors.activeRecords].find(r=>!r.defeated);
  const forward=app.combat.forward.clone();
  app.world.camera.getWorldDirection(forward);
  forward.y=0;
  if(forward.lengthSq()<1e-6)forward.set(0,0,-1);
  forward.normalize();

  teleportPlayer(actor.x-forward.x*1.55,actor.z-forward.z*1.55);
  app.input.setTestIntent({attack:false});
  app.scheduler.step(base+331*16.6667);

  const acquired=
    app.combat.currentTarget?.id===actor.id&&
    app.combat.indicator.visible;

  const healthBefore=actor.health;
  app.input.setTestIntent({attack:true});
  app.scheduler.step(base+332*16.6667);
  const windupStarted=
    app.combat.phase===COMBAT_PHASE.WINDUP&&
    app.combat.lockedTargetId===actor.id&&
    app.combat.totalAttackStarts===1;

  // Repeated attack during WINDUP must be rejected.
  app.input.setTestIntent({attack:true});
  app.scheduler.step(base+333*16.6667);
  const rejectAfterWindup=app.combat.recoveryRejects>=1;

  for(let i=334;i<=341;i++){
    app.input.setTestIntent({attack:false});
    app.scheduler.step(base+i*16.6667);
  }

  const damagePass=
    actor.health===healthBefore-COMBAT.damage&&
    actor.hitCount===1&&
    app.combat.totalHits===1&&
    app.combat.lastDamage===COMBAT.damage;

  // Keep stepping through ACTIVE into RECOVERY; duplicate hit attempts must not damage again.
  const healthAfterHit=actor.health;
  for(let i=342;i<=346;i++)app.scheduler.step(base+i*16.6667);
  const duplicateSuppression=
    actor.health===healthAfterHit&&
    actor.hitCount===1&&
    app.combat.duplicateHitBlocks>=1;

  // Attack input during recovery must not start another attack.
  const startsBeforeRecoveryInput=app.combat.totalAttackStarts;
  app.input.setTestIntent({attack:true});
  app.scheduler.step(base+347*16.6667);
  const recoveryGate=
    app.combat.totalAttackStarts===startsBeforeRecoveryInput&&
    app.combat.recoveryRejects>=2;

  // Persist combat-domain state through chunk unload/reload.
  const actorId=actor.id;
  const persistentBefore=app.actors.stateSnapshot(actorId);
  const returnX=app.world.playerRoot.position.x;
  const returnZ=app.world.playerRoot.position.z;
  const farX=returnX+WORLD.chunkSize*4;
  const farZ=returnZ+WORLD.chunkSize*3;

  teleportPlayer(farX,farZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);
  const inactive=!app.actors.activeIds.includes(actorId);
  const dormant=app.actors.stateSnapshot(actorId);

  teleportPlayer(returnX,returnZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);
  const restored=app.actors.activeIds.includes(actorId);
  const persistentAfter=app.actors.stateSnapshot(actorId);

  const persistencePass=
    inactive&&restored&&
    dormant?.health===persistentBefore.health&&
    persistentAfter?.health===persistentBefore.health&&
    dormant?.hitCount===persistentBefore.hitCount&&
    persistentAfter?.hitCount===persistentBefore.hitCount&&
    dormant?.lastHitFrame===persistentBefore.lastHitFrame&&
    persistentAfter?.lastHitFrame===persistentBefore.lastHitFrame;

  // Let the combat state finish cleanly before taking final metrics.
  for(let i=348;i<=380;i++)app.scheduler.step(base+i*16.6667);

  const snap=app.snapshot();
  const combat=snap.combat;
  const actors=snap.actors;
  const behavior=actors.behavior;
  const interaction=snap.interaction;
  const world=snap.world;
  const cache=snap.assets;
  const renderer=snap.renderer;
  const camera=snap.camera;

  const actorBudget=
    actors.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame&&
    behavior.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame;
  const gameplayBudget=interaction.peakActionsPerFrame<=INTERACTION.actionBudgetPerFrame;
  const combatBudget=combat.peakAttackStartsPerFrame<=COMBAT.attackStartsPerFrame;
  const worldSystems=
    world.chunks.active===WORLD.activeChunkCount&&
    world.chunks.poolSize===WORLD.activeChunkCount&&
    world.authoredLoaded===6;
  const actorSystems=
    actors.activeActors===ACTORS.activeCapacity&&
    actors.poolReallocations===0&&actors.duplicateIds===0;
  const broadphase=world.spatial.entries>0&&camera.candidates<world.spatial.entries;
  const cachePass=cache.hits>=2&&cache.misses===5&&cache.resolved===5;
  const cameraSafe=camera.terrainClearance>=.35;

  const pass=
    snap.characterLoaded&&snap.worldLoaded&&moved&&leftGround&&landed&&
    acquired&&windupStarted&&rejectAfterWindup&&damagePass&&duplicateSuppression&&recoveryGate&&persistencePass&&
    actorBudget&&gameplayBudget&&combatBudget&&worldSystems&&actorSystems&&broadphase&&cachePass&&cameraSafe&&
    renderer.drawCalls<=LIMITS.drawCallsMax&&renderer.triangles<=LIMITS.trianglesMax&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:renderer.renderer,
    soldier:snap.characterLoaded?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    combatTarget:acquired?'PASS':'FAIL',
    windup:windupStarted?'PASS':'FAIL',
    recoveryGate:recoveryGate?'PASS':'FAIL',
    damage:damagePass?'PASS':'FAIL',
    duplicateHit:duplicateSuppression?'PASS':'FAIL',
    combatPersistence:persistencePass?'PASS':'FAIL',
    actorBudget:actorBudget?'PASS':'FAIL',
    gameplayBudget:gameplayBudget?'PASS':'FAIL',
    combatBudget:combatBudget?'PASS':'FAIL',
    world:worldSystems?'PASS':'FAIL',
    actors:actorSystems?'PASS':'FAIL',
    spatial:broadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    activeActors:String(actors.activeActors),
    attackStarts:String(combat.totalAttackStarts),
    attackPeak:String(combat.peakAttackStartsPerFrame),
    hits:String(combat.totalHits),
    misses:String(combat.totalMisses),
    duplicateHitBlocks:String(combat.duplicateHitBlocks),
    recoveryRejects:String(combat.recoveryRejects),
    persistentHealth:String(persistentAfter?.health??-1),
    persistentHitCount:String(persistentAfter?.hitCount??-1),
    restoredEntities:String(actors.restoredEntities),
    drawCalls:String(renderer.drawCalls),
    triangles:String(renderer.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

window.__RAAI_TEST11H__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  actorState:id=>app.actors.stateSnapshot(id),
  setTestIntent:intent=>app.input.setTestIntent(intent),
  dispose:()=>app.dispose()
});

if(smoke)await runSmoke();
else app.ready.then(()=>app.start('BOOT'));

window.addEventListener('pagehide',()=>app.dispose(),{once:true});
