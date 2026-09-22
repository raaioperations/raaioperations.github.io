export const BEAUTY_SLICE_09B=Object.freeze({
  version:1,
  milestone:'09B — Vertical Beauty Slice',
  name:'Sunlit Basin',
  radiusM:33,
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
    'distant-cliff-silhouette',
    'atmosphere-sky'
  ]),
  ambientMotionSystems:Object.freeze([
    'canopy-wind',
    'grass-wind',
    'water-ripples',
    'airborne-pollen'
  ]),
  layout:Object.freeze({
    trees:22,
    grassTufts:160,
    flowers:48,
    rocks:16,
    distantCliffs:10,
    pollen:180,
    pathSegments:30
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
