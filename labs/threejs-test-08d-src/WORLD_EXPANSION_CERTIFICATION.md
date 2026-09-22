# 08D — World Expansion Certification

Status: AUTHORIZED / TEST08 CLOSEOUT CANDIDATE

## Purpose

08D introduces no new gameplay or world mechanic.

It certifies that the frozen Test08 stack survives repeated real traversal and lifecycle churn:

```text
A → B → A → B → A
```

The accepted 08C predictive/bounded-prefetch machinery remains authoritative.

## Human certification gates

- inherited 06J regression remains PASS;
- complete four committed handoffs: A → B → A → B → A;
- minimum live certification window: 30 seconds;
- A restore count >= 2;
- B restore count >= 1;
- A unload count >= 2;
- B unload count >= 2;
- prepared instances consumed >= 8;
- fallback instances remain exactly 2 (initial A only);
- prepared pool peak <= 2;
- active 08C region actors peak <= 4;
- 08C visual bindings peak <= 4;
- final prepared pool = 0;
- final state = A active / B unloaded;
- final active 08C actors = 2;
- final 08C bindings = 2;
- shared Soldier.glb asset loads = 1;
- duplicate bindings/region state = 0.

## Automated stress proof

The delegated CI proof runs five full A ↔ B ↔ A cycles:

- 10 handoffs;
- repeated serialization/unload/restore;
- repeated prepared-instance consumption;
- the same actor/binding/prefetch ceilings;
- stable IDs and progress restoration;
- one shared asset load;
- zero duplicate state.

## Acceptance consequence

If automated proof and real-device human review pass and the user explicitly accepts/freeze:

**Test08 — World Expansion closes.**

The next phase is the presentation-quality pivot previously established:

**Test09 — Presentation Foundation / Vertical Beauty Slice.**
