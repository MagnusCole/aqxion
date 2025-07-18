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

  const heroTitles = [
    "Te Ayudamos a Crecer Gratis",
    "Socios Equity para Escalar Juntos"
  ];

  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">{heroTitles[heroVariant]}</h1>
        <p className="text-xl mb-8">Growth Equity Partner</p>
        <p className="text-gray-600">
          Socios Inversores en Growth: Modelo híbrido único - adquirimos equity en tu empresa 
          y escalamos con nuestro stack de servicios. Ganamos cuando tú ganas.
        </p>
        <p className="mt-4">Pilots Actuales: Contacté 3 dueños; 1 acuerdo en progreso. Detalles soon.</p>

        <h3 className="mt-8 text-2xl font-bold text-green-500">Guías Gratis Destacadas</h3>
        <ul className="mt-4 space-y-4 max-w-md mx-auto">
          <li><a href="/blog/seo-local-guia-para-duenos-de-negocio-2025" className="text-blue-600 hover:underline">Lee Gratis: Guía SEO Local para Dueños</a> - Potencial +3x visibilidad local.</li>
          <li><a href="/blog/ia-para-negocios-2025-herramientas-workflows" className="text-blue-600 hover:underline">Lee Gratis: IA para Negocios</a> - Herramientas para automatizar workflows.</li>
          <li><a href="/blog/automatizacion-marketing-pequenos-negocios-2025" className="text-blue-600 hover:underline">Lee Gratis: Automatización Marketing</a> - Ahorra tiempo en PYMEs.</li>
          <li><a href="/blog/growth-stack-framework-5-servicios-integrados-2025" className="text-blue-600 hover:underline">Lee Gratis: Growth Stack Framework</a> - 5 servicios para escalar.</li>
          <li><a href="/blog/outreach-automatizado-sistema-completo-2025" className="text-blue-600 hover:underline">Lee Gratis: Outreach Automatizado</a> - Sistema completo para leads.</li>
        </ul>
        <p className="mt-4 text-gray-600">Disclaimer: Resultados hipotéticos basados en best practices; no garantizados. Ver más en <a href="/blog" className="text-green-500">Blog</a>.</p>
      </div>
    </main>
  );
}
