import {GameApp} from './app/GameApp.js';
import {ACTORS,BEHAVIOR,LIMITS,WORLD} from './config.js';

document.documentElement.dataset.runtimeError='0';
window.addEventListener('error',()=>document.documentElement.dataset.runtimeError='1');
window.addEventListener('unhandledrejection',()=>document.documentElement.dataset.runtimeError='1');

const host=document.getElementById('app');
const app=new GameApp(host).mount();
const smoke=new URLSearchParams(location.search).get('smoke')==='1';

function resetBehavior(record){
  record.behavior=BEHAVIOR.WANDER;
  record.behaviorUntilFrame=0;
  record.awareness=0;
  record.interactionPartner=null;
  record.interactionCooldownUntilFrame=0;
  record.desiredHeading=null;
}

function sameBehaviorState(a,b){
  return !!a&&!!b&&
    a.id===b.id&&
    a.behavior===b.behavior&&
    a.awareness===b.awareness&&
    a.interactionPartner===b.interactionPartner&&
    a.interactionCooldownUntilFrame===b.interactionCooldownUntilFrame&&
    a.behaviorUntilFrame===b.behaviorUntilFrame&&
    a.behaviorTransitions===b.behaviorTransitions&&
    a.playerAwarenessEvents===b.playerAwarenessEvents&&
    a.avoidanceEvents===b.avoidanceEvents&&
    a.socialEvents===b.socialEvents;
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

  // Accumulate deterministic behavior-LOD history under normal scheduler budgets.
  for(let i=211;i<=690;i++)app.scheduler.step(base+i*16.6667);

  const records=app.actors.activeRecords;
  const near=records.find(r=>r.lod==='NEAR');
  const others=records.filter(r=>r.id!==near.id);
  const avoidA=others[0],avoidB=others[1],socialA=others[2],socialB=others[3];
  const probeFrame=app.scheduler.frameCount+10;

  // Player-awareness proof with an isolated perception set.
  resetBehavior(near);
  app.actors.behavior.rebuild([near]);
  app.actors.behavior.interactions.beginFrame(probeFrame);
  app.actors.behavior.evaluateRecord(
    near,
    probeFrame,
    {x:near.x+1.25,z:near.z+1.0},
    null
  );
  const playerAwareness=near.behavior===BEHAVIOR.OBSERVE_PLAYER&&near.playerAwarenessEvents>0;

  // Actor-spacing / avoidance proof.
  resetBehavior(avoidA);resetBehavior(avoidB);
  avoidA.x=near.x+12;avoidA.z=near.z+12;
  avoidB.x=avoidA.x+.52;avoidB.z=avoidA.z+.08;
  app.actors.behavior.rebuild([avoidA,avoidB]);
  app.actors.behavior.interactions.beginFrame(probeFrame+1);
  app.actors.behavior.evaluateRecord(
    avoidA,
    probeFrame+1,
    {x:avoidA.x+100,z:avoidA.z+100},
    null
  );
  const avoidance=avoidA.behavior===BEHAVIOR.AVOID&&avoidA.avoidanceEvents>0;

  // Pair interaction + duplicate suppression proof.
  resetBehavior(socialA);resetBehavior(socialB);
  socialA.x=near.x-12;socialA.z=near.z-12;
  socialB.x=socialA.x+1.72;socialB.z=socialA.z;
  app.actors.behavior.rebuild([socialA,socialB]);
  const interactionsBefore=app.actors.behavior.interactions.totalCreated;
  const duplicateBefore=app.actors.behavior.interactions.duplicateSkips;
  app.actors.behavior.interactions.beginFrame(probeFrame+2);
  app.actors.behavior.evaluateRecord(
    socialA,
    probeFrame+2,
    {x:socialA.x+100,z:socialA.z+100},
    null
  );
  const socialStarted=
    socialA.behavior===BEHAVIOR.SOCIAL&&
    socialB.behavior===BEHAVIOR.SOCIAL&&
    app.actors.behavior.interactions.totalCreated===interactionsBefore+1;
  app.actors.behavior.interactions.tryStart(socialA,socialB,probeFrame+2);
  const pairDuplicateSuppressed=app.actors.behavior.interactions.duplicateSkips>duplicateBefore;

  // Behavior-domain persistence proof through chunk deactivation/reactivation.
  const persistenceId=near.id;
  near.awareness=.93;
  near.behavior=BEHAVIOR.OBSERVE_PLAYER;
  near.behaviorUntilFrame=probeFrame+120;
  near.desiredHeading=.75;
  const persistentBefore=app.actors.stateSnapshot(persistenceId);

  const originalX=app.world.playerRoot.position.x;
  const originalZ=app.world.playerRoot.position.z;
  const farX=originalX+WORLD.chunkSize*4;
  const farZ=originalZ+WORLD.chunkSize*3;

  app.world.playerRoot.position.set(farX,app.world.groundHeight(farX,farZ),farZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);
  const inactive=!app.actors.activeIds.includes(persistenceId);
  const dormantState=app.actors.stateSnapshot(persistenceId);

  app.world.playerRoot.position.set(originalX,app.world.groundHeight(originalX,originalZ),originalZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);
  const restored=app.actors.activeIds.includes(persistenceId);
  const persistentAfter=app.actors.stateSnapshot(persistenceId);
  const behaviorStatePreserved=
    inactive&&restored&&
    sameBehaviorState(persistentBefore,dormantState)&&
    sameBehaviorState(persistentBefore,persistentAfter);

  app.input.setTestIntent({lookDX:18,lookDY:-4});
  app.scheduler.step(base+691*16.6667);

  const snap=app.snapshot();
  const actors=snap.actors;
  const behavior=actors.behavior;
  const evalAvg=behavior.averageEvaluationsByLod;
  const world=snap.world;
  const cache=snap.assets;
  const renderer=snap.renderer;
  const camera=snap.camera;

  const actorCounts=
    actors.activeActors===ACTORS.activeCapacity&&
    actors.visualBindings===ACTORS.activeCapacity&&
    actors.activeChunks===WORLD.activeChunkCount;
  const actorPool=actors.poolCapacity===ACTORS.activeCapacity&&actors.poolReallocations===0;
  const movementBudget=actors.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame;
  const behaviorBudget=behavior.peakEvaluationsPerFrame<=ACTORS.behaviorBudgetPerFrame;
  const interactionBudget=behavior.interactions.peakCreatedPerFrame<=ACTORS.interactionBudgetPerFrame;
  const behaviorLod=evalAvg.NEAR>evalAvg.MID&&evalAvg.MID>evalAvg.FAR&&evalAvg.FAR>0;
  const idsClean=actors.duplicateIds===0;
  const storeBounded=actors.store.chunks<=ACTORS.storeChunkLimit;
  const worldSystems=
    world.chunks.active===WORLD.activeChunkCount&&
    world.chunks.poolSize===WORLD.activeChunkCount&&
    world.authoredLoaded===6;
  const broadphase=world.spatial.entries>0&&camera.candidates<world.spatial.entries;
  const cachePass=cache.hits>=2&&cache.misses===5&&cache.resolved===5;
  const cameraSafe=camera.terrainClearance>=.35;

  const pass=
    snap.characterLoaded&&snap.worldLoaded&&moved&&leftGround&&landed&&
    actorCounts&&actorPool&&movementBudget&&behaviorBudget&&interactionBudget&&behaviorLod&&
    playerAwareness&&avoidance&&socialStarted&&pairDuplicateSuppressed&&behaviorStatePreserved&&
    idsClean&&storeBounded&&worldSystems&&broadphase&&cachePass&&cameraSafe&&
    renderer.drawCalls<=LIMITS.drawCallsMax&&renderer.triangles<=LIMITS.trianglesMax&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:renderer.renderer,
    soldier:snap.characterLoaded?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    actors:actorCounts?'PASS':'FAIL',
    actorPool:actorPool?'PASS':'FAIL',
    movementBudget:movementBudget?'PASS':'FAIL',
    behaviorBudget:behaviorBudget?'PASS':'FAIL',
    interactionBudget:interactionBudget?'PASS':'FAIL',
    behaviorLod:behaviorLod?'PASS':'FAIL',
    playerAwareness:playerAwareness?'PASS':'FAIL',
    avoidance:avoidance?'PASS':'FAIL',
    social:socialStarted?'PASS':'FAIL',
    pairDedup:pairDuplicateSuppressed?'PASS':'FAIL',
    behaviorPersistence:behaviorStatePreserved?'PASS':'FAIL',
    ids:idsClean?'PASS':'FAIL',
    storeBounded:storeBounded?'PASS':'FAIL',
    world:worldSystems?'PASS':'FAIL',
    spatial:broadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    activeActors:String(actors.activeActors),
    movementPeak:String(actors.peakUpdatesPerFrame),
    behaviorPeak:String(behavior.peakEvaluationsPerFrame),
    interactionPeak:String(behavior.interactions.peakCreatedPerFrame),
    behaviorNearAvg:evalAvg.NEAR.toFixed(2),
    behaviorMidAvg:evalAvg.MID.toFixed(2),
    behaviorFarAvg:evalAvg.FAR.toFixed(2),
    awarenessTransitions:String(behavior.playerAwarenessTransitions),
    avoidanceTransitions:String(behavior.avoidanceTransitions),
    socialInteractions:String(behavior.interactions.totalCreated),
    restoredEntities:String(actors.restoredEntities),
    storeChunks:String(actors.store.chunks),
    drawCalls:String(renderer.drawCalls),
    triangles:String(renderer.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

window.__RAAI_TEST11F__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  actorState:id=>app.actors.stateSnapshot(id),
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
