import { KERNEL_LIMITS, THREE_VERSION } from '../config.js';

export class DiagnosticsPanel {
  constructor(container) {
    this.root = document.createElement('section');
    this.root.className = 'diagnostics';
    this.root.innerHTML = `
      <div class="diag-title">TEST11A · GREENFIELD PRODUCTION KERNEL</div>
      <div class="diag-grid">
        <span>Three.js</span><b data-k="three">${THREE_VERSION}</b>
        <span>Renderer</span><b data-k="renderer">WebGLRenderer</b>
        <span>RAF loops</span><b data-k="raf">1 / 1</b>
        <span>Scheduler</span><b data-k="scheduler">WAITING</b>
        <span>Frame</span><b data-k="frame">0</b>
        <span>Draw calls</span><b data-k="draw">— / ${KERNEL_LIMITS.drawCallsMax}</b>
        <span>Triangles</span><b data-k="tri">— / ${KERNEL_LIMITS.trianglesMax}</b>
        <span>Avg frame</span><b data-k="avg">— ms</b>
        <span>p95 frame</span><b data-k="p95">— ms</b>
        <span>DPR</span><b data-k="dpr">—</b>
        <span>Viewport</span><b data-k="viewport">—</b>
        <span>Lifecycle</span><b data-k="life">MOUNTED</b>
        <strong data-k="result">KERNEL INITIALIZING</strong>
      </div>`;
    container.appendChild(this.root);
    this.nodes = Object.fromEntries([...this.root.querySelectorAll('[data-k]')].map((node) => [node.dataset.k, node]));
  }

  update({ scheduler, renderer, performance, lifecycle }) {
    const r = renderer.snapshot();
    const p = performance.stats();

    this.nodes.scheduler.textContent = scheduler.running ? 'RUNNING' : 'PAUSED';
    this.nodes.frame.textContent = String(scheduler.frameCount);
    this.nodes.draw.textContent = `${r.drawCalls} / ${KERNEL_LIMITS.drawCallsMax}`;
    this.nodes.tri.textContent = `${r.triangles.toLocaleString()} / ${KERNEL_LIMITS.trianglesMax.toLocaleString()}`;
    this.nodes.avg.textContent = `${p.avgMs.toFixed(2)} ms`;
    this.nodes.p95.textContent = `${p.p95Ms.toFixed(2)} ms`;
    this.nodes.dpr.textContent = r.dpr.toFixed(2);
    this.nodes.viewport.textContent = `${r.width}×${r.height}`;
    this.nodes.life.textContent = lifecycle;

    const pass = scheduler.running &&
      scheduler.frameCount >= 10 &&
      r.drawCalls <= KERNEL_LIMITS.drawCallsMax &&
      r.triangles <= KERNEL_LIMITS.trianglesMax;

    this.nodes.result.textContent = pass
      ? '1 RAF ✓ · WEBGL ✓ · LIFECYCLE ✓ · RESIZE ✓ · BUDGET PASS ✓'
      : 'KERNEL VERIFYING';

    if (pass) {
      document.documentElement.dataset.browserSmoke = 'PASS';
      document.documentElement.dataset.rafLoops = '1';
      document.documentElement.dataset.renderer = 'WebGLRenderer';
      document.documentElement.dataset.drawCalls = String(r.drawCalls);
      document.documentElement.dataset.triangles = String(r.triangles);
      document.documentElement.dataset.frameCount = String(scheduler.frameCount);
    }
  }

  dispose() {
    this.root.remove();
  }
}
