import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat, copyFile, rm } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import * as THREE from 'three';
import {StreamCell,StreamStateStore,STREAM_CELL_SCHEMA_VERSION,DEFAULT_STREAM_CONFIG} from './stream-cell-core.js';

const root=process.cwd();
const labs=path.resolve(root,'..');
const baseRoot=path.join(labs,'threejs-test-04-src');
const out=path.join(labs,'threejs-test-06h');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`06H anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`06H anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

const accepted06G=JSON.parse(await readFile(path.join(labs,'threejs-test-06g','acceptance.json'),'utf8'));
if(accepted06G.test!=='06G'||accepted06G.status!=='ACCEPTED'||accepted06G.human_visual_acceptance!==true||accepted06G.frozen!==true)throw new Error('Frozen accepted 06G required before Test06H');

const baseSource=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(baseSource);
if(actualBase!==expectedBase)throw new Error(`Accepted Test04 source changed (${actualBase}); refusing unreviewed inheritance.`);

const frag06A=await readFile(path.join(labs,'threejs-test-06a-src','living-world.fragment.js'),'utf8');
const frag06B=await readFile(path.join(labs,'threejs-test-06b-src','disturbance-propagation.fragment.js'),'utf8');
const frag06C=await readFile(path.join(labs,'threejs-test-06c-src','local-memory.fragment.js'),'utf8');
const frag06D=await readFile(path.join(labs,'threejs-test-06d-src','memory-behavior.fragment.js'),'utf8');
const frag06E=await readFile(path.join(labs,'threejs-test-06e-src','spatial-scope.fragment.js'),'utf8');
const frag06F=await readFile(path.join(labs,'threejs-test-06f-src','stimulus-arbitration.fragment.js'),'utf8');
const frag06G=await readFile(path.join(labs,'threejs-test-06g-src','goal-recovery.fragment.js'),'utf8');
const frag06H=await readFile(path.join(root,'streamed-persistence.fragment.js'),'utf8');

const expected06A='e79d37ccb063aeb3cd1852ecabeefdea25089a3f';
const expected06B='0a7725c5f53c0f6ed582456a6baceaa886af2ade';
const expected06C='4016f6780987bc33dc3bc353b9d0ec507bde7215';
const expected06D='c5b73ef81dd2752c1d357c0178f0c33b1ce415ab';
const expected06E='cf0a28460679adc2f2cd05fa9458e376d901400c';
const expected06F='458af887ded745b9252be59d12a41fe488c19b2f';
const expected06G='91b9da7b56010987ba30902cf5b9491c60bb519d';
if(gitBlobSha(frag06A)!==expected06A)throw new Error('Frozen 06A source fragment changed');
if(gitBlobSha(frag06B)!==expected06B)throw new Error('Frozen 06B-R1 source fragment changed');
if(gitBlobSha(frag06C)!==expected06C)throw new Error('Frozen 06C source fragment changed');
if(gitBlobSha(frag06D)!==expected06D)throw new Error('Frozen 06D source fragment changed');
if(gitBlobSha(frag06E)!==expected06E)throw new Error('Frozen 06E source fragment changed');
if(gitBlobSha(frag06F)!==expected06F)throw new Error('Frozen 06F source fragment changed');
if(gitBlobSha(frag06G)!==expected06G)throw new Error('Frozen 06G source fragment changed');

