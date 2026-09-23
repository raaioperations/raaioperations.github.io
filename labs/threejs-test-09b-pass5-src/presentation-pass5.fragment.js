
// ---- Test 09B: Vertical Beauty Slice / Presentation Pass 5 ----
const PRESENTATION_PASS_5_09B_MARKER='09B_PRESENTATION_PASS_5_ENVIRONMENT_ART';
const ENV_V3_BASE_09B='/assets/3d/sunlit-basin/v3/';
const ENV_V3_ASSETS_09B=[
  'terrain_bank_a.glb',
  'terrain_bank_b.glb',
  'path_cut_berms.glb',
  'shoreline_shelf.glb',
  'ruin_sunlit_gate_v2.glb',
  'tree_d_forked.glb',
  'tree_e_windswept.glb',
  'wetland_cluster.glb'
];

let pass5Started09B=false;
let pass5Applied09B=false;
let pass5Error09B='';
let pass5HudNext09B=0;
let pass5Loaded09B=0;
let pass5Batches09B=0;
let pass5Triangles09B=0;
let legacyGateClipMaterials09B=0;
let pass5ConformedVertices09B=0;
let pass5MinVertexClearance09B=Infinity;
let legacyShoreHidden09B=false;
let legacyMeadowHidden09B=false;

const pass5Root09B=new THREE.Group();
pass5Root09B.name='09B_PASS5_ENVIRONMENT_ART';

const p5StageEl09B=document.getElementById('p5Stage09B');
const p5AssetsEl09B=document.getElementById('p5Assets09B');
const p5BatchesEl09B=document.getElementById('p5Batches09B');
const p5AssetTriEl09B=document.getElementById('p5AssetTri09B');
const p5GateEl09B=document.getElementById('p5Gate09B');
const p5PlayerEl09B=document.getElementById('p5Player09B');
const p5DrawEl09B=document.getElementById('p5Draw09B');
const p5TriEl09B=document.getElementById('p5Triangles09B');
const p5DupEl09B=document.getElementById('p5Duplicates09B');
const p5RegressionEl09B=document.getElementById('p5Regression09B');
const p5ResultEl09B=document.getElementById('p5Result09B');

