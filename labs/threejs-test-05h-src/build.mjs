import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root=process.cwd();
const basePath=path.resolve(root,'../threejs-test-05g-src/build.mjs');
const runtimePath=path.resolve(root,'.build-05h-runtime.mjs');
let text=await readFile(basePath,'utf8');

function replaceReq(find,repl,label){
  const i=text.indexOf(find);
  if(i<0) throw new Error(`05H patch anchor missing: ${label}`);
  if(text.indexOf(find,i+find.length)>=0) throw new Error(`05H patch anchor not unique: ${label}`);
  text=text.slice(0,i)+repl+text.slice(i+find.length);
}

// Remove the two fragile 05G source-text HTML patches. 05H patches generated HTML directly.
text=text.replace(/\/\/ Add 05G telemetry and mobile control to generated HTML\.[\s\S]*?text=text\.replaceAll\('COMBO TEST — F \/ ATTACK, then press again inside OPEN','DODGE TEST — E \/ DODGE · press again during dodge to prove repeat blocking'\);/,
"text=text.replaceAll('COMBO TEST — F / ATTACK, then press again inside OPEN','I-FRAME TEST — use CHECK controls, then DODGE when armed');");

// Promote accepted 05G into a new 05H proof without overwriting 05G.
text=text.replaceAll('05G','05H').replaceAll('05g','05h');
text=text.replaceAll('Test 05H — Dodge / Evade','Test 05H — Dodge I-Frame Window');
text=text.replaceAll('RAAI Proof 05H — Dodge / Evade','RAAI Proof 05H — Dodge I-Frame Window');
text=text.replaceAll('isolated dodge / evade mechanical proof','isolated dodge i-frame window proof');
text=text.replaceAll('No i-frames yet.','Accepted dodge movement + isolated i-frame timing proof.');

// Only new 05H proof labels are visible; accepted dodge labels remain suppressed.
replaceReq("if(!label.startsWith('DODGE'))return;","if(!(label.startsWith('IFRAME')||label.startsWith('DAMAGE')))return;",'proof label filter');

// Add bounded i-frame window and deterministic hit-probe harness.
replaceReq(
  "const DODGE_DISTANCE=4.2,DODGE_COMMIT=.22,DODGE_RECOVERY=.12,DODGE_COOLDOWN=.18,DODGE_TOL=.55;",
  "const DODGE_DISTANCE=4.2,DODGE_COMMIT=.22,DODGE_RECOVERY=.12,DODGE_COOLDOWN=.18,DODGE_TOL=.55,IFRAME_START=.05,IFRAME_END=.19,TEST_DAMAGE=20;",
  'iframe constants'
);
replaceReq(
  "let dodgeState='READY',dodgeTime=0,dodgeCooldown=0,dodgeDir=new THREE.Vector3(),dodgeStart=new THREE.Vector3(),dodgeDirection='FORWARD';",
  "let dodgeState='READY',dodgeTime=0,dodgeCooldown=0,dodgeDir=new THREE.Vector3(),dodgeStart=new THREE.Vector3(),dodgeDirection='FORWARD',iframeActive=false,hitProbe='NONE',hitProbeFired=false,playerHP=100;",
  'iframe state'
);
replaceReq(
  "function setDodgeCheck(n){const e=document.getElementById('dodgeCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}",
  "function setDodgeCheck(n){const e=document.getElementById('dodgeCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}\nfunction setIframeCheck(n){const e=document.getElementById('iframeCheck'+n);if(e){e.textContent='PASS';e.style.color='#a8f0b5';}}\nfunction uiText(id,value){const e=document.getElementById(id);if(e)e.textContent=value;}\nfunction applyHitProbe(kind){const before=playerHP;if(iframeActive){uiText('hitResult','EVADED · 0 DAMAGE');if(kind==='IFRAME'){setIframeCheck(4);prove('IFRAME EVADE CONFIRMED','0 DAMAGE · HP '+playerHP+'/100');}return;}playerHP=Math.max(0,playerHP-TEST_DAMAGE);uiText('playerHp',playerHP+'/100');uiText('hitResult',kind+' · '+TEST_DAMAGE+' DAMAGE');if(kind==='DIRECT'){setIframeCheck(1);prove('DAMAGE CONFIRMED','DIRECT · 20 DAMAGE');}else if(kind==='EARLY'){setIframeCheck(2);prove('DAMAGE CONFIRMED','EARLY · 20 DAMAGE');}else if(kind==='RECOVERY'){setIframeCheck(5);prove('DAMAGE CONFIRMED','RECOVERY · 20 DAMAGE');}if(before-playerHP!==TEST_DAMAGE)prove('DAMAGE OUT OF CONTRACT',(before-playerHP)+' DAMAGE');}\nfunction armHitProbe(kind){if(dodgeState!=='READY'){uiText('hitResult','WAIT · DODGE BUSY');return;}hitProbe=kind;hitProbeFired=false;uiText('hitResult','ARMED · '+kind+' · PRESS DODGE');}\nfunction resetProbeHP(){playerHP=100;uiText('playerHp','100/100');uiText('hitResult','—');hitProbe='NONE';hitProbeFired=false;}\nfunction bindIframeControls(){const binds=[['directHit',()=>applyHitProbe('DIRECT')],['armEarly',()=>armHitProbe('EARLY')],['armIframe',()=>armHitProbe('IFRAME')],['armRecovery',()=>armHitProbe('RECOVERY')],['resetHp',resetProbeHP]];for(const [id,fn] of binds){const e=document.getElementById(id);if(e)e.addEventListener('pointerdown',ev=>{ev.preventDefault();fn();});}}\nqueueMicrotask(bindIframeControls);",
  'iframe helpers'
);
replaceReq(
  "if(dodgeState==='READY')return false;",
  "if(dodgeState==='READY'){iframeActive=false;uiText('iframeState','OFF');return false;}",
  'ready iframe reset'
);
replaceReq(
  "const previous=dodgeTime;dodgeTime+=dt;",
  "const previous=dodgeTime;dodgeTime+=dt;iframeActive=dodgeState==='COMMIT'&&dodgeTime>=IFRAME_START&&dodgeTime<=IFRAME_END;uiText('iframeState',iframeActive?'ACTIVE':'OFF');if(iframeActive)setIframeCheck(3);if(hitProbe!=='NONE'&&!hitProbeFired){const fireAt=hitProbe==='EARLY'?.02:hitProbe==='IFRAME'?.10:.26;if(dodgeTime>=fireAt){hitProbeFired=true;applyHitProbe(hitProbe);hitProbe='NONE';}}",
  'iframe timing and probe fire'
);

