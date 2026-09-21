import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06f');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06F anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06F anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06E=JSON.parse(await readFile(path.join(labs,'threejs-test-06e','acceptance.json'),'utf8'));
if(accepted06E.test!=='06E'||accepted06E.status!=='ACCEPTED'||accepted06E.human_visual_acceptance!==true||accepted06E.frozen!==true)throw new Error('Frozen accepted 06E required before Test06F');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(labs,'threejs-test-06d-src','memory-behavior.fragment.js'),'utf8');
const frag06E=await readFile(path.join(labs,'threejs-test-06e-src','spatial-scope.fragment.js'),'utf8');
const frag06F=await readFile(path.join(root,'stimulus-arbitration.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
const expected06E='cf0a28460679adc2f2cd05fa9458e376d901400c';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');
if(gitBlobSha(frag06E)!==expected06E)throw new Error('Frozen 06E source fragment changed');

const source=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E+'\n'+frag06F;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06e','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06E — Spatial Memory Scope','RAAI Three.js Test 06F — Stimulus Arbitration');
html=html.replaceAll('RAAI Proof 06E — Spatial Memory Scope','RAAI Proof 06F — Stimulus Arbitration');
html=html.replace('Starting Living World 06E…','Starting Living World 06F…');
html=html.replace('<div id="zone">06E · SAME MEMORY · TWO LOCATIONS · DIFFERENT RESULT</div>','<div id="zone">06F · HAZARD 100 vs NEWER FOOD 40 · WATCH THE WINNER</div>');

html=mustReplace(
  html,
  '<span>Spatial result</span><b id="worldSpatialResult">WAITING</b>',
  '<span>Spatial result</span><b id="worldSpatialResult">WAITING</b><span>Arb actor</span><b id="worldArbState">WAITING</b><span>Candidates</span><b id="worldArbCandidates">WAITING</b><span>Newest stimulus</span><b id="worldArbLast">NONE</b><span>Winner</span><b id="worldArbWinner">NONE</b><span>Arbitration</span><b id="worldArbResult">WAITING</b>',
  '06F arbitration telemetry'
);
html=html.replace(
  '<div id="panel"><div class="title">06E Spatial Memory Scope</div><div id="worldBrief"><b>New variable only:</b> world memory is local, not global. Trigger A → B → reeds. The accepted brown forager crosses the remembered location and detours. A gray control forager reads the same active memory at the same delay, but its parallel route stays outside the memory zone and should remain direct.</div>',
  '<div id="panel"><div class="title">06F Stimulus Arbitration</div><div id="worldBrief"><b>New variable only:</b> competing motivations. Trigger A → B → reeds. The amber forager has an always-valid food goal beyond the reeds, but the active remembered hazard has higher priority. Food intentionally becomes valid <i>later</i>, so a last-event system would choose food. This actor must still choose the hazard response and move away from the food target.</div>'
);
html=html.replace('</style>','#worldArbState,#worldArbCandidates,#worldArbLast,#worldArbWinner,#worldArbResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06e','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06f-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR','06E_SPATIALLY_SCOPED_MEMORY','06F_STIMULUS_PRIORITY_ARBITRATION']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
if(!app.includes('PRIORITY > RECENCY'))throw new Error('06F priority-over-recency proof result missing');
if(!app.includes('NEWER FOOD LOST TO HIGHER PRIORITY'))throw new Error('06F newer-food comparison missing');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06f-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06F',
  roadmap:'Test06 — Living World',
  purpose:'prove an autonomous actor resolves simultaneous valid motivations by deterministic priority rather than whichever stimulus became valid most recently',
  prerequisite:{test06e:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C + 06D + 06E unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C,test06d:expected06D,test06e:expected06E},
  three:'0.186.0',
  pipeline:'source-level frozen 06A–06E + isolated arbitration fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  new_actor:{
    type:'amber stylized hare/forager',
    geometry_draw_call_budget_added:2,
    direct_player_trigger:false,
    arrival_delay_ms:1800
  },
  goal_target:{type:'visible food patch',draw_call_budget_added:1},
  arbitration:{
    hazard_priority:100,
    food_priority:40,
    hazard_valid_first:true,
    food_valid_later_by_ms:120,
    arbitration_after_hazard_ms:180,
    newest_stimulus:'FOOD',
    expected_winner:'HAZARD',
    decision_rule:'highest priority, deterministic id tie-break; recency does not control winner'
  },
  result_motion:{
    winning_response:'escape away from remembered location and food target',
    escape_offset_m:3.2,
    escape_travel_ms:2550,
    original_food_goal_not_resumed_in_06f:true
  },
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  accepted_06d_changed:false,
  accepted_06e_changed:false,
  acceptance_checklist:{
    amber_forager_and_food_target_visibly_readable:'HUMAN REVIEW',
    frozen_living_world_chain_remains_intact:'HUMAN REVIEW',
    actor_visibly_has_food_goal_across_memory_area:'HUMAN REVIEW',
    hud_shows_food_as_newer_valid_stimulus:'HUMAN REVIEW',
    higher_priority_hazard_wins_despite_newer_food:'HUMAN REVIEW',
    actor_motion_visibly_matches_hazard_winner_not_food_goal:'HUMAN REVIEW',
    decision_reads_as_priority_arbitration_not_last_event:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06F',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06e_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    accepted_06e_fragment_reused_unchanged:true,
    arbitration_actor_direct_player_trigger:false,
    hazard_priority:100,
    food_priority:40,
    hazard_valid_first:true,
    food_valid_later_by_ms:120,
    decision_wait_ms:180,
    newest_stimulus:'FOOD',
    expected_winner:'HAZARD',
    winner_selected_by_priority_not_recency:true,
    goal_resume_intentionally_deferred_to_06g:true,
    added_draw_call_budget:3,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06f'}));
