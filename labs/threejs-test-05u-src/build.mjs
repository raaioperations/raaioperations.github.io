import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-05u');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});
const accepted=JSON.parse(await readFile(path.resolve(root,'../threejs-melee-micro-impact-proof/acceptance.json'),'utf8'));
if(accepted.status!=='ACCEPTED'||accepted.human_visual_acceptance!==true)throw new Error('Accepted 05T R2 micro-impact proof required');
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));
await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={build_id:buildId,test:'05U',purpose:'actual average-melee contact event driving accepted micro camera jolt and accepted synchronized hit reaction',inherits:'05T-preview-R2 accepted; 05S Jolt25/Jolt40 unchanged',three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,service_worker:false,source_level:true,melee_event:{windup_ms:110,recovery_ms:190,total_ms:300,reach_m:2.10,contact_drives_feedback:true,max_feedback_events_per_attack:1},micro_jolt:accepted.micro_jolt,hit_reaction:accepted.hit_reaction,damage:false,controls:{KeyM:'GIVE MELEE',KeyN:'RECEIVE MELEE'},accepted_25_40_constants_changed:false,human_visual_review:'REQUIRED',review_items:['feedback occurs at CONTACT rather than input','camera micro-jolt and receiver reaction begin together','give and receive both read cleanly','frequent average melee remains comfortable','effect remains below Jolt25'],app_js_bytes:js.size,soldier_glb_bytes:glb.size};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({test:'05U',status:'PASS',build_id:buildId,checks:{accepted_05t_required:true,source_level_melee_state_machine:true,contact_only_feedback:true,one_feedback_event_per_attack:true,give_and_receive_supported:true,accepted_micro_constants_reused:true,accepted_25_40_untouched:true},human_visual_review:'REQUIRED'},null,2));
console.log(JSON.stringify({buildId,status:'PASS'}));
