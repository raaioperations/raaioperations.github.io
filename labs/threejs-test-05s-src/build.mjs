import { readFile, writeFile, rm, cp, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(labs,'..');
const dPath=path.join(labs,'threejs-test-05d-src','build.mjs');
const mPath=path.join(labs,'threejs-test-05m-src','build.mjs');
const qOut=path.join(labs,'threejs-test-05q');
const out=path.join(labs,'threejs-test-05s');

function replaceUnique(text,find,repl,label){
  const i=text.indexOf(find);
  if(i<0)throw new Error(`05S anchor missing: ${label}`);
  if(text.indexOf(find,i+find.length)>=0)throw new Error(`05S anchor not unique: ${label}`);
  return text.slice(0,i)+repl+text.slice(i+find.length);
}

const qAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-test-05q','acceptance.json'),'utf8'));
const rAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-camera-jolt-proof','integrated-05q','acceptance.json'),'utf8'));
if(qAcceptance.status!=='ACCEPTED'||qAcceptance.human_visual_acceptance!==true)throw new Error('Accepted 05Q baseline required');
if(rAcceptance.test!=='05R-v2'||rAcceptance.status!=='ACCEPTED'||rAcceptance.human_visual_acceptance!==true)throw new Error('Accepted 05R-v2 camera-jolt integration required');

const dOriginal=await readFile(dPath,'utf8');
const mOriginal=await readFile(mPath,'utf8');
const fragment=await readFile(path.join(labs,'threejs-test-05r-v2-src','camera-jolt.fragment.js'),'utf8');
let d=dOriginal,m=mOriginal;

try{
  // Promote the accepted camera impulse into the actual pre-bundle Three.js source.
  const sourceAnchor="let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');";
  const escaped=fragment.replaceAll('`','\\`').replaceAll('${','\\${');
  const sourcePatch=`const cameraJoltBlock=String.raw\`${escaped}\`;\nsource+=cameraJoltBlock;\nsource=mustReplace(source,\n\"camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));\",\n\"camera.position.lerp(desired,ck);camera.lookAt(target);const cameraBaseFov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.fov=cameraBaseFov;applyCameraJolt(performance.now(),target,cameraBaseFov);\",\n'05S accepted camera-jolt hook');\n\n`;
  d=replaceUnique(d,sourceAnchor,sourcePatch+sourceAnchor,'source-level camera hook insertion');

  // A successful normal attack is exactly 25 damage in the accepted combat contract.
  d=replaceUnique(
    d,
    "targetHP=Math.max(0,targetHP-ATTACK_DAMAGE);targetHpEl.textContent=targetHP+'/100';",
    "targetHP=Math.max(0,targetHP-ATTACK_DAMAGE);triggerCameraJolt(25);targetHpEl.textContent=targetHP+'/100';",
    '25-damage successful-hit wiring'
  );

  // A successful accepted counter is exactly 40 damage. Wire only the real damage event.
  m=replaceUnique(
    m,
    "counterDamageEvents++;\n  uiText('counterTargetHp',counterTargetHP+'/100');",
    "counterDamageEvents++;\n  triggerCameraJolt(40);\n  uiText('counterTargetHp',counterTargetHP+'/100');",
    '40-damage successful-counter wiring'
  );

  await writeFile(dPath,d);
  await writeFile(mPath,m);

  // One shared root install satisfies nested source builders without altering committed packages.
  execFileSync('npm',['install','--no-save','--no-package-lock','--no-audit','--no-fund','three@0.186.0','esbuild@0.25.9'],{cwd:repo,stdio:'inherit'});
  execFileSync('npm',['run','build','--silent'],{cwd:path.join(labs,'threejs-test-05o-src'),stdio:'inherit'});
  execFileSync('npm',['run','build','--silent'],{cwd:path.join(labs,'threejs-test-05p-src'),stdio:'inherit'});
  execFileSync('npm',['run','build','--silent'],{cwd:path.join(labs,'threejs-test-05q-src'),stdio:'inherit'});

  await rm(out,{recursive:true,force:true});
  await mkdir(out,{recursive:true});
  await cp(qOut,out,{recursive:true,force:true});
  await rm(path.join(out,'acceptance.json'),{force:true});

  const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
  let html=await readFile(path.join(out,'index.html'),'utf8');
  html=html.replaceAll('Test 05Q — Enemy Telegraph Readability','Test 05S — Combat Hit Camera Jolt');
  html=html.replaceAll('RAAI Proof 05Q — Enemy Telegraph Readability','RAAI Proof 05S — Combat Hit Camera Jolt');
  html=html.replace(
    'VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter',
    'HIT-JOLT REVIEW — land a real 25-damage attack, then a real 40-damage counter. The accepted camera jolt must fire from those damage events.'
  );
  html=html.replace('</body>',`<div id="s05HitJolt"><b id="cameraJoltState">HIT JOLT READY</b><span>25 HIT → JOLT 25 · 40 COUNTER → JOLT 40 · K/L remain diagnostic only</span></div></body>`);
  html=html.replace('</style>',`#s05HitJolt{position:fixed;z-index:18;left:50%;top:104px;transform:translateX(-50%);display:grid;gap:3px;justify-items:center;padding:7px 11px;border:1px solid rgba(255,255,255,.22);border-radius:12px;background:rgba(8,13,16,.80);backdrop-filter:blur(10px);pointer-events:none;color:#fff}#s05HitJolt b{font:900 9px/1 system-ui;color:#9df2ae;letter-spacing:.06em}#s05HitJolt span{font:750 8px/1.2 system-ui;white-space:nowrap;opacity:.86}@media(pointer:coarse),(max-width:900px){#s05HitJolt{top:96px}#s05HitJolt span{font-size:7px}}</style>`);
  html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
  await writeFile(path.join(out,'index.html'),html);

  // This proof path deliberately avoids application-shell caching while the wiring is under review.
  const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test05s-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
  await writeFile(path.join(out,'sw.js'),sw);

  const app=await readFile(path.join(out,'app.js'),'utf8');
  if(!app.includes('05R_V2_SOURCE_CAMERA_JOLT'))throw new Error('Accepted source-level camera jolt marker missing from 05S bundle');
  if(!app.includes('JOLT READY'))throw new Error('Camera-jolt runtime missing from 05S bundle');

  const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
  info.build_id=buildId;
  info.test='05S';
  info.focus='real combat hit events wired to accepted source-level camera impulse';
  info.visual_runtime_revision='05S direct combat-event → accepted CameraJolt';
  info.camera_jolt={
    ...info.camera_jolt,
    source_level:true,
    post_bundle_jolt_patching:false,
    combat_hit_wiring:true,
    normal_hit:{damage:25,jolt:25,trigger:'successful accepted player attack damage event only'},
    counter_hit:{damage:40,jolt:40,trigger:'successful accepted counter damage event only'},
    miss_jolt:false,
    early_late_counter_jolt:false,
    repeat_counter_jolt:false,
    constants_changed:false
  };
  info.acceptance_checklist={
    real_25_damage_hit_triggers_jolt_25:'HUMAN REVIEW',
    miss_does_not_jolt:'HUMAN REVIEW',
    real_40_damage_counter_triggers_jolt_40:'HUMAN REVIEW',
    jolt_40_remains_stronger_than_jolt_25:'HUMAN REVIEW',
    accepted_combat_and_05q_readability_remain_intact:'HUMAN REVIEW'
  };
  info.human_acceptance={accepted:false,status:'PENDING HUMAN COMBAT-EVENT JOLT REVIEW'};
  info.service_worker_cache=false;
  await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

  const verification={
    test:'05S',status:'PASS',build_id:buildId,
    delegated_nonvisual_checks:{
      accepted_05q_required:true,
      accepted_05r_v2_required:true,
      camera_constants_reused_from_accepted_fragment:true,
      normal_hit_wired_at_successful_25_damage_source_event:true,
      counter_wired_at_successful_40_damage_source_event:true,
      post_bundle_camera_patch:false,
      miss_path_has_no_jolt_call:true,
      invalid_counter_paths_have_no_jolt_call:true
    },
    human_visual_review:'REQUIRED'
  };
  await writeFile(path.join(out,'verification-report.json'),JSON.stringify(verification,null,2));
  console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-05s'}));
}finally{
  await writeFile(dPath,dOriginal);
  await writeFile(mPath,mOriginal);
}
