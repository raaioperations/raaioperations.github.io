import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-melee-micro-impact-proof');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

const accepted05S=JSON.parse(await readFile(path.resolve(root,'../threejs-test-05s/acceptance.json'),'utf8'));
if(accepted05S.status!=='ACCEPTED'||accepted05S.human_visual_acceptance!==true)throw new Error('Accepted 05S required');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile('index.template.html','utf8');
html=html.replaceAll('__BUILD_ID__',buildId);
await writeFile(path.join(out,'index.html'),html);
await copyFile(path.resolve(root,'../threejs-test-05s/assets/Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({entryPoints:['src/main.js'],bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'05T-preview',
  purpose:'isolated average-melee micro impact review before combat integration',
  inherits_acceptance:'05S accepted; 25/40 jolt contracts unchanged',
  three:'0.186.0',
  pipeline:'esbuild-local-bundle',
  runtime_external_dependencies:0,
  service_worker:false,
  source_level_camera_rig:true,
  authored_character_asset:'existing local Soldier.glb; Idle clip only for base pose',
  micro_jolt:{duration_ms:100,amp_x_px:3.2,amp_y_px:1.8,rotation_deg:.07,zoom:.002,decay_power:1.9,phase_multiplier:3.25},
  hit_reaction:{duration_ms:180,peak_ms:52,recoil_m:.10,lean_deg:4.5,attacker_lunge_m:.055,same_start_timestamp_as_camera_jolt:true},
  controls:{KeyM:'GIVE AVERAGE MELEE',KeyN:'RECEIVE AVERAGE MELEE'},
  accepted_25_40_constants_changed:false,
  combat_wiring:false,
  human_visual_review:'REQUIRED',
  review_items:['micro jolt is perceptible but very small','hit character reaction begins in sync with jolt','give and receive both feel connected','reaction recovers quickly without disrupting readability','effect is clearly below accepted Jolt 25'],
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
console.log(JSON.stringify({buildId,appBytes:js.size,status:'PASS'}));
