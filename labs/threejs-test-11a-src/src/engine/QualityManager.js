import { KERNEL_LIMITS } from '../config.js';

export class QualityManager {
  constructor(win = window) {
    this.win = win;
    this.coarsePointer = win.matchMedia?.('(pointer: coarse)')?.matches ?? false;
    const shortEdge = Math.min(win.innerWidth || 0, win.innerHeight || 0);
    this.mobile = this.coarsePointer || shortEdge <= 820;
    this.maxDpr = this.mobile ? KERNEL_LIMITS.mobileMaxDpr : KERNEL_LIMITS.desktopMaxDpr;
    this.tier = this.mobile ? 'mobile' : 'desktop';
  }

  pixelRatio() {
    return Math.min(this.maxDpr, Math.max(1, this.win.devicePixelRatio || 1));
  }

  snapshot() {
    return Object.freeze({
      tier: this.tier,
      mobile: this.mobile,
      coarsePointer: this.coarsePointer,
      maxDpr: this.maxDpr,
      pixelRatio: this.pixelRatio()
    });
  }
}
