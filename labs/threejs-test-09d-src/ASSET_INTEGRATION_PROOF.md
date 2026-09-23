# 09D — Sunlit Basin Asset Integration Proof

## Purpose

09D answers one question:

> Can the real 09C GLB asset kit replace 09B prototype geometry inside the live Sunlit Basin world without breaking loading, transforms, runtime invariants, or the mobile performance envelope?

This is an **asset integration proof**, not final art acceptance.

## Inputs

- Test08 production runtime: frozen / canonical.
- 09A presentation doctrine: frozen / canonical.
- 09B Sunlit Basin: open presentation milestone.
- 09C asset kit v1: 13 generated/verified GLBs.

## Replacement scope

09D removes these Pass-2 prototype drawable families from the 09B presentation root:

1. tree trunks;
2. canopy;
3. grass blades;
4. understory shrubs;
5. flowers;
6. rocks;
7. layered procedural ridge;
8. cube/block stone gate.

09D retains the authored 09B:

- terrain;
- path;
- shoreline;
- water;
- airborne pollen;
- lighting/atmosphere/camera tuning.

The removed layers are rebuilt from the 09C GLBs.

## Integration strategy

Every 09C GLB is loaded through Three.js `GLTFLoader`.

Static placements are then **batched by PBR material family**:

```text
GLB source geometry
→ preserve local source transform
→ apply authored Sunlit Basin placement transform
→ normalize geometry attributes
→ static merge by material family
→ one Three.js mesh per material family
```

This deliberately tests the real assets without paying one draw call per placed object.

The original GLBs remain standalone reusable assets; static batching is only the world-render integration strategy for this test.

## Required runtime evidence

- GLBs loaded: 13 / 13;
- asset load errors: 0;
- all 13 asset identities represented in placements;
- eight prototype families removed;
- material batches <= 8;
- integrated asset triangles <= 18,000;
- total draw calls <= 120;
- total triangles <= 350,000;
- inherited Soldier asset load count = 1;
- inherited duplicate state = 0;
- inherited 06J regression = PASS.

## Human review

The device test should inspect:

- correct scale;
- correct ground contact;
- no floating/sunken assets;
- no wild rotations;
- all major asset families visible;
- path remains traversable/readable;
- player remains readable;
- no obvious load hitch/crash;
- performance remains inside frozen ceilings.

## Acceptance meaning

09D PASS means the **asset pipeline works in the game world**.

It does **not** mean:

- the assets are final;
- 09B Presentation Proof has passed;
- broad content production is authorized.

After 09D integration passes, the integrated scene becomes the proper basis for the next 09B presentation iteration.
