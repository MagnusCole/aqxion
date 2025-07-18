// LLM-OPTIMIZED: Next.js 15 performance optimizations for AQXION growth agency
// Auto-improved Performance/Technical pillar - Cycle 1

import { useEffect, useState, useCallback } from 'react';

export interface PerformanceMetrics {
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  fcp: number;
  tbt: number;
}

export interface OptimizationConfig {
  enableImageOptimization: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
  enableCodeSplitting: boolean;
  compressionLevel: 'low' | 'medium' | 'high';
}

// Next.js 15 performance monitoring and optimization
export const useNext15Performance = () => {
  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isOptimized, setIsOptimized] = useState(false);

  // Web Vitals monitoring optimized for Next.js 15
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observeWebVitals = () => {
      // LCP (Largest Contentful Paint) - optimized for Next.js 15
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const lcp = entries[entries.length - 1];
            setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
            
            // Track LCP in analytics
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'performance',
                event_label: 'lcp',
                value: Math.round(lcp.startTime)
              });
            }
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }

      // FCP (First Contentful Paint)
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          if (entries.length > 0) {
            const fcp = entries[0];
            setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP observer not supported:', error);
      }

      // CLS (Cumulative Layout Shift) - Next.js 15 optimized
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const layoutShiftEntry = entry as PerformanceEntry & {
              hadRecentInput: boolean;
              value: number;
            };
            
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          }
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }

      // TTFB (Time to First Byte) using Navigation Timing API
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const ttfb = navigation.responseStart - navigation.fetchStart;
          setMetrics(prev => ({ ...prev, ttfb }));
        }
      });
    };

    observeWebVitals();
  }, []);

  // Next.js 15 specific optimizations
  const optimizeForNext15 = useCallback(async () => {
    if (typeof window === 'undefined') return;

    try {
      // Enable Next.js 15 prefetching for critical routes
      const criticalRoutes = ['/', '/contacto', '/sobre-nosotros'];
      for (const route of criticalRoutes) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      }

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-variable.woff2',
        '/images/hero-bg.webp'
      ];
      
      for (const resource of criticalResources) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('font') ? 'font' : 'image';
        if (resource.includes('font')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      }

      // Next.js 15 client-side caching optimization
      if ('serviceWorker' in navigator) {
        await navigator.serviceWorker.register('/sw.js');
      }

      setIsOptimized(true);
    } catch (error) {
      console.error('Next.js 15 optimization failed:', error);
    }
  }, []);

  // Performance score calculation
  const calculatePerformanceScore = useCallback(() => {
    const { lcp = 0, fid = 0, cls = 0, fcp = 0, ttfb = 0 } = metrics;
    
    let score = 100;
    
    // LCP scoring (good: < 2.5s, poor: > 4s)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;
    
    // FID scoring (good: < 100ms, poor: > 300ms)
    if (fid > 300) score -= 25;
    else if (fid > 100) score -= 10;
    
    // CLS scoring (good: < 0.1, poor: > 0.25)
    if (cls > 0.25) score -= 25;
    else if (cls > 0.1) score -= 10;
    
    // FCP scoring (good: < 1.8s, poor: > 3s)
    if (fcp > 3000) score -= 15;
    else if (fcp > 1800) score -= 8;
    
    // TTFB scoring (good: < 200ms, poor: > 600ms)
    if (ttfb > 600) score -= 15;
    else if (ttfb > 200) score -= 8;
    
    return Math.max(score, 0);
  }, [metrics]);

  return {
    metrics,
    isOptimized,
    optimizeForNext15,
    performanceScore: calculatePerformanceScore()
  };
};

