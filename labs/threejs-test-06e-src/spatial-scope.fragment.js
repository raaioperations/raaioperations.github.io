
// ---- Test 06E: Living World — spatially scoped world memory ----
const LIVING_WORLD_06E_MARKER='06E_SPATIALLY_SCOPED_MEMORY';
const SPATIAL_06E={
  arrivalDelayMs:1800,
  travelMs:2450,
  memoryRadiusM:1.8,
  laneOffsetM:3.35,
  directPlayerTrigger:false
};

const memoryApi06E=globalThis.__livingWorld06C;
const behaviorApi06E=globalThis.__livingWorld06D;
if(!memoryApi06E||memoryApi06E.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06E requires frozen accepted 06C memory API');
if(!behaviorApi06E||behaviorApi06E.marker!=='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR')throw new Error('06E requires frozen accepted 06D behavior API');

const spawnYaw06E=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06E=playerRoot.position.x,spawnZ06E=playerRoot.position.z;
const fwdX06E=Math.sin(spawnYaw06E),fwdZ06E=Math.cos(spawnYaw06E);
const rightX06E=Math.cos(spawnYaw06E),rightZ06E=-Math.sin(spawnYaw06E);

const memoryCenterX06E=spawnX06E+fwdX06E*15.7+rightX06E*6.2;
const memoryCenterZ06E=spawnZ06E+fwdZ06E*15.7+rightZ06E*6.2;

// Control lane runs parallel to the accepted 06D path but outside the remembered location.
// It sees the same active memory state; only spatial overlap differs.
const controlLaneCenterX06E=memoryCenterX06E-fwdX06E*SPATIAL_06E.laneOffsetM;
const controlLaneCenterZ06E=memoryCenterZ06E-fwdZ06E*SPATIAL_06E.laneOffsetM;
const controlStartX06E=controlLaneCenterX06E-rightX06E*3.4;
const controlStartZ06E=controlLaneCenterZ06E-rightZ06E*3.4;
const controlEndX06E=controlLaneCenterX06E+rightX06E*3.4;
const controlEndZ06E=controlLaneCenterZ06E+rightZ06E*3.4;

function pointSegmentDistance06E(px,pz,ax,az,bx,bz){
  const abx=bx-ax,abz=bz-az;
  const denom=abx*abx+abz*abz;
  const t=denom>1e-9?THREE.MathUtils.clamp(((px-ax)*abx+(pz-az)*abz)/denom,0,1):0;
  const cx=ax+abx*t,cz=az+abz*t;
  return Math.hypot(px-cx,pz-cz);
}
const controlPathDistanceToMemory06E=pointSegmentDistance06E(
  memoryCenterX06E,memoryCenterZ06E,
  controlStartX06E,controlStartZ06E,
  controlEndX06E,controlEndZ06E
);

// A second stylized forager acts as the spatial control. Gray material distinguishes it
// from the accepted brown 06D forager without changing the accepted actor.
const controlRoot06E=new THREE.Group();
scene.add(controlRoot06E);
const controlBodyGeo06E=new THREE.DodecahedronGeometry(.5,1);
const controlEarGeo06E=new THREE.ConeGeometry(.115,.55,7);
const controlBodyMat06E=new THREE.MeshStandardMaterial({color:0x7c8385,roughness:.91,metalness:0});
const controlEarMat06E=new THREE.MeshStandardMaterial({color:0x666d70,roughness:.93,metalness:0});
const controlBodies06E=new THREE.InstancedMesh(controlBodyGeo06E,controlBodyMat06E,5);
const controlEars06E=new THREE.InstancedMesh(controlEarGeo06E,controlEarMat06E,2);
controlBodies06E.castShadow=true;controlEars06E.castShadow=true;
controlBodies06E.frustumCulled=false;controlEars06E.frustumCulled=false;
controlRoot06E.add(controlBodies06E,controlEars06E);

const controlPart06E=new THREE.Object3D();
function setControlPart06E(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  controlPart06E.position.set(x,y,z);
  controlPart06E.scale.set(sx,sy,sz);
  controlPart06E.rotation.set(rx,ry,rz);
  controlPart06E.updateMatrix();
  mesh.setMatrixAt(index,controlPart06E.matrix);
}
setControlPart06E(controlBodies06E,0,0,.42,0,.72,.55,1.08);
setControlPart06E(controlBodies06E,1,0,.62,.50,.48,.48,.48);
setControlPart06E(controlBodies06E,2,-.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,3,.33,.25,-.20,.32,.34,.38);
setControlPart06E(controlBodies06E,4,0,.48,-.60,.25,.25,.25);
setControlPart06E(controlEars06E,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setControlPart06E(controlEars06E,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
controlBodies06E.instanceMatrix.needsUpdate=true;
controlEars06E.instanceMatrix.needsUpdate=true;

let spatialState06E='WAITING';
let spatialStateStart06E=performance.now();
let spatialEvents06E=0;
let memoryEventSeen06E=memoryApi06E.events;
let spatialOverlap06E=false;
let spatialChoice06E='NONE';
let controlX06E=controlStartX06E,controlZ06E=controlStartZ06E;
let controlPrevX06E=controlX06E,controlPrevZ06E=controlZ06E;

const spatialStateEl06E=document.getElementById('worldSpatialState');
const spatialOverlapEl06E=document.getElementById('worldSpatialOverlap');
const spatialChoiceEl06E=document.getElementById('worldSpatialChoice');
const spatialResultEl06E=document.getElementById('worldSpatialResult');

function setSpatialState06E(next,now){
  spatialState06E=next;spatialStateStart06E=now;
  if(spatialStateEl06E){
    spatialStateEl06E.textContent=next;
    spatialStateEl06E.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='DIRECT'?'#9fe0ff':next==='AVOIDING'?'#ffd18a':'#a8f0b5';
  }
}
function setSpatialChoice06E(choice,text,color){
  spatialChoice06E=choice;
  if(spatialChoiceEl06E){spatialChoiceEl06E.textContent=text;spatialChoiceEl06E.style.color=color;}
}
function smoothSpatial06E(t){return t*t*(3-2*t);}
function updateControlPose06E(now){
  const dx=controlX06E-controlPrevX06E,dz=controlZ06E-controlPrevZ06E;
  if(Math.hypot(dx,dz)>.00001)controlRoot06E.rotation.y=Math.atan2(dx,dz);
  const moving=spatialState06E==='DIRECT'||spatialState06E==='AVOIDING';
  const hop=moving?Math.max(0,Math.sin((now-spatialStateStart06E)*.011))*0.11:0;
  controlRoot06E.position.set(controlX06E,groundHeight(controlX06E,controlZ06E)+.03+hop,controlZ06E);
  controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
}
function updateLivingWorld06E(now){
  const memoryEvents=memoryApi06E.events;

  if(memoryEvents>memoryEventSeen06E){
    memoryEventSeen06E=memoryEvents;
    spatialEvents06E++;
    controlX06E=controlStartX06E;controlZ06E=controlStartZ06E;
    controlPrevX06E=controlX06E;controlPrevZ06E=controlZ06E;
    setSpatialState06E('ARRIVAL_DELAY',now);
    setSpatialChoice06E('PENDING','SAME MEMORY · CHECKING SPACE','#ffe59a');
    if(spatialResultEl06E)spatialResultEl06E.textContent='CONTROL ACTOR INBOUND';
  }

  if(spatialState06E==='ARRIVAL_DELAY'&&now-spatialStateStart06E>=SPATIAL_06E.arrivalDelayMs){
    const memoryActive=memoryApi06E.state!=='CALM';
    spatialOverlap06E=controlPathDistanceToMemory06E<=SPATIAL_06E.memoryRadiusM;
    if(spatialOverlapEl06E){
      spatialOverlapEl06E.textContent=spatialOverlap06E?'YES':'NO';
      spatialOverlapEl06E.style.color=spatialOverlap06E?'#ffd18a':'#a8f0b5';
    }

    // Same active world memory, but no path overlap -> no behavioral effect.
    if(memoryActive&&spatialOverlap06E){
      setSpatialState06E('AVOIDING',now);
      setSpatialChoice06E('DETOUR','DETOUR: LOCAL MEMORY','#ffd18a');
    }else{
      setSpatialState06E('DIRECT',now);
      setSpatialChoice06E('DIRECT','DIRECT: OUTSIDE MEMORY','#9fe0ff');
      if(spatialResultEl06E){
        spatialResultEl06E.textContent=memoryActive?'MEMORY ACTIVE · ACTOR UNAFFECTED ✓':'WORLD CLEAR · DIRECT';
        spatialResultEl06E.style.color='#a8f0b5';
      }
    }
  }else if(spatialState06E==='DIRECT'){
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    controlX06E=THREE.MathUtils.lerp(controlStartX06E,controlEndX06E,e);
    controlZ06E=THREE.MathUtils.lerp(controlStartZ06E,controlEndZ06E,e);
    if(p>=1){
      controlX06E=controlEndX06E;controlZ06E=controlEndZ06E;
      setSpatialState06E('COMPLETE',now);
      setSpatialChoice06E('PROVED','LOCAL SCOPE ✓','#a8f0b5');
      if(spatialResultEl06E){spatialResultEl06E.textContent='SAME MEMORY · DIFFERENT LOCATION · NO EFFECT ✓';spatialResultEl06E.style.color='#a8f0b5';}
    }
  }else if(spatialState06E==='AVOIDING'){
    // Defensive path: should not occur for this control lane. If it does, verification remains
    // mechanically honest and the human review will clearly show the unexpected detour.
    const p=Math.min(1,(now-spatialStateStart06E)/SPATIAL_06E.travelMs),e=smoothSpatial06E(p);
    const midX=(controlStartX06E+controlEndX06E)*.5-fwdX06E*2.0;
    const midZ=(controlStartZ06E+controlEndZ06E)*.5-fwdZ06E*2.0;
    const u=1-e;
    controlX06E=u*u*controlStartX06E+2*u*e*midX+e*e*controlEndX06E;
    controlZ06E=u*u*controlStartZ06E+2*u*e*midZ+e*e*controlEndZ06E;
    if(p>=1)setSpatialState06E('COMPLETE',now);
  }

  updateControlPose06E(now);
}
function livingWorld06ELoop(now){
  requestAnimationFrame(livingWorld06ELoop);
  updateLivingWorld06E(now);
}
requestAnimationFrame(livingWorld06ELoop);

if(spatialOverlapEl06E)spatialOverlapEl06E.textContent='PENDING';

globalThis.__livingWorld06E={
  marker:LIVING_WORLD_06E_MARKER,
  get state(){return spatialState06E;},
  get overlap(){return spatialOverlap06E;},
  get choice(){return spatialChoice06E;},
  get events(){return spatialEvents06E;},
  directPlayerTrigger:false,
  memoryRadiusM:SPATIAL_06E.memoryRadiusM,
  controlPathDistanceToMemoryM:controlPathDistanceToMemory06E,
  expectedOverlap:false,
  reads:'same 06C memory state with spatial path query'
};
