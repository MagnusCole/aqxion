'use client';

import { useState } from 'react';
import { HeroSection, ProblemSection, SolutionSection, CTASection, OfferSection } from '@/components/page-components/home';
import { ContactModal, Header, Footer, HermesIAChat, CookieBanner } from '@/components/page-components/shared';

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      
      <CTASection />
      <div id="oferta">
        <OfferSection />
      </div>

      {/* Footer con branding MyPerú */}
      <Footer />

      {/* Chat IA Hermes con respuestas inteligentes */}
      <HermesIAChat onOpenContact={() => setIsModalOpen(true)} />

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
