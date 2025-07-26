'use client';

import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  // Since we removed the portal, this navigation component is not needed
  // We only show the landing page, so no navigation is required
  return null;
}
