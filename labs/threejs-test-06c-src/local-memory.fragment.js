
// ---- Test 06C: Living World — local disturbance memory ----
const LIVING_WORLD_06C_MARKER='06C_LOCAL_DISTURBANCE_MEMORY';
const MEMORY_06C={
  reedCount:28,
  disturbedMs:2300,
  settlingMs:2800,
  directPlayerTrigger:false
};

const secondaryApi06C=globalThis.__livingWorld06B;
if(!secondaryApi06C||secondaryApi06C.marker!=='06B_WORLD_DISTURBANCE_PROPAGATION')throw new Error('06C requires frozen accepted 06B public world-state API');

// Reconstruct the accepted 06B secondary-flock location from the same spawn frame without
// reaching into frozen 06B private internals.
const memorySpawnYaw06C=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const memorySpawnX06C=playerRoot.position.x,memorySpawnZ06C=playerRoot.position.z;
const memoryFwdX06C=Math.sin(memorySpawnYaw06C),memoryFwdZ06C=Math.cos(memorySpawnYaw06C);
const memoryRightX06C=Math.cos(memorySpawnYaw06C),memoryRightZ06C=-Math.sin(memorySpawnYaw06C);
const memorySecondaryX06C=memorySpawnX06C+memoryFwdX06C*15.5+memoryRightX06C*4.5;
const memorySecondaryZ06C=memorySpawnZ06C+memoryFwdZ06C*15.5+memoryRightZ06C*4.5;
const memoryCenterX06C=memorySpawnX06C+memoryFwdX06C*15.7+memoryRightX06C*6.2;
const memoryCenterZ06C=memorySpawnZ06C+memoryFwdZ06C*15.7+memoryRightZ06C*6.2;

// One natural world actor: a persistent reed patch. It is not player-triggered. The accepted
// Flock B takeoff is the only stimulus. The patch then holds and decays its own local state.
const memoryBladeGeo06C=new THREE.PlaneGeometry(.18,1.55,1,3);
memoryBladeGeo06C.translate(0,.775,0);
const memoryBladeMat06C=new THREE.MeshStandardMaterial({
  color:0x8f9a55,
  roughness:.96,
  metalness:0,
  side:THREE.DoubleSide
});
const memoryReeds06C=new THREE.InstancedMesh(memoryBladeGeo06C,memoryBladeMat06C,MEMORY_06C.reedCount);
memoryReeds06C.castShadow=true;
memoryReeds06C.receiveShadow=true;
// Dynamic instance transforms must remain visible through the entire memory cycle on mobile.
memoryReeds06C.frustumCulled=false;
scene.add(memoryReeds06C);

const memoryReedData06C=[];
for(let i=0;i<MEMORY_06C.reedCount;i++){
  const a=i*2.399963229728653;
  const ring=.35+(i%7)*.115;
  const px=Math.cos(a)*ring;
  const pz=Math.sin(a)*ring*.72;
  const scaleY=.76+((i*17)%9)*.035;
  const yaw=(i*.83)%Math.PI;
  memoryReedData06C.push({px,pz,scaleY,yaw,phase:i*.71});
}

let memoryState06C='CALM';
let memoryStateStart06C=performance.now();
let memoryEvents06C=0;
let memoryPrevSecondaryState06C=secondaryApi06C.secondaryState;
let memoryLastTrigger06C=0;

const memoryObj06C=new THREE.Object3D();
const memoryStateEl06C=document.getElementById('worldMemoryState');
const memoryAgeEl06C=document.getElementById('worldMemoryAge');
const memoryResultEl06C=document.getElementById('worldMemoryResult');

