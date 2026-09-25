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
  app.start('SMOKE');app.pause('SMOKE');
  const base=performance.now();
  const start=app.world.playerRoot.position.clone();
  app.input.setTestIntent({moveY:1,sprint:true});
  for(let i=1;i<=45;i++)app.scheduler.step(base+i*16.6667);
  const moved=app.world.playerRoot.position.distanceTo(start)>1;
  app.input.setTestIntent({jump:true});
  app.scheduler.step(base+46*16.6667);
  const leftGround=app.world.playerRoot.position.y>0;
  app.input.setTestIntent({moveY:0});
  for(let i=47;i<=150;i++)app.scheduler.step(base+i*16.6667);
  const landed=app.player.grounded&&Math.abs(app.world.playerRoot.position.y)<1e-4;
  app.input.setTestIntent({lookDX:30,lookDY:-10});
  app.scheduler.step(base+151*16.6667);
  const snap=app.snapshot(),r=snap.renderer,c=snap.camera;
  const pass=snap.assetLoaded&&moved&&leftGround&&landed&&c.actualDistance>=2.5&&c.actualDistance<=11&&r.drawCalls<=LIMITS.drawCallsMax&&r.triangles<=LIMITS.trianglesMax&&document.documentElement.dataset.runtimeError==='0';
  Object.assign(document.documentElement.dataset,{browserSmoke:pass?'PASS':'FAIL',renderer:r.renderer,frameCount:String(snap.scheduler.frameCount),drawCalls:String(r.drawCalls),triangles:String(r.triangles),soldier:snap.assetLoaded?'PASS':'FAIL',movement:moved?'PASS':'FAIL',jump:leftGround&&landed?'PASS':'FAIL',camera:c.actualDistance.toFixed(3)});
}

window.__RAAI_TEST11B__=Object.freeze({app,snapshot:()=>app.snapshot(),setTestIntent:i=>app.input.setTestIntent(i),dispose:()=>app.dispose()});
if(smoke)runSmoke();else app.ready.then(()=>app.start('BOOT'));
window.addEventListener('pagehide',()=>app.dispose(),{once:true});
