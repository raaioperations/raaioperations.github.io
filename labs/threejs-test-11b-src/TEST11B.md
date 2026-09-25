# Test11B — Player + Camera + Mobile Control Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Production Kernel v0.1  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove that a complete third-person player stack can be added to the greenfield kernel without compromising the one-scheduler architecture.

## Scope

- reuse the proven Soldier.glb asset;
- explicit asset manager and load/error state;
- player movement: idle / walk / sprint / jump;
- animation state mapping: Idle / Walk / Run;
- keyboard input;
- touch joystick;
- touch sprint + jump buttons;
- drag-to-orbit camera;
- bounded camera pitch/distance;
- analytic camera collision against test obstacles;
- zero new RAF loops;
- explicit player/camera/input disposal;
- deterministic unit and browser tests.

## Non-goals

No world streaming, AI, combat, persistence, water, post-processing, production terrain, or WebGPU.

## Acceptance gates

- exactly 1 requestAnimationFrame source call;
- Three.js 0.186.0 / WebGLRenderer;
- Soldier.glb loads successfully;
- player movement verified in browser;
- jump leaves and returns to ground;
- animation mixer active;
- camera distance remains inside bounds;
- camera collision test passes;
- keyboard input contract exists;
- coarse-pointer touch controls exist;
- resize/orientation PASS;
- mount/dispose PASS;
- runtime errors = 0;
- draw calls <= 20;
- triangles <= 20,000;
- Test11A baseline invariants preserved.

Tests close when passed. Capabilities promote into the development baseline; tests themselves are not frozen.
