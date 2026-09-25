# Test11I — Reciprocal Combat Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Baseline:** Greenfield Combat Foundation v0.8  
**Environment:** Copperwash Reach — Reciprocal Combat  
**Status:** IMPLEMENTATION OPEN

## Purpose

Prove a bounded two-way combat loop on top of the accepted player-combat foundation.

## Systems under test

- retaliation/threat state after player damage;
- enemy READY → TELEGRAPH → STRIKE → RECOVERY phases;
- strict enemy-combat evaluation/start budgets;
- player health and damage state;
- player invulnerability frames;
- player stagger/control lock;
- player downed state;
- visible enemy attack telegraph/strike coloring;
- compact player HP/status HUD;
- one enemy damage resolution per attack;
- persistent actor retaliation state;
- no second frame loop.

## Reciprocal combat contract

An actor damaged by the player becomes hostile for a bounded retaliation window. Hostile actors may attack only when:

- active;
- alive;
- not staggered;
- inside enemy attack range;
- allowed by the global enemy-combat start budget.

Enemy attacks advance entirely by scheduler frame count. No timeout owns combat state.

## Player damage contract

- max health: 100;
- enemy strike damage: 15;
- successful damage grants invulnerability frames;
- stagger temporarily suppresses movement/jump;
- damage while invulnerable is rejected;
- health 0 enters DOWNED and rejects further damage/action;
- no respawn system in this test.

## Enemy visual contract

- ordinary actor behavior colors remain;
- TELEGRAPH: amber;
- STRIKE: red;
- RECOVERY: muted hostile tone;
- defeated: dark gray.

## Non-goals

No dodge, block, parry, stamina, combos, weapons, navmesh pursuit, group tactics, healing, respawn, ragdolls, death screen, loot, or difficulty tuning.

## Acceptance gates

- exactly one RAF;
- existing 11H player-combat contract remains intact;
- hostile retaliation state is created by player damage;
- enemy attack phases proven;
- enemy evaluations <= 4/frame;
- enemy attack starts <= 1/frame;
- enemy hit resolves once per attack;
- player health decrements exactly once per valid strike;
- invulnerability rejects overlapping damage;
- player stagger/control lock proven;
- player downed state proven;
- hostile actor combat state survives chunk unload/reload;
- active actors remain 27;
- actor pool reallocations remain 0;
- movement/behavior/gameplay/player-attack budgets remain intact;
- runtime errors = 0;
- draw calls <= 84;
- triangles <= 112,000;
- real-device human inspection required before close.

Tests close when passed. Capabilities promote into the development baseline. Tests are never frozen.
