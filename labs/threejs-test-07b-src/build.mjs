import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {runActorPipelineProof} from './proof.mjs';
import {make07BHtml} from './page.mjs';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-07b');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

const blobSha=text=>{
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
};
const assert=(condition,message)=>{
  if(!condition)throw new Error('07B build proof failed: '+message);
};

const accepted07A=JSON.parse(await readFile(path.join(labs,'threejs-test-07a','acceptance.json'),'utf8'));
assert(accepted07A.test==='07A'&&accepted07A.status==='ACCEPTED'&&accepted07A.frozen===true,'07A must be accepted/frozen');
assert(accepted07A.build_id==='20260921053845','expected frozen 07A build');
assert(accepted07A.next_milestone_authorized===true,'07B authorization required');

const source07A=await readFile(path.join(labs,'threejs-test-07a','source-main.js'),'utf8');
const index07A=await readFile(path.join(labs,'threejs-test-07a','index.html'),'utf8');
const expectedSource07A='387be2c85d7208259317c9a58a5a2f6cb9bc1a2b';
const expectedIndex07A='2fdcee21862cd8e33c391e88f77d3ec4f526b462';
assert(blobSha(source07A)===expectedSource07A,'frozen 07A source-main changed');
assert(blobSha(index07A)===expectedIndex07A,'frozen 07A index changed');

const living=await readFile(path.join(root,'production','living-world-kernel.js'),'utf8');
const stream=await readFile(path.join(root,'production','stream-cell-core.js'),'utf8');
const lod=await readFile(path.join(root,'production','simulation-lod-core.js'),'utf8');
const prodIndex=await readFile(path.join(root,'production','index.js'),'utf8');
const actorCore=await readFile(path.join(root,'production','actors','actor-pipeline-core.js'),'utf8');
const actorAdapter=await readFile(path.join(root,'production','actors','three-actor-adapter.js'),'utf8');
const frag=await readFile(path.join(root,'production-actor-pipeline.fragment.js'),'utf8');

const frozen={
  living:'8ff673728f18546168e339d888889bfbbc6b8828',
  stream:'af77396834311e0e5b328c7c4438317202613466',
  lod:'2458e99eec9988067a9c3a62bd1c6b88ea1ab4e8',
  index:'836bf853a996dc7fbdb968aa9b12e09e32594dac'
};
assert(blobSha(living)===frozen.living,'07A living-world kernel changed');
assert(blobSha(stream)===frozen.stream,'07A StreamCell core changed');
assert(blobSha(lod)===frozen.lod,'07A SimulationLOD core changed');
assert(blobSha(prodIndex)===frozen.index,'07A production index changed');

assert(!/from\s+['"]three(?:\/|['"])/.test(actorCore)&&!/\bTHREE\s*\./.test(actorCore),'actor core must be Three-independent');
assert(!/\bdocument\s*\./.test(actorCore)&&!/\bwindow\s*\./.test(actorCore)&&!/\bglobalThis\s*\./.test(actorCore),'actor core must be runtime-global independent');
assert(/GLTFLoader/.test(actorAdapter),'Three adapter GLTFLoader missing');
assert(/SkeletonUtils\.js/.test(actorAdapter),'skeleton-safe clone utility missing');
assert(/AnimationMixer/.test(actorAdapter),'independent mixer contract missing');
assert(!/\bdocument\s*\./.test(actorAdapter),'Three adapter must not own DOM');

const actorPipelineProof=runActorPipelineProof();

const source=source07A+'\n'+frag;
const inheritedRaf=(source07A.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRaf=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert(finalRaf===inheritedRaf,'07B must not add RAF loop');
assert(!/requestAnimationFrame\s*\(/.test(frag),'07B fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
await writeFile(path.join(out,'index.html'),make07BHtml(index07A,buildId));
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-07a','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test07b-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['07A_PRODUCTION_ARCHITECTURE_PROMOTION','07B_PRODUCTION_ACTOR_PIPELINE']){
  assert(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of ['ACTOR PIPELINE','ASSET CACHE','INDEPENDENT INSTANCES','06J REGRESSION PASS']){
  assert(app.includes(token),'runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test07b-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'07B',
  roadmap:'Test07 — Production Promotion',
  milestone:'Production Actor Pipeline',
  purpose:'prove stable production actor identity, 07A kernel ownership, cached GLB binding, skeleton-safe cloning, independent animation mixers, and explicit render binding without new AI behavior',
  prerequisite:{test07a:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 07A source and production architecture unchanged',
  frozen_artifact_blobs:{
    test07a_source_main:expectedSource07A,
    test07a_index:expectedIndex07A,
    living_world_kernel:frozen.living,
    stream_cell_core:frozen.stream,
    simulation_lod_core:frozen.lod,
    production_index:frozen.index
  },
  actor_pipeline:{
    proof_actor_count:2,
    definition_count:1,
    asset:'./assets/Soldier.glb',
    expected_pipeline_asset_loads:1,
    cloning:'SkeletonUtils.clone',
    mixers:'one AnimationMixer per bound actor',
    animation_intents:['IDLE','WALK'],
    stable_actor_ids:['07B_ACTOR_A','07B_ACTOR_B'],
    kernel_per_actor:'LivingWorldKernel',
    shadow_policy:'proof actors do not cast dynamic shadows',
    region_streaming:'deferred to 07C'
  },
  delegated_actor_pipeline_proof:actorPipelineProof,
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
  streamed_production_region_started:false,
  acceptance_checklist:{
    one_definition_one_cached_asset_load:'HUMAN RUNTIME',
    two_visible_unique_actor_roots:'HUMAN REVIEW',
    two_independent_animation_states:'HUMAN REVIEW',
    two_production_kernel_bindings:'DELEGATED + HUMAN RUNTIME',
    zero_duplicate_bindings:'HUMAN RUNTIME',
    frozen_06j_real_device_regression_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'07B',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_07a_frozen_required:true,
    accepted_07a_source_reused_unchanged:true,
    accepted_07a_production_modules_reused_unchanged:true,
    actor_core_three_independent:true,
    actor_core_dom_independent:true,
    stable_actor_identity:true,
    duplicate_definition_rejected:true,
    duplicate_actor_id_rejected:true,
    duplicate_visual_binding_rejected:true,
    actor_snapshot_restore:true,
    actor_kernel_state_restore:true,
    skeleton_safe_clone_contract:true,
    independent_animation_mixer_contract:true,
    production_region_deferred:true,
    added_request_animation_frame_calls:finalRaf-inheritedRaf,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  actor_pipeline_proof:actorPipelineProof,
  real_device_regression:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-07b',actorPipelineProof}));
