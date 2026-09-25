window.addEventListener('error', () => {
  document.documentElement.dataset.runtimeError = '1';
});

window.addEventListener('unhandledrejection', () => {
  document.documentElement.dataset.runtimeError = '1';
});

import { GameApp } from './app/GameApp.js';

const host = document.getElementById('app');
const app = new GameApp(host).mount();
app.start('BOOT');

window.__RAAI_TEST11A__ = Object.freeze({
  app,
  snapshot: () => app.snapshot(),
  pause: () => app.pause('DEBUG'),
  resume: () => app.start('DEBUG'),
  resize: () => app.resize(),
  dispose: () => app.dispose()
});

window.addEventListener('pagehide', () => app.dispose(), { once: true });
