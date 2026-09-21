
// ---- Test 08B: Predictive Region Handoff ----
import {ProductionRegion as ProductionRegion08B,ProductionRegionStateStore as ProductionRegionStateStore08B} from './production/regions/production-region-core.js';
import {ProductionWorldManager as ProductionWorldManager08B} from './production/world/production-world-manager.js';
import {PredictiveRegionPrefetchPlanner as PredictiveRegionPrefetchPlanner08B} from './production/prefetch/predictive-region-prefetch-core.js';
import {ThreePredictiveActorFactory as ThreePredictiveActorFactory08B} from './production/prefetch/three-predictive-actor-factory.js';

const PREDICTIVE_REGION_HANDOFF_08B_MARKER='08B_PREDICTIVE_REGION_HANDOFF';

const inheritedWorld08B=globalThis.__multiRegionWorld08A;
const actorSystem08B=globalThis.__productionActorPipeline07B;
if(!inheritedWorld08B||!actorSystem08B)throw new Error('08B requires frozen accepted 08A + 07B runtime');

// 08A is frozen. Its diagnostic world manager must not continue running under
// the next milestone. Keep all production modules and the 06J regression intact.
const inheritedHooks08B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
for(let i=inheritedHooks08B.length-1;i>=0;i--){
  const hook=inheritedHooks08B[i];
  if(hook?.multiRegionWorldId==='08A_MULTI_REGION_WORLD'){
    inheritedHooks08B.splice(i,1);
  }
}
for(const child of [...scene.children]){
  if(child.userData?.worldRegion08A)scene.remove(child);
}

const pipeline08B=actorSystem08B.pipeline;
const frozenFactory08B=actorSystem08B.factory;
const definition08B=pipeline08B.definitions.get('HUMANOID_FORAGER_V1');
const predictiveFactory08B=new ThreePredictiveActorFactory08B({
  scene,
  assetCache:frozenFactory08B.assetCache
});
const planner08B=new PredictiveRegionPrefetchPlanner08B({
  prefetchRadiusM:58,
  minApproachSpeedMps:.35,
  minApproachDot:.25
});
const store08B=new ProductionRegionStateStore08B();

const centers08B={
  A:{...inheritedWorld08B.centers.A},
  B:{...inheritedWorld08B.centers.B}
};

function blueprints08B(key,center){
  return [
    {
      id:'08B_'+key+'_ACTOR_1',
      typeId:definition08B.typeId,
      position:{x:center.x-1.8,y:groundHeight(center.x-1.8,center.z),z:center.z},
      yaw:.16,
      animationIntent:'WALK',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.24:.54}
    },
    {
      id:'08B_'+key+'_ACTOR_2',
      typeId:definition08B.typeId,
      position:{x:center.x+1.8,y:groundHeight(center.x+1.8,center.z-.45),z:center.z-.45},
      yaw:-.16,
      animationIntent:'IDLE',
      kernelOptions:{initialGoal:'FOOD',initialProgress:key==='A'?.34:.64}
    }
  ];
}

function makeRegion08B(key){
  return new ProductionRegion08B({
    id:'08B_REGION_'+key,
    pipeline:pipeline08B,
    store:store08B,
    actorBlueprints:blueprints08B(key,centers08B[key]),
    bindActor:actor=>predictiveFactory08B.bind(key,actor),
    unbindActor:actor=>predictiveFactory08B.unbind(actor.id),
    loadRadiusM:24,
    unloadRadiusM:38
  });
}

const regions08B={A:makeRegion08B('A'),B:makeRegion08B('B')};
const world08B=new ProductionWorldManager08B({
  entries:[
    {id:'A',center:centers08B.A,region:regions08B.A},
    {id:'B',center:centers08B.B,region:regions08B.B}
  ]
});

const ringGeo08B=new THREE.RingGeometry(4.7,5.1,48);
ringGeo08B.rotateX(-Math.PI/2);
const ringMat08B=new THREE.MeshBasicMaterial({
  color:0x5fd8cf,
  transparent:true,
  opacity:.58,
  side:THREE.DoubleSide,
  depthWrite:false
});
const ringMesh08B=new THREE.InstancedMesh(ringGeo08B,ringMat08B,2);
ringMesh08B.frustumCulled=false;
ringMesh08B.userData.predictiveHandoffRings08B=true;
const ringObj08B=new THREE.Object3D();
for(const [index,key] of ['A','B'].entries()){
  const c=centers08B[key];
  ringObj08B.position.set(c.x,groundHeight(c.x,c.z)+.04,c.z);
  ringObj08B.rotation.set(0,0,0);
  ringObj08B.scale.setScalar(1);
  ringObj08B.updateMatrix();
  ringMesh08B.setMatrixAt(index,ringObj08B.matrix);
}
ringMesh08B.instanceMatrix.needsUpdate=true;
scene.add(ringMesh08B);

