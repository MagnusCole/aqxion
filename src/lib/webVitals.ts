// LLM-OPTIMIZED: Web Vitals monitoring with analytics integration
import { onCLS, onFCP, onLCP, onTTFB, onINP, type Metric } from 'web-vitals';

// Send analytics event function
function sendToAnalytics(metric: Metric) {
  // Send to Google Analytics 4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      non_interaction: true,
    });
  }

  // Send to GTM DataLayer if available
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'web_vital',
      metric_name: metric.name,
      metric_value: metric.value,
      metric_id: metric.id,
      metric_rating: metric.rating,
    });
  }

  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.warn('🎯 Web Vital:', {
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    });
  }
}

// Initialize Web Vitals monitoring
export function initWebVitals() {
  // Only run in browser
  if (typeof window === 'undefined') return;

  try {
    // Core Web Vitals
    onCLS(sendToAnalytics);
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
    
    // New INP metric (replaces FID)
    onINP(sendToAnalytics);

    // Log initialization in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('🚀 Web Vitals monitoring initialized');
    }
  } catch (error) {
    console.error('❌ Web Vitals initialization failed:', error);
  }
}

// Export types for TypeScript
export type WebVitalMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  id: string;
};

// Performance budget thresholds
export const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint (replaces FID)
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
};

// Check if metrics meet performance budget
export function checkPerformanceBudget(metric: WebVitalMetric): boolean {
  const threshold = PERFORMANCE_THRESHOLDS[metric.name as keyof typeof PERFORMANCE_THRESHOLDS];
  if (!threshold) return true;
  
  return metric.value <= threshold.good;
}
