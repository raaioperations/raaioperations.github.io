export class PerformanceMonitor {
  constructor(capacity = 180) {
    this.capacity = capacity;
    this.samples = [];
  }

  sample(dtSeconds) {
    const value = Math.max(0, dtSeconds * 1000);
    this.samples.push(value);
    if (this.samples.length > this.capacity) this.samples.shift();
  }

  stats() {
    if (!this.samples.length) return { count: 0, avgMs: 0, p95Ms: 0, p99Ms: 0 };

    const ordered = [...this.samples].sort((a, b) => a - b);
    const avgMs = this.samples.reduce((sum, value) => sum + value, 0) / this.samples.length;
    const percentile = (p) => ordered[Math.min(ordered.length - 1, Math.ceil(ordered.length * p) - 1)];

    return {
      count: this.samples.length,
      avgMs,
      p95Ms: percentile(0.95),
      p99Ms: percentile(0.99)
    };
  }
}
