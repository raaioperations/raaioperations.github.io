export const PRESENTATION_REPLICATION_10A = Object.freeze({
  roadmap: 'Test10 — Presentation Replication',
  milestone: '10A — Second Environment Replication Proof',
  environment: 'Windcut Shelf',
  foundation: Object.freeze({
    acceptedBuild09B: '20260924205044',
    acceptancePath: 'labs/threejs-test-09b/acceptance.json',
    doctrine: 'Stylized Physical Realism'
  }),
  center: Object.freeze({
    source: '__boundedPrefetch08C.centers.B',
    terrainSampler: 'heightAt'
  }),
  budgets: Object.freeze({
    drawCallsMax: 120,
    trianglesMax: 350000,
    runtimeBatchesMax: 6,
    runtimeDuplicatesMax: 0,
    addedRafLoopsMax: 0,
    regression06J: 'PASS'
  }),
  materialBuckets: Object.freeze([
    'EARTH_CUT',
    'EARTH_CROWN',
    'STONE',
    'BARK',
    'FOLIAGE'
  ]),
  assets: Object.freeze({
    v3Base: '/assets/3d/sunlit-basin/v3/',
    v1Base: '/assets/3d/sunlit-basin/v1/',
    allowed: Object.freeze([
      'terrain_bank_a.glb',
      'terrain_bank_b.glb',
      'path_cut_berms.glb',
      'ruin_sunlit_gate_v2.glb',
      'tree_d_forked.glb',
      'tree_e_windswept.glb',
      'tree_a_tall_broad.glb',
      'tree_b_short_wide.glb',
      'tree_c_leaning_asym.glb',
      'rock_a_medium_angular.glb',
      'rock_b_flat_shore.glb',
      'rock_c_hero_boulder.glb',
      'shrub_a_round.glb',
      'shrub_b_spreading.glb'
    ])
  }),
  composition: Object.freeze({
    identity: 'exposed elevated forest shelf',
    waterCenterpiece: false,
    negativeSpace: 'high',
    canopyDensity: 'sparse-clustered',
    horizon: 'rock-and-ruin framed',
    route: 'diagonal',
    atmosphere: 'cooler-drier',
    macroFirst: true
  }),
  placements: Object.freeze([
    {asset:'terrain_bank_a.glb',version:'v3',x:-11,z:-7,scale:.88,yaw:.30},
    {asset:'terrain_bank_b.glb',version:'v3',x:10,z:8,scale:.84,yaw:2.25},
    {asset:'terrain_bank_b.glb',version:'v3',x:17,z:-10,scale:.78,yaw:1.62},
    {asset:'path_cut_berms.glb',version:'v3',x:-2,z:-10,scale:.92,yaw:1.08},
    {asset:'path_cut_berms.glb',version:'v3',x:5,z:8,scale:.84,yaw:1.14},
    {asset:'ruin_sunlit_gate_v2.glb',version:'v3',x:18,z:22,scale:.96,yaw:-.18},

    {asset:'tree_d_forked.glb',version:'v3',x:-22,z:16,scale:1.00,yaw:.42},
    {asset:'tree_e_windswept.glb',version:'v3',x:22,z:3,scale:.92,yaw:-.74},
    {asset:'tree_a_tall_broad.glb',version:'v1',x:-25,z:-11,scale:.92,yaw:.08},
    {asset:'tree_b_short_wide.glb',version:'v1',x:14,z:-22,scale:.86,yaw:1.14},
    {asset:'tree_c_leaning_asym.glb',version:'v1',x:-12,z:24,scale:.92,yaw:-.42},

    {asset:'rock_c_hero_boulder.glb',version:'v1',x:-18,z:4,scale:1.15,yaw:.24},
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:10,z:19,scale:.92,yaw:1.20},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:-5,z:16,scale:.90,yaw:.66},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:14,z:-4,scale:.82,yaw:2.10},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:-15,z:-16,scale:1.00,yaw:.48},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:20,z:14,scale:.88,yaw:1.76},

    {asset:'shrub_a_round.glb',version:'v1',x:-8,z:5,scale:.82,yaw:.10},
    {asset:'shrub_a_round.glb',version:'v1',x:7,z:-15,scale:.76,yaw:.90},
    {asset:'shrub_b_spreading.glb',version:'v1',x:-20,z:11,scale:.82,yaw:1.40},
    {asset:'shrub_b_spreading.glb',version:'v1',x:17,z:6,scale:.78,yaw:-.60}
  ])
});
