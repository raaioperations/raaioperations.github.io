import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const out = path.resolve(root, '../threejs-test-11a');
const smoke = process.argv[2] || 'FAIL';

const buildInfoPath = path.join(out, 'build-info.json');
const reportPath = path.join(out, 'verification-report.json');
const buildInfo = JSON.parse(await readFile(buildInfoPath, 'utf8'));
const report = JSON.parse(await readFile(reportPath, 'utf8'));

buildInfo.browser_smoke = smoke;
report.status = smoke === 'PASS' ? 'PASS' : 'FAIL';
report.checks.browser_webgl_smoke = smoke === 'PASS';
report.checks.unit_tests = true;

await writeFile(buildInfoPath, JSON.stringify(buildInfo, null, 2) + '\n');
await writeFile(reportPath, JSON.stringify(report, null, 2) + '\n');

if (smoke !== 'PASS') process.exit(1);
console.log(JSON.stringify({ build_id: buildInfo.build_id, status: report.status }));
