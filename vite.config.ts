/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/tx-nas/' : '/', // base adaptée à l'environnement
  build: {
    target: ['es2020']
  },
  resolve: {
    mainFields: ['module']
  },
  plugins: [analog()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    include: ['**/*.spec.ts'],
    reporters: ['default']
  },
  define: {
    'import.meta.vitest': mode !== 'production'
  }
}));
