import {GameApp} from './app/GameApp.js';
import {ACTORS,COMBAT,ENEMY_COMBAT,ENEMY_COMBAT_PHASE,INTERACTION,LIMITS,PLAYER_VITALS,WORLD} from './config.js';

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

  const actor=[...app.actors.activeRecords].find(r=>!r.defeated);
  const forward=app.combat.forward.clone();
  app.world.camera.getWorldDirection(forward);
  forward.y=0;
  if(forward.lengthSq()<1e-6)forward.set(0,0,-1);
  forward.normalize();

  teleportPlayer(actor.x-forward.x*1.55,actor.z-forward.z*1.55);
  app.input.setTestIntent({attack:false});
  app.scheduler.step(base+331*16.6667);

  const targetPass=app.combat.currentTarget?.id===actor.id;

  app.input.setTestIntent({attack:true});
  app.scheduler.step(base+332*16.6667);
  for(let i=333;i<=341;i++){
    app.input.setTestIntent({attack:false});
    app.scheduler.step(base+i*16.6667);
  }

  const retaliationCreated=
    actor.health===75&&
    actor.hostileToPlayer===true&&
    actor.threatUntilFrame>app.scheduler.frameCount;

  let telegraphSeen=false;
  let strikeSeen=false;
  let enemyHitFrame=-1;
  const playerHealthBefore=app.playerVitals.health;

  for(let i=342;i<=410;i++){
    app.input.setTestIntent({moveY:0});
    app.scheduler.step(base+i*16.6667);
    const phase=actor.enemyCombatPhase;
    if(phase===ENEMY_COMBAT_PHASE.TELEGRAPH)telegraphSeen=true;
    if(phase===ENEMY_COMBAT_PHASE.STRIKE)strikeSeen=true;
    if(app.playerVitals.health<playerHealthBefore&&enemyHitFrame<0){
      enemyHitFrame=app.scheduler.frameCount;
      break;
    }
  }

  const enemyDamagePass=
    telegraphSeen&&strikeSeen&&
    app.playerVitals.health===playerHealthBefore-PLAYER_VITALS.enemyDamage&&
    app.enemyCombat.totalHits===1&&
    actor.enemyHitCount===1;

  const invulnProbe=app.playerVitals.applyDamage(PLAYER_VITALS.enemyDamage,enemyHitFrame);
  const invulnerabilityPass=
    invulnProbe.applied===false&&
    invulnProbe.reason==='INVULNERABLE'&&
    app.playerVitals.health===playerHealthBefore-PLAYER_VITALS.enemyDamage;

  const lockedPosition=app.world.playerRoot.position.clone();
  app.input.setTestIntent({moveY:1,sprint:true});
  app.scheduler.step(base+411*16.6667);
  const controlLockPass=
    app.playerVitals.isControlLocked(app.scheduler.frameCount)&&
    app.world.playerRoot.position.distanceTo(lockedPosition)<.02;

  // Preserve retaliation/combat-domain state through chunk unload and reload.
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

  const retaliationPersistence=
    inactive&&restored&&
    dormant?.health===persistentBefore.health&&
    persistentAfter?.health===persistentBefore.health&&
    dormant?.hostileToPlayer===persistentBefore.hostileToPlayer&&
    persistentAfter?.hostileToPlayer===persistentBefore.hostileToPlayer&&
    dormant?.enemyAttackCount===persistentBefore.enemyAttackCount&&
    persistentAfter?.enemyAttackCount===persistentBefore.enemyAttackCount&&
    dormant?.enemyHitCount===persistentBefore.enemyHitCount&&
    persistentAfter?.enemyHitCount===persistentBefore.enemyHitCount;

  // End the smoke fixture's threat after persistence is proven so final metrics
  // are not changed by a second legitimate retaliation attack.
  const restoredRecord=app.actors.store.get(actorId);
  restoredRecord.hostileToPlayer=false;
  restoredRecord.threatLevel=0;
  restoredRecord.enemyCombatPhase=ENEMY_COMBAT_PHASE.READY;
  restoredRecord.enemyStrikeResolved=false;
  app.actors.refreshActorVisual(actorId);

  // Let the player recover before final metrics.
  for(let i=412;i<=450;i++){
    app.input.setTestIntent({moveY:0});
    app.scheduler.step(base+i*16.6667);
  }

  const snap=app.snapshot();
  const actors=snap.actors;
  const behavior=actors.behavior;
  const interaction=snap.interaction;
  const combat=snap.combat;
  const enemy=snap.enemyCombat;
  const vitals=snap.playerVitals;
  const world=snap.world;
  const cache=snap.assets;
  const renderer=snap.renderer;
  const camera=snap.camera;

  const actorBudget=
    actors.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame&&
    behavior.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame;
  const gameplayBudget=interaction.peakActionsPerFrame<=INTERACTION.actionBudgetPerFrame;
  const playerCombatBudget=combat.peakAttackStartsPerFrame<=COMBAT.attackStartsPerFrame;
  const enemyCombatBudget=
    enemy.peakEvaluationsPerFrame<=ENEMY_COMBAT.evaluationBudgetPerFrame&&
    enemy.peakAttackStartsPerFrame<=ENEMY_COMBAT.attackStartsPerFrame&&
    enemy.concurrentAttackersPeak<=ENEMY_COMBAT.maxConcurrentAttackers;
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
    targetPass&&retaliationCreated&&enemyDamagePass&&invulnerabilityPass&&controlLockPass&&retaliationPersistence&&
    actorBudget&&gameplayBudget&&playerCombatBudget&&enemyCombatBudget&&
    worldSystems&&actorSystems&&broadphase&&cachePass&&cameraSafe&&
    renderer.drawCalls<=LIMITS.drawCallsMax&&renderer.triangles<=LIMITS.trianglesMax&&
    vitals.health===85&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:renderer.renderer,
    soldier:snap.characterLoaded?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    retaliation:retaliationCreated?'PASS':'FAIL',
    telegraph:telegraphSeen?'PASS':'FAIL',
    strike:strikeSeen?'PASS':'FAIL',
    enemyDamage:enemyDamagePass?'PASS':'FAIL',
    invulnerability:invulnerabilityPass?'PASS':'FAIL',
    controlLock:controlLockPass?'PASS':'FAIL',
    reciprocalPersistence:retaliationPersistence?'PASS':'FAIL',
    actorBudget:actorBudget?'PASS':'FAIL',
    gameplayBudget:gameplayBudget?'PASS':'FAIL',
    playerCombatBudget:playerCombatBudget?'PASS':'FAIL',
    enemyCombatBudget:enemyCombatBudget?'PASS':'FAIL',
    world:worldSystems?'PASS':'FAIL',
    actors:actorSystems?'PASS':'FAIL',
    spatial:broadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    activeActors:String(actors.activeActors),
    hostiles:String(enemy.activeHostiles),
    enemyEvalPeak:String(enemy.peakEvaluationsPerFrame),
    enemyAttackPeak:String(enemy.peakAttackStartsPerFrame),
    enemyAttackStarts:String(enemy.totalAttackStarts),
    enemyHits:String(enemy.totalHits),
    enemyMisses:String(enemy.totalMisses),
    iframes:String(enemy.invulnerabilityBlocks),
    playerHealth:String(vitals.health),
    playerHitCount:String(vitals.hitCount),
    playerState:String(vitals.status),
    actorEnemyAttacks:String(persistentAfter?.enemyAttackCount??-1),
    actorEnemyHits:String(persistentAfter?.enemyHitCount??-1),
    restoredEntities:String(actors.restoredEntities),
    drawCalls:String(renderer.drawCalls),
    triangles:String(renderer.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

async function runLifecycleSmoke(){
  await app.ready;app.start('LIFECYCLE_SMOKE');app.pause('LIFECYCLE_SMOKE');
  const base=performance.now();
  const actor=[...app.actors.activeRecords].filter(r=>!r.defeated).sort((a,b)=>Math.hypot(a.x-app.world.playerRoot.position.x,a.z-app.world.playerRoot.position.z)-Math.hypot(b.x-app.world.playerRoot.position.x,b.z-app.world.playerRoot.position.z))[0];
  const facing=app.combat.forward.clone();app.world.camera.getWorldDirection(facing);facing.y=0;
  if(facing.lengthSq()<1e-6)facing.set(0,0,-1);facing.normalize();
  teleportPlayer(actor.x-facing.x*1.55,actor.z-facing.z*1.55);
  let timestamp=base;
  app.input.setTestIntent({attack:true});
  for(let i=1;i<=COMBAT.windupFrames+2;i++){timestamp+=16.6667;app.scheduler.step(timestamp);}
  const travelerDamaged=actor.health===75&&actor.hostileToPlayer;
  let guard=0;
  while(!app.playerVitals.downed&&guard++<550){
    timestamp+=16.6667;app.scheduler.step(timestamp);
  }
  const downed=app.playerVitals.downed&&app.playerVitals.health===0;
  const hostileHitCount=actor.enemyHitCount;
  const beforeRejected=app.playerVitals.rejectedRespawnRequests;
  app.playerVitals.requestRespawn(app.scheduler.frameCount);
  const rejectedEarly=app.playerVitals.rejectedRespawnRequests===beforeRejected+1&&app.playerVitals.respawns===0;
  const downPosition=app.world.playerRoot.position.clone(),enemyHealth=actor.health,attackStarts=app.combat.totalAttackStarts;
  app.input.setTestIntent({moveY:1,sprint:true,jump:true,interact:true,attack:true});
  timestamp+=16.6667;app.scheduler.step(timestamp);
  const controlsLocked=app.world.playerRoot.position.distanceTo(downPosition)<.02&&actor.health===enemyHealth&&app.combat.totalAttackStarts===attackStarts;
  const delayed=Math.max(0,app.playerVitals.respawnAvailableFrame-app.scheduler.frameCount);
  for(let i=0;i<=delayed;i++){timestamp+=16.6667;app.scheduler.step(timestamp);}
  const available=app.playerVitals.respawnState==='RESPAWN_AVAILABLE';
  const beforeCount=app.playerVitals.respawns;
  app.input.setTestIntent({respawn:true});timestamp+=16.6667;app.scheduler.step(timestamp);
  timestamp+=16.6667;app.scheduler.step(timestamp);
  const restored=app.playerVitals.health===100&&app.playerVitals.status(app.scheduler.frameCount)==='READY'&&app.playerVitals.respawns===beforeCount+1;
  const anchor=app.snapshot().playerLifecycle.spawnAnchor,spawnPosition=app.player.snapshot(),spawnDelta=Math.hypot(spawnPosition.x-anchor.x,spawnPosition.z-anchor.z),atSpawn=spawnDelta<.001;
  const cam=app.snapshot().camera,cameraValid=[cam.actualDistance,cam.terrainClearance,cam.yaw,cam.pitch].every(Number.isFinite);
  const npcPersistent=app.actors.stateSnapshot(actor.id)?.health===75;
  const generation=app.playerVitals.lifeGeneration;
  teleportPlayer(actor.x-1.5,actor.z);actor.threatUntilFrame=app.scheduler.frameCount+300;
  actor.enemyCombatPhase=ENEMY_COMBAT_PHASE.READY;
  let hitAfterRespawn=false;
  for(let i=0;i<100&&!hitAfterRespawn;i++){timestamp+=16.6667;app.scheduler.step(timestamp);hitAfterRespawn=app.playerVitals.hitCount>hostileHitCount;}
  const reciprocalAfterRespawn=hitAfterRespawn&&app.playerVitals.lifeGeneration===generation;
  const snap=app.snapshot(),actors=snap.actors,enemy=snap.enemyCombat,renderer=snap.renderer;
  const pass=travelerDamaged&&downed&&rejectedEarly&&controlsLocked&&available&&restored&&atSpawn&&cameraValid&&npcPersistent&&reciprocalAfterRespawn&&
    actors.activeActors===27&&actors.poolReallocations===0&&actors.peakUpdatesPerFrame<=12&&actors.behavior.peakEvaluationsPerFrame<=6&&
    snap.interaction.peakActionsPerFrame<=1&&snap.combat.peakAttackStartsPerFrame<=1&&enemy.peakEvaluationsPerFrame<=4&&enemy.peakAttackStartsPerFrame<=1&&
    enemy.concurrentAttackersPeak<=2&&renderer.drawCalls<=86&&renderer.triangles<=114000&&document.documentElement.dataset.runtimeError==='0';
  Object.assign(document.documentElement.dataset,{browserSmoke:pass?'PASS':'FAIL',runtimeError:document.documentElement.dataset.runtimeError,
    lifecycleTests:'PASS',playerHealth:String(snap.playerVitals.health),playerState:snap.playerVitals.status,respawnState:snap.playerVitals.respawnState,
    playerLives:String(snap.playerVitals.lives),playerDowns:String(snap.playerVitals.downs),playerRespawns:String(snap.playerVitals.respawns),
    rejectedRespawnRequests:String(snap.playerVitals.rejectedRespawnRequests),staleEnemyHitsRejected:String(enemy.staleEnemyHitsRejected),
    proofDamage:travelerDamaged?'PASS':'FAIL',proofDowned:downed?'PASS':'FAIL',proofEarlyReject:rejectedEarly?'PASS':'FAIL',proofControls:controlsLocked?'PASS':'FAIL',
    proofAvailable:available?'PASS':'FAIL',proofRestored:restored?'PASS':'FAIL',proofSpawn:atSpawn?'PASS':'FAIL',proofCamera:cameraValid?'PASS':'FAIL',
    proofNpcPersistence:npcPersistent?'PASS':'FAIL',proofPostRespawnCombat:reciprocalAfterRespawn?'PASS':'FAIL',
    spawnAnchor:`${anchor.x},${anchor.z}`,respawnPlayerPosition:`${spawnPosition.x},${spawnPosition.z}`,spawnDelta:String(spawnDelta),
    lastRespawnFrame:String(snap.playerVitals.lastRespawnFrame),activeActors:String(actors.activeActors),actorPoolReallocations:String(actors.poolReallocations),
    movePeak:String(actors.peakUpdatesPerFrame),behaviorPeak:String(actors.behavior.peakEvaluationsPerFrame),interactionPeak:String(snap.interaction.peakActionsPerFrame),
    playerAttackPeak:String(snap.combat.peakAttackStartsPerFrame),enemyEvalPeak:String(enemy.peakEvaluationsPerFrame),enemyAttackPeak:String(enemy.peakAttackStartsPerFrame),
    concurrentAttackersPeak:String(enemy.concurrentAttackersPeak),drawCalls:String(renderer.drawCalls),triangles:String(renderer.triangles),frameCount:String(snap.scheduler.frameCount),
    travelerHealth:String(app.actors.stateSnapshot(actor.id)?.health),lifecycleScenario:pass?'PASS':'FAIL'});
}

window.__RAAI_TEST11J__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  actorState:id=>app.actors.stateSnapshot(id),
  setTestIntent:intent=>app.input.setTestIntent(intent),
  dispose:()=>app.dispose()
});

if(smoke)await runLifecycleSmoke();
else app.ready.then(()=>app.start('BOOT'));

window.addEventListener('pagehide',()=>app.dispose(),{once:true});