// Replace the 05G-only checklist with the 05H i-frame acceptance checklist and controls.
const oldChecklist=`<div id="checklist"><div><b id="dodgeCheck1">PENDING</b><span>01 Dodge input accepted</span></div><div><b id="dodgeCheck2">PENDING</b><span>02 Correct directional dodge selected</span></div><div><b id="dodgeCheck3">PENDING</b><span>03 Dodge state begins immediately</span></div><div><b id="dodgeCheck4">PENDING</b><span>04 Deterministic displacement near 4.2 m</span></div><div><b id="dodgeCheck5">PENDING</b><span>05 Steering restricted during committed portion</span></div><div><b id="dodgeCheck6">PENDING</b><span>06 Recovery returns to locomotion</span></div><div><b id="dodgeCheck7">PENDING</b><span>07 Repeated input cannot spam/cancel dodge</span></div></div><div class="contract"><b>DODGE CONTRACT</b><span>4.2 m · 0.22 s committed movement · 0.12 s recovery · 0.18 s cooldown · no i-frames</span></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, and two-hit chain remain active. Jump animation replacement stays deferred.</span></div>`;
const newChecklist=`<div id="checklist"><div><b id="iframeCheck1">PENDING</b><span>01 Direct hit outside dodge deals exactly 20</span></div><div><b id="iframeCheck2">PENDING</b><span>02 Early dodge hit before window still deals 20</span></div><div><b id="iframeCheck3">PENDING</b><span>03 I-frame state activates only during 0.05–0.19 s</span></div><div><b id="iframeCheck4">PENDING</b><span>04 Hit inside i-frame window deals 0</span></div><div><b id="iframeCheck5">PENDING</b><span>05 Recovery hit after window deals exactly 20</span></div></div><div class="contract"><b>I-FRAME CONTRACT</b><span>Accepted dodge 4.2 m · i-frame 0.05–0.19 s · probe damage 20 · no attack/jump cancel</span></div><div id="iframeControls"><button id="directHit">DIRECT HIT</button><button id="armEarly">ARM EARLY</button><button id="armIframe">ARM I-FRAME</button><button id="armRecovery">ARM RECOVERY</button><button id="resetHp">RESET HP</button></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement, lock-on, single attack, two-hit chain, and dodge movement remain active. Jump animation replacement stays deferred.</span></div>`;
replaceReq(oldChecklist,newChecklist,'05H checklist');

