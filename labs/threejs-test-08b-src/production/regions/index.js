export {
  PRODUCTION_REGION_SCHEMA_VERSION,
  ProductionRegionStateStore,
  ProductionRegion
} from './production-region-core.js';

export const STREAMED_PRODUCTION_REGION_07C=Object.freeze({
  version:1,
  milestone:'07C — Streamed Production Region',
  lifecycle:['UNLOADED','LOADING','ACTIVE','SERIALIZING','UNLOADING','REHYDRATING'],
  responsibilities:[
    'region-level actor ownership',
    'versioned region snapshots',
    'production actor serialize/unbind/destroy on unload',
    'production actor restore/rebind on rehydrate',
    'distance hysteresis',
    'offscreen elapsed-time continuity',
    'stable actor identity across region cycles'
  ],
  boundaries:{
    newAIBehavior:'none',
    newAssetRoster:'none',
    assetCache:'reuse frozen 07B ThreeProductionActorFactory cache',
    combat:'unchanged',
    diskPersistence:'not included',
    broadWorldStreaming:'not included',
    productionVerticalSlice:'deferred to 07D'
  }
});
