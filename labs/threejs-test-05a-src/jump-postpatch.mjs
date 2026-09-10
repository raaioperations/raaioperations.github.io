import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05a');
const indexPath=path.join(out,'index.html');
const infoPath=path.join(out,'build-info.json');
let html=await readFile(indexPath,'utf8');

const replace=(a,b,label)=>{if(!html.includes(a))throw new Error(`Missing ${label}`);html=html.replace(a,b);};

replace('<div class="jumpFocus"><b>ACTIVE TEST — JUMP</b><span id="jumpPrediction">9.0 m/s · 24.0 gravity · 1.69 m apex · 0.375 s up · 0.750 s airtime</span></div>',
'<div class="jumpFocus"><b>ACTIVE TEST — JUMP ANIMATION</b><span id="jumpPrediction">Physics locked · 9.0 m/s launch · 24.0 gravity · validate takeoff → rise → apex → fall → land</span></div>',
'active jump animation card');

html=html.replace('<label><span>Jump <output id="jumpV"></output></span>','<label data-lock="true"><span>Jump <output id="jumpV"></output></span>');
html=html.replace('<label><span>Gravity <output id="gravityV"></output></span>','<label data-lock="true"><span>Gravity <output id="gravityV"></output></span>');

replace('<div><b>PENDING</b><span>07 Jump launch + apex</span></div>','<div class="accepted"><b>ACCEPTED</b><span>07 Jump launch + apex — 9.0 / 24.0</span></div>','jump physics accepted');
replace('<div><b>PENDING</b><span>08 Gravity + landing</span></div>','<div class="accepted"><b>ACCEPTED</b><span>08 Gravity + landing</span></div>','gravity landing accepted');
replace('<div><b>PENDING</b><span>10 Animation ↔ speed match</span></div>','<div class="accepted"><b>ACCEPTED</b><span>10 Walk / Run / Sprint animation ↔ speed match</span></div><div><b>PENDING</b><span>11 Jump animation — takeoff → rise → apex → fall → land</span></div>','jump animation checklist');
replace('JUMP TEST — tune launch and gravity, then validate','JUMP ANIMATION TEST — validate the rig motion','jump proof copy');

await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.focus='jump animation proof';
info.proof_labels=['JUMP ANIMATION SUCCESS'];
info.suppressed_proof_labels=['STOP SUCCESS','WALK SUCCESS','RUN SUCCESS','SPRINT SUCCESS','JUMP SUCCESS'];
info.acceptance_checklist={walk:'ACCEPTED',run:'ACCEPTED',sprint:'ACCEPTED',acceleration:'ACCEPTED',braking:'ACCEPTED',turn:'ACCEPTED',jump_launch_apex:'ACCEPTED',gravity_landing:'ACCEPTED',camera_damping:'ACCEPTED',walk_run_sprint_animation_speed_match:'ACCEPTED',jump_animation:'PENDING'};
info.tuning_ui={slider_and_numeric_input:true,locked_parameters:['walk','run','sprint','acceleration','braking','turn','jump','gravity','camera_damping'],active_parameters:[]};
info.jump_animation={status:'PENDING HUMAN ACCEPTANCE',implementation:'additive skeleton-keyframed clip on Soldier Mixamo rig',phases:['takeoff','rise/tuck','apex','fall/extend','landing'],physics_sync:'playback rate derives from theoretical airtime = 2 × jump velocity / gravity',root_motion:false,external_runtime_dependencies:0};
await writeFile(infoPath,JSON.stringify(info,null,2));
