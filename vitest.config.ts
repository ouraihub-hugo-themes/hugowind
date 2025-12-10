import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        '**/*.config.ts',
        '**/*.d.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './assets/ts'),
      '@types': path.resolve(__dirname, './assets/ts/types'),
      '@utils': path.resolve(__dirname, './assets/ts/utils'),
      '@modules': path.resolve(__dirname, './assets/ts/modules'),
    },
  },
});
