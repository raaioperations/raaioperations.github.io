# Test11G — Gameplay Interaction Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Interactive World Foundation v0.6  
**Environment:** Copperwash Reach — Gameplay Interaction  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove a small, deterministic player-to-world interaction contract on top of the greenfield interactive-world runtime.

## Systems under test

- deterministic interaction targeting;
- one visible current target;
- context prompt;
- keyboard and touch INTERACT input;
- one-action-per-frame arbitration;
- pickup state;
- usable/toggleable world-object state;
- NPC interaction initiation;
- stable action telemetry;
- interaction state independent from rendering;
- no second frame loop.

## Targeting contract

Candidates may be:

- PICKUP world objects;
- USE world objects;
- active NPC actors.

Candidates are scored using player distance, camera-facing bias, stable type priority, and stable ID tie-break. Only one target may win.

## Action contract

One INTERACT edge may execute at most one gameplay action:

- PICKUP: collect and hide the object;
- USE: toggle the object's persistent runtime state;
- NPC: initiate player/NPC interaction and hold that actor in player-aware behavior.

No action directly owns a render loop.

## Input contract

- keyboard: **E**
- touch: **USE**
- the input is edge-triggered;
- holding/tapping may not execute more than one action in a frame.

## Persistence scope

11G proves in-session state only:

- collected pickup remains collected;
- toggled world object remains toggled;
- NPC player-interaction counters remain on the persistent actor record.

Disk persistence is not part of this test.

## Non-goals

No combat, inventory UI, item stacking, dialogue content, quests, shops, crafting, equipment, animation montage system, or networking.

## Acceptance gates

- exactly one RAF;
- active chunks = 9;
- active actors = 27;
- existing movement/behavior budgets preserved;
- one current target max;
- target arbitration deterministic;
- prompt appears/disappears with target availability;
- action peak <= 1/frame;
- pickup action proven;
- pickup state persists in session;
- USE toggle action proven;
- toggle state persists in session;
- NPC interaction initiation proven;
- NPC interaction state stored on persistent actor record;
- keyboard/touch interaction input present;
- runtime errors = 0;
- draw calls <= 78;
- triangles <= 105,000;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline. Tests are never frozen.
