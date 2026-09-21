# 07C — Streamed Production Region

Status: AUTHORIZED / BUILD CANDIDATE

## Single new production variable

Can a production region own real 07B production actors, serialize them, unbind their Three.js presentation, remove their actor records from active simulation, and later reconstruct the exact actor identities/state through the same cached production asset pipeline?

## Region lifecycle

```text
UNLOADED
  ↓
LOADING
  ↓
ACTIVE
  ↓
SERIALIZING
  ↓
UNLOADING
  ↓
UNLOADED
  ↓
REHYDRATING
  ↓
ACTIVE
```

## Required ownership

The production region owns:

- region ID
- actor blueprint IDs
- actor snapshots
- load/unload hysteresis
- lifecycle state
- offscreen elapsed time
- actor reconstruction sequence

The region does **not** own:

- Three.js GLB decoding
- asset caching
- animation mixer implementation
- new AI behavior
- combat
- disk persistence

Those remain with the frozen 07A/07B layers or later milestones.

## Proof region

Use one dedicated production region containing:

- 2 production actors
- the frozen `HUMANOID_FORAGER_V1` definition
- the frozen 07B Soldier.glb cache
- one LivingWorldKernel per actor
- measurable FOOD progress

The frozen 07B control actors remain loaded outside the region so the test proves region-specific streaming rather than global actor teardown.

## Runtime acceptance

Initial state near region:

```text
Region            ACTIVE
Region actors     2/2
Asset loads       1
Snapshot          NONE
Duplicates        0
```

Leave beyond the unload radius:

```text
Region            UNLOADED
Region actors     0/2
Snapshot          SAVED
Asset loads       1
```

Return inside the load radius:

```text
Region            ACTIVE
Region actors     2/2
Snapshot          SAVED
Actor IDs         STABLE
Progress          PRESERVED
Asset loads       1
Duplicates        0
```

Final target:

```text
REGION RESTORED ✓ · IDS STABLE ✓ · PROGRESS PRESERVED ✓ · ASSET LOAD 1 ✓ · NO DUPLICATES ✓ · 06J REGRESSION PASS ✓
```

## Not 07C

Do not add:

- new AI behavior
- new combat
- disk/save-game persistence
- multiplayer replication
- predictive world streaming
- broad chunk/resource manager
- new character assets
- production vertical-slice content

07D owns the Production Vertical Slice.
