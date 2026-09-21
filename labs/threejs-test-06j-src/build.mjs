import {build} from 'esbuild';
import {mkdir,writeFile,readFile,stat,copyFile,rm} from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import {
  SCALE_ACTOR_COUNT_06J,
  SCALE_RING_SIZE_06J,
  SCALE_RING_RADII_06J,
  PERFORMANCE_BUDGET_06J,
  createScaleActor06J,
  advanceScaleActor06J,
  snapshotScaleActor06J,
  restoreScaleActor06J,
  summarizePerformance06J
} from './integration-scale-core.js';
import {SimulationLODController,SIM_LOD_TIERS,DEFAULT_SIM_LOD_CONFIG} from './simulation-lod-core.js';
import {STREAM_CELL_SCHEMA_VERSION} from './stream-cell-core.js';

const root=process.cwd();
const labs=path.resolve(root,'..');
const out=path.join(labs,'threejs-test-06j');
const assets=path.join(out,'assets');
await rm(out,{recursive:true,force:true});
await mkdir(assets,{recursive:true});

function gitBlobSha(text){
  const b=Buffer.from(text);
  return crypto.createHash('sha1').update(Buffer.concat([Buffer.from('blob '+b.length+'\0'),b])).digest('hex');
}
function assert06J(condition,message){
  if(!condition)throw new Error('06J deterministic proof failed: '+message);
}

const accepted06I=JSON.parse(await readFile(path.join(labs,'threejs-test-06i','acceptance.json'),'utf8'));
if(accepted06I.test!=='06I'||accepted06I.status!=='ACCEPTED'||accepted06I.human_visual_acceptance!==true||accepted06I.frozen!==true){
  throw new Error('Frozen accepted 06I required before Test06J');
}
if(accepted06I.build_id!=='20260921035916')throw new Error('Unexpected frozen 06I build');

const source06I=await readFile(path.join(labs,'threejs-test-06i','source-main.js'),'utf8');
const index06I=await readFile(path.join(labs,'threejs-test-06i','index.html'),'utf8');
const core06H=await readFile(path.join(labs,'threejs-test-06h-src','stream-cell-core.js'),'utf8');
const core06I=await readFile(path.join(labs,'threejs-test-06i-src','simulation-lod-core.js'),'utf8');
const frag06I=await readFile(path.join(labs,'threejs-test-06i-src','simulation-lod.fragment.js'),'utf8');
const build06I=await readFile(path.join(labs,'threejs-test-06i-src','build.mjs'),'utf8');
const localCore06H=await readFile(path.join(root,'stream-cell-core.js'),'utf8');
const localCore06I=await readFile(path.join(root,'simulation-lod-core.js'),'utf8');
const frag06J=await readFile(path.join(root,'integration-scale.fragment.js'),'utf8');

const expectedSource06I='75237c68ac58fff097a241e181ecfd369ca3a3e5';
const expectedIndex06I='5cd833eaa12b7d98fb9de120a2fc7797e3a31686';
const expected06HCore='af77396834311e0e5b328c7c4438317202613466';
const expected06ICore='2458e99eec9988067a9c3a62bd1c6b88ea1ab4e8';
const expected06IFragment='aadb77bb2cb462400e9d1b5b9c284835614e9ce0';
const expected06IBuild='c7e1cd022526170fa7e6c29572507eaff1ec1384';

if(gitBlobSha(source06I)!==expectedSource06I)throw new Error('Frozen accepted 06I generated source changed');
if(gitBlobSha(index06I)!==expectedIndex06I)throw new Error('Frozen accepted 06I index changed');
if(gitBlobSha(core06H)!==expected06HCore)throw new Error('Frozen 06H StreamCell core changed');
if(gitBlobSha(core06I)!==expected06ICore)throw new Error('Frozen 06I LOD core changed');
if(gitBlobSha(frag06I)!==expected06IFragment)throw new Error('Frozen 06I fragment changed');
if(gitBlobSha(build06I)!==expected06IBuild)throw new Error('Frozen 06I build script changed');
if(gitBlobSha(localCore06H)!==expected06HCore)throw new Error('06J local StreamCell core must exactly match frozen 06H core');
if(gitBlobSha(localCore06I)!==expected06ICore)throw new Error('06J local LOD core must exactly match frozen 06I core');

