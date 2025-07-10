'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageview } from '@/lib/analytics';

export function useAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when route changes
    if (pathname) {
      pageview(pathname);
    }
  }, [pathname]);
}
