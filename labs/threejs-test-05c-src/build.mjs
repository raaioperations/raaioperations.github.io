import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const baseRoot=path.resolve(root,'../threejs-test-04-src');
const out=path.resolve(root,'../threejs-test-05c');
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
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone'), lockStateEl=$('lockState'), targetRangeEl=$('targetRange'), facingErrorEl=$('facingError'), proofSuccessEl=$('proofSuccess');",
'05C HUD bindings');

const lockBlock=String.raw`

// ---- Test 05C: single-target lock-on proof ----
const WALK_SPEED=2.5,RUN_SPEED=6.6,SPRINT_SPEED=11.88,ACCEL=14,BRAKE=10,TURN=9,JUMP_V=9,GRAVITY=24;
let movementMode='WALK';
function cycleMovementMode(){movementMode=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';const b=document.getElementById('sprint');if(b)b.textContent=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';}

let proofTimer=0;
function prove(label,detail=''){proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1250);}

const targetRoot=new THREE.Group();scene.add(targetRoot);targetRoot.position.set(5,groundHeight(5,51.5),51.5);
const targetMat=new THREE.MeshStandardMaterial({color:0x8c6b50,roughness:.86}),targetDark=new THREE.MeshStandardMaterial({color:0x40382f,roughness:.92});
const targetBody=new THREE.Mesh(new THREE.CylinderGeometry(.42,.50,1.55,10),targetMat);targetBody.position.y=.92;targetBody.castShadow=targetBody.receiveShadow=true;targetRoot.add(targetBody);
const targetHead=new THREE.Mesh(new THREE.SphereGeometry(.34,12,8),targetMat);targetHead.position.y=1.92;targetHead.castShadow=true;targetRoot.add(targetHead);
const targetBase=new THREE.Mesh(new THREE.CylinderGeometry(.66,.76,.18,18),targetDark);targetBase.position.y=.06;targetBase.receiveShadow=true;targetRoot.add(targetBase);
const lockRing=new THREE.Mesh(new THREE.TorusGeometry(.88,.055,7,34),new THREE.MeshBasicMaterial({color:0xffdf78,transparent:true,opacity:.92,depthWrite:false}));lockRing.rotation.x=Math.PI/2;lockRing.position.y=.17;lockRing.visible=false;targetRoot.add(lockRing);
const lockHalo=new THREE.Mesh(new THREE.TorusGeometry(.46,.035,7,30),new THREE.MeshBasicMaterial({color:0xa8f0b5,transparent:true,opacity:.9,depthWrite:false}));lockHalo.position.y=2.40;lockHalo.visible=false;targetRoot.add(lockHalo);

let lockOn=false,everAcquired=false,releasedOnce=false,maintainTimer=0,maintainProved=false,faceProved=false,reacquireProved=false;
const LOCK_RANGE=20,FACE_TOLERANCE_DEG=5;
function targetDistance(){return Math.hypot(targetRoot.position.x-playerRoot.position.x,targetRoot.position.z-playerRoot.position.z);}
function targetYaw(){return Math.atan2(targetRoot.position.x-playerRoot.position.x,targetRoot.position.z-playerRoot.position.z);}
function yawDelta(a,b){return ((a-b+Math.PI)%(Math.PI*2))-Math.PI;}
function setLockVisual(on){lockRing.visible=lockHalo.visible=on;lockStateEl.textContent=on?'LOCKED':'FREE';const btn=document.getElementById('lock');if(btn)btn.textContent=on?'UNLOCK':'LOCK';}
function toggleLock(){if(lockOn){lockOn=false;releasedOnce=true;maintainTimer=0;maintainProved=false;faceProved=false;setLockVisual(false);prove('LOCK RELEASED','target disengaged');return;}const d=targetDistance();if(d>LOCK_RANGE){prove('LOCK FAILED','OUT OF RANGE '+d.toFixed(1)+' m');return;}lockOn=true;maintainTimer=0;maintainProved=false;faceProved=false;setLockVisual(true);if(releasedOnce&&everAcquired&&!reacquireProved){reacquireProved=true;prove('LOCK REACQUIRED',d.toFixed(1)+' m');}else prove('LOCK ACQUIRED',d.toFixed(1)+' m');everAcquired=true;}
function updateLock(dt){const d=targetDistance();targetRangeEl.textContent=d.toFixed(2)+' m';lockRing.rotation.z+=dt*1.15;lockHalo.rotation.z-=dt*.85;if(!lockOn){facingErrorEl.textContent='—';return;}maintainTimer+=dt;if(!maintainProved&&maintainTimer>=1.0){maintainProved=true;prove('LOCK MAINTAINED','1.0 s continuous');}
const ty=targetYaw(),err=yawDelta(ty,playerRoot.rotation.y),errDeg=Math.abs(err)*180/Math.PI;facingErrorEl.textContent=errDeg.toFixed(1)+'°';playerRoot.rotation.y+=err*(1-Math.exp(-18*dt));if(!faceProved&&errDeg<=FACE_TOLERANCE_DEG){faceProved=true;prove('FACE CONFIRMED',errDeg.toFixed(1)+'° error');}}
`;