function setMemoryState06C(next,now){
  memoryState06C=next;
  memoryStateStart06C=now;
  if(memoryStateEl06C){
    memoryStateEl06C.textContent=next;
    memoryStateEl06C.style.color=next==='CALM'?'#a8f0b5':next==='DISTURBED'?'#ffd18a':'#b9d9ff';
  }
}
function triggerMemory06C(now){
  memoryEvents06C++;
  memoryLastTrigger06C=now;
  setMemoryState06C('DISTURBED',now);
  if(memoryResultEl06C){
    memoryResultEl06C.textContent='MEMORY ACTIVE ✓';
    memoryResultEl06C.style.color='#ffd18a';
  }
}
function memoryEnvelope06C(now,phase){
  const elapsed=now-memoryStateStart06C;
  if(memoryState06C==='DISTURBED'){
    const p=Math.min(1,elapsed/MEMORY_06C.disturbedMs);
    const hold=.34-.055*p;
    const ring=Math.sin(now*.012+phase)*.065;
    return hold+ring;
  }
  if(memoryState06C==='SETTLING'){
    const p=Math.min(1,elapsed/MEMORY_06C.settlingMs);
    const decay=1-p;
    return decay*(.27+.075*Math.sin(now*.010+phase));
  }
  return .018*Math.sin(now*.0018+phase);
}
function updateMemoryReeds06C(now){
  const dx=memoryCenterX06C-memorySecondaryX06C;
  const dz=memoryCenterZ06C-memorySecondaryZ06C;
  const len=Math.max(.0001,Math.hypot(dx,dz));
  const gustX=dx/len,gustZ=dz/len;

  for(let i=0;i<memoryReedData06C.length;i++){
    const b=memoryReedData06C[i];
    const x=memoryCenterX06C+b.px,z=memoryCenterZ06C+b.pz;
    const y=groundHeight(x,z)+.035;
    const mag=memoryEnvelope06C(now,b.phase);
    const variation=.82+((i*13)%7)*.045;
    const lean=mag*variation;
    memoryObj06C.position.set(x,y,z);
    memoryObj06C.rotation.set(gustZ*lean,b.yaw,-gustX*lean);
    memoryObj06C.scale.set(.8,b.scaleY,1);
    memoryObj06C.updateMatrix();
    memoryReeds06C.setMatrixAt(i,memoryObj06C.matrix);
  }
  memoryReeds06C.instanceMatrix.needsUpdate=true;
}
function updateLivingWorld06C(now){
  const secondaryState=secondaryApi06C.secondaryState;

  // The only trigger is the accepted Flock B transition into FLEEING.
  if(secondaryState==='FLEEING'&&memoryPrevSecondaryState06C!=='FLEEING')triggerMemory06C(now);
  memoryPrevSecondaryState06C=secondaryState;

  if(memoryState06C==='DISTURBED'&&now-memoryStateStart06C>=MEMORY_06C.disturbedMs){
    setMemoryState06C('SETTLING',now);
  }else if(memoryState06C==='SETTLING'&&now-memoryStateStart06C>=MEMORY_06C.settlingMs){
    setMemoryState06C('CALM',now);
    if(memoryResultEl06C)memoryResultEl06C.textContent='SETTLED';
  }

  if(memoryAgeEl06C){
    if(!memoryLastTrigger06C)memoryAgeEl06C.textContent='—';
    else memoryAgeEl06C.textContent=((now-memoryLastTrigger06C)/1000).toFixed(1)+' s';
  }

  updateMemoryReeds06C(now);
}
function livingWorld06CLoop(now){
  requestAnimationFrame(livingWorld06CLoop);
  updateLivingWorld06C(now);
}
requestAnimationFrame(livingWorld06CLoop);

globalThis.__livingWorld06C={
  marker:LIVING_WORLD_06C_MARKER,
  get state(){return memoryState06C;},
  get events(){return memoryEvents06C;},
  get ageMs(){return memoryLastTrigger06C?performance.now()-memoryLastTrigger06C:0;},
  disturbedMs:MEMORY_06C.disturbedMs,
  settlingMs:MEMORY_06C.settlingMs,
  directPlayerTrigger:false,
  source:'accepted 06B Flock B transition to FLEEING'
};
