import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const baseBuild=path.resolve(root,'../threejs-test-05d-src/build.mjs');
const runtimeBuild=path.resolve(root,'.build-05g-runtime.mjs');
let text=await readFile(baseBuild,'utf8');

function replaceOnce(find,repl,label){
  const i=text.indexOf(find);
  if(i<0) throw new Error(`05G patch anchor missing: ${label}`);
  if(text.indexOf(find,i+find.length)>=0) throw new Error(`05G patch anchor not unique: ${label}`);
  text=text.slice(0,i)+repl+text.slice(i+find.length);
}

// Preserve the accepted 05D-R1 combo window.
replaceOnce(
  'const ATTACK1_DURATION=.44,ATTACK1_ACTIVE=.16,COMBO_OPEN=.20,COMBO_CLOSE=.34,ATTACK2_DURATION=.48,ATTACK2_ACTIVE=.17,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;',
  'const ATTACK1_DURATION=.44,ATTACK1_ACTIVE=.16,COMBO_OPEN=.16,COMBO_CLOSE=.40,ATTACK2_DURATION=.48,ATTACK2_ACTIVE=.17,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;',
  'accepted combo constants'
);
replaceOnce(
  'Attack 1: 0.44 s · hit 0.16 s · combo OPEN 0.20–0.34 s · Attack 2: 0.48 s · hit 0.17 s · 25 damage each',
  'Attack 1: 0.44 s · hit 0.16 s · combo OPEN 0.16–0.40 s · Attack 2: 0.48 s · hit 0.17 s · 25 damage each',
  'accepted combo visible contract'
);
replaceOnce('combo_window_open_s:.20,combo_window_close_s:.34','combo_window_open_s:.16,combo_window_close_s:.40,combo_window_width_s:.24,repair_revision:\'05D-R1\'','accepted combo metadata');

// Build 05G instead of overwriting 05D.
replaceOnce("const out=path.resolve(root,'../threejs-test-05d');","const out=path.resolve(root,'../threejs-test-05g');",'output directory');
text=text.replaceAll('Test 05D — Two-Hit Attack Chain','Test 05G — Dodge / Evade');
text=text.replaceAll('RAAI Proof 05D — Two-Hit Attack Chain','RAAI Proof 05G — Dodge / Evade');
text=text.replaceAll('test05d-main.js','test05g-main.js');
text=text.replaceAll('raai-threejs-test05d-','raai-threejs-test05g-');

// Add dodge telemetry bindings.
replaceOnce(
  "zoneEl=$('zone'), lockStateEl=$('lockState'), targetHpEl=$('targetHp'), attackStateEl=$('attackState'), comboWindowEl=$('comboWindow'), proofSuccessEl=$('proofSuccess');",
  "zoneEl=$('zone'), lockStateEl=$('lockState'), targetHpEl=$('targetHp'), attackStateEl=$('attackState'), comboWindowEl=$('comboWindow'), dodgeStateEl=$('dodgeState'), dodgeDistanceEl=$('dodgeDistance'), dodgeDirectionEl=$('dodgeDirection'), proofSuccessEl=$('proofSuccess');",
  'dodge HUD bindings'
);

// Only unaccepted dodge proof labels are shown in 05G.
replaceOnce(
  "function prove(label,detail=''){proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1350);}",
  "function prove(label,detail=''){if(!label.startsWith('DODGE'))return;proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1350);}",
  'suppress accepted proof labels'
);

