# Test11J — Player Lifecycle / Respawn Foundation

**Roadmap:** Test11 — Greenfield Production Rebuild  
**Environment:** Copperwash Reach — Combat Lifecycle  
**Baseline:** Greenfield Reciprocal Combat Foundation v0.9  
**Status:** OPEN

The accepted Test11I reciprocal combat capabilities are carried forward without modifying the Test11I deployment. Test11J adds deterministic player-life and respawn transitions owned by the existing scheduler.

## Lifecycle

`READY → DAMAGE → STAGGER → INVULNERABLE → READY → DOWNED → RESPAWN_AVAILABLE → RESPAWNING → READY`

Respawn availability is reached after a fixed scheduler-frame delay. Desktop uses R and touch exposes RESPAWN only while available. Respawn restores player state at the deterministic world spawn anchor without recreating the scene or resetting persistent actors. Enemy attacks capture a player-life generation and cannot hit a later life.

## Gates

Preserve one RAF, 27 active actors, zero actor-pool reallocations, existing movement/behavior/interaction/combat budgets, at most one lifecycle transition per frame, draw calls ≤86, triangles ≤114,000, and zero runtime errors. Browser and real-device inspection are required. A successful build does not close this test.

Test11J remains mutable, unfrozen, and noncanonical. Close only after implementation, unit verification, browser verification, GitHub Pages deployment, and real-device human inspection.
