# 08B — Predictive Region Handoff

Status: AUTHORIZED / BUILD CANDIDATE

## Purpose

Remove avoidable region-transition hitch risk without changing accepted gameplay.

08A proved multiple streamed production regions can preserve state. 08B adds one new variable:

**prepare the next region's visual actor instances before its 24 m activation boundary.**

## Architecture

The frozen production stack remains authoritative.

```text
player motion
  ↓
PredictiveRegionPrefetchPlanner
  ↓
future unloaded region selected
  ↓
ThreePredictiveActorFactory
  ↓
Skeleton-safe actor instances prepared off-scene
  ↓
region crosses 24 m load boundary
  ↓
prepared instances consumed by real actor bindings
  ↓
normal ProductionRegion lifecycle continues
```

Prefetch does **not**:

- create active actor records;
- run LivingWorldKernel simulation;
- alter region snapshots;
- alter AI;
- attach prefetched models to the scene.

It only pays the visual clone/preparation cost early.

## Runtime proof

Use two diagnostic production regions:

```text
A → B → A
```

The initial A load may use the normal fallback path.

Before B activates:

```text
Predict target      B
Prepared            2
B region            UNLOADED
```

When B activates:

```text
B region            ACTIVE
Prepared consumed   2
Fallback new binds  unchanged from initial A
Asset loads         1
```

On return to A, A must also be prefetched before reactivation.

## Final target

```text
PREDICTIVE HANDOFF ✓
B PREFETCHED ✓
A RETURN PREFETCHED ✓
PREPARED CONSUMED ✓
STATE RESTORED ✓
ASSET LOAD 1 ✓
NO DUPLICATES ✓
PERFORMANCE PASS ✓
```

## Scope prohibitions

No new:

- AI behavior
- combat
- assets
- persistence class
- multiplayer
- region simulation while prefetched
- broad world/chunk streaming
- predictive gameplay decisions
