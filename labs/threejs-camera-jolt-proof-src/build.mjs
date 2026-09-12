import { build } from 'esbuild';
import { mkdir, writeFile, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.resolve(root, '../threejs-camera-jolt-proof');
await mkdir(out, { recursive: true });

const buildId = new Date().toISOString().replace(/\D/g, '').slice(0, 14);
let html = await readFile('index.template.html', 'utf8');
html = html.replaceAll('__BUILD_ID__', buildId);
await writeFile(path.join(out, 'index.html'), html);

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['safari16.4'],
  outfile: path.join(out, 'app.js'),
  legalComments: 'none',
  treeShaking: true
});

const js = await stat(path.join(out, 'app.js'));
const info = {
  build_id: buildId,
  purpose: 'minimal source-level Three.js camera-jolt proof before clean 05Q integration',
  three: '0.186.0',
  pipeline: 'esbuild-local-bundle',
  runtime_external_dependencies: 0,
  service_worker: false,
  target: 'safari16.4+',
  source_level_camera_rig: true,
  post_bundle_patching: false,
  controls: { KeyK: 'DEMO 25', KeyL: 'DEMO 40' },
  accepted_reference: {
    source: '05R-JOLT accepted isolated proof',
    demo_25: { duration_ms: 240, amp_x_px: 20, amp_y_px: 12, rotation_deg: 0.68, zoom: 0.018 },
    demo_40: { duration_ms: 300, amp_x_px: 34, amp_y_px: 20, rotation_deg: 1.15, zoom: 0.03 },
    decay_power: 1.65,
    phase_multiplier: 6.0
  },
  integration_status: 'NOT CONNECTED TO 05Q OR COMBAT',
  human_visual_review: 'PENDING',
  app_js_bytes: js.size
};
await writeFile(path.join(out, 'build-info.json'), JSON.stringify(info, null, 2));
console.log(JSON.stringify({ buildId, appBytes: js.size }));