const inheritedSource=baseSource+'\n'+frag06A+'\n'+frag06B+'\n'+frag06C+'\n'+frag06D+'\n'+frag06E+'\n'+frag06F+'\n'+frag06G;
const inheritedRafCount=(inheritedSource.match(/requestAnimationFrame\s*\(/g)||[]).length;
let source=inheritedSource;
source=mustReplace(
  source,
  'renderer.render(scene,camera);frames++;',
  'if(globalThis.__raaiFrameHooks){for(const hook of globalThis.__raaiFrameHooks)hook(performance.now(),dt);}renderer.render(scene,camera);frames++;',
  '06H shared frame hook'
);
source+='\n'+frag06H;
const finalRafCount=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
if(finalRafCount!==inheritedRafCount)throw new Error('06H must not add a requestAnimationFrame loop');
if(/requestAnimationFrame\s*\(/.test(frag06H))throw new Error('06H fragment contains a prohibited RAF loop');
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);

function assert06H(condition,message){if(!condition)throw new Error('06H deterministic proof failed: '+message);}
const proofScene=new THREE.Scene();
const proofStore=new StreamStateStore();
let proofDisposedGeometry=0,proofDisposedMaterial=0;
const proofCellId='06H_MECHANICAL_PROOF';
const proofAttach=()=>{
  const root=new THREE.Group();
  root.userData.streamCellId=proofCellId;
  const geometry=new THREE.BoxGeometry(1,1,1);
  const material=new THREE.MeshBasicMaterial();
  const actor=new THREE.Mesh(geometry,material);
  root.add(actor);
  proofScene.add(root);
  return {root};
};
const proofDetach=handle=>{
  proofScene.remove(handle.root);
  handle.root.traverse(obj=>{
    if(obj.geometry){obj.geometry.dispose();proofDisposedGeometry++;}
    if(obj.material){
      const materials=Array.isArray(obj.material)?obj.material:[obj.material];
      for(const material of materials){material.dispose();proofDisposedMaterial++;}
    }
  });
  handle.root.clear();
};
const proofRootCount=()=>proofScene.children.filter(o=>o.userData?.streamCellId===proofCellId).length;
const proofCell=new StreamCell({
  id:proofCellId,
  store:proofStore,
  actorStart:{x:0,z:0},
  actorDestination:{x:10,z:0},
  initialEventId:0,
  attachVisual:proofAttach,
  detachVisual:proofDetach,
  updateVisual:()=>{}
});
let proofNow=1000000;
proofCell.load(proofNow);
assert06H(proofRootCount()===1,'initial actor root count');
proofCell.update({dtMs:800,wallNow:proofNow+800,eventId:1});
assert06H(proofCell.state.memory.state==='DISTURBED','memory event did not activate');
assert06H(proofCell.state.actor.goal==='FOOD','actor goal changed');
assert06H(proofCell.state.actor.progress>0,'actor progress did not advance');
const initialActivationCount=proofCell.memoryActivationCount;

for(let cycle=0;cycle<3;cycle++){
  const progressBefore=proofCell.state.actor.progress;
  const unloadAt=proofNow+1000;
  const updateCountBefore=proofCell.updateCount;
  const snapshot=proofCell.unload(unloadAt);
  assert06H(proofRootCount()===0,'orphan scene root after unload cycle '+(cycle+1));
  assert06H(snapshot.version===STREAM_CELL_SCHEMA_VERSION,'snapshot schema version');
  assert06H(snapshot.cellId===proofCellId,'snapshot cell id');
  assert06H(snapshot.serializedAt===unloadAt,'snapshot serializedAt');
  assert06H(snapshot.actor.goal==='FOOD','snapshot actor goal');
  assert06H(snapshot.actor.progress===progressBefore,'snapshot actor progress');
  assert06H(Number.isFinite(snapshot.actor.position.x)&&Number.isFinite(snapshot.actor.destination.x),'snapshot actor transform');

  proofCell.update({dtMs:5000,wallNow:unloadAt+5000,eventId:1});
  assert06H(proofCell.updateCount===updateCountBefore,'dormant actor simulation advanced');
  assert06H(proofCell.state.actor.progress===progressBefore,'dormant actor progress changed');

  proofNow=unloadAt+6000;
  const restore=proofCell.load(proofNow);
  assert06H(restore.rehydrated===true,'rehydration did not use snapshot');
  assert06H(restore.offscreenMs===6000,'offscreen elapsed time');
  assert06H(proofRootCount()===1,'actor multiplied after restore cycle '+(cycle+1));
  assert06H(proofCell.state.memory.state==='CALM','expired memory did not resolve while dormant');
  assert06H(proofCell.state.actor.goal==='FOOD','actor goal did not survive');
  assert06H(proofCell.state.actor.progress===progressBefore,'actor progress did not survive');
  proofCell.update({dtMs:0,wallNow:proofNow,eventId:1});
  assert06H(proofCell.memoryActivationCount===initialActivationCount,'event replayed after rehydrate');
  assert06H(proofCell.duplicateCount===0,'duplicate event count increased');
  if(cycle<2)proofCell.update({dtMs:100,wallNow:proofNow+100,eventId:1});
}
assert06H(proofCell.unloadCount===3&&proofCell.restoreCount===3,'cycle counters');
assert06H(proofDisposedGeometry===3&&proofDisposedMaterial===3,'render resources were not disposed per unload');
const cycleProof={
  cycles:3,
  final_active_roots:proofRootCount(),
  unload_count:proofCell.unloadCount,
  restore_count:proofCell.restoreCount,
  memory_activation_count:proofCell.memoryActivationCount,
  duplicate_count:proofCell.duplicateCount,
  disposed_geometries:proofDisposedGeometry,
  disposed_materials:proofDisposedMaterial,
  actor_goal:proofCell.state.actor.goal,
  actor_progress_preserved:true,
  expired_timer_resolved:true
};

let html=await readFile(path.join(labs,'threejs-test-06g','index.html'),'utf8');
html=html.replaceAll('RAAI Three.js Test 06G — Interrupted Goal Recovery','RAAI Three.js Test 06H — Streamed Persistence');
html=html.replaceAll('RAAI Proof 06G — Interrupted Goal Recovery','RAAI Proof 06H — Streamed Persistence');
html=html.replace('Starting Living World 06G…','Starting Living World 06H…');
html=html.replace('<div id="zone">06G · FOOD GOAL → HAZARD INTERRUPT → FOOD RESUMES</div>','<div id="zone">06H · TRIGGER → LEAVE REGION → WAIT → RETURN</div>');

html=mustReplace(
  html,
  '<span>Recovery result</span><b id="worldRecoveryResult">PURSUING FOOD</b>',
  '<span>Recovery result</span><b id="worldRecoveryResult">PURSUING FOOD</b><span>Stream cell</span><b id="worldStreamLifecycle">ACTIVE</b><span>Cell distance</span><b id="worldStreamDistance">—</b><span>Snapshot</span><b id="worldStreamSnapshot">NONE</b><span>Offscreen time</span><b id="worldStreamOffscreen">0.0 s</b><span>Memory restored</span><b id="worldStreamMemory">CALM</b><span>Actor goal</span><b id="worldStreamGoal">FOOD</b><span>Actor progress</span><b id="worldStreamProgress">0%</b><span>Duplicates</span><b id="worldStreamDuplicates">0</b><span>Result</span><b id="worldStreamResult">READY</b>',
  '06H stream telemetry'
);

html=html.replace(
  '<div id="panel"><div class="title">06G Interrupted Goal Recovery</div><div id="worldBrief"><b>New variable only:</b> goal continuity across interruption. The teal forager begins with a FOOD goal before the disturbance. Trigger A → B → reeds. Hazard should suspend FOOD, force an evade, wait for world memory to clear, then restore the same FOOD goal and complete it. The actor must not forget its original intent.</div>',
  '<div id="panel"><div class="title">06H Streamed Persistence</div><div id="worldBrief"><b>New variable only:</b> one dedicated living-world cell can serialize, unload, stop simulating, and rehydrate. Trigger A → B → reeds until <b>Memory restored</b> becomes DISTURBED and the FOOD forager has measurable progress. Run away until <b>Stream cell</b> says UNLOADED. Stay away for more than 5.1 seconds, then return inside the load radius. The cell must return CALM, preserve FOOD progress, and report zero duplicates.</div>'
);

html=html.replace('</style>','#worldStreamLifecycle,#worldStreamDistance,#worldStreamSnapshot,#worldStreamOffscreen,#worldStreamMemory,#worldStreamGoal,#worldStreamProgress,#worldStreamDuplicates,#worldStreamResult{color:#a8f0b5}</style>');
html=html.replace(/app\.js\?v=\d+/g,`app.js?v=${buildId}`).replace(/sw\.js\?v=\d+/g,`sw.js?v=${buildId}`);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06g','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06h-main.js',loader:'js'},
  bundle:true,
  minify:true,
  format:'esm',
  target:['safari16.4'],
  outfile:path.join(out,'app.js'),
  legalComments:'none',
  treeShaking:true
});