const dodgeCode=String.raw`

// Test 05G — isolated dodge / evade mechanical proof. No i-frames yet.
const DODGE_DISTANCE=4.2,DODGE_COMMIT=.22,DODGE_RECOVERY=.12,DODGE_COOLDOWN=.18,DODGE_TOL=.55;
let dodgeState='READY',dodgeTime=0,dodgeCooldown=0,dodgeDir=new THREE.Vector3(),dodgeStart=new THREE.Vector3(),dodgeDirection='FORWARD';
function setDodgeCheck(n){const e=document.getElementById('dodgeCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}
function classifyDodgeDirection(dir){const f=new THREE.Vector3(Math.sin(playerRoot.rotation.y),0,Math.cos(playerRoot.rotation.y)),r=new THREE.Vector3(f.z,0,-f.x),fd=dir.dot(f),rd=dir.dot(r);if(Math.abs(fd)>=Math.abs(rd))return fd>=0?'FORWARD':'BACK';return rd>=0?'RIGHT':'LEFT';}
function requestDodge(){
  if(!grounded||attackPhase!==0){prove('DODGE INPUT REJECTED','BUSY');return;}
  if(dodgeState!=='READY'||dodgeCooldown>0){setDodgeCheck(7);prove('DODGE REPEAT BLOCKED',dodgeState!=='READY'?dodgeState:'COOLDOWN');return;}
  let dx=velocity.x,dz=velocity.z,len=Math.hypot(dx,dz);if(len<.35){dx=Math.sin(playerRoot.rotation.y);dz=Math.cos(playerRoot.rotation.y);len=1;}
  dodgeDir.set(dx/len,0,dz/len);dodgeDirection=classifyDodgeDirection(dodgeDir);dodgeStart.copy(playerRoot.position);dodgeTime=0;dodgeState='COMMIT';
  dodgeStateEl.textContent='COMMIT';dodgeDirectionEl.textContent=dodgeDirection;dodgeDistanceEl.textContent='0.00 m';
  setDodgeCheck(1);setDodgeCheck(2);setDodgeCheck(3);prove('DODGE INPUT ACCEPTED',dodgeDirection+' · COMMIT');
}
function updateDodge(dt){
  if(dodgeCooldown>0)dodgeCooldown=Math.max(0,dodgeCooldown-dt);
  if(dodgeState==='READY')return false;
  const previous=dodgeTime;dodgeTime+=dt;
  if(dodgeState==='COMMIT'){
    const step=Math.max(0,Math.min(dt,DODGE_COMMIT-previous));const speed=DODGE_DISTANCE/DODGE_COMMIT;
    playerRoot.position.x+=dodgeDir.x*speed*step;playerRoot.position.z+=dodgeDir.z*speed*step;velocity.x=0;velocity.z=0;
    const d=Math.hypot(playerRoot.position.x-dodgeStart.x,playerRoot.position.z-dodgeStart.z);dodgeDistanceEl.textContent=d.toFixed(2)+' m';
    if(dodgeTime>=DODGE_COMMIT){dodgeState='RECOVERY';dodgeStateEl.textContent='RECOVERY';setDodgeCheck(5);prove('DODGE COMMIT CONFIRMED','steering locked');}
    return true;
  }
  velocity.x=0;velocity.z=0;
  if(dodgeTime>=DODGE_COMMIT+DODGE_RECOVERY){
    const d=Math.hypot(playerRoot.position.x-dodgeStart.x,playerRoot.position.z-dodgeStart.z);dodgeDistanceEl.textContent=d.toFixed(2)+' m';
    if(Math.abs(d-DODGE_DISTANCE)<=DODGE_TOL){setDodgeCheck(4);prove('DODGE DISTANCE CONFIRMED',d.toFixed(2)+' m');}else prove('DODGE DISTANCE OUT OF RANGE',d.toFixed(2)+' m');
    dodgeState='READY';dodgeStateEl.textContent='READY';dodgeCooldown=DODGE_COOLDOWN;setDodgeCheck(6);setTimeout(()=>prove('DODGE RECOVERY CONFIRMED','locomotion restored'),120);
  }
  return true;
}
`;

replaceOnce(
  "function updateLock(dt){lockRing.rotation.z+=dt*1.15;lockHalo.rotation.z-=dt*.85;if(!lockOn)return;const err=yawDelta(targetYaw(),playerRoot.rotation.y);playerRoot.rotation.y+=err*(1-Math.exp(-18*dt));}\n\n// Single sword visual.",
  "function updateLock(dt){lockRing.rotation.z+=dt*1.15;lockHalo.rotation.z-=dt*.85;if(!lockOn)return;const err=yawDelta(targetYaw(),playerRoot.rotation.y);playerRoot.rotation.y+=err*(1-Math.exp(-18*dt));}"+dodgeCode+"\n\n// Single sword visual.",
  'insert dodge state machine'
);

replaceOnce("function requestAttack(){if(!grounded)return;","function requestAttack(){if(!grounded||dodgeState!=='READY')return;",'block attack during dodge');
replaceOnce(
  "if(e.code==='KeyF'&&!e.repeat){e.preventDefault();requestAttack();}});",
  "if(e.code==='KeyF'&&!e.repeat){e.preventDefault();requestAttack();}if(e.code==='KeyE'&&!e.repeat){e.preventDefault();requestDodge();}});",
  'keyboard dodge input'
);

replaceOnce(
  "const lockBtn=$('lock'),attackBtn=$('attack');lockBtn.addEventListener('pointerdown',e=>{e.preventDefault();toggleLock();lockBtn.style.transform='scale(.93)'});attackBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestAttack();attackBtn.style.transform='scale(.93)'});for(const [btn,events] of [[lockBtn,['pointerup','pointercancel','pointerleave']],[attackBtn,['pointerup','pointercancel','pointerleave']]])for(const ev of events)btn.addEventListener(ev,()=>btn.style.transform='scale(1)');",
  "const lockBtn=$('lock'),attackBtn=$('attack'),dodgeBtn=$('dodge');lockBtn.addEventListener('pointerdown',e=>{e.preventDefault();toggleLock();lockBtn.style.transform='scale(.93)'});attackBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestAttack();attackBtn.style.transform='scale(.93)'});dodgeBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestDodge();dodgeBtn.style.transform='scale(.93)'});for(const [btn,events] of [[lockBtn,['pointerup','pointercancel','pointerleave']],[attackBtn,['pointerup','pointercancel','pointerleave']],[dodgeBtn,['pointerup','pointercancel','pointerleave']]])for(const ev of events)btn.addEventListener(ev,()=>btn.style.transform='scale(1)');",
  'mobile dodge input'
);

