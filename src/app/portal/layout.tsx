import React from 'react'
import Providers from '@/components/providers'
import { OnboardingFlow } from '@/components/portal/onboarding/OnboardingFlow'
import MobileNavigation from '@/components/portal/MobileNavigation'

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  // La autenticación se maneja en el middleware y el AuthContext
  // No necesitamos verificación del lado del servidor aquí
  
  return (
    <Providers>
      <MobileNavigation>
        {/* Portal Content */}
        <div className="pb-6 lg:pb-0">
          {children}
        </div>
        
        {/* Onboarding Flow */}
        <OnboardingFlow />
      </MobileNavigation>
    </Providers>
  )
}
