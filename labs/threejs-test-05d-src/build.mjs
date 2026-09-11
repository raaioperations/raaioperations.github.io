import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const baseRoot=path.resolve(root,'../threejs-test-04-src');
const out=path.resolve(root,'../threejs-test-05d');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`Patch anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`Patch anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

let source=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(source);
if(actualBase!==expectedBase)throw new Error(`Accepted Test 04 source changed (${actualBase}); refusing unreviewed inheritance.`);

source=mustReplace(source,
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone');",
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone'), lockStateEl=$('lockState'), targetHpEl=$('targetHp'), attackStateEl=$('attackState'), comboWindowEl=$('comboWindow'), proofSuccessEl=$('proofSuccess');",
'05D HUD bindings');

const combatBlock=String.raw`

// ---- Test 05D: accepted lock-on + two-hit chain proof ----
const WALK_SPEED=2.5,RUN_SPEED=6.6,SPRINT_SPEED=11.88,ACCEL=14,BRAKE=10,TURN=9,JUMP_V=9,GRAVITY=24;
let movementMode='WALK';
function cycleMovementMode(){movementMode=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';const b=document.getElementById('sprint');if(b)b.textContent=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';}

let proofTimer=0;
function prove(label,detail=''){proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1350);}

// One accepted lock-on target. Lock-on remains active but is not under proof.
const targetRoot=new THREE.Group();scene.add(targetRoot);targetRoot.position.set(5,groundHeight(5,51.6),51.6);
const targetBaseMat=new THREE.MeshStandardMaterial({color:0x84644f,roughness:.86}),targetHitMat=new THREE.MeshStandardMaterial({color:0xc98b59,roughness:.72,emissive:0x4a1705,emissiveIntensity:.34}),targetDark=new THREE.MeshStandardMaterial({color:0x3d352d,roughness:.92});
const targetBody=new THREE.Mesh(new THREE.CylinderGeometry(.42,.50,1.55,10),targetBaseMat);targetBody.position.y=.92;targetBody.castShadow=targetBody.receiveShadow=true;targetRoot.add(targetBody);
const targetHead=new THREE.Mesh(new THREE.SphereGeometry(.34,12,8),targetBaseMat);targetHead.position.y=1.92;targetHead.castShadow=true;targetRoot.add(targetHead);
const targetBase=new THREE.Mesh(new THREE.CylinderGeometry(.66,.76,.18,18),targetDark);targetBase.position.y=.06;targetBase.receiveShadow=true;targetRoot.add(targetBase);
const lockRing=new THREE.Mesh(new THREE.TorusGeometry(.88,.055,7,34),new THREE.MeshBasicMaterial({color:0xffdf78,transparent:true,opacity:.92,depthWrite:false}));lockRing.rotation.x=Math.PI/2;lockRing.position.y=.17;lockRing.visible=false;targetRoot.add(lockRing);
const lockHalo=new THREE.Mesh(new THREE.TorusGeometry(.46,.035,7,30),new THREE.MeshBasicMaterial({color:0xa8f0b5,transparent:true,opacity:.9,depthWrite:false}));lockHalo.position.y=2.40;lockHalo.visible=false;targetRoot.add(lockHalo);
let lockOn=false;const LOCK_RANGE=20;
function targetDistance(){return Math.hypot(targetRoot.position.x-playerRoot.position.x,targetRoot.position.z-playerRoot.position.z);}
function targetYaw(){return Math.atan2(targetRoot.position.x-playerRoot.position.x,targetRoot.position.z-playerRoot.position.z);}
function yawDelta(a,b){return ((a-b+Math.PI)%(Math.PI*2))-Math.PI;}
function setLockVisual(on){lockRing.visible=lockHalo.visible=on;lockStateEl.textContent=on?'LOCKED':'FREE';const btn=document.getElementById('lock');if(btn)btn.textContent=on?'UNLOCK':'LOCK';}
function toggleLock(){if(lockOn){lockOn=false;setLockVisual(false);return;}if(targetDistance()>LOCK_RANGE)return;lockOn=true;setLockVisual(true);}
function updateLock(dt){lockRing.rotation.z+=dt*1.15;lockHalo.rotation.z-=dt*.85;if(!lockOn)return;const err=yawDelta(targetYaw(),playerRoot.rotation.y);playerRoot.rotation.y+=err*(1-Math.exp(-18*dt));}

// Single sword visual. Mechanics are state/timing/range driven, not animation-driven.
const swordMetal=new THREE.MeshStandardMaterial({color:0xd6dcdd,roughness:.28,metalness:.72}),swordGrip=new THREE.MeshStandardMaterial({color:0x3b2920,roughness:.82});
const playerSword=new THREE.Group();const blade=new THREE.Mesh(new THREE.BoxGeometry(.075,.075,1.55),swordMetal),grip=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.34,7),swordGrip);blade.position.z=.82;grip.rotation.x=Math.PI/2;grip.position.z=.04;playerSword.add(blade,grip);playerSword.position.set(.43,1.25,.05);playerSword.rotation.set(-.18,-.72,.05);playerSword.traverse(o=>{if(o.isMesh)o.castShadow=true;});playerRoot.add(playerSword);

const ATTACK1_DURATION=.44,ATTACK1_ACTIVE=.16,COMBO_OPEN=.20,COMBO_CLOSE=.34,ATTACK2_DURATION=.48,ATTACK2_ACTIVE=.17,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;
let attackPhase=0,attackTime=0,attackHitDone=false,comboQueued=false,targetHP=100,targetFlash=0,targetReset=0;
function resetAttackState(){attackPhase=0;attackTime=0;attackHitDone=false;comboQueued=false;attackStateEl.textContent='READY';comboWindowEl.textContent='—';}
function startAttack1(){attackPhase=1;attackTime=0;attackHitDone=false;comboQueued=false;attackStateEl.textContent='ATTACK 1 · WINDUP';comboWindowEl.textContent='EARLY';}
function startAttack2(){attackPhase=2;attackTime=0;attackHitDone=false;comboQueued=false;attackStateEl.textContent='ATTACK 2 · WINDUP';comboWindowEl.textContent='CLOSED';prove('ATTACK 2 STATE CONFIRMED','chain transition');}
function requestAttack(){if(!grounded)return;if(attackPhase===0){startAttack1();return;}if(attackPhase===1){if(attackTime<COMBO_OPEN){prove('COMBO INPUT REJECTED','EARLY · '+attackTime.toFixed(2)+' s');return;}if(attackTime<=COMBO_CLOSE){if(!comboQueued){comboQueued=true;comboWindowEl.textContent='QUEUED';prove('COMBO INPUT ACCEPTED',attackTime.toFixed(2)+' s');}return;}prove('COMBO INPUT REJECTED','LATE · '+attackTime.toFixed(2)+' s');return;}if(attackPhase===2){return;}}
function attackFacingValid(){const dx=targetRoot.position.x-playerRoot.position.x,dz=targetRoot.position.z-playerRoot.position.z,dist=Math.hypot(dx,dz);if(dist>ATTACK_REACH)return false;const len=Math.max(.0001,dist),tx=dx/len,tz=dz/len,fx=Math.sin(playerRoot.rotation.y),fz=Math.cos(playerRoot.rotation.y);return fx*tx+fz*tz>=.42;}
function performHit(){if(attackHitDone)return;attackHitDone=true;const which=attackPhase;if(!attackFacingValid()){prove(which===1?'ATTACK 1 MISS':'ATTACK 2 MISS','0 DAMAGE');return;}targetHP=Math.max(0,targetHP-ATTACK_DAMAGE);targetHpEl.textContent=targetHP+'/100';targetFlash=.18;prove(which===1?'ATTACK 1 HIT CONFIRMED':'ATTACK 2 HIT CONFIRMED',ATTACK_DAMAGE+' DAMAGE · HP '+targetHP+'/100');if(targetHP<=0)targetReset=1.25;}
function updateAttack(dt){if(targetFlash>0){targetFlash-=dt;targetBody.material=targetHead.material=targetHitMat;}else targetBody.material=targetHead.material=targetBaseMat;if(targetReset>0){targetReset-=dt;if(targetReset<=0){targetHP=100;targetHpEl.textContent='100/100';}}
if(attackPhase===0){playerSword.rotation.x=THREE.MathUtils.lerp(playerSword.rotation.x,-.18,1-Math.exp(-18*dt));playerSword.rotation.y=THREE.MathUtils.lerp(playerSword.rotation.y,-.72,1-Math.exp(-18*dt));return;}
attackTime+=dt;
if(attackPhase===1){if(attackTime<ATTACK1_ACTIVE*.72)attackStateEl.textContent='ATTACK 1 · WINDUP';else if(attackTime<ATTACK1_ACTIVE+.08)attackStateEl.textContent='ATTACK 1 · ACTIVE';else attackStateEl.textContent='ATTACK 1 · RECOVERY';if(attackTime<COMBO_OPEN)comboWindowEl.textContent='EARLY';else if(attackTime<=COMBO_CLOSE)comboWindowEl.textContent=comboQueued?'QUEUED':'OPEN';else comboWindowEl.textContent='LATE';const p=Math.min(1,attackTime/ATTACK1_DURATION),arc=Math.sin(p*Math.PI);playerSword.rotation.y=-.95+arc*1.85;playerSword.rotation.x=-.28+arc*.34;if(!attackHitDone&&attackTime>=ATTACK1_ACTIVE)performHit();if(attackTime>=ATTACK1_DURATION){if(comboQueued)startAttack2();else resetAttackState();}}
else if(attackPhase===2){if(attackTime<ATTACK2_ACTIVE*.72)attackStateEl.textContent='ATTACK 2 · WINDUP';else if(attackTime<ATTACK2_ACTIVE+.08)attackStateEl.textContent='ATTACK 2 · ACTIVE';else attackStateEl.textContent='ATTACK 2 · RECOVERY';const p=Math.min(1,attackTime/ATTACK2_DURATION),arc=Math.sin(p*Math.PI);playerSword.rotation.y=.92-arc*1.82;playerSword.rotation.x=-.16+arc*.30;if(!attackHitDone&&attackTime>=ATTACK2_ACTIVE)performHit();if(attackTime>=ATTACK2_DURATION)resetAttackState();}}
`;

