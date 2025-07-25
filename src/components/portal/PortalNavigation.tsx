'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  CheckSquare, 
  BarChart3, 
  Settings,
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

const navItems = [
  { 
    id: 'dashboard', 
    label: 'Inicio', 
    icon: Home, 
    path: '/portal/dashboard' 
  },
  { 
    id: 'contacts', 
    label: 'Contactos', 
    icon: Users, 
    path: '/portal/contacts',
    badge: 'totalContacts'
  },
  { 
    id: 'tasks', 
    label: 'Tareas', 
    icon: CheckSquare, 
    path: '/portal/tasks',
    badge: 'pendingTasks'
  },
  { 
    id: 'analytics', 
    label: 'Reportes', 
    icon: BarChart3, 
    path: '/portal/analytics' 
  },
  { 
    id: 'settings', 
    label: 'Ajustes', 
    icon: Settings, 
    path: '/portal/settings' 
  }
];

export default function PortalNavigation() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { userData } = useMYPEUserData();
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const getBadgeCount = (badgeType: string) => {
    if (!userData) return 0;
    
    switch(badgeType) {
      case 'totalContacts':
        return userData.metrics?.totalContacts || 0;
      case 'pendingTasks':
        return userData.pendingTasks?.filter(t => !t.completed).length || 0;
      default:
        return 0;
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/auth/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const businessName = userData?.businessInfo?.name || user?.email || 'Usuario';
  const initials = businessName
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

  return (
    <>
      {/* Bottom Navigation - Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-200 md:hidden z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            const badgeCount = item.badge ? getBadgeCount(item.badge) : 0;
            
            return (
              <button
                key={item.id}
                onClick={() => router.push(item.path)}
                className="flex flex-col items-center gap-1 p-2 relative"
              >
                <div className="relative">
                  <Icon 
                    className={`h-6 w-6 ${
                      isActive ? 'text-blue-500' : 'text-gray-400'
                    }`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  {badgeCount > 0 && (
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">
                        {badgeCount > 99 ? '99+' : badgeCount}
                      </span>
                    </div>
                  )}
                </div>
                <span className={`text-[10px] font-medium ${
                  isActive ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Navigation Bar - Mobile */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200 md:hidden z-40">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-[13px] font-bold">{initials}</span>
            </div>
            <div>
              <h1 className="text-[15px] font-semibold text-gray-900 leading-tight">
                {businessName.length > 20 ? businessName.substring(0, 20) + '...' : businessName}
              </h1>
            </div>
          </div>
          
          <div className="relative">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center active:scale-95 transition-transform"
            >
              <User className="h-4 w-4 text-gray-600" strokeWidth={2.5} />
            </button>

            {userMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute right-0 top-10 bg-white rounded-xl shadow-lg border border-gray-200 min-w-[200px] overflow-hidden"
              >
                <div className="p-4 border-b border-gray-100">
                  <p className="text-[15px] font-semibold text-gray-900">Mi Cuenta</p>
                  <p className="text-[13px] text-gray-500 mt-1">{user?.email}</p>
                </div>
                
                <div className="p-2">
                  <button
                    onClick={() => {
                      router.push('/portal/settings');
                      setUserMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-3 py-2 text-[15px] text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Settings className="h-4 w-4" strokeWidth={2} />
                    Configuración
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 text-[15px] text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <LogOut className="h-4 w-4" strokeWidth={2} />
                    Cerrar Sesión
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {userMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/10 md:hidden z-30"
          onClick={() => setUserMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          {/* Header */}
          <div className="flex items-center flex-shrink-0 px-4 pb-5">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-white text-[16px] font-bold">{initials}</span>
            </div>
            <div className="ml-3">
              <h2 className="text-[17px] font-semibold text-gray-900">
                {businessName.length > 15 ? businessName.substring(0, 15) + '...' : businessName}
              </h2>
              <p className="text-[13px] text-gray-500">Plan MYPE</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              const badgeCount = item.badge ? getBadgeCount(item.badge) : 0;
              
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.path)}
                  className={`w-full group flex items-center px-3 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Icon 
                    className={`mr-3 h-5 w-5 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`}
                    strokeWidth={2}
                  />
                  {item.label}
                  {badgeCount > 0 && (
                    <span className={`ml-auto inline-flex items-center justify-center px-2 py-1 text-[11px] font-bold rounded-full ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {badgeCount > 99 ? '99+' : badgeCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* User Menu - Desktop */}
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center w-full">
              <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                <User className="h-5 w-5 text-gray-600" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-[14px] font-medium text-gray-700">{user?.email}</p>
                <button
                  onClick={handleLogout}
                  className="text-[12px] text-gray-500 hover:text-red-600 transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
