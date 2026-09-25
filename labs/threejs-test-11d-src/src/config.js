export const THREE_VERSION='0.186.0';

export const FRAME_PHASE=Object.freeze({
  INPUT:10,
  SIMULATION:20,
  ANIMATION:30,
  STREAMING:40,
  PRESENTATION:50,
  CAMERA:60,
  QUALITY:70,
  DIAGNOSTICS:80,
  RENDER:90
});

export const LIMITS=Object.freeze({
  rafLoops:1,
  drawCallsMax:64,
  trianglesMax:90000,
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
