'use client';

import { useEffect, useRef } from 'react';
import { trackScrollDepth, trackTimeOnPage } from '@/lib/analytics-config';

interface UseAdvancedAnalyticsOptions {
  enableScrollTracking?: boolean;
  enableTimeTracking?: boolean;
  scrollThresholds?: number[];
  timeInterval?: number;
}

export function useAdvancedAnalytics(options: UseAdvancedAnalyticsOptions = {}) {
  const {
    enableScrollTracking = true,
    enableTimeTracking = true,
    scrollThresholds = [25, 50, 75, 90, 100],
    timeInterval = 30 // seconds
  } = options;

  const timeStartRef = useRef<number>(Date.now());
  const scrollTrackedRef = useRef<Set<number>>(new Set());
  const timeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset tracking when component mounts (new page)
    timeStartRef.current = Date.now();
    scrollTrackedRef.current.clear();

    // Time tracking
    if (enableTimeTracking) {
      timeIntervalRef.current = setInterval(() => {
        const timeSpent = Math.floor((Date.now() - timeStartRef.current) / 1000);
        if (timeSpent > 0 && timeSpent % timeInterval === 0) {
          trackTimeOnPage(timeSpent);
        }
      }, 1000);
    }

    // Scroll tracking
    const handleScroll = () => {
      if (!enableScrollTracking) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollThresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollTrackedRef.current.has(threshold)) {
          scrollTrackedRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    if (enableScrollTracking) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Cleanup
    return () => {
      if (timeIntervalRef.current) {
        clearInterval(timeIntervalRef.current);
      }
      if (enableScrollTracking) {
        window.removeEventListener('scroll', handleScroll);
      }
      
      // Track final time on page when component unmounts
      if (enableTimeTracking) {
        const finalTime = Math.floor((Date.now() - timeStartRef.current) / 1000);
        if (finalTime > 0) {
          trackTimeOnPage(finalTime);
        }
      }
    };
  }, [enableScrollTracking, enableTimeTracking, scrollThresholds, timeInterval]);
}
