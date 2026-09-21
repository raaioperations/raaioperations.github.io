
// ---- Test 06F: Living World — deterministic stimulus priority / arbitration ----
const LIVING_WORLD_06F_MARKER='06F_STIMULUS_PRIORITY_ARBITRATION';
const ARB_06F={
  arrivalDelayMs:1800,
  foodBecomesValidAfterMs:120,
  arbitrationDelayMs:180,
  hazardPriority:100,
  foodPriority:40,
  escapeTravelMs:2550,
  escapeOffsetM:3.2,
  directPlayerTrigger:false
};

const memoryApi06F=globalThis.__livingWorld06C;
const spatialApi06F=globalThis.__livingWorld06E;
if(!memoryApi06F||memoryApi06F.marker!=='06C_LOCAL_DISTURBANCE_MEMORY')throw new Error('06F requires frozen accepted 06C memory API');
if(!spatialApi06F||spatialApi06F.marker!=='06E_SPATIALLY_SCOPED_MEMORY')throw new Error('06F requires frozen accepted 06E spatial-memory API');

const spawnYaw06F=Number.isFinite(playerRoot.rotation.y)?playerRoot.rotation.y:0;
const spawnX06F=playerRoot.position.x,spawnZ06F=playerRoot.position.z;
const fwdX06F=Math.sin(spawnYaw06F),fwdZ06F=Math.cos(spawnYaw06F);
const rightX06F=Math.cos(spawnYaw06F),rightZ06F=-Math.sin(spawnYaw06F);

const memoryCenterX06F=spawnX06F+fwdX06F*15.7+rightX06F*6.2;
const memoryCenterZ06F=spawnZ06F+fwdZ06F*15.7+rightZ06F*6.2;

// Arbitration actor starts on a path that would normally cross the remembered location toward food.
const arbStartX06F=memoryCenterX06F-rightX06F*3.9-fwdX06F*.65;
const arbStartZ06F=memoryCenterZ06F-rightZ06F*3.9-fwdZ06F*.65;
const foodX06F=memoryCenterX06F+rightX06F*3.7;
const foodZ06F=memoryCenterZ06F+rightZ06F*3.7;
const escapeX06F=arbStartX06F-fwdX06F*ARB_06F.escapeOffsetM-rightX06F*.8;
const escapeZ06F=arbStartZ06F-fwdZ06F*ARB_06F.escapeOffsetM-rightZ06F*.8;

// Amber forager = the arbitration subject.
const arbRoot06F=new THREE.Group();
scene.add(arbRoot06F);
const arbBodyGeo06F=new THREE.DodecahedronGeometry(.5,1);
const arbEarGeo06F=new THREE.ConeGeometry(.115,.55,7);
const arbBodyMat06F=new THREE.MeshStandardMaterial({color:0xb97c37,roughness:.9,metalness:0});
const arbEarMat06F=new THREE.MeshStandardMaterial({color:0x9b642f,roughness:.92,metalness:0});
const arbBodies06F=new THREE.InstancedMesh(arbBodyGeo06F,arbBodyMat06F,5);
const arbEars06F=new THREE.InstancedMesh(arbEarGeo06F,arbEarMat06F,2);
arbBodies06F.castShadow=true;arbEars06F.castShadow=true;
arbBodies06F.frustumCulled=false;arbEars06F.frustumCulled=false;
arbRoot06F.add(arbBodies06F,arbEars06F);

const arbPart06F=new THREE.Object3D();
function setArbPart06F(mesh,index,x,y,z,sx,sy,sz,rx=0,ry=0,rz=0){
  arbPart06F.position.set(x,y,z);arbPart06F.scale.set(sx,sy,sz);arbPart06F.rotation.set(rx,ry,rz);arbPart06F.updateMatrix();mesh.setMatrixAt(index,arbPart06F.matrix);
}
setArbPart06F(arbBodies06F,0,0,.42,0,.72,.55,1.08);
setArbPart06F(arbBodies06F,1,0,.62,.50,.48,.48,.48);
setArbPart06F(arbBodies06F,2,-.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,3,.33,.25,-.20,.32,.34,.38);
setArbPart06F(arbBodies06F,4,0,.48,-.60,.25,.25,.25);
setArbPart06F(arbEars06F,0,-.16,1.08,.49,.72,1,.72,-.10,0,-.08);
setArbPart06F(arbEars06F,1,.16,1.08,.49,.72,1,.72,-.10,0,.08);
arbBodies06F.instanceMatrix.needsUpdate=true;arbEars06F.instanceMatrix.needsUpdate=true;

