import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const execFileAsync = promisify(execFile);

function syncDrupalAssets() {
  return {
    name: 'sync-drupal-assets',
    async writeBundle() {
      await execFileAsync('node', ['assets/modern/sync-build.mjs']);
    },
  };
}

export default defineConfig({
  plugins: [syncDrupalAssets()],
  build: {
    lib: {
      entry: resolve(__dirname, 'assets/modern/entry-theme.js'),
      name: 'GovcmsUIKitStarter',
      formats: ['iife'],
      fileName: () => 'govcms8_uikit_starter.js',
      cssFileName: 'style',
    },
    rollupOptions: {
      output: {
        intro: '"use strict";',
      },
    },
    outDir: 'build',
    emptyOutDir: true,
    sourcemap: false,
    minify: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules', 'assets/scss'],
      },
    },
  },
});
