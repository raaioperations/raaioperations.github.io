
// ---- Test 08C: Bounded Prefetch Lifecycle ----
import {ProductionRegion as ProductionRegion08C,ProductionRegionStateStore as ProductionRegionStateStore08C} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08C} from './production/world/production-world-manager.js';
import {PredictiveRegionPrefetchPlanner as PredictiveRegionPrefetchPlanner08C} from './production/prefetch/predictive-region-prefetch-core.js';
import {ThreePredictiveActorFactory as ThreePredictiveActorFactory08C} from './production/prefetch/three-predictive-actor-factory.js';
import {BoundedPredictivePrefetchController as BoundedPredictivePrefetchController08C} from './production/prefetch/bounded-predictive-prefetch-controller.js';

const BOUNDED_PREFETCH_LIFECYCLE_08C_MARKER='08C_BOUNDED_PREFETCH_LIFECYCLE';

const inheritedHandoff08C=globalThis.__predictiveHandoff08B;
const actorSystem08C=globalThis.__productionActorPipeline07B;
if(!inheritedHandoff08C||!actorSystem08C)throw new Error('08C requires frozen accepted 08B + 07B runtime');

// 08B is frozen. Quiesce only its diagnostic runtime hook and ring so 08C
// measures its own bounded lifecycle without stacking prior proof overhead.
const inheritedHooks08C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
for(let i=inheritedHooks08C.length-1;i>=0;i--){
  const hook=inheritedHooks08C[i];
  if(hook?.predictiveHandoffId==='08B_PREDICTIVE_HANDOFF'){
    inheritedHooks08C.splice(i,1);
  }
}
for(const child of [...scene.children]){
  if(child.userData?.predictiveHandoffRings08B===true)scene.remove(child);
}

const pipeline08C=actorSystem08C.pipeline;
const frozenFactory08C=actorSystem08C.factory;
const definition08C=pipeline08C.definitions.get('HUMANOID_FORAGER_V1');
const predictiveFactory08C=new ThreePredictiveActorFactory08C({
  scene,
  assetCache:frozenFactory08C.assetCache
});
const boundedPrefetch08C=new BoundedPredictivePrefetchController08C({
  factory:predictiveFactory08C,
  maxPreparedInstances:2
});
const planner08C=new PredictiveRegionPrefetchPlanner08C({
  prefetchRadiusM:58,
  minApproachSpeedMps:.35,
  minApproachDot:.25
});
const store08C=new ProductionRegionStateStore08C();

const centers08C={
  A:{...inheritedHandoff08C.centers.A},
  B:{...inheritedHandoff08C.centers.B}
};

function blueprints08C(key,center){
  return [
    {
      id:'08C_'+key+'_ACTOR_1',
      typeId:definition08C.typeId,
      position:{x:center.x-1.8,y:groundHeight(center.x-1.8,center.z),z:center.z},
      yaw:.16,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.26:.56}
    },
    {
      id:'08C_'+key+'_ACTOR_2',
      typeId:definition08C.typeId,
      position:{x:center.x+1.8,y:groundHeight(center.x+1.8,center.z-.45),z:center.z-.45},
      yaw:-.16,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.36:.66}
    }
  ];
}

function makeRegion08C(key){
  return new ProductionRegion08C({
    id:'08C_REGION_'+key,
    pipeline:pipeline08C,
    store:store08C,
    actorBlueprints:blueprints08C(key,centers08C[key]),
    bindActor:actor=>predictiveFactory08C.bind(key,actor),
    unbindActor:actor=>predictiveFactory08C.unbind(actor.id),
    loadRadiusM:24,
    unloadRadiusM:38
  });
}

const regions08C={A:makeRegion08C('A'),B:makeRegion08C('B')};
const world08C=new ProductionWorldManager08C({
  entries:[
    {id:'A',center:centers08C.A,region:regions08C.A},
    {id:'B',center:centers08C.B,region:regions08C.B}
  ]
});

const ringGeo08C=new THREE.RingGeometry(4.7,5.1,48);
ringGeo08C.rotateX(-Math.PI/2);
const ringMat08C=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const ringMesh08C=new THREE.InstancedMesh(ringGeo08C,ringMat08C,2);
ringMesh08C.frustumCulled=false;
ringMesh08C.userData.boundedPrefetchRings08C=true;
const ringObj08C=new THREE.Object3D();
for(const [index,key] of ['A','B'].entries()){
  const c=centers08C[key];
  ringObj08C.position.set(c.x,groundHeight(c.x,c.z)+.04,c.z);
  ringObj08C.rotation.set(0,0,0);
  ringObj08C.scale.setScalar(1);
  ringObj08C.updateMatrix();
  ringMesh08C.setMatrixAt(index,ringObj08C.matrix);
}
ringMesh08C.instanceMatrix.needsUpdate=true;
scene.add(ringMesh08C);

