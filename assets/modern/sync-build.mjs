import { mkdir, readFile, writeFile, copyFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '../..');

const copyTargets = [
  ['build/style.css', 'css/style.css'],
  ['build/govcms8_uikit_starter.js', 'js/govcms8_uikit_starter.js'],
  ['node_modules/@truecms/animate/lib/js/module.js', 'js/animate.js'],
  ['node_modules/@truecms/accordion/lib/js/module.js', 'js/accordion.js'],
  ['node_modules/@truecms/main-nav/lib/js/module.js', 'js/main-nav.js'],
  ['node_modules/@truecms/side-nav/lib/js/module.js', 'js/side-nav.js'],
];

async function ensureFile(sourceRelative) {
  const source = path.join(root, sourceRelative);
  await access(source, constants.F_OK);
  return source;
}

async function copyArtifacts() {
  for (const [sourceRelative, targetRelative] of copyTargets) {
    const source = await ensureFile(sourceRelative);
    const target = path.join(root, targetRelative);

    await mkdir(path.dirname(target), { recursive: true });
    await copyFile(source, target);
  }
}

async function compileHighlightedLayouts() {
  const result = sass.compile(path.join(root, 'assets/scss/highlighted_layouts.scss'), {
    style: 'compressed',
    loadPaths: [path.join(root, 'node_modules'), path.join(root, 'assets/scss')],
  });

  const destination = path.join(root, 'css/highlighted_layouts.css');
  await writeFile(destination, result.css);
}

async function patchThemeJsBanner() {
  const destination = path.join(root, 'js/govcms8_uikit_starter.js');
  const source = await readFile(destination, 'utf8');

  // Keep output deterministic and avoid Vite's UMD-style global declaration.
  const patched = source.replace(/^var\s+GovcmsUIKitStarter=.*?;\n/s, '');
  await writeFile(destination, patched);
}

await copyArtifacts();
await compileHighlightedLayouts();
await patchThemeJsBanner();
