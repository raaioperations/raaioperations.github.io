# Test11H — Combat Action Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Gameplay Foundation v0.7  
**Environment:** Copperwash Reach — Combat Action  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove a deterministic melee-combat action contract on top of the greenfield gameplay architecture without adding a full combat game yet.

## Systems under test

- deterministic soft combat targeting;
- keyboard and touch ATTACK input;
- explicit READY → WINDUP → ACTIVE → RECOVERY attack phases;
- one attack start per frame;
- one hit per attack;
- range validation at hit time;
- persistent NPC health and hit counters;
- bounded stagger state;
- defeated-state persistence;
- combat target indicator;
- recovery gating / input rejection;
- combat telemetry;
- no second frame loop.

## Combat target contract

Eligible combat targets are active, non-defeated actors.

Candidates are ranked by:

1. distance;
2. camera-facing score;
3. stable actor ID tie-break.

No raycast is required for this architecture proof.

## Attack contract

- keyboard: **F**
- touch: **ATTACK**
- input is edge-triggered;
- attack starts only from READY;
- target is locked when WINDUP starts;
- damage resolves once during ACTIVE;
- recovery rejects new attack starts;
- no timer/setTimeout owns combat state.

## Damage contract

- actor max health: 100;
- test strike damage: 25;
- hit reaction/stagger: bounded by frame count;
- health/hit counters/defeated state live on persistent actor domain records;
- chunk unload/reload may not reset combat state.

## Non-goals

No weapon inventory, combos, stamina, blocking, dodging, parries, limb damage, hitboxes per bone, ragdolls, death loot, quests, factions, or animation montage system.

## Acceptance gates

- exactly one RAF;
- active actors = 27;
- actor pool reallocations = 0;
- existing movement/behavior/interaction budgets preserved;
- deterministic combat target acquired;
- combat target indicator visible when target exists;
- ATTACK keyboard/touch input present;
- attack state machine transitions proven;
- attack start peak <= 1/frame;
- hit peak <= 1/attack;
- duplicate hit suppression proven;
- recovery rejects repeated input;
- actor health decrements exactly once;
- hit reaction state visible;
- health persists through chunk unload/reload;
- defeated state persists if reached in deterministic tests;
- runtime errors = 0;
- draw calls <= 82;
- triangles <= 110,000;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline. Tests are never frozen.