// Diagnostic-only B beacon: make the human route unambiguous without changing
// region coordinates, activation radii, simulation, or predictive logic.
const bGround08C=groundHeight(centers08C.B.x,centers08C.B.z);
const bBeaconGroup08C=new THREE.Group();
bBeaconGroup08C.userData.boundedPrefetchBeacon08C=true;
const bBeam08C=new THREE.Mesh(
  new THREE.CylinderGeometry(.13,.13,18,10,1,true),
  new THREE.MeshBasicMaterial({
    color:0x67f4ff,
    transparent:true,
    opacity:.62,
    depthTest:false,
    depthWrite:false
  })
);
bBeam08C.position.set(centers08C.B.x,bGround08C+9,centers08C.B.z);
bBeam08C.renderOrder=999;
bBeaconGroup08C.add(bBeam08C);
const bCap08C=new THREE.Mesh(
  new THREE.SphereGeometry(.75,12,8),
  new THREE.MeshBasicMaterial({
    color:0xb8fbff,
    transparent:true,
    opacity:.88,
    depthTest:false,
    depthWrite:false
  })
);
bCap08C.position.set(centers08C.B.x,bGround08C+18.5,centers08C.B.z);
bCap08C.renderOrder=1000;
bBeaconGroup08C.add(bCap08C);
scene.add(bBeaconGroup08C);

let logicPending08C=false;
let logicNext08C=0;
let logicAccumMs08C=0;
let hudNext08C=0;
let logicError08C='';

let initialASeen08C=false;
let firstBPrefetchObserved08C=false;
let bCancellationObserved08C=false;
let bRePrefetchObserved08C=false;
let bVisited08C=false;
let aReturnPrefetchObserved08C=false;
let returnedA08C=false;
let aInitialProgress08C=null;
let aReturnProgress08C=null;
let firstBPreparedAt08C=0;
let cancellationAt08C=0;

const stageEl08C=document.getElementById('boundedStage08C');
const targetEl08C=document.getElementById('boundedTarget08C');
const distanceBEl08C=document.getElementById('boundedDistanceB08C');
const bearingBEl08C=document.getElementById('boundedBearingB08C');
const preparedEl08C=document.getElementById('boundedPrepared08C');
const cancelEl08C=document.getElementById('boundedCancel08C');
const evictedEl08C=document.getElementById('boundedEvicted08C');
const peakEl08C=document.getElementById('boundedPeak08C');
const consumedEl08C=document.getElementById('boundedConsumed08C');
const fallbackEl08C=document.getElementById('boundedFallback08C');
const statesEl08C=document.getElementById('boundedStates08C');
const routeEl08C=document.getElementById('boundedRoute08C');
const restoredEl08C=document.getElementById('boundedRestored08C');
const assetEl08C=document.getElementById('boundedAsset08C');
const duplicatesEl08C=document.getElementById('boundedDuplicates08C');
const regressionEl08C=document.getElementById('boundedRegression08C');
const resultEl08C=document.getElementById('boundedResult08C');

