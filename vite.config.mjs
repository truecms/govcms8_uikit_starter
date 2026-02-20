import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'assets/modern/entry-theme.js'),
      name: 'GovcmsUIKitStarter',
      formats: ['iife'],
      fileName: () => 'govcms8_uikit_starter.js',
      cssFileName: 'style',
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
