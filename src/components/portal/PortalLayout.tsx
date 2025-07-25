'use client';

import React from 'react';
import PortalNavigation from '@/components/portal/PortalNavigation';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Navigation Sidebar */}
      <PortalNavigation />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-70">
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
