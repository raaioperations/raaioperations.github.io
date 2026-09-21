export {
  LIVING_WORLD_KERNEL_SCHEMA_VERSION,
  CANONICAL_LIVING_WORLD_DEFAULTS,
  pointSegmentDistance2D,
  WorldEventSequence,
  TimedSpatialMemory,
  StimulusArbiter,
  GoalContinuity,
  LivingWorldKernel
} from './living-world-kernel.js';

export {
  STREAM_CELL_SCHEMA_VERSION,
  DEFAULT_STREAM_CONFIG,
  StreamStateStore,
  StreamCell
} from './stream-cell-core.js';

export {
  SIM_LOD_TIERS,
  DEFAULT_SIM_LOD_CONFIG,
  SimulationLODController
} from './simulation-lod-core.js';

export const PRODUCTION_ARCHITECTURE_07A=Object.freeze({
  version:1,
  milestone:'07A — Production Architecture Promotion',
  modules:[
    'WorldEventSequence',
    'TimedSpatialMemory',
    'StimulusArbiter',
    'GoalContinuity',
    'LivingWorldKernel',
    'StreamStateStore',
    'StreamCell',
    'SimulationLODController'
  ],
  stateOwnership:{
    WorldEventSequence:'monotonic event identity only',
    TimedSpatialMemory:'local timed world-memory state + spatial applicability',
    StimulusArbiter:'stateless deterministic decision authority',
    GoalContinuity:'active/suspended goal + progress continuity',
    LivingWorldKernel:'orchestration order; no render ownership',
    StreamStateStore:'canonical serialized cell snapshots',
    StreamCell:'load/update/serialize/unload/rehydrate lifecycle',
    SimulationLODController:'distance tier + cadence + sleep/wake transitions'
  },
  boundaries:{
    rendering:'external adapter; no THREE dependency in production core',
    dom:'none',
    input:'external',
    combat:'unchanged / external',
    persistenceDisk:'not included',
    productionActorPipeline:'deferred to 07B',
    streamedProductionRegion:'deferred to 07C'
  }
});
