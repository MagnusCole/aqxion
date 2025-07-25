'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HeroSection, ProblemSection, SolutionSection, CTASection, OfferSection } from '@/components/page-components/home';
import { ContactModal, Header, Footer, FloatingLiveChat, CookieBanner } from '@/components/page-components/shared';
import { DashboardDemo } from '@/components/page-components/portal/DashboardDemo';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Si estamos en app.aqxion.com, redirigir al login
    if (typeof window !== 'undefined' && window.location.hostname.includes('app.aqxion.com')) {
      router.push('/auth/signin');
      return;
    }
  }, [router]);

  // Si es app.aqxion.com, mostrar loading mientras redirige
  if (typeof window !== 'undefined' && window.location.hostname.includes('app.aqxion.com')) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Redirigiendo al portal...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header moderno con autenticación */}
      <Header onModalOpen={() => setIsModalOpen(true)} />

      {/* Componentes de página con diseño moderno */}
      <HeroSection onModalOpen={() => setIsModalOpen(true)} />
      <div id="problema">
        <ProblemSection />
      </div>
      <div id="solucion">
        <SolutionSection />
      </div>
      
      {/* Dashboard Demo */}
      <DashboardDemo />
      
      <CTASection />
      <div id="oferta">
        <OfferSection />
      </div>

      {/* Footer con branding AQXION */}
      <Footer />

      {/* Chat flotante con notificaciones */}
      <FloatingLiveChat />

      {/* Banner de cookies */}
      <CookieBanner />

      {/* Modal de contacto premium */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
