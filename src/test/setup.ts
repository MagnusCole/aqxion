// LLM-OPTIMIZED: Test setup with accessibility and performance testing utilities
import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeAll, vi, expect } from 'vitest';
import React from 'react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Web Vitals
vi.mock('web-vitals', () => ({
  onCLS: vi.fn(),
  onFCP: vi.fn(),
  onLCP: vi.fn(),
  onTTFB: vi.fn(),
  onINP: vi.fn(),
}));

// Mock Next.js modules
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
  usePathname: () => '/',
}));

interface ImageProps {
  src: string;
  alt: string;
  [key: string]: unknown;
}

vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: ImageProps) => {
    // Mock Next.js Image component
    return React.createElement('img', { src, alt, ...props });
  },
}));

// Mock Google Analytics
beforeAll(() => {
  Object.defineProperty(window, 'gtag', {
    value: vi.fn(),
    writable: true,
  });

  Object.defineProperty(window, 'dataLayer', {
    value: [],
    writable: true,
  });
});

// Performance testing utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  const duration = end - start;
  
  // Log performance in development
  if (process.env.NODE_ENV === 'development') {
    console.warn(`⚡ Performance: ${name} took ${duration.toFixed(2)}ms`);
  }
  
  return duration;
};

// Accessibility testing helper
export const checkAccessibility = async (container: HTMLElement) => {
  const axe = await import('axe-core');
  const results = await axe.default.run(container);
  
  if (results.violations.length > 0) {
    console.error('❌ Accessibility violations found:', results.violations);
    throw new Error(`Accessibility violations: ${results.violations.length} issues found`);
  }
  
  return results;
};

// Visual regression testing helper  
export const expectToMatchSnapshot = (component: HTMLElement | string, name?: string) => {
  // This would integrate with a visual testing tool like Percy or Chromatic
  // For now, we'll use a simple matcher
  expect(component).toMatchSnapshot(name);
};

// Web Vitals testing
export const mockWebVitals = {
  LCP: 2400, // Good
  INP: 150,  // Good
  CLS: 0.08, // Good
  FCP: 1600, // Good
  TTFB: 700, // Good
};