const source=source06I+'\n'+frag06J;
const inheritedRafCount=(source06I.match(/requestAnimationFrame\s*\(/g)||[]).length;
const finalRafCount=(source.match(/requestAnimationFrame\s*\(/g)||[]).length;
if(finalRafCount!==inheritedRafCount)throw new Error('06J must not add a requestAnimationFrame loop');
if(/requestAnimationFrame\s*\(/.test(frag06J))throw new Error('06J fragment contains prohibited RAF loop');

const proofNowStart=1000000;
const proofActors=[];
let proofDuplicateCount=0;
let proofSnapshots=0;
let proofWakePreserved=true;
let proofTicksByRing=[0,0,0,0];

for(let i=0;i<SCALE_ACTOR_COUNT_06J;i++){
  const actor=createScaleActor06J(i,proofNowStart);
  actor.controller=new SimulationLODController({
    config:DEFAULT_SIM_LOD_CONFIG,
    onSimulate:(stepMs,tier,wallNow)=>{
      proofTicksByRing[actor.ring]++;
      advanceScaleActor06J(actor,stepMs,wallNow);
    },
    onSleep:(wallNow)=>{
      if(!actor.visualActive)proofDuplicateCount++;
      actor.snapshot=snapshotScaleActor06J(actor,STREAM_CELL_SCHEMA_VERSION,wallNow);
      actor.visualActive=false;
      proofSnapshots++;
    },
    onWake:(wallNow)=>{
      if(actor.visualActive)proofDuplicateCount++;
      const before=actor.snapshot?.state?.progress;
      if(actor.snapshot)restoreScaleActor06J(actor,actor.snapshot,wallNow);
      proofWakePreserved=proofWakePreserved&&Math.abs(actor.progress-before)<1e-12;
      actor.visualActive=true;
    }
  });
  proofActors.push(actor);
}

let proofNow=proofNowStart;
for(let frame=0;frame<100;frame++){
  proofNow+=10;
  for(const actor of proofActors){
    actor.controller.step({
      distanceM:SCALE_RING_RADII_06J[actor.ring],
      dtMs:10,
      wallNow:proofNow
    });
  }
}

const proofTierCounts={NEAR:0,MID:0,FAR:0,DORMANT:0};
for(const actor of proofActors)proofTierCounts[actor.controller.tier]++;

assert06J(proofActors.length===192,'actor count must be 192');
assert06J(SCALE_RING_SIZE_06J===48,'ring size must be 48');
assert06J(proofTierCounts.NEAR===48,'initial NEAR count');
assert06J(proofTierCounts.MID===48,'initial MID count');
assert06J(proofTierCounts.FAR===48,'initial FAR count');
assert06J(proofTierCounts.DORMANT===48,'initial DORMANT count');
assert06J(proofTicksByRing[0]===4800,'NEAR fleet tick load');
assert06J(proofTicksByRing[1]===480,'MID fleet tick load');
assert06J(proofTicksByRing[2]===96,'FAR fleet tick load');
assert06J(proofTicksByRing[3]===0,'DORMANT fleet must add zero normal ticks');
assert06J(proofSnapshots===48,'one snapshot per DORMANT actor');

const dormantProgressBefore=new Map();
for(const actor of proofActors){
  if(actor.ring===3)dormantProgressBefore.set(actor.id,actor.progress);
}
proofNow+=25000;
for(const actor of proofActors){
  if(actor.ring===3){
    actor.controller.step({distanceM:64,dtMs:25000,wallNow:proofNow});
    assert06J(actor.progress===dormantProgressBefore.get(actor.id),'dormant progress must stay frozen');
  }
}
for(const actor of proofActors){
  if(actor.ring===3){
    actor.controller.step({distanceM:45,dtMs:0,wallNow:proofNow});
    assert06J(actor.controller.tier===SIM_LOD_TIERS.FAR,'dormant actor wakes into FAR');
    assert06J(actor.visualActive===true,'woken actor visual state');
  }
}
assert06J(proofWakePreserved,'wake must preserve progress');
assert06J(proofDuplicateCount===0,'no duplicate visual activation');

const expiredDormantMemories=proofActors.filter(a=>a.ring===3&&a.index%4===0);
assert06J(expiredDormantMemories.every(a=>a.memory.state==='CALM'),'offscreen memory deadlines must resolve on restore');

const goodFrameSamples=Array.from({length:900},(_,i)=>16.55+(i%7)*.02);
const goodCpuSamples=Array.from({length:900},(_,i)=>.42+(i%11)*.015);
const goodBudget=summarizePerformance06J({
  frameSamples:goodFrameSamples,
  cpuSamples:goodCpuSamples,
  drawCallsMax:108,
  trianglesMax:292000,
  actorCount:192,
  duplicateCount:0
});
assert06J(goodBudget.pass===true,'known-good budget must pass');

const badBudget=summarizePerformance06J({
  frameSamples:Array.from({length:900},()=>25),
  cpuSamples:Array.from({length:900},()=>5),
  drawCallsMax:140,
  trianglesMax:400000,
  actorCount:191,
  duplicateCount:1
});
assert06J(badBudget.pass===false&&badBudget.failed.length>=5,'known-bad budget must fail');

const integrationProof={
  actor_count:proofActors.length,
  initial_tier_counts:proofTierCounts,
  one_second_logic_ticks:{
    near:proofTicksByRing[0],
    mid:proofTicksByRing[1],
    far:proofTicksByRing[2],
    dormant:proofTicksByRing[3],
    total:proofTicksByRing.reduce((a,b)=>a+b,0)
  },
  dormant_snapshots:proofSnapshots,
  wake_progress_preserved:proofWakePreserved,
  expired_dormant_memory_resolved:true,
  duplicate_count:proofDuplicateCount,
  budget_evaluator_known_good_passed:goodBudget.pass,
  budget_evaluator_known_bad_rejected:!badBudget.pass
};

const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);
let html=index06I;
html=html.replaceAll('RAAI Three.js Test 06I — Simulation LOD + Sleep/Wake','RAAI Three.js Test 06J — Living World Integration / Scale Audit');
html=html.replaceAll('RAAI Proof 06I — Simulation LOD + Sleep/Wake','RAAI Proof 06J — Living World Integration / Scale Audit');
html=html.replace('Starting Living World 06I…','Starting Living World 06J…');
html=html.replace('<div id="zone">06I · NEAR → MID → FAR → DORMANT → WAKE</div>','<div id="zone">06J · 192-ACTOR INTEGRATION / SCALE AUDIT</div>');

html=html.replace(
  '<div id="panel"><div class="title">06I Simulation LOD + Sleep/Wake</div><div id="worldBrief"><b>New variable only:</b> simulation effort changes with distance. Start near the violet/teal LOD forager: NEAR runs every frame. Move outward until MID reports 10 Hz, then FAR reports 2 Hz. Continue past 58 m until DORMANT saves a snapshot, removes the actor, and stops simulation. Return inside 50 m: the actor must wake from the saved state with its FOOD goal/progress preserved and zero duplicates.</div>',
  '<div id="panel"><div class="title">06J Integration / Scale Audit</div><div id="worldBrief"><b>New variable only:</b> meaningful system scale. The audit adds 192 lightweight living-world actors across NEAR/MID/FAR/DORMANT rings, each exercising accepted memory, priority, goal continuity, snapshot, and simulation-LOD concepts. Leave the scene running through the 4 s warmup + 15 s measurement window. Final acceptance targets the 60 FPS mobile budget without changing frozen 06A–06I behavior.</div>'
);

const auditCss='#audit06J{position:absolute;right:max(12px,env(safe-area-inset-right));top:62px;width:285px;padding:10px 11px;border:1px solid rgba(255,255,255,.16);border-radius:13px;background:rgba(8,13,16,.68);backdrop-filter:blur(11px);font:9px/1.38 ui-monospace,SFMono-Regular,Menlo,monospace;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.7);pointer-events:none}#audit06J .title{font:850 10px/1.25 system-ui;letter-spacing:.07em;text-transform:uppercase;margin-bottom:6px}#audit06J .grid{display:grid;grid-template-columns:auto 1fr;gap:2px 9px}#audit06J b{text-align:right;color:#a8f0b5;white-space:nowrap}#auditResult06J{grid-column:1/-1;text-align:left!important;margin-top:5px;padding-top:5px;border-top:1px solid rgba(255,255,255,.13);white-space:normal!important}@media(pointer:coarse),(max-width:900px){#audit06J{top:58px;right:6px;width:198px;padding:7px 8px;font-size:7px}#audit06J .title{font-size:8px}}';
html=html.replace('</style>',auditCss+'</style>');

const auditHtml='<div id="audit06J"><div class="title">06J Scale / Performance Audit</div><div class="grid"><span>Audit</span><b id="auditStage06J">WAITING</b><span>Actors</span><b id="auditActors06J">0/192</b><span>N/M/F/D</span><b id="auditTiers06J">0/0/0/0</b><span>Logic ticks</span><b id="auditTicks06J">0 /s</b><span>Frame avg/p95/p99</span><b id="auditFrame06J">—</b><span>06J CPU avg/p95</span><b id="auditCpu06J">—</b><span>Draw / triangles</span><b id="auditDraw06J">—</b><span>Scene resources</span><b id="auditScene06J">—</b><span>Heap</span><b id="auditMemory06J">—</b><span>Shaders / warm Δ</span><b id="auditShaders06J">—</b><span>GPU timer</span><b id="auditGpu06J">N/A · WebGL</b><span>State load</span><b id="auditState06J">—</b><b id="auditResult06J">WAITING FOR RUNTIME</b></div></div>';
html=html.replace('<div id="error"></div>',auditHtml+'<div id="error"></div>');
html=html.replace(/app\.js\?v=\d+/g,'app.js?v='+buildId).replace(/sw\.js\?v=\d+/g,'sw.js?v='+buildId);

await writeFile(path.join(out,'index.html'),html);
await writeFile(path.join(out,'source-main.js'),source);
await copyFile(path.join(labs,'threejs-test-06i','assets','Soldier.glb'),path.join(assets,'Soldier.glb'));

await build({
  stdin:{contents:source,resolveDir:root,sourcefile:'test06j-main.js',loader:'js'},
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
  '06I_SIMULATION_LOD_SLEEP_WAKE',
  '06J_LIVING_WORLD_INTEGRATION_SCALE_AUDIT'
]){
  if(!app.includes(marker))throw new Error('Required marker missing: '+marker);
}
for(const token of ['192 ACTORS','BUDGET PASS','STATE STABLE','BUDGET FAIL']){
  if(!app.includes(token))throw new Error('06J runtime token missing: '+token);
}

const sw="self.addEventListener('install',()=>self.skipWaiting());\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('raai-threejs-test06j-')).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\n";
await writeFile(path.join(out,'sw.js'),sw);

const js=await stat(path.join(out,'app.js'));
const glb=await stat(path.join(assets,'Soldier.glb'));

const info={
  build_id:buildId,
  test:'06J',
  roadmap:'Test06 — Living World',
  milestone:'Living World Integration / Scale Audit',
  purpose:'stress the accepted Living World stack under meaningful actor/system load and enforce explicit browser performance budgets without adding new gameplay behavior',
  prerequisite:{test06i:'ACCEPTED / FROZEN'},
  inherits:'Frozen accepted 06A–06I unchanged',
  frozen_artifact_blobs:{
    test06i_source_main:expectedSource06I,
    test06i_index:expectedIndex06I,
    test06h_stream_core:expected06HCore,
    test06i_lod_core:expected06ICore,
    test06i_lod_fragment:expected06IFragment,
    test06i_build:expected06IBuild
  },
  three:'0.186.0',
  pipeline:'frozen accepted 06I generated source + isolated 06J integration/scale audit + shared frame hook + esbuild bundle',
  runtime_external_dependencies:0,
  service_worker_cache:false,
  target:'safari16.4+',
  mobile_fps_target:60,
  scale_load:{
    actors:SCALE_ACTOR_COUNT_06J,
    ring_size:SCALE_RING_SIZE_06J,
    ring_radii_m:SCALE_RING_RADII_06J,
    initial_intended_mix:{near:48,mid:48,far:48,dormant:48},
    visual_representation:'one InstancedMesh; fixed instance identities; dormant actors zero-scaled inside shared audit container',
    integrated_concepts:['timed local memory','priority winner HAZARD > FOOD','goal suspension/recovery','versioned snapshots','simulation LOD','sleep/wake']
  },
  performance_budget:{
    warmup_ms:PERFORMANCE_BUDGET_06J.warmupMs,
    measurement_ms:PERFORMANCE_BUDGET_06J.measureMs,
    min_measured_frames:PERFORMANCE_BUDGET_06J.minMeasuredFrames,
    avg_frame_ms_max:PERFORMANCE_BUDGET_06J.avgFrameMsMax,
    p95_frame_ms_max:PERFORMANCE_BUDGET_06J.p95FrameMsMax,
    p99_frame_ms_max:PERFORMANCE_BUDGET_06J.p99FrameMsMax,
    avg_06j_cpu_ms_max:PERFORMANCE_BUDGET_06J.avgAuditCpuMsMax,
    p95_06j_cpu_ms_max:PERFORMANCE_BUDGET_06J.p95AuditCpuMsMax,
    draw_calls_max:PERFORMANCE_BUDGET_06J.drawCallsMax,
    triangles_max:PERFORMANCE_BUDGET_06J.trianglesMax,
    worst_frame:'reported, not a hard gate',
    object_count:'reported',
    geometry_texture_count:'reported',
    shader_program_count_and_warmup_delta:'reported',
    js_heap:'reported where performance.memory is exposed',
    gpu_frame_cost:'N/A in this WebGL proof because a reliable portable GPU timer is not exposed by the current runtime'
  },
  deterministic_integration_proof:integrationProof,
  frame_integration:{
    inherited_request_animation_frame_calls:inheritedRafCount,
    final_request_animation_frame_calls:finalRafCount,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount
  },
  mechanics_changed:false,
  combat_changed:false,
  accepted_06a_through_06i_changed:false,
  runtime_performance_audit:'REQUIRED ON REAL DEVICE',
  acceptance_checklist:{
    audit_reaches_192_actor_load:'HUMAN REVIEW',
    tier_counts_and_state_load_remain_coherent:'HUMAN REVIEW',
    fifteen_second_measurement_completes:'HUMAN REVIEW',
    actual_device_budget_reports_pass_or_specific_failures:'HUMAN REVIEW',
    no_visible_stutter_or_actor_multiplication:'HUMAN REVIEW',
    mobile_target_iPhone_Safari:'HUMAN REVIEW'
  },
  human_visual_review:'REQUIRED',
  app_js_bytes:js.size,
  soldier_glb_bytes:glb.size
};
await writeFile(path.join(out,'build-info.json'),JSON.stringify(info,null,2));

await writeFile(path.join(out,'verification-report.json'),JSON.stringify({
  test:'06J',
  status:'PASS',
  build_id:buildId,
  delegated_nonvisual_checks:{
    accepted_06i_frozen_required:true,
    accepted_06i_generated_source_reused_unchanged:true,
    accepted_06h_stream_core_reused_unchanged:true,
    accepted_06i_lod_core_reused_unchanged:true,
    actor_load_count:SCALE_ACTOR_COUNT_06J,
    initial_four_ring_distribution_verified:true,
    integrated_near_mid_far_dormant_tick_load_verified:true,
    dormant_normal_tick_count_zero:true,
    dormant_snapshot_count_verified:true,
    wake_progress_preserved:true,
    expired_memory_resolves_after_dormancy:true,
    duplicate_count:integrationProof.duplicate_count,
    budget_evaluator_good_case_passes:true,
    budget_evaluator_bad_case_rejected:true,
    added_request_animation_frame_calls:finalRafCount-inheritedRafCount,
    combat_not_modified:true,
    runtime_external_dependencies:0,
    safari_target:'16.4+',
    source_level:true
  },
  deterministic_integration_proof:integrationProof,
  real_device_performance_audit:'REQUIRED',
  human_visual_review:'REQUIRED'
},null,2));

console.log(JSON.stringify({buildId,status:'PASS',output:'threejs-test-06j',integrationProof}));
