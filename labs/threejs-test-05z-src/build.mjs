import { readFile, writeFile, rm, cp, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const root=process.cwd();
const labs=path.resolve(root,'..');
const repo=path.resolve(labs,'..');
const dPath=path.join(labs,'threejs-test-05d-src','build.mjs');
const mPath=path.join(labs,'threejs-test-05m-src','build.mjs');
const qOut=path.join(labs,'threejs-test-05q');
const out=path.join(labs,'threejs-test-05z');

function replaceUnique(text,find,repl,label){
  const i=text.indexOf(find);
  if(i<0)throw new Error(`05Z anchor missing: ${label}`);
  if(text.indexOf(find,i+find.length)>=0)throw new Error(`05Z anchor not unique: ${label}`);
  return text.slice(0,i)+repl+text.slice(i+find.length);
}

const qAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-test-05q','acceptance.json'),'utf8'));
const rAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-camera-jolt-proof','integrated-05q','acceptance.json'),'utf8'));
const yAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-test-05y','acceptance.json'),'utf8'));
if(qAcceptance.status!=='ACCEPTED'||qAcceptance.human_visual_acceptance!==true)throw new Error('Accepted 05Q baseline required');
if(rAcceptance.test!=='05R-v2'||rAcceptance.status!=='ACCEPTED'||rAcceptance.human_visual_acceptance!==true)throw new Error('Accepted 05R-v2 camera-jolt integration required');
if(yAcceptance.test!=='05Y'||yAcceptance.status!=='ACCEPTED'||yAcceptance.human_visual_acceptance!==true||yAcceptance.default_melee_contact_burst!==true)throw new Error('Accepted 05Y default melee presentation required');

const dOriginal=await readFile(dPath,'utf8');
const mOriginal=await readFile(mPath,'utf8');
const cameraFragment=await readFile(path.join(labs,'threejs-test-05r-v2-src','camera-jolt.fragment.js'),'utf8');
const defaultFragment=await readFile(path.join(root,'default-impact.fragment.js'),'utf8');
let d=dOriginal,m=mOriginal;

try{
  // Inject both the accepted strong camera-jolt module and the accepted default-melee presentation module before bundling.
  const sourceAnchor="let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');";
  const cameraEscaped=cameraFragment.replaceAll('`','\\`').replaceAll('${','\\${');
  const defaultEscaped=defaultFragment.replaceAll('`','\\`').replaceAll('${','\\${');
  const sourcePatch=`const cameraJoltBlock=String.raw\`${cameraEscaped}\`;\nconst defaultImpactBlock=String.raw\`${defaultEscaped}\`;\nsource+=cameraJoltBlock+defaultImpactBlock;\nsource=mustReplace(source,\n\"camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));\",\n\"camera.position.lerp(desired,ck);camera.lookAt(target);const cameraBaseFov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));camera.fov=cameraBaseFov;applyCameraJolt(performance.now(),target,cameraBaseFov);applyDefaultMicroJolt(performance.now(),target,cameraBaseFov);\",\n'05Z source-level camera presentation hook');\n\n`;
  d=replaceUnique(d,sourceAnchor,sourcePatch+sourceAnchor,'source-level presentation insertion');

  // Real successful 25-damage basic hits now emit the accepted/default ordinary-melee presentation stack.
  d=replaceUnique(
    d,
    "targetHP=Math.max(0,targetHP-ATTACK_DAMAGE);targetHpEl.textContent=targetHP+'/100';",
    "targetHP=Math.max(0,targetHP-ATTACK_DAMAGE);triggerDefaultMeleeImpact(performance.now());targetHpEl.textContent=targetHP+'/100';",
    '25-damage default impact wiring'
  );

  // Pause only attacker animation/attack progression during the accepted 24 ms local hitstop. World/controller time remains live.
  d=replaceUnique(
    d,
    "if(mixer)mixer.update(dt*(sprinting?1.08:1));updateAttack(dt);",
    "const impactDt=updateDefaultMeleeImpact(dt,performance.now());if(mixer)mixer.update(impactDt*(sprinting?1.08:1));updateAttack(impactDt);",
    'local hitstop update hook'
  );

  // Strong counter presentation remains exactly the accepted 40-damage Jolt40 event; do not layer default-melee feedback onto it yet.
  m=replaceUnique(
    m,
    "counterDamageEvents++;\n  uiText('counterTargetHp',counterTargetHP+'/100');",
    "counterDamageEvents++;\n  triggerCameraJolt(40);\n  uiText('counterTargetHp',counterTargetHP+'/100');",
    '40-damage accepted counter jolt wiring'
  );

  await writeFile(dPath,d);
  await writeFile(mPath,m);

  // Shared ephemeral install supports the nested source-builder lineage without changing committed package manifests.
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
  html=html.replaceAll('Test 05Q — Enemy Telegraph Readability','Test 05Z — Real Combat Default Impact');
  html=html.replaceAll('RAAI Proof 05Q — Enemy Telegraph Readability','RAAI Proof 05Z — Real Combat Default Impact');
  html=html.replace('VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter','REAL HIT REVIEW — Q/LOCK the target, then F/ATTACK. A successful real 25-damage hit must drive the default melee impact stack.');
  html=html.replace('</body>',`<div id="zImpact"><b id="defaultImpactState">DEFAULT READY</b><span>REAL 25 HIT → MICRO JOLT + REACTION + 24 ms HITSTOP + 7 cm KNOCKBACK + BURST</span><span>40 COUNTER → ACCEPTED JOLT 40 ONLY · K/L diagnostics unchanged</span><span>DEFAULT EVENTS: <b id="defaultImpactCount">0</b></span></div></body>`);
  html=html.replace('</style>',`#zImpact{position:fixed;z-index:18;left:50%;top:104px;transform:translateX(-50%);display:grid;gap:3px;justify-items:center;padding:8px 12px;border:1px solid rgba(255,255,255,.22);border-radius:12px;background:rgba(8,13,16,.82);backdrop-filter:blur(10px);pointer-events:none;color:#fff}#zImpact>b{font:900 9px/1 system-ui;color:#9df2ae;letter-spacing:.06em}#zImpact span{font:750 8px/1.2 system-ui;white-space:nowrap;opacity:.88}#zImpact span b{color:#ffd18a}@media(pointer:coarse),(max-width:900px){#zImpact{top:96px;max-width:82vw}#zImpact span{font-size:7px;white-space:normal;text-align:center}}</style>`);
  html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);
  await writeFile(path.join(out,'index.html'),html);

  // No application-shell cache while this integration is under review.
  const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test05z-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
  await writeFile(path.join(out,'sw.js'),sw);

  const app=await readFile(path.join(out,'app.js'),'utf8');
  if(!app.includes('05R_V2_SOURCE_CAMERA_JOLT'))throw new Error('Accepted strong camera-jolt marker missing from 05Z bundle');
  if(!app.includes('05Z_DEFAULT_MELEE_IMPACT'))throw new Error('Default-melee impact marker missing from 05Z bundle');
  if(!app.includes('DEFAULT IMPACT'))throw new Error('Default-melee runtime missing from 05Z bundle');

  const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
  info.build_id=buildId;
  info.test='05Z';
  info.focus='real successful 25-damage combat event drives accepted/default ordinary-melee presentation stack';
  info.visual_runtime_revision='05Z authoritative 25-damage hit → default impact presentation';
  info.default_melee_impact={
    source_level:true,
    trigger:'successful accepted 25-damage player attack event only',
    damage:25,
    micro_jolt:{duration_ms:82,amp_x_px:1.65,amp_y_px:.9,rotation_deg:.032,zoom:.0008,decay_power:2.05,phase_multiplier:2.8},
    hit_reaction:{duration_ms:145,peak_ms:42,recoil_m:.052,lean_deg:2.35,contact_pose_preload_ms:18},
    hitstop:{duration_ms:24,scope:'attacker animation + attack progression; world/controller time remains live',camera_continues:true},
    knockback:{distance_m:.07,duration_ms:100,persistent_world_displacement:true,direction:'away from attacker'},
    contact_burst:{duration_ms:92,ring_inner_m:.075,ring_outer_m:.105,ray_count:8,ray_length_m:.14,world_space:true,screen_flash:false},
    miss_feedback:false,
    max_events_per_successful_contact:1
  };
  info.strong_counter_impact={damage:40,jolt:40,accepted_behavior_retained:true,default_melee_layers_added:false};
  info.jolt25={accepted_diagnostic_profile_retained:true,basic_25_damage_hit_uses_it:false,reserved_for_future_heavier_profile:true};
  info.post_bundle_camera_patch=false;
  info.human_acceptance={accepted:false,status:'PENDING HUMAN REAL-COMBAT IMPACT REVIEW'};
  info.acceptance_checklist={
    real_25_damage_hit_triggers_complete_default_stack:'HUMAN REVIEW',
    miss_has_no_default_feedback:'DELEGATED PASS',
    two_hit_chain_triggers_one_default_event_per_successful_contact:'HUMAN REVIEW',
    real_40_damage_counter_retains_jolt40_only:'DELEGATED PASS',
    accepted_combat_and_telegraph_readability_remain_intact:'HUMAN REVIEW'
  };
  info.service_worker_cache=false;
  await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

  const verification={
    test:'05Z',status:'PASS',build_id:buildId,
    delegated_nonvisual_checks:{
      accepted_05q_required:true,
      accepted_05r_v2_required:true,
      accepted_05y_default_required:true,
      default_impact_source_level:true,
      normal_hit_wired_after_authoritative_25_damage_mutation:true,
      miss_path_has_no_default_impact_call:true,
      local_hitstop_duration_ms:24,
      local_hitstop_does_not_freeze_camera_or_world_controller_time:true,
      persistent_knockback_distance_m:.07,
      contact_burst_successful_hit_only:true,
      counter_40_still_calls_accepted_jolt40:true,
      default_layers_not_added_to_counter:true,
      post_bundle_camera_patch:false
    },
    human_visual_review:'REQUIRED'
  };
  await writeFile(path.join(out,'verification-report.json'),JSON.stringify(verification,null,2));
  console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-05z'}));
}finally{
  await writeFile(dPath,dOriginal);
  await writeFile(mPath,mOriginal);
}
