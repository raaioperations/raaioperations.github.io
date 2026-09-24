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
    macroFirst: true,
    firstLook: Object.freeze({
      spawn:Object.freeze({x:-3,z:-12}),
      vista:Object.freeze({x:2,z:8}),
      targetDistanceM:20.62,
      corridorHalfWidthM:5.5
    })
  }),
  placements: Object.freeze([
    // First-look composition: primary identity anchors sit directly beyond spawn.
    {asset:'shelf_escarpment_a.glb',version:'w1',x:1,z:6,scale:1.04,yaw:.08},
    {asset:'windcut_rock_spine_a.glb',version:'w1',x:-9,z:9,scale:1.08,yaw:.28},
    {asset:'ruin_windcut_fragment_a.glb',version:'w1',x:9,z:11,scale:1.12,yaw:-.42},
    {asset:'deadwood_windswept_a.glb',version:'w1',x:-4,z:2,scale:1.06,yaw:.54},

    // Secondary identity echoes extend the shelf rather than competing with the vista.
    {asset:'shelf_escarpment_a.glb',version:'w1',x:17,z:20,scale:.70,yaw:-.38},
    {asset:'windcut_rock_spine_a.glb',version:'w1',x:19,z:16,scale:.70,yaw:1.38},
    {asset:'deadwood_windswept_a.glb',version:'w1',x:20,z:2,scale:.78,yaw:-.72},

    // Terrain grammar defines a diagonal route into the four identity anchors.
    {asset:'terrain_bank_a.glb',version:'v3',x:-10,z:-1,scale:.74,yaw:.92},
    {asset:'terrain_bank_b.glb',version:'v3',x:11,z:4,scale:.68,yaw:2.02},
    {asset:'path_cut_berms.glb',version:'v3',x:-2,z:-3,scale:.82,yaw:1.03},
    {asset:'path_cut_berms.glb',version:'v3',x:4,z:7,scale:.72,yaw:1.09},

    // Trees are pushed to the flanks/back so trunks do not own the first-look frame.
    {asset:'tree_d_forked.glb',version:'v3',x:-24,z:18,scale:.86,yaw:.42},
    {asset:'tree_e_windswept.glb',version:'v3',x:24,z:18,scale:.82,yaw:-.74},
    {asset:'tree_a_tall_broad.glb',version:'v1',x:-25,z:-8,scale:.80,yaw:.08},
    {asset:'tree_b_short_wide.glb',version:'v1',x:-20,z:16,scale:.72,yaw:1.14},
    {asset:'tree_c_leaning_asym.glb',version:'v1',x:21,z:-11,scale:.80,yaw:-.42},

    // Rock punctuation leads the eye inward without blocking the corridor.
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:-15,z:1,scale:.88,yaw:.24},
    {asset:'rock_c_hero_boulder.glb',version:'v1',x:14,z:5,scale:.76,yaw:1.20},
    {asset:'rock_a_medium_angular.glb',version:'v1',x:-6,z:13,scale:.70,yaw:.66},
    {asset:'rock_b_flat_shore.glb',version:'v1',x:15,z:-5,scale:.76,yaw:1.76},

    // Minimal understory preserves the open diagonal sightline.
    {asset:'shrub_a_round.glb',version:'v1',x:-11,z:6,scale:.66,yaw:.10},
    {asset:'shrub_a_round.glb',version:'v1',x:10,z:-8,scale:.62,yaw:.90},
    {asset:'shrub_b_spreading.glb',version:'v1',x:15,z:9,scale:.64,yaw:-.60}
  ])
});
