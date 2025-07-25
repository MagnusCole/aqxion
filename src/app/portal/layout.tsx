import React from 'react';
import Link from 'next/link';
import { Home, BarChart2, BookOpen, Award, LifeBuoy, UserPlus } from 'lucide-react';

const navItems = [
  { href: '/portal', label: 'Inicio', icon: Home },
  { href: '/portal/dashboard', label: 'Dashboard', icon: BarChart2 },
  { href: '/portal/recursos', label: 'Recursos', icon: BookOpen },
  { href: '/portal/resultados', label: 'Resultados', icon: Award },
  { href: '/portal/soporte', label: 'Soporte', icon: LifeBuoy },
  { href: '/portal/onboarding', label: 'Onboarding', icon: UserPlus },
];

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 bg-white border-r border-gray-100 py-8 px-4 min-h-screen shadow-sm">
        <div className="mb-10 text-2xl font-bold text-peru-red tracking-tight">MYPE Boost</div>
        <nav className="flex-1 space-y-2">
          {navItems.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-peru-red/10 hover:text-peru-red font-medium transition"
              prefetch={false}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-xs text-gray-400 pt-8">© {new Date().getFullYear()} AQXION</div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header fijo */}
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-gray-100 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="md:hidden font-bold text-peru-red">MYPE Boost</div>
          <nav className="flex gap-2 md:hidden">
            {navItems.slice(0, 4).map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="p-2 rounded-lg hover:bg-peru-red/10 text-gray-700 hover:text-peru-red"
                prefetch={false}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </nav>
        </header>
        <main className="flex-1 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
