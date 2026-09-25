import {GameApp} from './app/GameApp.js';
import {ACTORS,LIMITS,WORLD} from './config.js';

document.documentElement.dataset.runtimeError='0';
window.addEventListener('error',()=>document.documentElement.dataset.runtimeError='1');
window.addEventListener('unhandledrejection',()=>document.documentElement.dataset.runtimeError='1');

const host=document.getElementById('app');
const app=new GameApp(host).mount();
const smoke=new URLSearchParams(location.search).get('smoke')==='1';

function samePersistentState(a,b){
  return !!a&&!!b&&
    a.id===b.id&&
    a.x===b.x&&
    a.z===b.z&&
    a.heading===b.heading&&
    a.speed===b.speed&&
    a.phase===b.phase&&
    a.ticks===b.ticks;
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

  // Build enough deterministic simulation history to prove LOD frequencies.
  for(let i=211;i<=570;i++)app.scheduler.step(base+i*16.6667);

  const beforePersistence=app.actors.snapshot();
  const nearDescriptor=app.world.chunkManager.activeDescriptors().find(d=>d.lod==='NEAR');
  const nearIds=app.actors.store.getChunk(nearDescriptor.cx,nearDescriptor.cz);
  const persistentId=nearIds[0];
  const persistentBefore=app.actors.stateSnapshot(persistentId);

  const originalX=app.world.playerRoot.position.x;
  const originalZ=app.world.playerRoot.position.z;

  // Remove the actor's home chunk from the active 3x3 window.
  const farX=originalX+WORLD.chunkSize*4;
  const farZ=originalZ+WORLD.chunkSize*3;
  app.world.playerRoot.position.set(farX,app.world.groundHeight(farX,farZ),farZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);
  const inactive=!app.actors.activeIds.includes(persistentId);
  const dormantState=app.actors.stateSnapshot(persistentId);

  // Visit another window, then return. The same state object data must restore.
  const fartherX=originalX-WORLD.chunkSize*3;
  const fartherZ=originalZ+WORLD.chunkSize*4;
  app.world.playerRoot.position.set(fartherX,app.world.groundHeight(fartherX,fartherZ),fartherZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);

  app.world.playerRoot.position.set(originalX,app.world.groundHeight(originalX,originalZ),originalZ);
  app.world.updateStreaming(app.world.playerRoot.position);
  app.actors.syncPopulation(app.scheduler.frameCount);

  const persistentAfter=app.actors.stateSnapshot(persistentId);
  const restored=app.actors.activeIds.includes(persistentId);
  const statePreserved=samePersistentState(persistentBefore,dormantState)&&samePersistentState(persistentBefore,persistentAfter);

  app.input.setTestIntent({lookDX:18,lookDY:-4});
  app.scheduler.step(base+571*16.6667);

  const snap=app.snapshot();
  const actors=snap.actors;
  const averages=actors.averageUpdatesByLod;
  const world=snap.world;
  const cache=snap.assets;
  const renderer=snap.renderer;
  const camera=snap.camera;

  const actorCounts=
    actors.activeActors===ACTORS.activeCapacity&&
    actors.visualBindings===ACTORS.activeCapacity&&
    actors.activeChunks===WORLD.activeChunkCount;

  const actorPool=actors.poolCapacity===ACTORS.activeCapacity&&actors.poolReallocations===0;
  const budget=actors.peakUpdatesPerFrame<=ACTORS.updateBudgetPerFrame;
  const simLod=
    averages.NEAR>averages.MID&&
    averages.MID>averages.FAR&&
    averages.FAR>0;
  const persistence=
    inactive&&restored&&statePreserved&&
    actors.reactivations>=1&&actors.restoredEntities>=ACTORS.perChunk;
  const storeBounded=actors.store.chunks<=ACTORS.storeChunkLimit;
  const idsClean=actors.duplicateIds===0;
  const worldSystems=
    world.chunks.active===WORLD.activeChunkCount&&
    world.chunks.poolSize===WORLD.activeChunkCount&&
    world.authoredLoaded===6;
  const broadphase=world.spatial.entries>0&&camera.candidates<world.spatial.entries;
  const cachePass=cache.hits>=2&&cache.misses===5&&cache.resolved===5;
  const cameraSafe=camera.terrainClearance>=.35;

  const pass=
    snap.characterLoaded&&snap.worldLoaded&&moved&&leftGround&&landed&&
    actorCounts&&actorPool&&budget&&simLod&&persistence&&storeBounded&&idsClean&&
    worldSystems&&broadphase&&cachePass&&cameraSafe&&
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
    actorBudget:budget?'PASS':'FAIL',
    simLod:simLod?'PASS':'FAIL',
    persistence:persistence?'PASS':'FAIL',
    statePreserved:statePreserved?'PASS':'FAIL',
    storeBounded:storeBounded?'PASS':'FAIL',
    ids:idsClean?'PASS':'FAIL',
    world:worldSystems?'PASS':'FAIL',
    spatial:broadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    activeActors:String(actors.activeActors),
    actorPeakUpdates:String(actors.peakUpdatesPerFrame),
    actorBudgetLimit:String(actors.updateBudget),
    actorNearAvg:averages.NEAR.toFixed(2),
    actorMidAvg:averages.MID.toFixed(2),
    actorFarAvg:averages.FAR.toFixed(2),
    reactivations:String(actors.reactivations),
    restoredEntities:String(actors.restoredEntities),
    storeChunks:String(actors.store.chunks),
    storeEntities:String(actors.store.entities),
    drawCalls:String(renderer.drawCalls),
    triangles:String(renderer.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

window.__RAAI_TEST11E__=Object.freeze({
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
