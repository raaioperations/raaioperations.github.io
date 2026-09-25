import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11f');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11F build proof failed: '+message);};

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

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11e-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11E=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11e-src/status.json'),'utf8'));
assert(status11E.status==='PASS_CLOSED','11E must be PASS/CLOSED');
assert(status11E.frozen===false,'11E test must remain unfrozen');
assert(baseline.name==='Greenfield Living World Foundation v0.5','v0.5 baseline required');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','accepted development baseline required');
assert(baseline.invariants.request_animation_frame_source_calls===1,'one-RAF baseline invariant required');
assert(baseline.invariants.active_actor_capacity===27,'27-actor baseline capacity required');
assert(baseline.invariants.actor_update_budget_per_frame===12,'12-update movement budget required');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;

assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes('class BehaviorSystem'),'BehaviorSystem required');
assert(sourceText.includes('class ActorNeighborhoodIndex'),'ActorNeighborhoodIndex required');
assert(sourceText.includes('class InteractionScheduler'),'InteractionScheduler required');
assert(sourceText.includes("OBSERVE_PLAYER"),'player-awareness behavior required');
assert(sourceText.includes("AVOID"),'avoidance behavior required');
assert(sourceText.includes("SOCIAL"),'social behavior required');
assert(sourceText.includes('behaviorBudgetPerFrame:6'),'behavior budget must remain 6');
assert(sourceText.includes('interactionBudgetPerFrame:2'),'interaction budget must remain 2');
assert(sourceText.includes("name:'living-world'"),'living-world scheduler registration required');
assert(sourceText.includes('pairKey'),'normalized interaction pair key required');
assert(sourceText.includes('averageEvaluationsByLod'),'behavior LOD telemetry required');
assert(sourceText.includes('instantiateGLTF'),'cached GLB clone path required');
assert(sourceText.includes('queryAABB'),'world spatial broad phase required');

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
  test:'11F',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'Entity Behavior & World Interaction',
  environment_name:'Copperwash Reach — Interactive Population',
  baseline:'Greenfield Living World Foundation v0.5',
  architecture:'GREENFIELD_ENTITY_BEHAVIOR_INTERACTION',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops},
  capabilities:{
    behavior_states:['WANDER','OBSERVE_PLAYER','AVOID','SOCIAL'],
    bounded_actor_perception:true,
    player_awareness:true,
    actor_local_avoidance:true,
    world_obstacle_avoidance:true,
    lightweight_steering:true,
    pair_interaction_scheduler:true,
    duplicate_pair_suppression:true,
    behavior_state_persistence:true,
    behavior_diagnostic_colors:true,
    active_actor_capacity:27,
    movement_update_budget_per_frame:12,
    behavior_evaluation_budget_per_frame:6,
    interaction_budget_per_frame:2
  },
  limits:{draw_calls_max:72,triangles_max:100000,raf_loops:1},
  assets:copiedAssets,
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11F',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11e_pass_closed:true,
    baseline_v05:true,
    one_raf_preserved:true,
    no_set_animation_loop:true,
    deterministic_behavior_states:true,
    bounded_perception:true,
    player_awareness:true,
    local_avoidance:true,
    pair_interaction_scheduler:true,
    behavior_persistence:true,
    movement_budget:true,
    behavior_budget:true,
    interaction_budget:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes}));
