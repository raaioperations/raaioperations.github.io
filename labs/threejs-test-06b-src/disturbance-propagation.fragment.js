
// ---- Test 06B: Living World — deterministic actor-to-actor disturbance propagation ----
const LIVING_WORLD_06B_MARKER='06B_WORLD_DISTURBANCE_PROPAGATION';
const PROPAGATION_06B={secondaryCount:10,disturbanceSpeed:18.0,fleeMs:1250,returnMs:1350,farHoldMs:1200};

// 06A remains frozen. 06B observes only the stable exported 06A public state and never reaches
// into 06A private flock internals. This adapter is the prototype boundary for a future WorldEventBus.
const primaryApi=globalThis.__livingWorld06A;
if(!primaryApi||primaryApi.marker!=='06A_LIVING_WORLD_FLOCK')throw new Error('06B requires accepted 06A public world-state API');

const spawnYaw06B=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06B=playerRoot.position.x,spawnZ06B=playerRoot.position.z;
const fwdX06B=Math.sin(spawnYaw06B),fwdZ06B=Math.cos(spawnYaw06B);
const rightX06B=Math.cos(spawnYaw06B),rightZ06B=-Math.sin(spawnYaw06B);
const primaryApproxX06B=spawnX06B+fwdX06B*8.0;
const primaryApproxZ06B=spawnZ06B+fwdZ06B*8.0;
const secondaryCenterX06B=spawnX06B+fwdX06B*15.5+rightX06B*4.5;
const secondaryCenterZ06B=spawnZ06B+fwdZ06B*15.5+rightZ06B*4.5;
const secondaryCenterY06B=groundHeight(secondaryCenterX06B,secondaryCenterZ06B)+0.18;
const propagationDistance06B=Math.hypot(secondaryCenterX06B-primaryApproxX06B,secondaryCenterZ06B-primaryApproxZ06B);
const propagationTravelMs06B=(propagationDistance06B/PROPAGATION_06B.disturbanceSpeed)*1000;

const secondaryBodyGeo06B=new THREE.SphereGeometry(.12,7,5);
const secondaryWingGeo06B=new THREE.PlaneGeometry(.26,.10);
const secondaryBodyMat06B=new THREE.MeshStandardMaterial({color:0x34454d,roughness:.78,metalness:.03});
const secondaryWingMat06B=new THREE.MeshStandardMaterial({color:0x86a1a8,roughness:.82,side:THREE.DoubleSide});
const secondaryBodies06B=new THREE.InstancedMesh(secondaryBodyGeo06B,secondaryBodyMat06B,PROPAGATION_06B.secondaryCount);
const secondaryLeftWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
const secondaryRightWings06B=new THREE.InstancedMesh(secondaryWingGeo06B,secondaryWingMat06B,PROPAGATION_06B.secondaryCount);
secondaryBodies06B.castShadow=true;secondaryLeftWings06B.castShadow=true;secondaryRightWings06B.castShadow=true;
scene.add(secondaryBodies06B,secondaryLeftWings06B,secondaryRightWings06B);

const secondaryBirds06B=[];
for(let i=0;i<PROPAGATION_06B.secondaryCount;i++){
  const a=(i/PROPAGATION_06B.secondaryCount)*Math.PI*2+((i*29)%9)*.047;
  const r=.85+((i*41)%6)*.19;
  const px=Math.cos(a)*r,pz=Math.sin(a)*r;
  const escapeA=a+((i%3)-1)*.18+.12;
  secondaryBirds06B.push({
    px,pz,
    ex:px+Math.cos(escapeA)*(4.7+(i%4)*.66),
    ez:pz+Math.sin(escapeA)*(4.7+(i%4)*.66),
    rise:2.5+(i%4)*.46,
    phase:i*.91,
    yaw:escapeA
  });
}