function setBoundedText08C(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

const cameraForward08C=new THREE.Vector3();
function bGuidance08C(){
  const dx=centers08C.B.x-playerRoot.position.x;
  const dz=centers08C.B.z-playerRoot.position.z;
  const distance=Math.hypot(dx,dz);
  if(distance<.001)return {distance:0,label:'HERE',degrees:0};

  camera.getWorldDirection(cameraForward08C);
  let fx=cameraForward08C.x;
  let fz=cameraForward08C.z;
  const fl=Math.hypot(fx,fz)||1;
  fx/=fl; fz/=fl;
  const tx=dx/distance;
  const tz=dz/distance;
  const degrees=Math.atan2(fx*tz-fz*tx,fx*tx+fz*tz)*180/Math.PI;
  const abs=Math.abs(degrees);
  let label;
  if(abs<=22.5)label='FORWARD';
  else if(abs<=67.5)label=degrees>0?'FORWARD-RIGHT':'FORWARD-LEFT';
  else if(abs<=112.5)label=degrees>0?'RIGHT':'LEFT';
  else if(abs<=157.5)label=degrees>0?'BACK-RIGHT':'BACK-LEFT';
  else label='BACK';
  return {distance,label,degrees};
}

function activeKeys08C(){
  return ['A','B'].filter(key=>regions08C[key].isActive);
}
function duplicateCount08C(){
  return regions08C.A.duplicateCount+regions08C.B.duplicateCount+predictiveFactory08C.duplicateBindingCount;
}
function regionProgress08C(key){
  return pipeline08C.getActor('08C_'+key+'_ACTOR_1')?.kernel?.goals?.progress;
}

async function logicStep08C(dtSeconds){
  if(logicPending08C)return;
  logicPending08C=true;
  try{
    const regression=globalThis.__livingWorld06J?.stage||'WAITING';
    if(regression!=='PASS')return;

    const wallNow=Date.now();
    const position={x:playerRoot.position.x,z:playerRoot.position.z};
    planner08C.updateMotion(position,wallNow);

    const activeBefore=activeKeys08C();
    const candidate=planner08C.choose({
      position,
      regions:['A','B'].map(key=>({
        id:key,
        center:centers08C[key],
        lifecycle:regions08C[key].lifecycle
      })),
      excludeIds:activeBefore
    });
    const desired=candidate?.id??null;

    if(desired!==boundedPrefetch08C.targetId){
      await boundedPrefetch08C.retarget(desired,definition08C,2);
    }else if(desired&&boundedPrefetch08C.preparedCount(desired)<2){
      await boundedPrefetch08C.retarget(desired,definition08C,2);
    }

    if(
      desired==='B'&&
      regions08C.B.lifecycle==='UNLOADED'&&
      boundedPrefetch08C.preparedCount('B')===2
    ){
      const executions=boundedPrefetch08C.executionCount('B');
      if(executions===1&&!firstBPrefetchObserved08C){
        firstBPrefetchObserved08C=true;
        firstBPreparedAt08C=wallNow;
      }
      if(executions>=2&&bCancellationObserved08C){
        bRePrefetchObserved08C=true;
      }
    }

    if(
      firstBPrefetchObserved08C&&
      !bVisited08C&&
      boundedPrefetch08C.budget.cancellations>=1&&
      boundedPrefetch08C.budget.evictedInstances>=2&&
      boundedPrefetch08C.preparedCount('B')===0
    ){
      bCancellationObserved08C=true;
      if(!cancellationAt08C)cancellationAt08C=wallNow;
    }

    if(
      desired==='A'&&
      bVisited08C&&
      regions08C.A.lifecycle==='UNLOADED'&&
      boundedPrefetch08C.preparedCount('A')===2
    ){
      aReturnPrefetchObserved08C=true;
    }

    await world08C.step({
      playerPosition:position,
      dtMs:Math.max(0,dtSeconds*1000),
      now:wallNow,
      foodProgressPerSecond:.004
    });
    boundedPrefetch08C.observeAfterWorldStep();

    if(regions08C.A.isActive&&!initialASeen08C){
      initialASeen08C=true;
      aInitialProgress08C=regionProgress08C('A');
    }
    if(regions08C.B.isActive)bVisited08C=true;
    if(bVisited08C&&regions08C.A.isActive&&regions08C.A.restoreCount>0){
      returnedA08C=true;
      aReturnProgress08C=regionProgress08C('A');
    }

    // Once a target region is active it is no longer a prefetch target.
    const activeAfter=activeKeys08C();
    if(boundedPrefetch08C.targetId&&activeAfter.includes(boundedPrefetch08C.targetId)){
      await boundedPrefetch08C.retarget(null,definition08C,2);
      boundedPrefetch08C.observeAfterWorldStep();
    }

    logicError08C='';
  }catch(error){
    logicError08C=error?.message||String(error);
  }finally{
    logicPending08C=false;
  }
}

function boundedProof08C(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const restored=
    returnedA08C&&
    regions08C.A.lastRestoreIdsStable===true&&
    regions08C.A.lastRestoreProgressPreserved===true;

  const checks={
    first_b_prefetch:firstBPrefetchObserved08C,
    stale_b_evicted:bCancellationObserved08C,
    b_reprefetched:bRePrefetchObserved08C,
    prepared_consumed:predictiveFactory08C.consumedInstances>=4,
    fallback_initial_only:predictiveFactory08C.fallbackInstances===2,
    pool_bounded:boundedPrefetch08C.budget.peakPrepared<=2&&boundedPrefetch08C.totalPrepared()<=2,
    a_return_prefetched:aReturnPrefetchObserved08C,
    state_restored:restored,
    asset_load_one:frozenFactory08C.assetCache.loadCount===1,
    duplicates:duplicateCount08C()===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,regression,restored};
}

function updateBoundedHud08C(){
  const proof=boundedProof08C();
  const budget=boundedPrefetch08C.budget;
  const states=['A','B'].map(key=>regions08C[key].lifecycle[0]).join('/');
  const route=(initialASeen08C?'A':'—')+'→'+(bVisited08C?'B':'—')+'→'+(returnedA08C?'A':'—');

  setBoundedText08C(stageEl08C,proof.pass?'PASS':logicError08C?'FAIL':proof.regression==='PASS'?'READY':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':logicError08C?'#ff9b9b':'#ffe59a');
  setBoundedText08C(targetEl08C,(boundedPrefetch08C.targetId||'NONE')+' · '+boundedPrefetch08C.lastAction);
  const guidance=bGuidance08C();
  setBoundedText08C(distanceBEl08C,guidance.distance.toFixed(1)+' m');
  setBoundedText08C(bearingBEl08C,guidance.label+' · '+Math.round(Math.abs(guidance.degrees))+'°');
  setBoundedText08C(preparedEl08C,'A:'+boundedPrefetch08C.preparedCount('A')+' · B:'+boundedPrefetch08C.preparedCount('B'));
  setBoundedText08C(cancelEl08C,String(budget.cancellations),budget.cancellations>=1?'#a8f0b5':'#ffe59a');
  setBoundedText08C(evictedEl08C,String(budget.evictedInstances),budget.evictedInstances>=2?'#a8f0b5':'#ffe59a');
  setBoundedText08C(peakEl08C,budget.peakPrepared+'/2',budget.peakPrepared<=2?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(consumedEl08C,String(predictiveFactory08C.consumedInstances));
  setBoundedText08C(fallbackEl08C,String(predictiveFactory08C.fallbackInstances));
  setBoundedText08C(statesEl08C,states);
  setBoundedText08C(routeEl08C,route);
  setBoundedText08C(restoredEl08C,proof.restored?'STABLE ✓':returnedA08C?'FAIL':'PENDING',proof.restored?'#a8f0b5':'#ffe59a');
  setBoundedText08C(assetEl08C,String(frozenFactory08C.assetCache.loadCount),frozenFactory08C.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(duplicatesEl08C,String(duplicateCount08C()),duplicateCount08C()===0?'#a8f0b5':'#ff9b9b');
  setBoundedText08C(regressionEl08C,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(logicError08C){
    setBoundedText08C(resultEl08C,'BOUNDED PREFETCH FAIL · '+logicError08C,'#ff9b9b');
  }else if(proof.pass){
    setBoundedText08C(resultEl08C,'BOUNDED PREFETCH ✓ · STALE B EVICTED ✓ · B RE-PREFETCHED ✓ · PREPARED CONSUMED ✓ · POOL BOUNDED 2 ✓ · STATE RESTORED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setBoundedText08C(resultEl08C,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(!initialASeen08C){
    setBoundedText08C(resultEl08C,'ENTER REGION A','#ffe59a');
  }else if(!firstBPrefetchObserved08C){
    setBoundedText08C(resultEl08C,'MOVE TOWARD B UNTIL PREPARED B = 2','#ffe59a');
  }else if(!bCancellationObserved08C){
    setBoundedText08C(resultEl08C,'B PREFETCHED ✓ · REVERSE TOWARD A BEFORE B ACTIVATES','#ffe59a');
  }else if(!bRePrefetchObserved08C){
    setBoundedText08C(resultEl08C,'STALE B EVICTED ✓ · MOVE TOWARD B AGAIN','#ffe59a');
  }else if(!bVisited08C){
    setBoundedText08C(resultEl08C,'B RE-PREFETCHED ✓ · ENTER REGION B','#ffe59a');
  }else if(!returnedA08C){
    setBoundedText08C(resultEl08C,'B HANDOFF ✓ · RETURN TO REGION A','#ffe59a');
  }else{
    setBoundedText08C(resultEl08C,'RETURNED TO A · VERIFYING BOUNDS / RESTORE','#ffe59a');
  }
}

const frameHooks08C=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook08C=(now,dt)=>{
  predictiveFactory08C.update(dt);
  logicAccumMs08C+=Math.max(0,dt*1000);
  if(now>=logicNext08C&&!logicPending08C){
    const dtSeconds=logicAccumMs08C/1000;
    logicAccumMs08C=0;
    logicNext08C=now+100;
    logicStep08C(dtSeconds);
  }
  if(now>=hudNext08C){
    updateBoundedHud08C();
    hudNext08C=now+500;
  }
};
frameHook08C.boundedPrefetchId='08C_BOUNDED_PREFETCH';
if(!frameHooks08C.some(h=>h.boundedPrefetchId==='08C_BOUNDED_PREFETCH'))frameHooks08C.push(frameHook08C);

globalThis.__boundedPrefetch08C={
  marker:BOUNDED_PREFETCH_LIFECYCLE_08C_MARKER,
  world:world08C,
  regions:regions08C,
  planner:planner08C,
  factory:predictiveFactory08C,
  controller:boundedPrefetch08C,
  centers:centers08C,
  get proof(){return boundedProof08C();},
  get firstBPreparedAt(){return firstBPreparedAt08C;},
  get cancellationAt(){return cancellationAt08C;},
  get aInitialProgress(){return aInitialProgress08C;},
  get aReturnProgress(){return aReturnProgress08C;}
};