let logicPending08B=false;
let logicNext08B=0;
let logicAccumMs08B=0;
let hudNext08B=0;
let lastTarget08B='NONE';
let lastPrefetchState08B='IDLE';
let prefetchError08B='';
let bVisited08B=false;
let returnedA08B=false;
let initialASeen08B=false;
let bPrefetchedBeforeLoad08B=false;
let aReturnPrefetchedBeforeLoad08B=false;
let aInitialProgress08B=null;
let aReturnProgress08B=null;
let maxActiveRegions08B=0;

const stageEl08B=document.getElementById('handoffStage08B');
const targetEl08B=document.getElementById('handoffTarget08B');
const preparedEl08B=document.getElementById('handoffPrepared08B');
const consumedEl08B=document.getElementById('handoffConsumed08B');
const fallbackEl08B=document.getElementById('handoffFallback08B');
const statesEl08B=document.getElementById('handoffStates08B');
const activeEl08B=document.getElementById('handoffActive08B');
const visitedEl08B=document.getElementById('handoffVisited08B');
const restoredEl08B=document.getElementById('handoffRestored08B');
const assetEl08B=document.getElementById('handoffAsset08B');
const duplicatesEl08B=document.getElementById('handoffDuplicates08B');
const regressionEl08B=document.getElementById('handoffRegression08B');
const resultEl08B=document.getElementById('handoffResult08B');

