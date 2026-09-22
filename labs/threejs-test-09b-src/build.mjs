import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runBeautySliceProof} from './proof.mjs';
import {make09BHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-09b');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('09B build proof failed: '+message);
};

const acceptance09A=JSON.parse(await readFile(path.join(labs,'threejs-test-09a','acceptance.json'),'utf8'));
assert(acceptance09A.test==='09A'&&acceptance09A.status==='ACCEPTED'&&acceptance09A.frozen===true,'09A must be accepted/frozen');
assert(acceptance09A.next_milestone==='09B — Vertical Beauty Slice','09B milestone required');
assert(acceptance09A.next_milestone_authorized===true,'09B authorization required');
assert(acceptance09A.broad_content_expansion_authorized===false,'broad content expansion must remain prohibited');

const standard09A=await readFile(path.join(labs,'threejs-test-09a','RAAI_3D_PRESENTATION_STANDARD.md'),'utf8');
assert(blobSha(standard09A)==='ec94393c41d6ea51797ca121f2378f84a1e18533','frozen 09A presentation standard changed');

const accepted08D=JSON.parse(await readFile(path.join(labs,'threejs-test-08d','acceptance.json'),'utf8'));
assert(accepted08D.test==='08D'&&accepted08D.status==='ACCEPTED'&&accepted08D.frozen===true,'08D must be accepted/frozen');
assert(accepted08D.test08_closed===true,'Test08 must be closed before 09B');

const source08D=await readFile(path.join(labs,'threejs-test-08d','source-main.js'),'utf8');
const index08D=await readFile(path.join(labs,'threejs-test-08d','index.html'),'utf8');
const expectedSource08D='32bb0b9483e3fab848154414410a1a9067fe8716';
const expectedIndex08D='e8d88818dc64d387a03302eddd0eaba6cdda99cc';
assert(blobSha(source08D)===expectedSource08D,'frozen 08D source-main changed');
assert(blobSha(index08D)===expectedIndex08D,'frozen 08D index changed');

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
  boundedController:'90b55314090351b9d9bf87cf8d6f70377aedc51b'
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

const delegated=runBeautySliceProof();
const frag=await readFile(path.join(root,'vertical-beauty-slice.fragment.js'),'utf8');
const source=source08D+'\n'+frag;

const inheritedRaf=(source08D.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'09B must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'09B fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make09BHtml(index08D,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-08d','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test09b-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['08D_WORLD_EXPANSION_CERTIFICATION','09B_VERTICAL_BEAUTY_SLICE']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of [
  'STRUCTURAL/RUNTIME PASS',
  'PRESENTATION PASS 2',
  'HUMAN VISUAL REVIEW REQUIRED'
]){
  assert(app.includes(token),'09B runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test09b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));

const info={
  build_id:buildId,
  test:'09B',
  roadmap:'Test09 — Presentation Foundation',
  milestone:'Vertical Beauty Slice',
  environment:'Sunlit Basin',
  classification:'PRESENTATION PASS 2 / HUMAN REVIEW CANDIDATE',
  doctrine:'Stylized Physical Realism',
  prerequisite:{
    test08:'CLOSED / ACCEPTED / FROZEN',
    test09a:'ACCEPTED / FROZEN / CANONICAL'
  },
  purpose:'raise the Sunlit Basin structural/runtime proof into a human-review presentation candidate through authored terrain, material response, atmospheric depth, layered ridges, vegetation hierarchy, water/shore treatment, environmental motion, and camera/light tuning while preserving frozen Test08',
  inherits:'Frozen accepted 08D runtime and all 07A–08D production systems unchanged',
  presentation:{
    presentation_pass:delegated.presentation_pass,
    automated_presentation_acceptance:false,
    human_presentation_review_required:true,
    material_families:delegated.material_families,
    depth_layers:delegated.depth_layers,
    ambient_motion_systems:delegated.ambient_motion_systems,
    authored_drawables:delegated.authored_drawables,
    authored_triangles:delegated.authored_triangles,
    added_draw_call_budget:delegated.added_draw_call_budget,
    added_triangle_budget:delegated.added_triangle_budget,
    absolute_draw_call_ceiling:delegated.absolute_draw_call_ceiling,
    absolute_triangle_ceiling:delegated.absolute_triangle_ceiling,
    generated_only_after_inherited_06j_pass:true,
    broad_content_expansion:false
  },
  frozen_artifact_blobs:{
    test08d_source_main:expectedSource08D,
    test08d_index:expectedIndex08D,
    presentation_standard_09a:'ec94393c41d6ea51797ca121f2378f84a1e18533',
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
    bounded_predictive_prefetch_controller:frozenModules.boundedController
  },
  delegated_presentation_proof:delegated,
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
  new_persistence:false,
  multiplayer:false,
  human_presentation_review:'REQUIRED',
  human_acceptance_required:true,
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'09B',
  status:'PASS',
  build_id:buildId,
  classification:'PRESENTATION PASS 2 / HUMAN REVIEW CANDIDATE',
  delegated_nonvisual_checks:{
    accepted_09a_frozen_required:true,
    accepted_08d_frozen_required:true,
    frozen_runtime_reused_unchanged:true,
    six_material_families:true,
    five_depth_layers:true,
    four_ambient_motion_systems:true,
    deterministic_authored_layout:true,
    authored_drawables_within_budget:true,
    authored_triangles_within_budget:true,
    frozen_06j_draw_ceiling_preserved:true,
    frozen_06j_triangle_ceiling_preserved:true,
    presentation_created_only_after_06j_pass:true,
    broad_content_expansion:false,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  presentation_proof:delegated,
  real_device_runtime_review:'REQUIRED',
  human_presentation_review:'REQUIRED',
  acceptance_authority:'USER'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-09b',presentationProof:delegated}));
