# Test11E — Living World Runtime

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Production World Foundation v0.4  
**Environment:** Copperwash Reach — Living World  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove that the greenfield production-world architecture can support a deterministic, persistent, chunk-aware population without unbounded per-frame simulation or a second frame loop.

## Systems under test

- deterministic actor identities per world chunk;
- compact in-session persistent actor state;
- chunk-aware activation/deactivation;
- fixed actor visual pool;
- simulation LOD by chunk distance;
- deterministic staggered actor updates;
- hard per-frame actor update budget;
- persistent state restoration after chunk unload/reload;
- deterministic wandering behavior;
- active/dormant population diagnostics;
- one-RAF integration with the existing world, player, camera, quality, chunking, spatial hash, and asset cache.

## Population contract

- 3 actors per active chunk;
- 9 active chunks;
- maximum active actors: 27;
- visual pool capacity: 27;
- actor IDs: stable `actor:cx:cz:index`;
- actor state remains in the in-session store when its chunk leaves the active 3×3 window;
- dormant chunk state is retained up to a bounded store limit.

## Simulation LOD

- NEAR actors: update every frame;
- MID actors: update every 4th frame, deterministically staggered;
- FAR actors: update every 12th frame, deterministically staggered;
- maximum actor simulation updates per frame: 12;
- skipped actors do not allocate work or create new scene objects.

## Persistence

Actor state is domain data, separate from rendered instances. Deactivation removes only the active visual binding. Reactivation rebinds the same stable entity state.

## Visual representation

11E uses pooled low-poly actor markers, not final NPC art. This test evaluates runtime architecture, not character presentation.

## Non-goals

No dialogue, combat, pathfinding mesh, faction logic, quests, networking, save-to-disk persistence, or final NPC models.

## Acceptance gates

- exactly one requestAnimationFrame source call;
- Three.js 0.186.0 / WebGLRenderer;
- v0.4 baseline preserved;
- active world chunks remain 9;
- active actor count = 27;
- actor visual pool capacity = 27 with zero reallocations;
- stable deterministic actor IDs;
- duplicate actor IDs = 0;
- peak actor updates/frame <= 12;
- NEAR average update frequency > MID > FAR;
- actor state survives unload/reload of a chunk;
- reactivation restores the same actor IDs/state;
- dormant state store remains bounded;
- player grounding/jump preserved;
- camera broad phase preserved;
- asset-cache behavior preserved;
- adaptive quality preserved;
- browser runtime errors = 0;
- draw calls <= 70;
- triangles <= 95,000;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline. Tests are never frozen.
