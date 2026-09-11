import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const baseRoot=path.resolve(root,'../threejs-test-04-src');
const out=path.resolve(root,'../threejs-test-05b');
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
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone'), attackStateEl=$('attackState'), targetHpEl=$('targetHp'), attackRangeEl=$('attackRange'), proofSuccessEl=$('proofSuccess');",
'05B HUD bindings');

const combatBlock=String.raw`

// ---- Test 05B: one attack -> one deterministic mechanical result ----
const WALK_SPEED=2.5,RUN_SPEED=6.6,SPRINT_SPEED=11.88,ACCEL=14,BRAKE=10,TURN=9,JUMP_V=9,GRAVITY=24;
let movementMode='WALK';
function cycleMovementMode(){movementMode=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';const b=document.getElementById('sprint');if(b)b.textContent=movementMode==='WALK'?'RUN':movementMode==='RUN'?'SPRINT':'WALK';}

let proofTimer=0;
function prove(label,detail=''){proofSuccessEl.textContent='✓ '+label+(detail?' · '+detail:'');proofSuccessEl.classList.add('show');clearTimeout(proofTimer);proofTimer=setTimeout(()=>proofSuccessEl.classList.remove('show'),1250);}

const dummyRoot=new THREE.Group();scene.add(dummyRoot);dummyRoot.position.set(5,groundHeight(5,53.5),53.5);
const dummyBaseMat=new THREE.MeshStandardMaterial({color:0x7e6651,roughness:.88}),dummyHitMat=new THREE.MeshStandardMaterial({color:0xd99b62,roughness:.72,emissive:0x5b2108,emissiveIntensity:.35});
const dummyBody=new THREE.Mesh(new THREE.CylinderGeometry(.42,.52,1.55,10),dummyBaseMat);dummyBody.position.y=.92;dummyBody.castShadow=dummyBody.receiveShadow=true;dummyRoot.add(dummyBody);
const dummyHead=new THREE.Mesh(new THREE.SphereGeometry(.34,12,8),dummyBaseMat);dummyHead.position.y=1.92;dummyHead.castShadow=true;dummyRoot.add(dummyHead);
const dummyRing=new THREE.Mesh(new THREE.TorusGeometry(.82,.04,6,28),new THREE.MeshBasicMaterial({color:0xffd777,transparent:true,opacity:.75,depthWrite:false}));dummyRing.rotation.x=Math.PI/2;dummyRing.position.y=.04;dummyRoot.add(dummyRing);
let dummyHP=100,dummyFlash=0,dummyReset=0;

const swordMetal=new THREE.MeshStandardMaterial({color:0xd6dcdd,roughness:.28,metalness:.72}),swordGrip=new THREE.MeshStandardMaterial({color:0x3b2920,roughness:.82});
const playerSword=new THREE.Group();const blade=new THREE.Mesh(new THREE.BoxGeometry(.075,.075,1.55),swordMetal),grip=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.34,7),swordGrip);blade.position.z=.82;grip.rotation.x=Math.PI/2;grip.position.z=.04;playerSword.add(blade,grip);playerSword.position.set(.43,1.25,.05);playerSword.rotation.set(-.18,-.72,.05);playerSword.traverse(o=>{if(o.isMesh)o.castShadow=true;});playerRoot.add(playerSword);

let attackTimer=0,attackElapsed=0,attackChecked=false;const ATTACK_DURATION=.44,ACTIVE_AT=.16,ATTACK_REACH=2.75,ATTACK_DAMAGE=25;
function requestAttack(){if(attackTimer>0||!grounded)return;attackTimer=ATTACK_DURATION;attackElapsed=0;attackChecked=false;attackStateEl.textContent='WINDUP';prove('ATTACK INPUT ACCEPTED','single attack');}
function checkAttackHit(){const dx=dummyRoot.position.x-playerRoot.position.x,dz=dummyRoot.position.z-playerRoot.position.z,dist=Math.hypot(dx,dz);const len=Math.max(.0001,dist),tx=dx/len,tz=dz/len,fx=Math.sin(playerRoot.rotation.y),fz=Math.cos(playerRoot.rotation.y),facing=fx*tx+fz*tz;const hit=dist<=ATTACK_REACH&&facing>=.42;if(hit){dummyHP=Math.max(0,dummyHP-ATTACK_DAMAGE);targetHpEl.textContent=dummyHP+'/100';dummyFlash=.18;prove('HIT CONFIRMED',ATTACK_DAMAGE+' DAMAGE · HP '+dummyHP+'/100');if(dummyHP<=0)dummyReset=1.2;}else{prove('MISS CONFIRMED','0 DAMAGE');}}
function updateAttack(dt){const dist=Math.hypot(dummyRoot.position.x-playerRoot.position.x,dummyRoot.position.z-playerRoot.position.z);attackRangeEl.textContent=dist.toFixed(2)+' m';dummyRing.material.color.set(dist<=ATTACK_REACH?0x9fffb5:0xffd777);if(dummyFlash>0){dummyFlash-=dt;dummyBody.material=dummyHead.material=dummyHitMat;}else dummyBody.material=dummyHead.material=dummyBaseMat;if(dummyReset>0){dummyReset-=dt;if(dummyReset<=0){dummyHP=100;targetHpEl.textContent='100/100';}}
if(attackTimer<=0){attackStateEl.textContent='READY';playerSword.rotation.x=THREE.MathUtils.lerp(playerSword.rotation.x,-.18,1-Math.exp(-18*dt));playerSword.rotation.y=THREE.MathUtils.lerp(playerSword.rotation.y,-.72,1-Math.exp(-18*dt));return;}attackTimer-=dt;attackElapsed+=dt;const p=Math.min(1,attackElapsed/ATTACK_DURATION);if(attackElapsed<ACTIVE_AT*.72)attackStateEl.textContent='WINDUP';else if(attackElapsed<ACTIVE_AT+.09)attackStateEl.textContent='ACTIVE';else attackStateEl.textContent='RECOVERY';const arc=Math.sin(Math.min(1,p)*Math.PI);playerSword.rotation.y=-.95+arc*1.85;playerSword.rotation.x=-.28+arc*.34;if(!attackChecked&&attackElapsed>=ACTIVE_AT){attackChecked=true;checkAttackHit();}}
`;

