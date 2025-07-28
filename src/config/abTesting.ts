/**
 * 🧪 A/B Testing Configuration File
 * 
 * Central configuration for all A/B tests across the application
 * Follows best practices for test management and deployment
 * 
 * @features
 * - Test registry and metadata
 * - Environment-specific configurations  
 * - Feature flag management
 * - Performance monitoring
 * 
 * @author Apex React Synthesis Engine
 */

import type { ABTestGlobalConfig } from '@/types/abTesting';

// ===== ENVIRONMENT DETECTION =====

const isDevelopment = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

// ===== GLOBAL A/B TESTING CONFIGURATION =====

export const AB_TEST_CONFIG: ABTestGlobalConfig = {
  enabled: true, // ✅ Ready for production
  environment: process.env.NODE_ENV as 'development' | 'production' | 'test',
  debug: isDevelopment,
  cookieConsent: true, // Assume consent for Peru B2B audience
  audienceSegments: [],
  excludedUserIds: [],
  forceVariants: isDevelopment ? {
    // Development overrides for testing
    // 'hero_copy_simple': 'treatment', // Uncomment to force treatment variant
  } : {},
  globalTrafficSplit: 0.5, // 50% default traffic allocation
  featureFlags: {
    // Core feature flags - READY FOR PRODUCTION
    ab_testing_enabled: true,
    analytics_tracking: true,
    performance_monitoring: true,
    
    // Specific feature toggles - ACTIVATE WHEN NEEDED
    hero_ab_test_simple: false, // 👈 Change to true to activate
    hero_ab_test_full: false,   // 👈 Alternative full version
    pricing_ab_test: false,     // Future tests
    testimonials_ab_test: false,
    copy_optimization: true,
    
    // Development features
    debug_mode: isDevelopment,
    force_variants: isDevelopment,
    console_logging: isDevelopment,
  },
};

// ===== ACTIVE TESTS REGISTRY =====

/**
 * Registry of all active A/B tests
 * Used for monitoring and management
 */
export const ACTIVE_TESTS = {
  // PRODUCTION READY - Hero Copy A/B Test (Simple)
  hero_copy_simple: {
    name: 'Hero Copy Simple A/B Test',
    description: 'Testing headline copy only - same design',
    hypothesis: 'Urgency + competitor awareness will increase conversions',
    startDate: '2024-01-15',
    estimatedDuration: '2 weeks',
    targetSampleSize: 1000,
    primaryMetric: 'hero_cta_clicks',
    secondaryMetrics: ['scroll_depth', 'time_on_page', 'contact_form_starts'],
    status: 'ready' as const, // 👈 Change to 'active' to start
    variants: {
      control: 'Original "Tu Empresa en Perú Funcionando en 30 Días"',
      treatment: 'Urgency "Últimas 47 Empresas Creadas Este Mes"',
    },
  },

  // ALTERNATIVE - Full Hero A/B Test (Complete redesign)
  hero_copy_full: {
    name: 'Hero Full A/B Test',
    description: 'Testing full hero redesign with urgency + social proof',
    hypothesis: 'Complete redesign with visual urgency will increase conversions 25%+',
    status: 'ready' as const, // 👈 Alternative option
    variants: {
      control: 'Original design with "Lo Hacemos TODO Por Ti"',
      treatment: 'Urgency design with social proof + competitor awareness',
    },
  },
  
  // Future tests (disabled)
  pricing_display: {
    name: 'Pricing Display Format',
    description: 'Testing different pricing presentation formats',
    hypothesis: 'Simple pricing will reduce bounce rate',
    status: 'planned' as const,
    enabled: false,
  },
  
  testimonials_layout: {
    name: 'Testimonials Section Layout',
    description: 'Testing carousel vs. grid vs. single testimonial',
    hypothesis: 'Specific success stories will increase trust',
    status: 'planned' as const,
    enabled: false,
  },
} as const;

// ===== ANALYTICS CONFIGURATION =====

/**
 * Google Analytics 4 configuration for A/B testing
 */
export const GA4_CONFIG = {
  measurementId: 'G-TGD5LDTN', // From existing GTM setup
  
  // Custom events for A/B testing
  events: {
    variant_assigned: 'ab_test_variant_assigned',
    conversion: 'ab_test_conversion',
    engagement: 'ab_test_engagement',
    test_started: 'ab_test_started',
    test_completed: 'ab_test_completed',
  },
  
  // Custom parameters
  parameters: {
    test_name: 'test_name',
    variant_key: 'variant_key',
    session_id: 'session_id',
    user_segment: 'user_segment',
    experiment_id: 'experiment_id',
  },
};

