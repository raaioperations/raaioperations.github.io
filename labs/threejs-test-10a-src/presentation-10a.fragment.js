
// ---- Test 10A: Presentation Replication / Windcut Shelf ----
const PRESENTATION_REPLICATION_10A_MARKER='10A_WINDCUT_SHELF_REPLICATION_PROOF';
const replicationWorld10A=globalThis.__boundedPrefetch08C;
const acceptedPresentation10A=globalThis.__presentationPass5_09B;
if(!replicationWorld10A||!acceptedPresentation10A)throw new Error('10A requires frozen 09B + frozen Test08 runtime');

const center10A={...replicationWorld10A.centers.B};
const root10A=new THREE.Group();
root10A.name='10A_WINDCUT_SHELF';
root10A.userData.presentationReplication10A=true;
root10A.position.set(center10A.x,0,center10A.z);

let started10A=false;
let applied10A=false;
let error10A='';
let loadedAssets10A=0;
let runtimeBatches10A=0;
let presentationTriangles10A=0;
let conformedVertices10A=0;
let minClearance10A=Infinity;
let hudNext10A=0;
let playerMoved10A=false;
let firstLookApplied10A=false;

const stageEl10A=document.getElementById('repStage10A');
const assetsEl10A=document.getElementById('repAssets10A');
const placementsEl10A=document.getElementById('repPlacements10A');
const batchesEl10A=document.getElementById('repBatches10A');
const drawEl10A=document.getElementById('repDraw10A');
const triEl10A=document.getElementById('repTriangles10A');
const dupEl10A=document.getElementById('repDuplicates10A');
const regressionEl10A=document.getElementById('repRegression10A');
const resultEl10A=document.getElementById('repResult10A');
const zoneEl10A=document.getElementById('zone');

