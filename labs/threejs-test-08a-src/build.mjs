import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runWorldProof} from './proof.mjs';
import {make08AHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-08a');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('08A build proof failed: '+message);
};

const accepted07D=JSON.parse(await readFile(path.join(labs,'threejs-test-07d','acceptance.json'),'utf8'));
assert(accepted07D.test==='07D'&&accepted07D.status==='ACCEPTED'&&accepted07D.frozen===true,'07D must be accepted/frozen');
assert(accepted07D.test07_closed===true,'Test07 must be closed');
assert(accepted07D.next_milestone==='08A — Multi-Region Production World','08A milestone authorization');
assert(accepted07D.next_milestone_authorized===true,'08A authorization required');

const source07D=await readFile(path.join(labs,'threejs-test-07d','source-main.js'),'utf8');
const index07D=await readFile(path.join(labs,'threejs-test-07d','index.html'),'utf8');
const expectedSource07D='36ae54bc0fc70de82071bcec588545c190c7f4dd';
const expectedIndex07D='220c30d480cc4808fb8993315170859d07924ede';
assert(blobSha(source07D)===expectedSource07D,'frozen 07D source-main changed');
assert(blobSha(index07D)===expectedIndex07D,'frozen 07D index changed');

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
  verticalFragment:'53ff1f42ff6c43aa4211e0b2a42c75603f5dd765'
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
  ['production/vertical-slice/index.js',frozenModules.verticalIndex]
]){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozenVerticalFragment=await readFile(path.join(labs,'threejs-test-07d-src','production-vertical-slice.fragment.js'),'utf8');
assert(blobSha(frozenVerticalFragment)===frozenModules.verticalFragment,'frozen 07D runtime fragment changed');

const worldCore=await readFile(path.join(root,'production','world','production-world-manager.js'),'utf8');
const worldIndex=await readFile(path.join(root,'production','world','index.js'),'utf8');
const frag=await readFile(path.join(root,'multi-region-world.fragment.js'),'utf8');

assert(!/from\s+['"]three(?:\/|['"])/.test(worldCore)&&!/\bTHREE\s*\./.test(worldCore),'world core must be Three-independent');
assert(!/\bdocument\s*\./.test(worldCore)&&!/\bwindow\s*\./.test(worldCore)&&!/\bglobalThis\s*\./.test(worldCore),'world core must be runtime-global independent');
assert(/ProductionWorldManager/.test(worldIndex),'world production export missing');

const worldProof=await runWorldProof();

const source=source07D+'\n'+frag;
const inheritedRaf=(source07D.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'08A must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'08A fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make08AHtml(index07D,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-07d','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test08a-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['07D_PRODUCTION_VERTICAL_SLICE','08A_MULTI_REGION_PRODUCTION_WORLD']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of ['MULTI-REGION WORLD','A/B/C VISITED','STATE ISOLATED','RETURN RESTORED','ASSET LOAD 1','PERFORMANCE PASS']){
  assert(app.includes(token),'08A runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test08a-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'08A',
  roadmap:'Test08 — World Expansion',
  milestone:'Multi-Region Production World',
  purpose:'prove the frozen production stack scales from one streamed region to multiple independent production regions with isolated snapshots, stable identity/progress restoration, one shared asset cache, and preserved mobile performance',
  prerequisite:{test07:'CLOSED / FROZEN',test07d:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 07D source and all 07A–07D production modules unchanged',
  frozen_artifact_blobs:{
    test07d_source_main:expectedSource07D,
    test07d_index:expectedIndex07D,
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
    production_vertical_slice_fragment:frozenModules.verticalFragment
  },
  world_expansion:{
    regions:3,
    route:['A','B','C','A'],
    actors_per_region:2,
    maximum_expected_active_proof_regions:1,
    shared_asset_cache:'frozen 07B ThreeActorAssetCache',
    expected_asset_loads:1,
    snapshot_store:'shared ProductionRegionStateStore keyed by region ID',
    load_radius_m:24,
    unload_radius_m:38,
    world_content_expansion:'diagnostic regions only; no new gameplay content'
  },
  delegated_world_proof:worldProof,
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
    three_regions_exist:'HUMAN REVIEW',
    visit_a_b_c_and_return_a:'HUMAN REVIEW',
    only_one_08a_region_active_along_route:'HUMAN RUNTIME',
    snapshots_isolated_per_region:'HUMAN RUNTIME',
    a_ids_stable_on_return:'HUMAN RUNTIME',
    a_progress_preserved_on_return:'HUMAN RUNTIME',
    asset_load_count_remains_one:'HUMAN RUNTIME',
    zero_duplicate_bindings:'HUMAN RUNTIME',
    inherited_06j_real_device_regression_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'08A',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_07d_frozen_required:true,
    test07_closed_required:true,
    accepted_07d_source_reused_unchanged:true,
    accepted_07a_through_07d_production_modules_reused_unchanged:true,
    world_core_three_independent:true,
    world_core_dom_independent:true,
    three_region_registration:true,
    route_a_b_c_a:true,
    at_most_one_active_proof_region:true,
    per_region_snapshots:true,
    return_actor_ids_stable:true,
    return_progress_preserved:true,
    state_isolated_between_regions:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    shared_asset_load_contract_one:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  world_proof:worldProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-08a',worldProof}));
