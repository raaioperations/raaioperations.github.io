import { readFile, writeFile, mkdir, cp } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const labs=path.resolve(root,'..');
const base=path.join(labs,'threejs-test-05q');
const out=path.join(labs,'threejs-test-05r-v2');
const qAcceptance=JSON.parse(await readFile(path.join(base,'acceptance.json'),'utf8'));
const joltAcceptance=JSON.parse(await readFile(path.join(labs,'threejs-camera-jolt-proof','acceptance.json'),'utf8'));
if(qAcceptance.status!=='ACCEPTED'||qAcceptance.human_visual_acceptance!==true)throw new Error('Accepted 05Q required');
if(joltAcceptance.status!=='ACCEPTED'||joltAcceptance.human_visual_acceptance!==true)throw new Error('Accepted camera-jolt proof required');

await mkdir(out,{recursive:true});
await cp(base,out,{recursive:true,force:true});

let html=await readFile(path.join(out,'index.html'),'utf8');
html=html.replaceAll('Test 05Q — Enemy Telegraph Readability','Test 05R-v2 — Camera Jolt Integration');
html=html.replaceAll('RAAI Proof 05Q — Enemy Telegraph Readability','RAAI Proof 05R-v2 — Camera Jolt Integration');
html=html.replace('VISUAL REVIEW — watch the enemy cue from TELEGRAPH → ACTIVE → RECOVERY; judge readability, direction, impact, and clutter','CAMERA JOLT REVIEW — K / JOLT 25 and L / JOLT 40. Camera only; combat hits are not wired to jolt yet.');
await writeFile(path.join(out,'index.html'),html);

const info=JSON.parse(await readFile(path.join(out,'build-info.json'),'utf8'));
info.test='05R-v2';
info.focus='clean source-level camera-jolt integration on accepted 05Q baseline; camera only';
info.visual_runtime_revision='05R-v2 source-level CameraJolt';
info.camera_jolt={source_level:true,post_bundle_jolt_patching:false,combat_hit_wiring:false,extra_hit_vfx:false,controls:{KeyK:'JOLT 25',KeyL:'JOLT 40',buttons:true},demo_25:joltAcceptance.accepted_contract.demo_25,demo_40:joltAcceptance.accepted_contract.demo_40,decay_power:joltAcceptance.accepted_contract.decay_power,phase_multiplier:joltAcceptance.accepted_contract.phase_multiplier,hud_stationary:true,source_marker:'05R_V2_SOURCE_CAMERA_JOLT',prior_05r_r1_to_r6:'FAILED EXPERIMENTAL LINE — NOT INHERITED'};
info.acceptance_checklist={jolt_25_visible:'HUMAN REVIEW',jolt_40_visible_and_stronger:'HUMAN REVIEW',hud_stationary:'HUMAN REVIEW',accepted_05q_baseline_remains_readable:'HUMAN REVIEW'};
info.human_acceptance={accepted:false,status:'PENDING HUMAN CAMERA-JOLT REVIEW'};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test05r-v2-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);
console.log('Finalized Test 05R-v2 camera-jolt integration candidate.');