source=mustReplace(source,
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);",
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}"+combatBlock+"\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;if(e.code==='KeyR'&&!e.repeat){e.preventDefault();cycleMovementMode();}if(e.code==='KeyQ'&&!e.repeat){e.preventDefault();toggleLock();}if(e.code==='KeyF'&&!e.repeat){e.preventDefault();requestAttack();}});addEventListener('keyup',e=>keys[e.code]=false);",
'05D lock and combo block');

source=mustReplace(source,
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();touchSprint=true;sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>{touchSprint=false;sprint.style.transform='scale(1)'});jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();cycleMovementMode();sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>sprint.style.transform='scale(1)');const lockBtn=$('lock'),attackBtn=$('attack');lockBtn.addEventListener('pointerdown',e=>{e.preventDefault();toggleLock();lockBtn.style.transform='scale(.93)'});attackBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestAttack();attackBtn.style.transform='scale(.93)'});for(const [btn,events] of [[lockBtn,['pointerup','pointercancel','pointerleave']],[attackBtn,['pointerup','pointercancel','pointerleave']]])for(const ev of events)btn.addEventListener(ev,()=>btn.style.transform='scale(1)');jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
'05D mobile controls');

source=mustReplace(source,
"const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;",
"const sprinting=movementMode==='SPRINT'&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(movementMode==='WALK'?WALK_SPEED:movementMode==='RUN'?RUN_SPEED:SPRINT_SPEED)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?ACCEL:ACCEL*.42)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?BRAKE:BRAKE*.25)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded&&attackPhase===0){verticalVel=JUMP_V;grounded=false;}jumpQueued=false;verticalVel-=GRAVITY*dt;",
'accepted movement constants');

