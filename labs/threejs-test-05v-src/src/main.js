import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const $=id=>document.getElementById(id);
const stateEl=$('state'),phaseEl=$('phase'),contactEl=$('contact'),hitstopEl=$('hitstop'),jx=$('jx'),jy=$('jy'),jr=$('jr'),reactionEl=$('reaction'),syncEl=$('sync');

const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;renderer.shadowMap.enabled=true;document.body.prepend(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x93c6d5);scene.fog=new THREE.Fog(0x93c6d5,18,48);
scene.add(new THREE.HemisphereLight(0xe7f4ff,0x48533f,2.2));const sun=new THREE.DirectionalLight(0xffefcf,3.2);sun.position.set(-7,13,8);sun.castShadow=true;scene.add(sun);
const ground=new THREE.Mesh(new THREE.PlaneGeometry(40,40),new THREE.MeshStandardMaterial({color:0x718f63,roughness:.96}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
const ring=new THREE.Mesh(new THREE.RingGeometry(1.9,2.0,64),new THREE.MeshBasicMaterial({color:0xdde8df,transparent:true,opacity:.34,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.y=.012;scene.add(ring);

const camera=new THREE.PerspectiveCamera(50,innerWidth/innerHeight,.1,100);const baseCam=new THREE.Vector3(0,2.55,6.5),lookTarget=new THREE.Vector3(0,1.15,0),baseFov=50;
const loader=new GLTFLoader();const [aGLB,bGLB]=await Promise.all([loader.loadAsync('./assets/Soldier.glb'),loader.loadAsync('./assets/Soldier.glb')]);
function setupCharacter(gltf,x,yaw){const root=new THREE.Group();root.position.set(x,0,0);root.rotation.y=yaw;scene.add(root);const model=gltf.scene;root.add(model);model.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});const mixer=new THREE.AnimationMixer(model);const idle=gltf.animations.find(c=>c.name==='Idle')||gltf.animations[0];if(idle)mixer.clipAction(idle).play();return{root,model,mixer,baseX:x,baseYaw:yaw,reaction:null,attack:null};}
const player=setupCharacter(aGLB,-.85,-Math.PI/2),enemy=setupCharacter(bGLB,.85,Math.PI/2);

// Accepted 05T-R2 feedback constants remain unchanged.
const MICRO={duration:82,ampX:1.65,ampY:.9,rotation:.032,zoom:.0008,decayPower:2.05,phaseMultiplier:2.8};
const REACTION={duration:145,peak:42,recoil:.052,lean:THREE.MathUtils.degToRad(2.35),lunge:.028,preload:18};
const MELEE={windup:110,recovery:190,total:300,reach:2.10};
// New isolated variable under review: a tiny local character-time pause at contact.
const HITSTOP={duration:24};
let jolt=null,attackEvent=null,contactCount=0,hitstopRemaining=0,simNow=performance.now();

function beginJolt(direction,start){jolt={start,direction};}
function beginReaction(character,direction,start){character.reaction={start,direction};}
function beginHitstop(){hitstopRemaining=HITSTOP.duration;hitstopEl.textContent=HITSTOP.duration+' ms';}
function startMelee(give){if(attackEvent)return;attackEvent={give,start:simNow,contactDone:false};stateEl.textContent=give?'GIVE MELEE':'RECEIVE MELEE';stateEl.style.color='#ffd18a';phaseEl.textContent='WINDUP';contactEl.textContent='WAIT';reactionEl.textContent='IDLE';syncEl.textContent='—';}
function impactEnvelope(p){if(p<=.29)return Math.sin((p/.29)*Math.PI/2);const t=(p-.29)/.71;return 1-(1-Math.pow(1-t,3));}
function updateCharacter(c,time){c.root.position.x=c.baseX;c.root.position.z=0;c.root.rotation.set(0,c.baseYaw,0);if(c.attack){const p=Math.min(1,(time-c.attack.start)/MELEE.total);const contactP=MELEE.windup/MELEE.total;const toContact=Math.min(1,p/contactP);const recovery=Math.max(0,(p-contactP)/(1-contactP));const e=p<contactP?Math.sin(toContact*Math.PI/2):Math.cos(Math.min(1,recovery)*Math.PI/2);c.root.position.x+=c.attack.direction*REACTION.lunge*e;c.root.rotation.z=-c.attack.direction*THREE.MathUtils.degToRad(.9)*e;if(p>=1)c.attack=null;}if(c.reaction){const elapsed=Math.max(0,time-c.reaction.start+REACTION.preload),p=Math.min(1,elapsed/REACTION.duration),e=impactEnvelope(p);c.root.position.x+=c.reaction.direction*REACTION.recoil*e;c.root.rotation.z=-c.reaction.direction*REACTION.lean*e;c.root.rotation.x=.018*e;if(p>=1){c.reaction=null;reactionEl.textContent='IDLE';}}}
function doContact(wallNow){const give=attackEvent.give,receiver=give?enemy:player,direction=give?1:-1;const distance=Math.abs(enemy.root.position.x-player.root.position.x);attackEvent.contactDone=true;phaseEl.textContent='CONTACT';if(distance>MELEE.reach){contactEl.textContent='MISS';return;}const joltStart=wallNow,reactionStart=simNow;beginJolt(direction,joltStart);beginReaction(receiver,direction,reactionStart);beginHitstop();contactCount++;contactEl.textContent='HIT '+contactCount;reactionEl.textContent=give?'TARGET HIT':'PLAYER HIT';syncEl.textContent='0 ms';}
function updateAttack(wallNow){if(!attackEvent)return;const elapsed=simNow-attackEvent.start;const attacker=attackEvent.give?player:enemy,direction=attackEvent.give?1:-1;if(!attacker.attack)attacker.attack={start:attackEvent.start,direction};if(!attackEvent.contactDone&&elapsed>=MELEE.windup)doContact(wallNow);if(elapsed>=MELEE.windup&&elapsed<MELEE.total)phaseEl.textContent=attackEvent.contactDone?'RECOVERY':'CONTACT';if(elapsed>=MELEE.total){attackEvent=null;phaseEl.textContent='READY';stateEl.textContent='READY';stateEl.style.color='#9df2ae';}}
function joltWave(now){if(!jolt)return{x:0,y:0,rot:0,scale:1,done:false};const p=Math.min(1,(now-jolt.start)/MICRO.duration),decay=Math.pow(1-p,MICRO.decayPower),phase=p*Math.PI*MICRO.phaseMultiplier;return{x:jolt.direction*(Math.sin(phase)*MICRO.ampX*decay+(p<.18?MICRO.ampX*.25*(1-p/.18):0)),y:-Math.cos(phase*.9)*MICRO.ampY*decay,rot:jolt.direction*Math.sin(phase*.72)*MICRO.rotation*decay,scale:1+MICRO.zoom*decay,done:p>=1};}
function applyCamera(now){const w=joltWave(now);camera.position.copy(baseCam);camera.fov=baseFov;camera.lookAt(lookTarget);const dist=baseCam.distanceTo(lookTarget),vertical=2*dist*Math.tan(THREE.MathUtils.degToRad(baseFov)/2),worldPerPx=vertical/Math.max(1,innerHeight);camera.translateX(w.x*worldPerPx);camera.translateY(-w.y*worldPerPx);camera.rotateZ(THREE.MathUtils.degToRad(w.rot));camera.fov=baseFov/w.scale;camera.updateProjectionMatrix();jx.textContent=w.x.toFixed(2)+' px';jy.textContent=w.y.toFixed(2)+' px';jr.textContent=w.rot.toFixed(3)+'°';if(w.done&&jolt)jolt=null;}

$('give').addEventListener('click',()=>startMelee(true));$('receive').addEventListener('click',()=>startMelee(false));addEventListener('keydown',e=>{if(e.repeat)return;if(e.code==='KeyM'){e.preventDefault();startMelee(true);}else if(e.code==='KeyN'){e.preventDefault();startMelee(false);}});
const clock=new THREE.Clock();function animate(wallNow){requestAnimationFrame(animate);const wallDt=Math.min(.033,clock.getDelta());let simDt=wallDt;if(hitstopRemaining>0){hitstopRemaining=Math.max(0,hitstopRemaining-wallDt*1000);simDt=0;hitstopEl.textContent=Math.ceil(hitstopRemaining)+' ms';if(hitstopRemaining===0)hitstopEl.textContent='0 ms';}simNow+=simDt*1000;player.mixer.update(simDt);enemy.mixer.update(simDt);updateAttack(wallNow);updateCharacter(player,simNow);updateCharacter(enemy,simNow);applyCamera(wallNow);renderer.render(scene,camera);}requestAnimationFrame(animate);
addEventListener('resize',()=>{renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();});
