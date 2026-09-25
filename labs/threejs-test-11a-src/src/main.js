import { GameApp } from './app/GameApp.js';
import { KERNEL_LIMITS } from './config.js';

window.addEventListener('error', () => {
  document.documentElement.dataset.runtimeError = '1';
});

window.addEventListener('unhandledrejection', () => {
  document.documentElement.dataset.runtimeError = '1';
});

function runLifecycleProbe() {
  let passed = 0;

  for (let cycle = 0; cycle < 2; cycle++) {
    const host = document.createElement('div');
    host.style.cssText = 'position:fixed;left:-10000px;top:0;width:64px;height:64px;';
    document.body.appendChild(host);

    const probe = new GameApp(host).mount();
    probe.resize();

    const mountedCanvasCount = host.querySelectorAll('canvas').length;
    probe.dispose();
    const disposedCanvasCount = host.querySelectorAll('canvas').length;
    host.remove();

    if (mountedCanvasCount === 1 && disposedCanvasCount === 0 && probe.disposed === true) passed++;
  }

  return passed === 2;
}

function runDeterministicBrowserSmoke(app) {
  const root = document.documentElement;
  root.dataset.smokeMode = 'deterministic-scheduler-step';

  // Exercise production start/pause/cancel without relying on background-tab RAF.
  app.start('SMOKE_START');
  app.pause('SMOKE_PAUSE');

  const base = performance.now();
  for (let frame = 1; frame <= 16; frame++) {
    app.scheduler.step(base + frame * (1000 / 60));
  }

  const resizePass = app.resize() === false || app.renderer.snapshot().width > 0;
  const lifecyclePass = runLifecycleProbe();
  const snapshot = app.snapshot();
  const renderer = snapshot.renderer;

  const pass =
    snapshot.scheduler.frameCount >= 16 &&
    renderer?.renderer === 'WebGLRenderer' &&
    renderer.width > 0 &&
    renderer.height > 0 &&
    renderer.drawCalls <= KERNEL_LIMITS.drawCallsMax &&
    renderer.triangles <= KERNEL_LIMITS.trianglesMax &&
    resizePass &&
    lifecyclePass &&
    root.dataset.runtimeError === '0';

  root.dataset.browserSmoke = pass ? 'PASS' : 'FAIL';
  root.dataset.renderer = renderer?.renderer || 'UNKNOWN';
  root.dataset.frameCount = String(snapshot.scheduler.frameCount);
  root.dataset.drawCalls = String(renderer?.drawCalls ?? -1);
  root.dataset.triangles = String(renderer?.triangles ?? -1);
  root.dataset.lifecycleProbe = lifecyclePass ? 'PASS' : 'FAIL';
  root.dataset.resizeProbe = resizePass ? 'PASS' : 'FAIL';

  return pass;
}

const host = document.getElementById('app');
const app = new GameApp(host).mount();
const smokeMode = new URLSearchParams(location.search).get('smoke') === '1';

window.__RAAI_TEST11A__ = Object.freeze({
  app,
  snapshot: () => app.snapshot(),
  pause: () => app.pause('DEBUG'),
  resume: () => app.start('DEBUG'),
  resize: () => app.resize(),
  dispose: () => app.dispose(),
  runDeterministicBrowserSmoke: () => runDeterministicBrowserSmoke(app)
});

if (smokeMode) runDeterministicBrowserSmoke(app);
else app.start('BOOT');

window.addEventListener('pagehide', () => app.dispose(), { once: true });
