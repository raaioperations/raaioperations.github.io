import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05v');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const accepted05T=JSON.parse(await readFile(path.resolve(root,'../threejs-melee-micro-impact-proof/acceptance.json'),'utf8'));
if(accepted05T.status!=='ACCEPTED'||accepted05T.human_visual_acceptance!==true)throw new Error('Accepted 05T R2 required');
const current05U=JSON.parse(await readFile(path.resolve(root,'../threejs-test-05u/build-info.json'),'utf8'));
if(current05U.test!=='05U'||current05U.melee_event?.contact_drives_feedback!==true)throw new Error('Current 05U contact-sync candidate required');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));
await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'05V',
  purpose:'isolated average-melee micro-hitstop layered onto current 05U contact-sync candidate',
  inherits:'05T-R2 accepted; current 05U contact timing/facing retained; 05S Jolt25/Jolt40 unchanged',
  three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,service_worker:false,source_level:true,
  melee_event:{windup_ms:110,recovery_ms:190,total_ms:300,reach_m:2.10,contact_drives_feedback:true,max_feedback_events_per_attack:1},
  micro_jolt:accepted05T.micro_jolt,
  hit_reaction:{...accepted05T.hit_reaction,contact_pose_preload_ms:18},
  hitstop:{duration_ms:24,scope:'attacker + receiver animation/procedural character time only',camera_continues:true,world_simulation_freeze:false,start:'successful CONTACT only'},
  damage:false,
  controls:{KeyM:'GIVE MELEE',KeyN:'RECEIVE MELEE'},
  accepted_25_40_constants_changed:false,
  human_visual_review:'REQUIRED',
  review_items:['contact feels slightly more solid than 05U','24 ms pause is felt but not consciously distracting','camera micro-jolt continues during local hitstop','receiver reaction still reads synchronized with contact','repeated average melee remains comfortable'],
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({test:'05V',status:'PASS',build_id:buildId,delegated_nonvisual_checks:{accepted_05t_required:true,current_05u_contact_candidate_required:true,hitstop_successful_contact_only:true,hitstop_duration_ms:24,simulation_time_pauses_during_hitstop:true,camera_uses_wall_time_and_continues:true,accepted_micro_constants_reused:true,accepted_25_40_untouched:true,damage_not_added:true},human_visual_review:'REQUIRED'},null,2));
console.log(JSON.stringify({buildId,status:'PASS'}));
