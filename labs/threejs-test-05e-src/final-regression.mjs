import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05e');
const indexPath=path.join(out,'index.html');
const infoPath=path.join(out,'build-info.json');
let html=await readFile(indexPath,'utf8');

html=html.replaceAll('Test 05E — Movement Tuning','Test 05E — Movement + Jump Regression')
         .replaceAll('RAAI Proof 05E — Movement Tuning','RAAI Proof 05E — Movement + Jump Regression')
         .replaceAll('RAAI Proof 05A — Movement Tuning','RAAI Proof 05E — Movement + Jump Regression')
         .replace('Starting movement tuning proof…','Starting movement + jump regression proof…')
         .replace('<button id="tuneBtn">TUNE</button>','<button id="tuneBtn">CHECK</button>');

if(!html.includes('<span>Speed</span><b id="speed">0.0 m/s</b>'))throw new Error('05E telemetry anchor missing');
html=html.replace('<span>Speed</span><b id="speed">0.0 m/s</b>',
'<span>Speed</span><b id="speed">0.0 m/s</b><span>Jump type</span><b id="jumpType">—</b><span>Apex</span><b id="apexMeasured">—</b><span>Anim rate</span><b id="animRate">×1.00</b>');

// Keep the inherited jumpPrediction binding in the DOM even though its old tuning readout
// is no longer part of the visible regression UI. Removing a bound element caused the
// startup null.textContent crash on both desktop and Safari.
html=html.replace(/<div class="jumpFocus">[\s\S]*?<\/div>/,
'<div class="jumpFocus"><b>ACTIVE REGRESSION — MOVEMENT / JUMP</b><span>Standing jump: stop, then JUMP. Running jump: move in RUN or SPRINT, then JUMP. Sprint: cycle mode to SPRINT and hold movement.</span><span id="jumpPrediction" class="envHidden" aria-hidden="true"></span></div>');

const checklistStart='<div class="checkTitle">Test checklist</div><div id="checklist">';
const start=html.indexOf(checklistStart);
const end=html.indexOf('<button id="resetMove">',start);
if(start<0||end<0)throw new Error('05E checklist anchors missing');
const regression=`<div class="checkTitle">Regression checklist</div><div id="checklist">
<div><b>PENDING</b><span>01 Jump launch / apex — 9.0 m/s, 24.0 gravity, measured apex near 1.6–1.7 m</span></div>
<div><b>PENDING</b><span>02 Sprint animation ↔ speed — Run clip scales toward ×1.80 at 11.88 m/s</span></div>
<div><b>PENDING</b><span>03 Standing jump animation — compression → vertical launch → compact air pose → absorbed landing</span></div>
<div><b>PENDING</b><span>04 Running jump animation — moving takeoff → forward/asymmetric carriage → forward landing recovery</span></div>
</div><div class="regressionNote"><b>ONLY THESE FOUR ARE ACTIVE</b><span>Previously accepted walk, run, sprint speeds, acceleration, braking, turn, gravity/landing, and camera damping are carried forward and are not reopened.</span></div>`;
html=html.slice(0,start)+regression+html.slice(end);

html=html.replace('JUMP ANIMATION TEST — validate the reference-guided rig motion','REGRESSION TEST — verify the four pending movement / jump checks');
html=html.replace('</style>',`.regressionNote{display:grid;gap:4px;margin:8px 0;padding:8px;border:1px solid rgba(255,255,255,.13);border-radius:9px;background:rgba(255,255,255,.04);font-size:8.5px;line-height:1.3}.regressionNote b{font-size:8px;color:#a8f0b5;letter-spacing:.06em}</style>`);

// Fail the build if the final UI removes any DOM node still required by the inherited
// runtime/inline scripts. This guards against the exact missing-binding regression.
const requiredBindings=[
  'walkTune','runTune','walkSpeed','sprintSpeed','walkTuneV','runTuneV','sprintDerivedV',
  'proofSuccess','moveState','speed','sprint','resetMove','jumpVel','gravity','jumpPrediction',
  'panel','accel','brake','turnRate','damp','jumpType','apexMeasured','animRate'
];
for(const id of requiredBindings){
  if(!html.includes(`id="${id}"`))throw new Error(`05E required DOM binding missing after final regression pass: ${id}`);
}

await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.focus='movement + jump regression closure';
info.inherits='Test 04 visual baseline + accepted Test 05A movement values + accepted 05B/05C/05D combat contracts (combat omitted for regression isolation)';
info.regression_scope=['jump launch/apex','sprint animation-speed synchronization','standing jump animation','running jump animation'];
info.proof_labels=['JUMP APEX CONFIRMED','SPRINT ANIMATION SYNC CONFIRMED','STANDING JUMP ACTIVE','STANDING JUMP SEQUENCE COMPLETE','RUNNING JUMP ACTIVE','RUNNING JUMP SEQUENCE COMPLETE'];
info.acceptance_checklist={jump_launch_apex:'PENDING',sprint_animation_speed_match:'PENDING',standing_jump_animation:'PENDING',running_jump_animation:'PENDING'};
info.physics_contract={jump_velocity_mps:9,gravity_mps2:24,theoretical_apex_m:1.6875,time_to_apex_s:.375,theoretical_airtime_s:.75,translation_authority:'controller physics'};
info.sprint_animation_sync={run_reference_speed_mps:6.6,sprint_speed_mps:11.88,sprint_ratio:1.8,run_clip_rate_at_sprint:1.8,rate_source:'actual planar speed'};
info.jump_states={standing:{selection:'takeoff planar speed < 0.8 m/s',clip:'StandingJumpProcedural',characteristics:['deep compression','vertical launch','compact airborne pose','landing absorption']},running:{selection:'takeoff planar speed >= 0.8 m/s',clip:'RunningJumpProcedural',characteristics:['moving takeoff','forward body carriage','asymmetric stride/tuck','pre-contact extension','forward landing recovery']}};
info.production_asset_status='Procedural skeleton-keyframed regression clips only; final production should replace them with authored/retargeted standing and running jump animations while preserving controller-owned physics.';
info.dom_binding_guard=true;
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Finalized Test 05E movement/jump regression proof with DOM binding guard.');
