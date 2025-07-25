'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import {
  Home,
  Calendar,
  Users,
  MessageCircle,
  TrendingUp,
  Folder,
  LifeBuoy,
  Settings,
  Menu,
  X,
  LogOut,
  Bell,
  User,
  ChevronRight,
  Bot,
  Target,
  BarChart3,
  Shield
} from 'lucide-react';const navigationItems = [
  {
    name: 'Dashboard',
    href: '/portal/dashboard',
    icon: Home,
    description: 'Panel principal',
    color: 'bg-blue-500'
  },
  {
    name: 'CRM',
    href: '/portal/crm',
    icon: Users,
    description: 'Gestión de clientes',
    color: 'bg-emerald-500'
  },
  {
    name: 'Calendario',
    href: '/portal/calendario',
    icon: Calendar,
    description: 'Contenido programado',
    color: 'bg-purple-500'
  },
  {
    name: 'WhatsApp',
    href: '/portal/whatsapp',
    icon: MessageCircle,
    description: 'Automatización',
    color: 'bg-green-500'
  },
  {
    name: 'Hermes IA',
    href: '/portal/hermes',
    icon: Bot,
    description: 'Asistente inteligente',
    color: 'bg-indigo-500'
  },
  {
    name: 'Finanzas',
    href: '/portal/finanzas',
    icon: TrendingUp,
    description: 'Métricas financieras',
    color: 'bg-emerald-600'
  },
  {
    name: 'Knowledge Base',
    href: '/portal/knowledge',
    icon: Folder,
    description: 'Base de conocimiento',
    color: 'bg-blue-600'
  },
  {
    name: 'Progreso 90D',
    href: '/portal/progreso',
    icon: Target,
    description: 'Plan de 90 días',
    color: 'bg-purple-600'
  },
  {
    name: 'Integraciones',
    href: '/portal/integraciones',
    icon: Settings,
    description: 'Apps conectadas',
    color: 'bg-gray-600'
  },
  {
    name: 'Resultados',
    href: '/portal/resultados',
    icon: BarChart3,
    description: 'Métricas y analytics',
    color: 'bg-orange-500'
  },
  {
    name: 'Recursos',
    href: '/portal/recursos',
    icon: Folder,
    description: 'Herramientas y bonos',
    color: 'bg-indigo-500'
  },
  {
    name: 'Soporte',
    href: '/portal/soporte',
    icon: LifeBuoy,
    description: 'Ayuda personalizada',
    color: 'bg-red-500'
  },
  {
    name: 'Perfil',
    href: '/portal/perfil',
    icon: User,
    description: 'Mi información personal',
    color: 'bg-blue-500'
  },
  {
    name: 'Onboarding',
    href: '/portal/onboarding',
    icon: Settings,
    description: 'Configuración inicial',
    color: 'bg-gray-500'
  }
];

// Super Admin Navigation Items
const superAdminItems = [
  {
    name: 'Gestión de Usuarios',
    href: '/portal/admin/users',
    icon: Shield,
    description: 'Administrar usuarios',
    color: 'bg-red-600'
  }
];

interface MobileNavigationProps {
  children: React.ReactNode;
}

export default function MobileNavigation({ children }: MobileNavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const pathname = usePathname();
  const { user, signOut, isSuperAdmin } = useAuth();

  // Combinar items de navegación regulares con super admin si corresponde
  const allNavigationItems = isSuperAdmin 
    ? [...navigationItems, ...superAdminItems]
    : navigationItems;

  const currentPage = allNavigationItems.find(item => item.href === pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 📱 MOBILE-FIRST: Top Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Menu Button & Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl hover:bg-gray-50 transition-colors lg:hidden"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold text-sm">A</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-medium text-gray-900">AQXION</h1>
              </div>
            </div>
          </div>

          {/* Page Title (Mobile) */}
          <div className="flex-1 text-center lg:hidden">
            <h2 className="font-medium text-gray-900">{currentPage?.name || 'Portal'}</h2>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center gap-2 pl-2 border-l border-gray-100">
              <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gray-500" />
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.email?.split('@')[0] || 'Usuario'}
                </p>
                <p className="text-xs text-gray-500">Cliente AQXION</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 🖥️ DESKTOP: Sidebar Navigation */}
      <div className="flex">
        <nav className="hidden lg:flex lg:flex-col lg:w-64 lg:bg-white lg:border-r lg:border-gray-100">
          <div className="flex-1 p-4 space-y-1">
            {allNavigationItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`
                      flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-red-50 text-red-700' 
                        : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                      }
                    `}
                  >
                    <div className={`
                      w-7 h-7 rounded-lg flex items-center justify-center
                      ${isActive ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'}
                      transition-colors duration-200
                    `}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isActive ? 'text-red-700' : 'text-gray-900'}`}>
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
          
          {/* Logout Button */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={signOut}
              className="flex items-center gap-3 w-full px-3 py-2.5 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Cerrar Sesión</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 lg:p-6">
          <div className="lg:hidden">
            {/* Page Title (Desktop) */}
            <div className="hidden lg:block mb-6">
              <h1 className="text-2xl font-bold text-gray-900">{currentPage?.name || 'Portal'}</h1>
              <p className="text-gray-600">{currentPage?.description}</p>
            </div>
          </div>
          
          {children}
        </main>
      </div>

      {/* 📱 MOBILE: Overlay Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white z-50 lg:hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold">A</span>
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">AQXION</h2>
                    <p className="text-sm text-gray-500">Portal Cliente</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 p-4 space-y-2">
                {allNavigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        className={`
                          flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200
                          ${isActive 
                            ? 'bg-red-50 border border-red-200' 
                            : 'hover:bg-gray-50'
                          }
                        `}
                      >
                        <div className={`
                          w-10 h-10 rounded-xl flex items-center justify-center text-white
                          ${isActive ? item.color : 'bg-gray-400'}
                        `}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className={`font-semibold ${isActive ? 'text-red-700' : 'text-gray-900'}`}>
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${isActive ? 'text-red-500' : 'text-gray-400'}`} />
                      </motion.div>
                    </Link>
                  );
                })}
              </div>

              {/* User & Logout */}
              <div className="p-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">
                      {user?.email?.split('@')[0] || 'Usuario'}
                    </p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                
                <button
                  onClick={signOut}
                  className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-200"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="font-semibold">Cerrar Sesión</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 📱 MOBILE: Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 lg:hidden z-30 pb-safe">
        <div className="flex">
          {navigationItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link key={item.href} href={item.href} className="flex-1">
                <motion.div
                  whileTap={{ scale: 0.96 }}
                  className={`
                    flex flex-col items-center justify-center py-3 px-2
                    ${isActive ? 'text-red-600' : 'text-gray-400'}
                    transition-colors duration-200
                  `}
                >
                  <div className={`
                    w-7 h-7 rounded-xl flex items-center justify-center mb-1
                    ${isActive ? 'bg-red-50' : 'bg-transparent'}
                    transition-colors duration-200
                  `}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium leading-none">{item.name}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Bottom spacing for mobile navigation */}
      <div className="h-20 lg:hidden"></div>
    </div>
  );
}