const secondaryBodyObj06B=new THREE.Object3D(),secondaryLeftObj06B=new THREE.Object3D(),secondaryRightObj06B=new THREE.Object3D();
let secondaryState06B='CALM',secondaryStateStart06B=performance.now(),secondaryResponses06B=0;
let primaryPrevState06B=primaryApi.state,disturbance06B=null,disturbanceEvents06B=0;

const secondaryStateEl06B=document.getElementById('worldBState');
const propagationStateEl06B=document.getElementById('worldLinkState');
const propagationDelayEl06B=document.getElementById('worldLinkDelay');
const secondaryDistanceEl06B=document.getElementById('worldBDistance');

function easeOut06B(p){return 1-Math.pow(1-p,3);}
function easeInOut06B(p){return p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;}
function playerToSecondaryDistance06B(){return Math.hypot(playerRoot.position.x-secondaryCenterX06B,playerRoot.position.z-secondaryCenterZ06B);}
function setSecondaryState06B(next,now){
  secondaryState06B=next;secondaryStateStart06B=now;
  if(secondaryStateEl06B){secondaryStateEl06B.textContent=next;secondaryStateEl06B.style.color=next==='CALM'?'#a8f0b5':next==='ALERT_DELAY'?'#ffe59a':next==='FLEEING'?'#ffd18a':next==='DISPERSED'?'#ffb095':'#b9d9ff';}
}
function setLinkState06B(text,color='#a8f0b5'){
  if(propagationStateEl06B){propagationStateEl06B.textContent=text;propagationStateEl06B.style.color=color;}
}
function emitDisturbance06B(now){
  disturbanceEvents06B++;
  disturbance06B={emittedAt:now,arrivalAt:now+propagationTravelMs06B,id:disturbanceEvents06B};
  if(secondaryState06B==='CALM'||secondaryState06B==='RETURNING')setSecondaryState06B('ALERT_DELAY',now);
  setLinkState06B('TRAVELING','#ffe59a');
  if(propagationDelayEl06B)propagationDelayEl06B.textContent=Math.round(propagationTravelMs06B)+' ms';
}
function poseSecondaryBird06B(b,i,now){
  const calmX=secondaryCenterX06B+b.px,calmZ=secondaryCenterZ06B+b.pz,calmY=groundHeight(calmX,calmZ)+.22;
  const destX=secondaryCenterX06B+b.ex,destZ=secondaryCenterZ06B+b.ez,destY=secondaryCenterY06B+b.rise;
  let x=calmX,y=calmY,z=calmZ,yaw=b.yaw,flight=0;
  const elapsed=now-secondaryStateStart06B;
  if(secondaryState06B==='CALM'||secondaryState06B==='ALERT_DELAY'){
    y+=Math.sin(now*.002+b.phase)*.021;
    yaw=b.phase*.34+Math.sin(now*.00072+b.phase)*.16;
    if(secondaryState06B==='ALERT_DELAY')y+=Math.sin(now*.014+b.phase)*.025;
  }else if(secondaryState06B==='FLEEING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.fleeMs),e=easeOut06B(p);
    x=THREE.MathUtils.lerp(calmX,destX,e);z=THREE.MathUtils.lerp(calmZ,destZ,e);
    y=THREE.MathUtils.lerp(calmY,destY,e)+Math.sin(p*Math.PI)*.68;
    flight=1;
  }else if(secondaryState06B==='DISPERSED'){
    const t=now*.00135+b.phase;
    x=destX+Math.cos(t)*.40;z=destZ+Math.sin(t)*.40;y=destY+Math.sin(t*1.75)*.16;
    yaw=t+Math.PI/2;flight=1;
  }else if(secondaryState06B==='RETURNING'){
    const p=Math.min(1,elapsed/PROPAGATION_06B.returnMs),e=easeInOut06B(p);
    x=THREE.MathUtils.lerp(destX,calmX,e);z=THREE.MathUtils.lerp(destZ,calmZ,e);
    y=THREE.MathUtils.lerp(destY,calmY,e)+Math.sin(p*Math.PI)*.78;
    yaw=b.yaw+Math.PI;flight=1;
  }
  const flap=flight?Math.sin(now*.0205+b.phase)*.72:Math.sin(now*.006+b.phase)*.08;
  secondaryBodyObj06B.position.set(x,y,z);secondaryBodyObj06B.rotation.set(0,yaw,0);secondaryBodyObj06B.scale.set(.88,.58,1.45);secondaryBodyObj06B.updateMatrix();secondaryBodies06B.setMatrixAt(i,secondaryBodyObj06B.matrix);
  const sx=Math.cos(yaw),sz=-Math.sin(yaw);
  secondaryLeftObj06B.position.set(x+sx*.13,y+.015,z+sz*.13);secondaryLeftObj06B.rotation.set(-Math.PI/2,yaw,flap);secondaryLeftObj06B.scale.set(1,1,1);secondaryLeftObj06B.updateMatrix();secondaryLeftWings06B.setMatrixAt(i,secondaryLeftObj06B.matrix);
  secondaryRightObj06B.position.set(x-sx*.13,y+.015,z-sz*.13);secondaryRightObj06B.rotation.set(-Math.PI/2,yaw,-flap);secondaryRightObj06B.scale.set(1,1,1);secondaryRightObj06B.updateMatrix();secondaryRightWings06B.setMatrixAt(i,secondaryRightObj06B.matrix);
}
function updateLivingWorld06B(now){
  const primaryState=primaryApi.state;
  const distB=playerToSecondaryDistance06B();
  if(secondaryDistanceEl06B)secondaryDistanceEl06B.textContent=distB.toFixed(1)+' m';

  // World-to-world trigger: only a new primary CALM/RETURNING -> FLEEING transition emits the event.
  if(primaryState==='FLEEING'&&primaryPrevState06B!=='FLEEING')emitDisturbance06B(now);
  primaryPrevState06B=primaryState;

  if(disturbance06B&&now>=disturbance06B.arrivalAt){
    disturbance06B=null;
    secondaryResponses06B++;
    setSecondaryState06B('FLEEING',now);
    setLinkState06B('ARRIVED ✓','#ffd18a');
  }

  if(secondaryState06B==='FLEEING'&&now-secondaryStateStart06B>=PROPAGATION_06B.fleeMs){
    setSecondaryState06B('DISPERSED',now);
  }else if(secondaryState06B==='DISPERSED'&&(primaryState==='RETURNING'||primaryState==='CALM')){
    setSecondaryState06B('RETURNING',now);
    setLinkState06B('RESETTING','#b9d9ff');
  }else if(secondaryState06B==='RETURNING'){
    if(disturbance06B){setSecondaryState06B('ALERT_DELAY',now);}
    else if(now-secondaryStateStart06B>=PROPAGATION_06B.returnMs){setSecondaryState06B('CALM',now);setLinkState06B('IDLE');}
  }

  for(let i=0;i<secondaryBirds06B.length;i++)poseSecondaryBird06B(secondaryBirds06B[i],i,now);
  secondaryBodies06B.instanceMatrix.needsUpdate=true;secondaryLeftWings06B.instanceMatrix.needsUpdate=true;secondaryRightWings06B.instanceMatrix.needsUpdate=true;
}
function livingWorld06BLoop(now){requestAnimationFrame(livingWorld06BLoop);updateLivingWorld06B(now);}
requestAnimationFrame(livingWorld06BLoop);

globalThis.__livingWorld06B={
  marker:LIVING_WORLD_06B_MARKER,
  get secondaryState(){return secondaryState06B;},
  get secondaryResponses(){return secondaryResponses06B;},
  get disturbanceEvents(){return disturbanceEvents06B;},
  get disturbanceTravelMs(){return propagationTravelMs06B;},
  get playerDistanceToSecondary(){return playerToSecondaryDistance06B();},
  directPlayerTrigger:false,
  source:'06A primary flock state transition'
};
