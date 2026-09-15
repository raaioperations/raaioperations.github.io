const DEFAULT_IMPACT_SOURCE_MARKER='05Z_DEFAULT_MELEE_IMPACT';
const DEFAULT_MICRO={duration:82,ampX:1.65,ampY:.9,rotation:.032,zoom:.0008,decayPower:2.05,phaseMultiplier:2.8};
const DEFAULT_REACTION={duration:145,peak:42,recoil:.052,lean:THREE.MathUtils.degToRad(2.35),preload:18};
const DEFAULT_HITSTOP={duration:24};
const DEFAULT_KNOCKBACK={distance:.07,duration:100};
const DEFAULT_BURST={duration:92,ringInner:.075,ringOuter:.105,rayCount:8,rayLength:.14};

const defaultImpactBasePosition=targetRoot.position.clone();
const defaultImpactBaseRotation=targetRoot.rotation.clone();
const defaultImpactPersistentOffset=new THREE.Vector3();
let defaultImpactSimNow=performance.now();
let defaultImpactHitstopRemaining=0;
let defaultImpactReaction=null;
let defaultImpactKnockback=null;
let defaultMicroJoltActive=null;
let defaultImpactCount=0;

const defaultBurstGroup=new THREE.Group();scene.add(defaultBurstGroup);defaultBurstGroup.visible=false;
const defaultBurstRingMat=new THREE.MeshBasicMaterial({color:0xffe6a8,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
const defaultBurstRayMat=new THREE.MeshBasicMaterial({color:0xfff0c2,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide});
const defaultBurstRing=new THREE.Mesh(new THREE.RingGeometry(DEFAULT_BURST.ringInner,DEFAULT_BURST.ringOuter,28),defaultBurstRingMat);defaultBurstGroup.add(defaultBurstRing);
for(let i=0;i<DEFAULT_BURST.rayCount;i++){const a=i/DEFAULT_BURST.rayCount*Math.PI*2,r=new THREE.Mesh(new THREE.PlaneGeometry(.016,DEFAULT_BURST.rayLength),defaultBurstRayMat);r.position.set(Math.cos(a)*.115,Math.sin(a)*.115,0);r.rotation.z=a-Math.PI/2;defaultBurstGroup.add(r);}
let defaultBurstFx=null;

function defaultImpactDirection(){
  const d=new THREE.Vector3(targetRoot.position.x-playerRoot.position.x,0,targetRoot.position.z-playerRoot.position.z);
  if(d.lengthSq()<.000001)d.set(Math.sin(playerRoot.rotation.y),0,Math.cos(playerRoot.rotation.y));
  return d.normalize();
}
function setDefaultImpactHud(text,color='#9df2ae'){
  const e=document.getElementById('defaultImpactState');if(e){e.textContent=text;e.style.color=color;}
  const c=document.getElementById('defaultImpactCount');if(c)c.textContent=String(defaultImpactCount);
}
function beginDefaultBurst(wallNow,dir){
  const surface=targetRoot.position.clone().addScaledVector(dir,-.48);surface.y+=1.22;
  defaultBurstGroup.position.copy(surface);defaultBurstGroup.scale.setScalar(1);defaultBurstGroup.rotation.set(0,0,0);defaultBurstGroup.visible=true;
  defaultBurstFx={start:wallNow};
}
function triggerDefaultMeleeImpact(wallNow=performance.now()){
  const dir=defaultImpactDirection();
  defaultImpactCount++;
  defaultMicroJoltActive={start:wallNow,direction:1};
  defaultImpactReaction={start:defaultImpactSimNow,direction:dir.clone()};
  defaultImpactHitstopRemaining=DEFAULT_HITSTOP.duration;
  const from=defaultImpactPersistentOffset.clone(),to=from.clone().addScaledVector(dir,DEFAULT_KNOCKBACK.distance);
  defaultImpactKnockback={start:defaultImpactSimNow,from,to};
  beginDefaultBurst(wallNow,dir);
  setDefaultImpactHud('DEFAULT IMPACT '+defaultImpactCount,'#ffd18a');
}
function defaultImpactEnvelope(p){if(p<=.29)return Math.sin((p/.29)*Math.PI/2);const t=(p-.29)/.71;return 1-(1-Math.pow(1-t,3));}
function updateDefaultBurst(wallNow){
  if(!defaultBurstFx)return;
  const p=Math.min(1,(wallNow-defaultBurstFx.start)/DEFAULT_BURST.duration),e=1-Math.pow(1-p,3),fade=Math.pow(1-p,1.45);
  defaultBurstGroup.scale.setScalar(.78+e*.72);defaultBurstGroup.quaternion.copy(camera.quaternion);defaultBurstRingMat.opacity=.72*fade;defaultBurstRayMat.opacity=.84*fade;
  if(p>=1){defaultBurstFx=null;defaultBurstGroup.visible=false;defaultBurstRingMat.opacity=0;defaultBurstRayMat.opacity=0;}
}
function updateDefaultMeleeImpact(dt,wallNow){
  let localDt=dt;
  if(defaultImpactHitstopRemaining>0){defaultImpactHitstopRemaining=Math.max(0,defaultImpactHitstopRemaining-dt*1000);localDt=0;}
  defaultImpactSimNow+=localDt*1000;
  if(defaultImpactKnockback){const p=Math.min(1,(defaultImpactSimNow-defaultImpactKnockback.start)/DEFAULT_KNOCKBACK.duration),e=1-Math.pow(1-p,3);defaultImpactPersistentOffset.lerpVectors(defaultImpactKnockback.from,defaultImpactKnockback.to,e);if(p>=1){defaultImpactPersistentOffset.copy(defaultImpactKnockback.to);defaultImpactKnockback=null;}}
  const visualOffset=new THREE.Vector3();let leanX=0,leanZ=0;
  if(defaultImpactReaction){const elapsed=Math.max(0,defaultImpactSimNow-defaultImpactReaction.start+DEFAULT_REACTION.preload),p=Math.min(1,elapsed/DEFAULT_REACTION.duration),e=defaultImpactEnvelope(p);visualOffset.addScaledVector(defaultImpactReaction.direction,DEFAULT_REACTION.recoil*e);leanX=defaultImpactReaction.direction.z*DEFAULT_REACTION.lean*e;leanZ=-defaultImpactReaction.direction.x*DEFAULT_REACTION.lean*e;if(p>=1)defaultImpactReaction=null;}
  targetRoot.position.copy(defaultImpactBasePosition).add(defaultImpactPersistentOffset).add(visualOffset);
  targetRoot.rotation.copy(defaultImpactBaseRotation);targetRoot.rotation.x+=leanX;targetRoot.rotation.z+=leanZ;
  updateDefaultBurst(wallNow);
  if(!defaultImpactReaction&&!defaultImpactKnockback&&defaultImpactHitstopRemaining===0&&defaultImpactCount>0)setDefaultImpactHud('DEFAULT READY');
  return localDt;
}
function defaultMicroWaveform(now){
  if(!defaultMicroJoltActive)return{x:0,y:0,rot:0,scale:1,done:false};
  const p=Math.min(1,(now-defaultMicroJoltActive.start)/DEFAULT_MICRO.duration),decay=Math.pow(1-p,DEFAULT_MICRO.decayPower),phase=p*Math.PI*DEFAULT_MICRO.phaseMultiplier,d=defaultMicroJoltActive.direction;
  return{x:d*(Math.sin(phase)*DEFAULT_MICRO.ampX*decay+(p<.18?DEFAULT_MICRO.ampX*.25*(1-p/.18):0)),y:-Math.cos(phase*.9)*DEFAULT_MICRO.ampY*decay,rot:d*Math.sin(phase*.72)*DEFAULT_MICRO.rotation*decay,scale:1+DEFAULT_MICRO.zoom*decay,done:p>=1};
}
function applyDefaultMicroJolt(now,target,baseFov){
  const w=defaultMicroWaveform(now);
  if(w.x||w.y||w.rot||w.scale!==1){const distance=camera.position.distanceTo(target),verticalWorld=2*distance*Math.tan(THREE.MathUtils.degToRad(baseFov)/2),worldPerPixel=verticalWorld/Math.max(1,innerHeight);camera.translateX(w.x*worldPerPixel);camera.translateY(-w.y*worldPerPixel);camera.rotateZ(THREE.MathUtils.degToRad(w.rot));camera.fov=camera.fov/w.scale;}
  if(w.done&&defaultMicroJoltActive)defaultMicroJoltActive=null;
}
globalThis.__defaultMeleeImpact=triggerDefaultMeleeImpact;
globalThis.__defaultImpactSourceMarker=DEFAULT_IMPACT_SOURCE_MARKER;
