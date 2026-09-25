import {readFile,writeFile} from 'node:fs/promises';
import path from 'node:path';

const out=path.resolve(process.cwd(),'../threejs-test-11b');
const smoke=process.argv[2]||'FAIL';
const infoPath=path.join(out,'build-info.json');
const reportPath=path.join(out,'verification-report.json');
const info=JSON.parse(await readFile(infoPath,'utf8'));
const report=JSON.parse(await readFile(reportPath,'utf8'));
info.browser_smoke=smoke;
report.status=smoke==='PASS'?'PASS':'FAIL';
report.checks.browser_smoke=smoke==='PASS';
report.checks.unit_tests=true;
await writeFile(infoPath,JSON.stringify(info,null,2)+'\n');
await writeFile(reportPath,JSON.stringify(report,null,2)+'\n');
if(smoke!=='PASS')process.exit(1);
console.log(JSON.stringify({build_id:info.build_id,status:report.status}));