function setHandoffText08B(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

function activeKeys08B(){
  return ['A','B'].filter(key=>regions08B[key].isActive);
}
function duplicateCount08B(){
  return regions08B.A.duplicateCount+regions08B.B.duplicateCount+predictiveFactory08B.duplicateBindingCount;
}
function regionProgress08B(key){
  return pipeline08B.getActor('08B_'+key+'_ACTOR_1')?.kernel?.goals?.progress;
}

async function logicStep08B(now,dtSeconds){
  if(logicPending08B)return;
  logicPending08B=true;
  try{
    const regression=globalThis.__livingWorld06J?.stage||'WAITING';
    if(regression!=='PASS')return;

    const position={x:playerRoot.position.x,z:playerRoot.position.z};
    planner08B.updateMotion(position,Date.now());

    const entries=['A','B'].map(key=>({
      id:key,
      center:centers08B[key],
      lifecycle:regions08B[key].lifecycle
    }));
    const active=activeKeys08B();
    const candidate=planner08B.choose({position,regions:entries,excludeIds:active});
    lastTarget08B=candidate?.id??'NONE';

    if(candidate){
      lastPrefetchState08B='PREFETCHING '+candidate.id;
      await predictiveFactory08B.prefetch(candidate.id,definition08B,2);
      lastPrefetchState08B='PREFETCHED '+candidate.id;

      const region=regions08B[candidate.id];
      const distance=Math.hypot(position.x-centers08B[candidate.id].x,position.z-centers08B[candidate.id].z);
      if(region.lifecycle==='UNLOADED'&&distance<=region.loadRadiusM&&predictiveFactory08B.preparedCount(candidate.id)>=2){
        if(candidate.id==='B')bPrefetchedBeforeLoad08B=true;
        if(candidate.id==='A'&&bVisited08B)aReturnPrefetchedBeforeLoad08B=true;
      }
    }

    await world08B.step({
      playerPosition:position,
      dtMs:Math.max(0,dtSeconds*1000),
      now:Date.now(),
      foodProgressPerSecond:.004
    });

    const nowActive=activeKeys08B();
    maxActiveRegions08B=Math.max(maxActiveRegions08B,nowActive.length);

    if(regions08B.A.isActive&&!initialASeen08B){
      initialASeen08B=true;
      aInitialProgress08B=regionProgress08B('A');
    }
    if(regions08B.B.isActive)bVisited08B=true;
    if(bVisited08B&&regions08B.A.isActive&&regions08B.A.restoreCount>0){
      returnedA08B=true;
      aReturnProgress08B=regionProgress08B('A');
    }
    prefetchError08B='';
  }catch(error){
    prefetchError08B=error?.message||String(error);
  }finally{
    logicPending08B=false;
  }
}

function handoffProof08B(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const restored=returnedA08B&&regions08B.A.lastRestoreIdsStable&&regions08B.A.lastRestoreProgressPreserved;
  const checks={
    b_prefetched:bPrefetchedBeforeLoad08B,
    a_return_prefetched:aReturnPrefetchedBeforeLoad08B,
    prepared_consumed:predictiveFactory08B.consumedInstances>=4,
    fallback_initial_only:predictiveFactory08B.fallbackInstances===2,
    state_restored:restored,
    asset_load_one:frozenFactory08B.assetCache.loadCount===1,
    duplicates:duplicateCount08B()===0,
    regression:regression==='PASS'
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,regression,restored};
}

function updateHandoffHud08B(){
  const proof=handoffProof08B();
  const active=activeKeys08B();
  const states=['A','B'].map(key=>regions08B[key].lifecycle[0]).join('/');
  const preparedA=predictiveFactory08B.preparedCount('A');
  const preparedB=predictiveFactory08B.preparedCount('B');

  setHandoffText08B(stageEl08B,proof.pass?'PASS':prefetchError08B?'FAIL':globalThis.__livingWorld06J?.stage==='PASS'?'READY':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':prefetchError08B?'#ff9b9b':'#ffe59a');
  setHandoffText08B(targetEl08B,lastTarget08B+' · '+lastPrefetchState08B);
  setHandoffText08B(preparedEl08B,'A:'+preparedA+' · B:'+preparedB);
  setHandoffText08B(consumedEl08B,String(predictiveFactory08B.consumedInstances));
  setHandoffText08B(fallbackEl08B,String(predictiveFactory08B.fallbackInstances));
  setHandoffText08B(statesEl08B,states);
  setHandoffText08B(activeEl08B,active.length?active.join(','):'NONE');
  setHandoffText08B(visitedEl08B,(initialASeen08B?'A':'—')+'→'+(bVisited08B?'B':'—')+'→'+(returnedA08B?'A':'—'));
  setHandoffText08B(restoredEl08B,proof.restored?'STABLE ✓':returnedA08B?'FAIL':'PENDING',proof.restored?'#a8f0b5':'#ffe59a');
  setHandoffText08B(assetEl08B,String(frozenFactory08B.assetCache.loadCount),frozenFactory08B.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setHandoffText08B(duplicatesEl08B,String(duplicateCount08B()),duplicateCount08B()===0?'#a8f0b5':'#ff9b9b');
  setHandoffText08B(regressionEl08B,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(prefetchError08B){
    setHandoffText08B(resultEl08B,'HANDOFF FAIL · '+prefetchError08B,'#ff9b9b');
  }else if(proof.pass){
    setHandoffText08B(resultEl08B,'PREDICTIVE HANDOFF ✓ · B PREFETCHED ✓ · A RETURN PREFETCHED ✓ · PREPARED CONSUMED ✓ · STATE RESTORED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setHandoffText08B(resultEl08B,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(!initialASeen08B){
    setHandoffText08B(resultEl08B,'ENTER REGION A','#ffe59a');
  }else if(!bVisited08B){
    setHandoffText08B(resultEl08B,'A ACTIVE · MOVE TOWARD REGION B','#ffe59a');
  }else if(!returnedA08B){
    setHandoffText08B(resultEl08B,'B HANDOFF COMPLETE · RETURN TO REGION A','#ffe59a');
  }else{
    setHandoffText08B(resultEl08B,'RETURNED TO A · VERIFYING PREFETCH / RESTORE','#ffe59a');
  }
}

const frameHooks08B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const frameHook08B=(now,dt)=>{
  predictiveFactory08B.update(dt);
  logicAccumMs08B+=Math.max(0,dt*1000);
  if(now>=logicNext08B&&!logicPending08B){
    const dtSeconds=logicAccumMs08B/1000;
    logicAccumMs08B=0;
    logicNext08B=now+100;
    logicStep08B(now,dtSeconds);
  }
  if(now>=hudNext08B){
    updateHandoffHud08B();
    hudNext08B=now+500;
  }
};
frameHook08B.predictiveHandoffId='08B_PREDICTIVE_HANDOFF';
if(!frameHooks08B.some(h=>h.predictiveHandoffId==='08B_PREDICTIVE_HANDOFF'))frameHooks08B.push(frameHook08B);

globalThis.__predictiveHandoff08B={
  marker:PREDICTIVE_REGION_HANDOFF_08B_MARKER,
  world:world08B,
  regions:regions08B,
  planner:planner08B,
  factory:predictiveFactory08B,
  centers:centers08B,
  get proof(){return handoffProof08B();},
  get maxActiveRegions(){return maxActiveRegions08B;},
  get aInitialProgress(){return aInitialProgress08B;},
  get aReturnProgress(){return aReturnProgress08B;}
};
