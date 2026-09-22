export {
  PREDICTIVE_HANDOFF_SCHEMA_VERSION,
  PredictiveRegionPrefetchPlanner
} from './predictive-region-prefetch-core.js';

export {
  ThreePredictiveActorFactory
} from './three-predictive-actor-factory.js';

export const PREDICTIVE_REGION_HANDOFF_08B=Object.freeze({
  version:1,
  milestone:'08B — Predictive Region Handoff',
  proves:[
    'movement-directed region prediction',
    'visual actor preparation before activation radius',
    'prepared instance consumption during region load',
    'shared frozen asset cache',
    'no simulation before region activation',
    'stable actor state through return handoff',
    'zero duplicate bindings',
    'mobile performance regression preserved'
  ],
  boundaries:{
    newAIBehavior:'none',
    newCombat:'none',
    newAssets:'none',
    diskPersistence:'none',
    predictiveSimulation:'none',
    broadWorldStreaming:'none'
  }
});
