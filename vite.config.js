import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        bedBreakfast: resolve(process.cwd(), 'bed-breakfast.html'),
        panorama: resolve(process.cwd(), 'panoramica.html'),
        mainEnglish: resolve(process.cwd(), 'index-en.html'),
        bedBreakfastEnglish: resolve(process.cwd(), 'bed-breakfast-en.html'),
        panoramaEnglish: resolve(process.cwd(), 'panoramica-en.html'),
        mainGerman: resolve(process.cwd(), 'index-de-ch.html'),
        bedBreakfastGerman: resolve(process.cwd(), 'bed-breakfast-de-ch.html'),
        panoramaGerman: resolve(process.cwd(), 'panoramica-de-ch.html'),
      },
    },
  },
});