// Small visible food target beyond the remembered patch.
const foodGeo06F=new THREE.SphereGeometry(.13,7,5);
const foodMat06F=new THREE.MeshStandardMaterial({color:0x6e9d46,roughness:.86,metalness:0});
const foodMesh06F=new THREE.InstancedMesh(foodGeo06F,foodMat06F,7);
foodMesh06F.frustumCulled=false;
const foodPart06F=new THREE.Object3D();
for(let i=0;i<7;i++){
  const a=i*2.399963229728653,r=.12+(i%3)*.09;
  const x=foodX06F+Math.cos(a)*r,z=foodZ06F+Math.sin(a)*r;
  foodPart06F.position.set(x,groundHeight(x,z)+.12+(i%2)*.04,z);
  foodPart06F.scale.set(1,1,1);
  foodPart06F.updateMatrix();
  foodMesh06F.setMatrixAt(i,foodPart06F.matrix);
}
foodMesh06F.instanceMatrix.needsUpdate=true;
scene.add(foodMesh06F);

let arbState06F='WAITING';
let arbStateStart06F=performance.now();
let arbMemoryEventSeen06F=memoryApi06F.events;
let arbEvents06F=0;
let arbChoice06F='NONE';
let arbLastStimulus06F='NONE';
let arbHazardValid06F=false;
let arbFoodValid06F=false;
let arbFoodValidAt06F=0;
let arbDecisionAt06F=0;
let arbX06F=arbStartX06F,arbZ06F=arbStartZ06F;
let arbPrevX06F=arbX06F,arbPrevZ06F=arbZ06F;

const arbStateEl06F=document.getElementById('worldArbState');
const arbCandidatesEl06F=document.getElementById('worldArbCandidates');
const arbLastEl06F=document.getElementById('worldArbLast');
const arbWinnerEl06F=document.getElementById('worldArbWinner');
const arbResultEl06F=document.getElementById('worldArbResult');

