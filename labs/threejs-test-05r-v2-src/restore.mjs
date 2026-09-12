import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root=path.dirname(fileURLToPath(import.meta.url));
const labs=path.resolve(root,'..');
const backup=path.join(root,'.05d-build.backup.mjs');
const target=path.join(labs,'threejs-test-05d-src','build.mjs');
const original=await readFile(backup,'utf8');
await writeFile(target,original);
await rm(backup,{force:true});
console.log('Restored accepted 05D source builder.');
