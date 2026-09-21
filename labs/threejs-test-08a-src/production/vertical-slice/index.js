export {
  PRODUCTION_VERTICAL_SLICE_SCHEMA_VERSION,
  ProductionVerticalSliceCoordinator
} from './production-vertical-slice-core.js';

export const PRODUCTION_VERTICAL_SLICE_07D=Object.freeze({
  version:1,
  milestone:'07D — Production Vertical Slice',
  proves:[
    'production actor pipeline active',
    'accepted timed memory event',
    'priority interruption of FOOD by HAZARD',
    'visible production animation-intent response',
    'goal recovery after memory expiry',
    'streamed production-region unload',
    'production-region rehydrate with stable actor identity',
    'progress continuity',
    'single cached asset load',
    'zero duplicate bindings',
    'inherited mobile performance regression'
  ],
  boundaries:{
    newAIBehavior:'none',
    newCombat:'none',
    newAssets:'none',
    diskPersistence:'none',
    multiplayer:'none',
    broadWorldStreaming:'none',
    gameplayContentExpansion:'none'
  }
});
