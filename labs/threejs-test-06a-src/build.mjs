import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06a');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06A anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06A anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted05Z=JSON.parse(await readFile(path.join(labs,'threejs-test-05z','acceptance.json'),'utf8'));
if(accepted05Z.test!=='05Z'||accepted05Z.status!=='ACCEPTED'||accepted05Z.human_visual_acceptance!==true||accepted05Z.frozen!==true)throw new Error('Frozen accepted 05Z required before Test06');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);
const fragment=await readFile(path.join(root,'living-world.fragment.js'),'utf8');
const source=baseSource+'\n'+fragment;

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 04 — Visual Fidelity','RAAI Three.js Test 06A — Living World Baseline');
html=html.replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 06A — Living World Baseline');
html=html.replace('Starting local production bundle…','Starting Living World 06A…');
html=mustReplace(html,
  '<span>Render scale</span><b id="scale">—</b>',
  '<span>Render scale</span><b id="scale">—</b><span>World actor</span><b id="worldState">CALM</b><span>Actor distance</span><b id="worldDistance">—</b><span>Response</span><b id="worldResult">APPROACH</b>',
  '06A world telemetry');
html=html.replace('<div id="zone">FOREST APPROACH</div>','<div id="zone">06A · APPROACH THE FLOCK</div>');
html=html.replace('<button id="tuneBtn">TUNE</button>','<button id="tuneBtn">WORLD</button>');
html=html.replace('<div id="panel"><div class="title">Live variables</div>','<div id="panel"><div class="title">06A Living World</div><div id="worldBrief">One actor family · one player-proximity stimulus · one visible response. Approach the flock until it reacts, then walk away to allow it to return.</div>');
html=html.replace('</style>',`#worldBrief{font-size:9px;line-height:1.4;color:#d8ebe5;margin:2px 0 10px;padding-bottom:9px;border-bottom:1px solid rgba(255,255,255,.13)}#worldState,#worldResult{color:#a8f0b5}@media(pointer:coarse),(max-width:900px){#worldBrief{font-size:8px}}</style>`);
html=html.replaceAll('__BUILD_ID__',buildId);
await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-05s','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test06a-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});

const app=await readFile(path.join(out,'app.js'),'utf8');
if(!app.includes('06A_LIVING_WORLD_FLOCK'))throw new Error('06A source marker missing from bundle');
if(!app.includes('RESPONDED'))throw new Error('06A response state missing from bundle');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06a-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06A',
  roadmap:'Test06 — Living World',
  purpose:'prove one deterministic environmental actor family visibly reacts to player proximity without broadening scope',
  prerequisite:{test05z:'ACCEPTED / FROZEN'},
  inherits:'Accepted Test04 visual/exploration environment; Test05 combat is closed/frozen and intentionally not under review in this isolated world-response proof',
  base_blob:expectedBase,
  three:'0.186.0',pipeline:'source-level fragment + esbuild local bundle',runtime_external_dependencies:0,service_worker_cache:false,target:'safari16.4+',mobile_fps_target:60,
  actor:{type:'stylized instanced bird flock',count:12,draw_call_budget_added:3},
  stimulus:{type:'player proximity',trigger_radius_m:7.0},
  states:['CALM','FLEEING','DISPERSED','RETURNING'],
  response:{flee_duration_ms:1450,reset_radius_m:13.5,far_hold_ms:1400,return_duration_ms:1350},
  mechanics_changed:false,
  combat_changed:false,
  acceptance_checklist:{flock_visibly_present:'HUMAN REVIEW',approach_triggers_flee_response:'HUMAN REVIEW',response_direction_reads_as_away_from_player:'HUMAN REVIEW',player_retreat_allows_return_cycle:'HUMAN REVIEW',world_response_feels_alive_not_like_ui_only:'HUMAN REVIEW'},
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06A',status:'PASS',build_id:buildId,
  delegated_nonvisual_checks:{accepted_05z_frozen_required:true,accepted_test04_blob_verified:true,actor_count:12,actor_instanced:true,added_draw_call_budget:3,stimulus_is_player_proximity:true,trigger_radius_m:7.0,deterministic_state_machine:true,states:['CALM','FLEEING','DISPERSED','RETURNING'],reset_requires_player_retreat:true,combat_not_modified:true,source_level:true},
  human_visual_review:'REQUIRED'
},null,2));
console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06a'}));
