'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  BarChart3,
  Lightbulb,
  Package,
  Megaphone,
  CheckSquare,
  Menu,
  X,
  LogOut,
  Bell,
  User,
  ChevronRight,
  MessageSquare
} from 'lucide-react';

// 🇵🇪 MYPERU - Navegación del sistema DFY→DWY→DIY
const navigationItems = [
  {
    name: 'Mi Dashboard',
    href: '/portal/dashboard',
    icon: BarChart3,
    description: 'Tu panel de control empresarial',
    color: 'bg-red-500'
  },
  {
    name: 'Mi Nicho',
    href: '/portal/dashboard?tab=nicho',
    icon: Lightbulb,
    description: 'Descubre tu nicho ganador',
    color: 'bg-yellow-500'
  },
  {
    name: 'Mi Oferta',
    href: '/portal/dashboard?tab=oferta',
    icon: Package,
    description: 'Crea oferta irresistible',
    color: 'bg-emerald-500'
  },
  {
    name: 'Mi Campaña',
    href: '/portal/dashboard?tab=campana',
    icon: Megaphone,
    description: 'Genera leads automáticamente',
    color: 'bg-blue-500'
  },
  {
    name: 'Mi Progreso',
    href: '/portal/dashboard?tab=progreso',
    icon: CheckSquare,
    description: 'Trackea tu evolución',
    color: 'bg-purple-500'
  }
];

export default function MobileNavigation({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleLogout = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 📱 MOBILE HEADER - Always visible on mobile */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-900">MyPerú</span>
          </div>

          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* 💻 DESKTOP SIDEBAR - Always visible on desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:block">
        <div className="bg-white h-full border-r border-gray-200 flex flex-col">
          {/* Desktop Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">MyPerú</h2>
                <p className="text-sm text-gray-600">Portal Empresarial</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href.includes('?tab=') && pathname === '/portal/dashboard');
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive 
                      ? 'bg-red-50 text-red-700 shadow-sm border border-red-100' 
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <div className={`
                    w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                    ${isActive ? item.color + ' text-white' : 'bg-gray-100 text-gray-600 group-hover:text-gray-700'}
                  `}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{item.name}</p>
                    <p className="text-xs opacity-70 truncate">{item.description}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-red-500' : 'text-gray-400'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Desktop Footer */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Link
              href="/portal/soporte"
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-colors
                ${pathname === '/portal/soporte' 
                  ? 'bg-blue-50 text-blue-700 border border-blue-100'
                  : 'text-gray-700 hover:bg-gray-50'
                }
              `}
            >
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                ${pathname === '/portal/soporte' ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-600'}
              `}>
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold truncate">Comunidad</p>
                <p className="text-xs opacity-70 truncate">Soporte y networking</p>
              </div>
            </Link>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-semibold">Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </div>

      {/* 📱 MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={toggleSidebar}
            />
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-80 bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Mobile Sidebar Header */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">MyPerú</h2>
                      <p className="text-xs text-gray-600">Portal Empresarial</p>
                    </div>
                  </div>
                  <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href.includes('?tab=') && pathname === '/portal/dashboard');
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={toggleSidebar}
                      className={`
                        flex items-center gap-3 p-3 rounded-xl transition-all
                        ${isActive
                          ? 'bg-red-50 text-red-700 border border-red-100'
                          : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                        }
                      `}
                    >
                      <div className={`
                        w-11 h-11 rounded-lg flex items-center justify-center
                        ${isActive ? item.color + ' text-white' : item.color + ' text-white'}
                      `}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm opacity-70">{item.description}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile Sidebar Footer */}
              <div className="p-4 border-t border-gray-200 space-y-2">
                <Link
                  href="/portal/soporte"
                  onClick={toggleSidebar}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl transition-colors
                    ${pathname === '/portal/soporte' 
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                    }
                  `}
                >
                  <div className="w-11 h-11 bg-blue-500 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Comunidad</div>
                    <div className="text-sm opacity-70">Soporte y networking</div>
                  </div>
                </Link>
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 active:bg-red-100 rounded-xl transition-colors"
                >
                  <div className="w-11 h-11 bg-red-100 rounded-lg flex items-center justify-center">
                    <LogOut className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="font-semibold">Cerrar Sesión</span>
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 📄 MAIN CONTENT AREA */}
      <main className="lg:ml-72">
        <div className="lg:p-0">
          {children}
        </div>
      </main>
    </div>
  );
}
