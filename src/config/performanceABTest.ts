/**
 * 🎯 Performance A/B Test Configuration
 * 
 * Testing simplified animations vs original animations
 * to validate performance improvements
 */

import { ABTestConfig, AnimationPerformanceVariant } from '@/types/abTesting';

export const PERFORMANCE_TEST_CONFIG: ABTestConfig<{
  simplified: AnimationPerformanceVariant;
  original: AnimationPerformanceVariant;
}> = {
  testName: 'animation-performance-optimization',
  description: 'Test simplified animations vs original complex animations for performance',
  hypothesis: 'Simplified animations will reduce RAM usage by >50% while maintaining user engagement',
  
  variants: {
    simplified: {
      animationMode: 'simplified',
      framerMotionUsage: 'minimal',
      infiniteAnimations: false,
      springAnimations: false,
    },
    original: {
      animationMode: 'original',
      framerMotionUsage: 'full', 
      infiniteAnimations: true,
      springAnimations: true,
    }
  },
  
  trafficSplit: [80, 20], // 80% simplified, 20% original for comparison
  enabled: true,
  persistVariant: true,
  
  performanceThresholds: {
    maxBundleSizeIncrease: 0, // No increase allowed
    maxFCPIncrease: 0, // No FCP regression
    maxLCPIncrease: 0, // No LCP regression  
    minConversionImprovement: 0, // Maintain conversion rates
    maxRAMUsage: 200, // Target: <200MB RAM
  },
  
  audience: {
    includeNewUsers: true,
    includeReturningUsers: true,
    deviceTypes: ['desktop', 'mobile', 'tablet'],
    minSessionDuration: 5000, // 5 seconds minimum
  }
};

/**
 * Performance metrics to track during the test
 */
export const PERFORMANCE_METRICS = {
  // Core Web Vitals
  FCP: 'first-contentful-paint',
  LCP: 'largest-contentful-paint', 
  CLS: 'cumulative-layout-shift',
  
  // Custom Performance Metrics
  ANIMATION_RENDER_TIME: 'animation-render-time',
  MEMORY_USAGE: 'memory-usage',
  SCROLL_PERFORMANCE: 'scroll-performance',
  INTERACTION_LATENCY: 'interaction-latency',
  
  // Business Metrics  
  CONVERSION_RATE: 'conversion-rate',
  ENGAGEMENT_TIME: 'engagement-time',
  BOUNCE_RATE: 'bounce-rate',
} as const;

/**
 * Event tracking for performance test
 */
export const PERFORMANCE_EVENTS = {
  PAGE_LOAD: 'performance-page-load',
  ANIMATION_START: 'performance-animation-start', 
  ANIMATION_COMPLETE: 'performance-animation-complete',
  MEMORY_THRESHOLD_EXCEEDED: 'performance-memory-exceeded',
  SMOOTH_SCROLLING: 'performance-smooth-scroll',
  JANKY_SCROLLING: 'performance-janky-scroll',
} as const;
