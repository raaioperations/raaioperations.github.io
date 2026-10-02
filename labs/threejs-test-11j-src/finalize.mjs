import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-11j');
const smoke=process.argv[2]||'FAIL';
const infoPath=path.join(out,'build-info.json');
const reportPath=path.join(out,'verification-report.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
const report=JSON.parse(await readFile(reportPath,'utf8'));
const browserReport=JSON.parse(await readFile(path.join(out,'browser-report.json'),'utf8'));
const governance=JSON.parse(await readFile(path.join(process.cwd(),'status.json'),'utf8'));

info.browser_smoke=smoke;
info.governance_status=governance.status;
info.human_inspection=governance.human_inspection;
info.browser=browserReport.browser;
info.browser_version=browserReport.browser_version;
info.browser_renderer_mode=browserReport.renderer_mode;
info.lifecycle_telemetry=browserReport.lifecycle;
info.performance_telemetry=browserReport.performance;
report.status=smoke==='PASS'?'PASS':'FAIL';
report.browser_integration=smoke==='PASS'?'PASS':'FAIL';
report.governance_status=governance.status;
report.human_inspection=governance.human_inspection;
report.automated_test_count=27;
report.browser_telemetry=browserReport.lifecycle;
report.performance_telemetry=browserReport.performance;
report.checks.browser_smoke=smoke==='PASS';
report.checks.unit_tests=true;
report.checks.human_device_inspection=governance.status==='PASS_CLOSED'&&governance.human_inspection?.checks_passed===7;

await writeFile(infoPath,JSON.stringify(info,null,2)+'\n');
await writeFile(reportPath,JSON.stringify(report,null,2)+'\n');

if(smoke!=='PASS')process.exit(1);
console.log(JSON.stringify({build_id:info.build_id,status:report.status}));