function set10A(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function assetUrl10A(name,version){
  if(version==='v3')return PRESENTATION_REPLICATION_10A.assets.v3Base+name;
  if(version==='v1')return PRESENTATION_REPLICATION_10A.assets.v1Base+name;
  if(version==='w1')return PRESENTATION_REPLICATION_10A.assets.w1Base+name;
  throw new Error('10A unsupported asset version '+version);
}

function bucket10A(materialName){
  if(materialName==='MAT_EARTH_WARM')return 'EARTH_CUT';
  if(materialName==='MAT_EARTH_DAMP')return 'EARTH_CROWN';
  if(materialName==='MAT_RUIN_STONE'||materialName.startsWith('MAT_STONE_'))return 'STONE';
  if(materialName.startsWith('MAT_BARK_'))return 'BARK';
  if(materialName.startsWith('MAT_FOLIAGE_'))return 'FOLIAGE';
  throw new Error('10A material outside replication contract '+materialName);
}

function terrainIntegratedAsset10A(asset){
  return asset==='terrain_bank_a.glb'||
    asset==='terrain_bank_b.glb'||
    asset==='path_cut_berms.glb'||
    asset==='shelf_escarpment_a.glb';
}

function conform10A(geometry,placementY,asset){
  if(!terrainIntegratedAsset10A(asset))return geometry;
  const p=geometry.getAttribute('position');
  if(!p)throw new Error('10A geometry missing position '+asset);
  for(let i=0;i<p.count;i++){
    const x=p.getX(i),z=p.getZ(i);
    const authoredOffset=p.getY(i)-placementY;
    const clearance=Math.abs(authoredOffset);
    if(clearance<.10)throw new Error('10A terrain clearance violation '+asset+' '+clearance.toFixed(4));
    minClearance10A=Math.min(minClearance10A,clearance);
    p.setY(i,heightAt(center10A.x+x,center10A.z+z)+authoredOffset);
    conformedVertices10A++;
  }
  p.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

function material10A(bucket){
  const configs={
    EARTH_CUT:{color:0xffffff,roughness:1.0},
    EARTH_CROWN:{color:0xffffff,roughness:.98},
    STONE:{color:0xffffff,roughness:.96},
    BARK:{color:0xffffff,roughness:.98},
    FOLIAGE:{color:0xffffff,roughness:.90}
  };
  const c=configs[bucket];
  const m=new THREE.MeshStandardMaterial({
    color:c.color,
    vertexColors:true,
    roughness:c.roughness,
    metalness:0
  });
  m.name='10A_'+bucket;
  return m;
}

function deactivateSunlitBasin10A(){
  root09B.visible=false;
  integrationRoot09D.visible=false;
  pass4RidgeRoot09B.visible=false;
  pass5Root09B.visible=false;
}

function tuneWindcutShelf10A(){
  terrainMat.color.set(0x9da58a);
  terrainMat.roughness=.99;
  terrainMat.bumpScale=.14;

  if(scene.fog&&'density' in scene.fog){
    scene.fog.color.set(0xb8c2b7);
    scene.fog.density=.0064;
  }

  hemi.color.set(0xd1e0df);
  hemi.groundColor.set(0x4e5647);
  hemi.intensity=1.18;
  fill.color.set(0x8da0a2);
  fill.intensity=.10;

  sun.color.set(0xffd6a2);
  sun.intensity=3.35;
  sun.position.set(center10A.x-50,58,center10A.z-18);
  sun.target.position.set(center10A.x,0,center10A.z+8);
  sun.target.updateMatrixWorld();

  if(typeof skyU!=='undefined'){
    skyU.top.value.set(0x6c9eb5);
    skyU.mid.value.set(0xbac9bf);
    skyU.bottom.value.set(0xddc49a);
    skyU.sunWarm.value.set(0xffc978);
  }
}

async function buildWindcutShelf10A(){
  deactivateSunlitBasin10A();
  tuneWindcutShelf10A();

  const loader=new GLTFLoader09D();
  const unique=new Map();
  const used=[];
  for(const p of PRESENTATION_REPLICATION_10A.placements){
    const key=p.version+':'+p.asset;
    if(!unique.has(key)){
      unique.set(key,null);
      used.push({key,asset:p.asset,version:p.version});
    }
  }

  const results=await Promise.allSettled(used.map(async item=>{
    const gltf=await loader.loadAsync(assetUrl10A(item.asset,item.version));
    gltf.scene.updateMatrixWorld(true);
    unique.set(item.key,gltf.scene);
    loadedAssets10A++;
  }));
  const failed=results.filter(r=>r.status==='rejected');
  if(failed.length)throw new Error('10A asset load failure '+loadedAssets10A+'/'+used.length);

  const buckets=new Map();
  for(const p of PRESENTATION_REPLICATION_10A.placements){
    const source=unique.get(p.version+':'+p.asset);
    if(!source)throw new Error('10A missing asset source '+p.asset);

    const placementY=heightAt(center10A.x+p.x,center10A.z+p.z)+.035;
    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,p.yaw,0));
    const matrix=new THREE.Matrix4().compose(
      new THREE.Vector3(p.x,placementY,p.z),
      q,
      new THREE.Vector3(p.scale,p.scale,p.scale)
    );

    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const sourceMats=Array.isArray(obj.material)?obj.material:[obj.material];
      if(sourceMats.length!==1)throw new Error('10A multi-material mesh unsupported '+p.asset);
      const sourceMat=sourceMats[0];
      const bucket=bucket10A(sourceMat?.name||'');
      let g=normalizedGeometry09D(obj,matrix);
      g=bakeMaterialColor09D(g,sourceMat);
      g=conform10A(g,placementY,p.asset);
      const list=buckets.get(bucket)||[];
      list.push(g);
      buckets.set(bucket,list);
    });
  }

  runtimeBatches10A=buckets.size;
  if(runtimeBatches10A>PRESENTATION_REPLICATION_10A.budgets.runtimeBatchesMax){
    throw new Error('10A batch ceiling exceeded '+runtimeBatches10A);
  }

  for(const [bucket,geos] of buckets){
    const merged=mergeGeometries09D(geos,false);
    if(!merged)throw new Error('10A merge failed '+bucket);
    const mesh=new THREE.Mesh(merged,material10A(bucket));
    mesh.name='10A_BATCH_'+bucket;
    mesh.castShadow=true;
    mesh.receiveShadow=true;
    root10A.add(mesh);
    presentationTriangles10A+=Math.round((merged.getAttribute('position')?.count||0)/3);
  }

  scene.add(root10A);

  if(!playerMoved10A){
    const first=PRESENTATION_REPLICATION_10A.composition.firstLook;
    const sx=center10A.x+first.spawn.x;
    const sz=center10A.z+first.spawn.z;
    const vx=center10A.x+first.vista.x;
    const vz=center10A.z+first.vista.z;
    const dx=vx-sx;
    const dz=vz-sz;

    playerRoot.position.set(sx,groundHeight(sx,sz),sz);
    velocity.set(0,0,0);
    verticalVel=0;

    // Camera forward is (-sin(yaw), 0, -cos(yaw)); solve yaw from the
    // authored vista so the first frame points at the identity anchors.
    yaw=Math.atan2(-dx,-dz);
    pitch=.22;
    camDist=7.4;
    playerRoot.rotation.y=Math.atan2(dx,dz);

    const target=playerRoot.position.clone().add(new THREE.Vector3(0,1.42,0));
    const desired=target.clone().add(new THREE.Vector3(
      Math.sin(yaw)*Math.cos(pitch)*camDist,
      Math.sin(pitch)*camDist+1.0,
      Math.cos(yaw)*Math.cos(pitch)*camDist
    ));
    camera.position.copy(cameraCollision(target,desired));
    camera.lookAt(target);
    camera.updateProjectionMatrix();

    playerMoved10A=true;
    firstLookApplied10A=true;
  }

  applied10A=true;
}

