import { readFile, writeFile } from 'node:fs/promises';

const file = '../threejs-test-05o/app.js';
let text = await readFile(file, 'utf8');

if (!text.includes("let enemyAttackPhase05O='READY'")) {
  throw new Error('Expected promoted 05O enemy attack state was not generated.');
}

text = text.replaceAll('enemyAttackPhase05N', 'enemyAttackPhase05O');

if (text.includes('enemyAttackPhase05N')) {
  throw new Error('Old 05N enemy attack state reference remains in 05O output.');
}

await writeFile(file, text);