function setP5Text09B(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function clipLegacyGateGeometry09B(material){
  if(!material||material.userData?.pass5GateClip)return false;
  material.userData.pass5GateClip=true;

  const previousCompile=material.onBeforeCompile;
  const previousKey=material.customProgramCacheKey?.bind(material);

  material.onBeforeCompile=shader=>{
    if(previousCompile)previousCompile(shader);

    shader.vertexShader=shader.vertexShader
      .replace('#include <common>','#include <common>\nvarying vec2 vPass5LocalXZ;')
      .replace('#include <begin_vertex>','#include <begin_vertex>\nvPass5LocalXZ=position.xz;');

    shader.fragmentShader=shader.fragmentShader
      .replace('#include <common>','#include <common>\nvarying vec2 vPass5LocalXZ;')
      .replace(
        '#include <clipping_planes_fragment>',
        '#include <clipping_planes_fragment>\n'+
        'if(abs(vPass5LocalXZ.x-5.0)<4.7 && abs(vPass5LocalXZ.y-25.0)<4.6) discard;'
      );
  };

  material.customProgramCacheKey=()=>(
    '09B-pass5-gate-clip-'+material.name+'-'+(previousKey?previousKey():'base')
  );
  material.needsUpdate=true;
  return true;
}

function environmentPlacementY09B(x,z,asset){
  const wx=beauty09D.center.x+x;
  const wz=beauty09D.center.z+z;
  let y=groundHeight(wx,wz)+.035;
  if(asset==='shoreline_shelf.glb')y+=.06;
  if(asset==='wetland_cluster.glb')y+=.035;
  return y;
}

function visibleGroundYPass5_09B(localX,localZ){
  const wx=beauty09D.center.x+localX;
  const wz=beauty09D.center.z+localZ;
  // Match the actual systemic terrain mesh exactly. The base terrain geometry
  // is authored from heightAt(x,z); the duplicate meadow overlay is suppressed.
  return heightAt(wx,wz);
}

function conformTerrainGeometryPass5_09B(geometry,placementY,asset){
  if(![
    'terrain_bank_a.glb',
    'terrain_bank_b.glb',
    'path_cut_berms.glb',
    'shoreline_shelf.glb'
  ].includes(asset))return geometry;

  const pos=geometry.getAttribute('position');
  if(!pos)throw new Error('Pass 5 conform geometry missing position '+asset);

  for(let i=0;i<pos.count;i++){
    const x=pos.getX(i);
    const z=pos.getZ(i);
    const authoredOffset=pos.getY(i)-placementY;
    const clearance=Math.abs(authoredOffset);
    if(clearance<.10){
      throw new Error('Pass 5 terrain vertex entered coplanar band '+asset+' '+clearance.toFixed(4));
    }
    pass5MinVertexClearance09B=Math.min(pass5MinVertexClearance09B,clearance);
    pos.setY(i,visibleGroundYPass5_09B(x,z)+authoredOffset);
    pass5ConformedVertices09B++;
  }

  pos.needsUpdate=true;
  geometry.computeVertexNormals();
  geometry.computeBoundingBox();
  geometry.computeBoundingSphere();
  return geometry;
}

async function loadPass5EnvironmentAssets09B(){
  const loader=new GLTFLoader09D();
  const loaded=new Map();

  const results=await Promise.allSettled(
    ENV_V3_ASSETS_09B.map(async name=>{
      const gltf=await loader.loadAsync(ENV_V3_BASE_09B+name);
      gltf.scene.updateMatrixWorld(true);
      loaded.set(name,gltf.scene);
      pass5Loaded09B++;
    })
  );
  const failed=results.filter(r=>r.status==='rejected');
  if(failed.length)throw new Error('Pass 5 environment GLB load failure '+pass5Loaded09B+'/8');

  const placements=[
    // Meso-scale banks around the basin.
    {asset:'terrain_bank_a.glb',x:-3,z:-8,scale:1.0,yaw:Math.PI*.48},
    {asset:'terrain_bank_a.glb',x:13,z:8,scale:.92,yaw:Math.PI*.15},
    {asset:'terrain_bank_a.glb',x:-18,z:18,scale:.88,yaw:Math.PI*.73},
    {asset:'terrain_bank_b.glb',x:-18,z:-9,scale:1.05,yaw:Math.PI*.18},
    {asset:'terrain_bank_b.glb',x:17,z:-15,scale:.96,yaw:Math.PI*.61},
    {asset:'terrain_bank_b.glb',x:20,z:15,scale:.90,yaw:Math.PI*.92},

    // Path cuts: oriented along the traversal path.
    {asset:'path_cut_berms.glb',x:-.7,z:-15,scale:1.0,yaw:Math.PI/2},
    {asset:'path_cut_berms.glb',x:1.8,z:-2,scale:.95,yaw:Math.PI/2+.04},
    {asset:'path_cut_berms.glb',x:4.3,z:12,scale:.92,yaw:Math.PI/2+.06},

    // Authored shoreline: two half-ring placements, no coplanar overlap.
    {asset:'shoreline_shelf.glb',x:-12,z:7,scale:1.04,yaw:0},
    {asset:'shoreline_shelf.glb',x:-12,z:7,scale:1.04,yaw:Math.PI},

    // Hero ruin replaces presentation of old gate region.
    {asset:'ruin_sunlit_gate_v2.glb',x:5,z:25,scale:1.05,yaw:.03},

    // Stronger tree silhouettes.
    {asset:'tree_d_forked.glb',x:-22,z:4,scale:1.05,yaw:-.35},
    {asset:'tree_d_forked.glb',x:18,z:20,scale:.96,yaw:.48},
    {asset:'tree_d_forked.glb',x:24,z:-14,scale:1.02,yaw:-.12},
    {asset:'tree_e_windswept.glb',x:-21,z:20,scale:1.02,yaw:.80},
    {asset:'tree_e_windswept.glb',x:16,z:-20,scale:.92,yaw:-.55},
    {asset:'tree_e_windswept.glb',x:-8,z:27,scale:.97,yaw:.28},

    // Wetland ecology — clustered near water instead of uniform scatter.
    {asset:'wetland_cluster.glb',x:-19,z:7,scale:1.05,yaw:.15},
    {asset:'wetland_cluster.glb',x:-17,z:12,scale:.95,yaw:-.30},
    {asset:'wetland_cluster.glb',x:-12,z:15,scale:1.12,yaw:.45},
    {asset:'wetland_cluster.glb',x:-6,z:10,scale:.92,yaw:-.20},
    {asset:'wetland_cluster.glb',x:-7,z:4,scale:1.0,yaw:.30},
    {asset:'wetland_cluster.glb',x:-15,z:0,scale:.88,yaw:-.45}
  ];

  const buckets=new Map();
  const materials=new Map();

  for(const p of placements){
    const source=loaded.get(p.asset);
    if(!source)throw new Error('Pass 5 missing source '+p.asset);

    const q=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,p.yaw,0));
    const matrix=new THREE.Matrix4().compose(
      new THREE.Vector3(p.x,environmentPlacementY09B(p.x,p.z,p.asset),p.z),
      q,
      new THREE.Vector3(p.scale,p.scale,p.scale)
    );

    source.updateMatrixWorld(true);
    source.traverse(obj=>{
      if(!obj.isMesh)return;
      const sourceMats=Array.isArray(obj.material)?obj.material:[obj.material];
      if(sourceMats.length!==1)throw new Error('Pass 5 multi-material mesh unsupported '+p.asset);
      const material=sourceMats[0];
      const name=material?.name||'';
      if(![
        'MAT_EARTH_WARM',
        'MAT_EARTH_DAMP',
        'MAT_RUIN_STONE',
        'MAT_BARK_DARK',
        'MAT_FOLIAGE_MID',
        'MAT_WETLAND_REED'
      ].includes(name))throw new Error('Pass 5 material not approved '+name);

      const placementY=environmentPlacementY09B(p.x,p.z,p.asset);
      const g=conformTerrainGeometryPass5_09B(
        normalizedGeometry09D(obj,matrix),
        placementY,
        p.asset
      );
      const list=buckets.get(name)||[];
      list.push(g);
      buckets.set(name,list);
      if(!materials.has(name))materials.set(name,material);
    });
  }

  pass5Batches09B=buckets.size;
  if(pass5Batches09B>6)throw new Error('Pass 5 batch ceiling exceeded '+pass5Batches09B);

  for(const [name,geos] of buckets){
    const merged=mergeGeometries09D(geos,false);
    if(!merged)throw new Error('Pass 5 merge failed '+name);

    const material=materials.get(name).clone();
    material.name=name;
    material.metalness=0;

    if(name==='MAT_EARTH_WARM')material.color.set(0x766a4f);
    if(name==='MAT_EARTH_DAMP')material.color.set(0x596150);
    if(name==='MAT_RUIN_STONE')material.color.set(0x77796f);
    if(name==='MAT_BARK_DARK')material.color.set(0x503526);
    if(name==='MAT_FOLIAGE_MID')material.color.set(0x3f7242);
    if(name==='MAT_WETLAND_REED'){
      material.color.set(0x718b50);
      material.side=THREE.DoubleSide;
    }
    material.roughness=Math.max(.9,material.roughness||.9);
    material.needsUpdate=true;

    const mesh=new THREE.Mesh(merged,material);
    mesh.name='09B_PASS5_BATCH_'+name;
    mesh.castShadow=!name.includes('WETLAND');
    mesh.receiveShadow=true;
    pass5Root09B.add(mesh);

    pass5Triangles09B+=Math.round((merged.getAttribute('position')?.count||0)/3);
  }

  beauty09D.root.add(pass5Root09B);
}

