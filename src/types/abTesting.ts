/**
 * 🧪 A/B Testing Type Definitions
 * 
 * Comprehensive TypeScript interfaces for A/B testing system
 * Following Apple-inspired minimalist design with maximum type safety
 * 
 * @author Apex React Synthesis Engine
 */

// ===== CORE A/B TESTING INTERFACES =====

/**
 * Base configuration for any A/B test
 */
export interface ABTestConfig<T = Record<string, any>> {
  /** Unique identifier for the test */
  readonly testName: string;
  /** Map of variant keys to variant values */
  readonly variants: T;
  /** Traffic split percentages (must sum to 100) */
  readonly trafficSplit?: readonly number[];
  /** Whether test is currently enabled */
  readonly enabled?: boolean;
  /** Persist variant selection across sessions */
  readonly persistVariant?: boolean;
  /** Test description for documentation */
  readonly description?: string;
  /** Test hypothesis for validation */
  readonly hypothesis?: string;
  /** Target audience criteria */
  readonly audience?: ABTestAudience;
  /** Performance thresholds for validation */
  readonly performanceThresholds?: PerformanceThresholds;
}

/**
 * Result object returned by useABTest hook
 */
export interface ABTestResult<T> {
  /** Current variant value */
  readonly variant: T;
  /** Current variant key identifier */
  readonly variantKey: string;
  /** Loading state during initialization */
  readonly isLoading: boolean;
  /** Track custom events for this test */
  readonly trackEvent: (eventName: string, data?: Record<string, any>) => void;
  /** Track conversion events with optional value */
  readonly trackConversion: (eventType?: string, value?: number) => void;
  /** Get test metadata */
  readonly getTestInfo: () => ABTestInfo;
}

/**
 * Test metadata and status information
 */
export interface ABTestInfo {
  readonly testName: string;
  readonly variantKey: string;
  readonly assignedAt: number;
  readonly sessionId: string;
  readonly isControlGroup: boolean;
}

/**
 * Audience targeting configuration
 */
export interface ABTestAudience {
  /** Include only these user types */
  readonly include?: readonly string[];
  /** Exclude these user types */
  readonly exclude?: readonly string[];
  /** Geographic restrictions */
  readonly geo?: readonly string[];
  /** Device type targeting */
  readonly device?: readonly ('mobile' | 'desktop' | 'tablet')[];
  /** Traffic percentage (0-100) */
  readonly percentage?: number;
  /** Include new users in test */
  readonly includeNewUsers?: boolean;
  /** Include returning users in test */
  readonly includeReturningUsers?: boolean;
  /** Device types to include */
  readonly deviceTypes?: readonly ('mobile' | 'desktop' | 'tablet')[];
  /** Minimum session duration in milliseconds */
  readonly minSessionDuration?: number;
}

// ===== PERFORMANCE A/B TESTING TYPES =====

/**
 * Animation performance variant configuration
 */
export interface AnimationPerformanceVariant {
  /** Animation complexity mode */
  readonly animationMode: 'simplified' | 'original';
  /** Framer Motion usage level */
  readonly framerMotionUsage: 'minimal' | 'full';
  /** Whether to include infinite animations */
  readonly infiniteAnimations: boolean;
  /** Whether to include spring animations */
  readonly springAnimations: boolean;
}

/**
 * Performance thresholds for A/B test validation
 */
export interface PerformanceThresholds {
  /** Maximum bundle size increase allowed (bytes) */
  readonly maxBundleSizeIncrease?: number;
  /** Maximum First Contentful Paint increase (ms) */
  readonly maxFCPIncrease?: number;
  /** Maximum Largest Contentful Paint increase (ms) */
  readonly maxLCPIncrease?: number;
  /** Minimum conversion rate improvement required (%) */
  readonly minConversionImprovement?: number;
  /** Maximum RAM usage allowed (MB) */
  readonly maxRAMUsage?: number;
}

// ===== ANALYTICS & TRACKING =====

/**
 * Analytics event for A/B test tracking
 */
export interface ABAnalyticsEvent {
  /** Event category for GA4 */
  readonly category: 'ab_test';
  /** Specific action taken */
  readonly action: 'variant_assigned' | 'conversion' | 'engagement' | 'custom';
  /** Test identifier */
  readonly testName: string;
  /** Variant identifier */
  readonly variant: string;
  /** Optional event value */
  readonly value?: number;
  /** Custom event data */
  readonly customData?: Record<string, any>;
  /** Timestamp when event occurred */
  readonly timestamp: number;
  /** Session identifier */
  readonly sessionId: string;
}

