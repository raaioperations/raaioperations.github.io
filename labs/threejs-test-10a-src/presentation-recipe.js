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
    w1Base: '/assets/3d/windcut-shelf/v1/',
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
      'shrub_b_spreading.glb',
      'shelf_escarpment_a.glb',
      'windcut_rock_spine_a.glb',
      'ruin_windcut_fragment_a.glb',
      'deadwood_windswept_a.glb'
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
    // Windcut-specific macro anchors: these establish place identity first.
    {asset:'shelf_escarpment_a.glb',version:'w1',x:-3,z:22,scale:1.00,yaw:.10},
    {asset:'shelf_escarpment_a.glb',version:'w1',x:17,z:27,scale:.72,yaw:-.34},
    {asset:'windcut_rock_spine_a.glb',version:'w1',x:-14,z:13,scale:1.00,yaw:.24},
    {asset:'windcut_rock_spine_a.glb',version:'w1',x:18,z:11,scale:.72,yaw:1.42},
    {asset:'ruin_windcut_fragment_a.glb',version:'w1',x:10,z:20,scale:1.06,yaw:-.38},
    {asset:'deadwood_windswept_a.glb',version:'w1',x:-6,z:8,scale:1.00,yaw:.48},
    {asset:'deadwood_windswept_a.glb',version:'w1',x:20,z:1,scale:.82,yaw:-.72},

    // Existing terrain grammar frames the diagonal traversal opening.
    {asset:'terrain_bank_a.glb',version:'v3',x:-10,z:-3,scale:.78,yaw:.92},
    {asset:'terrain_bank_b.glb',version:'v3',x:11,z:5,scale:.72,yaw:2.04},
    {asset:'path_cut_berms.glb',version:'v3',x:-1,z:2,scale:.86,yaw:1.02},
    {asset:'path_cut_berms.glb',version:'v3',x:6,z:13,scale:.76,yaw:1.08},

    // Sparse canopy: intentionally fewer large trees than Sunlit Basin.
    {asset:'tree_d_forked.glb',version:'v3',x:-22,z:19,scale:.92,yaw:.42},
    {asset:'tree_e_windswept.glb',version:'v3',x:23,z:16,scale:.88,yaw:-.74},
    {asset:'tree_a_tall_broad.glb',version:'v1',x:-25,z:-9,scale:.86,yaw:.08},
    {asset:'tree_b_short_wide.glb',version:'v1',x:-19,z:2,scale:.78,yaw:1.14},
    {asset:'tree_c_leaning_asym.glb',version:'v1',x:18,z:-14,scale:.86,yaw:-.42},

    // Rock punctuation supports the shelf/ruin silhouettes without filling space.
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:-18,z:3,scale:.96,yaw:.24},
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:12,z:14,scale:.82,yaw:1.20},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:-5,z:16,scale:.78,yaw:.66},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:15,z:-6,scale:.84,yaw:1.76},

    // Minimal understory preserves negative space.
    {asset:'shrub_a_round.glb',version:'v1',x:-9,z:5,scale:.72,yaw:.10},
    {asset:'shrub_a_round.glb',version:'v1',x:8,z:-12,scale:.68,yaw:.90},
    {asset:'shrub_b_spreading.glb',version:'v1',x:16,z:7,scale:.70,yaw:-.60}
  ])
});
