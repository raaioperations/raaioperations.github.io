import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runWorldExpansionCertificationProof} from './proof.mjs';
import {make08DHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-08d');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('08D build proof failed: '+message);
};

const accepted08C=JSON.parse(await readFile(path.join(labs,'threejs-test-08c','acceptance.json'),'utf8'));
assert(accepted08C.test==='08C'&&accepted08C.status==='ACCEPTED'&&accepted08C.frozen===true,'08C must be accepted/frozen');
assert(accepted08C.build_id==='20260922022250','expected frozen 08C build');
assert(accepted08C.next_milestone==='08D — World Expansion Certification','08D milestone authorization');
assert(accepted08C.next_milestone_authorized===true,'08D authorization required');
assert(accepted08C.closes_roadmap_on_acceptance==='Test08 — World Expansion','08D must be Test08 closeout gate');

const source08C=await readFile(path.join(labs,'threejs-test-08c','source-main.js'),'utf8');
const index08C=await readFile(path.join(labs,'threejs-test-08c','index.html'),'utf8');
const expectedSource08C='cdedbab4234f1014a9bd2f70edc0557904c6d2c2';
const expectedIndex08C='d9df1736f1aa8b7d0d25d28d1d3a72176f672fe0';
assert(blobSha(source08C)===expectedSource08C,'frozen 08C source-main changed');
assert(blobSha(index08C)===expectedIndex08C,'frozen 08C index changed');

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
  boundedCore:'f0e1e7e85fe223bd0c533ded43aebbcb14c38aca',
  boundedController:'90b55314090351b9d9bf87cf8d6f70377aedc51b',
  boundedFragment:'0d82e0102796c2e6cbc1ee1deb68d433d5fd85c7'
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
  ['production/prefetch/index.js',frozenModules.predictiveIndex],
  ['production/prefetch/bounded-prefetch-lifecycle-core.js',frozenModules.boundedCore],
  ['production/prefetch/bounded-predictive-prefetch-controller.js',frozenModules.boundedController]
]){
  const src=await readFile(path.join(root,rel),'utf8');
  assert(blobSha(src)===sha,'frozen production module changed: '+rel);
}
const frozen08CFragment=await readFile(path.join(labs,'threejs-test-08c-src','bounded-prefetch-lifecycle.fragment.js'),'utf8');
assert(blobSha(frozen08CFragment)===frozenModules.boundedFragment,'frozen 08C runtime fragment changed');

const stressProof=await runWorldExpansionCertificationProof();

const frag=await readFile(path.join(root,'world-expansion-certification.fragment.js'),'utf8');
const source=source08C+'\n'+frag;
const inheritedRaf=(source08C.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'08D must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'08D fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make08DHtml(index08C,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-08c','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test08d-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['08C_BOUNDED_PREFETCH_LIFECYCLE','08D_WORLD_EXPANSION_CERTIFICATION']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of [
  'WORLD EXPANSION CERTIFIED',
  '4 HANDOFFS',
  'REPEATED RESTORE',
  'ACTORS BOUNDED 4',
  'BINDINGS BOUNDED 4',
  'PREFETCH BOUNDED 2',
  'PERFORMANCE PASS'
]){
  assert(app.includes(token),'08D runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test08d-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'08D',
  roadmap:'Test08 — World Expansion',
  milestone:'World Expansion Certification',
  classification:'TEST08 CLOSEOUT CANDIDATE',
  purpose:'stress and certify the frozen 08C multi-region predictive streaming stack under repeated real traversal without introducing a new gameplay mechanic',
  prerequisite:{test08c:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 08C runtime and all 07A–08C production modules unchanged',
  frozen_artifact_blobs:{
    test08c_source_main:expectedSource08C,
    test08c_index:expectedIndex08C,
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
    bounded_prefetch_lifecycle_core:frozenModules.boundedCore,
    bounded_predictive_prefetch_controller:frozenModules.boundedController,
    bounded_prefetch_lifecycle_fragment:frozenModules.boundedFragment
  },
  human_certification:{
    route:['A','B','A','B','A'],
    required_handoffs:4,
    minimum_live_window_seconds:30,
    visit_radius_m:14,
    max_active_region_actors:4,
    max_region_bindings:4,
    max_prepared_instances:2,
    expected_fallback_instances:2,
    expected_asset_loads:1,
    expected_duplicates:0,
    expected_final_region:'A'
  },
  delegated_stress_proof:stressProof,
  test08_closes_on_human_acceptance:true,
  next_phase_after_acceptance:'Test09 — Presentation Foundation / Vertical Beauty Slice',
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
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'08D',
  status:'PASS',
  build_id:buildId,
  classification:'TEST08 CLOSEOUT CANDIDATE',
  delegated_nonvisual_checks:{
    accepted_08c_frozen_required:true,
    accepted_08c_source_reused_unchanged:true,
    accepted_07a_through_08c_production_modules_reused_unchanged:true,
    automated_cycles:stressProof.automated_cycles,
    automated_handoffs:stressProof.handoffs,
    repeated_a_restore:true,
    repeated_b_restore:true,
    active_actor_ceiling_four:true,
    binding_ceiling_four:true,
    prepared_pool_ceiling_two:true,
    fallback_initial_a_only:true,
    shared_asset_load_contract_one:true,
    zero_duplicate_region_state:true,
    zero_duplicate_binding_state:true,
    final_a_identity_stable:true,
    final_a_progress_preserved:true,
    repeated_b_identity_stable:true,
    repeated_b_progress_preserved:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  stress_proof:stressProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED',
  test08_close_authority:'USER ACCEPTANCE REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-08d',stressProof}));
