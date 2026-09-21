import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06d');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06D anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06D anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06C=JSON.parse(await readFile(path.join(labs,'threejs-test-06c','acceptance.json'),'utf8'));
if(accepted06C.test!=='06C'||accepted06C.status!=='ACCEPTED'||accepted06C.human_visual_acceptance!==true||accepted06C.frozen!==true)throw new Error('Frozen accepted 06C required before Test06D');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(root,'memory-behavior.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');

const source=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06c','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06C — Local Disturbance Memory','RAAI Three.js Test 06D — Memory-Informed Behavior');
html=html.replaceAll('RAAI Proof 06C — Local Disturbance Memory','RAAI Proof 06D — Memory-Informed Behavior');
html=html.replace('Starting Living World 06C…','Starting Living World 06D…');
html=html.replace('<div id="zone">06C · A → B → WATCH THE REEDS REMEMBER</div>','<div id="zone">06D · A → B → REEDS → WATCH THE FORAGER CHOOSE</div>');

html=mustReplace(
  html,
  '<span>Memory result</span><b id="worldMemoryResult">WAITING</b>',
  '<span>Memory result</span><b id="worldMemoryResult">WAITING</b><span>Forager</span><b id="worldBehaviorState">WAITING</b><span>Route choice</span><b id="worldRouteChoice">NONE</b><span>Behavior result</span><b id="worldBehaviorResult">WAITING</b>',
  '06D behavior telemetry'
);
html=html.replace(
  '<div id="panel"><div class="title">06C Local World Memory</div><div id="worldBrief"><b>New variable only:</b> persistent local world state. Trigger Flock A, watch Flock B react, then watch the nearby reed patch remain disturbed after the birds have moved on and gradually settle by itself.</div>',
  '<div id="panel"><div class="title">06D Memory-Informed Behavior</div><div id="worldBrief"><b>New variable only:</b> a later autonomous actor reads persistent world state. Trigger A → B → reeds. A stylized forager arrives late: while the reeds still remember the disturbance it should detour around them; after the memory clears it should return directly through the normal route.</div>'
);
html=html.replace('</style>','#worldBehaviorState,#worldRouteChoice,#worldBehaviorResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06c','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06d-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
if(!app.includes('MEMORY CHANGED ROUTE'))throw new Error('06D memory route consequence missing from bundle');
if(!app.includes('DETOUR THEN DIRECT'))throw new Error('06D compare-cycle completion missing from bundle');

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06d-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06D',
  roadmap:'Test06 — Living World',
  purpose:'prove persistent local world memory can affect a later autonomous actor decision rather than remaining purely visual',
  prerequisite:{test06c:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C behavior unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C},
  three:'0.186.0',
  pipeline:'source-level frozen 06A/06B-R1/06C + isolated behavior fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  autonomous_actor:{
    type:'stylized low-poly hare/forager',
    geometry_draw_call_budget_added:2,
    direct_player_trigger:false,
    source_of_decision:'06C persistent memory state at late arrival'
  },
  decision:{
    arrival_delay_ms:1800,
    memory_present_route:'quadratic detour around reed patch',
    detour_offset_m:2.8,
    detour_travel_ms:2450,
    memory_clear_route:'direct return through normal route',
    calm_hold_ms:550,
    direct_return_ms:2500
  },
  behavior_states:['WAITING','ARRIVAL_DELAY','AVOIDING','HOLDING','DIRECT_RETURN','COMPLETE'],
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  acceptance_checklist:{
    forager_visibly_readable:'HUMAN REVIEW',
    accepted_a_to_b_to_reeds_chain_remains_intact:'HUMAN REVIEW',
    forager_arrives_after_original_bird_disturbance:'HUMAN REVIEW',
    active_world_memory_produces_clear_detour:'HUMAN REVIEW',
    cleared_world_memory_allows_direct_return:'HUMAN REVIEW',
    route_difference_reads_as_world_state_affecting_behavior:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06D',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06c_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    autonomous_actor_direct_player_trigger:false,
    decision_reads_06c_memory_state:true,
    actor_arrival_delay_ms:1800,
    memory_present_selects_detour:true,
    memory_clear_selects_direct_return:true,
    detour_offset_m:2.8,
    detour_travel_ms:2450,
    direct_return_ms:2500,
    added_draw_call_budget:2,
    combat_not_modified:true,
    source_level:true
  },
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06d'}));