source=mustReplace(source,
"const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}",
"const speed=Math.hypot(velocity.x,velocity.z);if(!lockOn&&speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-TURN*dt));}updateLock(dt);",
'accepted lock-on facing');

source=mustReplace(source,
"if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));",
"if(mixer)mixer.update(dt*(sprinting?1.08:1));updateAttack(dt);let target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));if(lockOn){const enemyAim=targetRoot.position.clone().add(new THREE.Vector3(0,1.35,0));target.lerp(enemyAim,.26);}let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));",
'05D attack update and accepted lock camera');

let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('Test 04 — Visual Fidelity','Test 05D — Two-Hit Attack Chain').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05D — Two-Hit Attack Chain').replace('Starting local production bundle…','Starting two-hit attack-chain proof…');
html=mustReplace(html,'<span>Render scale</span><b id="scale">—</b>','<span>Render scale</span><b id="scale">—</b><span>Lock</span><b id="lockState">FREE</b><span>Attack state</span><b id="attackState">READY</b><span>Combo window</span><b id="comboWindow">—</b><span>Target HP</span><b id="targetHp">100/100</b>','05D telemetry');
html=mustReplace(html,'<div id="zone">FOREST APPROACH</div>','<div id="zone">FOREST APPROACH</div><div id="proofSuccess">COMBO TEST — F / ATTACK, then press again inside OPEN</div>','05D proof label');
html=html.replace('<button id="tuneBtn">TUNE</button>','<button id="tuneBtn">CHECK</button>');
html=html.replace('<div id="panel"><div class="title">Live variables</div><label><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>',
'<div id="panel"><div class="title">Test 05D checklist</div><div id="checklist"><div><b>PENDING</b><span>01 Attack 1 hit confirmed</span></div><div><b>PENDING</b><span>02 Early second input rejected</span></div><div><b>PENDING</b><span>03 Valid combo-window input accepted</span></div><div><b>PENDING</b><span>04 Attack 2 state transition confirmed</span></div><div><b>PENDING</b><span>05 Attack 2 hit confirmed separately</span></div><div><b>PENDING</b><span>06 Late second input rejected</span></div></div><div class="contract"><b>COMBO CONTRACT</b><span>Attack 1: 0.44 s · hit 0.16 s · combo OPEN 0.20–0.34 s · Attack 2: 0.48 s · hit 0.17 s · 25 damage each</span></div><div class="acceptedContract"><b>ACCEPTED / NOT RETESTED</b><span>Movement + single-target lock-on remain active. Q/LOCK toggles targeting; R/mode button cycles Walk → Run → Sprint.</span></div><label class="envHidden"><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label class="envHidden"><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label class="envHidden"><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label class="envHidden"><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>');
html=html.replace('<button id="jump" class="action">JUMP</button><button id="sprint" class="action">SPRINT</button>','<button id="jump" class="action">JUMP</button><button id="lock" class="action">LOCK</button><button id="attack" class="action">ATTACK</button><button id="sprint" class="action">RUN</button>');
html=html.replace('</style>',`\n.envHidden{display:none!important}#proofSuccess{position:absolute;left:50%;top:72px;transform:translate(-50%,-6px);padding:9px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(8,18,15,.84);backdrop-filter:blur(10px);font-size:10px;font-weight:850;letter-spacing:.04em;opacity:.8;transition:.16s ease;white-space:nowrap}#proofSuccess.show{transform:translate(-50%,0) scale(1.035);opacity:1;box-shadow:0 0 22px rgba(159,255,181,.22)}#checklist{display:grid;gap:6px;margin:4px 0 10px}#checklist>div{display:grid;grid-template-columns:54px 1fr;gap:6px;font-size:9px;line-height:1.28}#checklist b{font-size:7.5px;letter-spacing:.05em;color:#ffd98c}.contract,.acceptedContract{display:grid;gap:4px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);font-size:8.5px;line-height:1.3}.contract b{font-size:8px;color:#ffd98c;letter-spacing:.06em}.acceptedContract{margin-top:8px}.acceptedContract b{font-size:8px;color:#a8f0b5;letter-spacing:.06em}#attack{right:max(101px,calc(env(safe-area-inset-right) + 88px));bottom:max(108px,calc(env(safe-area-inset-bottom) + 96px));width:70px;height:70px;font-size:10px}#lock{right:max(28px,env(safe-area-inset-right));bottom:max(120px,calc(env(safe-area-inset-bottom) + 108px));width:58px;height:58px;font-size:9px}@media(pointer:coarse),(max-width:900px){#proofSuccess{top:66px;max-width:76vw;overflow:hidden;text-overflow:ellipsis;font-size:9px;padding:7px 10px}}\n</style>`);

