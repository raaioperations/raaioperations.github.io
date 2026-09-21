import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runRegionProof} from './proof.mjs';
import {make07CHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-07c');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('07C build proof failed: '+message);
};

const accepted07B=JSON.parse(await readFile(path.join(labs,'threejs-test-07b','acceptance.json'),'utf8'));
assert(accepted07B.test==='07B'&&accepted07B.status==='ACCEPTED'&&accepted07B.frozen===true,'07B must be accepted/frozen');
assert(accepted07B.build_id==='20260921055720','expected frozen 07B build');
assert(accepted07B.next_milestone_authorized===true,'07C authorization required');

const source07B=await readFile(path.join(labs,'threejs-test-07b','source-main.js'),'utf8');
const index07B=await readFile(path.join(labs,'threejs-test-07b','index.html'),'utf8');
const expectedSource07B='b3cdda29aa660f0680bff8aa6373260f65029603';
const expectedIndex07B='252e04fdeb208405355ab32d7894b1125d890a2b';
assert(blobSha(source07B)===expectedSource07B,'frozen 07B source-main changed');
assert(blobSha(index07B)===expectedIndex07B,'frozen 07B index changed');

const frozenModules={
  living:'8ff673728f18546168e339d888889bfbbc6b8828',
  stream:'af77396834311e0e5b328c7c4438317202613466',
  lod:'2458e99eec9988067a9c3a62bd1c6b88ea1ab4e8',
  prodIndex:'836bf853a996dc7fbdb968aa9b12e09e32594dac',
  actorCore:'37fa1ef67038f9f14e289814eb2d07b07259b74f',
  actorAdapter:'c31460159e3d2a581cb113229b8bb2eebd70cce1',
  actorFragment:'0d6a40cfed98069380980c30ffb083e83c71b4ff'
};

const modulePaths=[
  ['production/living-world-kernel.js',frozenModules.living],
  ['production/stream-cell-core.js',frozenModules.stream],
  ['production/simulation-lod-core.js',frozenModules.lod],
  ['production/index.js',frozenModules.prodIndex],
  ['production/actors/actor-pipeline-core.js',frozenModules.actorCore],
  ['production/actors/three-actor-adapter.js',frozenModules.actorAdapter]
];
for(const [rel,sha] of modulePaths){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozenActorFragment=await readFile(path.join(labs,'threejs-test-07b-src','production-actor-pipeline.fragment.js'),'utf8');
assert(blobSha(frozenActorFragment)===frozenModules.actorFragment,'frozen 07B actor fragment changed');

const regionCore=await readFile(path.join(root,'production','regions','production-region-core.js'),'utf8');
const regionIndex=await readFile(path.join(root,'production','regions','index.js'),'utf8');
const frag=await readFile(path.join(root,'streamed-production-region.fragment.js'),'utf8');

assert(!/from\s+['"]three(?:\/|['"])/.test(regionCore)&&!/\bTHREE\s*\./.test(regionCore),'region core must be Three-independent');
assert(!/\bdocument\s*\./.test(regionCore)&&!/\bwindow\s*\./.test(regionCore)&&!/\bglobalThis\s*\./.test(regionCore),'region core must be runtime-global independent');
assert(/ProductionRegion/.test(regionIndex),'region production export missing');

const regionProof=await runRegionProof();

const source=source07B+'\n'+frag;
const inheritedRaf=(source07B.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'07C must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'07C fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make07CHtml(index07B,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-07b','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test07c-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['07B_PRODUCTION_ACTOR_PIPELINE','07C_STREAMED_PRODUCTION_REGION']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of ['REGION RESTORED','IDS STABLE','PROGRESS PRESERVED','ASSET LOAD 1','NO DUPLICATES']){
  assert(app.includes(token),'07C runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test07c-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'07C',
  roadmap:'Test07 — Production Promotion',
  milestone:'Streamed Production Region',
  purpose:'prove one production region can serialize, unbind, remove, restore, and rebind real 07B production actors through the same cached asset pipeline without identity/progress loss or duplicate bindings',
  prerequisite:{test07b:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 07B source, production actor pipeline, and 07A production architecture unchanged',
  frozen_artifact_blobs:{
    test07b_source_main:expectedSource07B,
    test07b_index:expectedIndex07B,
    living_world_kernel:frozenModules.living,
    stream_cell_core:frozenModules.stream,
    simulation_lod_core:frozenModules.lod,
    production_index:frozenModules.prodIndex,
    actor_pipeline_core:frozenModules.actorCore,
    three_actor_adapter:frozenModules.actorAdapter,
    actor_pipeline_fragment:frozenModules.actorFragment
  },
  production_region:{
    region_id:'07C_PRODUCTION_REGION_A',
    actor_count:2,
    actor_ids:['07C_REGION_ACTOR_A','07C_REGION_ACTOR_B'],
    load_radius_m:24,
    unload_radius_m:38,
    hysteresis_m:14,
    snapshot_schema_version:1,
    state_store:'in-memory ProductionRegionStateStore',
    asset_cache:'reuse frozen 07B ThreeActorAssetCache',
    expected_asset_loads:1,
    control_group:'07B_ACTOR_A + 07B_ACTOR_B remain continuously loaded',
    production_vertical_slice:'deferred to 07D'
  },
  delegated_region_proof:regionProof,
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
  disk_persistence:false,
  broad_world_streaming:false,
  acceptance_checklist:{
    region_initially_loads_two_production_actors:'HUMAN REVIEW',
    leaving_38m_unloads_only_region_actors:'HUMAN REVIEW',
    frozen_07b_control_actors_remain:'HUMAN REVIEW',
    snapshot_saved_before_actor_removal:'HUMAN RUNTIME',
    returning_inside_24m_rehydrates_two_actors:'HUMAN REVIEW',
    actor_ids_stable:'HUMAN RUNTIME',
    actor_progress_preserved:'HUMAN RUNTIME',
    asset_load_count_remains_one:'HUMAN RUNTIME',
    zero_duplicate_bindings:'HUMAN RUNTIME',
    frozen_06j_real_device_regression_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'07C',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_07b_frozen_required:true,
    accepted_07b_source_reused_unchanged:true,
    accepted_07b_production_modules_reused_unchanged:true,
    region_core_three_independent:true,
    region_core_dom_independent:true,
    explicit_region_lifecycle:true,
    versioned_region_snapshot:true,
    two_actor_identity_stability:true,
    actor_progress_restore:true,
    expired_memory_restore:true,
    interrupted_goal_restore:true,
    three_automated_unload_restore_cycles:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    production_vertical_slice_deferred:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  region_proof:regionProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-07c',regionProof}));
