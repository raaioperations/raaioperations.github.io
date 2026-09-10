import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05a');
const indexPath=path.join(out,'index.html');
const infoPath=path.join(out,'build-info.json');
let html=await readFile(indexPath,'utf8');

const replace=(a,b,label)=>{if(!html.includes(a))throw new Error(`Missing ${label}`);html=html.replace(a,b);};

// Accepted movement baseline. Jump + gravity remain the active tuning pair.
replace('id="walkSpeed" type="range" min="2.5" max="7" step="0.1" value="4.8"','id="walkSpeed" type="range" min="2.5" max="24" step="0.1" value="2.5"','walk default');
replace('id="sprintSpeed" type="range" min="5" max="12" step="0.1" value="8.7"','id="sprintSpeed" type="range" min="5" max="36" step="0.01" value="11.88"','sprint default');
replace('id="accel" type="range" min="3" max="24" step="0.5" value="12"','id="accel" type="range" min="3" max="24" step="0.5" value="14"','accel default');
replace('id="turnRate" type="range" min="4" max="28" step="0.5" value="14"','id="turnRate" type="range" min="4" max="28" step="0.5" value="9"','turn default');
replace('id="jumpVel" type="range" min="4" max="12" step="0.1" value="7.7"','id="jumpVel" type="range" min="4" max="14" step="0.1" value="9"','jump candidate');
replace('id="gravity" type="range" min="8" max="30" step="0.2" value="18.6"','id="gravity" type="range" min="8" max="36" step="0.2" value="24"','gravity candidate');

// Keep bundled-runtime bindings present while hiding its internal speed controls.
replace('<label><span>Walk <output id="walkV"></output></span><input id="walkSpeed"','<label class="internalSpeed"><span>Walk internal <output id="walkV"></output></span><input id="walkSpeed"','hide internal walk');
replace('<label><span>Sprint <output id="sprintV"></output></span><input id="sprintSpeed"','<label class="internalSpeed"><span>Sprint internal <output id="sprintV"></output></span><input id="sprintSpeed"','hide internal sprint');

// Visible speed contract.
replace('<label><span>Accel <output id="accelV"></output></span>',
'<label data-lock="true"><span>Walk <output id="walkTuneV">2.5</output></span><input id="walkTune" type="range" min="1.5" max="5" step="0.1" value="2.5"></label><label data-lock="true"><span>Run <output id="runTuneV">6.6</output></span><input id="runTune" type="range" min="3" max="10" step="0.1" value="6.6"></label><label data-lock="true"><span>Sprint <output id="sprintDerivedV">11.88</output></span><b style="font-size:9px;opacity:.72">1.8× Run</b></label><label data-lock="true"><span>Accel <output id="accelV"></output></span>',
'add visible walk run sprint');

// Lock accepted rows. Jump and Gravity remain editable.
html=html.replace('<label><span>Brake <output id="brakeV"></output></span>','<label data-lock="true"><span>Brake <output id="brakeV"></output></span>');
html=html.replace('<label><span>Turn <output id="turnV"></output></span>','<label data-lock="true"><span>Turn <output id="turnV"></output></span>');
html=html.replace('<label><span>Camera <output id="dampV"></output></span>','<label data-lock="true"><span>Camera <output id="dampV"></output></span>');

// Checklist reflects human acceptance and current focus.
replace('<button id="resetMove">Reset movement defaults</button>',
'<div class="jumpFocus"><b>ACTIVE TEST — JUMP</b><span id="jumpPrediction">9.0 m/s · 24.0 gravity · 1.69 m apex · 0.375 s up · 0.750 s airtime</span></div><div class="checkTitle">Test checklist</div><div id="checklist"><div class="accepted"><b>ACCEPTED</b><span>01 Walk — 2.5 m/s</span></div><div class="accepted"><b>ACCEPTED</b><span>02 Run — 6.6 m/s</span></div><div class="accepted"><b>ACCEPTED</b><span>03 Sprint — 11.88 m/s · 1.8× Run</span></div><div class="accepted"><b>ACCEPTED</b><span>04 Acceleration — 14.0</span></div><div class="accepted"><b>ACCEPTED</b><span>05 Braking — 10.0</span></div><div class="accepted"><b>ACCEPTED</b><span>06 Turn — 9.0</span></div><div><b>PENDING</b><span>07 Jump launch + apex</span></div><div><b>PENDING</b><span>08 Gravity + landing</span></div><div class="accepted"><b>ACCEPTED</b><span>09 Camera damping — 0.120</span></div><div><b>PENDING</b><span>10 Animation ↔ speed match</span></div></div><button id="resetMove">Reset movement defaults</button>',
'checklist');

