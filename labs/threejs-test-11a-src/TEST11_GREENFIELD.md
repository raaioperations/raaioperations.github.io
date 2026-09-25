# Test11 — Greenfield Production Rebuild

## 11A — Production Kernel

**Status:** IMPLEMENTATION AUTHORIZED / OPEN  
**Architecture source:** greenfield  
**Reference platform:** RAAI Three.js Experimental Reference Platform v1  
**Reference accepted presentation:** 09B build `20260924205044`

## Purpose

Build a new production-oriented Three.js foundation from first principles using lessons learned from Tests 04–10 without inheriting their runtime architecture.

The experimental platform remains intact and is used only as a benchmark/reference.

## Doctrine

Reuse knowledge and proven assets. Do not port legacy architecture.

The greenfield kernel must establish:

- exactly one authoritative frame scheduler;
- one renderer owner;
- one active scene owner;
- one active camera owner;
- explicit mount/start/pause/resize/dispose lifecycle;
- mobile-safe canvas sizing and DPR caps;
- explicit resource ownership/disposal;
- deterministic system ordering;
- browser-level smoke verification;
- diagnostics suitable for future performance comparison.

## Renderer decision

Initial renderer: **WebGLRenderer**

Reason:

- iPhone/mobile-browser compatibility remains a primary requirement;
- the rebuild should isolate architecture improvements before introducing a renderer migration;
- WebGPU remains a future comparative branch behind a renderer adapter boundary.

## 11A scope

11A intentionally contains no gameplay, streaming, AI, persistence, combat, water, or production assets.

It proves only the production kernel:

```text
GameApp
 ├─ RendererService
 ├─ FrameScheduler
 ├─ QualityManager
 ├─ PerformanceMonitor
 ├─ ResourceTracker
 ├─ KernelScene
 └─ DiagnosticsPanel
```

## Frame phases

```text
INPUT
SIMULATION
ANIMATION
STREAMING
PRESENTATION
CAMERA
QUALITY
DIAGNOSTICS
RENDER
```

All future systems must register with the scheduler rather than create their own RAF loop.

## 11A acceptance gates

- source `requestAnimationFrame(...)` calls = **1**
- `renderer.setAnimationLoop(...)` calls = **0**
- renderer = **WebGLRenderer**
- Three.js = **0.186.0**
- build = PASS
- unit tests = PASS
- browser WebGL smoke = PASS
- scheduler system order = PASS
- resize/aspect update = PASS
- visibility pause/resume contract exists
- disposal contract exists
- runtime errors in browser smoke = 0
- draw calls <= 10
- triangles <= 5,000
- experimental reference platform remains untouched

## Non-goals

Do not add:

- player controller;
- Soldier GLB;
- world streaming;
- vegetation;
- water;
- AI;
- persistence;
- post-processing;
- WebGPU;
- production world content.

Those belong to later Test11 milestones.

## Advancement

11A must pass before 11B — Player / Camera / Mobile Control Foundation.