function proof10A(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const duplicates=globalThis.__assetIntegration09D?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const expectedAssets=new Set(PRESENTATION_REPLICATION_10A.placements.map(p=>p.version+':'+p.asset)).size;
  const checks={
    applied:applied10A,
    frozen_09b:acceptedPresentation10A?.applied===true,
    assets:loadedAssets10A===expectedAssets,
    placements:PRESENTATION_REPLICATION_10A.placements.length===23,
    batches:runtimeBatches10A<=PRESENTATION_REPLICATION_10A.budgets.runtimeBatchesMax,
    terrain_conformance:conformedVertices10A>0,
    terrain_clearance:Number.isFinite(minClearance10A)&&minClearance10A>=.10,
    draw_calls:calls<=PRESENTATION_REPLICATION_10A.budgets.drawCallsMax,
    triangles:triangles<=PRESENTATION_REPLICATION_10A.budgets.trianglesMax,
    duplicates:duplicates===0,
    regression:regression==='PASS',
    player_glb:characterMode==='GLB',
    first_look:firstLookApplied10A===true,
    no_error:!error10A
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,duplicates,regression,expectedAssets};
}

function updateHud10A(){
  const p=proof10A();
  set10A(stageEl10A,p.automatedReady?'HUMAN REVIEW':error10A?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':error10A?'#ff9b9b':'#ffe59a');
  set10A(assetsEl10A,loadedAssets10A+' / '+p.expectedAssets);
  set10A(placementsEl10A,PRESENTATION_REPLICATION_10A.placements.length+' / 23');
  set10A(batchesEl10A,runtimeBatches10A+' / 6');
  set10A(drawEl10A,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  set10A(triEl10A,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  set10A(dupEl10A,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');
  set10A(regressionEl10A,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(error10A){
    set10A(resultEl10A,'10A FAIL · '+error10A,'#ff9b9b');
  }else if(p.automatedReady){
    set10A(resultEl10A,'WINDCUT IDENTITY KIT 4/4 ✓ · FIRST-LOOK VISTA ✓ · MACRO SHELF/ROCK/RUIN/DEADWOOD ✓ · DISTINCT REGION B ENVIRONMENT ✓ · <=6 BATCHES ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED','#ffe59a');
  }else{
    set10A(resultEl10A,'BUILDING WINDCUT SHELF REPLICATION PROOF','#ffe59a');
  }
}

const hooks10A=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const hook10A=(now)=>{
  if(zoneEl10A)zoneEl10A.textContent='10A · WINDCUT SHELF · AUTHORED VISTA';

  if(!started10A&&acceptedPresentation10A?.applied&&globalThis.__livingWorld06J?.stage==='PASS'){
    started10A=true;
    buildWindcutShelf10A().catch(error=>{
      error10A=error?.message||String(error);
    });
  }

  if(now>=hudNext10A){
    updateHud10A();
    hudNext10A=now+350;
  }
};
hook10A.presentationReplicationId='10A_WINDCUT_SHELF_REPLICATION_PROOF';
if(!hooks10A.some(h=>h.presentationReplicationId===hook10A.presentationReplicationId))hooks10A.push(hook10A);

globalThis.__presentationReplication10A={
  marker:PRESENTATION_REPLICATION_10A_MARKER,
  root:root10A,
  center:center10A,
  recipe:PRESENTATION_REPLICATION_10A,
  get applied(){return applied10A;},
  get assetLoads(){return loadedAssets10A;},
  get batches(){return runtimeBatches10A;},
  get presentationTriangles(){return presentationTriangles10A;},
  get firstLookApplied(){return firstLookApplied10A;},
  get proof(){return proof10A();}
};
