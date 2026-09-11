import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const src=path.resolve(process.cwd(),'../threejs-test-05a-src');
const files=['build.mjs','jump-prebuild.mjs','postpatch.mjs','jump-postpatch.mjs'];
for(const name of files){
  let text=await readFile(path.join(src,name),'utf8');
  if(name!=='jump-prebuild.mjs'){
    text=text.replaceAll('threejs-test-05a','threejs-test-05e')
             .replaceAll('threejs-test05a','threejs-test05e')
             .replaceAll('Test 05A','Test 05E')
             .replaceAll('test05a-main.js','test05e-main.js');
  }
  await writeFile(name,text);
}
console.log('Prepared isolated Test 05E build chain from accepted Test 05A source.');