source=mustReplace(source,
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);",
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}"+lockBlock+"\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;if(e.code==='KeyR'&&!e.repeat){e.preventDefault();cycleMovementMode();}if(e.code==='KeyQ'&&!e.repeat){e.preventDefault();toggleLock();}});addEventListener('keyup',e=>keys[e.code]=false);",
'05C lock block and keyboard controls');

source=mustReplace(source,
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();touchSprint=true;sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>{touchSprint=false;sprint.style.transform='scale(1)'});jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();cycleMovementMode();sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>sprint.style.transform='scale(1)');const lockBtn=$('lock');lockBtn.addEventListener('pointerdown',e=>{e.preventDefault();toggleLock();lockBtn.style.transform='scale(.93)'});for(const ev of ['pointerup','pointercancel','pointerleave'])lockBtn.addEventListener(ev,()=>lockBtn.style.transform='scale(1)');jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
'05C mobile controls');

source=mustReplace(source,
"const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;",
"const sprinting=movementMode==='SPRINT'&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(movementMode==='WALK'?WALK_SPEED:movementMode==='RUN'?RUN_SPEED:SPRINT_SPEED)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?ACCEL:ACCEL*.42)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?BRAKE:BRAKE*.25)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=JUMP_V;grounded=false;}jumpQueued=false;verticalVel-=GRAVITY*dt;",
'accepted movement constants');

source=mustReplace(source,
"const speed=Math.hypot(velocity.x,velocity.z);if(speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}",
"const speed=Math.hypot(velocity.x,velocity.z);if(!lockOn&&speed>.18){const targetYaw=Math.atan2(velocity.x,velocity.z);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-TURN*dt));}updateLock(dt);",
'lock-on owns facing');

source=mustReplace(source,
"if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));",
"if(mixer)mixer.update(dt*(sprinting?1.08:1));let target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));if(lockOn){const enemyAim=targetRoot.position.clone().add(new THREE.Vector3(0,1.35,0));target.lerp(enemyAim,.26);}let desired=target.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch)*camDist,Math.sin(pitch)*camDist+1.0,Math.cos(yaw)*Math.cos(pitch)*camDist));",
'lock camera bias');

