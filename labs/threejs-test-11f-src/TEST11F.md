# Test11F — Entity Behavior & World Interaction

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Living World Foundation v0.5  
**Environment:** Copperwash Reach — Interactive Population  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove that the greenfield living-world runtime can support lightweight, deterministic actor behavior and local interaction without turning every entity into a full AI agent or breaking the bounded simulation model.

## Systems under test

- deterministic behavior states: WANDER, OBSERVE_PLAYER, AVOID, SOCIAL;
- bounded actor perception queries;
- player awareness;
- actor-to-actor local spacing/avoidance;
- lightweight world-obstacle avoidance;
- deterministic local steering;
- pairwise social interaction scheduling;
- interaction cooldowns and duplicate-pair suppression;
- behavior state persistence through chunk unload/reload;
- behavior-state visual encoding through instanced colors;
- hard behavior-evaluation and interaction budgets.

## Behavior contract

Behavior is persistent domain state stored on each stable actor record.

Priority:

1. AVOID immediate local crowding/world obstacles;
2. OBSERVE_PLAYER when a nearby player enters awareness range;
3. SOCIAL when a nearby actor is eligible and the interaction scheduler has budget;
4. WANDER otherwise.

No behavior creates a new scene object.

## Budgets

- active actors: 27;
- movement/simulation updates: <= 12/frame;
- behavior evaluations: <= 6/frame;
- new social interactions: <= 2/frame;
- actor perception is LOD-staggered;
- FAR actors receive sparse behavior evaluation;
- visual pool remains fixed at 27.

## Interaction model

Social interactions are pairwise, deterministic, non-blocking state transitions. They have:

- stable normalized pair keys;
- duplicate suppression per frame;
- per-actor cooldowns;
- finite duration;
- no dialogue/content generation.

## Visual state colors

- WANDER: earth/tan;
- OBSERVE_PLAYER: cool blue;
- AVOID: orange;
- SOCIAL: violet.

These colors are diagnostic only.

## Non-goals

No combat, dialogue generation, navmesh, path search, quest logic, factions, utility scoring trees, neural/LLM agents, networking, or disk persistence.

## Acceptance gates

- exactly one RAF;
- active chunks = 9;
- active actors = 27;
- actor visual pool reallocations = 0;
- duplicate actor IDs = 0;
- movement update peak <= 12/frame;
- behavior evaluation peak <= 6/frame;
- interaction creation peak <= 2/frame;
- player awareness transition proven;
- actor avoidance transition proven;
- social interaction proven;
- duplicate pair interactions = 0;
- NEAR behavior evaluation frequency > MID > FAR;
- behavior state persists through chunk unload/reload;
- world systems and adaptive quality remain intact;
- runtime errors = 0;
- draw calls <= 72;
- triangles <= 100,000;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline. Tests are never frozen.
