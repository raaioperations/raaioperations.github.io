# 08C — Bounded Prefetch Lifecycle

Status: AUTHORIZED / BUILD CANDIDATE

## Purpose

08B proved predictive region handoff. 08C addresses the next mobile-world risk:

**the player changes direction after a region has been prefetched.**

Prepared visual instances must not accumulate indefinitely or become stale hidden work.

## New variable

Bounded lifecycle for prefetched visual instances.

The production simulation remains authoritative and unchanged.

## Human route

Use the same A/B diagnostic route.

1. Wait for the inherited 06J regression to PASS.
2. Enter A.
3. Move toward B until:
   - Predict target = B
   - Prepared B = 2
   - B is still UNLOADED.
4. Reverse toward A before entering B.
5. Confirm:
   - B prepared pool returns to 0;
   - cancellation count becomes 1;
   - evicted instances becomes 2;
   - peak prepared never exceeds 2.
6. Move toward B again.
7. Confirm B is re-prefetched, then activates using prepared instances.
8. Return to A and complete the accepted predictive return handoff.

## Final target

```text
BOUNDED PREFETCH ✓
STALE B EVICTED ✓
B RE-PREFETCHED ✓
PREPARED CONSUMED ✓
POOL BOUNDED 2 ✓
STATE RESTORED ✓
ASSET LOAD 1 ✓
NO DUPLICATES ✓
PERFORMANCE PASS ✓
```

## Scope prohibitions

No new:

- AI behavior;
- combat;
- actor assets;
- persistence class;
- multiplayer;
- simulation while prefetched;
- gameplay prediction;
- broad world/chunk streaming.

Discarded prepared instances are off-scene SkeletonUtils clones. They are released for garbage collection without disposing shared geometry/material resources owned by the frozen GLB cache.
