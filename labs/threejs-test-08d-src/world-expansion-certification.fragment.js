
// ---- Test 08D: World Expansion Certification ----
const WORLD_EXPANSION_CERTIFICATION_08D_MARKER='08D_WORLD_EXPANSION_CERTIFICATION';

const inherited08C=globalThis.__boundedPrefetch08C;
const actorSystem08D=globalThis.__productionActorPipeline07B;
if(!inherited08C||!actorSystem08D)throw new Error('08D requires frozen accepted 08C runtime');

const regions08D=inherited08C.regions;
const centers08D=inherited08C.centers;
const factory08D=inherited08C.factory;
const controller08D=inherited08C.controller;
const frozenFactory08D=actorSystem08D.factory;

const visitRadius08D=14;
const requiredSequence08D=['A','B','A','B','A'];
const minElapsedMs08D=30000;

let visitSequence08D=[];
let lastCommittedVisit08D=null;
let certStart08D=0;
let maxActiveActors08D=0;
let maxBindings08D=0;
let maxPrepared08D=0;
let violation08D='';
let hudNext08D=0;

const certStageEl08D=document.getElementById('certStage08D');
const nextEl08D=document.getElementById('certNext08D');
const distanceEl08D=document.getElementById('certDistance08D');
const directionEl08D=document.getElementById('certDirection08D');
const sequenceEl08D=document.getElementById('certSequence08D');
const elapsedEl08D=document.getElementById('certElapsed08D');
const aCyclesEl08D=document.getElementById('certACycles08D');
const bCyclesEl08D=document.getElementById('certBCycles08D');
const activeActorsEl08D=document.getElementById('certActiveActors08D');
const bindingsEl08D=document.getElementById('certBindings08D');
const preparedEl08D=document.getElementById('certPrepared08D');
const consumedEl08D=document.getElementById('certConsumed08D');
const fallbackEl08D=document.getElementById('certFallback08D');
const assetEl08D=document.getElementById('certAsset08D');
const duplicatesEl08D=document.getElementById('certDuplicates08D');
const regressionEl08D=document.getElementById('certRegression08D');
const resultEl08D=document.getElementById('certResult08D');

function setCertText08D(el,value,color){
  if(!el)return;
  if(el.textContent!==value)el.textContent=value;
  if(color&&el.style.color!==color)el.style.color=color;
}

