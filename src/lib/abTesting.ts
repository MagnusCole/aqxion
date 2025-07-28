/**
 * 🧪 A/B Testing Core Library
 * 
 * Production-ready A/B testing system with performance optimization
 * Follows Apex React Synthesis Engine principles: simplicity, performance, type safety
 * 
 * @features
 * - Zero-flickering SPA optimization
 * - Statistical significance calculations
 * - GTM integration for analytics
 * - Local storage persistence
 * - TypeScript strict mode compliance
 * 
 * @author Apex React Synthesis Engine
 */

import type { 
  ABTestConfig, 
  ABTestResult, 
  ABAnalyticsEvent, 
  ConversionEvent,
  StatisticalResult,
  TestMetrics 
} from '@/types/abTesting';

// ===== CONSTANTS & CONFIGURATION =====

const AB_TEST_STORAGE_PREFIX = 'aqxion_ab_test_';
const SESSION_STORAGE_KEY = 'aqxion_session_id';
const DEFAULT_TRAFFIC_SPLIT = [50, 50];
const MIN_SAMPLE_SIZE = 100;
const SIGNIFICANCE_THRESHOLD = 0.05;

/**
 * Generate unique session ID for user tracking
 */
const generateSessionId = (): string => {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return `${timestamp}_${random}`;
};

/**
 * Get or create session ID
 */
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'ssr_session';
  
  let sessionId = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionId);
  }
  return sessionId;
};

// ===== ANALYTICS INTEGRATION =====

/**
 * Enhanced analytics class for A/B test tracking
 */
export class ABAnalytics {
  /**
   * Initialize A/B testing analytics
   */
  static initialize(): void {
    if (typeof window === 'undefined') return;
    
    // Ensure session ID exists
    getSessionId();
    
    // Log initialization
    if (process.env.NODE_ENV === 'development') {
      console.log('🧪 A/B Testing Analytics Initialized');
    }
  }

  /**
   * Track variant assignment to user
   */
  static trackVariantAssignment(testName: string, variant: string): void {
    const event: ABAnalyticsEvent = {
      category: 'ab_test',
      action: 'variant_assigned',
      testName,
      variant,
      timestamp: Date.now(),
      sessionId: getSessionId(),
    };

    this.sendToAnalytics(event);
    this.logToConsole('Variant Assigned', event);
  }

  /**
   * Track conversion events with detailed data
   */
  static trackConversion(
    testName: string, 
    variant: string, 
    conversionEvent: ConversionEvent
  ): void {
    const event: ABAnalyticsEvent = {
      category: 'ab_test',
      action: 'conversion',
      testName,
      variant,
      value: conversionEvent.value,
      customData: {
        type: conversionEvent.type,
        ...conversionEvent.metadata,
      },
      timestamp: Date.now(),
      sessionId: getSessionId(),
    };

    this.sendToAnalytics(event);
    this.logToConsole('Conversion Tracked', event);
  }

  /**
   * Track custom engagement events
   */
  static trackEngagement(
    testName: string, 
    variant: string, 
    eventName: string, 
    data?: Record<string, any>
  ): void {
    const event: ABAnalyticsEvent = {
      category: 'ab_test',
      action: 'engagement',
      testName,
      variant,
      customData: {
        eventName,
        ...data,
      },
      timestamp: Date.now(),
      sessionId: getSessionId(),
    };

    this.sendToAnalytics(event);
    this.logToConsole('Engagement Tracked', event);
  }

  /**
   * Send event to Google Analytics via GTM
   */
  private static sendToAnalytics(event: ABAnalyticsEvent): void {
    if (typeof window === 'undefined' || !window.gtag) {
      return;
    }

    window.gtag('event', `ab_${event.action}`, {
      event_category: event.category,
      test_name: event.testName,
      variant: event.variant,
      value: event.value,
      custom_parameters: event.customData,
      session_id: event.sessionId,
      timestamp: event.timestamp,
    });
  }

