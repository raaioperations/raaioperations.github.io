export {
  PRODUCTION_WORLD_SCHEMA_VERSION,
  ProductionWorldRegionEntry,
  ProductionWorldManager
} from './production-world-manager.js';

export const MULTI_REGION_PRODUCTION_WORLD_08A=Object.freeze({
  version:1,
  milestone:'08A — Multi-Region Production World',
  proves:[
    'multiple independent production regions',
    'per-region snapshots',
    'per-region actor identity continuity',
    'per-region progress continuity',
    'shared frozen asset cache',
    'no cross-region state bleed',
    'at most one proof region active along authored route',
    'mobile regression remains inside budget'
  ],
  boundaries:{
    newAIBehavior:'none',
    newCombat:'none',
    newAssets:'none',
    diskPersistence:'none',
    multiplayer:'none',
    predictiveStreaming:'none',
    broadContentExpansion:'none'
  }
});
