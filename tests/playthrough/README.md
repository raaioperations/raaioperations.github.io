# RAAI Automated Playthrough

This harness turns the existing Three.js runtime proof APIs into a repeatable browser-driven playthrough.

## Current target

`labs/threejs-test-09b/` — Sunlit Basin, 09B Presentation Pass 5.

## What it tests

The Playwright test:

1. boots the real browser build;
2. waits for the 06J scale audit;
3. preserves structural 06J gates in CI;
4. waits for 09B Pass 5 integration;
5. checks environment assets, terrain conformance, draw calls, triangles, duplicates and runtime errors;
6. identifies the actual local player root from the live Three.js scene;
7. drives real browser keyboard input for forward movement;
8. drives sprint + strafe;
9. drives jump and verifies vertical movement;
10. exercises camera drag;
11. records JSON evidence and a screenshot.

## Install once

```bash
cd tests/playthrough
npm install
npx playwright install chromium
```

## Start the game locally

From repository root:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Keep that terminal running.

## CI structural mode

```bash
cd tests/playthrough
npm run test:ci
```

This mode may classify frame-time-only failures as non-authoritative when running under software-rendered CI, but it never bypasses failed structural checks such as draw calls, triangles, actor count or duplicates.

## RAAIBook/reference mode

Run from the real graphical desktop:

```bash
cd tests/playthrough
npm run test:reference
```

Reference mode:

- opens a headed Chromium window;
- does not force SwiftShader;
- requires the real 06J performance audit to PASS;
- therefore acts as the hardware-performance gate.

## Output

Successful runs write:

- `test-results/agent-playthrough-report.json`
- `test-results/sunlit-basin-09b-playthrough.png`

Failures retain a Playwright trace for diagnosis.

## Acceptance boundary

Automated playthrough validates function, structural budgets, runtime health, and reference performance where applicable.

It does **not** replace human visual/presentation acceptance.
