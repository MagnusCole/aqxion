'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Badge } from '@/components/ui';
import { 
  Home, 
  BookOpen, 
  MessageCircle, 
  User, 
  Menu, 
  X,
  Bell,
  Zap,
  LogOut,
  BarChart3
} from 'lucide-react';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export default function PortalLayout({ children }: PortalLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/portal", icon: Home },
    { name: "Onboarding", href: "/portal/onboarding", icon: BarChart3 },
    { name: "Recursos", href: "/portal/recursos", icon: BookOpen },
    { name: "Soporte", href: "/portal/soporte", icon: MessageCircle },
    { name: "Resultados", href: "/portal/resultados", icon: BarChart3 },
    { name: "Perfil", href: "/portal/perfil", icon: User },
  ];

  const isActive = (href: string) => {
    if (href === '/portal') {
      return pathname === '/portal';
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fijo - estilo mipe-boost-magia */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">Portal AQXION</h1>
                <p className="text-xs text-gray-500">Impulsa Tu MYPE</p>
              </div>
            </div>

            {/* Navegación Desktop */}
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Notificaciones y Usuario */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 w-2 h-2 p-0 bg-red-500 border-0">
                  <span className="sr-only">2 notificaciones</span>
                </Badge>
              </Button>
              <Button variant="secondary" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </div>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menú móvil */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-600 text-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Bell className="w-4 h-4 mr-3" />
                    Notificaciones (2)
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full justify-start">
                    <LogOut className="w-4 h-4 mr-3" />
                    Cerrar Sesión
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contenido principal */}
      <main className="pt-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-500">
              © 2025 AQXION. Transformando MYPEs en Perú.
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <Link href="/legal/terminos" className="text-gray-500 hover:text-blue-600">Términos</Link>
              <Link href="/legal/privacidad" className="text-gray-500 hover:text-blue-600">Privacidad</Link>
              <Link href="/portal/soporte" className="text-gray-500 hover:text-blue-600">Soporte</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
