'use client';

import { useState } from 'react';
import { HeroSection, ProblemSection, SolutionSection, StatsSection, TestimonialsSection, CTASection, OfferSection } from '@/components/page-components/home';
import { ContactModal, Header, Footer, WhatsAppButton } from '@/components/page-components/shared';
import { DashboardDemo } from '@/components/page-components/portal/DashboardDemo';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header con logo real y colores peruanos */}
      <Header onModalOpen={() => setIsModalOpen(true)} />

      {/* Componentes de página con identidad peruana sólida */}
      <HeroSection onModalOpen={() => setIsModalOpen(true)} />
      <div id="como-funciona">
        <ProblemSection />
      </div>
      <SolutionSection />
      
      {/* Dashboard Demo inspirado en mipe-boost-magia */}
      <DashboardDemo />
      
      <CTASection />
      <div id="precios">
        <OfferSection />
      </div>

      {/* Footer con branding AQXION */}
      <Footer />

      {/* WhatsApp flotante para conversión */}
      <WhatsAppButton />

      {/* Modal de contacto premium */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
