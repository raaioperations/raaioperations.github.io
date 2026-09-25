export const THREE_VERSION='0.186.0';

export const FRAME_PHASE=Object.freeze({
  INPUT:10,
  SIMULATION:20,
  ANIMATION:30,
  STREAMING:40,
  ACTORS:45,
  PRESENTATION:50,
  INTERACTION:55,
  COMBAT:57,
  CAMERA:60,
  QUALITY:70,
  DIAGNOSTICS:80,
  RENDER:90
});

export const LIMITS=Object.freeze({
  rafLoops:1,
  drawCallsMax:82,
  trianglesMax:110000,
  frameDtClampSeconds:.05,
  desktopMaxDpr:1.5,
  mobileMaxDpr:1.25
});

export const PLAYER=Object.freeze({
  walkSpeed:4.6,
  sprintSpeed:8.2,
  acceleration:15,
  airAcceleration:5,
  damping:11,
  gravity:19.5,
  jumpVelocity:7.2,
  radius:.36
});

export const CAMERA=Object.freeze({
  minDistance:3.8,
  maxDistance:10.5,
  defaultDistance:6.8,
  minPitch:-.08,
  maxPitch:.78,
  defaultPitch:.25,
  defaultYaw:.38,
  collisionPadding:.32,
  terrainPadding:.42,
  damping:12
});

export const WORLD=Object.freeze({
  name:'Copperwash Reach',
  seed:1103,
  chunkSize:28,
  activeRadius:1,
  activeChunkCount:9,
  terrainSegments:12,
  waterLevel:-.55,
  waterCenterX:9,
  waterCenterZ:-6,
  waterRadius:10.5,
  playerSpawnX:-10,
  playerSpawnZ:12,
  maxTreesPerChunk:7,
  maxShrubsPerChunk:10,
  spatialCellSize:14
});

export const QUALITY=Object.freeze({
  HIGH:Object.freeze({dprScale:1,farVegetationDistance:64,densityScale:1}),
  BALANCED:Object.freeze({dprScale:.88,farVegetationDistance:52,densityScale:.78}),
  LOW:Object.freeze({dprScale:.74,farVegetationDistance:40,densityScale:.55}),
  degradeAboveMs:21.5,
  improveBelowMs:15.2,
  degradeFrames:45,
  improveFrames:180
});

export const ACTORS=Object.freeze({
  perChunk:3,
  activeCapacity:27,
  updateBudgetPerFrame:12,
  nearInterval:1,
  midInterval:4,
  farInterval:12,
  storeChunkLimit:48,
  minSpeed:.34,
  maxSpeed:.72,
  homeMargin:2.3,
  behaviorBudgetPerFrame:6,
  interactionBudgetPerFrame:2,
  nearBehaviorInterval:4,
  midBehaviorInterval:12,
  farBehaviorInterval:36,
  perceptionRadius:5.5,
  playerAwarenessRadius:7.5,
  avoidRadius:1.15,
  socialRadius:2.25,
  obstacleAvoidDistance:1.35,
  socialDurationFrames:72,
  observeDurationFrames:36,
  avoidDurationFrames:24,
  interactionCooldownFrames:180,
  neighborhoodCellSize:5,
  playerInteractionHoldFrames:90
});

export const BEHAVIOR=Object.freeze({
  WANDER:'WANDER',
  OBSERVE_PLAYER:'OBSERVE_PLAYER',
  AVOID:'AVOID',
  SOCIAL:'SOCIAL'
});

export const INTERACTION=Object.freeze({
  maxDistance:4.5,
  facingMinDot:-0.18,
  actionBudgetPerFrame:1,
  pickupPriority:0,
  usePriority:.12,
  npcPriority:.28,
  facingPenalty:1.15
});

export const COMBAT=Object.freeze({
  targetRange:4.6,
  attackRange:2.65,
  facingMinDot:-0.10,
  facingPenalty:.90,
  attackStartsPerFrame:1,
  damage:25,
  maxHealth:100,
  windupFrames:8,
  activeFrames:4,
  recoveryFrames:14,
  staggerFrames:16,
  targetIndicatorRadius:.62
});

export const COMBAT_PHASE=Object.freeze({
  READY:'READY',
  WINDUP:'WINDUP',
  ACTIVE:'ACTIVE',
  RECOVERY:'RECOVERY'
});