/**
 * Conversion event configuration
 */
export interface ConversionEvent {
  /** Type of conversion */
  readonly type: 'form_submit' | 'button_click' | 'page_view' | 'scroll' | 'time_spent' | 'custom';
  /** Optional monetary value */
  readonly value?: number;
  /** Additional metadata */
  readonly metadata?: Record<string, any>;
}

// ===== TEST MANAGEMENT =====

/**
 * Feature flag configuration for tests
 */
export interface FeatureFlag {
  /** Whether feature is enabled */
  readonly enabled: boolean;
  /** Available variants for this feature */
  readonly variants?: readonly string[];
  /** Traffic percentage to include */
  readonly trafficPercentage?: number;
  /** Environment where flag is active */
  readonly environment?: readonly ('development' | 'staging' | 'production')[];
  /** Start/end dates for time-bound tests */
  readonly schedule?: {
    readonly startDate?: string;
    readonly endDate?: string;
  };
}

/**
 * Complete feature flags configuration
 */
export interface FeatureFlags {
  // Hero Section Tests
  readonly heroHeadlineTest: FeatureFlag;
  readonly heroCTATest: FeatureFlag;
  readonly heroValuePropTest: FeatureFlag;
  
  // Problem Section Tests
  readonly problemCopyTest: FeatureFlag;
  readonly problemIntensityTest: FeatureFlag;
  
  // Solution Section Tests
  readonly solutionApproachTest: FeatureFlag;
  readonly solutionBenefitsTest: FeatureFlag;
  
  // Offer Section Tests
  readonly pricingStrategyTest: FeatureFlag;
  readonly guaranteeTest: FeatureFlag;
  
  // Testimonials Tests
  readonly testimonialFormatTest: FeatureFlag;
  readonly socialProofTest: FeatureFlag;
  
  // CTA Section Tests
  readonly finalCTATest: FeatureFlag;
  readonly urgencyTest: FeatureFlag;
}

// ===== SPECIFIC TEST CONFIGURATIONS =====

/**
 * Hero section test variants
 */
export interface HeroTestVariants {
  readonly headlines: Record<string, string>;
  readonly ctaButtons: Record<string, string>;
  readonly valueProps: Record<string, string>;
}

/**
 * Copy test variant structure
 */
export interface CopyVariant {
  readonly headline?: string;
  readonly subheadline?: string;
  readonly ctaText?: string;
  readonly description?: string;
  readonly benefits?: readonly string[];
}

// ===== RESULTS & ANALYTICS =====

/**
 * Test performance metrics
 */
export interface TestMetrics {
  readonly testName: string;
  readonly variant: string;
  readonly impressions: number;
  readonly conversions: number;
  readonly conversionRate: number;
  readonly confidence: number;
  readonly lift: number;
  readonly isWinner: boolean;
  readonly isStatisticallySignificant: boolean;
}

/**
 * Statistical analysis result
 */
export interface StatisticalResult {
  readonly pValue: number;
  readonly confidence: number;
  readonly lift: number;
  readonly margin: number;
  readonly isSignificant: boolean;
  readonly recommendedAction: 'continue' | 'declare_winner' | 'stop_test';
}

// ===== UTILITY TYPES =====

/**
 * Environment-specific configuration
 */
export type Environment = 'development' | 'staging' | 'production';

/**
 * Test status enumeration
 */
export type TestStatus = 'draft' | 'running' | 'paused' | 'completed' | 'archived';

/**
 * Device types for targeting
 */
export type DeviceType = 'mobile' | 'desktop' | 'tablet';

/**
 * Geographic regions
 */
export type GeographicRegion = 'peru' | 'lima' | 'latam' | 'global';

// ===== GLOBAL CONFIGURATION =====

/**
 * Global A/B testing configuration
 */
export interface ABTestGlobalConfig {
  /** Whether A/B testing is globally enabled */
  enabled: boolean;
  /** Current environment */
  environment: 'development' | 'production' | 'test';
  /** Current user ID (if authenticated) */
  userId?: string;
  /** Current session ID */
  sessionId?: string;
  /** Enable debug mode */
  debug: boolean;
  /** Whether user has given cookie consent */
  cookieConsent: boolean;
  /** User audience segments */
  audienceSegments: string[];
  /** Feature flags configuration */
  featureFlags: Record<string, boolean>;
  /** User IDs to exclude from testing */
  excludedUserIds: string[];
  /** Force specific variants for testing */
  forceVariants: Record<string, string>;
  /** Global traffic split (0-1) */
  globalTrafficSplit: number;
}