const app=await readFile(path.join(out,'app.js'),'utf8');
for(const marker of ['06A_LIVING_WORLD_FLOCK','06B_WORLD_DISTURBANCE_PROPAGATION','06C_LOCAL_DISTURBANCE_MEMORY','06D_MEMORY_INFORMS_ACTOR_BEHAVIOR','06E_SPATIALLY_SCOPED_MEMORY','06F_STIMULUS_PRIORITY_ARBITRATION','06G_INTERRUPTED_GOAL_RECOVERY','06H_STREAMED_PERSISTENCE']){
  if(!app.includes(marker))throw new Error(`Required marker missing: ${marker}`);
}
for(const token of ['STATE SERIALIZED','STATE RESTORED','TIMER CAUGHT UP','NO DUPLICATES']){if(!app.includes(token))throw new Error('06H runtime token missing: '+token);}

const sw=`self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06h-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n`;
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
const info={
  build_id:buildId,
  test:'06H',
  roadmap:'Test06 — Living World',
  purpose:'prove one dedicated living-world cell can serialize, unload, stop simulation/rendering, preserve timed memory plus autonomous FOOD-goal progress, and rehydrate with correct offscreen time resolution',
  prerequisite:{test06g:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A + 06B-R1 + 06C + 06D + 06E + 06F + 06G unchanged; accepted Test04 environment',
  base_blob:expectedBase,
  frozen_source_blobs:{test06a:expected06A,test06b_r1:expected06B,test06c:expected06C,test06d:expected06D,test06e:expected06E,test06f:expected06F,test06g:expected06G},
  three:'0.186.0',
  pipeline:'source-level frozen 06A–06G + isolated StreamCell core + shared-frame-hook 06H fragment + esbuild local bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  stream_cell:{
    id:'06H_CELL_A',
    schema_version:STREAM_CELL_SCHEMA_VERSION,
    lifecycle:['ACTIVE','SERIALIZE','UNLOAD','UNLOADED','REHYDRATE','ACTIVE'],
    load_radius_m:DEFAULT_STREAM_CONFIG.loadRadiusM,
    unload_radius_m:DEFAULT_STREAM_CONFIG.unloadRadiusM,
    hysteresis_m:DEFAULT_STREAM_CONFIG.unloadRadiusM-DEFAULT_STREAM_CONFIG.loadRadiusM,
    contents:['one local timed environmental memory','one autonomous FOOD-goal forager with measurable progress'],
    loaded_draw_call_budget_added:3,
    unloaded_draw_call_budget_added:0
  },
  snapshot:{
    versioned:true,
    store:'in-memory StreamStateStore',
    uses_absolute_timestamps:true,
    fields:['version','cellId','serializedAt','memory.state','memory.startedAt','memory.expiresAt','memory.eventId','actor.goal','actor.suspendedGoal','actor.behaviorState','actor.progress','actor.position','actor.destination']
  },
  persistence:{
    memory_states:['DISTURBED','SETTLING','CALM'],
    disturbed_ms:DEFAULT_STREAM_CONFIG.disturbedMs,
    settling_ms:DEFAULT_STREAM_CONFIG.settlingMs,
    actor_goal:'FOOD',
    actor_progress_cap:DEFAULT_STREAM_CONFIG.actorProgressCap,
    dormant_actor_simulation:'stopped',
    elapsed_timer_resolution:'on rehydrate from absolute wall time',
    event_identity_persisted:true,
    duplicate_replay_expected:false
  },
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRafCount,
    final_request_animation_frame_calls:finalRafCount,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount,
    mechanism:'single shared base render-loop hook for 06H'
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
  acceptance_checklist:{
    cell_initially_active:'HUMAN REVIEW',
    local_memory_becomes_disturbed_after_accepted_world_event:'HUMAN REVIEW',
    forager_has_food_goal_and_visible_progress:'HUMAN REVIEW',
    leaving_beyond_unload_radius_removes_cell:'HUMAN REVIEW',
    offscreen_time_increases_while_unloaded:'HUMAN REVIEW',
    return_rehydrates_from_snapshot:'HUMAN REVIEW',
    expired_memory_returns_calm_not_restarted:'HUMAN REVIEW',
    actor_food_goal_and_progress_do_not_reset:'HUMAN REVIEW',
    nothing_visibly_duplicates:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06H',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06g_frozen_required:true,
    accepted_test04_blob_verified:true,
    accepted_06a_fragment_reused_unchanged:true,
    accepted_06b_r1_fragment_reused_unchanged:true,
    accepted_06c_fragment_reused_unchanged:true,
    accepted_06d_fragment_reused_unchanged:true,
    accepted_06e_fragment_reused_unchanged:true,
    accepted_06f_fragment_reused_unchanged:true,
    accepted_06g_fragment_reused_unchanged:true,
    explicit_stream_cell_lifecycle:true,
    snapshot_schema_version:STREAM_CELL_SCHEMA_VERSION,
    snapshot_saved_before_unload:true,
    snapshot_reused_on_rehydrate:true,
    unload_disables_actor_update:true,
    stream_scene_root_removed_on_unload:true,
    render_resources_disposed_on_unload:true,
    absolute_wall_clock_deadlines:true,
    offscreen_elapsed_time_calculated:true,
    expired_timer_resolved_while_dormant:true,
    actor_goal_survives:true,
    actor_progress_survives:true,
    event_id_persisted:true,
    duplicate_replay_guard:true,
    load_radius_m:DEFAULT_STREAM_CONFIG.loadRadiusM,
    unload_radius_m:DEFAULT_STREAM_CONFIG.unloadRadiusM,
    hysteresis_m:DEFAULT_STREAM_CONFIG.unloadRadiusM-DEFAULT_STREAM_CONFIG.loadRadiusM,
    automated_cycles:cycleProof.cycles,
    actor_root_count_stable:cycleProof.final_active_roots===1,
    orphan_roots_after_unload:false,
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

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06h',cycleProof}));