// ===== PERFORMANCE MONITORING =====

/**
 * Performance thresholds for A/B testing
 */
export const PERFORMANCE_CONFIG = {
  // Maximum allowed performance impact
  maxJSBundleIncrease: 50000, // 50KB max increase
  maxFirstPaintDelay: 100, // 100ms max delay
  maxMemoryUsage: 5000000, // 5MB max memory for A/B testing
  
  // Monitoring intervals
  performanceCheckInterval: 30000, // 30 seconds
  memoryCheckInterval: 60000, // 1 minute
  
  // Alerts
  enablePerformanceAlerts: isDevelopment,
  alertThresholds: {
    memoryLeak: 10000000, // 10MB
    slowVariantRender: 500, // 500ms
    highErrorRate: 0.05, // 5% error rate
  },
};

// ===== STORAGE CONFIGURATION =====

/**
 * Local storage configuration for A/B testing
 */
export const STORAGE_CONFIG = {
  prefix: 'aqxion_ab_',
  expiration: 30 * 24 * 60 * 60 * 1000, // 30 days
  keys: {
    variants: 'variants',
    session: 'session',
    featureFlags: 'feature_flags',
    userSegment: 'user_segment',
    testHistory: 'test_history',
  },
  
  // Backup to sessionStorage if localStorage fails
  enableSessionBackup: true,
  
  // Clear expired data automatically
  autoCleanup: true,
  cleanupInterval: 24 * 60 * 60 * 1000, // Daily cleanup
};

// ===== STATISTICAL CONFIGURATION =====

/**
 * Statistical analysis configuration
 */
export const STATS_CONFIG = {
  // Significance testing
  significanceThreshold: 0.05, // 95% confidence
  minimumSampleSize: 100,
  minimumConversions: 20,
  
  // Test duration
  minimumTestDuration: 7 * 24 * 60 * 60 * 1000, // 7 days
  maximumTestDuration: 30 * 24 * 60 * 60 * 1000, // 30 days
  
  // Early stopping rules
  enableEarlyStopping: true,
  earlyStoppingThreshold: 0.01, // 99% confidence for early stop
  minimumEarlyStopDuration: 3 * 24 * 60 * 60 * 1000, // 3 days
};

// ===== DEVELOPMENT HELPERS =====

/**
 * Development utilities for A/B testing
 */
export const DEV_CONFIG = {
  enableDebugPanel: isDevelopment,
  enableForceVariants: isDevelopment,
  enableConsoleLogging: isDevelopment,
  enablePerformanceMonitoring: isDevelopment,
  
  // Debug shortcuts
  debugShortcuts: {
    toggleTest: 'Ctrl+Shift+T',
    switchVariant: 'Ctrl+Shift+V',
    clearData: 'Ctrl+Shift+C',
    showStats: 'Ctrl+Shift+S',
  },
  
  // Mock data for testing
  mockConversions: isDevelopment,
  mockUsers: isDevelopment ? 1000 : 0,
  mockConversionRate: 0.15, // 15% mock conversion rate
};

// ===== EXPORT UTILITIES =====

/**
 * Get test configuration by name
 */
export const getTestConfig = (testName: keyof typeof ACTIVE_TESTS) => {
  return ACTIVE_TESTS[testName];
};

/**
 * Check if test is enabled
 */
export const isTestEnabled = (testName: string): boolean => {
  const test = ACTIVE_TESTS[testName as keyof typeof ACTIVE_TESTS];
  return test?.status === 'ready' && AB_TEST_CONFIG.enabled;
};

/**
 * Get all active test names
 */
export const getActiveTestNames = (): string[] => {
  return Object.entries(ACTIVE_TESTS)
    .filter(([_, test]) => test.status === 'ready')
    .map(([name]) => name);
};

/**
 * Get configuration for environment
 */
export const getEnvironmentConfig = () => {
  return {
    isDevelopment,
    isProduction,
    debugMode: AB_TEST_CONFIG.debug,
    featuresEnabled: AB_TEST_CONFIG.featureFlags,
  };
};
