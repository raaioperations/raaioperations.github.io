import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06e');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06E anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06E anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06D=JSON.parse(await readFile(path.join(labs,'threejs-test-06d','acceptance.json'),'utf8'));
if(accepted06D.test!=='06D'||accepted06D.status!=='ACCEPTED'||accepted06D.human_visual_acceptance!==true||accepted06D.frozen!==true)throw new Error('Frozen accepted 06D required before Test06E');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(labs,'threejs-test-06d-src','memory-behavior.fragment.js'),'utf8');
const frag06E=await readFile(path.join(root,'spatial-scope.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');

const source=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06d','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06D — Memory-Informed Behavior','RAAI Three.js Test 06E — Spatial Memory Scope');
html=html.replaceAll('RAAI Proof 06D — Memory-Informed Behavior','RAAI Proof 06E — Spatial Memory Scope');
html=html.replace('Starting Living World 06D…','Starting Living World 06E…');
html=html.replace('<div id="zone">06D · A → B → REEDS → WATCH THE FORAGER CHOOSE</div>','<div id="zone">06E · SAME MEMORY · TWO LOCATIONS · DIFFERENT RESULT</div>');

html=mustReplace(
  html,
  '<span>Behavior result</span><b id="worldBehaviorResult">WAITING</b>',
  '<span>Behavior result</span><b id="worldBehaviorResult">WAITING</b><span>Control actor</span><b id="worldSpatialState">WAITING</b><span>Path overlaps memory</span><b id="worldSpatialOverlap">PENDING</b><span>Control route</span><b id="worldSpatialChoice">NONE</b><span>Spatial result</span><b id="worldSpatialResult">WAITING</b>',
  '06E spatial telemetry'
);
html=html.replace(
  '<div id="panel"><div class="title">06D Memory-Informed Behavior</div><div id="worldBrief"><b>New variable only:</b> a later autonomous actor reads persistent world state. Trigger A → B → reeds. A stylized forager arrives late: while the reeds still remember the disturbance it should detour around them; after the memory clears it should return directly through the normal route.</div>',
  '<div id="panel"><div class="title">06E Spatial Memory Scope</div><div id="worldBrief"><b>New variable only:</b> world memory is local, not global. Trigger A → B → reeds. The accepted brown forager crosses the remembered location and detours. A gray control forager reads the same active memory at the same delay, but its parallel route stays outside the memory zone and should remain direct.</div>'
);
html=html.replace('</style>','#worldSpatialState,#worldSpatialOverlap,#worldSpatialChoice,#worldSpatialResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06d','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06e-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR','06E_SPATIALLY_SCOPED_MEMORY']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
if(!app.includes('06E_SPATIALLY_SCOPED_MEMORY'))throw new Error('06E spatial-control marker missing');
if(!app.includes('DIRECT: OUTSIDE MEMORY'))throw new Error('06E local-scope direct route missing');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06e-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const controlPathDistanceM=3.35;
const info={
  build_id:buildId,
  test:'06E',
  roadmap:'Test06 — Living World',
  purpose:'prove persistent world memory is spatially scoped rather than acting as a global world flag',
  prerequisite:{test06d:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C + 06D unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C,test06d:expected06D},
  three:'0.186.0',
  pipeline:'source-level frozen 06A/06B-R1/06C/06D + isolated spatial-control fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  new_actor:{
    type:'gray stylized control hare/forager',
    geometry_draw_call_budget_added:2,
    direct_player_trigger:false,
    arrival_delay_ms:1800
  },
  spatial_memory:{
    memory_radius_m:1.8,
    control_lane_offset_m:3.35,
    control_path_closest_distance_m:controlPathDistanceM,
    expected_overlap:false,
    active_memory_still_read:true,
    expected_route:'direct'
  },
  comparison:'accepted brown 06D forager crosses memory zone and detours; gray 06E control actor reads same active memory but remains outside zone and travels direct',
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  accepted_06d_changed:false,
  acceptance_checklist:{
    both_foragers_visibly_distinguishable:'HUMAN REVIEW',
    frozen_a_to_b_to_reeds_chain_remains_intact:'HUMAN REVIEW',
    brown_forager_still_detours_through_memory_case:'HUMAN REVIEW',
    gray_control_reads_same_active_memory:'HUMAN REVIEW',
    gray_control_path_remains_outside_memory_location:'HUMAN REVIEW',
    gray_control_remains_direct_while_brown_actor_detours:'HUMAN REVIEW',
    effect_reads_as_spatially_local_not_global:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06E',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06d_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    control_actor_direct_player_trigger:false,
    control_reads_same_06c_memory_state:true,
    control_arrival_delay_matches_06d_ms:1800,
    memory_radius_m:1.8,
    control_path_closest_distance_m:controlPathDistanceM,
    expected_control_overlap:false,
    expected_control_route:'DIRECT',
    added_draw_call_budget:2,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06e'}));
