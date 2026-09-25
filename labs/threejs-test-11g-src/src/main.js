import {GameApp} from './app/GameApp.js';
import {ACTORS,BEHAVIOR,INTERACTION,LIMITS,WORLD} from './config.js';

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

  // Prompt + pickup action.
  const pickup=app.worldInteractables.get('pickup:copper-shard');
  teleportPlayer(pickup.x,pickup.z);
  app.input.setTestIntent({interact:true});
  app.scheduler.step(base+331*16.6667);
  const pickupPass=
    pickup.collected===true&&pickup.active===false&&pickup.mesh.visible===false&&
    app.interaction.pickupActions===1;

  // Prompt visibility + USE action.
  const waystone=app.worldInteractables.get('use:waystone');
  teleportPlayer(waystone.x,waystone.z);
  app.input.setTestIntent({interact:false});
  app.scheduler.step(base+332*16.6667);
  const promptVisible=
    app.interaction.currentTarget?.id==='use:waystone'&&
    app.interactionPrompt.visible;

  app.input.setTestIntent({interact:true});
  app.scheduler.step(base+333*16.6667);
  const usePass=waystone.toggled===true&&app.interaction.useActions===1;

  // Prompt disappears when evaluating a point outside all current candidates.
  const savedPlayer=app.world.playerRoot.position.clone();
  app.interaction.evaluateTarget({x:1000,y:0,z:1000});
  const promptHidden=!app.interactionPrompt.visible&&app.interaction.currentTarget===null;
  teleportPlayer(savedPlayer.x,savedPlayer.z);

  // NPC interaction initiation.
  const objectPositions=[pickup,waystone];
  const npc=[...app.actors.activeRecords]
    .sort((a,b)=>{
      const ad=Math.min(...objectPositions.map(o=>Math.hypot(a.x-o.x,a.z-o.z)));
      const bd=Math.min(...objectPositions.map(o=>Math.hypot(b.x-o.x,b.z-o.z)));
      return bd-ad;
    })[0];

  teleportPlayer(npc.x,npc.z);
  app.input.setTestIntent({interact:true});
  app.scheduler.step(base+334*16.6667);
  const npcCountAfter=(app.actors.store.get(npc.id)?.playerInteractionCount)||0;
  const npcPass=
    npcCountAfter===1&&
    app.actors.store.get(npc.id)?.behavior===BEHAVIOR.OBSERVE_PLAYER&&
    app.interaction.npcInteractions===1;

  // Persistent world-object and NPC action state across a chunk excursion.
  const npcId=npc.id;
  const returnX=npc.x,returnZ=npc.z;
  const farX=returnX+WORLD.chunkSize*4;
  const farZ=returnZ+WORLD.chunkSize*3;
  teleportPlayer(farX,farZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);

  teleportPlayer(returnX,returnZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);

  const restoredNpc=app.actors.store.get(npcId);
  const persistencePass=
    pickup.collected===true&&
    waystone.toggled===true&&
    restoredNpc?.playerInteractionCount===1&&
    restoredNpc?.lastPlayerInteractionFrame>=0;

  // Explicit one-action-per-frame arbitration.
  app.interaction.update({frame:app.scheduler.frameCount+1},app.world.playerRoot.position,{interact:false});
  const first=app.interaction.executeCurrent({frame:app.scheduler.frameCount+1},app.world.playerRoot.position);
  const second=app.interaction.executeCurrent({frame:app.scheduler.frameCount+1},app.world.playerRoot.position);
  const oneActionPerFrame=first===true&&second===false&&app.interaction.actionsThisFrame===1;

  app.input.setTestIntent({lookDX:16,lookDY:-3});
  app.scheduler.step(base+335*16.6667);

  const snap=app.snapshot();
  const interaction=snap.interaction;
  const actors=snap.actors;
  const behavior=actors.behavior;
  const world=snap.world;
  const cache=snap.assets;
  const renderer=snap.renderer;
  const camera=snap.camera;

  const actorBudget=
    actors.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame&&
    behavior.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame;
  const interactionBudget=interaction.peakActionsPerFrame<=INTERACTION.actionBudgetPerFrame;
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
    pickupPass&&promptVisible&&promptHidden&&usePass&&npcPass&&persistencePass&&oneActionPerFrame&&
    actorBudget&&interactionBudget&&worldSystems&&actorSystems&&broadphase&&cachePass&&cameraSafe&&
    renderer.drawCalls<=LIMITS.drawCallsMax&&renderer.triangles<=LIMITS.trianglesMax&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:renderer.renderer,
    soldier:snap.characterLoaded?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    pickup:pickupPass?'PASS':'FAIL',
    promptVisible:promptVisible?'PASS':'FAIL',
    promptHidden:promptHidden?'PASS':'FAIL',
    use:usePass?'PASS':'FAIL',
    npc:npcPass?'PASS':'FAIL',
    persistence:persistencePass?'PASS':'FAIL',
    oneAction:oneActionPerFrame?'PASS':'FAIL',
    actorBudget:actorBudget?'PASS':'FAIL',
    interactionBudget:interactionBudget?'PASS':'FAIL',
    world:worldSystems?'PASS':'FAIL',
    actors:actorSystems?'PASS':'FAIL',
    spatial:broadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    activeActors:String(actors.activeActors),
    totalActions:String(interaction.totalActions),
    actionPeak:String(interaction.peakActionsPerFrame),
    pickupActions:String(interaction.pickupActions),
    useActions:String(interaction.useActions),
    npcInteractions:String(interaction.npcInteractions),
    targetPeak:String(interaction.peakCandidates),
    npcPersistentCount:String(restoredNpc?.playerInteractionCount||0),
    drawCalls:String(renderer.drawCalls),
    triangles:String(renderer.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

window.__RAAI_TEST11G__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  interact:()=>app.interaction.executeCurrent({frame:app.scheduler.frameCount},app.world.playerRoot.position),
  setTestIntent:intent=>app.input.setTestIntent(intent),
  setQualityTier:tier=>{
    const changed=app.quality.setTierForTest(tier);
    if(changed){
      app.world.applyQualityTier();
      app.actors.syncPopulation(app.scheduler.frameCount);
      app.resize();
    }
    return changed;
  },
  dispose:()=>app.dispose()
});

if(smoke)await runSmoke();
else app.ready.then(()=>app.start('BOOT'));

window.addEventListener('pagehide',()=>app.dispose(),{once:true});
