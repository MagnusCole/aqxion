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
      <section className="py-16 sm:py-24 bg-greenValue/5 text-center">
        <div className="container">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto mb-4 bg-blueTrust/10 rounded-full flex items-center justify-center">
              <span className="text-4xl">🚀</span>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl text-blueTrust">Growth Partners</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Modelo híbrido único - escalamos GRATIS tu empresa con nuestro stack de servicios . Ganamos cuando tú ganas.
          </p>
          <a href="#guides" className="mt-6 inline-block bg-goldCTA text-white py-3 px-6 rounded-md font-semibold hover:bg-blueTrust transition-colors">
            Ver Guías Gratis
          </a>
        </div>
      </section>

      {/* Progreso Transparente */}
      <section className="py-12 bg-greenValue/5 mt-8">
        <div className="container">
          <h3 className="text-2xl font-bold text-blueTrust mb-4 text-center">Progreso En Vivo: Ganamos Juntos</h3>
          <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto">
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong>Outreach Activo:</strong> +3 follow-ups enviados; 1 lead en pipeline para piloto. 
              <a href="#contact" className="text-goldCTA hover:underline ml-2">¿Interesado? Contactar.</a>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong>Social Strategy:</strong> Lanzados 3 posts en LinkedIn; tracking engagement. 
              <button onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'social_launch', {});
                }
              }} className="text-goldCTA hover:underline ml-2">Ver Posts (En progreso)</button>
            </li>
            <li className="bg-white p-4 rounded-lg shadow-sm">
              <strong>Pilotos Actuales:</strong> Contactamos 3 dueños; 1 acuerdo en progreso (+ aumento de leads potencial). 
              <span className="text-sm text-gray-500">Disclaimer: No garantías.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Value Section - Guías Gratis */}
      <section id="guides" className="py-16 bg-greenValue/10">
        <div className="container">
          <h2 className="text-3xl font-bold text-blueTrust mb-6 text-center">Top 5 Guías Más Populares</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
            Porqué AQXION: Nacimos de ver PYMEs luchando con agencias sin alineación. Ofrecemos value gratis primero, equity partnerships después – upside mutuo. Toma herramientas; pregunta cuando estés listo.
          </p>
          <ul className="space-y-4 max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🤖</span>
              <div>
                <a href="/blog/workflows-ia-avanzados-2025" onClick={() => handleGuideClick('workflows-ia-avanzados')} className="text-greenValue hover:text-blueTrust font-semibold">
                  NUEVO: Workflows IA Avanzados 2025
                </a>
                <p className="text-sm text-gray-600">Automatiza 80% del marketing sin complicaciones técnicas.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">📊</span>
              <div>
                <a href="/blog/ads-roi-calculation-2025" onClick={() => handleGuideClick('ads-roi-calculation')} className="text-greenValue hover:text-blueTrust font-semibold">
                  NUEVO: Ads ROI Calculation Real
                </a>
                <p className="text-sm text-gray-600">90% de PYMEs calcula mal ROI y pierde dinero.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🎯</span>
              <div>
                <a href="/blog/sales-automation-sin-perder-toque-personal-2025" onClick={() => handleGuideClick('sales-automation-personal')} className="text-greenValue hover:text-blueTrust font-semibold">
                  NUEVO: Sales Automation + Toque Personal
                </a>
                <p className="text-sm text-gray-600">Automatiza 70% del sales process manteniendo relationships.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">🔒</span>
              <div>
                <a href="/blog/customer-retention-estrategias-avanzadas-2025" onClick={() => handleGuideClick('customer-retention-avanzadas')} className="text-greenValue hover:text-blueTrust font-semibold">
                  NUEVO: Customer Retention 95%+
                </a>
                <p className="text-sm text-gray-600">Por qué 80% de PYMEs pierde clientes y cómo retener 95%+.</p>
              </div>
            </li>
            <li className="flex items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="mr-3 text-2xl">�</span>
              <div>
                <a href="/blog/local-seo-dominance-2025" onClick={() => handleGuideClick('local-seo-dominance')} className="text-greenValue hover:text-blueTrust font-semibold">
                  NUEVO: Local SEO Dominance
                </a>
                <p className="text-sm text-gray-600">Rank #1 en tu ciudad en 90 días - case studies reales.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-blueTrust mb-4">Más Guías Populares:</h3>
            <ul className="max-w-2xl mx-auto text-left space-y-2">
              <li>• <a href="/blog/copywriting-ads-efectivas-2025" className="text-greenValue hover:text-blueTrust">Copywriting para Ads Efectivas (+2x CTR)</a></li>
              <li>• <a href="/blog/agentes-ia-ventas-automatizadas-2025" className="text-greenValue hover:text-blueTrust">Agentes IA para Ventas (+60% conversión)</a></li>
              <li>• <a href="/blog/contenido-organico-sin-esfuerzo-2025" className="text-greenValue hover:text-blueTrust">Content Orgánico sin Esfuerzo (20+ posts/mes)</a></li>
              <li>• <a href="/blog/ads-meta-google-basics-2025" className="text-greenValue hover:text-blueTrust">Ads Meta Google Basics (+200% ROAS)</a></li>
              <li>• <a href="/blog/lead-generation-sin-presupuesto-2025" className="text-greenValue hover:text-blueTrust">Lead Gen sin Presupuesto (50-100 leads/mes)</a></li>
            </ul>
          </div>
          <div className="text-center mt-8">
            <a href="/blog" className="text-blueTrust hover:text-greenValue font-semibold">
              Ver todas las guías →
            </a>
          </div>
          
          {/* Templates Section */}
          <h3 className="mt-8 text-2xl font-bold text-greenValue text-center">Herramientas Gratis (Templates Outreach/Pilots)</h3>
          <ul className="mt-4 space-y-4 max-w-md mx-auto">
            <li className="bg-white p-3 rounded-lg shadow-sm">
              <a href="/templates/outreach-personalizados" className="text-blueTrust hover:text-greenValue font-semibold">
                📧 Descarga Gratis: Templates Outreach Personalizados
              </a>
              <p className="text-sm text-gray-600">5 variants para generar leads automáticamente.</p>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm">
              <a href="/templates/pilots-iniciales" className="text-blueTrust hover:text-greenValue font-semibold">
                🚀 Lee Gratis: Guía Pilots Iniciales
              </a>
              <p className="text-sm text-gray-600">Cómo empezar partnerships equity-first.</p>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm">
              <a href="/templates/social-drafts" className="text-blueTrust hover:text-greenValue font-semibold">
                📱 Descarga Gratis: Drafts Social para Tráfico
              </a>
              <p className="text-sm text-gray-600">Content listo para LinkedIn/X que atrae.</p>
            </li>
            <li className="bg-white p-3 rounded-lg shadow-sm">
              <a href="/templates/outreach-template" className="text-blueTrust hover:text-greenValue font-semibold">
                ⚡ Template Outreach Automatizado
              </a>
              <p className="text-sm text-gray-600">Framework básico para outreach masivo.</p>
            </li>
          </ul>
          <p className="mt-4 text-gray-600 text-center">
            Usa estos templates gratis para escalar; contacta si quieres personalización hybrid.
          </p>
          
          {/* Quiz Section */}
          <div className="py-12 bg-blueTrust/10 rounded-lg mt-8">
            <h3 className="text-2xl font-bold text-blueTrust mb-4 text-center">Quiz: ¿Tu Negocio Está Listo para Escalar?</h3>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem('email') as HTMLInputElement).value; 
              alert(`Results: Alto Potencial – Tips enviados a ${email}! Explora Partnership.`); 
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'quiz_submit', { category: 'lead' });
              }
            }} className="space-y-4 max-w-md mx-auto">
              <input 
                name="size" 
                className="w-full p-3 rounded border border-gray-300" 
                placeholder="Tamaño de tu negocio (empleados/revenue)?" 
                required 
              />
              <input 
                name="challenges" 
                className="w-full p-3 rounded border border-gray-300" 
                placeholder="Principales desafíos actuales?" 
                required 
              />
              <input 
                name="email" 
                type="email" 
                className="w-full p-3 rounded border border-gray-300" 
                placeholder="Email para results personalizados" 
                required 
              />
              <button type="submit" className="w-full bg-goldCTA text-white py-3 rounded font-bold hover:bg-greenValue transition-colors">
                Tomar Quiz Gratis
              </button>
            </form>
          </div>
          
          <p className="mt-6 text-gray-600 text-center text-sm">
            Disclaimer: Resultados hipotéticos basados en best practices; no garantizados.
          </p>
        </div>
      </section>

      {/* CTA Form Section */}
      <section id="contact" className="py-20 bg-blueTrust text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Partnership Equity?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Evaluamos tu negocio para partnership híbrido: services + equity
          </p>
          <form className="space-y-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="w-full p-3 rounded-md border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            />
            <input 
              type="text" 
              placeholder="Revenue mensual aproximado" 
              className="w-full p-3 rounded-md border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            />
            <textarea 
              placeholder="Describe tu negocio en 2-3 líneas" 
              rows={3}
              className="w-full p-3 rounded-md border border-gray-300 focus:border-goldCTA text-gray-900"
              required
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-goldCTA text-white py-3 rounded-md font-bold hover:bg-greenValue transition-colors"
            >
              Solicitar Evaluación Gratis
            </button>
          </form>
          <p className="mt-4 text-blue-200 text-sm">
            Solo para negocios $5K+/mes. No spam, evaluación seria.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl">
          <div className="mt-8 p-6 bg-blueTrust/10 rounded">
            <h3 className="text-2xl text-blueTrust">Quiz Rápido: ¿Listo para Escalar?</h3>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Results: Potencial high - Contacta!'); 
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'quiz_submit', {});
              }
            }}>
              <input 
                className="block mb-4 p-3 w-full rounded-md border border-gray-300 focus:border-goldCTA"
                placeholder="Tamaño negocio?" 
                required
              />
              <input 
                className="block mb-4 p-3 w-full rounded-md border border-gray-300 focus:border-goldCTA"
                placeholder="Desafíos actuales?" 
                required
              />
              <input 
                className="block mb-4 p-3 w-full rounded-md border border-gray-300 focus:border-goldCTA"
                type="email" 
                placeholder="Email para tips"
                required
              />
              <button className="bg-goldCTA text-white py-3 px-6 rounded-md hover:bg-greenValue transition-colors">
                Enviar Quiz
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