html=html.replace('</style>',`.internalSpeed{display:none!important}.checkTitle{margin:12px 0 6px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);font-size:10px;font-weight:850;letter-spacing:.07em;text-transform:uppercase}#checklist{display:grid;gap:4px;margin-bottom:7px}#checklist>div{display:grid;grid-template-columns:54px 1fr;gap:6px;align-items:start;font-size:8.5px;line-height:1.25}#checklist b{font-size:7.5px;letter-spacing:.05em;color:#ffd98c}#checklist .accepted b{color:#a8f0b5}#checklist span{opacity:.9}.jumpFocus{display:grid;gap:4px;margin:10px 0 8px;padding:8px;border:1px solid rgba(168,240,181,.25);border-radius:9px;background:rgba(100,180,120,.08)}.jumpFocus b{font-size:9px;letter-spacing:.06em;color:#a8f0b5}.jumpFocus span{font:8.5px/1.35 ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.9}#panel label[data-lock=true]{opacity:.58}#panel label[data-lock=true] input{pointer-events:none}.tuneNumber{width:58px!important;box-sizing:border-box;padding:3px 4px;border:1px solid rgba(255,255,255,.22);border-radius:5px;background:rgba(255,255,255,.08);color:#fff;text-align:right;font:700 9px ui-monospace,SFMono-Regular,Menlo,monospace}.tuneControls{display:flex;align-items:center;gap:6px}.tuneControls input[type=range]{width:105px!important}</style>`);
replace('READY — tune movement, then validate each action','JUMP TEST — tune launch and gravity, then validate','proof copy');

