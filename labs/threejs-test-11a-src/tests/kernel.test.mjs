import test from 'node:test';
import assert from 'node:assert/strict';
import { FrameScheduler } from '../src/engine/FrameScheduler.js';
import { PerformanceMonitor } from '../src/engine/PerformanceMonitor.js';
import { FRAME_PHASE } from '../src/config.js';

test('FrameScheduler executes systems in deterministic phase order', () => {
  const calls = [];
  let now = 1000;
  const scheduler = new FrameScheduler({ now: () => now });

  scheduler.register({ name: 'render', phase: FRAME_PHASE.RENDER, update: () => calls.push('render') });
  scheduler.register({ name: 'input', phase: FRAME_PHASE.INPUT, update: () => calls.push('input') });
  scheduler.register({ name: 'presentation', phase: FRAME_PHASE.PRESENTATION, update: () => calls.push('presentation') });

  now = 1016;
  scheduler.step(now);
  assert.deepEqual(calls, ['input', 'presentation', 'render']);
  assert.deepEqual(scheduler.systemNames, ['input', 'presentation', 'render']);
});

test('FrameScheduler rejects duplicate system names', () => {
  const scheduler = new FrameScheduler({ now: () => 0 });
  scheduler.register({ name: 'one', phase: 10, update() {} });
  assert.throws(
    () => scheduler.register({ name: 'one', phase: 20, update() {} }),
    /duplicate system/
  );
});

test('PerformanceMonitor calculates bounded rolling statistics', () => {
  const monitor = new PerformanceMonitor(4);
  for (const ms of [10, 20, 30, 40, 50]) monitor.sample(ms / 1000);
  const stats = monitor.stats();

  assert.equal(stats.count, 4);
  assert.equal(stats.avgMs, 35);
  assert.equal(stats.p95Ms, 50);
  assert.equal(stats.p99Ms, 50);
});
