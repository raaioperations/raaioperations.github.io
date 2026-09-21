export {
  PRODUCTION_ACTOR_SCHEMA_VERSION,
  ProductionActorDefinitionRegistry,
  ProductionActorRecord,
  ProductionActorPipeline
} from './actor-pipeline-core.js';

export {
  ThreeActorAssetCache,
  ThreeProductionActorBinding,
  ThreeProductionActorFactory
} from './three-actor-adapter.js';

export const PRODUCTION_ACTOR_PIPELINE_07B=Object.freeze({
  version:1,
  milestone:'07B — Production Actor Pipeline',
  responsibilities:[
    'stable actor identity',
    'actor definition registry',
    'production LivingWorldKernel ownership per actor',
    'asset cache and single-load policy',
    'skeleton-safe GLB cloning',
    'independent animation mixers',
    'render binding lifecycle',
    'transform and animation-intent synchronization'
  ],
  boundaries:{
    newAIBehavior:'none',
    regionStreaming:'deferred to 07C',
    combat:'unchanged',
    rendering:'Three.js adapter only; actor state remains engine-independent',
    persistenceDisk:'not included'
  }
});
