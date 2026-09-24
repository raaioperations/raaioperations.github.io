# Test10 — Presentation Replication
## 10A — Second Environment Replication Proof

**Status:** HUMAN REVIEW ITERATE / IDENTITY KIT AUTHORIZED  
**Foundation:** accepted/frozen/canonical 09B build `20260924205044`  
**Doctrine:** Stylized Physical Realism

## Purpose

Prove that the accepted Sunlit Basin presentation grammar is reusable rather than a one-off scene.

The test is successful only if a second authored environment:

- looks compositionally distinct from Sunlit Basin;
- reuses the accepted asset/material/runtime grammar;
- requires no new gameplay, AI, persistence, streaming, or frame-loop architecture;
- remains inside the frozen 06J performance envelope;
- does not mutate frozen 09B;
- increases perceived richness without proportional runtime-cost growth.

## Environment

### Windcut Shelf

A higher, more exposed forest shelf with:

- stronger negative space;
- sparse tree groupings rather than basin enclosure;
- rock and ruin silhouettes defining the horizon;
- a diagonal traversal line;
- low eroded shoulders framing the route;
- cooler, drier atmospheric treatment;
- no authored pond/wetland centerpiece.

The environment must read as a different place while clearly belonging to the same product.

## Reuse-first rule

The first 10A proof may use only assets already produced for Sunlit Basin:

### v3
- terrain_bank_a.glb
- terrain_bank_b.glb
- path_cut_berms.glb
- ruin_sunlit_gate_v2.glb
- tree_d_forked.glb
- tree_e_windswept.glb

### v1
- tree_a_tall_broad.glb
- tree_b_short_wide.glb
- tree_c_leaning_asym.glb
- rock_a_medium_angular.glb
- rock_b_flat_shore.glb
- rock_c_hero_boulder.glb
- shrub_a_round.glb
- shrub_b_spreading.glb

The first reuse-only composition was reviewed on-device and judged insufficient for distinct place identity.

That result authorizes exactly four Windcut-specific identity anchors:

### Windcut Shelf v1 identity kit
- shelf_escarpment_a.glb
- windcut_rock_spine_a.glb
- ruin_windcut_fragment_a.glb
- deadwood_windswept_a.glb

These four assets must reuse the existing material/runtime grammar and must not create a new renderer architecture or broaden world production.

## Runtime strategy

- Anchor 10A at the frozen production Region B center.
- Build a separate 10A presentation root.
- Hide Sunlit Basin presentation-only roots in the 10A test build.
- Keep systemic terrain, world simulation, actor pipeline, streaming, and player systems unchanged.
- Terrain-integrated forms use the accepted per-vertex terrain-conformance method.
- Static authored geometry is merged into a maximum of six runtime material batches.
- No new `requestAnimationFrame` loop.

## Material consolidation

Target runtime buckets:

1. EARTH_CUT
2. EARTH_CROWN
3. STONE
4. BARK
5. FOLIAGE
6. optional sixth bucket only if objectively required

Reuse source-material color through vertex-color baking when consolidation would otherwise erase variation.

## Hard limits

The frozen 06J ceilings remain absolute:

```js
{
  drawCallsMax: 120,
  trianglesMax: 350000,
  avgFrameMsMax: 17.8,
  p95FrameMsMax: 20.5,
  p99FrameMsMax: 34.0
}
```

Additional constraints:

- runtime duplicates = 0
- added RAF loops = 0
- 06J regression = PASS
- presentation batches <= 6
- accepted/frozen 09B hashes must validate before build

## Human proof

10A does not pass because it loads or meets budgets.

Human review must confirm:

- Windcut Shelf is recognizably distinct from Sunlit Basin;
- macro composition reads before microdetail;
- authored banks/berms read as terrain, not barriers;
- asset reuse is not visually obvious or repetitive;
- horizon and negative space communicate greater scale;
- player and actors remain readable;
- the environment feels authored rather than scattered;
- performance remains within the frozen envelope.

## Governance

10A is a replication proof, not broad world production.

Do not:

- mutate frozen 09B;
- add new mechanics;
- expand AI;
- alter persistence;
- change streaming semantics;
- lower budgets;
- expand beyond the four authorized Windcut identity anchors before this iteration is evaluated.

## Completion meaning

Passing 10A proves the project has moved from:

```text
one accepted beauty slice
→ reusable presentation grammar
→ repeatable environment production
```

Only after that proof should broad presentation expansion be considered.
