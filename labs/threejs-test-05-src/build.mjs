import { build } from 'esbuild';
import { mkdir, writeFile, stat, readFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const root=process.cwd();
const baseRoot=path.resolve(root,'../threejs-test-04-src');
const out=path.resolve(root,'../threejs-test-05');
const assets=path.join(out,'assets');
await mkdir(assets,{recursive:true});

function gitBlobSha(text){const b=Buffer.from(text);return crypto.createHash('sha1').update(Buffer.concat([Buffer.from(`blob ${b.length}\0`),b])).digest('hex');}
function mustReplace(text,find,repl,label){const i=text.indexOf(find);if(i<0)throw new Error(`Patch anchor missing: ${label}`);if(text.indexOf(find,i+find.length)>=0)throw new Error(`Patch anchor not unique: ${label}`);return text.slice(0,i)+repl+text.slice(i+find.length);}

let source=await readFile(path.join(baseRoot,'src/main.js'),'utf8');
const expectedBase='8ec3761c2cf4a507a072d79307220c0b315a8261';
const actualBase=gitBlobSha(source);
if(actualBase!==expectedBase)throw new Error(`Accepted Test 04 source changed (${actualBase}); refusing unreviewed inheritance.`);

source=mustReplace(source,
"import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';",
"import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';\nimport { clone as cloneSkinned } from 'three/addons/utils/SkeletonUtils.js';",
'import combat clone utility');

source=mustReplace(source,
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone');",
"const boot=$('boot'), errorBox=$('error'), fpsEl=$('fps'), callsEl=$('calls'), trisEl=$('tris'), charEl=$('char'), scaleEl=$('scale'), zoneEl=$('zone'), combatStateEl=$('combatState'), enemyHpEl=$('enemyHp'), playerHpEl=$('playerHp'), playerBar=$('playerBar'), enemyBar=$('enemyBar');",
'combat HUD bindings');

const combatBlock=String.raw`

// ---- Test 05: combat feel + reactive world ----
const enemyRoot=new THREE.Group();scene.add(enemyRoot);const enemySpawn=new THREE.Vector3(5,0,46);enemySpawn.y=groundHeight(enemySpawn.x,enemySpawn.z);enemyRoot.position.copy(enemySpawn);
let enemyModel=null,enemyMixer=null,enemyActions={},enemyActive=null,enemyState='IDLE',enemyStateTime=0,enemyCooldown=.7,enemyStrikeDone=false,enemyAlive=true,enemyHP=100,playerHP=100;
let lockOn=false,blocking=false,parryWindow=0,dodgeTimer=0,invuln=0,combatAttackTimer=0,combatAttackElapsed=0,comboIndex=0,comboQueued=false,attackHitDone=false,hitStop=0,cameraImpulse=0,enemyHitReact=0,enemyRespawn=0;
const enemyKnock=new THREE.Vector3();
const combatColors={hit:0xffc45c,parry:0x75e5ff,enemy:0xff594f,dust:0xd7d2ba,lock:0xffdf78};

function buildEnemyFallback(){const g=new THREE.Group(),armor=new THREE.MeshStandardMaterial({color:0x622b2a,roughness:.66,metalness:.18}),dark=new THREE.MeshStandardMaterial({color:0x241d1d,roughness:.9}),skin=new THREE.MeshStandardMaterial({color:0xb98568,roughness:.8});const body=new THREE.Mesh(new THREE.CapsuleGeometry(.38,.92,4,8),armor);body.position.y=1.25;g.add(body);const head=new THREE.Mesh(new THREE.SphereGeometry(.28,10,7),skin);head.position.y=2.02;g.add(head);for(const sx of [-1,1]){const shoulder=new THREE.Mesh(new THREE.DodecahedronGeometry(.22,0),armor);shoulder.position.set(.46*sx,1.55,0);g.add(shoulder);const leg=new THREE.Mesh(new THREE.CapsuleGeometry(.10,.48,3,6),dark);leg.position.set(.17*sx,.52,0);g.add(leg);}g.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});enemyRoot.add(g);enemyModel=g;}
buildEnemyFallback();

const lockMat=new THREE.MeshBasicMaterial({color:combatColors.lock,transparent:true,opacity:.88,depthWrite:false}),teleMat=new THREE.MeshBasicMaterial({color:combatColors.enemy,transparent:true,opacity:.74,depthWrite:false});
const lockRing=new THREE.Mesh(new THREE.TorusGeometry(1.0,.055,6,28),lockMat);lockRing.rotation.x=Math.PI/2;lockRing.position.y=.08;lockRing.visible=false;enemyRoot.add(lockRing);
const telegraphRing=new THREE.Mesh(new THREE.TorusGeometry(1.25,.075,6,30),teleMat);telegraphRing.rotation.x=Math.PI/2;telegraphRing.position.y=.09;telegraphRing.visible=false;enemyRoot.add(telegraphRing);

const metal=new THREE.MeshStandardMaterial({color:0xc8d0cf,roughness:.30,metalness:.72}),handleMat=new THREE.MeshStandardMaterial({color:0x3c2a20,roughness:.8});
function makeSword(){const g=new THREE.Group(),blade=new THREE.Mesh(new THREE.BoxGeometry(.075,.075,1.65),metal),handle=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.34,7),handleMat);blade.position.z=.92;handle.rotation.x=Math.PI/2;handle.position.z=.10;g.add(blade,handle);g.traverse(o=>{if(o.isMesh)o.castShadow=true;});return g;}
const playerSword=makeSword();playerSword.position.set(.42,1.30,.06);playerSword.rotation.y=-.55;playerRoot.add(playerSword);
const enemySword=makeSword();enemySword.position.set(.46,1.34,.05);enemyRoot.add(enemySword);

const particleCount=96,pp=new Float32Array(particleCount*3),pc=new Float32Array(particleCount*3),particleVel=Array.from({length:particleCount},()=>new THREE.Vector3()),particleLife=new Float32Array(particleCount);for(let i=0;i<particleCount;i++){pp[i*3+1]=-100;}
const particleGeo=new THREE.BufferGeometry();particleGeo.setAttribute('position',new THREE.BufferAttribute(pp,3).setUsage(THREE.DynamicDrawUsage));particleGeo.setAttribute('color',new THREE.BufferAttribute(pc,3).setUsage(THREE.DynamicDrawUsage));const particleMat=new THREE.PointsMaterial({size:.12,vertexColors:true,transparent:true,opacity:.94,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true});const particles=new THREE.Points(particleGeo,particleMat);scene.add(particles);let particleCursor=0;
function burst(pos,color,count=14,power=3){const c=new THREE.Color(color);for(let k=0;k<count;k++){const i=particleCursor++%particleCount;pp[i*3]=pos.x+(Math.random()-.5)*.25;pp[i*3+1]=pos.y+.8+Math.random()*.8;pp[i*3+2]=pos.z+(Math.random()-.5)*.25;pc[i*3]=c.r;pc[i*3+1]=c.g;pc[i*3+2]=c.b;const a=Math.random()*Math.PI*2,s=power*(.45+Math.random()*.75);particleVel[i].set(Math.cos(a)*s,1.5+Math.random()*power,Math.sin(a)*s);particleLife[i]=.28+Math.random()*.32;}particleGeo.attributes.position.needsUpdate=true;particleGeo.attributes.color.needsUpdate=true;}
function updateParticles(dt){for(let i=0;i<particleCount;i++){if(particleLife[i]<=0)continue;particleLife[i]-=dt;const v=particleVel[i];v.y-=10*dt;pp[i*3]+=v.x*dt;pp[i*3+1]+=v.y*dt;pp[i*3+2]+=v.z*dt;v.multiplyScalar(Math.exp(-3.5*dt));if(particleLife[i]<=0)pp[i*3+1]=-100;}particleGeo.attributes.position.needsUpdate=true;}

const wavePool=[];for(let i=0;i<4;i++){const mat=new THREE.MeshBasicMaterial({color:combatColors.hit,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}),m=new THREE.Mesh(new THREE.RingGeometry(.75,.88,34),mat);m.rotation.x=-Math.PI/2;m.visible=false;scene.add(m);wavePool.push({m,life:0,max:1});}
function shockwave(pos,color,max=4){const w=wavePool.find(x=>x.life<=0)||wavePool[0];w.life=.34;w.max=max;w.m.visible=true;w.m.position.set(pos.x,groundHeight(pos.x,pos.z)+.09,pos.z);w.m.scale.setScalar(.25);w.m.material.color.set(color);w.m.material.opacity=.78;reactEnvironment(pos,max);}
function updateWaves(dt){for(const w of wavePool){if(w.life<=0)continue;w.life-=dt;const p=1-Math.max(0,w.life)/.34;w.m.scale.setScalar(.25+p*w.max);w.m.material.opacity=Math.max(0,.78*(1-p));if(w.life<=0)w.m.visible=false;}}

const reactCount=12,reactGeo=new THREE.DodecahedronGeometry(.38,0),reactMat=new THREE.MeshStandardMaterial({color:0x877965,roughness:.92}),reactMesh=new THREE.InstancedMesh(reactGeo,reactMat,reactCount);reactMesh.castShadow=reactMesh.receiveShadow=true;scene.add(reactMesh);const react=[];for(let i=0;i<reactCount;i++){const a=i/reactCount*Math.PI*2,r=4.2+(i%3)*1.15,x=enemySpawn.x+Math.cos(a)*r,z=enemySpawn.z+Math.sin(a)*r,y=heightAt(x,z)+.32;react.push({p:new THREE.Vector3(x,y,z),home:new THREE.Vector3(x,y,z),v:new THREE.Vector3(),spin:new THREE.Vector3(),rot:new THREE.Euler(),sleep:0});}
function updateReact(dt){for(let i=0;i<react.length;i++){const o=react[i];if(o.v.lengthSq()>.002){o.v.y-=12*dt;o.p.addScaledVector(o.v,dt);const gy=heightAt(o.p.x,o.p.z)+.32;if(o.p.y<gy){o.p.y=gy;o.v.y=Math.abs(o.v.y)*.18;}o.v.x*=Math.exp(-4*dt);o.v.z*=Math.exp(-4*dt);o.rot.x+=o.spin.x*dt;o.rot.y+=o.spin.y*dt;o.rot.z+=o.spin.z*dt;}else{o.sleep+=dt;if(o.sleep>2.8){o.p.lerp(o.home,1-Math.exp(-2.4*dt));o.rot.x*=Math.exp(-3*dt);o.rot.z*=Math.exp(-3*dt);}}td.position.copy(o.p);td.rotation.copy(o.rot);td.scale.set(1.3,.72,1.0);td.updateMatrix();reactMesh.setMatrixAt(i,td.matrix);}reactMesh.instanceMatrix.needsUpdate=true;}
function reactEnvironment(pos,strength){for(const o of react){const d=new THREE.Vector3(o.p.x-pos.x,0,o.p.z-pos.z),dist=d.length();if(dist<strength+2.0){d.normalize();const f=(1-dist/(strength+2))*7;o.v.addScaledVector(d,f);o.v.y+=2.0+f*.3;o.spin.set((Math.random()-.5)*5,(Math.random()-.5)*6,(Math.random()-.5)*5);o.sleep=0;}}}

function setEnemyAction(name,fade=.14){if(!enemyActions[name]||enemyActive===enemyActions[name])return;const next=enemyActions[name];next.reset().play();if(enemyActive)enemyActive.crossFadeTo(next,fade,true);enemyActive=next;}
function upgradeEnemyFromGLB(g){if(enemyModel)enemyRoot.remove(enemyModel);enemyModel=cloneSkinned(g.scene);enemyModel.scale.setScalar(.98);enemyModel.rotation.y=Math.PI;enemyModel.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;if(o.material){o.material=o.material.clone();if(o.material.color)o.material.color.lerp(new THREE.Color(0x6a2525),.30);}}});enemyRoot.add(enemyModel);enemyMixer=new THREE.AnimationMixer(enemyModel);enemyActions={};for(const clip of g.animations)enemyActions[clip.name]=enemyMixer.clipAction(clip);setEnemyAction(enemyActions.Idle?'Idle':Object.keys(enemyActions)[0],0);}

function setEnemyState(s){enemyState=s;enemyStateTime=0;combatStateEl.textContent=s;}
function faceEnemy(dt){if(!enemyAlive)return;const dx=enemyRoot.position.x-playerRoot.position.x,dz=enemyRoot.position.z-playerRoot.position.z,targetYaw=Math.atan2(dx,dz);let d=((targetYaw-playerRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;playerRoot.rotation.y+=d*(1-Math.exp(-20*dt));}
function combatCameraTarget(){const p=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));if(lockOn&&enemyAlive&&playerRoot.position.distanceTo(enemyRoot.position)<20){const e=enemyRoot.position.clone().add(new THREE.Vector3(0,1.35,0));return p.lerp(e,.22);}return p;}
function toggleLock(){if(!enemyAlive){lockOn=false;lockRing.visible=false;return;}lockOn=!lockOn;lockRing.visible=lockOn;combatStateEl.textContent=lockOn?'LOCKED':'READY';}
function startBlock(){if(dodgeTimer>0||combatAttackTimer>0)return;blocking=true;parryWindow=.18;combatStateEl.textContent='BLOCK';}
function endBlock(){blocking=false;parryWindow=0;if(enemyState!=='STUN')combatStateEl.textContent=lockOn?'LOCKED':'READY';}
function requestDodge(){if(dodgeTimer>0||combatAttackTimer>0||blocking)return;dodgeTimer=.34;invuln=.30;let d=new THREE.Vector3(velocity.x,0,velocity.z);if(d.lengthSq()<.2){if(lockOn&&enemyAlive)d.set(playerRoot.position.x-enemyRoot.position.x,0,playerRoot.position.z-enemyRoot.position.z);else d.set(Math.sin(playerRoot.rotation.y),0,Math.cos(playerRoot.rotation.y));}d.normalize();velocity.x=d.x*11.5;velocity.z=d.z*11.5;burst(playerRoot.position,combatColors.dust,10,2.0);combatStateEl.textContent='DODGE';}
const attackDur=[.34,.39,.51],attackHit=[.13,.15,.20],attackDamage=[16,21,34],attackRange=[2.55,2.75,3.15],attackKnock=[2.3,3.0,5.2];
function startAttack(i){comboIndex=i;combatAttackTimer=attackDur[i];combatAttackElapsed=0;comboQueued=false;attackHitDone=false;combatStateEl.textContent='COMBO '+(i+1);if(characterMode==='GLB')setAction(actions.Idle?'Idle':Object.keys(actions)[0],.08);}
function requestAttack(){if(blocking||dodgeTimer>0)return;if(!lockOn&&enemyAlive&&playerRoot.position.distanceTo(enemyRoot.position)<10)toggleLock();if(combatAttackTimer<=0)startAttack(0);else if(combatAttackElapsed>.09)comboQueued=true;}
function performPlayerHit(){if(!enemyAlive)return;const to=new THREE.Vector3(enemyRoot.position.x-playerRoot.position.x,0,enemyRoot.position.z-playerRoot.position.z),dist=to.length();if(dist>attackRange[comboIndex]){burst(playerRoot.position.clone().add(new THREE.Vector3(0,0,.4)),combatColors.dust,5,1.1);return;}to.normalize();const f=new THREE.Vector3(Math.sin(playerRoot.rotation.y),0,Math.cos(playerRoot.rotation.y));if(f.dot(to)<.25)return;enemyHP=Math.max(0,enemyHP-attackDamage[comboIndex]);enemyHpEl.textContent=enemyHP;enemyBar.style.width=enemyHP+'%';enemyHitReact=.24;const away=new THREE.Vector3(enemyRoot.position.x-playerRoot.position.x,0,enemyRoot.position.z-playerRoot.position.z).normalize();enemyKnock.addScaledVector(away,attackKnock[comboIndex]);hitStop=.035+comboIndex*.018;cameraImpulse=.12+comboIndex*.08;burst(enemyRoot.position,combatColors.hit,14+comboIndex*5,3+comboIndex*1.1);shockwave(enemyRoot.position,combatColors.hit,comboIndex===2?4.8:2.1+comboIndex*.6);setEnemyState('HIT');if(enemyHP<=0){enemyAlive=false;enemyRespawn=3.4;setEnemyState('DEFEATED');lockOn=false;lockRing.visible=false;enemyKnock.addScaledVector(away,4);}}
function enemyStrike(){if(!enemyAlive)return;const dist=playerRoot.position.distanceTo(enemyRoot.position);if(dist>3.0||invuln>0){burst(playerRoot.position,combatColors.dust,6,1.4);return;}if(blocking){if(parryWindow>0){setEnemyState('STUN');hitStop=.065;cameraImpulse=.18;burst(enemyRoot.position,combatColors.parry,22,4.0);shockwave(enemyRoot.position,combatColors.parry,3.1);enemyKnock.add(new THREE.Vector3(enemyRoot.position.x-playerRoot.position.x,0,enemyRoot.position.z-playerRoot.position.z).normalize().multiplyScalar(2.2));combatStateEl.textContent='PARRY';return;}playerHP=Math.max(0,playerHP-4);cameraImpulse=.08;burst(playerRoot.position,combatColors.parry,7,1.7);}else{playerHP=Math.max(0,playerHP-20);cameraImpulse=.24;hitStop=.045;const away=new THREE.Vector3(playerRoot.position.x-enemyRoot.position.x,0,playerRoot.position.z-enemyRoot.position.z).normalize();velocity.addScaledVector(away,7.5);verticalVel=Math.max(verticalVel,1.8);burst(playerRoot.position,combatColors.enemy,18,3.5);}playerHpEl.textContent=playerHP;playerBar.style.width=playerHP+'%';if(playerHP<=0){playerHP=100;playerHpEl.textContent='100';playerBar.style.width='100%';playerRoot.position.set(5,groundHeight(5,60),60);velocity.set(0,0,0);combatStateEl.textContent='RECOVERED';}}

function updateCombat(dt,time){parryWindow=Math.max(0,parryWindow-dt);invuln=Math.max(0,invuln-dt);dodgeTimer=Math.max(0,dodgeTimer-dt);enemyHitReact=Math.max(0,enemyHitReact-dt);updateParticles(dt);updateWaves(dt);updateReact(dt);lockRing.visible=lockOn&&enemyAlive;lockRing.rotation.z=time*.8;lockRing.scale.setScalar(1+.05*Math.sin(time*5));
if(combatAttackTimer>0){combatAttackElapsed+=dt;combatAttackTimer-=dt;const p=Math.min(1,combatAttackElapsed/attackDur[comboIndex]);playerSword.visible=true;playerSword.rotation.y=-1.25+p*2.6;playerSword.rotation.z=-.25+Math.sin(p*Math.PI)*.65;if(!attackHitDone&&combatAttackElapsed>=attackHit[comboIndex]){attackHitDone=true;performPlayerHit();}if(combatAttackTimer<=0){if(comboQueued&&comboIndex<2)startAttack(comboIndex+1);else{combatAttackTimer=0;comboIndex=0;playerSword.rotation.y=-.55;playerSword.rotation.z=0;combatStateEl.textContent=lockOn?'LOCKED':'READY';}}}else{playerSword.rotation.y=THREE.MathUtils.lerp(playerSword.rotation.y,-.55,1-Math.exp(-12*dt));playerSword.rotation.z*=Math.exp(-12*dt);}
if(!enemyAlive){telegraphRing.visible=false;enemyRespawn-=dt;enemyRoot.rotation.z=THREE.MathUtils.lerp(enemyRoot.rotation.z,1.35,1-Math.exp(-5*dt));enemyRoot.position.addScaledVector(enemyKnock,dt);enemyKnock.multiplyScalar(Math.exp(-4*dt));if(enemyRespawn<=0){enemyHP=100;enemyHpEl.textContent='100';enemyBar.style.width='100%';enemyRoot.position.copy(enemySpawn);enemyRoot.rotation.set(0,0,0);enemyKnock.set(0,0,0);enemyAlive=true;enemyCooldown=1;setEnemyState('IDLE');}return;}
const toP=new THREE.Vector3(playerRoot.position.x-enemyRoot.position.x,0,playerRoot.position.z-enemyRoot.position.z),dist=toP.length();if(dist>0.01){const ty=Math.atan2(toP.x,toP.z);let d=((ty-enemyRoot.rotation.y+Math.PI)%(Math.PI*2))-Math.PI;enemyRoot.rotation.y+=d*(1-Math.exp(-11*dt));}enemyCooldown=Math.max(0,enemyCooldown-dt);enemyStateTime+=dt;enemyRoot.position.addScaledVector(enemyKnock,dt);enemyKnock.multiplyScalar(Math.exp(-6*dt));enemyRoot.position.y=groundHeight(enemyRoot.position.x,enemyRoot.position.z);enemyRoot.rotation.z=(enemyHitReact>0?Math.sin(enemyHitReact*35)*.16:enemyRoot.rotation.z*Math.exp(-10*dt));
if(enemyState==='HIT'){telegraphRing.visible=false;if(enemyStateTime>.28){setEnemyState('CHASE');enemyCooldown=.55;}}else if(enemyState==='STUN'){telegraphRing.visible=true;telegraphRing.material.color.set(combatColors.parry);telegraphRing.scale.setScalar(1.0+.35*Math.sin(time*12));if(enemyStateTime>1.05){telegraphRing.material.color.set(combatColors.enemy);setEnemyState('CHASE');enemyCooldown=.9;}}else if(enemyState==='WINDUP'){telegraphRing.visible=true;telegraphRing.scale.setScalar(.7+enemyStateTime*1.25);telegraphRing.material.opacity=.45+.35*Math.sin(time*18);enemySword.rotation.y=-.7-enemyStateTime*1.7;if(enemyStateTime>.64){setEnemyState('STRIKE');enemyStrikeDone=false;}}else if(enemyState==='STRIKE'){telegraphRing.visible=false;enemySword.rotation.y=1.5;if(!enemyStrikeDone&&enemyStateTime>.055){enemyStrikeDone=true;enemyStrike();}if(enemyStateTime>.22)setEnemyState('RECOVER');}else if(enemyState==='RECOVER'){enemySword.rotation.y=THREE.MathUtils.lerp(enemySword.rotation.y,-.25,1-Math.exp(-8*dt));if(enemyStateTime>.62){setEnemyState('CHASE');enemyCooldown=.72;}}else{telegraphRing.visible=false;if(dist<12){setEnemyAction(enemyActions.Run?'Run':(enemyActions.Walk?'Walk':Object.keys(enemyActions)[0]));if(dist>3.8){toP.normalize();enemyRoot.position.addScaledVector(toP,2.25*dt);}else{setEnemyAction(enemyActions.Idle?'Idle':Object.keys(enemyActions)[0]);if(enemyCooldown<=0)setEnemyState('WINDUP');}}else setEnemyAction(enemyActions.Idle?'Idle':Object.keys(enemyActions)[0]);}
if(enemyMixer)enemyMixer.update(dt);}

const attackBtn=$('attack'),dodgeBtn=$('dodge'),blockBtn=$('block'),lockBtn=$('lock');attackBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestAttack();attackBtn.style.transform='scale(.93)'});attackBtn.addEventListener('pointerup',()=>attackBtn.style.transform='scale(1)');dodgeBtn.addEventListener('pointerdown',e=>{e.preventDefault();requestDodge();dodgeBtn.style.transform='scale(.93)'});dodgeBtn.addEventListener('pointerup',()=>dodgeBtn.style.transform='scale(1)');blockBtn.addEventListener('pointerdown',e=>{e.preventDefault();startBlock();blockBtn.style.transform='scale(.93)'});for(const ev of ['pointerup','pointercancel','pointerleave'])blockBtn.addEventListener(ev,()=>{endBlock();blockBtn.style.transform='scale(1)'});lockBtn.addEventListener('pointerdown',e=>{e.preventDefault();toggleLock();lockBtn.style.transform='scale(.93)'});lockBtn.addEventListener('pointerup',()=>lockBtn.style.transform='scale(1)');
// ---- end combat block ----
`;

const actionAnchor="function setAction(name,fade=.16){if(!actions[name]||activeAction===actions[name])return;const next=actions[name];next.reset().play();if(activeAction)activeAction.crossFadeTo(next,fade,true);activeAction=next;}";
source=mustReplace(source,actionAnchor,actionAnchor+combatBlock,'combat system injection');

source=mustReplace(source,
"setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);},undefined,err=>",
"setAction(actions.Idle?'Idle':Object.keys(actions)[0],0);upgradeEnemyFromGLB(g);},undefined,err=>",
'clone GLB enemy');

source=mustReplace(source,
"addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;});addEventListener('keyup',e=>keys[e.code]=false);",
"addEventListener('keydown',e=>{keys[e.code]=true;if(e.code==='Space')jumpQueued=true;if(e.code==='KeyF')requestAttack();if(e.code==='KeyQ')toggleLock();if(e.code==='KeyE')requestDodge();if(e.code==='KeyR'&&!blocking)startBlock();});addEventListener('keyup',e=>{keys[e.code]=false;if(e.code==='KeyR')endBlock();});",
'keyboard combat controls');

source=mustReplace(source,
"if(e.pointerType==='touch'&&e.clientX>innerWidth*.68&&e.clientY>innerHeight*.54)return;",
"if(e.pointerType==='touch'&&e.clientX>innerWidth*.55&&e.clientY>innerHeight*.43)return;",
'mobile camera exclusion');

source=mustReplace(source,
"const maxSpeed=(sprinting?8.7:4.8)*(wet?.58:1);if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}if(jumpQueued&&grounded){verticalVel=7.7;grounded=false;}",
"const maxSpeed=(combatAttackTimer>0?2.0:(blocking?2.35:(sprinting?8.7:4.8)))*(wet?.58:1);if(dodgeTimer<=0){if(input.lengthSq()>0){input.normalize();const tv=input.multiplyScalar(maxSpeed),blend=1-Math.exp(-(grounded?12:5)*dt);velocity.x=THREE.MathUtils.lerp(velocity.x,tv.x,blend);velocity.z=THREE.MathUtils.lerp(velocity.z,tv.z,blend);}else{const d=Math.exp(-(grounded?10:2.5)*dt);velocity.x*=d;velocity.z*=d;}}else{velocity.x*=Math.exp(-1.8*dt);velocity.z*=Math.exp(-1.8*dt);}if(jumpQueued&&grounded&&combatAttackTimer<=0&&!blocking&&dodgeTimer<=0){verticalVel=7.7;grounded=false;}",
'combat movement arbitration');

source=mustReplace(source,
"if(characterMode==='GLB'&&grounded){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}if(mixer)mixer.update(dt*(sprinting?1.08:1));const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));",
"if(lockOn&&enemyAlive)faceEnemy(dt);if(characterMode==='GLB'&&grounded&&combatAttackTimer<=0&&dodgeTimer<=0&&!blocking){if(speed<.22)setAction(actions.Idle?'Idle':Object.keys(actions)[0]);else if(speed<6)setAction(actions.Walk?'Walk':(actions.Run?'Run':Object.keys(actions)[0]));else setAction(actions.Run?'Run':Object.keys(actions)[0]);}if(mixer)mixer.update(dt*(sprinting?1.08:1));updateCombat(dt,time);const target=combatCameraTarget();",
'combat animation and camera target');

source=mustReplace(source,
"camera.position.lerp(desired,ck);camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:53,1-Math.exp(-5*dt));",
"camera.position.lerp(desired,ck);if(cameraImpulse>0){camera.position.x+=(Math.random()-.5)*cameraImpulse;camera.position.y+=(Math.random()-.5)*cameraImpulse*.7;camera.position.z+=(Math.random()-.5)*cameraImpulse;cameraImpulse=Math.max(0,cameraImpulse-dt*1.9);}camera.lookAt(target);camera.fov=THREE.MathUtils.lerp(camera.fov,sprinting?60:(lockOn?56:53),1-Math.exp(-5*dt));",
'camera impulse');

source=mustReplace(source,
"function animate(){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta()),time=clock.elapsedTime;updateEnvironment();",
"function animate(){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta()),time=clock.elapsedTime;updateEnvironment();if(hitStop>0){hitStop=Math.max(0,hitStop-dt);renderer.render(scene,camera);return;}",
'hitstop');

source=mustReplace(source,
"callsEl.textContent=renderer.info.render.calls;trisEl.textContent=renderer.info.render.triangles.toLocaleString();}",
"callsEl.textContent=renderer.info.render.calls;trisEl.textContent=renderer.info.render.triangles.toLocaleString();enemyHpEl.textContent=enemyHP;playerHpEl.textContent=playerHP;}",
'combat telemetry');

let html=await readFile(path.join(baseRoot,'index.template.html'),'utf8');
html=html.replaceAll('Test 04 — Visual Fidelity','Test 05 — Combat Feel + Reactive World').replaceAll('RAAI Proof 04 — Visual Fidelity','RAAI Proof 05 — Combat + Reactive World').replace('Starting local production bundle…','Starting combat production bundle…');
html=mustReplace(html,
'<span>Render scale</span><b id="scale">—</b>',
'<span>Render scale</span><b id="scale">—</b><span>Combat</span><b id="combatState">READY</b>',
'combat stats');
html=mustReplace(html,
'<div id="zone">FOREST APPROACH</div>',
'<div id="zone">FOREST APPROACH</div><div id="combatHud"><div class="combatLine"><span>YOU</span><div class="bar"><i id="playerBar"></i></div><b id="playerHp">100</b></div><div class="combatLine"><span>RIVAL</span><div class="bar enemy"><i id="enemyBar"></i></div><b id="enemyHp">100</b></div></div>',
'combat HUD');
html=mustReplace(html,
'<div id="mobile"><div id="stick"><div id="knob"></div></div><button id="jump" class="action">JUMP</button><button id="sprint" class="action">SPRINT</button></div>',
'<div id="mobile"><div id="stick"><div id="knob"></div></div><button id="attack" class="action primary">ATTACK</button><button id="dodge" class="action">DODGE</button><button id="block" class="action">BLOCK</button><button id="lock" class="action small">LOCK</button><button id="jump" class="action small">JUMP</button><button id="sprint" class="action small">SPRINT</button></div>',
'mobile combat controls');
const combatCss=`\n#combatHud{position:absolute;left:50%;top:45px;transform:translateX(-50%);width:210px;padding:7px 9px;border-radius:11px;background:rgba(8,13,16,.30);backdrop-filter:blur(8px);font:800 8px/1 system-ui;letter-spacing:.05em}.combatLine{display:grid;grid-template-columns:34px 1fr 28px;align-items:center;gap:6px;margin:4px 0}.combatLine b{text-align:right;font:800 8px ui-monospace,monospace}.bar{height:5px;border-radius:999px;background:rgba(255,255,255,.16);overflow:hidden}.bar i{display:block;width:100%;height:100%;background:#b9e5c2;transition:width .12s}.bar.enemy i{background:#f08772}.primary{font-size:11px!important}#attack{right:max(18px,env(safe-area-inset-right));bottom:max(20px,calc(env(safe-area-inset-bottom) + 10px));width:82px;height:82px}#dodge{right:max(106px,calc(env(safe-area-inset-right) + 90px));bottom:max(28px,calc(env(safe-area-inset-bottom) + 18px));width:64px;height:64px;font-size:9px}#block{right:max(176px,calc(env(safe-area-inset-right) + 160px));bottom:max(28px,calc(env(safe-area-inset-bottom) + 18px));width:60px;height:60px;font-size:9px}#lock{right:max(112px,calc(env(safe-area-inset-right) + 96px));bottom:max(101px,calc(env(safe-area-inset-bottom) + 91px));width:54px;height:54px;font-size:8px}#jump{right:max(22px,env(safe-area-inset-right));bottom:max(111px,calc(env(safe-area-inset-bottom) + 101px));width:56px;height:56px;font-size:8px}#sprint{right:max(174px,calc(env(safe-area-inset-right) + 158px));bottom:max(96px,calc(env(safe-area-inset-bottom) + 86px));width:56px;height:56px;font-size:8px}@media(pointer:coarse),(max-width:900px){#combatHud{top:41px;width:180px;padding:5px 7px}.combatLine{grid-template-columns:30px 1fr 24px;gap:5px;margin:3px 0}}\n`;
html=html.replace('</style>',combatCss+'</style>');

const modelUrl='https://raw.githubusercontent.com/mrdoob/three.js/r186/examples/models/gltf/Soldier.glb';
const res=await fetch(modelUrl);if(!res.ok)throw new Error(`Failed to fetch pinned Soldier.glb: ${res.status}`);await writeFile(path.join(assets,'Soldier.glb'),Buffer.from(await res.arrayBuffer()));
const buildId=new Date().toISOString().replace(/\D/g,'').slice(0,14);html=html.replaceAll('__BUILD_ID__',buildId);await writeFile(path.join(out,'index.html'),html);

await build({stdin:{contents:source,resolveDir:root,sourcefile:'test05-main.js',loader:'js'},bundle:true,minify:true,format:'esm',target:['safari16.4'],outfile:path.join(out,'app.js'),legalComments:'none',treeShaking:true});
const sw=`const CACHE='raai-threejs-test05-${buildId}';\nconst CORE=['./','./index.html','./app.js?v=${buildId}','./assets/Soldier.glb'];\nself.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));\nself.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('raai-threejs-test05-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));\nself.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match('./index.html'))));});\n`;await writeFile(path.join(out,'sw.js'),sw);
const js=await stat(path.join(out,'app.js')),glb=await stat(path.join(assets,'Soldier.glb'));await writeFile(path.join(out,'build-info.json'),JSON.stringify({build_id:buildId,inherits:'Test 04 accepted baseline',base_blob:expectedBase,three:'0.186.0',pipeline:'esbuild-local-bundle',runtime_external_dependencies:0,combat:['lock-on','3-hit combo','dodge','block','parry','enemy telegraph','hitstop','camera impulse','directional hit reaction','particles','knockback','reactive props'],app_js_bytes:js.size,soldier_glb_bytes:glb.size,service_worker_cache:true,target:'safari16.4+',mobile_fps_target:60},null,2));console.log(JSON.stringify({buildId,appBytes:js.size,glbBytes:glb.size,baseBlob:actualBase}));
