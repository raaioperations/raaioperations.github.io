import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runVerticalSliceProof} from './proof.mjs';
import {make07DHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-07d');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('07D build proof failed: '+message);
};

const accepted07C=JSON.parse(await readFile(path.join(labs,'threejs-test-07c','acceptance.json'),'utf8'));
assert(accepted07C.test==='07C'&&accepted07C.status==='ACCEPTED'&&accepted07C.frozen===true,'07C must be accepted/frozen');
assert(accepted07C.build_id==='20260921062601','expected frozen 07C build');
assert(accepted07C.next_milestone_authorized===true,'07D authorization required');

const source07C=await readFile(path.join(labs,'threejs-test-07c','source-main.js'),'utf8');
const index07C=await readFile(path.join(labs,'threejs-test-07c','index.html'),'utf8');
const expectedSource07C='97541df4c34c952a5db42bdcc53e730aa45ac170';
const expectedIndex07C='c9bb1db3c79c5db231464cae0d93adb2ddf4c8d9';
assert(blobSha(source07C)===expectedSource07C,'frozen 07C source-main changed');
assert(blobSha(index07C)===expectedIndex07C,'frozen 07C index changed');

const frozenModules={
  living:'8ff673728f18546168e339d888889bfbbc6b8828',
  stream:'af77396834311e0e5b328c7c4438317202613466',
  lod:'2458e99eec9988067a9c3a62bd1c6b88ea1ab4e8',
  prodIndex:'836bf853a996dc7fbdb968aa9b12e09e32594dac',
  actorCore:'37fa1ef67038f9f14e289814eb2d07b07259b74f',
  actorAdapter:'c31460159e3d2a581cb113229b8bb2eebd70cce1',
  actorIndex:'4c20fecc38af942041b733eefdaff5032bbf4451',
  regionCore:'424632248ab868c931174b30821cb45ca9f2fde0',
  regionIndex:'4ae232115c3d90e5185ac2889a02f0a2dd856d5f',
  regionFragment:'c27735524d33e0a08eada1e87fd0d442b3d2998e'
};

