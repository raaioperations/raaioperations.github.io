
// ---- Test 06G: Living World — interrupted goal recovery ----
const LIVING_WORLD_06G_MARKER='06G_INTERRUPTED_GOAL_RECOVERY';
const RECOVERY_06G={
  preGoalTravelMs:6200,
  preGoalCap:0.34,
  evadeTravelMs:1450,
  recoverHoldMs:450,
  resumeTravelMs:3000,
  evadeOffsetM:3.0,
  directPlayerTrigger:false
};

const memoryApi06G=globalThis.__livingWorld06C;
const arbApi06G=globalThis.__livingWorld06F;
if(!memoryApi06G||memoryApi06G.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06G requires frozen accepted 06C memory API');
if(!arbApi06G||arbApi06G.marker!=='06F_STIMULUS_PRIORITY_ARBITRATION')throw new Error('06G requires frozen accepted 06F arbitration API');

const spawnYaw06G=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06G=playerRoot.position.x,spawnZ06G=playerRoot.position.z;
const fwdX06G=Math.sin(spawnYaw06G),fwdZ06G=Math.cos(spawnYaw06G);
const rightX06G=Math.cos(spawnYaw06G),rightZ06G=-Math.sin(spawnYaw06G);

const memoryCenterX06G=spawnX06G+fwdX06G*15.7+rightX06G*6.2;
const memoryCenterZ06G=spawnZ06G+fwdZ06G*15.7+rightZ06G*6.2;
const goalStartX06G=memoryCenterX06G-rightX06G*4.4+fwdX06G*.9;
const goalStartZ06G=memoryCenterZ06G-rightZ06G*4.4+fwdZ06G*.9;
const foodX06G=memoryCenterX06G+rightX06G*4.0+fwdX06G*.8;
const foodZ06G=memoryCenterZ06G+rightZ06G*4.0+fwdZ06G*.8;
const evadeX06G=memoryCenterX06G-fwdX06G*RECOVERY_06G.evadeOffsetM-rightX06G*1.2;
const evadeZ06G=memoryCenterZ06G-fwdZ06G*RECOVERY_06G.evadeOffsetM-rightZ06G*1.2;

// Teal forager = continuity subject. It has an active food goal before any disturbance occurs.
const recoveryRoot06G=new THREE.Group();
scene.add(recoveryRoot06G);
const recoveryBodyGeo06G=new THREE.DodecahedronGeometry(.5,1);
const recoveryEarGeo06G=new THREE.ConeGeometry(.115,.55,7);
const recoveryBodyMat06G=new THREE.MeshStandardMaterial({color:0x3f8f88,roughness:.9,metalness:0});
const recoveryEarMat06G=new THREE.MeshStandardMaterial({color:0x34766f,roughness:.92,metalness:0});
const recoveryBodies06G=new THREE.InstancedMesh(recoveryBodyGeo06G,recoveryBodyMat06G,5);
const recoveryEars06G=new THREE.InstancedMesh(recoveryEarGeo06G,recoveryEarMat06G,2);
recoveryBodies06G.castShadow=true;recoveryEars06G.castShadow=true;
recoveryBodies06G.frustumCulled=false;recoveryEars06G.frustumCulled=false;
recoveryRoot06G.add(recoveryBodies06G,recoveryEars06G);

const recoveryPart06G=new THREE.Object3D();
function setRecoveryPart06G(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  recoveryPart06G.position.set(x,y,z);recoveryPart06G.scale.set(sx,sy,sz);recoveryPart06G.rotation.set(rx,ry,rz);recoveryPart06G.updateMatrix();mesh.setMatrixAt(index,recoveryPart06G.matrix);
}
setRecoveryPart06G(recoveryBodies06G,0,0,.42,0,.72,.55,1.08);
setRecoveryPart06G(recoveryBodies06G,1,0,.62,.50,.48,.48,.48);
setRecoveryPart06G(recoveryBodies06G,2,-.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,3,.33,.25,-.20,.32,.34,.38);
setRecoveryPart06G(recoveryBodies06G,4,0,.48,-.60,.25,.25,.25);
setRecoveryPart06G(recoveryEars06G,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setRecoveryPart06G(recoveryEars06G,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
recoveryBodies06G.instanceMatrix.needsUpdate=true;recoveryEars06G.instanceMatrix.needsUpdate=true;

// Separate visible food patch for the continuity actor.
const recoveryFoodGeo06G=new THREE.SphereGeometry(.13,7,5);
const recoveryFoodMat06G=new THREE.MeshStandardMaterial({color:0x7fbf54,roughness:.86,metalness:0});
const recoveryFood06G=new THREE.InstancedMesh(recoveryFoodGeo06G,recoveryFoodMat06G,7);
recoveryFood06G.frustumCulled=false;
const recoveryFoodPart06G=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06G+Math.cos(a)*r,z=foodZ06G+Math.sin(a)*r;
  recoveryFoodPart06G.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  recoveryFoodPart06G.scale.set(1,1,1);recoveryFoodPart06G.updateMatrix();
  recoveryFood06G.setMatrixAt(i,recoveryFoodPart06G.matrix);
}
recoveryFood06G.instanceMatrix.needsUpdate=true;
scene.add(recoveryFood06G);

let recoveryState06G='SEEKING_FOOD';
let recoveryStateStart06G=performance.now();
let recoveryMemoryEventSeen06G=memoryApi06G.events;
let recoveryEvents06G=0;
let recoveryGoal06G='FOOD';
let recoverySuspendedGoal06G='NONE';
let recoveryInterrupt06G='NONE';
let recoveryX06G=goalStartX06G,recoveryZ06G=goalStartZ06G;
let recoveryPrevX06G=recoveryX06G,recoveryPrevZ06G=recoveryZ06G;
let interruptionStartX06G=goalStartX06G,interruptionStartZ06G=goalStartZ06G;
let resumeStartX06G=evadeX06G,resumeStartZ06G=evadeZ06G;
let recoveryClearSince06G=0;

const recoveryStateEl06G=document.getElementById('worldRecoveryState');
const recoveryGoalEl06G=document.getElementById('worldRecoveryGoal');
const recoverySuspendedEl06G=document.getElementById('worldRecoverySuspended');
const recoveryInterruptEl06G=document.getElementById('worldRecoveryInterrupt');
const recoveryResultEl06G=document.getElementById('worldRecoveryResult');

function setRecoveryState06G(next,now){
  recoveryState06G=next;recoveryStateStart06G=now;
  if(recoveryStateEl06G){
    recoveryStateEl06G.textContent=next;
    recoveryStateEl06G.style.color=next==='SEEKING_FOOD'?'#9fe0ff':next==='EVADING'?'#ffd18a':next==='WAIT_CLEAR'?'#ffe59a':next==='RESUMING_FOOD'?'#9fe0ff':'#a8f0b5';
  }
}
function setRecoveryGoal06G(goal){
  recoveryGoal06G=goal;
  if(recoveryGoalEl06G)recoveryGoalEl06G.textContent=goal;
}
function smoothRecovery06G(t){return t*t*(3-2*t);}
function updateRecoveryPose06G(now){
  const dx=recoveryX06G-recoveryPrevX06G,dz=recoveryZ06G-recoveryPrevZ06G;
  if(Math.hypot(dx,dz)>.00001)recoveryRoot06G.rotation.y=Math.atan2(dx,dz);
  const moving=recoveryState06G==='SEEKING_FOOD'||recoveryState06G==='EVADING'||recoveryState06G==='RESUMING_FOOD';
  const hop=moving?Math.max(0,Math.sin((now-recoveryStateStart06G)*.011))*0.11:0;
  recoveryRoot06G.position.set(recoveryX06G,groundHeight(recoveryX06G,recoveryZ06G)+.03+hop,recoveryZ06G);
  recoveryPrevX06G=recoveryX06G;recoveryPrevZ06G=recoveryZ06G;
}
function interruptFoodGoal06G(now){
  recoveryEvents06G++;
  interruptionStartX06G=recoveryX06G;interruptionStartZ06G=recoveryZ06G;
  recoverySuspendedGoal06G='FOOD';
  recoveryInterrupt06G='HAZARD';
  setRecoveryGoal06G('HAZARD');
  setRecoveryState06G('EVADING',now);
  if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='FOOD';recoverySuspendedEl06G.style.color='#ffe59a';}
  if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='HAZARD';recoveryInterruptEl06G.style.color='#ffd18a';}
  if(recoveryResultEl06G){recoveryResultEl06G.textContent='FOOD GOAL SUSPENDED';recoveryResultEl06G.style.color='#ffd18a';}
}
function updateLivingWorld06G(now){
  const memoryEvents=memoryApi06G.events;

  if(memoryEvents>recoveryMemoryEventSeen06G){
    recoveryMemoryEventSeen06G=memoryEvents;
    if(recoveryState06G==='SEEKING_FOOD')interruptFoodGoal06G(now);
  }

  if(recoveryState06G==='SEEKING_FOOD'){
    // Repeatable pre-hazard presentation: actor visibly pursues food but holds at 34% so the
    // goal cannot complete before the player triggers the living-world chain.
    const raw=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.preGoalTravelMs);
    const p=Math.min(RECOVERY_06G.preGoalCap,smoothRecovery06G(raw));
    recoveryX06G=THREE.MathUtils.lerp(goalStartX06G,foodX06G,p);
    recoveryZ06G=THREE.MathUtils.lerp(goalStartZ06G,foodZ06G,p);
  }else if(recoveryState06G==='EVADING'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.evadeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(interruptionStartX06G,evadeX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(interruptionStartZ06G,evadeZ06G,e);
    if(p>=1){
      recoveryX06G=evadeX06G;recoveryZ06G=evadeZ06G;
      setRecoveryState06G('WAIT_CLEAR',now);
      setRecoveryGoal06G('WAITING');
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='WAITING FOR HAZARD TO CLEAR';recoveryResultEl06G.style.color='#ffe59a';}
    }
  }else if(recoveryState06G==='WAIT_CLEAR'){
    if(memoryApi06G.state==='CALM'){
      if(!recoveryClearSince06G)recoveryClearSince06G=now;
      if(now-recoveryClearSince06G>=RECOVERY_06G.recoverHoldMs){
        resumeStartX06G=recoveryX06G;resumeStartZ06G=recoveryZ06G;
        recoverySuspendedGoal06G='NONE';
        setRecoveryGoal06G('FOOD');
        setRecoveryState06G('RESUMING_FOOD',now);
        if(recoverySuspendedEl06G){recoverySuspendedEl06G.textContent='NONE';recoverySuspendedEl06G.style.color='#a8f0b5';}
        if(recoveryResultEl06G){recoveryResultEl06G.textContent='RESUMING ORIGINAL FOOD GOAL';recoveryResultEl06G.style.color='#9fe0ff';}
      }
    }else recoveryClearSince06G=0;
  }else if(recoveryState06G==='RESUMING_FOOD'){
    const p=Math.min(1,(now-recoveryStateStart06G)/RECOVERY_06G.resumeTravelMs),e=smoothRecovery06G(p);
    recoveryX06G=THREE.MathUtils.lerp(resumeStartX06G,foodX06G,e);
    recoveryZ06G=THREE.MathUtils.lerp(resumeStartZ06G,foodZ06G,e);
    if(p>=1){
      recoveryX06G=foodX06G;recoveryZ06G=foodZ06G;
      setRecoveryState06G('COMPLETE',now);
      setRecoveryGoal06G('FOOD REACHED');
      if(recoveryInterruptEl06G){recoveryInterruptEl06G.textContent='RESOLVED';recoveryInterruptEl06G.style.color='#a8f0b5';}
      if(recoveryResultEl06G){recoveryResultEl06G.textContent='INTERRUPT → RECOVER → RESUME ✓';recoveryResultEl06G.style.color='#a8f0b5';}
    }
  }

  updateRecoveryPose06G(now);
}
function livingWorld06GLoop(now){
  requestAnimationFrame(livingWorld06GLoop);
  updateLivingWorld06G(now);
}
requestAnimationFrame(livingWorld06GLoop);

globalThis.__livingWorld06G={
  marker:LIVING_WORLD_06G_MARKER,
  get state(){return recoveryState06G;},
  get goal(){return recoveryGoal06G;},
  get suspendedGoal(){return recoverySuspendedGoal06G;},
  get interrupt(){return recoveryInterrupt06G;},
  get events(){return recoveryEvents06G;},
  directPlayerTrigger:false,
  originalGoal:'FOOD',
  interruption:'HAZARD',
  rule:'suspend original goal, resolve higher-priority interruption, resume original goal when valid'
};
