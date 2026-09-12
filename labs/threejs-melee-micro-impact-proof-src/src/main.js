import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const $=id=>document.getElementById(id);
const stateEl=$('state'),jx=$('jx'),jy=$('jy'),jr=$('jr'),reactionEl=$('reaction'),syncEl=$('sync');

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

const ground=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.MeshStandardMaterial({color:0x718f63,roughness:.96}));
ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
const ring=new THREE.Mesh(new THREE.RingGeometry(1.9,2.0,64),new THREE.MeshBasicMaterial({color:0xdde8df,transparent:true,opacity:.34,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.012;scene.add(ring);

const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.1,100);
const baseCam=new THREE.Vector3(0,2.55,6.5),lookTarget=new THREE.Vector3(0,1.15,0),baseFov=50;

const loader=new GLTFLoader();
const [aGLB,bGLB]=await Promise.all([loader.loadAsync('./assets/Soldier.glb'),loader.loadAsync('./assets/Soldier.glb')]);
function setupCharacter(gltf,x,yaw){
  const root=new THREE.Group();root.position.set(x,0,0);root.rotation.y=yaw;scene.add(root);
  const model=gltf.scene;model.scale.setScalar(1.0);root.add(model);
  model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});
  const mixer=new THREE.AnimationMixer(model);
  const idle=gltf.animations.find(c=>c.name==='Idle')||gltf.animations[0];if(idle)mixer.clipAction(idle).play();
  return{root,model,mixer,baseX:x,baseY:yaw,reaction:null,lunge:null};
}
const player=setupCharacter(aGLB,-.85,Math.PI/2);
const enemy=setupCharacter(bGLB,.85,-Math.PI/2);

const MICRO={duration:100,ampX:3.2,ampY:1.8,rotation:.07,zoom:.002,decayPower:1.9,phaseMultiplier:3.25};
const REACTION={duration:180,peak:52,recoil:.10,lean:THREE.MathUtils.degToRad(4.5),lunge:.055};
let jolt=null;

function triggerMicroJolt(direction){jolt={start:performance.now(),direction};}
function triggerReaction(character,direction,start){character.reaction={start,direction};}
function triggerLunge(character,direction,start){character.lunge={start,direction};}
function melee(give){
  const start=performance.now();
  const receiver=give?enemy:player,attacker=give?player:enemy;
  const direction=give?1:-1;
  triggerMicroJolt(direction);
  triggerReaction(receiver,direction,start);
  triggerLunge(attacker,direction,start);
  stateEl.textContent=give?'GIVE · MICRO IMPACT':'RECEIVE · MICRO IMPACT';stateEl.style.color='#ffd18a';
  reactionEl.textContent=give?'TARGET HIT':'PLAYER HIT';syncEl.textContent='0 ms';
}
function easeOutCubic(t){return 1-Math.pow(1-t,3);}
function impactEnvelope(p){if(p<=.29)return Math.sin((p/.29)*Math.PI/2);return 1-easeOutCubic((p-.29)/.71);}
function updateCharacter(c,now){
  c.root.position.x=c.baseX;c.root.position.z=0;c.root.rotation.set(0,c.baseY,0);
  if(c.lunge){const p=Math.min(1,(now-c.lunge.start)/REACTION.duration);const e=Math.sin(Math.PI*p);c.root.position.x+=c.lunge.direction*REACTION.lunge*e;if(p>=1)c.lunge=null;}
  if(c.reaction){const p=Math.min(1,(now-c.reaction.start)/REACTION.duration),e=impactEnvelope(p);c.root.position.x+=c.reaction.direction*REACTION.recoil*e;c.root.rotation.z=-c.reaction.direction*REACTION.lean*e;c.root.rotation.x=.035*e;if(p>=1){c.reaction=null;reactionEl.textContent='IDLE';}}
}
function joltWave(now){
  if(!jolt)return{x:0,y:0,rot:0,scale:1,done:false};
  const p=Math.min(1,(now-jolt.start)/MICRO.duration),decay=Math.pow(1-p,MICRO.decayPower),phase=p*Math.PI*MICRO.phaseMultiplier;
  return{x:jolt.direction*(Math.sin(phase)*MICRO.ampX*decay+(p<.18?MICRO.ampX*.25*(1-p/.18):0)),y:-Math.cos(phase*.9)*MICRO.ampY*decay,rot:jolt.direction*Math.sin(phase*.72)*MICRO.rotation*decay,scale:1+MICRO.zoom*decay,done:p>=1};
}
function applyCamera(now){
  const w=joltWave(now);camera.position.copy(baseCam);camera.fov=baseFov;camera.lookAt(lookTarget);
  const dist=baseCam.distanceTo(lookTarget),vertical=2*dist*Math.tan(THREE.MathUtils.degToRad(baseFov)/2),worldPerPx=vertical/Math.max(1,innerHeight);
  camera.translateX(w.x*worldPerPx);camera.translateY(-w.y*worldPerPx);camera.rotateZ(THREE.MathUtils.degToRad(w.rot));camera.fov=baseFov/w.scale;camera.updateProjectionMatrix();
  jx.textContent=w.x.toFixed(1)+' px';jy.textContent=w.y.toFixed(1)+' px';jr.textContent=w.rot.toFixed(2)+'°';
  if(w.done&&jolt){jolt=null;stateEl.textContent='READY';stateEl.style.color='#9df2ae';}
}

$('give').addEventListener('click',()=>melee(true));$('receive').addEventListener('click',()=>melee(false));
addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='KeyM'){e.preventDefault();melee(true);}else if(e.code==='KeyN'){e.preventDefault();melee(false);}});

const clock=new THREE.Clock();
function animate(now){requestAnimationFrame(animate);const dt=Math.min(.033,clock.getDelta());player.mixer.update(dt);enemy.mixer.update(dt);updateCharacter(player,now);updateCharacter(enemy,now);applyCamera(now);renderer.render(scene,camera);}requestAnimationFrame(animate);
addEventListener('resize',()=>{renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();});
