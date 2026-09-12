import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const $=id=>document.getElementById(id);
const stateEl=$('state'),phaseEl=$('phase'),chainEl=$('chain'),contactEl=$('contact'),hitstopEl=$('hitstop'),knockEl=$('knockback'),distanceEl=$('distance'),jx=$('jx'),jy=$('jy'),jr=$('jr'),reactionEl=$('reaction'),syncEl=$('sync');

const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));
renderer.setSize(innerWidth,innerHeight);
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.0;
renderer.shadowMap.enabled=true;
document.body.prepend(renderer.domElement);

const scene=new THREE.Scene();
scene.background=new THREE.Color(0x93c6d5);
scene.fog=new THREE.Fog(0x93c6d5,18,48);
scene.add(new THREE.HemisphereLight(0xe7f4ff,0x48533f,2.2));
const sun=new THREE.DirectionalLight(0xffefcf,3.2);sun.position.set(-7,13,8);sun.castShadow=true;scene.add(sun);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.MeshStandardMaterial({color:0x718f63,roughness:.96}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
const ring=new THREE.Mesh(new THREE.RingGeometry(1.9,2.0,64),new THREE.MeshBasicMaterial({color:0xdde8df,transparent:true,opacity:.34,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.012;scene.add(ring);

const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.1,100);
const baseCam=new THREE.Vector3(0,2.55,6.5),lookTarget=new THREE.Vector3(0,1.15,0),baseFov=50;
const loader=new GLTFLoader();
const [aGLB,bGLB]=await Promise.all([loader.loadAsync('./assets/Soldier.glb'),loader.loadAsync('./assets/Soldier.glb')]);
function setupCharacter(gltf,x,yaw){
  const root=new THREE.Group();root.position.set(x,0,0);root.rotation.y=yaw;scene.add(root);
  const model=gltf.scene;root.add(model);model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  const mixer=new THREE.AnimationMixer(model);const idle=gltf.animations.find(c=>c.name==='Idle')||gltf.animations[0];if(idle)mixer.clipAction(idle).play();
  return{root,model,mixer,baseX:x,baseYaw:yaw,worldOffsetX:0,reaction:null,knockback:null};
}
const player=setupCharacter(aGLB,-.85,-Math.PI/2),enemy=setupCharacter(bGLB,.85,Math.PI/2);

// Accepted average-melee feedback stack. Do not retune in this milestone.
const MICRO={duration:82,ampX:1.65,ampY:.9,rotation:.032,zoom:.0008,decayPower:2.05,phaseMultiplier:2.8};
const REACTION={duration:145,peak:42,recoil:.052,lean:THREE.MathUtils.degToRad(2.35),lunge:.028,preload:18};
const HITSTOP={duration:24};
const KNOCKBACK={distance:.07,duration:100};
const REACH=2.10;

// Accepted 05D two-hit chain timing. This build auto-queues A2 so human review stays on impact cadence, not input-window proof.
const CHAIN={a1Duration:440,a1Contact:160,a2Duration:480,a2Contact:170,total:920,windowOpen:160,windowClose:400};
let jolt=null,chainEvent=null,contactCount=0,hitstopRemaining=0,simNow=performance.now();

function anchorX(c){return c.baseX+c.worldOffsetX;}
function updateDistance(){distanceEl.textContent=Math.abs(anchorX(enemy)-anchorX(player)).toFixed(2)+' m';}
function beginJolt(direction,start){jolt={start,direction};}
function beginReaction(character,direction,start){character.reaction={start,direction};}
function beginHitstop(){hitstopRemaining=HITSTOP.duration;hitstopEl.textContent=HITSTOP.duration+' ms';}
function beginKnockback(character,direction,start){const from=character.worldOffsetX,to=from+direction*KNOCKBACK.distance;character.knockback={start,from,to};knockEl.textContent=(direction>0?'+':'-')+KNOCKBACK.distance.toFixed(2)+' m';}
function resetPositions(){
  if(chainEvent)return;
  for(const c of [player,enemy]){c.worldOffsetX=0;c.knockback=null;c.reaction=null;}
  jolt=null;hitstopRemaining=0;knockEl.textContent='0.00 m';contactEl.textContent='WAIT';reactionEl.textContent='IDLE';phaseEl.textContent='READY';chainEl.textContent='—';stateEl.textContent='READY';stateEl.style.color='#9df2ae';syncEl.textContent='—';updateDistance();
}
function startChain(give){
  if(chainEvent)return;
  chainEvent={give,start:simNow,hit1:false,hit2:false};
  stateEl.textContent=give?'GIVE 2-HIT':'RECEIVE 2-HIT';stateEl.style.color='#ffd18a';phaseEl.textContent='A1 WINDUP';chainEl.textContent='1 / 2';contactEl.textContent='WAIT';reactionEl.textContent='IDLE';syncEl.textContent='—';
}
function impactEnvelope(p){if(p<=.29)return Math.sin((p/.29)*Math.PI/2);const t=(p-.29)/.71;return 1-(1-Math.pow(1-t,3));}
function attackPose(c,time){
  if(!chainEvent)return;
  const attacker=chainEvent.give?player:enemy;if(c!==attacker)return;
  const elapsed=time-chainEvent.start,direction=chainEvent.give?1:-1;
  let p=0,variant=1;
  if(elapsed<CHAIN.a1Duration){p=Math.min(1,elapsed/CHAIN.a1Duration);variant=1;}
  else{p=Math.min(1,(elapsed-CHAIN.a1Duration)/CHAIN.a2Duration);variant=2;}
  const contactP=(variant===1?CHAIN.a1Contact:CHAIN.a2Contact)/(variant===1?CHAIN.a1Duration:CHAIN.a2Duration);
  const toContact=Math.min(1,p/contactP),recovery=Math.max(0,(p-contactP)/(1-contactP));
  const e=p<contactP?Math.sin(toContact*Math.PI/2):Math.cos(Math.min(1,recovery)*Math.PI/2);
  c.root.position.x+=direction*REACTION.lunge*e;
  c.root.rotation.z+=direction*(variant===1?-1:1)*THREE.MathUtils.degToRad(.9)*e;
}
function updateCharacter(c,time){
  if(c.knockback){const p=Math.min(1,(time-c.knockback.start)/KNOCKBACK.duration),e=1-Math.pow(1-p,3);c.worldOffsetX=THREE.MathUtils.lerp(c.knockback.from,c.knockback.to,e);if(p>=1){c.worldOffsetX=c.knockback.to;c.knockback=null;}}
  c.root.position.x=anchorX(c);c.root.position.z=0;c.root.rotation.set(0,c.baseYaw,0);
  attackPose(c,time);
  if(c.reaction){const elapsed=Math.max(0,time-c.reaction.start+REACTION.preload),p=Math.min(1,elapsed/REACTION.duration),e=impactEnvelope(p);c.root.position.x+=c.reaction.direction*REACTION.recoil*e;c.root.rotation.z=-c.reaction.direction*REACTION.lean*e;c.root.rotation.x=.018*e;if(p>=1){c.reaction=null;reactionEl.textContent='IDLE';}}
}
function doContact(hitIndex,wallNow){
  const give=chainEvent.give,receiver=give?enemy:player,direction=give?1:-1,distance=Math.abs(anchorX(enemy)-anchorX(player));
  if(hitIndex===1)chainEvent.hit1=true;else chainEvent.hit2=true;
  phaseEl.textContent='A'+hitIndex+' CONTACT';
  if(distance>REACH){contactEl.textContent='A'+hitIndex+' MISS';return;}
  beginJolt(direction,wallNow);beginReaction(receiver,direction,simNow);beginHitstop();beginKnockback(receiver,direction,simNow);
  contactCount++;contactEl.textContent='A'+hitIndex+' HIT · '+contactCount;reactionEl.textContent=give?'TARGET HIT':'PLAYER HIT';syncEl.textContent='0 ms';
}
function updateChain(wallNow){
  if(!chainEvent)return;
  const elapsed=simNow-chainEvent.start;
  if(!chainEvent.hit1&&elapsed>=CHAIN.a1Contact)doContact(1,wallNow);
  if(elapsed<CHAIN.a1Contact)phaseEl.textContent='A1 WINDUP';
  else if(elapsed<CHAIN.a1Duration)phaseEl.textContent='A1 RECOVERY';
  else if(elapsed<CHAIN.a1Duration+CHAIN.a2Contact){phaseEl.textContent='A2 WINDUP';chainEl.textContent='2 / 2';}
  if(!chainEvent.hit2&&elapsed>=CHAIN.a1Duration+CHAIN.a2Contact)doContact(2,wallNow);
  if(elapsed>=CHAIN.a1Duration+CHAIN.a2Contact&&elapsed<CHAIN.total)phaseEl.textContent='A2 RECOVERY';
  if(elapsed>=CHAIN.total){chainEvent=null;phaseEl.textContent='READY';chainEl.textContent='—';stateEl.textContent='READY';stateEl.style.color='#9df2ae';}
}
function joltWave(now){if(!jolt)return{x:0,y:0,rot:0,scale:1,done:false};const p=Math.min(1,(now-jolt.start)/MICRO.duration),decay=Math.pow(1-p,MICRO.decayPower),phase=p*Math.PI*MICRO.phaseMultiplier;return{x:jolt.direction*(Math.sin(phase)*MICRO.ampX*decay+(p<.18?MICRO.ampX*.25*(1-p/.18):0)),y:-Math.cos(phase*.9)*MICRO.ampY*decay,rot:jolt.direction*Math.sin(phase*.72)*MICRO.rotation*decay,scale:1+MICRO.zoom*decay,done:p>=1};}
function applyCamera(now){const w=joltWave(now);camera.position.copy(baseCam);camera.fov=baseFov;camera.lookAt(lookTarget);const dist=baseCam.distanceTo(lookTarget),vertical=2*dist*Math.tan(THREE.MathUtils.degToRad(baseFov)/2),worldPerPx=vertical/Math.max(1,innerHeight);camera.translateX(w.x*worldPerPx);camera.translateY(-w.y*worldPerPx);camera.rotateZ(THREE.MathUtils.degToRad(w.rot));camera.fov=baseFov/w.scale;camera.updateProjectionMatrix();jx.textContent=w.x.toFixed(2)+' px';jy.textContent=w.y.toFixed(2)+' px';jr.textContent=w.rot.toFixed(3)+'°';if(w.done&&jolt)jolt=null;}

$('give').addEventListener('click',()=>startChain(true));$('receive').addEventListener('click',()=>startChain(false));$('reset').addEventListener('click',resetPositions);
addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='KeyM'){e.preventDefault();startChain(true);}else if(e.code==='KeyN'){e.preventDefault();startChain(false);}else if(e.code==='KeyP'){e.preventDefault();resetPositions();}});
const clock=new THREE.Clock();
function animate(wallNow){
  requestAnimationFrame(animate);
  const wallDt=Math.min(.033,clock.getDelta());let simDt=wallDt;
  if(hitstopRemaining>0){hitstopRemaining=Math.max(0,hitstopRemaining-wallDt*1000);simDt=0;hitstopEl.textContent=Math.ceil(hitstopRemaining)+' ms';if(hitstopRemaining===0)hitstopEl.textContent='0 ms';}
  simNow+=simDt*1000;player.mixer.update(simDt);enemy.mixer.update(simDt);updateChain(wallNow);updateCharacter(player,simNow);updateCharacter(enemy,simNow);updateDistance();applyCamera(wallNow);renderer.render(scene,camera);
}
requestAnimationFrame(animate);
addEventListener('resize',()=>{renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();});