source=mustReplace(source,
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);",
"function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}"+combatBlock+"\n\nlet yaw=.08,pitch=.30,camDist=7.8,drag=false,lastX=0,lastY=0,touchSprint=false,jumpQueued=false,verticalVel=0,grounded=true;const keys={},touchMove=new THREE.Vector2(),velocity=new THREE.Vector3();addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;if(e.code==='KeyR'&&!e.repeat){e.preventDefault();cycleMovementMode();}if(e.code==='KeyF'&&!e.repeat){e.preventDefault();requestAttack();}});addEventListener('keyup',e=>keys[e.code]=false);",
'05B attack block and keyboard controls');

source=mustReplace(source,
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();touchSprint=true;sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>{touchSprint=false;sprint.style.transform='scale(1)'});jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
"sprint.addEventListener('pointerdown',e=>{e.preventDefault();cycleMovementMode();sprint.style.transform='scale(.94)'});for(const ev of ['pointerup','pointercancel','pointerleave'])sprint.addEventListener(ev,()=>sprint.style.transform='scale(1)');const attackBtn=$('attack');attackBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestAttack();attackBtn.style.transform='scale(.93)'});for(const ev of ['pointerup','pointercancel','pointerleave'])attackBtn.addEventListener(ev,()=>attackBtn.style.transform='scale(1)');jump.addEventListener('pointerdown',e=>{e.preventDefault();jumpQueued=true;jump.style.transform='scale(.93)'});",
'05B mobile controls');

source=mustReplace(source,
"const sprinting=(keys.ShiftLeft||touchSprint)&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}jumpQueued=false;verticalVel-=18.6*dt;",
"const sprinting=movementMode==='SPRINT'&&input.lengthSq()>.01;const wet=inWater(playerRoot.position.x,playerRoot.position.z)&&groundHeight(playerRoot.position.x,playerRoot.position.z)<-1.1;const maxSpeed=(movementMode==='WALK'?WALK_SPEED:movementMode==='RUN'?RUN_SPEED:SPRINT_SPEED)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?ACCEL:ACCEL*.42)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?BRAKE:BRAKE*.25)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=JUMP_V;grounded=false;}jumpQueued=false;verticalVel-=GRAVITY*dt;",
'accepted movement constants');

source=mustReplace(source,
"playerRoot.rotation.y+=d*(1-Math.exp(-14*dt));}",
"playerRoot.rotation.y+=d*(1-Math.exp(-TURN*dt));}",
'accepted turn response');

source=mustReplace(source,
"if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));",
"if(mixer)mixer.update(dt*(sprinting?1.08:1));updateAttack(dt);const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));",
'05B attack update');

