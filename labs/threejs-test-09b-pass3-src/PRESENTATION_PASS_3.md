# 09B — Vertical Beauty Slice / Presentation Pass 3

**Status:** AUTHORIZED / BUILDING  
**Foundation:** Accepted/frozen 09D Sunlit Basin Asset Integration Proof, build `20260923033144`.

## Purpose

Pass 3 converts the accepted asset-integration proof into the next human Presentation Proof candidate.

This is still the open 09B milestone. It is **not** a new content-expansion milestone.

## Pass-3 corrections

1. **Remove legacy cone mountains**
   - Hide the inherited `m1` / `m2` cone-mountain instanced meshes.
   - Preserve the accepted 09C ridge assets from 09D as the distant terrain language.
   - This also recovers two draw calls.

2. **Restore the authored player visual**
   - Package `Soldier.glb` into the 09B Pass-3 deployment.
   - The prior 09D test intentionally focused on asset integration and did not carry the local player GLB into its generated folder, so the runtime fell back to the capsule placeholder on-device.
   - Pass 3 requires the local player to resolve to GLB for presentation review.

3. **Material hierarchy**
   - Reduce the washed-out appearance.
   - Increase separation between meadow, soil/path, wet shore, bark, foliage and stone.
   - Keep accepted 09D GLB geometry unchanged.

4. **Lighting / atmosphere**
   - Preserve the physical sun direction.
   - Reduce exposure slightly.
   - Deepen sky/fog separation without adding another post-processing pass.

5. **Camera**
   - Enforce the intended presentation FOV after the inherited movement system updates it.
   - Preserve sprint readability while reducing wide-angle distortion.

## Hard constraints

- Accepted/frozen 09D source remains byte-identical.
- Accepted/frozen Test08 systems remain unchanged.
- No new AI, combat, persistence, streaming semantics or multiplayer.
- No new requestAnimationFrame loop.
- Draw calls <= 120.
- Total triangles <= 350,000.
- 06J regression must remain PASS.
- 09D integration must remain complete.
- Human Presentation Proof remains the acceptance authority.

## Pass-3 acceptance questions

The human review must answer:

- Does Sunlit Basin read as one coherent place?
- Do the 09C assets now dominate the scene instead of prototype mountains?
- Does the horizon read naturally?
- Does the player read as the intended GLB character instead of fallback geometry?
- Are material families visually distinct?
- Is atmospheric depth helping rather than washing out the image?
- Is path/landmark purpose readable?
- Does the scene remain within the frozen runtime budget?

Automated PASS only means the Pass-3 candidate is safe to review. It does not accept presentation quality.
