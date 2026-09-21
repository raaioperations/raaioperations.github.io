import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  PRODUCTION_ARCHITECTURE_07A,
  LIVING_WORLD_KERNEL_SCHEMA_VERSION,
  CANONICAL_LIVING_WORLD_DEFAULTS,
  TimedSpatialMemory,
  StimulusArbiter,
  GoalContinuity,
  LivingWorldKernel,
  StreamStateStore,
  StreamCell,
  SimulationLODController,
  SIM_LOD_TIERS
} from './production/index.js';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-07a');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
}
function assert07A(condition,message){
  if(!condition)throw new Error('07A production-promotion proof failed: '+message);
}
function mustReplace(text,find,repl,label){
  const i=text.indexOf(find);
  if(i<0)throw new Error('07A anchor missing: '+label);
  if(text.indexOf(find,i+find.length)>=0)throw new Error('07A anchor not unique: '+label);
  return text.slice(0,i)+repl+text.slice(i+find.length);
}

const accepted06J=JSON.parse(await readFile(path.join(labs,'threejs-test-06j','acceptance.json'),'utf8'));
assert07A(accepted06J.test==='06J','06J acceptance record');
assert07A(accepted06J.status==='ACCEPTED'&&accepted06J.frozen===true,'06J must be accepted/frozen');
assert07A(accepted06J.test06_closed===true,'Test06 must be closed before 07A');
assert07A(accepted06J.next_milestone_authorized===true,'07A authorization required');

const source06J=await readFile(path.join(labs,'threejs-test-06j','source-main.js'),'utf8');
const index06J=await readFile(path.join(labs,'threejs-test-06j','index.html'),'utf8');
const expectedSource06J='5a9733ea42f68a401dfb244cd12b7f8b40ab8cc9';
const expectedIndex06J='f0625fa7266f8f2fa2bee0d949045855edbb8b49';
assert07A(gitBlobSha(source06J)===expectedSource06J,'frozen 06J source-main changed');
assert07A(gitBlobSha(index06J)===expectedIndex06J,'frozen 06J index changed');

const streamCore=await readFile(path.join(root,'production','stream-cell-core.js'),'utf8');
const lodCore=await readFile(path.join(root,'production','simulation-lod-core.js'),'utf8');
const livingCore=await readFile(path.join(root,'production','living-world-kernel.js'),'utf8');
const productionIndex=await readFile(path.join(root,'production','index.js'),'utf8');
const frag07A=await readFile(path.join(root,'production-architecture.fragment.js'),'utf8');

const frozenStreamSha='af77396834311e0e5b328c7c4438317202613466';
const frozenLodSha='2458e99eec9988067a9c3a62bd1c6b88ea1ab4e8';
assert07A(gitBlobSha(streamCore)===frozenStreamSha,'promoted StreamCell core must be byte-identical to frozen 06H');
assert07A(gitBlobSha(lodCore)===frozenLodSha,'promoted SimulationLOD core must be byte-identical to frozen 06I');

