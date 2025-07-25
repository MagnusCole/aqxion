import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Providers from '@/components/providers'
import { OnboardingFlow } from '@/components/portal/onboarding/OnboardingFlow'
import MobileNavigation from '@/components/portal/MobileNavigation'

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  // ✅ AUTENTICACIÓN REAL - Verificar sesión en el servidor
  const session = await getServerSession(authOptions)
  
  if (!session) {
    // Redirigir a login con callback URL
    redirect('/auth/signin?callbackUrl=/portal')
  }

  return (
    <Providers session={session}>
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
