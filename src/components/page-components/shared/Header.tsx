'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, X, User } from 'lucide-react';

interface HeaderProps {
  onModalOpen: () => void;
}

export function Header({ onModalOpen }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              AQXION
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#problema" className="text-gray-700 hover:text-blue-600 transition-colors">
              Problema
            </Link>
            <Link href="/#solucion" className="text-gray-700 hover:text-blue-600 transition-colors">
              Solución
            </Link>
            <Link href="/#oferta" className="text-gray-700 hover:text-blue-600 transition-colors">
              Oferta
            </Link>
            <button
              onClick={onModalOpen}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/portal/dashboard"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Portal
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Salir
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Iniciar Sesión
                </Link>
                <Link
                  href="/auth/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="py-4 space-y-2">
              <Link
                href="/#problema"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Problema
              </Link>
              <Link
                href="/#solucion"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solución
              </Link>
              <Link
                href="/#oferta"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Oferta
              </Link>
              <button
                onClick={() => {
                  onModalOpen();
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Contacto
              </button>
              
              {user ? (
                <>
                  <Link
                    href="/portal/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portal
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Salir
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="block px-4 py-2 text-gray-700 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block mx-4 my-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-center hover:bg-blue-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}