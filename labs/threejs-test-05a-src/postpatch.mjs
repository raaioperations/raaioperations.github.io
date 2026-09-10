import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-05a');
const indexPath=path.join(out,'index.html');
const infoPath=path.join(out,'build-info.json');
let html=await readFile(indexPath,'utf8');

const replace=(a,b,label)=>{if(!html.includes(a))throw new Error(`Missing ${label}`);html=html.replace(a,b);};

// User-tuned movement defaults.
replace('id="walkSpeed" type="range" min="2.5" max="7" step="0.1" value="4.8"','id="walkSpeed" type="range" min="2.5" max="24" step="0.1" value="2.5"','walk default');
replace('id="sprintSpeed" type="range" min="5" max="12" step="0.1" value="8.7"','id="sprintSpeed" type="range" min="5" max="36" step="0.1" value="19.8"','sprint default');
replace('id="accel" type="range" min="3" max="24" step="0.5" value="12"','id="accel" type="range" min="3" max="24" step="0.5" value="14"','accel default');
replace('id="gravity" type="range" min="8" max="30" step="0.2" value="18.6"','id="gravity" type="range" min="8" max="30" step="0.2" value="23.8"','gravity default');

// Keep base speed controls internal; expose Walk + Run and deterministic Sprint=3xRun.
replace('<label><span>Walk <output id="walkV"></output></span><input id="walkSpeed"','<label class="internalSpeed"><span>Walk internal</span><input id="walkSpeed"','hide internal walk');
replace('<label><span>Sprint <output id="sprintV"></output></span><input id="sprintSpeed"','<label class="internalSpeed"><span>Sprint internal</span><input id="sprintSpeed"','hide internal sprint');
replace('<label><span>Accel <output id="accelV"></output></span>',
'<label><span>Walk <output id="walkTuneV">2.5</output></span><input id="walkTune" type="range" min="1.5" max="5" step="0.1" value="2.5"></label><label><span>Run <output id="runTuneV">6.6</output></span><input id="runTune" type="range" min="3" max="10" step="0.1" value="6.6"></label><label><span>Sprint <output id="sprintDerivedV">19.8</output></span><b style="font-size:9px;opacity:.72">3× Run</b></label><label><span>Accel <output id="accelV"></output></span>',
'add visible walk run sprint');

// Checklist is authoritative for what remains under human acceptance.
replace('<button id="resetMove">Reset movement defaults</button>',
'<div class="checkTitle">Test checklist</div><div id="checklist"><div><b>PENDING</b><span>01 Walk — joystick / WASD</span></div><div><b>PENDING</b><span>02 Run — R / mode button</span></div><div><b>PENDING</b><span>03 Sprint — R / mode button · 3× Run</span></div><div><b>PENDING</b><span>04 Acceleration response</span></div><div><b>PENDING</b><span>05 Braking response</span></div><div><b>PENDING</b><span>06 Turn response</span></div><div><b>PENDING</b><span>07 Jump</span></div><div><b>PENDING</b><span>08 Gravity + landing</span></div><div><b>PENDING</b><span>09 Camera damping</span></div><div><b>PENDING</b><span>10 Animation ↔ speed match</span></div></div><button id="resetMove">Reset movement defaults</button>',
'checklist');

html=html.replace('</style>',`.internalSpeed{display:none!important}.checkTitle{margin:12px 0 6px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);font-size:10px;font-weight:850;letter-spacing:.07em;text-transform:uppercase}#checklist{display:grid;gap:4px;margin-bottom:7px}#checklist>div{display:grid;grid-template-columns:54px 1fr;gap:6px;align-items:start;font-size:8.5px;line-height:1.25}#checklist b{font-size:7.5px;letter-spacing:.05em;color:#ffd98c}#checklist span{opacity:.9}</style>`);
replace('READY — tune movement, then validate each action','READY — checklist governs acceptance · R cycles movement mode','proof copy');

