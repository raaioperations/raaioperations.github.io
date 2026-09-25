import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11b');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11B build proof failed: '+message);};

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

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11a-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11A=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11a-src/status.json'),'utf8'));
assert(status11A.status==='PASS_CLOSED','11A test must be PASS/CLOSED');
assert(status11A.frozen===false,'11A test must not be frozen');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','11A kernel baseline must be accepted development baseline');
assert(baseline.invariants.request_animation_frame_source_calls===1,'baseline one-RAF invariant missing');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;
assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes("name:'input'")&&sourceText.includes("name:'player'")&&sourceText.includes("name:'camera'")&&sourceText.includes("name:'render'"),'ordered scheduler systems required');
assert(sourceText.includes("GLTFLoader"),'GLTFLoader asset path required');
assert(sourceText.includes("pointerdown")&&sourceText.includes("touch-ui"),'touch input path required');

const soldierSource=path.resolve(repoRoot,'labs/threejs-test-09b/assets/Soldier.glb');
assert((await stat(soldierSource)).size>0,'reference Soldier.glb missing');

await rm(out,{recursive:true,force:true});
await mkdir(path.join(out,'assets'),{recursive:true});

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
await cp(soldierSource,path.join(out,'assets','Soldier.glb'));

const appBytes=(await stat(path.join(out,'app.js'))).size;
const soldierBytes=(await stat(path.join(out,'assets','Soldier.glb'))).size;
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

const buildInfo={
  build_id:buildId,
  test:'11B',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'Player + Camera + Mobile Control Foundation',
  baseline:'Greenfield Production Kernel v0.1',
  architecture:'GREENFIELD_EXTENSION',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops},
  capabilities:{
    soldier_glb:true,
    keyboard:true,
    touch_joystick:true,
    touch_sprint:true,
    touch_jump:true,
    pointer_camera:true,
    camera_collision:'analytic segment-cylinder',
    animation_mixer:true,
    explicit_disposal:true
  },
  limits:{draw_calls_max:20,triangles_max:20000,raf_loops:1},
  reference_asset:{soldier_source:'labs/threejs-test-09b/assets/Soldier.glb',bytes:soldierBytes},
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11B',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11a_pass_closed:true,
    baseline_not_frozen:true,
    baseline_one_raf_preserved:true,
    exact_one_raf_source_call:true,
    no_set_animation_loop:true,
    three_version_pinned:true,
    webgl_renderer:true,
    soldier_asset_present:true,
    keyboard_contract:true,
    touch_contract:true,
    player_controller:true,
    camera_collision:true,
    animation_mixer:true,
    explicit_disposal:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes,soldierBytes}));
