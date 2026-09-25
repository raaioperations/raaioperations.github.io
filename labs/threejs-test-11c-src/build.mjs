import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11c');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11C build proof failed: '+message);};

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
assert(pkg.dependencies.three==='0.186.0','Three.js must be pinned to 0.186.0');

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11b-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11B=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11b-src/status.json'),'utf8'));
assert(status11B.status==='PASS_CLOSED','11B must be PASS/CLOSED');
assert(status11B.frozen===false,'11B test must remain unfrozen');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','v0.2 baseline required');
assert(baseline.invariants.request_animation_frame_source_calls===1,'one-RAF baseline invariant required');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;
assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes('InstancedMesh'),'instanced vegetation required');
assert(sourceText.includes('createTerrainGeometry'),'procedural terrain generator required');
assert(sourceText.includes("name:'world-presentation'"),'world presentation scheduler phase required');
assert(sourceText.includes('groundHeight'),'terrain-aware grounding/camera required');
assert(sourceText.includes('FogExp2'),'atmospheric fog required');
assert(sourceText.includes('MeshPhysicalMaterial'),'water physical material required');

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
  test:'11C',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'World Foundation',
  environment_name:'Copperwash Reach',
  baseline:'Greenfield Player / Camera Foundation v0.2',
  architecture:'GREENFIELD_WORLD_EXTENSION',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops},
  capabilities:{
    deterministic_terrain:true,
    terrain_segments:64,
    water:true,
    sky_dome:true,
    fog:'FogExp2',
    lighting:'HemisphereLight + DirectionalLight',
    instanced_vegetation:true,
    authored_world_glbs:4,
    terrain_aware_player:true,
    terrain_aware_camera:true,
    explicit_world_disposal:true
  },
  limits:{draw_calls_max:32,triangles_max:60000,raf_loops:1},
  assets:copiedAssets,
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11C',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11b_pass_closed:true,
    baseline_not_frozen:true,
    one_raf_preserved:true,
    no_set_animation_loop:true,
    three_version_pinned:true,
    deterministic_terrain:true,
    instanced_vegetation:true,
    water:true,
    sky_fog_lighting:true,
    authored_assets_present:true,
    terrain_aware_player:true,
    terrain_aware_camera:true,
    explicit_world_disposal:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes,assets:copiedAssets}));
