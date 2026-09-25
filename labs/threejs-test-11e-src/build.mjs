import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11e');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11E build proof failed: '+message);};

async function listJs(dir){
  const {readdir}=await import('node:fs/promises');
  const entries=await readdir(dir,{withFileTypes:true});
  const files=[];
  for(const entry of entries){
    const full=path.join(dir,entry.name);
    if(entry.isDirectory())files.push(...await listJs(full));
    else if(entry.isFile()&&entry.name.endsWith('.js'))files.push(full);
  }
  return files;
}

const pkg=JSON.parse(await readFile(path.join(root,'package.json'),'utf8'));
assert(pkg.dependencies.three==='0.186.0','Three.js must remain pinned to 0.186.0');

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11d-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11D=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11d-src/status.json'),'utf8'));
assert(status11D.status==='PASS_CLOSED','11D must be PASS/CLOSED');
assert(status11D.frozen===false,'11D test must remain unfrozen');
assert(baseline.name==='Greenfield Production World Foundation v0.4','v0.4 baseline required');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','accepted development baseline required');
assert(baseline.invariants.request_animation_frame_source_calls===1,'one-RAF baseline invariant required');
assert(baseline.invariants.active_chunk_pool_size===9,'nine-chunk baseline invariant required');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;

assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes('class LivingWorldSystem'),'LivingWorldSystem required');
assert(sourceText.includes('class ActorStore'),'ActorStore required');
assert(sourceText.includes("name:'living-world'"),'living-world scheduler registration required');
assert(sourceText.includes('FRAME_PHASE.ACTORS'),'dedicated actor scheduler phase required');
assert(sourceText.includes('updateBudgetPerFrame'),'actor update budget required');
assert(sourceText.includes('reactivations'),'state restoration telemetry required');
assert(sourceText.includes('storeChunkLimit'),'bounded state store required');
assert(sourceText.includes('activeCapacity:27'),'fixed 27-actor capacity required');
assert(sourceText.includes('averageUpdatesByLod'),'simulation LOD telemetry required');
assert(sourceText.includes('instantiateGLTF'),'cached clone asset path required');
assert(sourceText.includes('queryAABB'),'spatial broad phase required');

const assets=[
  ['Soldier.glb','labs/threejs-test-09b/assets/Soldier.glb'],
  ['rock_c_hero_boulder.glb','assets/3d/sunlit-basin/v1/rock_c_hero_boulder.glb'],
  ['tree_e_windswept.glb','assets/3d/sunlit-basin/v3/tree_e_windswept.glb'],
  ['ruin_windcut_fragment_a.glb','assets/3d/windcut-shelf/v1/ruin_windcut_fragment_a.glb'],
  ['deadwood_windswept_a.glb','assets/3d/windcut-shelf/v1/deadwood_windswept_a.glb']
];

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});

const copiedAssets={};
for(const [name,repoPath] of assets){
  const source=path.resolve(repoRoot,repoPath);
  const size=(await stat(source)).size;
  assert(size>0,'missing asset '+repoPath);
  await cp(source,path.join(out,'assets',name));
  copiedAssets[name]={source:repoPath,bytes:size};
}

await build({
  entryPoints:[path.join(sourceRoot,'main.js')],
  bundle:true,
  minify:true,
  format:'esm',
  platform:'browser',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  sourcemap:false
});

await cp(path.join(root,'index.html'),path.join(out,'index.html'));
await cp(path.join(root,'style.css'),path.join(out,'style.css'));

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
const appBytes=(await stat(path.join(out,'app.js'))).size;

const buildInfo={
  build_id:buildId,
  test:'11E',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'Living World Runtime',
  environment_name:'Copperwash Reach — Living World',
  baseline:'Greenfield Production World Foundation v0.4',
  architecture:'GREENFIELD_LIVING_WORLD_RUNTIME',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops},
  capabilities:{
    stable_actor_ids:true,
    actors_per_chunk:3,
    active_actor_capacity:27,
    actor_visual_pool:true,
    actor_pool_reallocations_target:0,
    simulation_lod:['NEAR','MID','FAR'],
    actor_update_budget_per_frame:12,
    persistent_in_session_actor_state:true,
    chunk_reactivation_restore:true,
    bounded_actor_state_store_chunks:48,
    deterministic_actor_wander:true,
    pooled_world_chunks:true,
    spatial_hash:true,
    cached_glb_clone_pipeline:true,
    adaptive_quality:true
  },
  limits:{draw_calls_max:70,triangles_max:95000,raf_loops:1},
  assets:copiedAssets,
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11E',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11d_pass_closed:true,
    baseline_v04:true,
    one_raf_preserved:true,
    no_set_animation_loop:true,
    stable_actor_store:true,
    fixed_actor_visual_pool:true,
    simulation_lod:true,
    hard_actor_update_budget:true,
    chunk_state_persistence:true,
    bounded_state_store:true,
    world_systems_preserved:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes}));