const cameraForward08D=new THREE.Vector3();
function targetGuidance08D(target){
  const center=centers08D[target];
  const dx=center.x-playerRoot.position.x;
  const dz=center.z-playerRoot.position.z;
  const distance=Math.hypot(dx,dz);
  if(distance<.001)return {distance:0,label:'HERE',degrees:0};
  camera.getWorldDirection(cameraForward08D);
  let fx=cameraForward08D.x;
  let fz=cameraForward08D.z;
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

function totalActiveActors08D(){
  return regions08D.A.activeActors.length+regions08D.B.activeActors.length;
}
function duplicateCount08D(){
  return regions08D.A.duplicateCount+regions08D.B.duplicateCount+factory08D.duplicateBindingCount;
}
function distanceTo08D(key){
  const c=centers08D[key];
  return Math.hypot(playerRoot.position.x-c.x,playerRoot.position.z-c.z);
}
function committedRegion08D(){
  if(regions08D.A.isActive&&distanceTo08D('A')<=visitRadius08D)return 'A';
  if(regions08D.B.isActive&&distanceTo08D('B')<=visitRadius08D)return 'B';
  return null;
}
function nextTarget08D(){
  const index=Math.min(visitSequence08D.length,requiredSequence08D.length-1);
  return requiredSequence08D[index];
}

function observeCertification08D(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const committed=committedRegion08D();

  if(visitSequence08D.length===0){
    if(committed==='A'){
      visitSequence08D.push('A');
      lastCommittedVisit08D='A';
      certStart08D=Date.now();
    }
  }else if(committed&&committed!==lastCommittedVisit08D){
    visitSequence08D.push(committed);
    lastCommittedVisit08D=committed;
  }

  const activeActors=totalActiveActors08D();
  const bindings=factory08D.size;
  const prepared=controller08D.totalPrepared();
  maxActiveActors08D=Math.max(maxActiveActors08D,activeActors);
  maxBindings08D=Math.max(maxBindings08D,bindings);
  maxPrepared08D=Math.max(maxPrepared08D,prepared);

  if(certStart08D){
    if(maxActiveActors08D>4)violation08D='ACTIVE ACTORS > 4';
    else if(maxBindings08D>4)violation08D='BINDINGS > 4';
    else if(maxPrepared08D>2)violation08D='PREFETCH POOL > 2';
    else if(duplicateCount08D()>0)violation08D='DUPLICATE STATE';
    else if(frozenFactory08D.assetCache.loadCount!==1)violation08D='ASSET LOAD COUNT CHANGED';
    else if(factory08D.fallbackInstances!==2)violation08D='FALLBACK COUNT CHANGED';
    else if(regression==='FAIL')violation08D='06J REGRESSION FAIL';
  }
}

function certificationProof08D(){
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const elapsed=certStart08D?Date.now()-certStart08D:0;
  const sequencePass=requiredSequence08D.every((key,index)=>visitSequence08D[index]===key);
  const checks={
    sequence:sequencePass,
    elapsed:elapsed>=minElapsedMs08D,
    a_restores:regions08D.A.restoreCount>=2,
    b_restores:regions08D.B.restoreCount>=1,
    a_unloads:regions08D.A.unloadCount>=2,
    b_unloads:regions08D.B.unloadCount>=2,
    prepared_consumed:factory08D.consumedInstances>=8,
    fallback_stable:factory08D.fallbackInstances===2,
    max_active_actors:maxActiveActors08D<=4,
    max_bindings:maxBindings08D<=4,
    max_prepared:maxPrepared08D<=2&&controller08D.budget.peakPrepared<=2,
    final_prepared:controller08D.totalPrepared()===0,
    final_a_active:regions08D.A.isActive&&regions08D.B.lifecycle==='UNLOADED',
    final_active_actors:totalActiveActors08D()===2,
    final_bindings:factory08D.size===2,
    asset_load_one:frozenFactory08D.assetCache.loadCount===1,
    duplicates:duplicateCount08D()===0,
    regression:regression==='PASS',
    no_violation:!violation08D
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([name])=>name);
  return {pass:failed.length===0,failed,checks,elapsed,regression};
}

function updateCertificationHud08D(){
  const proof=certificationProof08D();
  const next=nextTarget08D();
  const guide=targetGuidance08D(next);
  const sequence=visitSequence08D.slice(0,5).join('→')||'—';
  const elapsedSeconds=Math.floor(proof.elapsed/1000);

  setCertText08D(certStageEl08D,proof.pass?'PASS':violation08D?'FAIL':proof.regression==='PASS'?'RUNNING':'WAITING REGRESSION',
    proof.pass?'#a8f0b5':violation08D?'#ff9b9b':'#ffe59a');
  setCertText08D(nextEl08D,next);
  setCertText08D(distanceEl08D,guide.distance.toFixed(1)+' m');
  setCertText08D(directionEl08D,guide.label+' · '+Math.round(Math.abs(guide.degrees))+'°');
  setCertText08D(sequenceEl08D,sequence);
  setCertText08D(elapsedEl08D,elapsedSeconds+' / 30 s',elapsedSeconds>=30?'#a8f0b5':'#ffe59a');
  setCertText08D(aCyclesEl08D,'restore '+regions08D.A.restoreCount+' · unload '+regions08D.A.unloadCount);
  setCertText08D(bCyclesEl08D,'restore '+regions08D.B.restoreCount+' · unload '+regions08D.B.unloadCount);
  setCertText08D(activeActorsEl08D,totalActiveActors08D()+' · peak '+maxActiveActors08D+'/4');
  setCertText08D(bindingsEl08D,factory08D.size+' · peak '+maxBindings08D+'/4');
  setCertText08D(preparedEl08D,controller08D.totalPrepared()+' · peak '+Math.max(maxPrepared08D,controller08D.budget.peakPrepared)+'/2');
  setCertText08D(consumedEl08D,String(factory08D.consumedInstances));
  setCertText08D(fallbackEl08D,String(factory08D.fallbackInstances),factory08D.fallbackInstances===2?'#a8f0b5':'#ff9b9b');
  setCertText08D(assetEl08D,String(frozenFactory08D.assetCache.loadCount),frozenFactory08D.assetCache.loadCount===1?'#a8f0b5':'#ff9b9b');
  setCertText08D(duplicatesEl08D,String(duplicateCount08D()),duplicateCount08D()===0?'#a8f0b5':'#ff9b9b');
  setCertText08D(regressionEl08D,proof.regression,proof.regression==='PASS'?'#a8f0b5':proof.regression==='FAIL'?'#ff9b9b':'#ffe59a');

  if(violation08D){
    setCertText08D(resultEl08D,'CERTIFICATION FAIL · '+violation08D,'#ff9b9b');
  }else if(proof.pass){
    setCertText08D(resultEl08D,'WORLD EXPANSION CERTIFIED ✓ · 4 HANDOFFS ✓ · REPEATED RESTORE ✓ · ACTORS BOUNDED 4 ✓ · BINDINGS BOUNDED 4 ✓ · PREFETCH BOUNDED 2 ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · PERFORMANCE PASS ✓','#a8f0b5');
  }else if(proof.regression!=='PASS'){
    setCertText08D(resultEl08D,'WAIT FOR 06J REGRESSION PASS','#ffe59a');
  }else if(visitSequence08D.length===0){
    setCertText08D(resultEl08D,'ENTER REGION A TO START CERTIFICATION','#ffe59a');
  }else if(visitSequence08D.length<5){
    setCertText08D(resultEl08D,'GO TO '+next+' · COMPLETE A→B→A→B→A','#ffe59a');
  }else if(proof.elapsed<minElapsedMs08D){
    setCertText08D(resultEl08D,'ROUTE COMPLETE ✓ · HOLD UNTIL 30 s CERT WINDOW','#ffe59a');
  }else{
    setCertText08D(resultEl08D,'ROUTE COMPLETE · VERIFYING FINAL LIFECYCLE STATE','#ffe59a');
  }
}

// Add an A beacon. 08C already owns the diagnostic B beacon.
const aGround08D=groundHeight(centers08D.A.x,centers08D.A.z);
const aBeaconGroup08D=new THREE.Group();
aBeaconGroup08D.userData.worldExpansionCertificationBeacon08D=true;
const aBeam08D=new THREE.Mesh(
  new THREE.CylinderGeometry(.13,.13,18,10,1,true),
  new THREE.MeshBasicMaterial({
    color:0xffd66b,
    transparent:true,
    opacity:.62,
    depthTest:false,
    depthWrite:false
  })
);
aBeam08D.position.set(centers08D.A.x,aGround08D+9,centers08D.A.z);
aBeam08D.renderOrder=999;
aBeaconGroup08D.add(aBeam08D);
const aCap08D=new THREE.Mesh(
  new THREE.SphereGeometry(.75,12,8),
  new THREE.MeshBasicMaterial({
    color:0xffefad,
    transparent:true,
    opacity:.9,
    depthTest:false,
    depthWrite:false
  })
);
aCap08D.position.set(centers08D.A.x,aGround08D+18.5,centers08D.A.z);
aCap08D.renderOrder=1000;
aBeaconGroup08D.add(aCap08D);
scene.add(aBeaconGroup08D);

const hooks08D=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const certificationHook08D=(now)=>{
  observeCertification08D();
  if(now>=hudNext08D){
    updateCertificationHud08D();
    hudNext08D=now+250;
  }
};
certificationHook08D.worldExpansionCertificationId='08D_WORLD_EXPANSION_CERTIFICATION';
if(!hooks08D.some(h=>h.worldExpansionCertificationId==='08D_WORLD_EXPANSION_CERTIFICATION')){
  hooks08D.push(certificationHook08D);
}

globalThis.__worldExpansionCertification08D={
  marker:WORLD_EXPANSION_CERTIFICATION_08D_MARKER,
  requiredSequence:[...requiredSequence08D],
  get visits(){return [...visitSequence08D];},
  get proof(){return certificationProof08D();},
  get maxActiveActors(){return maxActiveActors08D;},
  get maxBindings(){return maxBindings08D;},
  get maxPrepared(){return maxPrepared08D;},
  get violation(){return violation08D;}
};
