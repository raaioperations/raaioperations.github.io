# 09C — Sunlit Basin Production Asset Kit v1

**Roadmap:** Test09 — Presentation Foundation  
**Status:** AUTHORIZED / BUILDING  
**Relationship to 09B:** Supporting asset-production milestone. 09B remains open and is not presentation-accepted. 09C exists to replace 09B prototype primitives with reusable production assets.

## Objective

Create the minimum original reusable 3D asset kit required for Sunlit Basin to stop reading as primitive debug geometry.

These assets are standalone GLB files. They are not scene-local Three.js primitives.

## Asset set

### Trees
1. `tree_a_tall_broad.glb`
2. `tree_b_short_wide.glb`
3. `tree_c_leaning_asym.glb`

### Rocks
4. `rock_a_medium_angular.glb`
5. `rock_b_flat_shore.glb`
6. `rock_c_hero_boulder.glb`

### Understory
7. `shrub_a_round.glb`
8. `shrub_b_spreading.glb`

### Ground cover
9. `grass_tuft_a.glb`
10. `flower_patch_a.glb`

### Landmark
11. `gate_sunlit_basin.glb`

### Distant terrain silhouettes
12. `ridge_a_layered.glb`
13. `ridge_b_spur.glb`

## Production rules

- Original geometry only.
- No stock models.
- No copied Zelda assets, silhouettes, UI, landmarks, or trade dress.
- glTF 2.0 binary (`.glb`).
- Y-up.
- Meter scale.
- Ground-contact origin where applicable.
- Reusable across placements.
- PBR metallic/roughness materials.
- Low-poly stylization with stronger authored silhouettes.
- Browser-first budgets.
- Deterministic source generation retained in repository.
- Asset identity/versioning survives future 09B composition revisions.

## Material families

The v1 kit establishes:

- `MAT_BARK_DARK`
- `MAT_BARK_WARM`
- `MAT_FOLIAGE_DARK`
- `MAT_FOLIAGE_MID`
- `MAT_FOLIAGE_LIGHT`
- `MAT_STONE_WARM`
- `MAT_STONE_DARK`
- `MAT_GRASS_MEADOW`
- `MAT_GRASS_DARK`
- `MAT_FLOWER_GOLD`
- `MAT_FLOWER_ROSE`
- `MAT_FLOWER_BLUE`

These are reusable PBR families, not one-off scene colors.

## Asset budgets

| Asset class | Triangle budget per asset |
|---|---:|
| Trees | <= 600 |
| Rocks | <= 100 |
| Shrubs | <= 180 |
| Grass tuft | <= 64 |
| Flower patch | <= 320 |
| Gate landmark | <= 320 |
| Ridge silhouette | <= 140 |

## Required validation

Every generated GLB must:

- reload successfully through a glTF-compatible loader;
- contain no external URI dependencies;
- report valid non-zero bounds;
- remain under its class triangle budget;
- contain only approved material-family names;
- use deterministic geometry for identical source revision + seed.

## Repository layout

```text
assets/3d/sunlit-basin/v1/
  *.glb
  asset_manifest.generated.json

labs/threejs-test-09c-src/
  generate_assets.py
  verify_assets.py

labs/threejs-test-09c/
  ASSET_KIT_SPEC.md
  status.json
  verification-report.json
```

## Acceptance gates

09C does not pass merely because 13 files exist.

Required:

1. **Generation proof** — all 13 GLBs produced.
2. **Format proof** — valid GLB / no external resource dependencies.
3. **Budget proof** — every class stays under triangle budget.
4. **Material proof** — approved reusable material families only.
5. **Human asset review** — silhouettes and family variation are visibly useful.
6. **Integration proof** — selected 09C assets replace primitive 09B equivalents without breaking Test08 performance/runtime invariants.

The integration proof is the bridge back into the open 09B Vertical Beauty Slice.

## Explicit non-goals

09C does not add:

- AI;
- combat;
- persistence;
- new streaming semantics;
- multiplayer;
- broad world content;
- photorealism;
- copied third-party art.

## Definition of success

09C succeeds when Sunlit Basin has a reusable, versioned asset vocabulary strong enough that the next 09B presentation pass is evaluating actual art assets rather than debug primitives.
