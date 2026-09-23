# 09B — Presentation Pass 5: Environment Art Production

## Objective

Use the runtime headroom proven by Pass 4 for authored environment content rather than additional engine systems.

Pass 5 adds a compact v3 production kit:

- terrain bank A;
- terrain bank B;
- eroded path-cut berms;
- shoreline shelf;
- redesigned Sunlit Basin ruin;
- forked tree;
- windswept tree;
- wetland vegetation cluster.

## Composition intent

### Terrain
Banks and berms add meso-scale height changes around the path and basin so the playable surface stops reading as one broad flat plane.

### Path
The central route remains traversable but receives authored edge relief.

### Shoreline
The existing water remains systemic. A reusable shoreline shelf adds a physical bank transition around the pool.

### Ruin
The old 09C gate remains part of frozen 09D geometry, but Pass 5 presentation-clips that gate region and replaces it with an asymmetrical weathered ruin asset.

### Trees
Two additional silhouettes break the repeated round-canopy language:

- forked canopy architecture;
- windswept asymmetry.

### Ecology
Wetland clusters are placed near the water rather than distributed uniformly.

## Runtime strategy

All Pass-5 static GLBs are loaded through the existing Three.js GLTF pipeline, transformed into authored Sunlit Basin placements, then merged by reusable material family.

New runtime batches are bounded to:

- `MAT_EARTH_WARM`
- `MAT_EARTH_DAMP`
- `MAT_RUIN_STONE`
- `MAT_BARK_DARK`
- `MAT_FOLIAGE_MID`
- `MAT_WETLAND_REED`

Maximum six additional render batches.

## Frozen boundaries

Pass 5 does not change:

- Test08;
- accepted/frozen 09D;
- AI;
- combat;
- persistence;
- streaming semantics;
- player controls;
- world simulation logic.

No new requestAnimationFrame loop is permitted.

## Hard ceilings

- draw calls <= 120;
- triangles <= 350,000;
- 06J regression = PASS.

## Acceptance

Pass 5 is still 09B.

Automated proof only certifies safe deployment. Human review decides whether the beauty slice is finally strong enough to freeze or requires another art iteration.