for(const [rel,sha] of [
  ['production/living-world-kernel.js',frozenModules.living],
  ['production/stream-cell-core.js',frozenModules.stream],
  ['production/simulation-lod-core.js',frozenModules.lod],
  ['production/index.js',frozenModules.prodIndex],
  ['production/actors/actor-pipeline-core.js',frozenModules.actorCore],
  ['production/actors/three-actor-adapter.js',frozenModules.actorAdapter],
  ['production/actors/index.js',frozenModules.actorIndex],
  ['production/regions/production-region-core.js',frozenModules.regionCore],
  ['production/regions/index.js',frozenModules.regionIndex]
]){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozenRegionFragment=await readFile(path.join(labs,'threejs-test-07c-src','streamed-production-region.fragment.js'),'utf8');
assert(blobSha(frozenRegionFragment)===frozenModules.regionFragment,'frozen 07C runtime fragment changed');

const verticalCore=await readFile(path.join(root,'production','vertical-slice','production-vertical-slice-core.js'),'utf8');
const verticalIndex=await readFile(path.join(root,'production','vertical-slice','index.js'),'utf8');
const frag=await readFile(path.join(root,'production-vertical-slice.fragment.js'),'utf8');

assert(!/from\s+['"]three(?:\/|['"])/.test(verticalCore)&&!/\bTHREE\s*\./.test(verticalCore),'vertical-slice core must be Three-independent');
assert(!/\bdocument\s*\./.test(verticalCore)&&!/\bwindow\s*\./.test(verticalCore)&&!/\bglobalThis\s*\./.test(verticalCore),'vertical-slice core must be runtime-global independent');
assert(/ProductionVerticalSliceCoordinator/.test(verticalIndex),'vertical-slice production export missing');

const verticalSliceProof=await runVerticalSliceProof();

const source=source07C+'\n'+frag;
const inheritedRaf=(source07C.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'07D must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'07D fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make07DHtml(index07C,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-07c','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test07d-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of [
  '07C_STREAMED_PRODUCTION_REGION',
  '07D_PRODUCTION_VERTICAL_SLICE'
]){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of [
  'PRODUCTION VERTICAL SLICE',
  'BEHAVIOR LOOP',
  'STREAM RESTORE',
  'ASSET PIPELINE',
  'PERFORMANCE PASS'
]){
  assert(app.includes(token),'07D runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test07d-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'07D',
  roadmap:'Test07 — Production Promotion',
  milestone:'Production Vertical Slice',
  purpose:'prove the frozen production architecture operates as one coherent slice: accepted memory/arbitration/goal recovery through production actor animation binding, followed by production-region stream-out/restore and inherited mobile performance regression',
  prerequisite:{test07c:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 07C source, 07B actor pipeline, 07A architecture, and Test06 behavior unchanged',
  frozen_artifact_blobs:{
    test07c_source_main:expectedSource07C,
    test07c_index:expectedIndex07C,
    living_world_kernel:frozenModules.living,
    stream_cell_core:frozenModules.stream,
    simulation_lod_core:frozenModules.lod,
    production_index:frozenModules.prodIndex,
    actor_pipeline_core:frozenModules.actorCore,
    three_actor_adapter:frozenModules.actorAdapter,
    actor_index:frozenModules.actorIndex,
    production_region_core:frozenModules.regionCore,
    production_region_index:frozenModules.regionIndex,
    production_region_fragment:frozenModules.regionFragment
  },
  vertical_slice:{
    actor_id:'07C_REGION_ACTOR_A',
    automated_behavior_sequence:['FOOD / WALK','HAZARD / RUN','FOOD / WALK'],
    behavior_source:'accepted 07A LivingWorldKernel only',
    hazard_trigger:'one deterministic vertical-slice proof event after region actor becomes active',
    stream_cycle:'frozen 07C 38m unload / 24m reload',
    asset_pipeline:'frozen 07B cache + SkeletonUtils clone + independent mixer',
    performance_gate:'inherited 06J real-device audit must remain PASS'
  },
  delegated_vertical_slice_proof:verticalSliceProof,
  runtime_external_dependencies:0,
  target:'safari16.4+',
  mobile_fps_target:60,
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRaf,
    final_request_animation_frame_calls:finalRaf,
    added_request_animation_frame_calls:finalRaf-inheritedRaf
  },
  mechanics_changed:false,
  combat_changed:false,
  new_ai_behavior:false,
  new_assets:false,
  disk_persistence:false,
  multiplayer:false,
  acceptance_checklist:{
    production_behavior_cycle_visible:'HUMAN REVIEW',
    behavior_loop_reports_pass:'HUMAN RUNTIME',
    region_streams_out_and_restores:'HUMAN REVIEW',
    actor_ids_stable_after_restore:'HUMAN RUNTIME',
    progress_preserved_after_restore:'HUMAN RUNTIME',
    asset_load_count_remains_one:'HUMAN RUNTIME',
    zero_duplicate_bindings:'HUMAN RUNTIME',
    inherited_06j_real_device_regression_pass:'HUMAN REVIEW',
    final_vertical_slice_status_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'07D',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_07c_frozen_required:true,
    accepted_07c_source_reused_unchanged:true,
    accepted_07a_07b_07c_production_modules_reused_unchanged:true,
    vertical_slice_core_three_independent:true,
    vertical_slice_core_dom_independent:true,
    one_hazard_event_only:true,
    hazard_priority_interruption:true,
    food_progress_freezes_while_interrupted:true,
    food_goal_recovers_after_memory_expiry:true,
    food_progress_preserved_after_recovery:true,
    production_region_stream_out_observed:true,
    production_region_restore_observed:true,
    actor_ids_stable:true,
    region_progress_preserved:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    asset_load_count_contract_one:true,
    performance_regression_contract_pass:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  vertical_slice_proof:verticalSliceProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-07d',verticalSliceProof}));
