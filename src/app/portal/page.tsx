'use client'

import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Loader2 } from 'lucide-react'

export default function PortalPage() {
  const { data: session, status } = useSession()

  // ✅ REDIRIGIR AL DASHBOARD DIRECTAMENTE
  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-red-600" />
          <p className="text-gray-600 mt-2">Cargando portal...</p>
        </div>
      </div>
    )
  }

  if (session) {
    redirect('/portal/dashboard')
  }

  return null
}
