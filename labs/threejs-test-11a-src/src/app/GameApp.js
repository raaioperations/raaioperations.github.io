import { FRAME_PHASE } from '../config.js';
import { FrameScheduler } from '../engine/FrameScheduler.js';
import { QualityManager } from '../engine/QualityManager.js';
import { ResourceTracker } from '../engine/ResourceTracker.js';
import { RendererService } from '../engine/RendererService.js';
import { PerformanceMonitor } from '../engine/PerformanceMonitor.js';
import { KernelScene } from '../world/KernelScene.js';
import { DiagnosticsPanel } from '../ui/DiagnosticsPanel.js';

export class GameApp {
  constructor(container) {
    if (!(container instanceof HTMLElement)) throw new TypeError('GameApp requires an HTMLElement container');
    this.container = container;
    this.lifecycle = 'CREATED';
    this.mounted = false;
    this.disposed = false;
    this.unsubscribers = [];
  }

  mount() {
    if (this.mounted || this.disposed) return this;

    this.canvas = document.createElement('canvas');
    this.canvas.className = 'game-canvas';
    this.canvas.setAttribute('aria-label', 'RAAI Test11A greenfield Three.js kernel');
    this.container.appendChild(this.canvas);

    this.quality = new QualityManager(window);
    this.resources = new ResourceTracker();
    this.renderer = new RendererService({ canvas: this.canvas, quality: this.quality });
    this.kernelScene = new KernelScene(this.resources);
    this.performance = new PerformanceMonitor(180);
    this.scheduler = new FrameScheduler();
    this.diagnostics = new DiagnosticsPanel(this.container);

    this.unregisterPresentation = this.scheduler.register({
      name: 'kernel-presentation',
      phase: FRAME_PHASE.PRESENTATION,
      update: (frame) => this.kernelScene.update(frame)
    });

    this.unregisterDiagnosticsSample = this.scheduler.register({
      name: 'performance-sample',
      phase: FRAME_PHASE.DIAGNOSTICS,
      update: ({ dt }) => this.performance.sample(dt)
    });

    this.unregisterRender = this.scheduler.register({
      name: 'render',
      phase: FRAME_PHASE.RENDER,
      update: () => {
        this.renderer.render(this.kernelScene.scene, this.kernelScene.camera);
        this.diagnostics.update({
          scheduler: this.scheduler,
          renderer: this.renderer,
          performance: this.performance,
          lifecycle: this.lifecycle
        });
      }
    });

    this.onResize = () => this.resize();
    this.onVisibility = () => {
      if (document.hidden) this.pause('HIDDEN');
      else this.start('VISIBLE');
    };
    this.onContextLost = (event) => {
      event.preventDefault();
      this.lifecycle = 'CONTEXT_LOST';
      document.documentElement.dataset.kernelStatus = 'CONTEXT_LOST';
      this.pause('CONTEXT_LOST');
    };

    this.resizeObserver = new ResizeObserver(this.onResize);
    this.resizeObserver.observe(this.container);
    window.addEventListener('resize', this.onResize, { passive: true });
    window.addEventListener('orientationchange', this.onResize, { passive: true });
    window.visualViewport?.addEventListener('resize', this.onResize, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibility);
    this.canvas.addEventListener('webglcontextlost', this.onContextLost, false);

    this.resize();
    this.lifecycle = 'MOUNTED';
    this.mounted = true;
    document.documentElement.dataset.kernelStatus = 'MOUNTED';
    return this;
  }

  start(reason = 'START') {
    if (!this.mounted || this.disposed) return;
    this.lifecycle = `RUNNING:${reason}`;
    this.scheduler.start();
    document.documentElement.dataset.kernelStatus = 'RUNNING';
  }

  pause(reason = 'PAUSE') {
    if (!this.mounted || this.disposed) return;
    this.scheduler.pause();
    this.lifecycle = `PAUSED:${reason}`;
  }

  resize() {
    if (!this.renderer || !this.kernelScene) return false;
    return this.renderer.resizeTo(this.container, this.kernelScene.camera);
  }

  dispose() {
    if (this.disposed) return;
    this.lifecycle = 'DISPOSING';

    this.scheduler?.dispose();
    this.unregisterPresentation?.();
    this.unregisterDiagnosticsSample?.();
    this.unregisterRender?.();

    this.resizeObserver?.disconnect();
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('orientationchange', this.onResize);
    window.visualViewport?.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.canvas?.removeEventListener('webglcontextlost', this.onContextLost, false);

    this.diagnostics?.dispose();
    this.resources?.dispose();
    this.renderer?.dispose();
    this.canvas?.remove();

    this.mounted = false;
    this.disposed = true;
    this.lifecycle = 'DISPOSED';
    document.documentElement.dataset.kernelStatus = 'DISPOSED';
  }

  snapshot() {
    return Object.freeze({
      lifecycle: this.lifecycle,
      scheduler: {
        running: this.scheduler?.running ?? false,
        frameCount: this.scheduler?.frameCount ?? 0,
        systems: this.scheduler?.systemNames ?? []
      },
      renderer: this.renderer?.snapshot() ?? null,
      quality: this.quality?.snapshot() ?? null,
      resourcesOwned: this.resources?.count ?? 0
    });
  }
}
