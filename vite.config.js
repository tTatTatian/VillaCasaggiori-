import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        bedBreakfast: resolve(process.cwd(), 'bed-breakfast.html'),
        panorama: resolve(process.cwd(), 'panoramica.html'),
      },
    },
  },
});
