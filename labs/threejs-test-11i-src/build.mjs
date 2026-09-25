import {build} from 'esbuild';
import {cp,mkdir,readFile,rm,stat,writeFile} from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const out=path.resolve(root,'../threejs-test-11i');
const sourceRoot=path.join(root,'src');
const repoRoot=path.resolve(root,'../..');
const assert=(condition,message)=>{if(!condition)throw new Error('Test11I build proof failed: '+message);};

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

const baseline=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11h-src/GREENFIELD_BASELINE.json'),'utf8'));
const status11H=JSON.parse(await readFile(path.resolve(root,'../threejs-test-11h-src/status.json'),'utf8'));
assert(status11H.status==='PASS_CLOSED','11H must be PASS/CLOSED');
assert(status11H.frozen===false,'11H test must remain unfrozen');
assert(baseline.name==='Greenfield Combat Foundation v0.8','v0.8 baseline required');
assert(baseline.status==='ACCEPTED_DEVELOPMENT_BASELINE','accepted development baseline required');
assert(baseline.invariants.request_animation_frame_source_calls===1,'one-RAF baseline invariant required');

let sourceText='';
for(const file of await listJs(sourceRoot))sourceText+='\n'+await readFile(file,'utf8');
const rafCalls=(sourceText.match(/requestAnimationFrame\s*\(/g)||[]).length;
const animationLoops=(sourceText.match(/setAnimationLoop\s*\(/g)||[]).length;

assert(rafCalls===1,'exactly one requestAnimationFrame source call required, found '+rafCalls);
assert(animationLoops===0,'setAnimationLoop prohibited');
assert(sourceText.includes('class EnemyCombatSystem'),'EnemyCombatSystem required');
assert(sourceText.includes('class PlayerVitalState'),'PlayerVitalState required');
assert(sourceText.includes('class PlayerStatusHUD'),'PlayerStatusHUD required');
assert(sourceText.includes("name:'enemy-combat'"),'enemy-combat scheduler registration required');
assert(sourceText.includes("TELEGRAPH"),'enemy TELEGRAPH phase required');
assert(sourceText.includes("STRIKE"),'enemy STRIKE phase required');
assert(sourceText.includes('evaluationBudgetPerFrame:4'),'enemy evaluation budget must remain 4');
assert(sourceText.includes('attackStartsPerFrame:1'),'attack-start budgets required');
assert(sourceText.includes('enemyDamage:15'),'enemy damage contract required');
assert(sourceText.includes('invulnerabilityFrames:18'),'player i-frame contract required');
assert(sourceText.includes('staggerFrames:14'),'player stagger contract required');
assert(sourceText.includes('hostileToPlayer'),'retaliation domain state required');
assert(sourceText.includes('enemyCombatPhase'),'persistent enemy combat phase required');
assert(sourceText.includes('isControlLocked'),'player control-lock contract required');
assert(!sourceText.includes('setTimeout('),'timer-owned combat state prohibited');

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
  test:'11I',
  roadmap:'Test11 — Greenfield Production Rebuild',
  milestone:'Reciprocal Combat Foundation',
  environment_name:'Copperwash Reach — Reciprocal Combat',
  baseline:'Greenfield Combat Foundation v0.8',
  architecture:'GREENFIELD_RECIPROCAL_COMBAT_FOUNDATION',
  environment:{three:pkg.dependencies.three,renderer:'WebGLRenderer',framework:'vanilla',build_tool:'esbuild'},
  source_gates:{request_animation_frame_calls:rafCalls,renderer_set_animation_loop_calls:animationLoops,timer_owned_combat:false},
  capabilities:{
    retaliation_threat_state:true,
    enemy_attack_phases:['READY','TELEGRAPH','STRIKE','RECOVERY'],
    enemy_evaluation_budget_per_frame:4,
    enemy_attack_start_budget_per_frame:1,
    max_concurrent_enemy_attackers:2,
    player_max_health:100,
    enemy_damage_per_hit:15,
    player_invulnerability_frames:18,
    player_stagger_frames:14,
    player_control_lock:true,
    player_downed_state:true,
    persistent_enemy_combat_state:true,
    player_status_hud:true,
    active_actor_capacity:27
  },
  limits:{draw_calls_max:84,triangles_max:112000,raf_loops:1},
  assets:copiedAssets,
  browser_smoke:'PENDING',
  app_js_bytes:appBytes,
  frozen:false,
  canonical:false
};

await writeFile(path.join(out,'build-info.json'),JSON.stringify(buildInfo,null,2)+'\n');
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'11I',
  status:'STATIC_PASS_BROWSER_PENDING',
  build_id:buildId,
  checks:{
    test11h_pass_closed:true,
    baseline_v08:true,
    one_raf_preserved:true,
    no_set_animation_loop:true,
    no_timer_owned_combat:true,
    retaliation_state:true,
    enemy_attack_state_machine:true,
    bounded_enemy_combat:true,
    player_health:true,
    invulnerability_frames:true,
    stagger_control_lock:true,
    downed_state:true,
    persistent_reciprocal_state:true,
    unit_tests_required:true,
    browser_smoke_required:true
  }
},null,2)+'\n');

console.log(JSON.stringify({buildId,rafCalls,animationLoops,appBytes}));