const modelUrl='https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res=await fetch(modelUrl);if(!res.ok)throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);await writeFile(path.join(assets,'Soldier.glb'),Buffer.from(await res.arrayBuffer()));
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test05d-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const sw=`const CACHE='raai-threejs-test05d-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test05d-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;await writeFile(path.join(out,'sw.js'),sw);
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({build_id:buildId,inherits:'Test 04 visual baseline + accepted Test 05A movement + accepted Test 05B single attack + accepted Test 05C lock-on',base_blob:expectedBase,three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,focus:'two-hit attack chain proof',accepted_systems_active:{movement:true,lock_on:true},combo:{attack1_duration_s:.44,attack1_hit_s:.16,combo_window_open_s:.20,combo_window_close_s:.34,attack2_duration_s:.48,attack2_hit_s:.17,reach_m:2.75,damage_each:25,max_chain_hits:2,early_input_queues:false,late_input_queues:false,attack3:false},disabled_systems:{dodge:true,block:true,parry:true,enemy_telegraph:true,enemy_ai:true,extra_vfx:true},proof_labels:['ATTACK 1 HIT CONFIRMED','COMBO INPUT REJECTED · EARLY','COMBO INPUT ACCEPTED','ATTACK 2 STATE CONFIRMED','ATTACK 2 HIT CONFIRMED','COMBO INPUT REJECTED · LATE'],suppressed_proof_labels:['LOCK ACQUIRED','LOCK MAINTAINED','FACE CONFIRMED','LOCK RELEASED','LOCK REACQUIRED','WALK SUCCESS','RUN SUCCESS','SPRINT SUCCESS','JUMP SUCCESS'],acceptance_checklist:{attack1_hit:'PENDING',early_rejection:'PENDING',combo_window_accept:'PENDING',attack2_transition:'PENDING',attack2_hit:'PENDING',late_rejection:'PENDING'},app_js_bytes:js.size,soldier_glb_bytes:glb.size,service_worker_cache:true,target:'safari16.4+',mobile_fps_target:60},null,2));
console.log(JSON.stringify({buildId,appBytes:js.size,glbBytes:glb.size,baseBlob:actualBase}));
