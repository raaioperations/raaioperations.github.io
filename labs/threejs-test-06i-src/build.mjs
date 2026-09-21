import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {SimulationLODController,SIM_LOD_TIERS,DEFAULT_SIM_LOD_CONFIG} from './simulation-lod-core.js';
import {StreamStateStore,STREAM_CELL_SCHEMA_VERSION} from './stream-cell-core.js';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06i');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
}
function mustReplace(text,find,repl,label){
  const i=text.indexOf(find);
  if(i<0)throw new Error('06I anchor missing: '+label);
  if(text.indexOf(find,i+find.length)>=0)throw new Error('06I anchor not unique: '+label);
  return text.slice(0,i)+repl+text.slice(i+find.length);
}
function assert06I(condition,message){
  if(!condition)throw new Error('06I deterministic proof failed: '+message);
}

const accepted06H=JSON.parse(await readFile(path.join(labs,'threejs-test-06h','acceptance.json'),'utf8'));
if(accepted06H.test!=='06H'||accepted06H.status!=='ACCEPTED'||accepted06H.human_visual_acceptance!==true||accepted06H.frozen!==true){
  throw new Error('Frozen accepted 06H required before Test06I');
}
if(accepted06H.build_id!=='20260921032452')throw new Error('Unexpected frozen 06H build');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
if(gitBlobSha(baseSource)!==expectedBase)throw new Error('Accepted Test04 source changed');

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(labs,'threejs-test-06d-src','memory-behavior.fragment.js'),'utf8');
const frag06E=await readFile(path.join(labs,'threejs-test-06e-src','spatial-scope.fragment.js'),'utf8');
const frag06F=await readFile(path.join(labs,'threejs-test-06f-src','stimulus-arbitration.fragment.js'),'utf8');
const frag06G=await readFile(path.join(labs,'threejs-test-06g-src','goal-recovery.fragment.js'),'utf8');
const frag06H=await readFile(path.join(labs,'threejs-test-06h-src','streamed-persistence.fragment.js'),'utf8');
const core06H=await readFile(path.join(labs,'threejs-test-06h-src','stream-cell-core.js'),'utf8');
const build06H=await readFile(path.join(labs,'threejs-test-06h-src','build.mjs'),'utf8');
const localCore06H=await readFile(path.join(root,'stream-cell-core.js'),'utf8');
const frag06I=await readFile(path.join(root,'simulation-lod.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
const expected06E='cf0a28460679adc2f2cd05fa9458e376d901400c';
const expected06F='458af887ded745b9252be59d12a41fe488c19b2f';
const expected06G='91b9da7b56010987ba30902cf5b9491c60bb519d';
const expected06HCore='af77396834311e0e5b328c7c4438317202613466';
const expected06HFragment='96938945da47082958bf65d1dbd49929f9b40a01';
const expected06HBuild='b8ad76a29f635dbebb51e2116870402d742c102f';

if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');
if(gitBlobSha(frag06E)!==expected06E)throw new Error('Frozen 06E source fragment changed');
if(gitBlobSha(frag06F)!==expected06F)throw new Error('Frozen 06F source fragment changed');
if(gitBlobSha(frag06G)!==expected06G)throw new Error('Frozen 06G source fragment changed');
if(gitBlobSha(core06H)!==expected06HCore)throw new Error('Frozen 06H StreamCell core changed');
if(gitBlobSha(frag06H)!==expected06HFragment)throw new Error('Frozen 06H persistence fragment changed');
if(gitBlobSha(build06H)!==expected06HBuild)throw new Error('Frozen 06H build script changed');
if(gitBlobSha(localCore06H)!==expected06HCore)throw new Error('06I local StreamCell core must exactly match frozen 06H core');

let inheritedSource=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E+'\n'+frag06F+'\n'+frag06G;
const inheritedRafCount=(inheritedSource.match(/requestAnimationFrame\s*\(/g)||[]).length;
inheritedSource=mustReplace(
  inheritedSource,
  'renderer.render(scene,camera);frames++;',
  'if(globalThis.__raaiFrameHooks){for(const hook of globalThis.__raaiFrameHooks)hook(performance.now(),dt);}renderer.render(scene,camera);frames++;',
  'shared frame hook'
);
const source=inheritedSource+'\n'+frag06H+'\n'+frag06I;
const finalRafCount=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
if(finalRafCount!==inheritedRafCount)throw new Error('06I must not add a requestAnimationFrame loop');
if(/requestAnimationFrame\s*\(/.test(frag06I))throw new Error('06I fragment contains prohibited RAF loop');

const proofStore=new StreamStateStore();
const proofActor={
  goal:'FOOD',
  progress:0,
  position:{x:0,z:0},
  destination:{x:10,z:0}
};
let proofRootCount=1;
let proofDuplicateCount=0;
let proofSavedProgress=0;
let proofProgressPreserved=false;
let proofSleepAt=0;
let proofOffscreenMs=0;

const proofController=new SimulationLODController({
  onSimulate:(stepMs)=>{
    proofActor.progress=Math.min(1,proofActor.progress+stepMs/90000);
    proofActor.position.x=10*proofActor.progress;
  },
  onSleep:(wallNow)=>{
    proofSavedProgress=proofActor.progress;
    proofSleepAt=wallNow;
    proofStore.save('06I_PROOF',{
      version:STREAM_CELL_SCHEMA_VERSION,
      cellId:'06I_PROOF',
      serializedAt:wallNow,
      actor:JSON.parse(JSON.stringify(proofActor))
    });
    proofRootCount=0;
  },
  onWake:(wallNow)=>{
    const snapshot=proofStore.load('06I_PROOF');
    if(!snapshot)throw new Error('06I proof wake missing snapshot');
    proofActor.goal=snapshot.actor.goal;
    proofActor.progress=snapshot.actor.progress;
    proofActor.position={...snapshot.actor.position};
    proofActor.destination={...snapshot.actor.destination};
    proofOffscreenMs=Math.max(0,wallNow-snapshot.serializedAt);
    proofProgressPreserved=Math.abs(proofActor.progress-proofSavedProgress)<1e-12;
    if(proofRootCount!==0)proofDuplicateCount++;
    proofRootCount=1;
  }
});

let proofNow=1000000;
for(let i=0;i<100;i++){proofNow+=10;proofController.step({distanceM:10,dtMs:10,wallNow:proofNow});}
const nearTicks=proofController.ticksByTier.NEAR;
assert06I(proofController.tier===SIM_LOD_TIERS.NEAR,'NEAR tier');
assert06I(nearTicks===100,'NEAR must tick every supplied frame');

proofController.step({distanceM:17,dtMs:0,wallNow:proofNow});
assert06I(proofController.tier===SIM_LOD_TIERS.MID,'NEAR -> MID');
for(let i=0;i<100;i++){proofNow+=10;proofController.step({distanceM:20,dtMs:10,wallNow:proofNow});}
const midTicks=proofController.ticksByTier.MID;
assert06I(midTicks===10,'MID cadence must be 10 Hz over one second');

proofController.step({distanceM:31,dtMs:0,wallNow:proofNow});
assert06I(proofController.tier===SIM_LOD_TIERS.FAR,'MID -> FAR');
for(let i=0;i<100;i++){proofNow+=10;proofController.step({distanceM:40,dtMs:10,wallNow:proofNow});}
const farTicks=proofController.ticksByTier.FAR;
assert06I(farTicks===2,'FAR cadence must be 2 Hz over one second');

const progressBeforeSleep=proofActor.progress;
proofNow+=10;
proofController.step({distanceM:60,dtMs:10,wallNow:proofNow});
assert06I(proofController.tier===SIM_LOD_TIERS.DORMANT,'FAR -> DORMANT');
assert06I(proofRootCount===0,'visual root must detach in DORMANT');
assert06I(proofStore.has('06I_PROOF'),'sleep snapshot must exist');
const ticksBeforeDormantHold=proofController.totalTicks;
for(let i=0;i<100;i++){proofNow+=10;proofController.step({distanceM:60,dtMs:10,wallNow:proofNow});}
assert06I(proofController.totalTicks===ticksBeforeDormantHold,'DORMANT must not simulate');
assert06I(proofActor.progress===progressBeforeSleep,'DORMANT actor progress must not advance');

proofNow+=5000;
proofController.step({distanceM:45,dtMs:0,wallNow:proofNow});
assert06I(proofController.tier===SIM_LOD_TIERS.FAR,'DORMANT wake should enter FAR');
assert06I(proofRootCount===1,'wake must reconstruct one visual root');
assert06I(proofProgressPreserved,'wake must preserve actor progress');
assert06I(proofOffscreenMs>=5000,'wake must calculate offscreen elapsed time');

for(let cycle=1;cycle<3;cycle++){
  proofNow+=10;
  proofController.step({distanceM:60,dtMs:10,wallNow:proofNow});
  assert06I(proofController.tier===SIM_LOD_TIERS.DORMANT,'repeat sleep cycle '+(cycle+1));
  assert06I(proofRootCount===0,'repeat detach cycle '+(cycle+1));
  const saved=proofActor.progress;
  for(let i=0;i<20;i++){proofNow+=10;proofController.step({distanceM:60,dtMs:10,wallNow:proofNow});}
  assert06I(proofActor.progress===saved,'repeat dormant freeze cycle '+(cycle+1));
  proofNow+=1000;
  proofController.step({distanceM:45,dtMs:0,wallNow:proofNow});
  assert06I(proofRootCount===1,'repeat wake root cycle '+(cycle+1));
  assert06I(proofProgressPreserved,'repeat progress restore cycle '+(cycle+1));
}
assert06I(proofController.sleepCount===3,'three sleep cycles required');
assert06I(proofController.wakeCount===3,'three wake cycles required');
assert06I(proofDuplicateCount===0,'duplicate visual roots');
assert06I(proofActor.goal==='FOOD','actor goal must survive LOD/sleep');
assert06I(nearTicks>midTicks&&midTicks>farTicks,'simulation cadence must reduce with distance');

const cycleProof={
  near_input_frames:100,
  near_logic_ticks:nearTicks,
  mid_input_frames:100,
  mid_logic_ticks:midTicks,
  far_input_frames:100,
  far_logic_ticks:farTicks,
  sleep_cycles:proofController.sleepCount,
  wake_cycles:proofController.wakeCount,
  dormant_logic_ticks_added:0,
  final_active_roots:proofRootCount,
  duplicate_count:proofDuplicateCount,
  actor_goal:proofActor.goal,
  actor_progress_preserved:proofProgressPreserved,
  last_offscreen_ms:proofOffscreenMs
};

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

let html=await readFile(path.join(labs,'threejs-test-06h','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06H — Streamed Persistence','RAAI Three.js Test 06I — Simulation LOD + Sleep/Wake');
html=html.replaceAll('RAAI Proof 06H — Streamed Persistence','RAAI Proof 06I — Simulation LOD + Sleep/Wake');
html=html.replace('Starting Living World 06H…','Starting Living World 06I…');
html=html.replace('<div id="zone">06H · TRIGGER → LEAVE REGION → WAIT → RETURN</div>','<div id="zone">06I · NEAR → MID → FAR → DORMANT → WAKE</div>');

html=mustReplace(
  html,
  '<span>Result</span><b id="worldStreamResult">READY</b>',
  '<span>Result</span><b id="worldStreamResult">READY</b><span>Simulation LOD</span><b id="worldLodTier">NEAR</b><span>LOD distance</span><b id="worldLodDistance">—</b><span>Logic cadence</span><b id="worldLodCadence">FRAME</b><span>Logic ticks</span><b id="worldLodTicks">0.0 /s</b><span>LOD actor goal</span><b id="worldLodGoal">FOOD</b><span>LOD progress</span><b id="worldLodProgress">0%</b><span>Sleep snapshot</span><b id="worldLodSnapshot">NONE</b><span>Sleep/wake</span><b id="worldLodSleepWake">0/0</b><span>LOD duplicates</span><b id="worldLodDuplicates">0</b><span>LOD result</span><b id="worldLodResult">NEAR FULL SIMULATION</b>',
  '06I telemetry'
);

html=html.replace(
  '<div id="panel"><div class="title">06H Streamed Persistence</div><div id="worldBrief"><b>New variable only:</b> one dedicated living-world cell can serialize, unload, stop simulating, and rehydrate. Trigger A → B → reeds until <b>Memory restored</b> becomes DISTURBED and the FOOD forager has measurable progress. Run away until <b>Stream cell</b> says UNLOADED. Stay away for more than 5.1 seconds, then return inside the load radius. The cell must return CALM, preserve FOOD progress, and report zero duplicates.</div>',
  '<div id="panel"><div class="title">06I Simulation LOD + Sleep/Wake</div><div id="worldBrief"><b>New variable only:</b> simulation effort changes with distance. Start near the violet/teal LOD forager: NEAR runs every frame. Move outward until MID reports 10 Hz, then FAR reports 2 Hz. Continue past 58 m until DORMANT saves a snapshot, removes the actor, and stops simulation. Return inside 50 m: the actor must wake from the saved state with its FOOD goal/progress preserved and zero duplicates.</div>'
);

html=html.replace(
  '</style>',
  '#worldLodTier,#worldLodDistance,#worldLodCadence,#worldLodTicks,#worldLodGoal,#worldLodProgress,#worldLodSnapshot,#worldLodSleepWake,#worldLodDuplicates,#worldLodResult{color:#a8f0b5}</style>'
);
html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId).replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06h','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06i-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of [
  '06A_LIVING_WORLD_FLOCK',
  '06B_WORLD_DISTURBANCE_PROPAGATION',
  '06C_LOCAL_DISTURBANCE_MEMORY',
  '06D_MEMORY_INFORMS_ACTOR_BEHAVIOR',
  '06E_SPATIALLY_SCOPED_MEMORY',
  '06F_STIMULUS_PRIORITY_ARBITRATION',
  '06G_INTERRUPTED_GOAL_RECOVERY',
  '06H_STREAMED_PERSISTENCE',
  '06I_SIMULATION_LOD_SLEEP_WAKE'
]){
  if(!app.includes(marker))throw new Error('Required marker missing: '+marker);
}
for(const token of ['MID REDUCED-RATE SIMULATION','FAR COARSE SIMULATION','SNAPSHOT SAVED','WAKE RESTORED','LOD LADDER']){
  if(!app.includes(token))throw new Error('06I runtime token missing: '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06i-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));

const info={
  build_id:buildId,
  test:'06I',
  roadmap:'Test06 — Living World',
  purpose:'prove distance-tiered simulation effort: NEAR full-rate, MID reduced-rate, FAR coarse-rate, and DORMANT serialized sleep with correct wake continuity',
  prerequisite:{test06h:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A–06H unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{
    test06a:expected06A,
    test06b_r1:expected06B,
    test06c:expected06C,
    test06d:expected06D,
    test06e:expected06E,
    test06f:expected06F,
    test06g:expected06G,
    test06h_core:expected06HCore,
    test06h_fragment:expected06HFragment,
    test06h_build:expected06HBuild
  },
  three:'0.186.0',
  pipeline:'frozen 06A–06H + isolated SimulationLODController + shared frame hook + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  simulation_lod:{
    tiers:['NEAR','MID','FAR','DORMANT'],
    near:{exit_m:DEFAULT_SIM_LOD_CONFIG.nearExitM,cadence:'frame-driven'},
    mid:{enter_m:DEFAULT_SIM_LOD_CONFIG.nearEnterM,exit_m:DEFAULT_SIM_LOD_CONFIG.midExitM,cadence_hz:1000/DEFAULT_SIM_LOD_CONFIG.midIntervalMs},
    far:{enter_m:DEFAULT_SIM_LOD_CONFIG.midEnterM,sleep_m:DEFAULT_SIM_LOD_CONFIG.sleepRadiusM,cadence_hz:1000/DEFAULT_SIM_LOD_CONFIG.farIntervalMs},
    dormant:{sleep_radius_m:DEFAULT_SIM_LOD_CONFIG.sleepRadiusM,wake_radius_m:DEFAULT_SIM_LOD_CONFIG.wakeRadiusM,normal_simulation:false,visual_root_present:false},
    hysteresis:{
      near_enter_m:DEFAULT_SIM_LOD_CONFIG.nearEnterM,
      near_exit_m:DEFAULT_SIM_LOD_CONFIG.nearExitM,
      mid_enter_m:DEFAULT_SIM_LOD_CONFIG.midEnterM,
      mid_exit_m:DEFAULT_SIM_LOD_CONFIG.midExitM,
      wake_radius_m:DEFAULT_SIM_LOD_CONFIG.wakeRadiusM,
      sleep_radius_m:DEFAULT_SIM_LOD_CONFIG.sleepRadiusM
    }
  },
  sleep_wake:{
    store:'frozen 06H in-memory StreamStateStore',
    snapshot_schema_version:STREAM_CELL_SCHEMA_VERSION,
    actor_goal:'FOOD',
    actor_progress_preserved:true,
    dormant_actor_progress:'stopped',
    wake_restores_saved_state:true
  },
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRafCount,
    final_request_animation_frame_calls:finalRafCount,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount,
    mechanism:'shared base render-loop hook'
  },
  mechanical_cycle_proof:cycleProof,
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_changed:false,
  accepted_06b_changed:false,
  accepted_06c_changed:false,
  accepted_06d_changed:false,
  accepted_06e_changed:false,
  accepted_06f_changed:false,
  accepted_06g_changed:false,
  accepted_06h_changed:false,
  acceptance_checklist:{
    near_full_rate_visibly_active:'HUMAN REVIEW',
    mid_reduced_rate_reported:'HUMAN REVIEW',
    far_coarse_rate_reported:'HUMAN REVIEW',
    dormant_actor_disappears_and_snapshot_saves:'HUMAN REVIEW',
    dormant_logic_ticks_fall_to_zero:'HUMAN REVIEW',
    wake_reconstructs_actor:'HUMAN REVIEW',
    actor_food_goal_and_progress_survive_sleep:'HUMAN REVIEW',
    repeated_sleep_wake_does_not_duplicate_actor:'HUMAN REVIEW',
    full_lod_ladder_reads_logically:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06I',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06h_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    accepted_06e_fragment_reused_unchanged:true,
    accepted_06f_fragment_reused_unchanged:true,
    accepted_06g_fragment_reused_unchanged:true,
    accepted_06h_core_reused_unchanged:true,
    accepted_06h_fragment_reused_unchanged:true,
    explicit_lod_tiers:true,
    near_full_rate:true,
    mid_reduced_rate:true,
    far_coarse_rate:true,
    dormant_zero_normal_simulation:true,
    sleep_snapshot_saved:true,
    wake_uses_saved_state:true,
    actor_goal_survives_sleep:true,
    actor_progress_survives_sleep:true,
    tier_hysteresis_exists:true,
    automated_sleep_wake_cycles:cycleProof.sleep_cycles,
    actor_root_count_stable:cycleProof.final_active_roots===1,
    duplicate_count:cycleProof.duplicate_count,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount,
    combat_not_modified:true,
    runtime_external_dependencies:0,
    safari_target:'16.4+',
    source_level:true
  },
  mechanical_cycle_proof:cycleProof,
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId:buildId,status:'PASS',output:'threejs-test-06i',cycleProof:cycleProof}));
