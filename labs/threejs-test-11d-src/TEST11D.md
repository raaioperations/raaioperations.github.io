# Test11D — Production World Systems

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield World Foundation v0.3  
**Environment:** Copperwash Reach — Production Runtime  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove that the greenfield world foundation can scale into bounded production runtime systems without reverting to the experimental architecture.

## Systems under test

- deterministic 3x3 active world-chunk window;
- pooled chunk slots instead of allocation churn;
- deterministic chunk terrain and vegetation;
- distance-based vegetation LOD;
- explicit vegetation culling;
- spatial hash for obstacle broad-phase queries;
- camera collision querying only nearby obstacles;
- parsed GLB cache + clone/instance path;
- cache telemetry and duplicate-load elimination;
- adaptive mobile/desktop quality tiers with hysteresis;
- renderer DPR response to quality tier;
- bounded active chunk/spatial-entry counts;
- strengthened runtime diagnostics.

## Architectural invariants

- exactly one production requestAnimationFrame source call;
- one renderer owner;
- one scheduler owner;
- no renderer.setAnimationLoop;
- mount/start/pause/resize/dispose lifecycle remains explicit;
- world systems register into scheduler phases;
- chunk updates occur on chunk-boundary/quality changes, not by rebuilding the world every frame.

## Chunk contract

- active radius: 1 chunk = 3×3 = **9 pooled chunk slots**;
- chunk size: **28 m**;
- terrain segment grid: **12×12** per chunk;
- chunk seed derives from global seed + chunk coordinates;
- center chunk uses NEAR vegetation LOD;
- cardinal chunks use MID LOD;
- diagonal chunks use FAR LOD;
- quality tier may reduce vegetation density/visibility, never terrain continuity;
- slots are reassigned rather than destroyed/recreated.

## Spatial contract

Obstacles are indexed in a 2D spatial hash. Camera collision queries an AABB around the camera boom and tests only returned candidates.

## Asset contract

GLB URLs are parsed once and cached. Runtime placements clone cached scenes. Repeated rock placements must create cache hits without duplicate parsing.

## Quality contract

Quality tiers:

- HIGH
- BALANCED
- LOW

Tier changes use sustained-frame hysteresis. DPR and vegetation visibility respond to the active tier.

## Acceptance gates

- one RAF;
- WebGLRenderer / Three.js 0.186.0;
- 9 active pooled chunks;
- deterministic chunk reassignment;
- bounded pool size remains 9 after multiple chunk crossings;
- spatial hash candidate query returns fewer than full obstacle set in normal camera checks;
- asset cache records hits and misses;
- repeated GLB placement does not trigger duplicate parse;
- adaptive quality transitions pass deterministic tests;
- terrain remains continuous across chunk boundaries;
- player grounding and jump remain correct;
- camera terrain/obstacle clearance remains correct;
- keyboard/touch controls preserved;
- browser runtime errors = 0;
- draw calls <= 64;
- triangles <= 90,000;
- real-device inspection required before close.

Tests close when passed. Production capabilities promote into the development baseline. Tests are never frozen.
