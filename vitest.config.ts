import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // ✅ Allows using `describe`, `test`, `expect` globally
    environment: 'jsdom', // ✅ Simulates browser environment for React
    setupFiles: './src/setupTests.ts', // ✅ Loads Jest matchers like `.toBeInTheDocument()`
    include: ['src/**/*.test.tsx'], // ✅ Ensure Vitest detects tests
    exclude: ['node_modules', 'dist'], // ✅ Exclude irrelevant files
    coverage: {
      include: ['src/**/*.tsx'], // ✅ Only include React components in coverage
      exclude: ['**/node_modules/**', '**/*.test.tsx', '**/*.spec.tsx'], // ✅ Ignore test files in coverage
    },
  },
});
