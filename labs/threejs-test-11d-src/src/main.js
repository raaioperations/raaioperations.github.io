import {GameApp} from './app/GameApp.js';
import {LIMITS,WORLD} from './config.js';

document.documentElement.dataset.runtimeError='0';
window.addEventListener('error',()=>document.documentElement.dataset.runtimeError='1');
window.addEventListener('unhandledrejection',()=>document.documentElement.dataset.runtimeError='1');

const host=document.getElementById('app');
const app=new GameApp(host).mount();
const smoke=new URLSearchParams(location.search).get('smoke')==='1';

async function runSmoke(){
  await app.ready;

  app.start('SMOKE');
  app.pause('SMOKE');

  const base=performance.now();
  const startPos=app.world.playerRoot.position.clone();

  // Movement + jump under the production systems.
  app.input.setTestIntent({moveY:1,sprint:true});
  for(let i=1;i<=75;i++)app.scheduler.step(base+i*16.6667);
  const moved=app.world.playerRoot.position.distanceTo(startPos)>3;

  app.input.setTestIntent({jump:true});
  app.scheduler.step(base+76*16.6667);
  const leftGround=!app.player.grounded;

  app.input.setTestIntent({moveY:0});
  for(let i=77;i<=205;i++)app.scheduler.step(base+i*16.6667);
  const landed=app.player.grounded&&app.player.snapshot().groundError<.02;

  // Force several deterministic chunk crossings without expanding the pool.
  const poolBefore=app.world.chunkManager.slots.length;
  const probes=[
    [WORLD.chunkSize*1.25,0],
    [WORLD.chunkSize*2.25,-WORLD.chunkSize*1.25],
    [-WORLD.chunkSize*1.25,WORLD.chunkSize*1.25],
    [WORLD.playerSpawnX,WORLD.playerSpawnZ]
  ];
  for(const [x,z] of probes){
    app.world.playerRoot.position.set(x,app.world.groundHeight(x,z),z);
    app.world.updateStreaming(app.world.playerRoot.position);
  }
  const poolAfter=app.world.chunkManager.slots.length;

  // Exercise deterministic quality transitions and restore.
  const initialTier=app.quality.tier;
  app.quality.setTierForTest('LOW');
  app.world.applyQualityTier();
  app.resize();
  const lowTier=app.world.chunkManager.snapshot().qualityTier==='LOW';
  app.quality.setTierForTest(initialTier);
  app.world.applyQualityTier();
  app.resize();

  app.input.setTestIntent({lookDX:20,lookDY:-5});
  app.scheduler.step(base+206*16.6667);

  const snap=app.snapshot();
  const chunks=snap.world.chunks;
  const spatial=snap.world.spatial;
  const cache=snap.assets;
  const r=snap.renderer;
  const camera=snap.camera;

  const poolBounded=poolBefore===WORLD.activeChunkCount&&poolAfter===WORLD.activeChunkCount&&chunks.poolSize===WORLD.activeChunkCount;
  const chunkPass=chunks.active===WORLD.activeChunkCount&&chunks.refreshes>=5&&chunks.reassignments>=WORLD.activeChunkCount*5;
  const spatialBroadphase=spatial.entries>0&&camera.candidates<spatial.entries;
  const cachePass=cache.hits>=2&&cache.misses===5&&cache.resolved===5;
  const qualityPass=lowTier&&app.quality.tier===initialTier&&app.quality.transitions>=2;
  const cameraSafe=camera.terrainClearance>=.35;
  const worldAssets=snap.world.authoredLoaded===6;

  const pass=
    snap.characterLoaded&&snap.worldLoaded&&
    moved&&leftGround&&landed&&
    poolBounded&&chunkPass&&spatialBroadphase&&cachePass&&qualityPass&&cameraSafe&&worldAssets&&
    r.drawCalls<=LIMITS.drawCallsMax&&r.triangles<=LIMITS.trianglesMax&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:r.renderer,
    soldier:snap.characterLoaded?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    chunks:chunkPass?'PASS':'FAIL',
    pool:poolBounded?'PASS':'FAIL',
    spatial:spatialBroadphase?'PASS':'FAIL',
    cache:cachePass?'PASS':'FAIL',
    quality:qualityPass?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    authored:String(snap.world.authoredLoaded),
    activeChunks:String(chunks.active),
    cacheHits:String(cache.hits),
    cacheMisses:String(cache.misses),
    spatialEntries:String(spatial.entries),
    cameraCandidates:String(camera.candidates),
    drawCalls:String(r.drawCalls),
    triangles:String(r.triangles),
    frameCount:String(snap.scheduler.frameCount)
  });
}

window.__RAAI_TEST11D__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  setTestIntent:intent=>app.input.setTestIntent(intent),
  setQualityTier:tier=>{
    const changed=app.quality.setTierForTest(tier);
    if(changed){app.world.applyQualityTier();app.resize();}
    return changed;
  },
  dispose:()=>app.dispose()
});

if(smoke)await runSmoke();
else app.ready.then(()=>app.start('BOOT'));

window.addEventListener('pagehide',()=>app.dispose(),{once:true});
