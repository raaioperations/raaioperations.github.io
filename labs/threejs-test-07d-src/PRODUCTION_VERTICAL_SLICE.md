# 07D — Production Vertical Slice

Status: AUTHORIZED / BUILD CANDIDATE

## Purpose

This is the first production-shaped integration proof of the frozen Test06 + 07A + 07B + 07C stack.

It does **not** invent a new game system.

It proves that the already accepted mechanics can operate together through the production architecture in one coherent runtime:

```text
Production actor
  ↓
FOOD goal
  ↓
Timed local disturbance
  ↓
HAZARD wins arbitration
  ↓
Goal interrupted
  ↓
Production animation intent changes
  ↓
Memory expires
  ↓
FOOD goal resumes
  ↓
Region streams out
  ↓
Actor records + bindings removed
  ↓
Region rehydrates
  ↓
Same actor IDs / same progress / same cached asset
  ↓
Inherited mobile performance regression remains PASS
```

## Human proof

1. Stay near the cyan production region.
2. Watch region actor A run the automatic accepted behavior cycle:
   - FOOD / WALK
   - HAZARD / RUN
   - recovery to FOOD / WALK
3. Wait for **Behavior loop = PASS**.
4. Move beyond the frozen 07C unload radius of 38 m.
5. Confirm the region unloads.
6. Return inside 24 m.
7. Confirm exact actor restoration and final vertical-slice PASS.

## Final target

```text
PRODUCTION VERTICAL SLICE ✓
BEHAVIOR LOOP ✓
STREAM RESTORE ✓
ASSET PIPELINE ✓
PERFORMANCE PASS ✓
```

## Scope prohibitions

No new:

- AI behavior
- combat
- character assets
- save-game persistence
- multiplayer
- predictive streaming
- broad production world
- quest/progression systems
- content breadth

07D is integration proof, not expansion.
