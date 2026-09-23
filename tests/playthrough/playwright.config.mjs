import { defineConfig } from '@playwright/test';

const perfMode = process.env.RAAI_PERF_MODE || 'ci-structural';
const headed = process.env.RAAI_HEADED === '1';
const referenceMode = perfMode === 'reference';

export default defineConfig({
  testDir: '.',
  testMatch: /.*\.spec\.mjs/,
  timeout: 90000,
  expect: { timeout: 10000 },
  retries: 0,
  workers: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
  use: {
    baseURL: 'http://127.0.0.1:4173',
    headless: !headed,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    launchOptions: {
      // CI uses software WebGL so functional/structural validation works on a
      // hosted runner. Reference mode intentionally avoids SwiftShader so the
      // game's own 06J timing budgets measure the real machine/browser stack.
      args: referenceMode
        ? [
            '--enable-webgl',
            '--ignore-gpu-blocklist'
          ]
        : [
            '--enable-webgl',
            '--ignore-gpu-blocklist',
            '--enable-unsafe-swiftshader',
            '--use-angle=swiftshader'
          ]
    }
  }
});
