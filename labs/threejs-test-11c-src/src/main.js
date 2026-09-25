import {GameApp} from './app/GameApp.js';
import {LIMITS} from './config.js';

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
  const start=app.world.playerRoot.position.clone();

  app.input.setTestIntent({moveY:1,sprint:true});
  for(let i=1;i<=60;i++)app.scheduler.step(base+i*16.6667);
  const moved=app.world.playerRoot.position.distanceTo(start)>2;

  app.input.setTestIntent({jump:true});
  app.scheduler.step(base+61*16.6667);
  const leftGround=app.player.grounded===false&&app.world.playerRoot.position.y>app.world.groundHeight(app.world.playerRoot.position.x,app.world.playerRoot.position.z);

  app.input.setTestIntent({moveY:0});
  for(let i=62;i<=190;i++)app.scheduler.step(base+i*16.6667);

  app.input.setTestIntent({lookDX:26,lookDY:-8});
  app.scheduler.step(base+191*16.6667);

  const snap=app.snapshot();
  const r=snap.renderer,c=snap.camera,p=snap.player,w=snap.world;
  const landed=p.grounded&&p.groundError<.02;
  const terrainVaried=(w.terrainMaxY-w.terrainMinY)>.5;
  const worldReady=w.authoredLoaded===4&&w.trees>=24&&w.shrubs>=36&&w.water&&terrainVaried;
  const cameraSafe=c.terrainClearance>=.35&&c.actualDistance>=2.5&&c.actualDistance<=11.5;

  const pass=
    snap.characterLoaded&&snap.worldLoaded&&
    moved&&leftGround&&landed&&worldReady&&cameraSafe&&
    r.drawCalls<=LIMITS.drawCallsMax&&
    r.triangles<=LIMITS.trianglesMax&&
    document.documentElement.dataset.runtimeError==='0';

  Object.assign(document.documentElement.dataset,{
    browserSmoke:pass?'PASS':'FAIL',
    renderer:r.renderer,
    frameCount:String(snap.scheduler.frameCount),
    drawCalls:String(r.drawCalls),
    triangles:String(r.triangles),
    soldier:snap.characterLoaded?'PASS':'FAIL',
    world:snap.worldLoaded&&worldReady?'PASS':'FAIL',
    terrain:terrainVaried?'PASS':'FAIL',
    vegetation:w.trees>=24&&w.shrubs>=36?'PASS':'FAIL',
    water:w.water?'PASS':'FAIL',
    movement:moved?'PASS':'FAIL',
    jump:leftGround&&landed?'PASS':'FAIL',
    camera:cameraSafe?'PASS':'FAIL',
    authored:String(w.authoredLoaded)
  });
}

window.__RAAI_TEST11C__=Object.freeze({
  app,
  snapshot:()=>app.snapshot(),
  setTestIntent:intent=>app.input.setTestIntent(intent),
  dispose:()=>app.dispose()
});

if(smoke)await runSmoke();
else app.ready.then(()=>app.start('BOOT'));

window.addEventListener('pagehide',()=>app.dispose(),{once:true});
