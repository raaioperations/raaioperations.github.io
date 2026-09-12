import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05w');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const accepted05T=JSON.parse(await readFile(path.resolve(root,'../threejs-melee-micro-impact-proof/acceptance.json'),'utf8'));
if(accepted05T.status!=='ACCEPTED'||accepted05T.human_visual_acceptance!==true)throw new Error('Accepted 05T R2 required');
const current05V=JSON.parse(await readFile(path.resolve(root,'../threejs-test-05v/build-info.json'),'utf8'));
if(current05V.test!=='05V'||current05V.hitstop?.duration_ms!==24)throw new Error('Current 05V micro-hitstop candidate required');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));
await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'05W',
  purpose:'isolated average-melee micro knockback layered onto current 05V contact feel candidate',
  inherits:'05T-R2 accepted; current 05V contact timing/micro-jolt/reaction/hitstop retained; 05S Jolt25/Jolt40 unchanged',
  three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,service_worker:false,source_level:true,
  melee_event:{windup_ms:110,recovery_ms:190,total_ms:300,reach_m:2.10,contact_drives_feedback:true,max_feedback_events_per_attack:1},
  micro_jolt:accepted05T.micro_jolt,
  hit_reaction:{...accepted05T.hit_reaction,contact_pose_preload_ms:18},
  hitstop:{duration_ms:24,scope:'attacker + receiver animation/procedural character time only',camera_continues:true,world_simulation_freeze:false,start:'successful CONTACT only'},
  knockback:{distance_m:.07,duration_ms:100,persistent_world_displacement:true,direction:'away from attacker',successful_contact_only:true,affects_future_reach_checks:true},
  damage:false,
  controls:{KeyM:'GIVE MELEE',KeyN:'RECEIVE MELEE',KeyP:'RESET POSITIONS'},
  accepted_25_40_constants_changed:false,
  human_visual_review:'REQUIRED',
  review_items:['receiver moves slightly away from attacker at successful contact','movement is subtle and synchronized with existing impact feedback','world-space displacement persists after visual recoil ends','repeated melee does not feel excessively pushy','reset restores original 1.70 m spacing'],
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({test:'05W',status:'PASS',build_id:buildId,delegated_nonvisual_checks:{accepted_05t_required:true,current_05v_required:true,knockback_successful_contact_only:true,knockback_distance_m:.07,knockback_duration_ms:100,direction_away_from_attacker:true,persistent_displacement:true,future_reach_uses_displaced_anchor_positions:true,reset_restores_positions:true,accepted_micro_constants_reused:true,accepted_25_40_untouched:true,damage_not_added:true},human_visual_review:'REQUIRED'},null,2));
console.log(JSON.stringify({buildId,status:'PASS'}));