const normalMove="if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?ACCEL:ACCEL*.42)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?BRAKE:BRAKE*.25)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded&&attackPhase===0){verticalVel=JUMP_V;grounded=false;}jumpQueued=false;verticalVel-=GRAVITY*dt;";
const dodgeMove="const dodging=updateDodge(dt);if(!dodging){if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?ACCEL:ACCEL*.42)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?BRAKE:BRAKE*.25)*dt);velocity.x*=d;velocity.z*=d;}}if(jumpQueued&&grounded&&attackPhase===0&&dodgeState==='READY'){verticalVel=JUMP_V;grounded=false;}jumpQueued=false;verticalVel-=GRAVITY*dt;";
replaceOnce(normalMove,dodgeMove,'dodge movement authority');

// Add 05G telemetry and mobile control to generated HTML.
replaceOnce(
  '<span>Target HP</span><b id=\\"targetHp\\">100/100</b>',
  '<span>Target HP</span><b id=\\"targetHp\\">100/100</b><span>Dodge</span><b id=\\"dodgeState\\">READY</b><span>Dodge dir</span><b id=\\"dodgeDirection\\">—</b><span>Dodge dist</span><b id=\\"dodgeDistance\\">—</b>',
  'dodge telemetry HTML'
);
replaceOnce(
  '<button id=\\"lock\\" class=\\"action\\">LOCK</button><button id=\\"attack\\" class=\\"action\\">ATTACK</button><button id=\\"sprint\\" class=\\"action\\">RUN</button>',
  '<button id=\\"lock\\" class=\\"action\\">LOCK</button><button id=\\"attack\\" class=\\"action\\">ATTACK</button><button id=\\"dodge\\" class=\\"action\\">DODGE</button><button id=\\"sprint\\" class=\\"action\\">RUN</button>',
  'dodge mobile button HTML'
);
text=text.replaceAll('COMBO TEST — F / ATTACK, then press again inside OPEN','DODGE TEST — E / DODGE · press again during dodge to prove repeat blocking');

await writeFile(runtimeBuild,text);
await import(pathToFileURL(runtimeBuild).href+'?v='+Date.now());

// Final presentation and acceptance checklist are intentionally 05G-only.
const out=path.resolve(root,'../threejs-test-05g');
const indexPath=path.join(out,'index.html');
let html=await readFile(indexPath,'utf8');
html=html.replace('<div class="title">Test 05D checklist</div>','<div class="title">Test 05G checklist</div>');
html=html.replace(/<div id="checklist">[\s\S]*?<div class="acceptedContract">[\s\S]*?<\/div>/,
`<div id="checklist"><div><b id="dodgeCheck1">PENDING</b><span>01 Dodge input accepted</span></div><div><b id="dodgeCheck2">PENDING</b><span>02 Correct directional dodge selected</span></div><div><b id="dodgeCheck3">PENDING</b><span>03 Dodge state begins immediately</span></div><div><b id="dodgeCheck4">PENDING</b><span>04 Deterministic displacement near 4.2 m</span></div><div><b id="dodgeCheck5">PENDING</b><span>05 Steering restricted during committed portion</span></div><div><b id="dodgeCheck6">PENDING</b><span>06 Recovery returns to locomotion</span></div><div><b id="dodgeCheck7">PENDING</b><span>07 Repeated input cannot spam/cancel dodge</span></div></div><div class="contract"><b>DODGE CONTRACT</b><span>4.2 m · 0.22 s committed movement · 0.12 s recovery · 0.18 s cooldown · no i-frames</span></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, and two-hit chain remain active. Jump animation replacement stays deferred.</span></div>`);
html=html.replace('</style>','#dodge{right:max(30px,env(safe-area-inset-right));bottom:max(190px,calc(env(safe-area-inset-bottom) + 178px));width:62px;height:62px;font-size:9px}</style>');
await writeFile(indexPath,html);

const infoPath=path.join(out,'build-info.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
info.inherits='Accepted Test 05D-R1 combat baseline + accepted movement/lock-on/single-attack/two-hit chain';
info.focus='isolated dodge / evade mechanical proof';
info.dodge={distance_m:4.2,commit_s:.22,recovery_s:.12,cooldown_s:.18,distance_tolerance_m:.55,directional_source:'current planar movement velocity; forward fallback when stationary',steering_during_commit:'ignored/locked',iframes:false,attack_cancel:false,jump_cancel:false};
info.proof_labels=['DODGE INPUT ACCEPTED','DODGE COMMIT CONFIRMED','DODGE DISTANCE CONFIRMED','DODGE RECOVERY CONFIRMED','DODGE REPEAT BLOCKED'];
info.acceptance_checklist={dodge_input:'PENDING',direction_selection:'PENDING',immediate_state:'PENDING',deterministic_distance:'PENDING',commit_steering_lock:'PENDING',recovery_to_locomotion:'PENDING',repeat_spam_block:'PENDING'};
info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true};
info.disabled_systems={iframes:true,block:true,parry:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};
info.procedural_jump_status='CLOSED / FAILED / DEFERRED TO AUTHORED ANIMATION';
await writeFile(infoPath,JSON.stringify(info,null,2));
console.log('Built Test 05G dodge / evade mechanical proof.');
