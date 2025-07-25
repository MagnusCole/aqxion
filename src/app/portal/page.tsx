'use client'

import { redirect } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import { Loader2 } from 'lucide-react'

export default function PortalPage() {
  const { user, loading } = useAuth()

  // ✅ REDIRIGIR AL DASHBOARD DIRECTAMENTE
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-red-600" />
          <p className="text-gray-600 mt-2">Cargando portal...</p>
        </div>
      </div>
    )
  }

  if (user) {
    redirect('/portal/dashboard')
  }

  return null
}