  /**
   * Console logging for development
   */
  private static logToConsole(action: string, event: ABAnalyticsEvent): void {
    if (process.env.NODE_ENV === 'development') {
      console.group(`🧪 A/B Test: ${action}`);
      console.log('Test:', event.testName);
      console.log('Variant:', event.variant);
      console.log('Data:', event.customData);
      console.groupEnd();
    }
  }
}

// ===== VARIANT SELECTION LOGIC =====

/**
 * Select variant based on traffic split and user session
 */
export const selectVariant = <T>(
  variants: Record<string, T>,
  trafficSplit?: readonly number[]
): { key: string; value: T } => {
  const variantKeys = Object.keys(variants);
  const splits = trafficSplit || Array(variantKeys.length).fill(100 / variantKeys.length);
  
  // Validate traffic split
  const totalTraffic = splits.reduce((sum, split) => sum + split, 0);
  if (Math.abs(totalTraffic - 100) > 0.1) {
    console.warn('A/B Test: Traffic split does not sum to 100%', splits);
  }

  // Generate deterministic but random selection based on session
  const sessionId = getSessionId();
  const hash = hashString(sessionId);
  const random = (hash % 10000) / 100; // 0-99.99

  // Select variant based on cumulative traffic splits
  let cumulative = 0;
  for (let i = 0; i < variantKeys.length; i++) {
    cumulative += splits[i] || 0;
    if (random < cumulative) {
      const key = variantKeys[i];
      return { key, value: variants[key] };
    }
  }

  // Fallback to first variant
  const fallbackKey = variantKeys[0];
  return { key: fallbackKey, value: variants[fallbackKey] };
};

/**
 * Simple hash function for consistent variant assignment
 */
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
};

// ===== PERSISTENCE LAYER =====

/**
 * Storage utilities for variant persistence
 */
export class ABStorage {
  /**
   * Save variant assignment to local storage
   */
  static saveVariant(testName: string, variantKey: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storageKey = `${AB_TEST_STORAGE_PREFIX}${testName}`;
      const data = {
        variant: variantKey,
        assignedAt: Date.now(),
        sessionId: getSessionId(),
      };
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (error) {
      console.warn('A/B Test: Failed to save variant to storage', error);
    }
  }

  /**
   * Load variant assignment from local storage
   */
  static loadVariant(testName: string): string | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const storageKey = `${AB_TEST_STORAGE_PREFIX}${testName}`;
      const stored = localStorage.getItem(storageKey);
      
      if (!stored) return null;
      
      const data = JSON.parse(stored);
      
      // Check if assignment is recent (within 30 days)
      const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
      if (data.assignedAt < thirtyDaysAgo) {
        this.clearVariant(testName);
        return null;
      }
      
      return data.variant;
    } catch (error) {
      console.warn('A/B Test: Failed to load variant from storage', error);
      return null;
    }
  }

  /**
   * Clear variant assignment
   */
  static clearVariant(testName: string): void {
    if (typeof window === 'undefined') return;
    
    try {
      const storageKey = `${AB_TEST_STORAGE_PREFIX}${testName}`;
      localStorage.removeItem(storageKey);
    } catch (error) {
      console.warn('A/B Test: Failed to clear variant from storage', error);
    }
  }

  /**
   * Clear all A/B test data
   */
  static clearAllTests(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith(AB_TEST_STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.warn('A/B Test: Failed to clear all test data', error);
    }
  }

  /**
   * Save feature flags to local storage
   */
  static saveFeatureFlags(flags: Record<string, boolean>): void {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem('abtest_feature_flags', JSON.stringify(flags));
    } catch (error) {
      console.warn('A/B Test: Failed to save feature flags', error);
    }
  }

  /**
   * Load feature flags from local storage
   */
  static loadFeatureFlags(): Record<string, boolean> {
    if (typeof window === 'undefined') return {};
    
    try {
      const stored = localStorage.getItem('abtest_feature_flags');
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.warn('A/B Test: Failed to load feature flags', error);
      return {};
    }
  }
}

// ===== STATISTICAL ANALYSIS =====

