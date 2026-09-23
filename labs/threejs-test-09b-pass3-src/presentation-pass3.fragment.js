
// ---- Test 09B: Vertical Beauty Slice / Presentation Pass 3 ----
const PRESENTATION_PASS_3_09B_MARKER='09B_PRESENTATION_PASS_3_ASSET_INTEGRATED';

let pass3Applied09B=false;
let pass3Error09B='';
let pass3HudNext09B=0;
let legacyMountainsHidden09B=0;

const p3StageEl09B=document.getElementById('p3Stage09B');
const p3MountainsEl09B=document.getElementById('p3Mountains09B');
const p3PlayerEl09B=document.getElementById('p3Player09B');
const p3AssetsEl09B=document.getElementById('p3Assets09B');
const p3BatchesEl09B=document.getElementById('p3Batches09B');
const p3DrawEl09B=document.getElementById('p3Draw09B');
const p3TriEl09B=document.getElementById('p3Triangles09B');
const p3RegressionEl09B=document.getElementById('p3Regression09B');
const p3DupEl09B=document.getElementById('p3Duplicates09B');
const p3ResultEl09B=document.getElementById('p3Result09B');

function setP3Text09B(el,value,color){
  if(!el)return;
  const text=String(value);
  if(el.textContent!==text)el.textContent=text;
  if(color&&el.style.color!==color)el.style.color=color;
}

function materialByNameP3(name){
  let found=null;
  beauty09D.root.traverse(o=>{
    if(found||!o.material)return;
    const mats=Array.isArray(o.material)?o.material:[o.material];
    for(const m of mats)if(m?.name===name){found=m;break;}
  });
  return found;
}

function objectByNameP3(name){
  return beauty09D.root.getObjectByName(name);
}

function applyPresentationPass3_09B(){
  if(pass3Applied09B)return;
  if(!globalThis.__assetIntegration09D?.complete)throw new Error('09B Pass 3 requires complete accepted 09D integration');

  // Remove inherited prototype horizon. The accepted 09C ridge GLBs remain.
  if(m1?.visible!==false){m1.visible=false;legacyMountainsHidden09B++;}
  if(m2?.visible!==false){m2.visible=false;legacyMountainsHidden09B++;}

  // Global presentation balance: deeper material response, less washout.
  renderer.toneMappingExposure=.92;
  scene.fog.color.set(0xaabfbd);
  scene.fog.density=.0067;

  hemi.color.set(0xc3dde3);
  hemi.groundColor.set(0x485246);
  hemi.intensity=1.18;
  fill.color.set(0x7e9298);
  fill.intensity=.085;
  sun.color.set(0xffdda9);
  sun.intensity=3.55;

  skyU.top.value.set(0x4789b2);
  skyU.mid.value.set(0xa8c6c3);
  skyU.bottom.value.set(0xe3cda6);
  skyU.sunWarm.value.set(0xffc77f);

  // Inherited world stays systemic, but recedes behind authored 09C asset families.
  bark.color.set(0x493326);
  bark.roughness=.96;
  leafA.color.set(0x28583a);
  leafB.color.set(0x376b45);
  leafC.color.set(0x4a7850);
  for(const m of [leafA,leafB,leafC])m.roughness=.9;
  bushMat.color.set(0x416d45);
  bushMat.roughness=.94;

  terrainMat.roughness=.98;
  terrainMat.bumpScale=.13;
  pathMat.color.set(0x7f654d);
  pathMat.roughness=.99;
  pathMat.bumpScale=.12;

  const meadow=objectByNameP3('09B meadow ground p2');
  if(meadow?.material){
    meadow.material.color.set(0xd5dfc4);
    meadow.material.roughness=.97;
    meadow.material.bumpScale=.10;
  }
  const path=objectByNameP3('09B soil path p2');
  if(path?.material){
    path.material.color.set(0xad8b67);
    path.material.roughness=.99;
    path.material.bumpScale=.11;
  }
  const shore=objectByNameP3('09B wet shoreline p2');
  if(shore?.material){
    shore.material.color.set(0x9c957e);
    shore.material.roughness=.92;
    shore.material.bumpScale=.08;
  }

  // Accepted 09C PBR families: preserve geometry/batching, tune only response.
  const barkDark=materialByNameP3('MAT_BARK_DARK');
  const barkWarm=materialByNameP3('MAT_BARK_WARM');
  const stoneWarm=materialByNameP3('MAT_STONE_WARM');
  const stoneDark=materialByNameP3('MAT_STONE_DARK');
  const grassMeadow=materialByNameP3('MAT_GRASS_MEADOW');
  const grassDark=materialByNameP3('MAT_GRASS_DARK');
  for(const m of [barkDark,barkWarm])if(m){m.roughness=.94;m.metalness=0;}
  for(const m of [stoneWarm,stoneDark])if(m){m.roughness=.98;m.metalness=0;}
  for(const m of [grassMeadow,grassDark])if(m){m.roughness=.92;m.metalness=0;}

  pass3Applied09B=true;
}

