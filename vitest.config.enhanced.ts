// LLM-OPTIMIZED: Comprehensive testing setup with accessibility and performance tests
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    // Testing environment
    environment: 'jsdom',
    
    // Global setup
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
    
    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        'src/styles/',
        '.next/',
        'coverage/',
        'docs/',
        'public/',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
    },
    
    // Test matching patterns
    include: [
      'src/**/*.{test,spec}.{js,ts,jsx,tsx}',
      'src/test/**/*.{test,spec}.{js,ts,jsx,tsx}',
    ],
    
    // Timeout configuration
    testTimeout: 10000,
    hookTimeout: 10000,
    
    // Mock configuration
    deps: {
      inline: ['@testing-library/jest-dom'],
    },
  },
  
  // Path resolution
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/test': path.resolve(__dirname, './src/test'),
    },
  },
  
  // Define global variables for testing
  define: {
    'process.env.NODE_ENV': '"test"',
  },
});
