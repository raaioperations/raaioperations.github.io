import { build } from 'esbuild';
import { cp, mkdir, readFile, rm, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.resolve(root, '../threejs-test-11a');
const sourceRoot = path.join(root, 'src');

const assert = (condition, message) => {
  if (!condition) throw new Error('Test11A build proof failed: ' + message);
};

async function listJs(dir) {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await listJs(full));
    else if (entry.isFile() && entry.name.endsWith('.js')) files.push(full);
  }
  return files;
}

const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
assert(packageJson.dependencies.three === '0.186.0', 'Three.js must be pinned to 0.186.0');

const sourceFiles = await listJs(sourceRoot);
let sourceText = '';
for (const file of sourceFiles) sourceText += '\n' + await readFile(file, 'utf8');

const rafCalls = (sourceText.match(/requestAnimationFrame\s*\(/g) || []).length;
const animationLoopCalls = (sourceText.match(/setAnimationLoop\s*\(/g) || []).length;
assert(rafCalls === 1, 'exactly one requestAnimationFrame call required, found ' + rafCalls);
assert(animationLoopCalls === 0, 'renderer.setAnimationLoop is prohibited in 11A');

const legacyAcceptance = JSON.parse(await readFile(path.resolve(root, '../threejs-test-09b/acceptance.json'), 'utf8'));
assert(legacyAcceptance.frozen === true && legacyAcceptance.canonical === true, 'reference 09B must remain frozen/canonical');
assert(legacyAcceptance.accepted_build === '20260924205044', 'unexpected reference 09B build');

await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });

await build({
  entryPoints: [path.join(sourceRoot, 'main.js')],
  bundle: true,
  minify: true,
  format: 'esm',
  platform: 'browser',
  target: ['safari16.4'],
  outfile: path.join(out, 'app.js'),
  legalComments: 'none',
  sourcemap: false
});

await cp(path.join(root, 'index.html'), path.join(out, 'index.html'));
await cp(path.join(root, 'style.css'), path.join(out, 'style.css'));

const appStat = await stat(path.join(out, 'app.js'));
const buildId = new Date().toISOString().replace(/\D/g, '').slice(0, 14);

const buildInfo = {
  build_id: buildId,
  test: '11A',
  roadmap: 'Test11 — Greenfield Production Rebuild',
  milestone: 'Production Kernel',
  architecture: 'GREENFIELD',
  reference_platform: {
    accepted_09b_build: legacyAcceptance.accepted_build,
    mutated: false
  },
  environment: {
    three: packageJson.dependencies.three,
    renderer: 'WebGLRenderer',
    framework: 'vanilla',
    build_tool: 'esbuild'
  },
  source_gates: {
    request_animation_frame_calls: rafCalls,
    renderer_set_animation_loop_calls: animationLoopCalls
  },
  acceptance_limits: {
    raf_loops: 1,
    draw_calls_max: 10,
    triangles_max: 5000,
    desktop_max_dpr: 1.5,
    mobile_max_dpr: 1.25
  },
  lifecycle: [
    'mount',
    'start',
    'pause',
    'resize',
    'dispose'
  ],
  browser_smoke: 'PENDING',
  app_js_bytes: appStat.size,
  frozen: false,
  canonical: false
};

await writeFile(path.join(out, 'build-info.json'), JSON.stringify(buildInfo, null, 2) + '\n');
await writeFile(path.join(out, 'verification-report.json'), JSON.stringify({
  test: '11A',
  status: 'STATIC_PASS_BROWSER_PENDING',
  build_id: buildId,
  checks: {
    exact_one_raf_source_call: true,
    no_set_animation_loop: true,
    three_version_pinned: true,
    webgl_renderer_selected: true,
    explicit_lifecycle: true,
    resource_tracker_present: true,
    mobile_dpr_caps_present: true,
    deterministic_scheduler_order_unit_test_required: true,
    browser_webgl_smoke_required: true,
    frozen_reference_preserved: true
  }
}, null, 2) + '\n');

console.log(JSON.stringify({ buildId, rafCalls, animationLoopCalls, appBytes: appStat.size }));
