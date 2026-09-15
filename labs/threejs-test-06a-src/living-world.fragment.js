
// ---- Test 06A: Living World Baseline — deterministic flock response ----
const LIVING_WORLD_06A_MARKER='06A_LIVING_WORLD_FLOCK';
const FLOCK={count:12,triggerRadius:7.0,resetRadius:13.5,fleeMs:1450,returnMs:1350,farHoldMs:1400};
const flockSpawnYaw=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const flockCenterX=playerRoot.position.x+Math.sin(flockSpawnYaw)*8.0;
const flockCenterZ=playerRoot.position.z+Math.cos(flockSpawnYaw)*8.0;
const flockCenterY=groundHeight(flockCenterX,flockCenterZ)+0.18;

const flockBodyGeo=new THREE.SphereGeometry(.12,7,5);
const flockWingGeo=new THREE.PlaneGeometry(.26,.10);
const flockBodyMat=new THREE.MeshStandardMaterial({color:0x283137,roughness:.78,metalness:.03});
const flockWingMat=new THREE.MeshStandardMaterial({color:0x66757a,roughness:.82,side:THREE.DoubleSide});
const flockBodies=new THREE.InstancedMesh(flockBodyGeo,flockBodyMat,FLOCK.count);
const flockLeftWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
const flockRightWings=new THREE.InstancedMesh(flockWingGeo,flockWingMat,FLOCK.count);
flockBodies.castShadow=true;flockLeftWings.castShadow=true;flockRightWings.castShadow=true;
scene.add(flockBodies,flockLeftWings,flockRightWings);

const flockBirds=[];
for(let i=0;i<FLOCK.count;i++){
  const a=(i/FLOCK.count)*Math.PI*2+((i*37)%11)*.041;
  const r=1.0+((i*53)%7)*.18;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.22;
  flockBirds.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(5.0+(i%4)*.72),
    ez:pz+Math.sin(escapeA)*(5.0+(i%4)*.72),
    rise:2.8+(i%5)*.42,
    phase:i*.83,
    yaw:escapeA
  });
}

let flockState='CALM',flockStateStart=performance.now(),flockFarSince=0,flockResponses=0;
const bodyObj=new THREE.Object3D(),leftObj=new THREE.Object3D(),rightObj=new THREE.Object3D();
const worldStateEl=document.getElementById('worldState');
const worldDistanceEl=document.getElementById('worldDistance');
const worldResultEl=document.getElementById('worldResult');

function flockEaseOut(p){return 1-Math.pow(1-p,3);}
function flockEaseInOut(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function flockDistance(){return Math.hypot(playerRoot.position.x-flockCenterX,playerRoot.position.z-flockCenterZ);}
function setFlockState(next,now){
  flockState=next;flockStateStart=now;flockFarSince=0;
  if(worldStateEl){worldStateEl.textContent=next;worldStateEl.style.color=next==='CALM'?'#a8f0b5':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function updateFlockHud(dist){
  if(worldDistanceEl)worldDistanceEl.textContent=dist.toFixed(1)+' m';
  if(worldResultEl&&flockResponses===0)worldResultEl.textContent=dist<=FLOCK.triggerRadius?'TRIGGERING':'APPROACH';
}
function birdPose(b,i,now){
  const calmX=flockCenterX+b.px,calmZ=flockCenterZ+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=flockCenterX+b.ex,destZ=flockCenterZ+b.ez,destY=flockCenterY+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-flockStateStart;
  if(flockState==='CALM'){
    y+=Math.sin(now*.0021+b.phase)*.022;
    yaw=b.phase*.37+Math.sin(now*.0007+b.phase)*.18;
  }else if(flockState==='FLEEING'){
    const p=Math.min(1,elapsed/FLOCK.fleeMs),e=flockEaseOut(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.75;
    flight=1;
  }else if(flockState==='DISPERSED'){
    const t=now*.0014+b.phase;
    x=destX+Math.cos(t)*.45;z=destZ+Math.sin(t)*.45;y=destY+Math.sin(t*1.8)*.18;
    yaw=t+Math.PI/2;flight=1;
  }else if(flockState==='RETURNING'){
    const p=Math.min(1,elapsed/FLOCK.returnMs),e=flockEaseInOut(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.92;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.020+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  bodyObj.position.set(x,y,z);bodyObj.rotation.set(0,yaw,0);bodyObj.scale.set(.88,.58,1.45);bodyObj.updateMatrix();flockBodies.setMatrixAt(i,bodyObj.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  leftObj.position.set(x+sx*.13,y+.015,z+sz*.13);leftObj.rotation.set(-Math.PI/2,yaw,flap);leftObj.scale.set(1,1,1);leftObj.updateMatrix();flockLeftWings.setMatrixAt(i,leftObj.matrix);
  rightObj.position.set(x-sx*.13,y+.015,z-sz*.13);rightObj.rotation.set(-Math.PI/2,yaw,-flap);rightObj.scale.set(1,1,1);rightObj.updateMatrix();flockRightWings.setMatrixAt(i,rightObj.matrix);
}
function updateLivingWorld06A(now){
  const dist=flockDistance();updateFlockHud(dist);
  if(flockState==='CALM'&&dist<=FLOCK.triggerRadius){
    flockResponses++;setFlockState('FLEEING',now);
    if(worldResultEl){worldResultEl.textContent='RESPONDED ✓';worldResultEl.style.color='#ffd18a';}
  }else if(flockState==='FLEEING'&&now-flockStateStart>=FLOCK.fleeMs){
    setFlockState('DISPERSED',now);
  }else if(flockState==='DISPERSED'){
    if(dist>FLOCK.resetRadius){
      if(!flockFarSince)flockFarSince=now;
      if(now-flockFarSince>=FLOCK.farHoldMs)setFlockState('RETURNING',now);
    }else flockFarSince=0;
  }else if(flockState==='RETURNING'){
    if(dist<=FLOCK.triggerRadius){setFlockState('FLEEING',now);}
    else if(now-flockStateStart>=FLOCK.returnMs)setFlockState('CALM',now);
  }
  for(let i=0;i<flockBirds.length;i++)birdPose(flockBirds[i],i,now);
  flockBodies.instanceMatrix.needsUpdate=true;flockLeftWings.instanceMatrix.needsUpdate=true;flockRightWings.instanceMatrix.needsUpdate=true;
}
function livingWorld06ALoop(now){requestAnimationFrame(livingWorld06ALoop);updateLivingWorld06A(now);}
requestAnimationFrame(livingWorld06ALoop);

globalThis.__livingWorld06A={
  marker:LIVING_WORLD_06A_MARKER,
  get state(){return flockState;},
  get responses(){return flockResponses;},
  get distance(){return flockDistance();},
  triggerRadius:FLOCK.triggerRadius,
  resetRadius:FLOCK.resetRadius
};
