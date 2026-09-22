export const ASSET_BASE_09D='/assets/3d/sunlit-basin/v1/';

export const ASSET_FILES_09D=Object.freeze([
  'tree_a_tall_broad.glb',
  'tree_b_short_wide.glb',
  'tree_c_leaning_asym.glb',
  'rock_a_medium_angular.glb',
  'rock_b_flat_shore.glb',
  'rock_c_hero_boulder.glb',
  'shrub_a_round.glb',
  'shrub_b_spreading.glb',
  'grass_tuft_a.glb',
  'flower_patch_a.glb',
  'gate_sunlit_basin.glb',
  'ridge_a_layered.glb',
  'ridge_b_spur.glb'
]);

export const APPROVED_MATERIALS_09D=Object.freeze([
  'MAT_BARK_DARK',
  'MAT_BARK_WARM',
  'MAT_FOLIAGE_DARK',
  'MAT_FOLIAGE_MID',
  'MAT_FOLIAGE_LIGHT',
  'MAT_STONE_WARM',
  'MAT_STONE_DARK',
  'MAT_GRASS_MEADOW',
  'MAT_GRASS_DARK',
  'MAT_FLOWER_GOLD',
  'MAT_FLOWER_ROSE',
  'MAT_FLOWER_BLUE'
]);

export const PROTOTYPE_NAMES_09D=Object.freeze([
  '09B tree trunks p2',
  '09B canopy p2',
  '09B grass blades p2',
  '09B understory shrubs p2',
  '09B flowers p2',
  '09B rocks p2',
  '09B layered ridge p2',
  '09B weathered stone gate p2'
]);

export const PLACEMENTS_09D=Object.freeze([
  // Trees — 18 placements across three authored families.
  ...[
    [-28,-15,1.05,-.20],[-25,-5,.95,.35],[-27,8,1.10,-.55],[-22,18,1.00,.15],
    [22,-18,1.08,.45],[27,-7,.94,-.20],[26,8,1.04,.30]
  ].map((p,i)=>({asset:'tree_a_tall_broad.glb',id:'TA'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),
  ...[
    [-17,-25,1.00,.10],[-5,-28,.92,-.45],[10,-27,1.08,.35],
    [19,-23,.96,-.15],[29,18,1.02,.55],[-28,23,.98,-.25]
  ].map((p,i)=>({asset:'tree_b_short_wide.glb',id:'TB'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),
  ...[
    [-18,26,1.02,-.55],[-5,29,.95,.30],[10,28,1.06,-.15],[20,24,.98,.48],[30,2,.94,-.35]
  ].map((p,i)=>({asset:'tree_c_leaning_asym.glb',id:'TC'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),

  // Rocks — shoreline, path-edge, and hero accents.
  ...[
    [-7,-11,.8,.1],[-3,12,.9,.5],[14,15,1.0,-.2],[18,-8,.85,.7],[-18,-7,1.0,-.4],[-21,13,.9,.2]
  ].map((p,i)=>({asset:'rock_a_medium_angular.glb',id:'RA'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),
  ...[
    [-19,1,.78,.1],[-18,7,.92,.5],[-16,13,.84,-.2],[-9,16,.88,.7],[-5,12,.72,-.4],[-6,3,.80,.2]
  ].map((p,i)=>({asset:'rock_b_flat_shore.glb',id:'RB'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),
  ...[
    [16,7,1.0,.3],[-20,-18,.82,-.5],[24,18,.75,.1]
  ].map((p,i)=>({asset:'rock_c_hero_boulder.glb',id:'RC'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),

  // Understory — 18.
  ...[
    [-20,-13,.8,.2],[-23,-2,.95,.4],[-20,11,.75,-.4],[-15,20,.9,.2],[-6,22,.82,-.1],
    [14,21,.9,.4],[22,14,.78,-.3],[23,2,.88,.2],[18,-12,.82,-.2],[8,-22,.9,.3]
  ].map((p,i)=>({asset:'shrub_a_round.glb',id:'SA'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),
  ...[
    [-12,-22,.85,.2],[-25,-11,.82,-.4],[-24,16,.86,.1],[-10,25,.78,.5],
    [5,24,.84,-.2],[17,18,.82,.3],[25,-12,.88,-.5],[14,-20,.80,.1]
  ].map((p,i)=>({asset:'shrub_b_spreading.glb',id:'SB'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),

  // Ground cover — 60 grass tufts + 8 flower patches.
  ...Array.from({length:60},(_,i)=>{
    const ring=8+(i%5)*4.4;
    const a=i*2.399963229728653;
    const x=Math.cos(a)*ring + ((i%3)-1)*.7;
    const z=Math.sin(a)*ring + (((i+1)%3)-1)*.7;
    return {asset:'grass_tuft_a.glb',id:'G'+i,x,z,scale:.55+(i%7)*.055,yaw:(i*.73)%(Math.PI*2)};
  }),
  ...[
    [-7,-17,.85,.2],[2,-14,.8,-.3],[11,-8,.9,.5],[15,4,.82,-.1],
    [8,14,.86,.4],[-2,18,.78,-.5],[-15,17,.9,.2],[-20,-6,.82,-.3]
  ].map((p,i)=>({asset:'flower_patch_a.glb',id:'F'+i,x:p[0],z:p[1],scale:p[2],yaw:p[3]})),

  // Landmark.
  {asset:'gate_sunlit_basin.glb',id:'GATE',x:5,z:25,scale:1.0,yaw:0},

  // Distant terrain silhouettes.
  {asset:'ridge_a_layered.glb',id:'RGA0',x:-18,z:50,scale:1.45,yaw:0},
  {asset:'ridge_a_layered.glb',id:'RGA1',x:18,z:56,scale:1.30,yaw:.04},
  {asset:'ridge_b_spur.glb',id:'RGB0',x:-22,z:67,scale:1.55,yaw:-.03},
  {asset:'ridge_b_spur.glb',id:'RGB1',x:22,z:72,scale:1.42,yaw:.02}
]);

export const INTEGRATION_BUDGET_09D=Object.freeze({
  requiredAssetLoads:13,
  requiredPrototypeReplacements:8,
  maxMaterialBatches:12,
  maxPlacementCount:130,
  maxAddedTriangles:18000,
  absoluteDrawCallsMax:120,
  absoluteTrianglesMax:350000,
  soldierAssetLoadsExpected:1,
  duplicateRuntimeStateExpected:0
});

export const ASSET_INTEGRATION_09D=Object.freeze({
  milestone:'09D — Sunlit Basin Asset Integration Proof',
  assetKit:'09C v1',
  supportsOpenPresentationMilestone:'09B — Vertical Beauty Slice',
  broadContentExpansion:false,
  humanRuntimeReviewRequired:true,
  presentationAcceptance:false
});
