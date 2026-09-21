# 07A — Production Architecture Promotion

Status: AUTHORIZED / BUILD CANDIDATE

## Purpose

Promote the accepted Test06 Living World mechanics from proof-specific fragments into reusable production modules without introducing new behavior.

This milestone changes architecture, not gameplay.

## Production modules

| Module | State ownership | Production responsibility |
| --- | --- | --- |
| WorldEventSequence | event identity | monotonic event IDs; duplicate/replay protection |
| TimedSpatialMemory | local world memory | DISTURBED → SETTLING → CALM with absolute deadlines and spatial applicability |
| StimulusArbiter | none | deterministic priority selection; priority outranks recency |
| GoalContinuity | actor goal continuity | active goal, suspended goal, interruption, progress resume |
| LivingWorldKernel | orchestration only | event → memory → spatial query → arbitration → goal order |
| StreamStateStore | serialized snapshots | in-memory canonical snapshot store |
| StreamCell | stream lifecycle | ACTIVE → SERIALIZE → UNLOAD → REHYDRATE → ACTIVE |
| SimulationLODController | simulation tier | NEAR / MID / FAR / DORMANT cadence and sleep/wake |

## Hard boundaries

- Production core has no Three.js dependency.
- Production core has no DOM dependency.
- Rendering remains outside the simulation kernel.
- Input remains outside the simulation kernel.
- Combat is unchanged.
- Disk/save-game persistence is not part of 07A.
- Production actor construction/asset binding belongs to 07B.
- Production region streaming belongs to 07C.
- No new gameplay behavior is authorized in 07A.

## Canonical promoted semantics

- Memory radius proof default: 1.8 m.
- Memory timing proof default: DISTURBED 2300 ms + SETTLING 2800 ms.
- Arbitration: HAZARD 100 > FOOD 40 regardless of event recency.
- Goal continuity: FOOD may be suspended by HAZARD and resumes at preserved progress after the hazard clears.
- Streaming uses versioned snapshots and absolute timestamps.
- Simulation LOD remains NEAR → MID → FAR → DORMANT with accepted hysteresis/cadence semantics.

## Acceptance proof

07A must prove:

1. Test06 is frozen and closed before promotion.
2. Frozen 06J runtime artifacts remain unchanged.
3. Production modules are engine/render independent.
4. Test06 canonical behavior fixtures pass against the promoted modules.
5. 06H StreamCell and 06I SimulationLODController are promoted byte-identically.
6. Browser runtime can import and execute the production package.
7. Frozen visual/gameplay runtime remains visibly unchanged.
8. No new requestAnimationFrame loop is added.
9. Zero runtime external dependencies beyond the existing bundled Three.js runtime.
10. 07B is not begun.