function pass3Proof09B(){
  const calls=renderer.info.render.calls||0;
  const triangles=renderer.info.render.triangles||0;
  const regression=globalThis.__livingWorld06J?.stage||'WAITING';
  const integration=globalThis.__assetIntegration09D;
  const duplicates=integration?.proof?.checks?.duplicate_runtime_state===true?0:1;
  const checks={
    applied:pass3Applied09B,
    accepted_09d_integration:integration?.complete===true,
    all_13_assets:integration?.loadedCount===13,
    legacy_mountains_hidden:legacyMountainsHidden09B===2,
    player_glb:characterMode==='GLB',
    material_batches:integration?.materialBatches<=8,
    draw_calls:calls<=120,
    triangles:triangles<=350000,
    regression:regression==='PASS',
    runtime_duplicates:duplicates===0,
    no_error:!pass3Error09B
  };
  const failed=Object.entries(checks).filter(([,v])=>!v).map(([k])=>k);
  return {automatedReady:failed.length===0,failed,checks,calls,triangles,regression,duplicates};
}

function updatePass3Hud09B(){
  const p=pass3Proof09B();
  setP3Text09B(p3StageEl09B,p.automatedReady?'HUMAN REVIEW':pass3Error09B?'FAIL':'BUILDING',p.automatedReady?'#ffe59a':pass3Error09B?'#ff9b9b':'#ffe59a');
  setP3Text09B(p3MountainsEl09B,legacyMountainsHidden09B+' / 2',legacyMountainsHidden09B===2?'#bdf3c8':'#ffe59a');
  setP3Text09B(p3PlayerEl09B,characterMode,characterMode==='GLB'?'#bdf3c8':'#ffb4a6');
  setP3Text09B(p3AssetsEl09B,(globalThis.__assetIntegration09D?.loadedCount||0)+' / 13');
  setP3Text09B(p3BatchesEl09B,(globalThis.__assetIntegration09D?.materialBatches||0)+' / 8');
  setP3Text09B(p3DrawEl09B,p.calls+' / 120',p.calls<=120?'#bdf3c8':'#ff9b9b');
  setP3Text09B(p3TriEl09B,p.triangles.toLocaleString()+' / 350,000',p.triangles<=350000?'#bdf3c8':'#ff9b9b');
  setP3Text09B(p3RegressionEl09B,p.regression,p.regression==='PASS'?'#bdf3c8':'#ffe59a');
  setP3Text09B(p3DupEl09B,String(p.duplicates),p.duplicates===0?'#bdf3c8':'#ff9b9b');

  if(pass3Error09B){
    setP3Text09B(p3ResultEl09B,'PASS 3 FAIL · '+pass3Error09B,'#ff9b9b');
  }else if(p.automatedReady){
    setP3Text09B(p3ResultEl09B,'ASSET-INTEGRATED ✓ · LEGACY MOUNTAINS REMOVED ✓ · PLAYER GLB ✓ · PERFORMANCE PASS ✓ · HUMAN PRESENTATION REVIEW REQUIRED','#ffe59a');
  }else if(characterMode!=='GLB'){
    setP3Text09B(p3ResultEl09B,'WAITING FOR LOCAL PLAYER GLB','#ffe59a');
  }else{
    setP3Text09B(p3ResultEl09B,'BUILDING PRESENTATION PASS 3','#ffe59a');
  }
}

const pass3Hooks09B=globalThis.__raaiFrameHooks||(globalThis.__raaiFrameHooks=[]);
const pass3Hook09B=(now)=>{
  try{
    if(!pass3Applied09B&&globalThis.__assetIntegration09D?.complete)applyPresentationPass3_09B();

    if(pass3Applied09B){
      // The inherited movement loop updates FOV before frame hooks. Enforce the
      // presentation lens here so the rendered frame uses the intended values.
      const movingFast=(keys.ShiftLeft||touchSprint)&&velocity.lengthSq()>.04;
      const targetFov=movingFast?56:50;
      camera.fov=THREE.MathUtils.lerp(camera.fov,targetFov,.18);
      camera.updateProjectionMatrix();
    }

    if(now>=pass3HudNext09B){
      updatePass3Hud09B();
      pass3HudNext09B=now+350;
    }
  }catch(error){
    pass3Error09B=error?.message||String(error);
  }
};
pass3Hook09B.presentationPass3Id='09B_PRESENTATION_PASS_3_ASSET_INTEGRATED';
if(!pass3Hooks09B.some(h=>h.presentationPass3Id===pass3Hook09B.presentationPass3Id))pass3Hooks09B.push(pass3Hook09B);

globalThis.__presentationPass3_09B={
  marker:PRESENTATION_PASS_3_09B_MARKER,
  get applied(){return pass3Applied09B;},
  get mountainsHidden(){return legacyMountainsHidden09B;},
  get proof(){return pass3Proof09B();}
};
