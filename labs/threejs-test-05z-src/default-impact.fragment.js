const DEFAULT_IMPACT_SOURCE_MARKER='05Z_DEFAULT_MELEE_IMPACT';
const DEFAULT_MICRO={duration:82,ampX:1.65,ampY:.9,rotation:.032,zoom:.0008,decayPower:2.05,phaseMultiplier:2.8};
const DEFAULT_REACTION={duration:145,peak:42,recoil:.052,lean:THREE.MathUtils.degToRad(2.35),preload:18};
const DEFAULT_HITSTOP={duration:24};
const DEFAULT_KNOCKBACK={distance:.07,duration:100};
const DEFAULT_BURST={duration:92,ringInner:.075,ringOuter:.105,rayCount:8,rayLength:.14};

// Store primitive baseline values rather than retaining Vector/Euler copies. This keeps the
// presentation layer independent of Three.js copy() calls during startup on Safari.
const defaultImpactBase={
  px:targetRoot.position.x,py:targetRoot.position.y,pz:targetRoot.position.z,
  rx:targetRoot.rotation.x,ry:targetRoot.rotation.y,rz:targetRoot.rotation.z
};
let defaultImpactPersistentX=0,defaultImpactPersistentZ=0;
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
  let x=targetRoot.position.x-playerRoot.position.x,z=targetRoot.position.z-playerRoot.position.z;
  let len=Math.hypot(x,z);
  if(len<.000001){x=Math.sin(playerRoot.rotation.y);z=Math.cos(playerRoot.rotation.y);len=Math.max(.000001,Math.hypot(x,z));}
  return{x:x/len,z:z/len};
}
function setDefaultImpactHud(text,color='#9df2ae'){
  const e=document.getElementById('defaultImpactState');if(e){e.textContent=text;e.style.color=color;}
  const c=document.getElementById('defaultImpactCount');if(c)c.textContent=String(defaultImpactCount);
}
function beginDefaultBurst(wallNow,dir){
  defaultBurstGroup.position.set(targetRoot.position.x-dir.x*.48,targetRoot.position.y+1.22,targetRoot.position.z-dir.z*.48);
  defaultBurstGroup.scale.setScalar(1);defaultBurstGroup.rotation.set(0,0,0);defaultBurstGroup.visible=true;
  defaultBurstFx={start:wallNow};
}
function triggerDefaultMeleeImpact(wallNow=performance.now()){
  const dir=defaultImpactDirection();
  defaultImpactCount++;
  defaultMicroJoltActive={start:wallNow,direction:1};
  defaultImpactReaction={start:defaultImpactSimNow,x:dir.x,z:dir.z};
  defaultImpactHitstopRemaining=DEFAULT_HITSTOP.duration;
  defaultImpactKnockback={start:defaultImpactSimNow,fromX:defaultImpactPersistentX,fromZ:defaultImpactPersistentZ,toX:defaultImpactPersistentX+dir.x*DEFAULT_KNOCKBACK.distance,toZ:defaultImpactPersistentZ+dir.z*DEFAULT_KNOCKBACK.distance};
  beginDefaultBurst(wallNow,dir);
  setDefaultImpactHud('DEFAULT IMPACT '+defaultImpactCount,'#ffd18a');
}
function defaultImpactEnvelope(p){if(p<=.29)return Math.sin((p/.29)*Math.PI/2);const t=(p-.29)/.71;return 1-(1-Math.pow(1-t,3));}
function updateDefaultBurst(wallNow){
  if(!defaultBurstFx)return;
  const p=Math.min(1,(wallNow-defaultBurstFx.start)/DEFAULT_BURST.duration),e=1-Math.pow(1-p,3),fade=Math.pow(1-p,1.45);
  defaultBurstGroup.scale.setScalar(.78+e*.72);
  // Copy quaternion components explicitly; avoid a startup/runtime dependency on copy(undefined).
  defaultBurstGroup.quaternion.set(camera.quaternion.x,camera.quaternion.y,camera.quaternion.z,camera.quaternion.w);
  defaultBurstRingMat.opacity=.72*fade;defaultBurstRayMat.opacity=.84*fade;
  if(p>=1){defaultBurstFx=null;defaultBurstGroup.visible=false;defaultBurstRingMat.opacity=0;defaultBurstRayMat.opacity=0;}
}
function updateDefaultMeleeImpact(dt,wallNow){
  let localDt=dt;
  if(defaultImpactHitstopRemaining>0){defaultImpactHitstopRemaining=Math.max(0,defaultImpactHitstopRemaining-dt*1000);localDt=0;}
  defaultImpactSimNow+=localDt*1000;

  // Before the first real combat hit, this layer must be a true no-op so the accepted 05Q/05S
  // startup path remains untouched.
  if(defaultImpactCount===0&&!defaultImpactReaction&&!defaultImpactKnockback&&!defaultBurstFx&&defaultImpactHitstopRemaining===0)return localDt;

  if(defaultImpactKnockback){
    const p=Math.min(1,(defaultImpactSimNow-defaultImpactKnockback.start)/DEFAULT_KNOCKBACK.duration),e=1-Math.pow(1-p,3);
    defaultImpactPersistentX=THREE.MathUtils.lerp(defaultImpactKnockback.fromX,defaultImpactKnockback.toX,e);
    defaultImpactPersistentZ=THREE.MathUtils.lerp(defaultImpactKnockback.fromZ,defaultImpactKnockback.toZ,e);
    if(p>=1){defaultImpactPersistentX=defaultImpactKnockback.toX;defaultImpactPersistentZ=defaultImpactKnockback.toZ;defaultImpactKnockback=null;}
  }

  let visualX=0,visualZ=0,leanX=0,leanZ=0;
  if(defaultImpactReaction){
    const elapsed=Math.max(0,defaultImpactSimNow-defaultImpactReaction.start+DEFAULT_REACTION.preload),p=Math.min(1,elapsed/DEFAULT_REACTION.duration),e=defaultImpactEnvelope(p);
    visualX=defaultImpactReaction.x*DEFAULT_REACTION.recoil*e;visualZ=defaultImpactReaction.z*DEFAULT_REACTION.recoil*e;
    leanX=defaultImpactReaction.z*DEFAULT_REACTION.lean*e;leanZ=-defaultImpactReaction.x*DEFAULT_REACTION.lean*e;
    if(p>=1)defaultImpactReaction=null;
  }

  targetRoot.position.set(defaultImpactBase.px+defaultImpactPersistentX+visualX,defaultImpactBase.py,defaultImpactBase.pz+defaultImpactPersistentZ+visualZ);
  targetRoot.rotation.set(defaultImpactBase.rx+leanX,defaultImpactBase.ry,defaultImpactBase.rz+leanZ);
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
  if(w.x||w.y||w.rot||w.scale!==1){
    if(!target||!Number.isFinite(target.x)||!Number.isFinite(target.y)||!Number.isFinite(target.z))return;
    const dx=camera.position.x-target.x,dy=camera.position.y-target.y,dz=camera.position.z-target.z,distance=Math.hypot(dx,dy,dz);
    const verticalWorld=2*distance*Math.tan(THREE.MathUtils.degToRad(baseFov)/2),worldPerPixel=verticalWorld/Math.max(1,innerHeight);
    camera.translateX(w.x*worldPerPixel);camera.translateY(-w.y*worldPerPixel);camera.rotateZ(THREE.MathUtils.degToRad(w.rot));camera.fov=camera.fov/w.scale;
  }
  if(w.done&&defaultMicroJoltActive)defaultMicroJoltActive=null;
}
globalThis.__defaultMeleeImpact=triggerDefaultMeleeImpact;
globalThis.__defaultImpactSourceMarker=DEFAULT_IMPACT_SOURCE_MARKER;
