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
    <>
      {/* Hero Section */}
      <section className="py-20 text-center bg-white">
        <div className="container mx-auto px-4">
          <h1 
            className="text-5xl font-bold text-blueTrust cursor-pointer hover:text-blue-700 transition-colors mb-6" 
            onClick={handleHeroClick}
          >
            {heroTitles[heroVariant]}
          </h1>
          <p className="mt-4 text-xl text-gray-600 mb-8">Growth Equity Partner</p>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Socios Inversores en Growth: Modelo híbrido único - adquirimos equity en tu empresa 
            y escalamos con nuestro stack de servicios. Ganamos cuando tú ganas.
          </p>
          <a href="#guides" className="mt-8 inline-block bg-goldCTA text-white py-3 px-6 rounded-md font-semibold hover:bg-greenValue transition-colors">
            Ver Guías Gratis
          </a>
        </div>
      </section>

      {/* Status Updates */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-600 font-semibold mb-2">Outreach Activo: Enviados 5-10 emails esta semana; 2 respuestas en pipeline para leads cualificados.</p>
          <p className="text-blue-600 mb-2">Social Strategy: 10 posts preparados para X/LinkedIn targeting dueños PYMEs. Ready para lanzar.</p>
          <p className="text-gray-600">Pilotos Actuales: Contacté 3 dueños; 1 acuerdo en progreso. Detalles pronto.</p>
        </div>
      </section>

      {/* Value Section - Guías Gratis */}
      <section id="guides" className="py-16 bg-greenValue/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blueTrust mb-6 text-center">12+ Guías Gratis Destacadas</h2>
          <ul className="space-y-4 max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">📈</span>
              <div>
                <a href="/blog/copywriting-ads-efectivas-2025" onClick={() => handleGuideClick('copywriting-ads')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Copywriting para Ads Efectivas
                </a>
                <p className="text-sm text-gray-600">+2x CTR potencial.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🤖</span>
              <div>
                <a href="/blog/agentes-ia-ventas-automatizadas-2025" onClick={() => handleGuideClick('agentes-ia-ventas')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Agentes IA para Ventas
                </a>
                <p className="text-sm text-gray-600">+60% conversión automática.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">📝</span>
              <div>
                <a href="/blog/contenido-organico-sin-esfuerzo-2025" onClick={() => handleGuideClick('contenido-organico')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Content Orgánico sin Esfuerzo
                </a>
                <p className="text-sm text-gray-600">20+ posts/mes en 2h.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🎯</span>
              <div>
                <a href="/blog/ads-meta-google-basics-2025" onClick={() => handleGuideClick('ads-meta-google')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Ads Meta Google Basics
                </a>
                <p className="text-sm text-gray-600">+200% ROAS improvement.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🔥</span>
              <div>
                <a href="/blog/lead-generation-sin-presupuesto-2025" onClick={() => handleGuideClick('lead-gen-sin-presupuesto')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Lead Gen sin Presupuesto
                </a>
                <p className="text-sm text-gray-600">50-100 leads/mes gratis.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">💰</span>
              <div>
                <a href="/blog/equity-valuation-simple-2025" onClick={() => handleGuideClick('equity-valuation')} className="text-greenValue hover:text-blueTrust font-semibold">
                  Lee Gratis: Equity Valuation Simple
                </a>
                <p className="text-sm text-gray-600">Métodos valoración práctica.</p>
              </div>
            </li>
          </ul>
          <div className="text-center mt-8">
            <a href="/blog" className="text-blueTrust hover:text-greenValue font-semibold">
              Ver todas las guías →
            </a>
          </div>
          <p className="mt-6 text-gray-600 text-center text-sm">
            Disclaimer: Resultados hipotéticos basados en best practices; no garantizados.
          </p>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="contact" className="py-20 bg-blueTrust text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Partnership Equity?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Evaluamos tu negocio para partnership híbrido: services + equity
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full p-3 rounded border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            />
            <input 
              type="text" 
              placeholder="Revenue mensual aproximado" 
              className="w-full p-3 rounded border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            />
            <textarea 
              placeholder="Describe tu negocio en 2-3 líneas" 
              rows={3}
              className="w-full p-3 rounded border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-goldCTA text-white py-3 rounded font-bold hover:bg-greenValue transition-colors"
            >
              Solicitar Evaluación Gratis
            </button>
          </form>
          <p className="mt-4 text-blue-200 text-sm">
            Solo para negocios $5K+/mes. No spam, evaluación seria.
          </p>
        </div>
      </section>
    </>
  );
}
