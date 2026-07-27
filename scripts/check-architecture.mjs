import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const mobile = join(root, 'apps/mobile');
const failures = [];

async function walk(dir) {
  for (const name of await readdir(dir)) {
    const path = join(dir, name);
    if ((await stat(path)).isDirectory()) await walk(path);
    else await check(path);
  }
}

async function check(file) {
  if (!/\.(ts|tsx)$/.test(file)) return;
  const text = await readFile(file, 'utf8');
  const rel = relative(root, file);
  if (/api\.fufire\.space|FUFIRE_API_KEY|ff_live_/.test(text)) failures.push(`${rel}: direct provider/secret reference`);
  if (rel.startsWith('apps/mobile') && /from ['"]\.\.\/\.\.\/\.\.\/apps\/web/.test(text)) failures.push(`${rel}: mobile imports web app`);
}

await walk(mobile);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('Architecture boundary checks passed');
