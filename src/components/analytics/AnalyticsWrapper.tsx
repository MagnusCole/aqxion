'use client';

import { useAnalytics } from '@/hooks/useAnalytics';
import { useAdvancedAnalytics } from '@/hooks/useAdvancedAnalytics';

interface AnalyticsWrapperProps {
  children: React.ReactNode;
}

export function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  useAnalytics();
  useAdvancedAnalytics({
    enableScrollTracking: true,
    enableTimeTracking: true,
    scrollThresholds: [25, 50, 75, 90, 100],
    timeInterval: 30
  });
  
  return <>{children}</>;
}
