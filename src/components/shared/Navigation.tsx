'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home, 
  Folder, 
  MessageSquare, 
  User,
  Menu,
  X,
  LogOut,
  Settings,
  Bell,
  Calendar,
  Users,
  Bot
} from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Don't show navigation on landing page or onboarding
  if (pathname === '/' || pathname === '/onboarding') {
    return null;
  }

  const navigationItems = [
    {
      name: 'Dashboard',
      href: '/portal/dashboard',
      icon: Home,
      description: 'Panel principal'
    },
    {
      name: 'Setup',
      href: '/portal/setup',
      icon: Settings,
      description: 'Configuración inicial'
    },
    {
      name: 'Calendario',
      href: '/portal/calendario',
      icon: Calendar,
      description: 'Contenido programado'
    },
    {
      name: 'CRM',
      href: '/portal/crm',
      icon: Users,
      description: 'Gestión de leads'
    },
    {
      name: 'WhatsApp',
      href: '/portal/whatsapp',
      icon: Bot,
      description: 'Automatización'
    },
    {
      name: 'Recursos',
      href: '/portal/recursos', 
      icon: Folder,
      description: 'Herramientas y bonos'
    },
    {
      name: 'Soporte',
      href: '/portal/soporte',
      icon: MessageSquare,
      description: 'Ayuda y comunidad'
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:bg-white lg:border-r lg:border-gray-200">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6">
            <Link href="/portal/dashboard" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AQXION</span>
            </Link>
          </div>

          {/* User Profile */}
          <div className="mt-8 px-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JM</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Juan Mendoza</p>
                  <p className="text-xs text-gray-600">Restaurante Sabor Limeño</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="bg-white rounded-lg p-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600">Progreso del programa</span>
                    <span className="font-medium text-blue-600">45%</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-blue-600 h-1.5 rounded-full w-[45%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 flex-1 px-6 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon 
                    className={`mr-3 h-5 w-5 ${
                      isActive(item.href) ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                    }`} 
                  />
                  <div>
                    <div>{item.name}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions */}
          <div className="flex-shrink-0 px-6 space-y-2">
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Settings className="mr-3 h-5 w-5 text-gray-400" />
              Configuración
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <header className="bg-white border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AQXION</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell size={20} />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-gray-400 hover:text-gray-600"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-gray-600"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* User Profile Mobile */}
                <div className="p-4 bg-blue-50 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">JM</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Juan Mendoza</p>
                      <p className="text-sm text-gray-600">Restaurante Sabor Limeño</p>
                      <div className="mt-2 flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full w-[45%]"></div>
                        </div>
                        <span className="text-xs font-medium text-blue-600">45%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex-1 p-4 space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center px-3 py-4 rounded-lg transition-colors ${
                          isActive(item.href)
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon 
                          className={`mr-3 h-6 w-6 ${
                            isActive(item.href) ? 'text-blue-600' : 'text-gray-400'
                          }`} 
                        />
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </nav>

                {/* Mobile Bottom Actions */}
                <div className="p-4 border-t border-gray-200 space-y-2">
                  <button className="w-full flex items-center px-3 py-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                    <Settings className="mr-3 h-5 w-5 text-gray-400" />
                    Configuración
                  </button>
                  <button className="w-full flex items-center px-3 py-3 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">
                    <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                    Cerrar sesión
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs mt-1">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
