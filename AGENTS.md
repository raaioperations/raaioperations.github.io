# AGENTS.md — RAAI Game Development

## Authority

Human/Product Owner has final acceptance and freeze authority.

For game-development work, use the lowest-cost model that can reliably complete the task:

- **GPT-6 Astra** — Game Director / architecture / cross-system and expensive-to-reverse decisions.
- **GPT-5.6 Sol** — default production engineering, integration, difficult debugging, validation leadership.
- **GPT-5.6 Terra** — bounded implementation, routine engineering, test authoring, support work.
- **GPT-5.6 Luna** — repetitive QA, regression sweeps, documentation, inventories, structured audits.

Escalation: Luna → Terra → Sol → Astra → Human.

## Ownership

One active writer per mutable subsystem. Parallel work is allowed only across independent files/subsystems.

Implementation agents self-test, but an independent validator must verify completion before PASS.

## Required game-development loop

INTENT
→ SPEC
→ IMPLEMENT
→ SELF-TEST
→ INDEPENDENT QA
→ PLAYTHROUGH
→ PERFORMANCE CHECK
→ HUMAN REVIEW
→ PASS / ITERATE / FAIL
→ FREEZE

Compilation alone is never acceptance.

## Automated playthrough policy

For changes that can affect the current Three.js presentation/game runtime, the validator MUST run the playthrough harness under:

`tests/playthrough/`

### Fast structural/functional gate

Run from repository root:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

In another terminal:

```bash
cd tests/playthrough
npm install
npx playwright install chromium
npm run test:ci
```

CI mode validates:

- runtime boot;
- 06J structural checks;
- draw-call ceiling;
- triangle ceiling;
- actor count;
- duplicate state;
- Pass 5 integration;
- required GLB loading;
- player identification;
- forward movement;
- sprint/strafe movement;
- jump response;
- camera input;
- page/runtime errors;
- failed core asset requests.

CI performance timing is NOT authoritative because hosted/software-rendered browsers are not reference hardware.

### Reference-hardware gate

On the designated real development/reference machine with a graphical session:

```bash
python3 -m http.server 4173 --bind 127.0.0.1
```

Then:

```bash
cd tests/playthrough
npm install
npx playwright install chromium
npm run test:reference
```

Reference mode is headed and avoids forced SwiftShader. The game's 06J performance budgets are authoritative here.

Do not bypass or rewrite failed reference performance requirements merely to obtain PASS.

## Current 09B hard gates

- draw calls <= 120
- triangles <= 350,000
- 06J structural state stable
- 192 audit actors
- duplicate count = 0
- Pass 5 automated proof = ready
- no uncaught page errors
- no failed required asset loads
- human presentation review remains REQUIRED

## Evidence

A playthrough PASS must preserve:

- `test-results/agent-playthrough-report.json`
- `test-results/sunlit-basin-09b-playthrough.png`
- Playwright trace on failure

Report exact measured values. Do not summarize a failed metric as PASS.

## Acceptance states

- **PASS** — all applicable objective gates pass; ready for human review/freeze.
- **ITERATE** — architecture remains viable; a defined corrective pass is required.
- **FAIL** — approach/foundation failed; stop adding scope.
- **BLOCKED** — external dependency or authorization prevents completion.

## Frozen systems

Do not modify frozen/canonical systems incidentally. If a required change crosses a frozen boundary, stop and escalate with evidence.

## Git

- Preserve unrelated user work.
- Use focused commits.
- Do not force-push.
- Do not merge test branches or deploy production without authorization.
