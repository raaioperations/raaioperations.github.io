import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {firefox} from 'playwright';

const here=path.dirname(fileURLToPath(import.meta.url));
const buildRoot=path.resolve(process.env.TEST_ROOT||path.join(here,'../threejs-test-11j'));
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.glb':'model/gltf-binary','.json':'application/json','.svg':'image/svg+xml'};
const launchOptions={headless:true,args:['--no-remote','--headless'],env:{...process.env,MOZ_HEADLESS:'1',MOZ_WEBRENDER:'1'},firefoxUserPrefs:{
  'webgl.disabled':false,'webgl.force-enabled':true,'webgl.allow-software':true,
  'gfx.webrender.all':true,'layers.acceleration.force-enabled':true,'webgl.min_capability_mode':false
}};

async function runOnce(){
  const browser=await firefox.launch(launchOptions);
  try{
    const page=await browser.newPage({viewport:{width:1280,height:800},deviceScaleFactor:1});
    const pageErrors=[];page.on('pageerror',error=>pageErrors.push(error));
    await page.route('http://test11j.local/**',async route=>{
      const pathname=new URL(route.request().url()).pathname;
      const relative=pathname==='/'?'index.html':decodeURIComponent(pathname.slice(1));
      const target=path.resolve(buildRoot,relative);
      if(!target.startsWith(buildRoot+path.sep)&&target!==path.join(buildRoot,'index.html'))return route.abort();
      try{const body=await readFile(target);await route.fulfill({status:200,body,contentType:mime[path.extname(target)]||'application/octet-stream'});}
      catch{await route.fulfill({status:404,body:'not found'});}
    });
    await page.goto('http://test11j.local/?smoke=1',{waitUntil:'domcontentloaded'});
    const started=Date.now();let state;
    while(Date.now()-started<60000){
      if(pageErrors.length)throw pageErrors[0];
      state=await page.evaluate(()=>({...document.documentElement.dataset}));
      if(['PASS','FAIL'].includes(state.browserSmoke))break;
      await page.waitForTimeout(250);
    }
    console.log(JSON.stringify(state,null,2));
    if(state.browserSmoke!=='PASS')throw new Error('Test11J lifecycle browser scenario failed');
    if(state.runtimeError!=='0')throw new Error('Browser runtime error detected');
    for(const [name,limit] of [['activeActors',27],['actorPoolReallocations',0]])if(Number(state[name])!==limit)throw new Error(`${name} expected ${limit}, got ${state[name]}`);
    for(const [name,limit] of [['movePeak',12],['behaviorPeak',6],['interactionPeak',1],['playerAttackPeak',1],['enemyEvalPeak',4],['enemyAttackPeak',1],['concurrentAttackersPeak',2],['drawCalls',86],['triangles',114000]])if(Number(state[name])>limit)throw new Error(`${name} exceeds ${limit}`);
    if(state.lifecycleScenario!=='PASS')throw new Error('lifecycle scenario result missing');
    await writeFile(path.join(buildRoot,'browser-report.json'),JSON.stringify({
      browser:'Firefox',browser_version:browser.version(),result:'PASS',renderer_mode:state.rendererFallback==='1'?'NO_WEBGL_LIFECYCLE_FALLBACK':'WebGL',
      lifecycle:{player_lives:Number(state.playerLives),player_downs:Number(state.playerDowns),player_respawns:Number(state.playerRespawns),
        respawn_state:state.respawnState,respawn_requests:1,rejected_respawn_requests:Number(state.rejectedRespawnRequests),
        stale_enemy_hits_rejected:Number(state.staleEnemyHitsRejected),last_respawn_frame:Number(state.lastRespawnFrame),
        health_after_respawn_and_retaliation:Number(state.playerHealth),state_after_respawn_and_retaliation:state.playerState},
      performance:{raf_loops:Number(state.rafLoops),active_actors:Number(state.activeActors),actor_pool_reallocations:Number(state.actorPoolReallocations),
        move_peak:Number(state.movePeak),behavior_peak:Number(state.behaviorPeak),interaction_peak:Number(state.interactionPeak),
        player_attack_peak:Number(state.playerAttackPeak),enemy_eval_peak:Number(state.enemyEvalPeak),enemy_attack_peak:Number(state.enemyAttackPeak),
        concurrent_attackers_peak:Number(state.concurrentAttackersPeak),draw_calls:Number(state.drawCalls),triangles:Number(state.triangles),runtime_errors:0},
      proofs:{damage:state.proofDamage,downed:state.proofDowned,early_respawn_rejected:state.proofEarlyReject,controls_locked:state.proofControls,
        availability:state.proofAvailable,restored:state.proofRestored,spawn:state.proofSpawn,camera:state.proofCamera,
        npc_persistence:state.proofNpcPersistence,post_respawn_combat:state.proofPostRespawnCombat}
    },null,2)+'\n');
    return state;
  }finally{await browser.close();}
}

let result,error;
for(let attempt=1;attempt<=4;attempt++){
  try{result=await runOnce();break;}
  catch(err){error=err;if(!/Error creating WebGL context/.test(err.message)||attempt===4)throw err;console.warn(`Firefox software WebGL unavailable on attempt ${attempt}; retrying.`);}
}
if(!result)throw error;
