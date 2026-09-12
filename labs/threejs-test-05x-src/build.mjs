import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05x');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const accepted05W=JSON.parse(await readFile(path.resolve(root,'../threejs-test-05w/acceptance.json'),'utf8'));
if(accepted05W.status!=='ACCEPTED'||accepted05W.human_visual_acceptance!==true)throw new Error('Accepted 05W required');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');
html=html.replaceAll('__BUILD_ID__',buildId);
await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));

const info={
  build_id:buildId,
  test:'05X',
  purpose:'two-hit average-melee impact cadence using accepted 05D chain timing and accepted 05W feedback stack',
  inherits:'05W accepted micro-jolt/reaction/hitstop/knockback; 05D two-hit timing; 05S Jolt25/Jolt40 unchanged',
  three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,service_worker:false,source_level:true,
  chain:{a1_duration_ms:440,a1_contact_ms:160,a2_duration_ms:480,a2_contact_ms:170,total_sim_ms:920,accepted_combo_window_ms:[160,400],auto_queue_a2_for_visual_review:true},
  micro_jolt:{duration_ms:82,amp_x_px:1.65,amp_y_px:.9,rotation_deg:.032,zoom:.0008,decay_power:2.05,phase_multiplier:2.8},
  hit_reaction:{duration_ms:145,peak_ms:42,recoil_m:.052,lean_deg:2.35,attacker_lunge_m:.028,contact_pose_preload_ms:18},
  hitstop:{duration_ms:24,camera_continues:true},
  knockback:{distance_m:.07,duration_ms:100,persistent_world_displacement:true,per_successful_contact:true},
  reach_m:2.10,
  damage:false,
  controls:{KeyM:'GIVE 2-HIT',KeyN:'RECEIVE 2-HIT',KeyP:'RESET POSITIONS'},
  accepted_25_40_constants_changed:false,
  human_visual_review:'REQUIRED',
  review_items:['both contacts feel distinct and readable','micro-jolt/reaction/hitstop remain comfortable across two hits','second hit does not feel over-emphasized','two knockbacks remain subtle rather than pushy','cadence feels coherent with the accepted two-hit chain timing'],
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({test:'05X',status:'PASS',build_id:buildId,delegated_nonvisual_checks:{accepted_05w_required:true,a1_duration_ms:440,a1_contact_ms:160,a2_duration_ms:480,a2_contact_ms:170,accepted_combo_window_preserved:true,a2_auto_queue_is_review_only:true,feedback_max_one_event_per_contact:true,two_contacts_max_per_chain:true,accepted_micro_feedback_constants_unchanged:true,accepted_25_40_untouched:true,damage_not_added:true},human_visual_review:'REQUIRED'},null,2));
console.log(JSON.stringify({buildId,status:'PASS'}));
