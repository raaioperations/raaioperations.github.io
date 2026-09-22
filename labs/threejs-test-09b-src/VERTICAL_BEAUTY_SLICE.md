# 09B — Vertical Beauty Slice

## Environment

**Sunlit Basin**

A deliberately authored forest clearing around the frozen Region A starting area.

This is not broad world production. It is the presentation benchmark that later content must match or deliberately supersede.

## Composition

### Macro
- readable basin silhouette;
- distant cliff/spire silhouettes;
- a single stone-gate landmark terminating the primary path;
- open sky/haze beyond the landmark.

### Meso
- curved traversal path;
- shallow reflective pool;
- canopy perimeter;
- rock clusters;
- distinct open gameplay plane.

### Micro
- ground-cover grass;
- flowers;
- small stones;
- airborne pollen.

## Presentation proof

The slice must communicate:

- place;
- physical substance;
- atmosphere;
- scale;
- motion;
- character;
- gameplay purpose.

Material families:

1. meadow ground;
2. soil path;
3. wood;
4. foliage;
5. stone;
6. water.

Independent ambient motion systems:

1. canopy wind;
2. grass wind;
3. water ripples;
4. airborne pollen.

Depth stack:

1. foreground ground cover;
2. gameplay plane;
3. midground stone gate;
4. distant cliff silhouettes;
5. atmosphere / sky.

## Runtime boundary

09B inherits the frozen Test08 runtime unchanged.

The presentation layer is created only **after the inherited 06J regression reaches PASS** so it cannot contaminate that canonical regression measurement.

No new:

- AI behavior;
- combat;
- persistence;
- streaming semantics;
- multiplayer;
- external runtime dependency;
- requestAnimationFrame loop.

## Presentation budget

- added presentation draw calls <= 14;
- added presentation triangles <= 18,000;
- total draw calls remain <= frozen 06J ceiling 120;
- total triangles remain <= frozen 06J ceiling 350,000.

## Human acceptance

Human review should evaluate the scene as a place, not only a metric panel.

The slice is acceptance-ready only if:

- the visual composition reads clearly;
- the path/landmark establish purpose and direction;
- materials are visibly differentiated;
- depth is readable;
- the scene remains in motion while the player stands still;
- character readability remains intact;
- controls remain unchanged;
- presentation budget passes;
- inherited 06J remains PASS;
- Test08 asset-load/duplicate invariants remain valid.

09B does not authorize broad content expansion.
