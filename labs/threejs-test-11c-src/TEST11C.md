# Test11C — World Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Player / Camera Foundation v0.2  
**Environment:** Copperwash Reach  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove that the greenfield player/camera baseline can support a coherent outdoor world slice without inheriting the experimental world architecture.

This test intentionally builds a new environment rather than recreating Sunlit Basin.

## World slice

Copperwash Reach contains:

- deterministic procedural terrain;
- a shallow water basin;
- sky dome + atmospheric fog;
- physically coherent hemisphere + directional lighting;
- deterministic instanced vegetation;
- four reused authored GLB anchors;
- terrain-aware player grounding;
- terrain-aware third-person camera clearance;
- existing Soldier player, movement, animation, keyboard and mobile controls.

## Authored assets reused

- rock_c_hero_boulder.glb
- tree_e_windswept.glb
- ruin_windcut_fragment_a.glb
- deadwood_windswept_a.glb

Assets are reused as proven content. No Test04–10 runtime code is imported.

## Architecture

```text
GameApp
├─ FrameScheduler (1 RAF)
├─ RendererService
├─ AssetManager
├─ WorldFoundationScene
│  ├─ deterministic Terrain
│  ├─ Water
│  ├─ Sky / Fog / Lighting
│  ├─ Instanced Vegetation
│  └─ Authored GLB Anchors
├─ PlayerController
├─ CharacterVisual
├─ ThirdPersonCamera
└─ DiagnosticsPanel
```

## Non-goals

No streaming, AI, persistence, combat, post-processing, weather simulation, world chunk paging, WebGPU, or final art polish.

## Acceptance gates

- exactly 1 requestAnimationFrame source call;
- Three.js 0.186.0 / WebGLRenderer;
- v0.2 baseline requirements preserved;
- deterministic terrain function;
- terrain geometry created once, not rebuilt per frame;
- deterministic instanced vegetation;
- water present;
- sky/fog/lighting present;
- 4/4 authored GLBs load;
- player remains grounded to terrain;
- jump leaves terrain and lands back on terrain;
- camera clears terrain and analytic obstacles;
- keyboard + touch controls remain functional;
- runtime errors = 0;
- draw calls <= 32;
- triangles <= 60,000;
- browser integration PASS;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline; the test itself is never frozen.