async function applyPresentationPass5_09B(){
  if(pass5Applied09B)return;
  if(!globalThis.__presentationPass4_09B?.applied)throw new Error('Pass 5 requires applied Pass 4');

  const stoneWarm=materialByNameP3('MAT_STONE_WARM');
  const stoneDark=materialByNameP3('MAT_STONE_DARK');
  if(clipLegacyGateGeometry09B(stoneWarm))legacyGateClipMaterials09B++;
  if(clipLegacyGateGeometry09B(stoneDark))legacyGateClipMaterials09B++;

  await loadPass5EnvironmentAssets09B();

  // The systemic terrain becomes the sole visible ground surface. Preserve the
  // Pass-5 presentation look through its existing vertex colors/material rather
  // than stacking a second near-coplanar meadow mesh above it.
  terrainMat.color.set(0xa9b59a);
  terrainMat.roughness=.99;
  terrainMat.bumpScale=.14;

  const meadow=objectByNameP3('09B meadow ground p2');
  if(meadow){
    meadow.visible=false;
    legacyMeadowHidden09B=true;
  }

  const path=objectByNameP3('09B soil path p2');
  if(path?.material){
    path.material.color.set(0x8c684e);
    path.material.roughness=1;
    path.material.bumpScale=.14;
  }

  const shore=objectByNameP3('09B wet shoreline p2');
  if(shore){
    shore.visible=false;
    legacyShoreHidden09B=true;
  }

  pass5Applied09B=true;
}