// Extend generated HTML telemetry and controls robustly after 05D->05H generation.
const cssAnchor="html=html.replace('</style>','#dodge{right:max(30px,env(safe-area-inset-right));bottom:max(190px,calc(env(safe-area-inset-bottom) + 178px));width:62px;height:62px;font-size:9px}</style>');";
if(!text.includes(cssAnchor)) throw new Error('05H generated HTML anchor missing');
text=text.replace(cssAnchor,cssAnchor+`\nhtml=html.replace('<span>Target HP</span><b id="targetHp">100/100</b>','<span>Target HP</span><b id="targetHp">100/100</b><span>Dodge</span><b id="dodgeState">READY</b><span>Dodge dir</span><b id="dodgeDirection">—</b><span>Dodge dist</span><b id="dodgeDistance">—</b><span>Player HP</span><b id="playerHp">100/100</b><span>I-frame</span><b id="iframeState">OFF</b><span>Hit test</span><b id="hitResult">—</b>');\nhtml=html.replace('<button id="lock" class="action">LOCK</button><button id="attack" class="action">ATTACK</button><button id="sprint" class="action">RUN</button>','<button id="lock" class="action">LOCK</button><button id="attack" class="action">ATTACK</button><button id="dodge" class="action">DODGE</button><button id="sprint" class="action">RUN</button>');\nhtml=html.replace('</style>','#iframeControls{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin:9px 0 2px}#iframeControls button{border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#eef7f2;border-radius:8px;padding:7px 5px;font-size:8px;font-weight:800;letter-spacing:.03em}#iframeControls #resetHp{grid-column:1/-1}</style>');`);

// Update 05H metadata contract.
replaceReq("info.inherits='Accepted Test 05D-R1 combat baseline + accepted movement/lock-on/single-attack/two-hit chain';","info.inherits='Accepted Test 05G dodge baseline + accepted movement/lock-on/single-attack/two-hit chain';",'inherits metadata');
replaceReq("info.dodge={distance_m:4.2,commit_s:.22,recovery_s:.12,cooldown_s:.18,distance_tolerance_m:.55,directional_source:'current planar movement velocity; forward fallback when stationary',steering_during_commit:'ignored/locked',iframes:false,attack_cancel:false,jump_cancel:false};","info.dodge={distance_m:4.2,commit_s:.22,recovery_s:.12,cooldown_s:.18,distance_tolerance_m:.55,directional_source:'current planar movement velocity; forward fallback when stationary',steering_during_commit:'ignored/locked',iframes:true,iframe_start_s:.05,iframe_end_s:.19,attack_cancel:false,jump_cancel:false};",'dodge metadata');
replaceReq("info.proof_labels=['DODGE INPUT ACCEPTED','DODGE COMMIT CONFIRMED','DODGE DISTANCE CONFIRMED','DODGE RECOVERY CONFIRMED','DODGE REPEAT BLOCKED'];","info.proof_labels=['DAMAGE CONFIRMED · DIRECT','DAMAGE CONFIRMED · EARLY','IFRAME EVADE CONFIRMED','DAMAGE CONFIRMED · RECOVERY'];",'proof metadata');
replaceReq("info.acceptance_checklist={dodge_input:'PENDING',direction_selection:'PENDING',immediate_state:'PENDING',deterministic_distance:'PENDING',commit_steering_lock:'PENDING',recovery_to_locomotion:'PENDING',repeat_spam_block:'PENDING'};","info.acceptance_checklist={direct_hit_20:'PENDING',early_hit_20:'PENDING',iframe_window_active:'PENDING',iframe_hit_0:'PENDING',recovery_hit_20:'PENDING'};",'acceptance metadata');
replaceReq("info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true};","info.accepted_systems_active_not_retested={movement:true,lock_on:true,single_attack:true,two_hit_chain:true,dodge:true};",'accepted systems metadata');
replaceReq("info.disabled_systems={iframes:true,block:true,parry:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};","info.disabled_systems={block:true,parry:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true};info.iframe={start_s:.05,end_s:.19,test_damage:20,early_probe_s:.02,in_window_probe_s:.10,recovery_probe_s:.26,status:'PENDING HUMAN ACCEPTANCE'};",'disabled systems metadata');
text=text.replaceAll("console.log('Built Test 05H dodge / evade mechanical proof.');","console.log('Built Test 05H dodge i-frame window proof.');");

await writeFile(runtimePath,text);
await import(pathToFileURL(runtimePath).href+'?v='+Date.now());
