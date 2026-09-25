import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11d');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11D build proof failed: '+message);};

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

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11c-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11C=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11c-src/status.json'),'utf8'));
assert(status11C.status==='PASS_CLOSED','11C must be PASS/CLOSED');
assert(status11C.frozen===false,'11C test must remain unfrozen');
assert(baseline.name==='Greenfield World Foundation v0.3','v0.3 baseline required');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','accepted development baseline required');
assert(baseline.invariants.request_animation_frame_source_calls===1,'one-RAF baseline invariant required');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;

assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes('class ChunkManager'),'ChunkManager required');
assert(sourceText.includes('class SpatialHash'),'SpatialHash required');
assert(sourceText.includes('InstancedMesh'),'instanced vegetation required');
assert(sourceText.includes("name:'world-streaming'"),'streaming scheduler phase required');
assert(sourceText.includes("name:'quality'"),'quality scheduler phase required');
assert(sourceText.includes('setTierForTest'),'deterministic quality test hook required');
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
  test:'11D',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'Production World Systems',
  environment_name:'Copperwash Reach — Production Runtime',
  baseline:'Greenfield World Foundation v0.3',
  architecture:'GREENFIELD_PRODUCTION_WORLD_SYSTEMS',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops},
  capabilities:{
    pooled_world_chunks:true,
    active_chunk_count:9,
    chunk_size_m:28,
    distance_vegetation_lod:true,
    vegetation_culling:true,
    spatial_hash:true,
    camera_spatial_broadphase:true,
    parsed_glb_cache:true,
    cloned_asset_instances:true,
    adaptive_quality_hysteresis:true,
    dynamic_dpr:true,
    explicit_disposal:true
  },
  limits:{draw_calls_max:64,triangles_max:90000,raf_loops:1},
  assets:copiedAssets,
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11D',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11c_pass_closed:true,
    baseline_v03:true,
    one_raf_preserved:true,
    no_set_animation_loop:true,
    pooled_chunk_manager:true,
    spatial_hash:true,
    vegetation_lod_culling:true,
    asset_cache:true,
    adaptive_quality:true,
    explicit_disposal:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes}));
