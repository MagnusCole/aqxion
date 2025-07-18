'use client';

import { useEffect, useState } from 'react';

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: { [key: string]: any }) => void;
  }
}

export default function Home() {
  const [heroVariant, setHeroVariant] = useState(0);

  useEffect(() => {
    const variant = Math.floor(Math.random() * 2);
    setHeroVariant(variant);
    
    // Track variant view
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'view_variant', { 'variant': variant === 0 ? 'A' : 'B' });
    }
  }, []);

  const handleGuideClick = (guideName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_guide', { 
        'guide_name': guideName,
        'variant': heroVariant === 0 ? 'A' : 'B' 
      });
    }
  };

  const handleHeroClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'hero_click', { 
        'variant': heroVariant === 0 ? 'A' : 'B',
        'hero_text': heroTitles[heroVariant]
      });
    }
  };

  const heroTitles = [
    "Te Ayudamos a Crecer Gratis",
    "Socios Equity para Escalar Juntos"
  ];

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-5xl font-bold text-blue-600 mb-8 cursor-pointer hover:text-blue-700 transition-colors" 
          onClick={handleHeroClick}
        >
          {heroTitles[heroVariant]}
        </h1>
        <p className="text-xl mb-8">Growth Equity Partner</p>
        <p className="text-gray-600">
          Socios Inversores en Growth: Modelo híbrido único - adquirimos equity en tu empresa 
          y escalamos con nuestro stack de servicios. Ganamos cuando tú ganas.
        </p>
        <p className="mt-4 text-green-600 font-semibold">Outreach Activo: Enviados 5-10 emails esta semana; 2 respuestas en pipeline para leads cualificados.</p>
        <p className="mt-2 text-blue-600">Social Strategy: 10 posts preparados para X/LinkedIn targeting dueños PYMEs. Ready para lanzar.</p>
        <p className="mt-2">Pilotos Actuales: Contacté 3 dueños; 1 acuerdo en progreso. Detalles pronto.</p>

        <h3 className="mt-8 text-2xl font-bold text-green-500">12+ Guías Gratis Destacadas</h3>
        <ul className="mt-4 space-y-4 max-w-md mx-auto">
          <li><a href="/blog/copywriting-ads-efectivas-2025" onClick={() => handleGuideClick('copywriting-ads')} className="text-blue-600 hover:underline">Lee Gratis: Copywriting para Ads Efectivas</a> - +2x CTR potencial.</li>
          <li><a href="/blog/agentes-ia-ventas-automatizadas-2025" onClick={() => handleGuideClick('agentes-ia-ventas')} className="text-blue-600 hover:underline">Lee Gratis: Agentes IA para Ventas</a> - +60% conversión automática.</li>
          <li><a href="/blog/contenido-organico-sin-esfuerzo-2025" onClick={() => handleGuideClick('contenido-organico')} className="text-blue-600 hover:underline">Lee Gratis: Content Orgánico sin Esfuerzo</a> - 20+ posts/mes en 2h.</li>
          <li><a href="/blog/ads-meta-google-basics-2025" onClick={() => handleGuideClick('ads-meta-google')} className="text-blue-600 hover:underline">Lee Gratis: Ads Meta Google Basics</a> - +200% ROAS improvement.</li>
          <li><a href="/blog/lead-generation-sin-presupuesto-2025" onClick={() => handleGuideClick('lead-gen-sin-presupuesto')} className="text-blue-600 hover:underline">Lee Gratis: Lead Gen sin Presupuesto</a> - 50-100 leads/mes gratis.</li>
          <li><a href="/blog/equity-valuation-simple-2025" onClick={() => handleGuideClick('equity-valuation')} className="text-blue-600 hover:underline">Lee Gratis: Equity Valuation Simple</a> - Métodos valoración práctica.</li>
          <li><a href="/blog/seo-local-guia-para-duenos-de-negocio-2025" onClick={() => handleGuideClick('seo-local')} className="text-blue-600 hover:underline">Lee Gratis: Guía SEO Local para Dueños</a> - Potencial +3x visibilidad local.</li>
          <li><a href="/blog/ia-para-negocios-2025-herramientas-workflows" onClick={() => handleGuideClick('ia-negocios')} className="text-blue-600 hover:underline">Lee Gratis: IA para Negocios</a> - Herramientas para automatizar workflows.</li>
          <li><a href="/blog/automatizacion-marketing-pequenos-negocios-2025" onClick={() => handleGuideClick('automatizacion-marketing')} className="text-blue-600 hover:underline">Lee Gratis: Automatización Marketing</a> - Ahorra tiempo en PYMEs.</li>
          <li><a href="/blog/growth-stack-framework-5-servicios-integrados-2025" onClick={() => handleGuideClick('growth-stack')} className="text-blue-600 hover:underline">Lee Gratis: Growth Stack Framework</a> - 5 servicios para escalar.</li>
          <li><a href="/blog/unit-economics-escalar-2025" onClick={() => handleGuideClick('unit-economics')} className="text-blue-600 hover:underline">Lee Gratis: Unit Economics para Escalar</a> - LTV:CAC optimization.</li>
          <li><a href="/blog/partnerships-equity-basicos-2025" onClick={() => handleGuideClick('partnerships-equity')} className="text-blue-600 hover:underline">Lee Gratis: Partnerships Equity Básicos</a> - Equity swap strategies.</li>
        </ul>
        <p className="mt-4 text-gray-600">Disclaimer: Resultados hipotéticos basados en best practices; no garantizados. Ver más en <a href="/blog" className="text-green-500">Blog</a>.</p>
      </div>
    </main>
  );
}