function pass5Proof09B(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const integration=globalThis.__assetIntegration09D;
  const duplicates=integration?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const checks={
    applied:pass5Applied09B,
    pass4:globalThis.__presentationPass4_09B?.applied===true,
    v3_assets:pass5Loaded09B===8,
    v3_batches:pass5Batches09B<=6,
    gate_clip:legacyGateClipMaterials09B===2,
    terrain_conformance:pass5ConformedVertices09B>0,
    terrain_clearance:Number.isFinite(pass5MinVertexClearance09B)&&pass5MinVertexClearance09B>=.10,
    legacy_shore_hidden:legacyShoreHidden09B===true,
    legacy_meadow_hidden:legacyMeadowHidden09B===true,
    player_glb:characterMode==='GLB',
    draw_calls:calls<=120,
    triangles:triangles<=350000,
    regression:regression==='PASS',
    duplicates:duplicates===0,
    no_error:!pass5Error09B
  };
  const failed=Object.entries(checks).filter(([,ok])=>!ok).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,regression,duplicates};
}

function updatePass5Hud09B(){
  if(lodRoot06I)lodRoot06I.visible=false;
  const p=pass5Proof09B();
  setP5Text09B(p5StageEl09B,p.automatedReady?'HUMAN REVIEW':pass5Error09B?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':pass5Error09B?'#ff9b9b':'#ffe59a');
  setP5Text09B(p5AssetsEl09B,pass5Loaded09B+' / 8');
  setP5Text09B(p5BatchesEl09B,pass5Batches09B+' / 6');
  setP5Text09B(p5AssetTriEl09B,pass5Triangles09B.toLocaleString());
  setP5Text09B(p5GateEl09B,legacyGateClipMaterials09B+' / 2');
  setP5Text09B(p5PlayerEl09B,characterMode,characterMode==='GLB'?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5DrawEl09B,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5TriEl09B,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5DupEl09B,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');
  setP5Text09B(p5RegressionEl09B,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');

  if(pass5Error09B){
    setP5Text09B(p5ResultEl09B,'PASS 5 FAIL · '+pass5Error09B,'#ff9b9b');
  }else if(p.automatedReady){
    setP5Text09B(
      p5ResultEl09B,
      'ENVIRONMENT GLBs ✓ · SYSTEMIC GROUND ONLY ✓ · TERRAIN-CONFORMED BANKS/PATH/SHORE ✓ · LEGACY SHORE HIDDEN ✓ · RUIN V2 ✓ · TREE VARIANTS ✓ · WETLAND ECOLOGY ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED',
      '#ffe59a'
    );
  }else{
    setP5Text09B(p5ResultEl09B,'BUILDING ENVIRONMENT ART PRODUCTION PASS','#ffe59a');
  }
}

const pass5Hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const pass5Hook09B=(now)=>{
  if(!pass5Started09B&&globalThis.__presentationPass4_09B?.applied){
    pass5Started09B=true;
    applyPresentationPass5_09B().catch(error=>{
      pass5Error09B=error?.message||String(error);
    });
  }

  // Preserve Pass-4 presentation cleanup if frozen proof lifecycles recreate visuals.
  if(lodRoot06I)lodRoot06I.visible=false;

  if(now>=pass5HudNext09B){
    updatePass5Hud09B();
    pass5HudNext09B=now+350;
  }
};
pass5Hook09B.presentationPass5Id='09B_PRESENTATION_PASS_5_ENVIRONMENT_ART';
if(!pass5Hooks09B.some(h=>h.presentationPass5Id===pass5Hook09B.presentationPass5Id))pass5Hooks09B.push(pass5Hook09B);

globalThis.__presentationPass5_09B={
  marker:PRESENTATION_PASS_5_09B_MARKER,
  root:pass5Root09B,
  get applied(){return pass5Applied09B;},
  get assetsLoaded(){return pass5Loaded09B;},
  get batches(){return pass5Batches09B;},
  get triangles(){return pass5Triangles09B;},
  get conformedVertices(){return pass5ConformedVertices09B;},
  get minVertexClearance(){return pass5MinVertexClearance09B;},
  get legacyShoreHidden(){return legacyShoreHidden09B;},
  get legacyMeadowHidden(){return legacyMeadowHidden09B;},
  get proof(){return pass5Proof09B();}
};