for(const [name,src] of [
  ['living-world-kernel',livingCore],
  ['stream-cell-core',streamCore],
  ['simulation-lod-core',lodCore],
  ['production-index',productionIndex]
]){
  assert07A(!/from\s+['"]three(?:\/|['"])/.test(src)&&!/\bTHREE\s*\./.test(src),name+' must not depend on Three.js runtime');
  assert07A(!/\bdocument\s*\./.test(src),name+' must not depend on DOM document');
  assert07A(!/\bwindow\s*\./.test(src),name+' must not depend on window');
  assert07A(!/\bglobalThis\s*\./.test(src),name+' must not depend on global runtime state');
}
assert07A(PRODUCTION_ARCHITECTURE_07A.modules.length===8,'production module manifest count');
assert07A(PRODUCTION_ARCHITECTURE_07A.boundaries.productionActorPipeline==='deferred to 07B','07B boundary');
assert07A(PRODUCTION_ARCHITECTURE_07A.boundaries.streamedProductionRegion==='deferred to 07C','07C boundary');

// Canonical 06C memory timing and 06E spatial scope.
const memory=new TimedSpatialMemory();
const event={id:1,type:'HAZARD',at:1000,payload:{}};
assert07A(memory.applyEvent(event,{center:{x:0,z:0},now:1000})===true,'memory accepts new event');
assert07A(memory.state==='DISTURBED','memory begins disturbed');
assert07A(memory.overlapsSegment({a:{x:-3,z:0},b:{x:3,z:0}},1000)===true,'inside path overlaps local memory');
assert07A(memory.overlapsSegment({a:{x:-3,z:4},b:{x:3,z:4}},1000)===false,'outside path ignores same local memory');
assert07A(memory.applyEvent(event,{center:{x:0,z:0},now:1100})===false,'duplicate memory event rejected');
assert07A(memory.resolve(3300)==='SETTLING','2300 ms disturbed timing');
assert07A(memory.resolve(6100)==='CALM','2800 ms settling timing');

// Canonical 06F priority > recency.
const arbiter=new StimulusArbiter();
const winner=arbiter.choose([
  {id:'HAZARD',priority:100,valid:true,eventAt:1000},
  {id:'FOOD',priority:40,valid:true,eventAt:1120}
]);
assert07A(winner.id==='HAZARD','HAZARD 100 must beat newer FOOD 40');

// Canonical 06G goal suspension / recovery.
const goals=new GoalContinuity({goal:'FOOD',progress:.34});
goals.reconcile({id:'HAZARD'});
assert07A(goals.activeGoal==='HAZARD'&&goals.suspendedGoal==='FOOD','FOOD goal suspended by HAZARD');
assert07A(Math.abs(goals.suspendedProgress-.34)<1e-12,'suspended progress preserved');
goals.reconcile({id:'FOOD'});
assert07A(goals.activeGoal==='FOOD'&&goals.suspendedGoal===null,'FOOD goal resumes after HAZARD');
assert07A(Math.abs(goals.progress-.34)<1e-12,'resumed progress preserved');

// Integrated kernel + offscreen time resolution.
const kernel=new LivingWorldKernel({initialGoal:'FOOD',initialProgress:.34});
kernel.createHazardEvent({center:{x:0,z:0},at:1000});
const interrupted=kernel.update({
  now:1120,
  actorPath:{a:{x:-4,z:0},b:{x:4,z:0}},
  foodValid:true,
  foodEventAt:1120,
  foodProgressDelta:.05
});
assert07A(interrupted.winner==='HAZARD','kernel priority parity');
assert07A(interrupted.goal==='HAZARD'&&interrupted.suspendedGoal==='FOOD','kernel goal interruption');
const kernelSnapshot=kernel.serialize(1600);
assert07A(kernelSnapshot.version===LIVING_WORLD_KERNEL_SCHEMA_VERSION,'kernel snapshot version');
const restoredKernel=new LivingWorldKernel();
const restored=restoredKernel.restore(kernelSnapshot,7000);
assert07A(restored.memoryState==='CALM','kernel resolves expired memory while offscreen');
assert07A(restored.goal==='FOOD','kernel resumes original goal after offscreen expiry');
assert07A(Math.abs(restored.progress-.34)<1e-12,'kernel preserves goal progress');
assert07A(restored.offscreenMs===5400,'kernel reports offscreen elapsed time');

// Byte-identical 06H StreamCell promotion.
const store=new StreamStateStore();
let attaches=0,detaches=0;
const cell=new StreamCell({
  id:'07A_STREAM',
  store,
  actorStart:{x:0,z:0},
  actorDestination:{x:10,z:0},
  initialEventId:0,
  attachVisual:()=>{attaches++;return {id:attaches};},
  detachVisual:()=>{detaches++;},
  updateVisual:()=>{}
});
cell.load(1000);
cell.update({dtMs:800,wallNow:1800,eventId:1});
const cellProgress=cell.state.actor.progress;
cell.unload(1900);
const cellRestore=cell.load(8000);
assert07A(cellRestore.rehydrated===true,'promoted StreamCell rehydrates');
assert07A(cell.state.memory.state==='CALM','promoted StreamCell timer catch-up');
assert07A(cell.state.actor.goal==='FOOD','promoted StreamCell goal continuity');
assert07A(Math.abs(cell.state.actor.progress-cellProgress)<1e-12,'promoted StreamCell progress continuity');
assert07A(cell.duplicateCount===0&&attaches===2&&detaches===1,'promoted StreamCell no duplicate visual lifecycle');

// Byte-identical 06I SimulationLOD promotion.
let nearTicks=0,midTicks=0,farTicks=0;
const lod=new SimulationLODController({
  onSimulate:(_step,tier)=>{
    if(tier===SIM_LOD_TIERS.NEAR)nearTicks++;
    if(tier===SIM_LOD_TIERS.MID)midTicks++;
    if(tier===SIM_LOD_TIERS.FAR)farTicks++;
  }
});
for(let i=0;i<100;i++)lod.step({distanceM:10,dtMs:10,wallNow:1000+i*10});
lod.step({distanceM:17,dtMs:0,wallNow:2000});
for(let i=0;i<100;i++)lod.step({distanceM:20,dtMs:10,wallNow:2010+i*10});
lod.step({distanceM:31,dtMs:0,wallNow:3100});
for(let i=0;i<100;i++)lod.step({distanceM:40,dtMs:10,wallNow:3110+i*10});
lod.step({distanceM:60,dtMs:0,wallNow:4200});
const beforeDormant=lod.totalTicks;
lod.step({distanceM:60,dtMs:5000,wallNow:9200});
lod.step({distanceM:45,dtMs:0,wallNow:9201});
assert07A(nearTicks===100,'NEAR full-rate parity');
assert07A(midTicks===10,'MID 10 Hz parity');
assert07A(farTicks===2,'FAR 2 Hz parity');
assert07A(lod.totalTicks===beforeDormant,'DORMANT zero normal simulation parity');
assert07A(lod.tier===SIM_LOD_TIERS.FAR&&lod.sleepCount===1&&lod.wakeCount===1,'sleep/wake parity');

const architectureProof={
  test06_closed:true,
  promoted_modules:PRODUCTION_ARCHITECTURE_07A.modules.length,
  core_three_dependency:false,
  core_dom_dependency:false,
  canonical_memory_timing:true,
  spatial_scope:true,
  priority_over_recency:true,
  goal_suspend_resume:true,
  kernel_snapshot_restore:true,
  stream_cell_byte_identical:true,
  stream_cell_sha:frozenStreamSha,
  simulation_lod_byte_identical:true,
  simulation_lod_sha:frozenLodSha,
  no_new_behavior:true,
  actor_pipeline_deferred_to_07b:true,
  production_region_deferred_to_07c:true
};

const source=source06J+'\n'+frag07A;
const inheritedRafCount=(source06J.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRafCount=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
assert07A(finalRafCount===inheritedRafCount,'07A must not add RAF loop');
assert07A(!/requestAnimationFrame\s*\(/.test(frag07A),'07A fragment contains prohibited RAF loop');

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=index06J;
html=html.replaceAll('RAAI Three.js Test 06J — Living World Integration / Scale Audit','RAAI Three.js Test 07A — Production Architecture Promotion');
html=html.replaceAll('RAAI Proof 06J — Living World Integration / Scale Audit','RAAI Proof 07A — Production Architecture Promotion');
html=html.replace('Starting Living World 06J…','Starting Production Architecture 07A…');
html=html.replace('<div id="zone">06J · 192-ACTOR INTEGRATION / SCALE AUDIT</div>','<div id="zone">07A · PRODUCTION ARCHITECTURE PROMOTION</div>');
html=html.replace(
  '<div id="panel"><div class="title">06J Integration / Scale Audit</div><div id="worldBrief"><b>New variable only:</b> meaningful system scale. The audit adds 192 lightweight living-world actors across NEAR/MID/FAR/DORMANT rings, each exercising accepted memory, priority, goal continuity, snapshot, and simulation-LOD concepts. Leave the scene running through the 4 s warmup + 15 s measurement window. Final acceptance targets the 60 FPS mobile budget without changing frozen 06A–06I behavior.</div>',
  '<div id="panel"><div class="title">07A Production Architecture Promotion</div><div id="worldBrief"><b>Architecture only:</b> Test06 is closed. Its accepted event, memory, spatial scope, arbitration, goal continuity, streaming, and LOD mechanics are now promoted into render-independent production modules. The visible world remains the frozen 06J regression reference. No production actor pipeline or new gameplay behavior is introduced here.</div>'
);
html=html.replace(
  '<div id="audit06J"><div class="title">06J Scale / Performance Audit</div><div class="grid">',
  '<div id="audit06J"><div class="title">07A Production Architecture / 06J Regression</div><div class="grid">'
);
html=mustReplace(
  html,
  '<b id="auditResult06J">WAITING FOR RUNTIME</b></div></div>',
  '<b id="auditResult06J">WAITING FOR RUNTIME</b><span>07A modules</span><b id="archModules07A">0</b><span>Core boundary</span><b id="archBoundary07A">WAITING</b><span>Canonical parity</span><b id="archParity07A">WAITING</b><span>Stream / LOD parity</span><b id="archStream07A">WAITING</b><span>06J regression</span><b id="archRegression07A">WAITING</b><b id="archResult07A">WAITING FOR PRODUCTION CORE</b></div></div>',
  '07A architecture telemetry'
);
html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId).replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06j','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test07a-main.js',loader:'js'},
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
  '06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT',
  '07A_PRODUCTION_ARCHITECTURE_PROMOTION'
]){
  assert07A(app.includes(marker),'runtime marker missing '+marker);
}
for(const token of ['PRODUCTION ARCHITECTURE PROMOTED','PURE CORE','WAITING FOR 06J REGRESSION']){
  assert07A(app.includes(token),'07A runtime token missing '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test07a-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));

const info={
  build_id:buildId,
  test:'07A',
  roadmap:'Test07 — Production Promotion',
  milestone:'Production Architecture Promotion',
  purpose:'promote frozen Test06 living-world proofs into reusable render-independent production modules without adding gameplay behavior',
  prerequisite:{test06:'CLOSED / FROZEN',test06j:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06J runtime unchanged as the visual/regression reference',
  frozen_artifact_blobs:{
    test06j_source_main:expectedSource06J,
    test06j_index:expectedIndex06J,
    stream_cell_core:frozenStreamSha,
    simulation_lod_core:frozenLodSha
  },
  production_package:{
    modules:PRODUCTION_ARCHITECTURE_07A.modules,
    state_ownership:PRODUCTION_ARCHITECTURE_07A.stateOwnership,
    boundaries:PRODUCTION_ARCHITECTURE_07A.boundaries,
    living_world_kernel_schema_version:LIVING_WORLD_KERNEL_SCHEMA_VERSION,
    canonical_defaults:CANONICAL_LIVING_WORLD_DEFAULTS
  },
  delegated_architecture_proof:architectureProof,
  runtime_external_dependencies:0,
  target:'safari16.4+',
  mobile_fps_target:60,
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRafCount,
    final_request_animation_frame_calls:finalRafCount,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount
  },
  mechanics_changed:false,
  combat_changed:false,
  production_actor_pipeline_started:false,
  streamed_production_region_started:false,
  acceptance_checklist:{
    production_core_imports_in_browser:'DELEGATED + HUMAN RUNTIME',
    canonical_behavior_parity:'DELEGATED PASS',
    stream_and_lod_byte_parity:'DELEGATED PASS',
    frozen_06j_visual_behavior_unchanged:'HUMAN REVIEW',
    frozen_06j_real_device_regression_pass:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED ONLY FOR REGRESSION / NO VISIBLE BREAKAGE',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));
await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'07A',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    test06_closed_required:true,
    accepted_06j_frozen_required:true,
    accepted_06j_source_reused_unchanged:true,
    core_has_no_three_dependency:true,
    core_has_no_dom_dependency:true,
    core_has_no_global_runtime_state:true,
    canonical_memory_timing:true,
    canonical_spatial_scope:true,
    canonical_priority_over_recency:true,
    canonical_goal_suspend_resume:true,
    offscreen_restore_parity:true,
    stream_cell_promoted_byte_identically:true,
    simulation_lod_promoted_byte_identically:true,
    production_actor_pipeline_deferred:true,
    production_region_deferred:true,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount,
    runtime_external_dependencies:0,
    safari_target:'16.4+'
  },
  architecture_proof:architectureProof,
  human_visual_review:'REQUIRED FOR FROZEN 06J REGRESSION ONLY'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-07a',architectureProof}));
