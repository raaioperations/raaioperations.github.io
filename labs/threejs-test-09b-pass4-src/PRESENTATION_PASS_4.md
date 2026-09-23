# 09B — Presentation Pass 4: Scene Assetization & Composition

## Foundation

Pass 4 iterates the still-open 09B Vertical Beauty Slice.

It preserves:

- Test08 frozen runtime;
- 09A frozen presentation doctrine;
- accepted/frozen 09D asset integration;
- 09B Pass-3 real Soldier packaging and presentation lens.

## Purpose

Pass 3 proved the renderer/runtime was no longer the primary blocker.

Pass 4 therefore spends its budget on **scene authorship** rather than additional engine mechanics.

## Changes

### 1. Horizon assetization

The v1 ridge silhouettes from 09C are embedded in the accepted 09D stone batches. Pass 4 does not mutate those frozen batches.

Instead:

- far stone-batch ridge fragments are presentation-clipped only beyond the ridge threshold;
- nearby 09C rocks and gate remain visible;
- two new reusable GLB ridge assets are loaded from `assets/3d/sunlit-basin/v2/`;
- multiple placements of those two source assets are statically merged into one distant-ridge render batch.

New assets:

- `ridge_erosion_a.glb`
- `ridge_erosion_b.glb`

Both use reusable PBR material `MAT_RIDGE_SLATE`.

### 2. Presentation-only debug suppression

The following proof visuals are hidden from the beauty slice while their underlying simulation/state machines continue executing:

- 06D forager visual;
- 06E control-forager visual;
- 06F arbitration-forager visual;
- 06F food marker;
- 06G recovery-forager visual;
- 06G food marker;
- 07B actor-position rings;
- 06I temporary LOD proof visual.

Production Soldier actors remain visible.

06A/06B flock birds and 06C reeds remain visible because they function as plausible ambient world motion rather than debug markers.

### 3. Material hierarchy

Pass 4 deepens:

- meadow vs. path;
- wet shore vs. dry ground;
- warm vs. dark stone;
- bark vs. foliage;
- distant ridge vs. gameplay plane.

No new post-processing pass is added.

## Hard limits

- draw calls <= 120;
- triangles <= 350,000;
- 06J regression = PASS;
- 09D integration remains complete;
- Soldier player visual = GLB;
- no new RAF loop;
- no AI/combat/persistence/streaming changes.

## Acceptance

Automated checks only establish that Pass 4 is safe to review.

Human Presentation Proof still decides whether 09B is ready to freeze.
