# 09B — Vertical Beauty Slice

## Environment

**Sunlit Basin — Presentation Pass 2**

A deliberately authored forest basin around the frozen Region A starting area.

This remains one small benchmark area. It is **not** broad world production.

## Pass-2 objective

The first 09B build proved the runtime and structural presentation envelope but did not meet the frozen 09A human Presentation Proof standard.

Pass 2 specifically addresses the human-review failures:

- terrain must read as authored landform rather than a flat colored plane;
- material families must differ through roughness, bump/surface structure, tonal variation, and environmental response;
- atmosphere must separate foreground, gameplay plane, midground, distant ridges, and sky;
- distant mountains must read as terrain silhouettes rather than geometric cones;
- vegetation must form canopy / understory / ground-cover hierarchy;
- water must show depth, fresnel/sky response, ripples, shoreline transition, and specular movement;
- the micro layer must become denser without random visual noise;
- lighting and exposure must agree with the sunlit-basin state;
- camera FOV must preserve player readability while showing the environment.

## Composition

### Macro
- basin edge and terrain rise;
- layered distant ridge silhouettes;
- open atmospheric horizon;
- stone-gate landmark terminating the traversal path.

### Meso
- curved authored path;
- shallow pool plus shaped shoreline;
- perimeter canopy;
- understory shrubs;
- rock clusters;
- readable open gameplay plane.

### Micro
- grass blades;
- flowers;
- small stones;
- surface bump/roughness variation;
- airborne pollen.

## Material families

1. meadow ground;
2. soil path;
3. wood;
4. foliage;
5. stone;
6. water.

## Independent ambient motion systems

1. canopy + understory wind;
2. grass wind;
3. water ripples;
4. airborne pollen.

## Depth stack

1. foreground ground cover;
2. gameplay plane;
3. midground stone gate;
4. layered distant ridge silhouette;
5. atmosphere / sky.

## Runtime boundary

09B inherits frozen Test08 unchanged.

The presentation layer is created only after inherited 06J reaches PASS.

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
- total draw calls <= frozen 06J ceiling 120;
- total triangles <= frozen 06J ceiling 350,000.

## Acceptance authority

Automated metrics can prove structure, determinism, budgets, runtime preservation, and system presence.

They **cannot** pass Presentation Proof.

The runtime HUD therefore reports **HUMAN REVIEW** rather than READY when automated checks pass.

09B freezes only after the user accepts the scene visually against 09A:
place, physical substance, atmosphere, scale, motion, character readability, gameplay purpose, and performance.
