export {
  BOUNDED_PREFETCH_SCHEMA_VERSION,
  PrefetchBudgetState
} from './bounded-prefetch-lifecycle-core.js';

export {
  BoundedPredictivePrefetchController
} from './bounded-predictive-prefetch-controller.js';

export const BOUNDED_PREFETCH_LIFECYCLE_08C=Object.freeze({
  version:1,
  milestone:'08C — Bounded Prefetch Lifecycle',
  proves:[
    'stale target cancellation',
    'prepared-instance eviction before activation',
    'bounded prepared pool',
    're-prefetch after cancellation',
    'prepared instance consumption on successful handoff',
    'stable return-region state',
    'one shared asset load',
    'zero duplicate bindings',
    'mobile regression preserved'
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
