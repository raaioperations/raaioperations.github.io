import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('test-results');
fs.mkdirSync(outDir, { recursive: true });

test('09B Pass 5 automated playthrough pilot', async ({ page }) => {
  const pageErrors = [];
  const consoleErrors = [];
  const failedCoreRequests = [];

  page.on('pageerror', error => pageErrors.push(String(error?.stack || error)));
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('requestfailed', request => {
    const url = request.url();
    if (
      url.includes('/labs/threejs-test-09b/app.js') ||
      url.includes('/labs/threejs-test-09b/assets/Soldier.glb') ||
      url.includes('/assets/3d/sunlit-basin/')
    ) {
      failedCoreRequests.push({
        url,
        error: request.failure()?.errorText || 'unknown'
      });
    }
  });

  await page.goto('/labs/threejs-test-09b/', { waitUntil: 'domcontentloaded' });

  await page.waitForFunction(() => {
    return globalThis.__presentationPass5_09B?.applied === true;
  }, null, { timeout: 45000 });

  await page.waitForFunction(() => {
    const stage = globalThis.__livingWorld06J?.stage;
    return stage === 'PASS' || stage === 'FAIL';
  }, null, { timeout: 75000 });

  const beforeMove = await page.evaluate(() => ({
    flockDistance: globalThis.__livingWorld06A?.distance ?? null,
    zone: document.getElementById('zone')?.textContent ?? '',
    pass5: globalThis.__presentationPass5_09B?.proof ?? null,
    beauty: globalThis.__verticalBeautySlice09B?.proof ?? null,
    audit: globalThis.__livingWorld06J?.summary ?? null,
    auditStage: globalThis.__livingWorld06J?.stage ?? null
  }));

  expect(beforeMove.auditStage).toBe('PASS');
  expect(beforeMove.pass5?.automatedReady).toBe(true);
  expect(beforeMove.pass5?.failed ?? []).toEqual([]);
  expect(beforeMove.pass5?.checks?.v3_assets).toBe(true);
  expect(beforeMove.pass5?.checks?.v3_batches).toBe(true);
  expect(beforeMove.pass5?.checks?.terrain_conformance).toBe(true);
  expect(beforeMove.pass5?.checks?.terrain_clearance).toBe(true);
  expect(beforeMove.pass5?.checks?.legacy_shore_hidden).toBe(true);
  expect(beforeMove.pass5?.checks?.legacy_meadow_hidden).toBe(true);
  expect(beforeMove.pass5?.checks?.draw_calls).toBe(true);
  expect(beforeMove.pass5?.checks?.triangles).toBe(true);
  expect(beforeMove.pass5?.checks?.duplicates).toBe(true);
  expect(beforeMove.pass5?.checks?.no_error).toBe(true);

  expect(beforeMove.beauty?.checks?.total_draw_calls).toBe(true);
  expect(beforeMove.beauty?.checks?.total_triangles).toBe(true);
  expect(beforeMove.beauty?.checks?.duplicates_zero).toBe(true);
  expect(beforeMove.beauty?.checks?.regression).toBe(true);

  expect(beforeMove.flockDistance).not.toBeNull();

  await page.keyboard.down('KeyW');
  await page.waitForTimeout(1200);
  await page.keyboard.up('KeyW');
  await page.waitForTimeout(250);

  const afterForward = await page.evaluate(() => ({
    flockDistance: globalThis.__livingWorld06A?.distance ?? null,
    zone: document.getElementById('zone')?.textContent ?? ''
  }));

  expect(Math.abs(afterForward.flockDistance - beforeMove.flockDistance)).toBeGreaterThan(0.20);

  await page.keyboard.down('ShiftLeft');
  await page.keyboard.down('KeyD');
  await page.waitForTimeout(900);
  await page.keyboard.up('KeyD');
  await page.keyboard.up('ShiftLeft');
  await page.waitForTimeout(250);

  await page.keyboard.press('Space');
  await page.waitForTimeout(500);

  const finalState = await page.evaluate(() => ({
    flockDistance: globalThis.__livingWorld06A?.distance ?? null,
    zone: document.getElementById('zone')?.textContent ?? '',
    pass5: globalThis.__presentationPass5_09B?.proof ?? null,
    auditStage: globalThis.__livingWorld06J?.stage ?? null,
    auditResult: globalThis.__livingWorld06J?.result ?? null,
    playerCharacter: document.getElementById('char')?.textContent ?? '',
    p5Hud: {
      stage: document.getElementById('p5Stage09B')?.textContent ?? '',
      assets: document.getElementById('p5Assets09B')?.textContent ?? '',
      draw: document.getElementById('p5Draw09B')?.textContent ?? '',
      triangles: document.getElementById('p5Triangles09B')?.textContent ?? '',
      regression: document.getElementById('p5Regression09B')?.textContent ?? '',
      result: document.getElementById('p5Result09B')?.textContent ?? ''
    }
  }));

  expect(finalState.auditStage).toBe('PASS');
  expect(finalState.pass5?.automatedReady).toBe(true);
  expect(finalState.playerCharacter).not.toBe('BOOT');
  expect(failedCoreRequests).toEqual([]);
  expect(pageErrors).toEqual([]);

  const screenshotPath = path.join(outDir, 'sunlit-basin-09b-playthrough.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });

  const report = {
    test: 'RAAI Agent Playthrough Pilot',
    target: '09B Pass 5 — Sunlit Basin',
    status: 'PASS',
    beforeMove,
    afterForward,
    finalState,
    diagnostics: {
      pageErrors,
      consoleErrors,
      failedCoreRequests
    },
    assertions: {
      runtime_06j_pass: true,
      pass5_automated_ready: true,
      keyboard_movement_observed: true,
      sprint_input_exercised: true,
      jump_input_exercised: true,
      core_asset_requests_ok: true,
      uncaught_page_errors_zero: true
    },
    note: 'Automated proof does not replace required human presentation review.'
  };

  fs.writeFileSync(
    path.join(outDir, 'agent-playthrough-report.json'),
    JSON.stringify(report, null, 2) + '\n'
  );
});