/**
 * Statistical utilities for A/B test analysis
 */
export class ABStatistics {
  /**
   * Calculate conversion rate
   */
  static conversionRate(conversions: number, impressions: number): number {
    if (impressions === 0) return 0;
    return (conversions / impressions) * 100;
  }

  /**
   * Calculate statistical significance using Z-test
   */
  static calculateSignificance(
    controlConversions: number,
    controlImpressions: number,
    variantConversions: number,
    variantImpressions: number
  ): StatisticalResult {
    // Calculate conversion rates
    const controlRate = controlConversions / controlImpressions;
    const variantRate = variantConversions / variantImpressions;
    
    // Calculate pooled probability
    const pooledConversions = controlConversions + variantConversions;
    const pooledImpressions = controlImpressions + variantImpressions;
    const pooledRate = pooledConversions / pooledImpressions;
    
    // Calculate standard error
    const standardError = Math.sqrt(
      pooledRate * (1 - pooledRate) * (1 / controlImpressions + 1 / variantImpressions)
    );
    
    // Calculate Z-score
    const zScore = (variantRate - controlRate) / standardError;
    
    // Calculate p-value (two-tailed test)
    const pValue = 2 * (1 - this.normalCDF(Math.abs(zScore)));
    
    // Calculate confidence level
    const confidence = (1 - pValue) * 100;
    
    // Calculate lift
    const lift = controlRate === 0 ? 0 : ((variantRate - controlRate) / controlRate) * 100;
    
    // Calculate margin of error (95% confidence)
    const marginOfError = 1.96 * standardError * 100;
    
    // Determine if result is significant
    const isSignificant = pValue < SIGNIFICANCE_THRESHOLD && 
                         Math.min(controlImpressions, variantImpressions) >= MIN_SAMPLE_SIZE;
    
    // Recommend action
    let recommendedAction: 'continue' | 'declare_winner' | 'stop_test' = 'continue';
    if (isSignificant) {
      recommendedAction = Math.abs(lift) > 5 ? 'declare_winner' : 'stop_test';
    }
    
    return {
      pValue,
      confidence,
      lift,
      margin: marginOfError,
      isSignificant,
      recommendedAction,
    };
  }

  /**
   * Cumulative distribution function for normal distribution
   */
  private static normalCDF(x: number): number {
    return 0.5 * (1 + this.erf(x / Math.sqrt(2)));
  }

  /**
   * Error function approximation
   */
  private static erf(x: number): number {
    // Abramowitz and Stegun approximation
    const a1 =  0.254829592;
    const a2 = -0.284496736;
    const a3 =  1.421413741;
    const a4 = -1.453152027;
    const a5 =  1.061405429;
    const p  =  0.3275911;

    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);

    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);

    return sign * y;
  }
}

// ===== UTILITY FUNCTIONS =====

/**
 * Check if test should be enabled based on environment
 */
export const isTestEnabled = (testName: string): boolean => {
  // In development, enable all tests
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  
  // In production, check feature flags
  // This can be extended to read from environment variables or external config
  return process.env[`NEXT_PUBLIC_AB_TEST_${testName.toUpperCase()}`] === 'true';
};

/**
 * Get device type for targeting
 */
export const getDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
  if (typeof window === 'undefined') return 'desktop';
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
  
  if (isTablet) return 'tablet';
  if (isMobile) return 'mobile';
  return 'desktop';
};

/**
 * Check if user is in target audience
 */
export const isInTargetAudience = (config: ABTestConfig): boolean => {
  const { audience } = config;
  if (!audience) return true;
  
  // Check device targeting
  if (audience.device && audience.device.length > 0) {
    const currentDevice = getDeviceType();
    if (!audience.device.includes(currentDevice)) {
      return false;
    }
  }
  
  // Check traffic percentage
  if (audience.percentage && audience.percentage < 100) {
    const sessionId = getSessionId();
    const hash = hashString(sessionId);
    const random = (hash % 100);
    if (random >= audience.percentage) {
      return false;
    }
  }
  
  return true;
};