let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('Test 04 — Visual Fidelity','Test 05C — Lock-On Targeting').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05C — Lock-On Targeting').replace('Starting local production bundle…','Starting lock-on targeting proof…');
html=mustReplace(html,'<span>Render scale</span><b id="scale">—</b>','<span>Render scale</span><b id="scale">—</b><span>Lock</span><b id="lockState">FREE</b><span>Target range</span><b id="targetRange">—</b><span>Facing error</span><b id="facingError">—</b>','05C telemetry');
html=mustReplace(html,'<div id="zone">FOREST APPROACH</div>','<div id="zone">FOREST APPROACH</div><div id="proofSuccess">LOCK TEST — press Q / LOCK</div>','05C proof label');
html=html.replace('<button id="tuneBtn">TUNE</button>','<button id="tuneBtn">CHECK</button>');
html=html.replace('<div id="panel"><div class="title">Live variables</div><label><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>',
'<div id="panel"><div class="title">Test 05C checklist</div><div id="checklist"><div><b>PENDING</b><span>01 Acquire single target — Q / LOCK</span></div><div><b>PENDING</b><span>02 Maintain lock continuously for 1.0 s</span></div><div><b>PENDING</b><span>03 Face target within 5° while moving</span></div><div><b>PENDING</b><span>04 Release lock — Q / UNLOCK</span></div><div><b>PENDING</b><span>05 Reacquire same target</span></div></div><div class="contract"><b>LOCK-ON CONTRACT</b><span>One target · 20 m acquisition range · locked movement strafes while character faces target · camera biases toward target</span></div><label class="envHidden"><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label class="envHidden"><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label class="envHidden"><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label class="envHidden"><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>');
html=html.replace('<button id="jump" class="action">JUMP</button><button id="sprint" class="action">SPRINT</button>','<button id="jump" class="action">JUMP</button><button id="lock" class="action">LOCK</button><button id="sprint" class="action">RUN</button>');
html=html.replace('</style>',`\n.envHidden{display:none!important}#proofSuccess{position:absolute;left:50%;top:72px;transform:translate(-50%,-6px);padding:9px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(8,18,15,.84);backdrop-filter:blur(10px);font-size:10px;font-weight:850;letter-spacing:.04em;opacity:.78;transition:.16s ease;white-space:nowrap}#proofSuccess.show{transform:translate(-50%,0) scale(1.035);opacity:1;box-shadow:0 0 22px rgba(159,255,181,.22)}#checklist{display:grid;gap:6px;margin:4px 0 10px}#checklist>div{display:grid;grid-template-columns:54px 1fr;gap:6px;font-size:9px;line-height:1.28}#checklist b{font-size:7.5px;letter-spacing:.05em;color:#ffd98c}.contract{display:grid;gap:4px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);font-size:8.5px;line-height:1.3}.contract b{font-size:8px;color:#a8f0b5;letter-spacing:.06em}#lock{right:max(101px,calc(env(safe-area-inset-right) + 88px));bottom:max(108px,calc(env(safe-area-inset-bottom) + 96px));width:70px;height:70px;font-size:10px}@media(pointer:coarse),(max-width:900px){#proofSuccess{top:66px;max-width:72vw;overflow:hidden;text-overflow:ellipsis;font-size:9px;padding:7px 10px}}\n</style>`);

const modelUrl='https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res=await fetch(modelUrl);if(!res.ok)throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);await writeFile(path.join(assets,'Soldier.glb'),Buffer.from(await res.arrayBuffer()));
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test05c-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const sw=`const CACHE='raai-threejs-test05c-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test05c-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;await writeFile(path.join(out,'sw.js'),sw);
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({build_id:buildId,inherits:'Test 04 visual baseline + accepted Test 05A movement contract + accepted Test 05B single attack proof (attack omitted here for isolation)',base_blob:expectedBase,three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,focus:'single-target lock-on proof',movement_baseline:{walk_mps:2.5,run_mps:6.6,sprint_mps:11.88,accel:14,brake:10,turn:9,jump:9,gravity:24,camera:0.12},lock_on:{input:['Q','LOCK button'],targets:1,acquisition_range_m:20,maintain_proof_s:1,facing_tolerance_deg:5,locked_facing:true,strafe_while_locked:true,camera_target_bias:.26,attack:false,combo:false,dodge:false,block:false,parry:false,enemy_ai:false},proof_labels:['LOCK ACQUIRED','LOCK MAINTAINED','FACE CONFIRMED','LOCK RELEASED','LOCK REACQUIRED'],acceptance_checklist:{acquire:'PENDING',maintain:'PENDING',face:'PENDING',release:'PENDING',reacquire:'PENDING'},app_js_bytes:js.size,soldier_glb_bytes:glb.size,service_worker_cache:true,target:'safari16.4+',mobile_fps_target:60},null,2));
console.log(JSON.stringify({buildId,appBytes:js.size,glbBytes:glb.size,baseBlob:actualBase}));
