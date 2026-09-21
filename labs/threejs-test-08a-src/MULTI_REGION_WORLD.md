# 08A — Multi-Region Production World

Status: AUTHORIZED / BUILD CANDIDATE

## Purpose

Begin Test08 — World Expansion by proving that the frozen production stack can scale from one streamed production region to multiple independent regions without changing accepted actor behavior.

## New variable

Multiple production regions.

No new AI, combat, asset, persistence, or multiplayer behavior is introduced.

## Runtime proof

Three production regions are placed along one diagnostic route.

Each region owns:

- 2 production actors
- its own ProductionRegionStateStore entry
- stable actor IDs
- independent goal progress
- independent snapshot history

All three share:

- the frozen 07B ProductionActorPipeline
- the frozen ThreeActorAssetCache
- the same Soldier.glb definition
- the frozen 07A LivingWorldKernel behavior

## Human acceptance

Visit the three world regions in sequence:

```text
A → B → C → A
```

At each step:

- current region becomes ACTIVE
- previous region becomes UNLOADED
- only the active region contributes its two actors
- asset load count remains 1

After returning to A:

```text
Regions            3
Active             1
A/B/C snapshots    SAVED / SAVED / SAVED
A IDs              STABLE
A progress          PRESERVED
Asset loads         1
Duplicates          0
06J regression      PASS
```

Final target:

```text
MULTI-REGION WORLD ✓
A/B/C VISITED ✓
STATE ISOLATED ✓
RETURN RESTORED ✓
ASSET LOAD 1 ✓
PERFORMANCE PASS ✓
```
