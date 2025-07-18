// LLM-OPTIMIZED: Performance monitoring and conversion tracking utility
"use client";

import { useEffect } from 'react';

interface ConversionEvent {
  event: string;
  category: string;
  label: string;
  value?: number;
}

export const useConversionTracking = () => {
  
  const trackConversion = (event: ConversionEvent) => {
    // Google Analytics 4 tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.event, {
        event_category: event.category,
        event_label: event.label,
        value: event.value || 1
      });
    }
    
    // Facebook Pixel tracking
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: event.label,
        content_category: event.category,
        value: event.value || 1,
        currency: 'USD'
      });
    }
    
    // Custom analytics logging
    if (process.env.NODE_ENV === 'development') {
      console.warn('Conversion tracked:', event);
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
        page_title: page,
        page_location: window.location.href
      });
    }
  };

  return {
    trackConversion,
    trackPageView,
  };
};

// Hook for tracking user engagement
export const useUserEngagement = () => {
  const { trackConversion } = useConversionTracking();
  
  useEffect(() => {
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
  }, [trackConversion]);
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry.startTime;
            if (typeof (window as any).gtag !== 'undefined') {
              (window as any).gtag('event', 'timing_complete', {
                name: 'LCP',
                value: Math.round(lcp)
              });
            }
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // LCP not supported
      }
      
      // Monitor CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as PerformanceEntry & {
            hadRecentInput?: boolean;
            value?: number;
          };
          if (!clsEntry.hadRecentInput && clsEntry.value) {
            clsValue += clsEntry.value;
          }
        }
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // CLS not supported
      }
      
      // Report CLS on page unload
      const reportCLS = () => {
        if (typeof (window as any).gtag !== 'undefined') {
          (window as any).gtag('event', 'timing_complete', {
            name: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        }
      };
      
      window.addEventListener('beforeunload', reportCLS);
      
      return () => {
        observer.disconnect();
        clsObserver.disconnect();
        window.removeEventListener('beforeunload', reportCLS);
      };
    }
  }, []);
};

// Conversion optimization utilities
export const conversionUtils = {
  // A/B test assignment
  getVariant: (testName: string, variants: string[]) => {
    if (typeof window === 'undefined') return variants[0];
    
    const stored = localStorage.getItem(`ab_test_${testName}`);
    if (stored && variants.includes(stored)) return stored;
    
    const variant = variants[Math.floor(Math.random() * variants.length)];
    localStorage.setItem(`ab_test_${testName}`, variant);
    
    // Track assignment
    if ((window as any).gtag) {
      (window as any).gtag('event', 'ab_test_assignment', {
        event_category: 'optimization',
        event_label: `${testName}_${variant}`,
        custom_map: {
          custom_parameter_1: testName,
          custom_parameter_2: variant
        }
      });
    }
    
    return variant;
  },
  
  // Urgency timer
  createUrgencyTimer: (endDate: Date) => {
    const now = new Date().getTime();
    const end = endDate.getTime();
    const diff = end - now;
    
    if (diff <= 0) return null;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  },
  
  // Social proof counter
  incrementSocialProof: (key: string, increment = 1) => {
    if (typeof window === 'undefined') return 0;
    
    const current = parseInt(localStorage.getItem(`social_proof_${key}`) || '0');
    const newValue = current + increment;
    localStorage.setItem(`social_proof_${key}`, newValue.toString());
    
    return newValue;
  }
};
