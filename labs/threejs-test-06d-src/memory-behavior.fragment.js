
// ---- Test 06D: Living World — memory-informed autonomous route choice ----
const LIVING_WORLD_06D_MARKER='06D_MEMORY_INFORMS_ACTOR_BEHAVIOR';
const BEHAVIOR_06D={
  arrivalDelayMs:1800,
  avoidTravelMs:2450,
  calmHoldMs:550,
  directReturnMs:2500,
  detourOffsetM:2.8,
  directPlayerTrigger:false
};

const memoryApi06D=globalThis.__livingWorld06C;
if(!memoryApi06D||memoryApi06D.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06D requires frozen accepted 06C public world-memory API');

const spawnYaw06D=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06D=playerRoot.position.x,spawnZ06D=playerRoot.position.z;
const fwdX06D=Math.sin(spawnYaw06D),fwdZ06D=Math.cos(spawnYaw06D);
const rightX06D=Math.cos(spawnYaw06D),rightZ06D=-Math.sin(spawnYaw06D);

// Reconstruct the accepted 06C reed-patch center from the same deterministic spawn frame.
const memoryCenterX06D=spawnX06D+fwdX06D*15.7+rightX06D*6.2;
const memoryCenterZ06D=spawnZ06D+fwdZ06D*15.7+rightZ06D*6.2;
const routeStartX06D=memoryCenterX06D-rightX06D*3.4;
const routeStartZ06D=memoryCenterZ06D-rightZ06D*3.4;
const routeEndX06D=memoryCenterX06D+rightX06D*3.4;
const routeEndZ06D=memoryCenterZ06D+rightZ06D*3.4;
const detourX06D=memoryCenterX06D+fwdX06D*BEHAVIOR_06D.detourOffsetM;
const detourZ06D=memoryCenterZ06D+fwdZ06D*BEHAVIOR_06D.detourOffsetM;

// A tiny stylized hare/forager built from two instanced geometry families: rounded body parts + ears.
// It is a world actor, not a UI marker, and it has no direct player-proximity behavior.
const foragerRoot06D=new THREE.Group();
scene.add(foragerRoot06D);
const foragerBodyGeo06D=new THREE.DodecahedronGeometry(.5,1);
const foragerEarGeo06D=new THREE.ConeGeometry(.115,.55,7);
const foragerBodyMat06D=new THREE.MeshStandardMaterial({color:0x8a6547,roughness:.9,metalness:0});
const foragerEarMat06D=new THREE.MeshStandardMaterial({color:0x76523d,roughness:.92,metalness:0});
const foragerBodies06D=new THREE.InstancedMesh(foragerBodyGeo06D,foragerBodyMat06D,5);
const foragerEars06D=new THREE.InstancedMesh(foragerEarGeo06D,foragerEarMat06D,2);
foragerBodies06D.castShadow=true;foragerEars06D.castShadow=true;
foragerBodies06D.frustumCulled=false;foragerEars06D.frustumCulled=false;
foragerRoot06D.add(foragerBodies06D,foragerEars06D);

const partObj06D=new THREE.Object3D();
function setForagerPart06D(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  partObj06D.position.set(x,y,z);
  partObj06D.scale.set(sx,sy,sz);
  partObj06D.rotation.set(rx,ry,rz);
  partObj06D.updateMatrix();
  mesh.setMatrixAt(index,partObj06D.matrix);
}
setForagerPart06D(foragerBodies06D,0,0,.42,0,.72,.55,1.08);        // body
setForagerPart06D(foragerBodies06D,1,0,.62,.50,.48,.48,.48);       // head
setForagerPart06D(foragerBodies06D,2,-.33,.25,-.20,.32,.34,.38);   // hind leg L
setForagerPart06D(foragerBodies06D,3,.33,.25,-.20,.32,.34,.38);    // hind leg R
setForagerPart06D(foragerBodies06D,4,0,.48,-.60,.25,.25,.25);      // tail
setForagerPart06D(foragerEars06D,0,-.16,1.08,.49,.72,1.0,.72,-.10,0,-.08);
setForagerPart06D(foragerEars06D,1,.16,1.08,.49,.72,1.0,.72,-.10,0,.08);
foragerBodies06D.instanceMatrix.needsUpdate=true;
foragerEars06D.instanceMatrix.needsUpdate=true;

let behaviorState06D='WAITING';
let behaviorStateStart06D=performance.now();
let behaviorEvents06D=0;
let memoryEventSeen06D=memoryApi06D.events;
let routeChoice06D='NONE';
let directReturnEligibleAt06D=0;
let currentX06D=routeStartX06D,currentZ06D=routeStartZ06D;
let lastX06D=currentX06D,lastZ06D=currentZ06D;

const behaviorStateEl06D=document.getElementById('worldBehaviorState');
const routeChoiceEl06D=document.getElementById('worldRouteChoice');
const behaviorResultEl06D=document.getElementById('worldBehaviorResult');

function setBehaviorState06D(next,now){
  behaviorState06D=next;
  behaviorStateStart06D=now;
  if(behaviorStateEl06D){
    behaviorStateEl06D.textContent=next;
    behaviorStateEl06D.style.color=next==='WAITING'?'#d6d6d6':next==='AVOIDING'?'#ffd18a':next==='HOLDING'?'#ffe59a':next==='DIRECT_RETURN'?'#9fe0ff':'#a8f0b5';
  }
}
function setRouteChoice06D(choice,text,color){
  routeChoice06D=choice;
  if(routeChoiceEl06D){routeChoiceEl06D.textContent=text;routeChoiceEl06D.style.color=color;}
}
function bezier2_06D(a,b,c,t){
  const u=1-t;
  return u*u*a+2*u*t*b+t*t*c;
}
function smooth06D(t){return t*t*(3-2*t);}
function startAvoidance06D(now){
  behaviorEvents06D++;
  setBehaviorState06D('AVOIDING',now);
  setRouteChoice06D('MEMORY_DETOUR','DETOUR: MEMORY','#ffd18a');
  if(behaviorResultEl06D){behaviorResultEl06D.textContent='MEMORY CHANGED ROUTE ✓';behaviorResultEl06D.style.color='#ffd18a';}
}
function updateForagerPose06D(now){
  const dx=currentX06D-lastX06D,dz=currentZ06D-lastZ06D;
  const moving=Math.hypot(dx,dz)>.00001;
  let yaw=foragerRoot06D.rotation.y;
  if(moving)yaw=Math.atan2(dx,dz);
  const hop=(behaviorState06D==='AVOIDING'||behaviorState06D==='DIRECT_RETURN')?Math.max(0,Math.sin((now-behaviorStateStart06D)*.011))*0.12:0;
  const y=groundHeight(currentX06D,currentZ06D)+.03+hop;
  foragerRoot06D.position.set(currentX06D,y,currentZ06D);
  foragerRoot06D.rotation.y=yaw;
  lastX06D=currentX06D;lastZ06D=currentZ06D;
}
function updateLivingWorld06D(now){
  const memoryEvents=memoryApi06D.events;

  // A new accepted 06C memory event starts a delayed actor arrival. The actor intentionally
  // does not react to the birds directly; it arrives late and queries the surviving world state.
  if(memoryEvents>memoryEventSeen06D){
    memoryEventSeen06D=memoryEvents;
    currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
    setBehaviorState06D('ARRIVAL_DELAY',now);
    setRouteChoice06D('PENDING','READING WORLD…','#ffe59a');
    if(behaviorResultEl06D)behaviorResultEl06D.textContent='LATE ACTOR INBOUND';
  }

  if(behaviorState06D==='ARRIVAL_DELAY'&&now-behaviorStateStart06D>=BEHAVIOR_06D.arrivalDelayMs){
    // This is the test: route selection depends on persistent memory at arrival time, not on
    // the original bird event. Under frozen 06C timings this should select the detour.
    if(memoryApi06D.state!=='CALM')startAvoidance06D(now);
    else{
      setBehaviorState06D('DIRECT_RETURN',now);
      setRouteChoice06D('DIRECT','DIRECT: WORLD CLEAR','#9fe0ff');
    }
  }else if(behaviorState06D==='AVOIDING'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.avoidTravelMs),e=smooth06D(p);
    currentX06D=bezier2_06D(routeStartX06D,detourX06D,routeEndX06D,e);
    currentZ06D=bezier2_06D(routeStartZ06D,detourZ06D,routeEndZ06D,e);
    if(p>=1){
      currentX06D=routeEndX06D;currentZ06D=routeEndZ06D;
      setBehaviorState06D('HOLDING',now);
      directReturnEligibleAt06D=0;
      setRouteChoice06D('WAIT_FOR_CLEAR','WAITING FOR CLEAR','#ffe59a');
    }
  }else if(behaviorState06D==='HOLDING'){
    if(memoryApi06D.state==='CALM'){
      if(!directReturnEligibleAt06D)directReturnEligibleAt06D=now+BEHAVIOR_06D.calmHoldMs;
      if(now>=directReturnEligibleAt06D){
        setBehaviorState06D('DIRECT_RETURN',now);
        setRouteChoice06D('DIRECT','DIRECT: MEMORY CLEARED','#9fe0ff');
      }
    }else directReturnEligibleAt06D=0;
  }else if(behaviorState06D==='DIRECT_RETURN'){
    const p=Math.min(1,(now-behaviorStateStart06D)/BEHAVIOR_06D.directReturnMs),e=smooth06D(p);
    currentX06D=THREE.MathUtils.lerp(routeEndX06D,routeStartX06D,e);
    currentZ06D=THREE.MathUtils.lerp(routeEndZ06D,routeStartZ06D,e);
    if(p>=1){
      currentX06D=routeStartX06D;currentZ06D=routeStartZ06D;
      setBehaviorState06D('COMPLETE',now);
      setRouteChoice06D('PROVED','DETOUR THEN DIRECT ✓','#a8f0b5');
      if(behaviorResultEl06D){behaviorResultEl06D.textContent='WORLD STATE AFFECTED BEHAVIOR ✓';behaviorResultEl06D.style.color='#a8f0b5';}
    }
  }

  updateForagerPose06D(now);
}
function livingWorld06DLoop(now){
  requestAnimationFrame(livingWorld06DLoop);
  updateLivingWorld06D(now);
}
requestAnimationFrame(livingWorld06DLoop);

globalThis.__livingWorld06D={
  marker:LIVING_WORLD_06D_MARKER,
  get state(){return behaviorState06D;},
  get routeChoice(){return routeChoice06D;},
  get events(){return behaviorEvents06D;},
  directPlayerTrigger:false,
  reads:'06C persistent world-memory state',
  arrivalDelayMs:BEHAVIOR_06D.arrivalDelayMs,
  avoidTravelMs:BEHAVIOR_06D.avoidTravelMs,
  directReturnMs:BEHAVIOR_06D.directReturnMs
};
