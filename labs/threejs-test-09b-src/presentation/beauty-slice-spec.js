export const BEAUTY_SLICE_09B=Object.freeze({
  version:2,
  milestone:'09B — Vertical Beauty Slice',
  name:'Sunlit Basin',
  radiusM:33,
  presentationPass:2,
  materialFamilies:Object.freeze([
    'meadow-ground',
    'soil-path',
    'wood',
    'foliage',
    'stone',
    'water'
  ]),
  depthLayers:Object.freeze([
    'foreground-ground-cover',
    'gameplay-plane',
    'midground-stone-gate',
    'distant-ridge-silhouette',
    'atmosphere-sky'
  ]),
  ambientMotionSystems:Object.freeze([
    'canopy-understory-wind',
    'grass-wind',
    'water-ripples',
    'airborne-pollen'
  ]),
  layout:Object.freeze({
    trees:28,
    grassTufts:320,
    shrubs:42,
    flowers:96,
    rocks:28,
    ridgeLayers:3,
    ridgeSegments:12,
    gateBlocks:14,
    pollen:240,
    pathSegments:42,
    shoreSegments:72
  }),
  presentationBudget:Object.freeze({
    addedDrawCallsMax:14,
    addedTrianglesMax:18000,
    absoluteDrawCallsMax:120,
    absoluteTrianglesMax:350000
  }),
  acceptance:Object.freeze({
    frameRule:[
      'place',
      'physical substance',
      'atmosphere',
      'scale',
      'motion',
      'character',
      'gameplay purpose'
    ],
    automatedProofIsPresentationAcceptance:false,
    humanPresentationReviewRequired:true,
    preserve06J:true,
    preserveTest08:true,
    broadContentExpansion:false
  })
});

export function seededBeautyRandom(seed=0x09b2026){
  let state=seed>>>0;
  return ()=>{
    state=(1664525*state+1013904223)>>>0;
    return state/4294967296;
  };
}