function setArbState06F(next,now){
  arbState06F=next;arbStateStart06F=now;
  if(arbStateEl06F){
    arbStateEl06F.textContent=next;
    arbStateEl06F.style.color=next==='WAITING'?'#d6d6d6':next==='ARRIVAL_DELAY'?'#ffe59a':next==='ARBITRATING'?'#ffe59a':next==='ESCAPING'?'#ffd18a':'#a8f0b5';
  }
}
function setArbWinner06F(choice,text,color){
  arbChoice06F=choice;
  if(arbWinnerEl06F){arbWinnerEl06F.textContent=text;arbWinnerEl06F.style.color=color;}
}
function smoothArb06F(t){return t*t*(3-2*t);}
function updateArbPose06F(now){
  const dx=arbX06F-arbPrevX06F,dz=arbZ06F-arbPrevZ06F;
  if(Math.hypot(dx,dz)>.00001)arbRoot06F.rotation.y=Math.atan2(dx,dz);
  const moving=arbState06F==='ESCAPING';
  const hop=moving?Math.max(0,Math.sin((now-arbStateStart06F)*.012))*0.115:0;
  arbRoot06F.position.set(arbX06F,groundHeight(arbX06F,arbZ06F)+.03+hop,arbZ06F);
  arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
}
function beginArbitration06F(now){
  arbEvents06F++;
  arbX06F=arbStartX06F;arbZ06F=arbStartZ06F;arbPrevX06F=arbX06F;arbPrevZ06F=arbZ06F;
  arbHazardValid06F=false;arbFoodValid06F=false;
  arbLastStimulus06F='NONE';
  arbFoodValidAt06F=0;arbDecisionAt06F=0;
  setArbState06F('ARRIVAL_DELAY',now);
  setArbWinner06F('PENDING','PENDING','#ffe59a');
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent='WAITING';
  if(arbLastEl06F)arbLastEl06F.textContent='NONE';
  if(arbResultEl06F)arbResultEl06F.textContent='ACTOR INBOUND';
}
function chooseHighestPriority06F(now){
  const candidates=[];
  if(arbHazardValid06F)candidates.push({id:'HAZARD',priority:ARB_06F.hazardPriority});
  if(arbFoodValid06F)candidates.push({id:'FOOD',priority:ARB_06F.foodPriority});
  candidates.sort((a,b)=>b.priority-a.priority||a.id.localeCompare(b.id));
  const winner=candidates[0]?.id||'NONE';
  if(arbCandidatesEl06F)arbCandidatesEl06F.textContent=`HAZARD ${ARB_06F.hazardPriority} · FOOD ${ARB_06F.foodPriority}`;

  if(winner==='HAZARD'){
    setArbWinner06F('HAZARD','HAZARD 100','#ffd18a');
    setArbState06F('ESCAPING',now);
    if(arbResultEl06F){arbResultEl06F.textContent='NEWER FOOD LOST TO HIGHER PRIORITY ✓';arbResultEl06F.style.color='#a8f0b5';}
  }else if(winner==='FOOD'){
    setArbWinner06F('FOOD','FOOD 40','#9fe0ff');
    setArbState06F('COMPLETE',now);
    if(arbResultEl06F){arbResultEl06F.textContent='FOOD WON';arbResultEl06F.style.color='#9fe0ff';}
  }else{
    setArbWinner06F('NONE','NONE','#d6d6d6');
    setArbState06F('COMPLETE',now);
  }
}
function updateLivingWorld06F(now){
  const memoryEvents=memoryApi06F.events;

  if(memoryEvents>arbMemoryEventSeen06F){
    arbMemoryEventSeen06F=memoryEvents;
    beginArbitration06F(now);
  }

  if(arbState06F==='ARRIVAL_DELAY'&&now-arbStateStart06F>=ARB_06F.arrivalDelayMs){
    // Hazard is established first from persistent local memory.
    arbHazardValid06F=memoryApi06F.state!=='CALM';
    if(arbHazardValid06F){
      arbLastStimulus06F='HAZARD';
      if(arbLastEl06F)arbLastEl06F.textContent='HAZARD';
    }
    arbFoodValidAt06F=now+ARB_06F.foodBecomesValidAfterMs;
    arbDecisionAt06F=now+ARB_06F.arbitrationDelayMs;
    setArbState06F('ARBITRATING',now);
  }else if(arbState06F==='ARBITRATING'){
    // Food intentionally becomes valid later. A last-event system would therefore pick FOOD.
    if(!arbFoodValid06F&&now>=arbFoodValidAt06F){
      arbFoodValid06F=true;
      arbLastStimulus06F='FOOD';
      if(arbLastEl06F){arbLastEl06F.textContent='FOOD (NEWER)';arbLastEl06F.style.color='#9fe0ff';}
    }
    if(now>=arbDecisionAt06F)chooseHighestPriority06F(now);
  }else if(arbState06F==='ESCAPING'){
    const p=Math.min(1,(now-arbStateStart06F)/ARB_06F.escapeTravelMs),e=smoothArb06F(p);
    // Escape away from the remembered location instead of taking the direct food line.
    arbX06F=THREE.MathUtils.lerp(arbStartX06F,escapeX06F,e);
    arbZ06F=THREE.MathUtils.lerp(arbStartZ06F,escapeZ06F,e);
    if(p>=1){
      arbX06F=escapeX06F;arbZ06F=escapeZ06F;
      setArbState06F('COMPLETE',now);
      setArbWinner06F('PROVED','HAZARD WON ✓','#a8f0b5');
      if(arbResultEl06F){arbResultEl06F.textContent='PRIORITY > RECENCY ✓';arbResultEl06F.style.color='#a8f0b5';}
    }
  }

  updateArbPose06F(now);
}
function livingWorld06FLoop(now){
  requestAnimationFrame(livingWorld06FLoop);
  updateLivingWorld06F(now);
}
requestAnimationFrame(livingWorld06FLoop);

globalThis.__livingWorld06F={
  marker:LIVING_WORLD_06F_MARKER,
  get state(){return arbState06F;},
  get winner(){return arbChoice06F;},
  get lastStimulus(){return arbLastStimulus06F;},
  get events(){return arbEvents06F;},
  priorities:{hazard:ARB_06F.hazardPriority,food:ARB_06F.foodPriority},
  foodBecomesValidAfterMs:ARB_06F.foodBecomesValidAfterMs,
  arbitrationDelayMs:ARB_06F.arbitrationDelayMs,
  directPlayerTrigger:false,
  rule:'highest priority wins; event recency is not decision authority'
};