let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('Test 04 — Visual Fidelity','Test 05B — Single Attack Proof').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05B — Single Attack Proof').replace('Starting local production bundle…','Starting single-attack proof…');
html=mustReplace(html,'<span>Render scale</span><b id="scale">—</b>','<span>Render scale</span><b id="scale">—</b><span>Attack</span><b id="attackState">READY</b><span>Target HP</span><b id="targetHp">100/100</b><span>Range</span><b id="attackRange">—</b>','05B telemetry');
html=mustReplace(html,'<div id="zone">FOREST APPROACH</div>','<div id="zone">FOREST APPROACH</div><div id="proofSuccess">ATTACK TEST — approach the dummy and press F / ATTACK</div>','05B proof label');
html=html.replace('<button id="tuneBtn">TUNE</button>','<button id="tuneBtn">CHECK</button>');
html=html.replace('<div id="panel"><div class="title">Live variables</div><label><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>',
'<div id="panel"><div class="title">Test 05B checklist</div><div id="checklist"><div><b>PENDING</b><span>01 Attack input accepted</span></div><div><b>PENDING</b><span>02 Windup → active → recovery state timing</span></div><div><b>PENDING</b><span>03 Forward hitbox alignment</span></div><div><b>PENDING</b><span>04 Hit confirms exactly 25 damage</span></div><div><b>PENDING</b><span>05 Miss confirms 0 damage</span></div><div><b>PENDING</b><span>06 Recovery returns to locomotion</span></div></div><div class="contract"><b>LOCKED MOVEMENT</b><span>Walk 2.5 · Run 6.6 · Sprint 11.88 · Accel 14 · Brake 10 · Turn 9</span></div><label class="envHidden"><span>Time</span><input id="tod" type="range" min="6" max="20" step="0.1" value="9.8"></label><label class="envHidden"><span>Atmosphere</span><input id="fog" type="range" min="0" max="1" step="0.01" value="0.34"></label><label class="envHidden"><span>Wind</span><input id="wind" type="range" min="0" max="1" step="0.01" value="0.48"></label><label class="envHidden"><span>Camera</span><input id="damp" type="range" min="0.05" max="0.22" step="0.005" value="0.12"></label><button id="shadowBtn">Dynamic shadows: ON</button></div>');
html=html.replace('<button id="jump" class="action">JUMP</button><button id="sprint" class="action">SPRINT</button>','<button id="jump" class="action">JUMP</button><button id="attack" class="action">ATTACK</button><button id="sprint" class="action">RUN</button>');
html=html.replace('</style>',`\n.envHidden{display:none!important}#proofSuccess{position:absolute;left:50%;top:72px;transform:translate(-50%,-6px);padding:9px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(8,18,15,.84);backdrop-filter:blur(10px);font-size:10px;font-weight:850;letter-spacing:.04em;opacity:.78;transition:.16s ease;white-space:nowrap}#proofSuccess.show{transform:translate(-50%,0) scale(1.035);opacity:1;box-shadow:0 0 22px rgba(159,255,181,.22)}#checklist{display:grid;gap:6px;margin:4px 0 10px}#checklist>div{display:grid;grid-template-columns:54px 1fr;gap:6px;font-size:9px;line-height:1.28}#checklist b{font-size:7.5px;letter-spacing:.05em;color:#ffd98c}.contract{display:grid;gap:4px;padding-top:8px;border-top:1px solid rgba(255,255,255,.14);font-size:8.5px;line-height:1.3}.contract b{font-size:8px;color:#a8f0b5;letter-spacing:.06em}#attack{right:max(101px,calc(env(safe-area-inset-right) + 88px));bottom:max(108px,calc(env(safe-area-inset-bottom) + 96px));width:70px;height:70px;font-size:10px}@media(pointer:coarse),(max-width:900px){#proofSuccess{top:66px;max-width:72vw;overflow:hidden;text-overflow:ellipsis;font-size:9px;padding:7px 10px}}\n</style>`);

const modelUrl='https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res=await fetch(modelUrl);if(!res.ok)throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);await writeFile(path.join(assets,'Soldier.glb'),Buffer.from(await res.arrayBuffer()));
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test05b-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const sw=`const CACHE='raai-threejs-test05b-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test05b-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;await writeFile(path.join(out,'sw.js'),sw);
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));
await writeFile(path.join(out,'build-info.json'),JSON.stringify({build_id:buildId,inherits:'Test 04 visual baseline + accepted Test 05A movement contract',base_blob:expectedBase,three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,focus:'single attack + mechanical hit proof',movement_baseline:{walk_mps:2.5,run_mps:6.6,sprint_mps:11.88,accel:14,brake:10,turn:9,jump:9,gravity:24,camera:0.12},attack:{input:['F','ATTACK button'],duration_s:.44,active_at_s:.16,reach_m:2.75,damage:25,target_hp:100,required_facing_dot:.42,combo:false,dodge:false,block:false,parry:false,enemy_ai:false},proof_labels:['ATTACK INPUT ACCEPTED','HIT CONFIRMED','MISS CONFIRMED'],acceptance_checklist:{attack_input:'PENDING',state_timing:'PENDING',forward_hitbox_alignment:'PENDING',hit_damage_25:'PENDING',miss_zero_damage:'PENDING',recovery_to_locomotion:'PENDING'},app_js_bytes:js.size,soldier_glb_bytes:glb.size,service_worker_cache:true,target:'safari16.4+',mobile_fps_target:60},null,2));
console.log(JSON.stringify({buildId,appBytes:js.size,glbBytes:glb.size,baseBlob:actualBase}));
