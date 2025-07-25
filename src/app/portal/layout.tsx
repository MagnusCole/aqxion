import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import Providers from '@/components/providers'
import { OnboardingFlow } from '@/components/portal/onboarding/OnboardingFlow'
import { Home, BarChart2, BookOpen, Award, LifeBuoy, UserPlus, LogOut } from 'lucide-react'

const navItems = [
  { href: '/portal', label: 'Inicio', icon: Home },
  { href: '/portal/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/portal/recursos', label: 'Recursos', icon: BookOpen },
  { href: '/portal/resultados', label: 'Resultados', icon: Award },
  { href: '/portal/soporte', label: 'Soporte', icon: LifeBuoy },
  { href: '/portal/onboarding', label: 'Onboarding', icon: UserPlus },
]

export default async function PortalLayout({ children }: { children: React.ReactNode }) {
  // ✅ AUTENTICACIÓN REAL - Verificar sesión en el servidor
  const session = await getServerSession(authOptions)
  
  if (!session) {
    // Redirigir a login con callback URL
    redirect('/auth/signin?callbackUrl=/portal')
  }

  return (
    <Providers session={session}>
      <div className="min-h-screen flex bg-gray-50">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-56 bg-white border-r border-gray-100 py-8 px-4 min-h-screen shadow-sm">
          <div className="mb-10">
            <div className="text-2xl font-bold text-red-600 tracking-tight">AQXION</div>
            <div className="text-sm text-gray-500 mt-1">Portal Cliente</div>
          </div>
          <nav className="flex-1 space-y-2">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium transition-all duration-200 group"
                prefetch={false}
              >
                <Icon className="w-5 h-5 group-hover:scale-105 transition-transform" />
                {label}
              </Link>
            ))}
          </nav>
          
          {/* ✅ USER INFO + LOGOUT */}
          <div className="mt-auto pt-8 space-y-4">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-900 truncate">
                {session.user?.name || 'Usuario'}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {session.user?.email}
              </div>
            </div>
            <a
              href="/api/auth/signout"
              className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar Sesión
            </a>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Header fijo */}
          <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
            <div className="md:hidden">
              <div className="font-bold text-red-600">AQXION</div>
              <div className="text-xs text-gray-500">Portal Cliente</div>
            </div>
            
            {/* Mobile user info */}
            <div className="md:hidden flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">
                  {session.user?.name || 'Usuario'}
                </div>
              </div>
              <a
                href="/api/auth/signout"
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </a>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-4 md:p-6">
            {children}
          </main>
          
          {/* ✅ ONBOARDING FLOW MÁGICO */}
          <OnboardingFlow userName={session.user?.name || undefined} />
        </div>
      </div>
    </Providers>
  )
}
