import { mkdir, readdir, readFile, rename, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const projectBase = '/wotagei';
const pageRoutes = [
  'about',
  'blog',
  'contact',
  'junior',
  'members',
  'movies',
  'news',
  'organization',
  'school',
  'services',
  'shop',
  'sponsor',
  'works',
];

for (const route of pageRoutes) {
  const source = path.join(outputDirectory, `${route}.html`);
  const destinationDirectory = path.join(outputDirectory, route);
  await mkdir(destinationDirectory, { recursive: true });
  await rename(source, path.join(destinationDirectory, 'index.html'));
}

const textExtensions = new Set(['.css', '.html', '.js', '.json', '.map', '.rsc', '.svg', '.txt']);

async function listTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listTextFiles(absolutePath));
    else if (textExtensions.has(path.extname(entry.name))) files.push(absolutePath);
  }

  return files;
}

function prefixProjectPaths(content, includePageRoutes = true) {
  let prepared = content
    .replace(/(["'=:(\\])\/(?=(?:_next|assets)\/)/g, `$1${projectBase}/`)
    .replace(/(["'=:(\\])\/(?=(?:og\.png|favicon\.svg)(?:["'\\?#]|$))/g, `$1${projectBase}/`);

  if (!includePageRoutes) return prepared;

  prepared = prepared
    .replaceAll('href="/"', `href="${projectBase}/"`)
    .replaceAll('href\\":\\"/\\"', `href\\":\\"${projectBase}/\\"`);

  for (const route of pageRoutes) {
    prepared = prepared.replace(
      new RegExp(`(["'=:(\\\\])\\/${route}(?=([#?"'\\\\]|$))`, 'g'),
      `$1${projectBase}/${route}/`,
    );
  }

  return prepared;
}

for (const file of await listTextFiles(outputDirectory)) {
  const original = await readFile(file, 'utf8');
  const prepared = prefixProjectPaths(original, path.extname(file) !== '.rsc');
  if (prepared !== original) await writeFile(file, prepared);
}

await writeFile(path.join(outputDirectory, '.nojekyll'), '');

const remainingAssetPath = /(["'=:(\\])\/(?:_next|assets)\//;
const remainingRoutePath = new RegExp(
  `(["'=:(\\\\])\\/(?:${pageRoutes.join('|')})(?=([#?"'\\\\]|$))`,
);
for (const file of await listTextFiles(outputDirectory)) {
  const content = await readFile(file, 'utf8');
  const hasRemainingRoute = path.extname(file) !== '.rsc' && remainingRoutePath.test(content);
  if (remainingAssetPath.test(content) || hasRemainingRoute) {
    throw new Error(`Unprefixed GitHub Pages path remains in ${path.relative(outputDirectory, file)}`);
  }
}

console.log(`GitHub Pages artifact prepared at ${outputDirectory}${projectBase}/`);
