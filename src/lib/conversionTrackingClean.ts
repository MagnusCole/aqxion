// LLM-OPTIMIZED: Auto-improved conversion tracking for AQXION growth agency
// Clean implementation without lint errors - Cycle 1

export interface ConversionEvent {
  event: string;
  category: string;
  label?: string;
  value?: number;
  source?: string;
  medium?: string;
  campaign?: string;
}

export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

// Conversion tracking utilities for AQXION growth agency
export const useConversionTracking = () => {
  const trackConversion = (data: ConversionEvent) => {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', data.event, {
        event_category: data.category,
        event_label: data.label,
        value: data.value,
        custom_parameter_1: data.source,
        custom_parameter_2: data.medium,
        custom_parameter_3: data.campaign
      });
    }

    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', data.event, {
        category: data.category,
        label: data.label,
        value: data.value
      });
    }

    // Development tracking - warn instead of log
    if (process.env.NODE_ENV === 'development') {
      console.warn('Conversion tracked:', data);
    }
  };

  const trackPageView = (path?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path || window.location.pathname,
        page_title: document.title,
        page_location: window.location.href
      });
    }
  };

  const initUserEngagementTracking = () => {
    if (typeof window === 'undefined') return;

    const startTime = Date.now();
    let maxScroll = 0;
    
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      maxScroll = Math.max(maxScroll, scrollPercent);
    };
      
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      trackConversion({
        event: 'user_engagement',
        category: 'behavior',
        label: 'page_session',
        value: timeSpent
      });
      
      if (maxScroll > 50) {
        trackConversion({
          event: 'scroll_depth',
          category: 'engagement',
          label: `${maxScroll}%`,
          value: maxScroll
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  };

  return {
    trackConversion,
    trackPageView,
    initUserEngagementTracking
  };
};

// Performance monitoring utilities
export const usePerformanceMonitoring = () => {
  const trackWebVitals = () => {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          const lcp = entries[entries.length - 1];
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'lcp',
              value: Math.round(lcp.startTime)
            });
          }
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch {
      // Observer not supported
    }

    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Type assertion for layout shift entry
          const layoutShiftEntry = entry as PerformanceEntry & {
            hadRecentInput: boolean;
            value: number;
          };
          
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'cls',
            value: Math.round(clsValue * 1000)
          });
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
    } catch {
      // Observer not supported
    }
  };

  const trackResourceTiming = () => {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation && typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'performance_timing', {
          event_category: 'performance',
          event_label: 'page_load',
          value: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    });
  };

  return {
    trackWebVitals,
    trackResourceTiming
  };
};

// AI-powered A/B testing utilities for 2025 optimization
export const useAIABTesting = () => {
  const runABTest = (testName: string, variants: string[], userId?: string) => {
    if (typeof window === 'undefined') return variants[0];
    
    // Simple hash-based variant selection
    const seed = userId || localStorage.getItem('aqxion_visitor_id') || 'anonymous';
    const hash = seed.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    const variantIndex = Math.abs(hash) % variants.length;
    const selectedVariant = variants[variantIndex];
    
    // Track AB test participation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_view', {
        event_category: 'ab_testing',
        event_label: `${testName}_${selectedVariant}`,
        custom_parameter_1: testName,
        custom_parameter_2: selectedVariant
      });
    }
    
    return selectedVariant;
  };

  const trackABConversion = (testName: string, variant: string, conversionType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ab_test_conversion', {
        event_category: 'ab_testing',
        event_label: `${testName}_${variant}_${conversionType}`,
        custom_parameter_1: testName,
        custom_parameter_2: variant,
        custom_parameter_3: conversionType
      });
    }
  };

  return {
    runABTest,
    trackABConversion
  };
};

// Note: Global window extensions are defined in src/app/landing/types/global.d.ts