const patchScript=`<script>addEventListener('DOMContentLoaded',()=>{const q=id=>document.getElementById(id),walk=q('walkTune'),run=q('runTune'),walkInternal=q('walkSpeed'),sprintInternal=q('sprintSpeed'),walkV=q('walkTuneV'),runV=q('runTuneV'),sprintV=q('sprintDerivedV'),proof=q('proofSuccess'),move=q('moveState'),speed=q('speed'),modeBtn=q('sprint'),reset=q('resetMove'),jump=q('jumpVel'),gravity=q('gravity'),prediction=q('jumpPrediction');const accepted=new Set(['WALK','RUN','SPRINT']);let mode='WALK',proofedMode=false,proofTimer=0,guard=false;
function target(){return mode==='WALK'?+walk.value:mode==='RUN'?+run.value:+run.value*1.8;}
function showProof(label,detail=''){if(accepted.has(label))return;proof.textContent='✓ '+label+' SUCCESS'+(detail?' · '+detail:'');proof.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proof.classList.remove('show'),1200);}
function syncSpeed(){walkV.textContent=(+walk.value).toFixed(1);runV.textContent=(+run.value).toFixed(1);sprintV.textContent=(+run.value*1.8).toFixed(2);sprintInternal.max=36;sprintInternal.value=(+run.value*1.8).toFixed(2);sprintInternal.dispatchEvent(new Event('input'));}
function setMode(next){mode=next;proofedMode=false;walkInternal.value=(mode==='WALK'?+walk.value:+run.value).toFixed(1);walkInternal.dispatchEvent(new Event('input'));syncSpeed();dispatchEvent(new KeyboardEvent(mode==='SPRINT'?'keydown':'keyup',{code:'ShiftLeft',key:'Shift',bubbles:true}));modeBtn.textContent=mode==='WALK'?'RUN':mode==='RUN'?'SPRINT':'WALK';modeBtn.setAttribute('aria-label','Current movement '+mode+'. Tap for '+modeBtn.textContent);move.textContent=mode;}
function cycle(){setMode(mode==='WALK'?'RUN':mode==='RUN'?'SPRINT':'WALK');}
for(const type of ['pointerdown','pointerup','pointercancel','click'])modeBtn.addEventListener(type,e=>{e.preventDefault();e.stopImmediatePropagation();if(type==='pointerdown')cycle();},true);
addEventListener('keydown',e=>{if(e.code==='KeyR'&&!e.repeat){e.preventDefault();e.stopImmediatePropagation();cycle();}},true);

// Every visible future tune slider gets a synchronized numeric input. Locked rows keep both disabled.
for(const range of q('panel').querySelectorAll('label:not(.internalSpeed) input[type=range]')){const label=range.closest('label');const number=document.createElement('input');number.type='number';number.className='tuneNumber';number.min=range.min;number.max=range.max;number.step=range.step||'any';number.value=range.value;const holder=document.createElement('div');holder.className='tuneControls';range.replaceWith(holder);holder.append(range,number);const locked=label?.dataset.lock==='true';if(locked){range.disabled=true;number.disabled=true;}const fromRange=()=>{number.value=range.value;};const fromNumber=()=>{let v=parseFloat(number.value);if(!Number.isFinite(v))return;if(range.min!=='')v=Math.max(+range.min,v);if(range.max!=='')v=Math.min(+range.max,v);range.value=String(v);number.value=range.value;range.dispatchEvent(new Event('input',{bubbles:true}));};range.addEventListener('input',fromRange);number.addEventListener('change',fromNumber);number.addEventListener('keydown',e=>{if(e.key==='Enter'){fromNumber();number.blur();}});}
function updatePrediction(){const v=+jump.value,g=+gravity.value,h=v*v/(2*g),up=v/g,air=2*up;prediction.textContent=v.toFixed(1)+' m/s · '+g.toFixed(1)+' gravity · '+h.toFixed(2)+' m apex · '+up.toFixed(3)+' s up · '+air.toFixed(3)+' s airtime';}
jump.addEventListener('input',updatePrediction);gravity.addEventListener('input',updatePrediction);
reset.addEventListener('click',e=>{e.stopImmediatePropagation();walk.value=2.5;run.value=6.6;q('accel').value=14;q('brake').value=10;q('turnRate').value=9;jump.value=9;gravity.value=24;q('damp').value=.12;for(const id of ['accel','brake','turnRate','jumpVel','gravity','damp'])q(id).dispatchEvent(new Event('input',{bubbles:true}));syncSpeed();setMode('WALK');updatePrediction();for(const r of q('panel').querySelectorAll('input[type=range]'))r.dispatchEvent(new Event('input'));proof.textContent='Baseline restored · Jump 9.0 / Gravity 24.0';proof.classList.add('show');setTimeout(()=>proof.classList.remove('show'),900);},true);
new MutationObserver(()=>{if(guard)return;const t=proof.textContent||'';if(t.includes('STOP SUCCESS')||t.includes('WALK SUCCESS')||t.includes('RUN SUCCESS')||t.includes('SPRINT SUCCESS')){proof.classList.remove('show');return;}if(t.includes('JUMP SUCCESS')&&accepted.has('JUMP'))proof.classList.remove('show');}).observe(proof,{childList:true,characterData:true,subtree:true});
function tick(){const v=parseFloat(speed.textContent)||0;if(v>.35){move.textContent=mode;if(!proofedMode&&v>=target()*.86){showProof(mode,v.toFixed(1)+' m/s');proofedMode=true;}}else if(mode==='WALK')move.textContent='IDLE';requestAnimationFrame(tick);}syncSpeed();setMode('WALK');updatePrediction();requestAnimationFrame(tick);});</script>`;
html=html.replace('</body>',patchScript+'\n</body>');
await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.focus='jump tuning + explicit success proof';
info.movement_parameters=['walk speed LOCKED','run speed LOCKED','sprint = 1.8x run LOCKED','acceleration LOCKED','braking LOCKED','turn response LOCKED','jump velocity ACTIVE','gravity ACTIVE','camera damping LOCKED','animation-speed matching PENDING'];
info.tuned_defaults={walk_mps:2.5,run_mps:6.6,sprint_mps:11.88,accel:14,brake:10,turn:9,jump:9,gravity:24,camera:0.120};
info.jump_candidate={velocity_mps:9,gravity_mps2:24,theoretical_apex_m:1.6875,time_to_apex_s:0.375,theoretical_airtime_s:0.75};
info.control_contract={direction:'joystick/WASD = movement',mode_toggle:'R/interface button cycles WALK → RUN → SPRINT → WALK',run:'one toggle action',sprint:'one toggle action',sprint_relation:'1.8x Run'};
info.proof_labels=['JUMP SUCCESS'];
info.suppressed_proof_labels=['STOP SUCCESS','WALK SUCCESS','RUN SUCCESS','SPRINT SUCCESS'];
info.acceptance_checklist={walk:'ACCEPTED',run:'ACCEPTED',sprint:'ACCEPTED',acceleration:'ACCEPTED',braking:'ACCEPTED',turn:'ACCEPTED',jump:'PENDING',gravity_landing:'PENDING',camera_damping:'ACCEPTED',animation_speed_match:'PENDING'};
info.tuning_ui={slider_and_numeric_input:true,locked_parameters:['walk','run','sprint','acceleration','braking','turn','camera_damping'],active_parameters:['jump','gravity']};
await writeFile(infoPath,JSON.stringify(info,null,2));