const patchScript=`<script>addEventListener('DOMContentLoaded',()=>{const q=id=>document.getElementById(id),walk=q('walkTune'),run=q('runTune'),walkInternal=q('walkSpeed'),sprintInternal=q('sprintSpeed'),walkV=q('walkTuneV'),runV=q('runTuneV'),sprintV=q('sprintDerivedV'),proof=q('proofSuccess'),move=q('moveState'),speed=q('speed'),modeBtn=q('sprint'),reset=q('resetMove');const accepted=new Set([]);let mode='WALK',proofedMode=false,proofTimer=0,guard=false;const directional=new Set();function target(){return mode==='WALK'?+walk.value:mode==='RUN'?+run.value:+run.value*3;}function showProof(label,detail=''){if(accepted.has(label))return;proof.textContent='✓ '+label+' SUCCESS'+(detail?' · '+detail:'');proof.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proof.classList.remove('show'),1200);}function sync(){walkV.textContent=(+walk.value).toFixed(1);runV.textContent=(+run.value).toFixed(1);sprintV.textContent=(+run.value*3).toFixed(1);sprintInternal.max=36;sprintInternal.value=(+run.value*3).toFixed(1);sprintInternal.dispatchEvent(new Event('input'));}function setMode(next){mode=next;proofedMode=false;walkInternal.value=(mode==='WALK'?+walk.value:+run.value).toFixed(1);walkInternal.dispatchEvent(new Event('input'));sync();dispatchEvent(new KeyboardEvent(mode==='SPRINT'?'keydown':'keyup',{code:'ShiftLeft',key:'Shift',bubbles:true}));modeBtn.textContent=mode==='WALK'?'RUN':mode==='RUN'?'SPRINT':'WALK';modeBtn.setAttribute('aria-label','Current movement '+mode+'. Tap for '+modeBtn.textContent);move.textContent=mode;}function cycle(){setMode(mode==='WALK'?'RUN':mode==='RUN'?'SPRINT':'WALK');}for(const e of [walk,run])e.addEventListener('input',()=>{sync();setMode(mode);});for(const type of ['pointerdown','pointerup','pointercancel','click'])modeBtn.addEventListener(type,e=>{e.preventDefault();e.stopImmediatePropagation();if(type==='pointerdown')cycle();},true);addEventListener('keydown',e=>{if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowLeft','ArrowDown','ArrowRight'].includes(e.code))directional.add(e.code);if(e.code==='KeyR'&&!e.repeat){e.preventDefault();e.stopImmediatePropagation();cycle();}},true);addEventListener('keyup',e=>{directional.delete(e.code);},true);reset.addEventListener('click',e=>{e.stopImmediatePropagation();walk.value=2.5;run.value=6.6;q('accel').value=14;q('brake').value=10;q('turnRate').value=14;q('jumpVel').value=7.7;q('gravity').value=23.8;q('damp').value=.12;for(const id of ['accel','brake','turnRate','jumpVel','gravity','damp'])q(id).dispatchEvent(new Event('input'));sync();setMode('WALK');proof.textContent='Movement defaults restored';proof.classList.add('show');setTimeout(()=>proof.classList.remove('show'),900);},true);new MutationObserver(()=>{if(guard)return;const t=proof.textContent||'';if(t.includes('STOP SUCCESS')){proof.classList.remove('show');return;}if(t.includes('WALK SUCCESS')&&mode==='RUN'){guard=true;proof.textContent=t.replace('WALK SUCCESS','RUN SUCCESS');guard=false;}if((t.includes('WALK SUCCESS')&&accepted.has('WALK'))||(t.includes('RUN SUCCESS')&&accepted.has('RUN'))||(t.includes('SPRINT SUCCESS')&&accepted.has('SPRINT'))||(t.includes('JUMP SUCCESS')&&accepted.has('JUMP')))proof.classList.remove('show');}).observe(proof,{childList:true,characterData:true,subtree:true});function tick(){const v=parseFloat(speed.textContent)||0;if(v>.35){move.textContent=mode;if(!proofedMode&&v>=target()*.86){showProof(mode,v.toFixed(1)+' m/s');proofedMode=true;}}else if(mode==='WALK')move.textContent='IDLE';requestAnimationFrame(tick);}sync();setMode('WALK');requestAnimationFrame(tick);});</script>`;
html=html.replace('</body>',patchScript+'\n</body>');
await writeFile(indexPath,html);

const info=JSON.parse(await readFile(infoPath,'utf8'));
info.movement_parameters=['walk speed','run speed','sprint = 3x run','acceleration','braking','turn response','jump velocity','gravity','camera damping','animation-speed matching'];
info.tuned_defaults={walk_mps:2.5,run_mps:6.6,sprint_mps:19.8,accel:14,brake:10,turn:14,jump:7.7,gravity:23.8,camera:0.120};
info.control_contract={direction:'joystick/WASD = Walk',mode_toggle:'R/interface button cycles WALK → RUN → SPRINT → WALK',run:'one toggle action',sprint:'one toggle action',sprint_relation:'3x Run'};
info.proof_labels=['WALK SUCCESS','RUN SUCCESS','SPRINT SUCCESS','JUMP SUCCESS'];
info.suppressed_proof_labels=['STOP SUCCESS'];
info.acceptance_checklist={walk:'PENDING',run:'PENDING',sprint:'PENDING',acceleration:'PENDING',braking:'PENDING',turn:'PENDING',jump:'PENDING',gravity_landing:'PENDING',camera_damping:'PENDING',animation_speed_match:'PENDING'};
await writeFile(infoPath,JSON.stringify(info,null,2));