// Advanced image optimization for Next.js 15
export const useNext15ImageOptimization = () => {
  const [optimizedImages, setOptimizedImages] = useState<Map<string, string>>(new Map());

  const optimizeImage = useCallback(async (src: string, options?: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'auto';
  }) => {
    if (optimizedImages.has(src)) {
      return optimizedImages.get(src);
    }

    try {
      const { width, height, quality = 85, format = 'auto' } = options || {};
      
      // Next.js 15 Image optimization API
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('q', quality.toString());
      if (format !== 'auto') params.set('f', format);
      
      const optimizedSrc = `/_next/image?url=${encodeURIComponent(src)}&${params.toString()}`;
      
      setOptimizedImages(prev => new Map(prev).set(src, optimizedSrc));
      return optimizedSrc;
    } catch (error) {
      console.error('Image optimization failed:', error);
      return src;
    }
  }, [optimizedImages]);

  const preloadImages = useCallback((images: string[]) => {
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  return {
    optimizeImage,
    preloadImages,
    optimizedImages
  };
};

// Edge function utilities for Next.js 15
export const useEdgeFunctions = () => {
  const [edgeSupported, setEdgeSupported] = useState(false);

  useEffect(() => {
    // Check if edge functions are supported
    setEdgeSupported(
      typeof window !== 'undefined' && 
      'serviceWorker' in navigator &&
      'fetch' in window
    );
  }, []);

  const executeEdgeFunction = useCallback(async (
    functionName: string,
    data: Record<string, unknown>
  ) => {
    if (!edgeSupported) {
      throw new Error('Edge functions not supported');
    }

    try {
      const response = await fetch(`/api/edge/${functionName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error(`Edge function failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`Edge function ${functionName} failed:`, error);
      throw error;
    }
  }, [edgeSupported]);

  // Optimized for AQXION use cases
  const generatePersonalizedContent = useCallback(async (userProfile: Record<string, unknown>) => {
    return executeEdgeFunction('personalize-content', userProfile);
  }, [executeEdgeFunction]);

  const scoreLeadQuality = useCallback(async (leadData: Record<string, unknown>) => {
    return executeEdgeFunction('score-lead', leadData);
  }, [executeEdgeFunction]);

  const optimizeABTest = useCallback(async (testData: Record<string, unknown>) => {
    return executeEdgeFunction('ab-test-optimizer', testData);
  }, [executeEdgeFunction]);

  return {
    edgeSupported,
    generatePersonalizedContent,
    scoreLeadQuality,
    optimizeABTest
  };
};

// Critical rendering path optimization
export const useCriticalRenderingPath = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);

  const optimizeCriticalPath = useCallback(async () => {
    if (typeof window === 'undefined') return;
    
    setIsOptimizing(true);

    try {
      // Remove render-blocking resources
      const nonCriticalCSS = document.querySelectorAll('link[rel="stylesheet"]:not([data-critical])');
      nonCriticalCSS.forEach(link => {
        const linkEl = link as HTMLLinkElement;
        linkEl.media = 'print';
        linkEl.onload = () => {
          linkEl.media = 'all';
        };
      });

      // Inline critical CSS for above-the-fold content
      const criticalCSS = `
        .hero-section { display: flex; align-items: center; min-height: 80vh; }
        .hero-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; }
        .hero-subtitle { font-size: clamp(1.1rem, 2.5vw, 1.5rem); opacity: 0.9; }
        .cta-button { padding: 1rem 2rem; border-radius: 0.5rem; background: #0066cc; color: white; }
      `;

      const style = document.createElement('style');
      style.textContent = criticalCSS;
      document.head.insertBefore(style, document.head.firstChild);

      // Lazy load non-critical JavaScript
      const nonCriticalScripts = document.querySelectorAll('script[data-lazy]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const script = entry.target as HTMLScriptElement;
            const newScript = document.createElement('script');
            newScript.src = script.dataset.src || '';
            newScript.async = true;
            document.head.appendChild(newScript);
            observer.unobserve(script);
          }
        });
      });

      nonCriticalScripts.forEach(script => observer.observe(script));

      setIsOptimizing(false);
    } catch (error) {
      console.error('Critical path optimization failed:', error);
      setIsOptimizing(false);
    }
  }, []);

  return {
    optimizeCriticalPath,
    isOptimizing
  };
};

// Next.js 15 bundle optimization
export const useBundleOptimization = () => {
  const [bundleSize, setBundleSize] = useState<number>(0);
  const [loadTime, setLoadTime] = useState<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Measure bundle size using Resource Timing API
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      const jsResources = resources.filter(resource => 
        resource.name.includes('.js') && resource.name.includes('_next')
      );

      const totalSize = jsResources.reduce((total, resource) => {
        return total + (resource.transferSize || 0);
      }, 0);

      setBundleSize(totalSize);

      // Measure total load time
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        setLoadTime(navigation.loadEventEnd - navigation.fetchStart);
      }
    });
  }, []);

  const analyzeBundleComposition = useCallback(() => {
    if (typeof window === 'undefined') return {};

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const analysis = {
      totalResources: resources.length,
      jsFiles: resources.filter(r => r.name.includes('.js')).length,
      cssFiles: resources.filter(r => r.name.includes('.css')).length,
      images: resources.filter(r => r.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)).length,
      fonts: resources.filter(r => r.name.match(/\.(woff|woff2|ttf|otf)$/)).length,
      largestResource: resources.reduce((largest, current) => 
        (current.transferSize || 0) > (largest.transferSize || 0) ? current : largest, resources[0]
      )
    };

    return analysis;
  }, []);

  return {
    bundleSize,
    loadTime,
    analyzeBundleComposition
  };
};
