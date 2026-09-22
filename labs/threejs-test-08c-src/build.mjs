import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runBoundedPrefetchProof} from './proof.mjs';
import {make08CHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-08c');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('08C build proof failed: '+message);
};

const accepted08B=JSON.parse(await readFile(path.join(labs,'threejs-test-08b','acceptance.json'),'utf8'));
assert(accepted08B.test==='08B'&&accepted08B.status==='ACCEPTED'&&accepted08B.frozen===true,'08B must be accepted/frozen');
assert(accepted08B.build_id==='20260921235022','expected frozen 08B build');
assert(accepted08B.next_milestone==='08C — Bounded Prefetch Lifecycle','08C milestone authorization');
assert(accepted08B.next_milestone_authorized===true,'08C authorization required');

const source08B=await readFile(path.join(labs,'threejs-test-08b','source-main.js'),'utf8');
const index08B=await readFile(path.join(labs,'threejs-test-08b','index.html'),'utf8');
const expectedSource08B='e91498c35aef18942f77c21791f6e93e8adbdf51';
const expectedIndex08B='c8a668869c3cba5ca0d4cbf1dc5c40eca3cf34ee';
assert(blobSha(source08B)===expectedSource08B,'frozen 08B source-main changed');
assert(blobSha(index08B)===expectedIndex08B,'frozen 08B index changed');

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
  verticalCore:'94140d67efc32d1260bd1576251787a7fbb3df24',
  verticalIndex:'e923fc52535885142419d2d423750f3e4054c6bf',
  worldCore:'a7a2a38ce2efd495aa0d6d01ed11b5c5dca825e5',
  worldIndex:'8c018c63edc545c760aa083dfb35876ac661bb55',
  predictiveCore:'0976d7547e412afa6f65259c33fae09358e14fea',
  predictiveFactory:'a6d9a10fd8cbd1a931959d0ef2ed1d2002639d21',
  predictiveIndex:'a22d28e934dd08e13983fa7e09caa1e67fdfd89c',
  predictiveFragment:'e0422ce86a165eb2376f27e8243f61f632375d7a'
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
  ['production/regions/index.js',frozenModules.regionIndex],
  ['production/vertical-slice/production-vertical-slice-core.js',frozenModules.verticalCore],
  ['production/vertical-slice/index.js',frozenModules.verticalIndex],
  ['production/world/production-world-manager.js',frozenModules.worldCore],
  ['production/world/index.js',frozenModules.worldIndex],
  ['production/prefetch/predictive-region-prefetch-core.js',frozenModules.predictiveCore],
  ['production/prefetch/three-predictive-actor-factory.js',frozenModules.predictiveFactory],
  ['production/prefetch/index.js',frozenModules.predictiveIndex]
]){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozenPredictiveFragment=await readFile(path.join(labs,'threejs-test-08b-src','predictive-region-handoff.fragment.js'),'utf8');
assert(blobSha(frozenPredictiveFragment)===frozenModules.predictiveFragment,'frozen 08B runtime fragment changed');

const boundedCore=await readFile(path.join(root,'production','prefetch','bounded-prefetch-lifecycle-core.js'),'utf8');
const boundedController=await readFile(path.join(root,'production','prefetch','bounded-predictive-prefetch-controller.js'),'utf8');
const boundedIndex=await readFile(path.join(root,'production','prefetch','bounded-index.js'),'utf8');
const frag=await readFile(path.join(root,'bounded-prefetch-lifecycle.fragment.js'),'utf8');

assert(!/from\s+['"]three(?:\/|['"])/.test(boundedCore)&&!/\bTHREE\s*\./.test(boundedCore),'bounded core must be Three-independent');
assert(!/\bdocument\s*\./.test(boundedCore)&&!/\bwindow\s*\./.test(boundedCore)&&!/\bglobalThis\s*\./.test(boundedCore),'bounded core must be runtime-global independent');
assert(!/from\s+['"]three(?:\/|['"])/.test(boundedController)&&!/\bTHREE\s*\./.test(boundedController),'bounded controller must operate through frozen predictive factory without Three dependency');
assert(/BoundedPredictivePrefetchController/.test(boundedIndex),'bounded production export missing');

const boundedProof=await runBoundedPrefetchProof();

const source=source08B+'\n'+frag;
const inheritedRaf=(source08B.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'08C must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'08C fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make08CHtml(index08B,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-08b','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test08c-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['08B_PREDICTIVE_REGION_HANDOFF','08C_BOUNDED_PREFETCH_LIFECYCLE']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of [
  'BOUNDED PREFETCH',
  'STALE B EVICTED',
  'B RE-PREFETCHED',
  'POOL BOUNDED 2',
  'STATE RESTORED',
  'PERFORMANCE PASS'
]){
  assert(app.includes(token),'08C runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test08c-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'08C',
  roadmap:'Test08 — World Expansion',
  milestone:'Bounded Prefetch Lifecycle',
  purpose:'evict stale off-scene prepared actor instances when the predicted region changes, enforce a two-instance prefetch budget, allow deterministic re-prefetch, and preserve the accepted predictive handoff/state/performance contracts',
  prerequisite:{test08b:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 08B source and all 07A–08B production modules unchanged',
  frozen_artifact_blobs:{
    test08b_source_main:expectedSource08B,
    test08b_index:expectedIndex08B,
    living_world_kernel:frozenModules.living,
    stream_cell_core:frozenModules.stream,
    simulation_lod_core:frozenModules.lod,
    production_index:frozenModules.prodIndex,
    actor_pipeline_core:frozenModules.actorCore,
    three_actor_adapter:frozenModules.actorAdapter,
    actor_index:frozenModules.actorIndex,
    production_region_core:frozenModules.regionCore,
    production_region_index:frozenModules.regionIndex,
    production_vertical_slice_core:frozenModules.verticalCore,
    production_vertical_slice_index:frozenModules.verticalIndex,
    production_world_manager:frozenModules.worldCore,
    production_world_index:frozenModules.worldIndex,
    predictive_region_prefetch_core:frozenModules.predictiveCore,
    three_predictive_actor_factory:frozenModules.predictiveFactory,
    predictive_prefetch_index:frozenModules.predictiveIndex,
    predictive_region_handoff_fragment:frozenModules.predictiveFragment
  },
  bounded_prefetch:{
    route:['A','toward B until prepared','reverse to A before B activation','B','A'],
    max_prepared_instances:2,
    expected_stale_b_eviction:2,
    expected_b_prefetch_executions:2,
    expected_prepared_consumed:4,
    expected_fallback_instances:2,
    shared_asset_cache:'frozen 07B ThreeActorAssetCache',
    expected_asset_loads:1,
    simulation_created_during_prefetch:false,
    world_reconciliation_hz:10,
    inherited_08b_diagnostic_hook:'quiesced'
  },
  delegated_bounded_prefetch_proof:boundedProof,
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
    inherited_06j_regression_pass_before_route:'HUMAN REVIEW',
    initial_a_active:'HUMAN REVIEW',
    first_b_prefetch_before_activation:'HUMAN RUNTIME',
    reverse_before_b_activation:'HUMAN ACTION',
    stale_b_pool_evicted:'HUMAN RUNTIME',
    cancellation_count_at_least_one:'HUMAN RUNTIME',
    evicted_instances_at_least_two:'HUMAN RUNTIME',
    peak_prepared_never_above_two:'HUMAN RUNTIME',
    b_reprefetched:'HUMAN RUNTIME',
    b_handoff_consumes_prepared:'HUMAN RUNTIME',
    a_return_prefetched_and_restored:'HUMAN RUNTIME',
    fallback_instances_remain_initial_a_only:'HUMAN RUNTIME',
    asset_load_count_remains_one:'HUMAN RUNTIME',
    zero_duplicate_bindings:'HUMAN RUNTIME',
    final_performance_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'08C',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_08b_frozen_required:true,
    accepted_08b_source_reused_unchanged:true,
    accepted_07a_through_08b_production_modules_reused_unchanged:true,
    bounded_core_three_independent:true,
    bounded_core_dom_independent:true,
    bounded_controller_three_independent:true,
    overflow_above_two_rejected:true,
    first_b_prefetch_two_instances:true,
    stale_b_prefetch_evicted:true,
    exact_stale_eviction_count_two:true,
    b_reprefetch_succeeds:true,
    pool_peak_never_above_two:true,
    b_handoff_consumes_prepared:true,
    a_return_consumes_prepared:true,
    return_actor_ids_stable:true,
    return_progress_preserved:true,
    shared_asset_load_contract_one:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  bounded_prefetch_proof:boundedProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-08c',boundedProof}));
