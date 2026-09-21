import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runPredictiveHandoffProof} from './proof.mjs';
import {make08BHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-08b');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('08B build proof failed: '+message);
};

const accepted08A=JSON.parse(await readFile(path.join(labs,'threejs-test-08a','acceptance.json'),'utf8'));
assert(accepted08A.test==='08A'&&accepted08A.status==='ACCEPTED'&&accepted08A.frozen===true,'08A must be accepted/frozen');
assert(accepted08A.build_id==='20260921072955','expected frozen 08A build');
assert(accepted08A.next_milestone==='08B — Predictive Region Handoff','08B milestone authorization');
assert(accepted08A.next_milestone_authorized===true,'08B authorization required');

const source08A=await readFile(path.join(labs,'threejs-test-08a','source-main.js'),'utf8');
const index08A=await readFile(path.join(labs,'threejs-test-08a','index.html'),'utf8');
const expectedSource08A='4f4d0607cc8f5abf15ec62bedf3958f5c71c353a';
const expectedIndex08A='7314ca1f274f79a3f17bcc9f6eb4368bbea6fa92';
assert(blobSha(source08A)===expectedSource08A,'frozen 08A source-main changed');
assert(blobSha(index08A)===expectedIndex08A,'frozen 08A index changed');

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
  worldFragment:'f0f51e7e1a51f0ea85c7bc94a6c28e965739b2b5'
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
  ['production/world/index.js',frozenModules.worldIndex]
]){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozenWorldFragment=await readFile(path.join(labs,'threejs-test-08a-src','multi-region-world.fragment.js'),'utf8');
assert(blobSha(frozenWorldFragment)===frozenModules.worldFragment,'frozen 08A runtime fragment changed');

const prefetchCore=await readFile(path.join(root,'production','prefetch','predictive-region-prefetch-core.js'),'utf8');
const prefetchAdapter=await readFile(path.join(root,'production','prefetch','three-predictive-actor-factory.js'),'utf8');
const prefetchIndex=await readFile(path.join(root,'production','prefetch','index.js'),'utf8');
const frag=await readFile(path.join(root,'predictive-region-handoff.fragment.js'),'utf8');

assert(!/from\s+['"]three(?:\/|['"])/.test(prefetchCore)&&!/\bTHREE\s*\./.test(prefetchCore),'predictive core must be Three-independent');
assert(!/\bdocument\s*\./.test(prefetchCore)&&!/\bwindow\s*\./.test(prefetchCore)&&!/\bglobalThis\s*\./.test(prefetchCore),'predictive core must be runtime-global independent');
assert(/assetCache\.instantiate/.test(prefetchAdapter),'predictive adapter must consume frozen asset-cache instances');
assert(/AnimationMixer/.test(prefetchAdapter),'predictive adapter must own prepared animation mixers');
assert(/PredictiveRegionPrefetchPlanner/.test(prefetchIndex),'predictive production export missing');

const predictiveProof=await runPredictiveHandoffProof();

const source=source08A+'\n'+frag;
const inheritedRaf=(source08A.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'08B must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'08B fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make08BHtml(index08A,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-08a','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test08b-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['08A_MULTI_REGION_PRODUCTION_WORLD','08B_PREDICTIVE_REGION_HANDOFF']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of ['PREDICTIVE HANDOFF','B PREFETCHED','A RETURN PREFETCHED','PREPARED CONSUMED','STATE RESTORED','PERFORMANCE PASS']){
  assert(app.includes(token),'08B runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test08b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'08B',
  roadmap:'Test08 — World Expansion',
  milestone:'Predictive Region Handoff',
  purpose:'prepare future region visual actor instances off-scene before activation so real ProductionRegion handoff consumes prepared instances without changing simulation authority, actor behavior, snapshots, or asset identity',
  prerequisite:{test08a:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 08A source and all 07A–08A production modules unchanged',
  frozen_artifact_blobs:{
    test08a_source_main:expectedSource08A,
    test08a_index:expectedIndex08A,
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
    multi_region_world_fragment:frozenModules.worldFragment
  },
  predictive_handoff:{
    route:['A','B','A'],
    prefetch_radius_m:58,
    activation_radius_m:24,
    unload_radius_m:38,
    prepared_instances_per_target_region:2,
    simulation_created_during_prefetch:false,
    shared_asset_cache:'frozen 07B ThreeActorAssetCache',
    expected_asset_loads:1,
    initial_a_bind_path:'fallback allowed',
    b_bind_path:'prefetched required',
    a_return_bind_path:'prefetched required',
    world_reconciliation_hz:10,
    inherited_08a_diagnostic_hook:'quiesced'
  },
  delegated_predictive_handoff_proof:predictiveProof,
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
    enter_region_a:'HUMAN REVIEW',
    b_prefetch_visible_before_b_activation:'HUMAN RUNTIME',
    b_uses_two_prepared_instances:'HUMAN RUNTIME',
    return_a_prefetched_before_reactivation:'HUMAN RUNTIME',
    prepared_consumed_total_at_least_four:'HUMAN RUNTIME',
    fallback_instances_remain_initial_a_only:'HUMAN RUNTIME',
    return_state_stable:'HUMAN RUNTIME',
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
  test:'08B',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_08a_frozen_required:true,
    accepted_08a_source_reused_unchanged:true,
    accepted_07a_through_08a_production_modules_reused_unchanged:true,
    predictive_core_three_independent:true,
    predictive_core_dom_independent:true,
    planner_selects_forward_unloaded_region:true,
    prefetch_prepares_two_instances_without_actor_records:true,
    b_load_consumes_prefetched_instances:true,
    a_return_consumes_prefetched_instances:true,
    fallback_remains_initial_a_only:true,
    return_actor_ids_stable:true,
    return_progress_preserved:true,
    shared_asset_load_contract_one:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  predictive_handoff_proof:predictiveProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-08b',predictiveProof}));
