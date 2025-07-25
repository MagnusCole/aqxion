'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PortalLoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirigir a la página principal de login
    router.replace('/login')
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirigiendo...</p>
      </div>
    </div>
  )
}