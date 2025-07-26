import React from 'react'
import Providers from '@/components/providers'
import MobileNavigation from '@/components/portal/MobileNavigation'

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <MobileNavigation>
        {/* Portal Content */}
        <div className="pb-6 lg:pb-0">
          {children}
        </div>
      </MobileNavigation>
    </Providers>
  )
}
