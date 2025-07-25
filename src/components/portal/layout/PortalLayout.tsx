'use client';

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard,
  Users,
  Settings,
  Globe,
  MessageCircle,
  BarChart3,
  FileText,
  HelpCircle,
  LogOut,
  Menu,
  X,
  Bell,
  Search,
  User,
  ChevronDown
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useMYPEUserData } from '@/hooks/useMYPEUserData';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<any>;
  badge?: number;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/portal/dashboard',
    icon: LayoutDashboard,
    description: 'Vista general de tu negocio'
  },
  {
    id: 'contacts',
    label: 'Contactos',
    href: '/portal/contacts',
    icon: Users,
    description: 'Gestiona tus clientes y leads'
  },
  {
    id: 'website',
    label: 'Mi Sitio Web',
    href: '/portal/website',
    icon: Globe,
    description: 'Administra tu presencia online'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp Business',
    href: '/portal/whatsapp',
    icon: MessageCircle,
    description: 'Gestiona conversaciones'
  },
  {
    id: 'analytics',
    label: 'Métricas',
    href: '/portal/analytics',
    icon: BarChart3,
    description: 'Analiza el rendimiento'
  },
  {
    id: 'content',
    label: 'Contenido',
    href: '/portal/content',
    icon: FileText,
    description: 'Crea y gestiona contenido'
  },
  {
    id: 'settings',
    label: 'Configuración',
    href: '/portal/settings',
    icon: Settings,
    description: 'Ajustes de tu cuenta'
  },
  {
    id: 'support',
    label: 'Soporte',
    href: '/portal/support',
    icon: HelpCircle,
    description: 'Ayuda y asistencia'
  }
];

interface PortalLayoutProps {
  children: React.ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const { userData, getStats } = useMYPEUserData();

  const stats = getStats();
  const pendingTasks = userData?.pendingTasks.filter(t => !t.completed).length || 0;

  const handleLogout = async () => {
    await signOut();
    router.push('/');
  };

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/');
  };

  const getNavigationWithBadges = () => {
    return navigationItems.map(item => {
      let badge = undefined;
      
      // Agregar badges dinámicos basados en datos reales
      if (item.id === 'contacts' && userData?.metrics.newContactsThisWeek) {
        badge = userData.metrics.newContactsThisWeek;
      }
      
      return { ...item, badge };
    });
  };

  const navigationWithBadges = getNavigationWithBadges();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar para mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 lg:hidden"
            >
              <MobileSidebar 
                navigationItems={navigationWithBadges}
                currentPath={pathname}
                onClose={() => setSidebarOpen(false)}
                userData={userData}
                pendingTasks={pendingTasks}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sidebar para desktop */}
      <div className="hidden lg:flex lg:w-80 lg:flex-col lg:fixed lg:inset-y-0">
        <DesktopSidebar 
          navigationItems={navigationWithBadges}
          currentPath={pathname}
          userData={userData}
          pendingTasks={pendingTasks}
        />
      </div>

      {/* Contenido principal */}
      <div className="lg:pl-80">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            {/* Botón menu mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            {/* Título de página */}
            <div className="flex-1 lg:flex-none">
              <h1 className="text-lg font-semibold text-gray-900 lg:hidden">
                {navigationWithBadges.find(item => isActive(item.href))?.label || 'Portal'}
              </h1>
            </div>

            {/* Acciones header */}
            <div className="flex items-center gap-3">
              {/* Buscador */}
              <div className="hidden sm:block relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notificaciones */}
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
                {pendingTasks > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {pendingTasks}
                  </span>
                )}
              </button>

              {/* Usuario menu */}
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {userData?.businessInfo.name ? 
                        userData.businessInfo.name.charAt(0).toUpperCase() : 
                        user?.email?.charAt(0).toUpperCase() || 'U'
                      }
                    </span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>

                {/* Dropdown del usuario */}
                <AnimatePresence>
                  {userMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1"
                    >
                      <div className="px-4 py-3 border-b border-gray-100">
                        <div className="text-sm font-medium text-gray-900">
                          {userData?.businessInfo.name || 'Usuario MYPE'}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user?.email}
                        </div>
                      </div>
                      
                      <button
                        onClick={() => router.push('/portal/settings')}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                      >
                        <User className="h-4 w-4" />
                        Mi Perfil
                      </button>
                      
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                      >
                        <LogOut className="h-4 w-4" />
                        Cerrar Sesión
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </header>

        {/* Contenido */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}

// Componente Sidebar para Desktop
function DesktopSidebar({ 
  navigationItems, 
  currentPath, 
  userData, 
  pendingTasks 
}: {
  navigationItems: NavigationItem[];
  currentPath: string;
  userData: any;
  pendingTasks: number;
}) {
  const router = useRouter();

  return (
    <div className="flex flex-col bg-white border-r border-gray-200 h-full">
      {/* Logo y header */}
      <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <div>
          <div className="font-bold text-gray-900">AQXION</div>
          <div className="text-xs text-gray-500">Portal MYPE</div>
        </div>
      </div>

      {/* Info del plan */}
      {userData && (
        <div className="px-6 py-4 bg-blue-50 border-b border-gray-200">
          <div className="text-sm font-medium text-blue-900">Plan MYPE</div>
          <div className="text-xs text-blue-700">
            S/{userData.planInfo.investment.toLocaleString()} - {userData.planInfo.setupProgress}% configurado
          </div>
          <div className="w-full bg-blue-200 rounded-full h-1.5 mt-2">
            <div 
              className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" 
              style={{ width: `${userData.planInfo.setupProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Navegación */}
      <nav className="flex-1 px-4 py-4 space-y-1">
        {navigationItems.map((item) => {
          const isActive = currentPath === item.href || currentPath.startsWith(item.href + '/');
          
          return (
            <button
              key={item.id}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors group ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
              <div className="flex-1">
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className={`text-xs ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                    {item.description}
                  </div>
                )}
              </div>
              {item.badge && (
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  isActive 
                    ? 'bg-white text-blue-500' 
                    : 'bg-red-500 text-white'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer del sidebar */}
      <div className="px-6 py-4 border-t border-gray-200">
        <div className="text-xs text-gray-500">
          Soporte: 90 días incluidos
        </div>
        {pendingTasks > 0 && (
          <div className="text-xs text-orange-600 mt-1">
            {pendingTasks} tareas pendientes
          </div>
        )}
      </div>
    </div>
  );
}

// Componente Sidebar para Mobile
function MobileSidebar({ 
  navigationItems, 
  currentPath, 
  onClose, 
  userData, 
  pendingTasks 
}: {
  navigationItems: NavigationItem[];
  currentPath: string;
  onClose: () => void;
  userData: any;
  pendingTasks: number;
}) {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header mobile */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <div>
            <div className="font-bold text-gray-900">AQXION</div>
            <div className="text-xs text-gray-500">Portal MYPE</div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
          <X className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      {/* Contenido igual que desktop */}
      <DesktopSidebar 
        navigationItems={navigationItems}
        currentPath={currentPath}
        userData={userData}
        pendingTasks={pendingTasks}
      />
    </div>
  );
}
