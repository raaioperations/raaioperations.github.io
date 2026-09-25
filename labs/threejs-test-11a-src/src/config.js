export const THREE_VERSION = '0.186.0';

export const FRAME_PHASE = Object.freeze({
  INPUT: 10,
  SIMULATION: 20,
  ANIMATION: 30,
  STREAMING: 40,
  PRESENTATION: 50,
  CAMERA: 60,
  QUALITY: 70,
  DIAGNOSTICS: 80,
  RENDER: 90
});

export const KERNEL_LIMITS = Object.freeze({
  rafLoops: 1,
  drawCallsMax: 10,
  trianglesMax: 5000,
  frameDtClampSeconds: 0.05,
  desktopMaxDpr: 1.5,
  mobileMaxDpr: 1.25
});
