// LLM-OPTIMIZED: Web Vitals Reporter component for performance monitoring
'use client';

import { useEffect } from 'react';
import { initWebVitals } from '@/lib/webVitals';

export function WebVitalsReporter() {
  useEffect(() => {
    // Initialize Web Vitals monitoring on mount
    initWebVitals();
  }, []);

  // This component doesn't render anything - it just initializes monitoring
  return null;
}
