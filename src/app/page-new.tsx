'use client';

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: { [key: string]: any }) => void;
  }
}

export default function Home() {
  const handleGuideClick = (guideName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_guide', { 
        'guide_name': guideName
      });
    }
  };

  return (
    <>
      {/* Hero Ultra-Simplificado */}
      <section className="text-center section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            {/* Trust simple */}
            <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full mb-6">
              <span className="text-primary-600 font-medium">✓ Probado • Resultados reales</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
              Más Clientes.
              <br />
              <span className="text-primary-600">Sin Estrés.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              Guías paso-a-paso para hacer crecer tu PYME
              <span className="block text-primary-600 font-semibold mt-2">sin gastar una fortuna</span>
            </p>
            
            {/* Value props ultra simples */}
            <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto text-center">
              <div className="p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-neutral-700">Implementable Hoy</div>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-neutral-700">Sin Presupuesto</div>
              </div>
              <div className="p-4">
                <div className="text-2xl mb-2">✓</div>
                <div className="font-semibold text-neutral-700">Resultados Reales</div>
              </div>
            </div>
            
            {/* CTA simple y poderoso */}
            <div className="text-center">
              <a 
                href="#guides" 
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Ver Guías Gratis →
              </a>
              <div className="mt-4 text-sm text-neutral-500">
                40+ guías • Resultados verificados
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guías Ultra-Escaneables */}
      <section id="guides" className="section-padding bg-neutral-50">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              ¿Cuál es tu problema ahora?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Elige y ve directo a la solución
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Necesito Clientes */}
            <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors duration-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Necesito Más Clientes</h3>
                <p className="text-neutral-600 text-sm">Buen producto, pocos clientes</p>
              </div>
              
              <div className="space-y-3">
                <a href="/blog/google-maps-aparecer-top-3-zona-30-dias-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('SEO Local')}>
                  <div className="font-medium text-neutral-800">📍 SEO Local</div>
                  <div className="text-sm text-neutral-600">Aparecer top 3 en 30 días</div>
                </a>
                
                <a href="/blog/guia-generar-30-clientes-30-dias-sin-publicar-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('30 Clientes 30 Dias')}>
                  <div className="font-medium text-neutral-800">🚀 30 Clientes/30 Días</div>
                  <div className="text-sm text-neutral-600">Sin gastar en publicidad</div>
                </a>

                <a href="/blog/lead-generation-sin-presupuesto-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Leads Sin Presupuesto')}>
                  <div className="font-medium text-neutral-800">💰 Leads Sin Presupuesto</div>
                  <div className="text-sm text-neutral-600">Estrategias orgánicas</div>
                </a>
              </div>
            </div>

            {/* Quiero Automatizar */}
            <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors duration-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">⚙️</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Quiero Automatizar</h3>
                <p className="text-neutral-600 text-sm">Cansado de hacer todo manual</p>
              </div>
              
              <div className="space-y-3">
                <a href="/blog/ia-para-negocios-2025-herramientas-workflows" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('IA Negocios')}>
                  <div className="font-medium text-neutral-800">🤖 IA para Ventas</div>
                  <div className="text-sm text-neutral-600">Ahorra 10+ horas/semana</div>
                </a>
                
                <a href="/blog/automatizacion-marketing-pequenos-negocios-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Automatizacion Marketing')}>
                  <div className="font-medium text-neutral-800">📈 Marketing Automático</div>
                  <div className="text-sm text-neutral-600">Setup fin de semana</div>
                </a>

                <a href="/blog/agentes-ia-ventas-automatizadas-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Agentes IA')}>
                  <div className="font-medium text-neutral-800">🎯 Agentes IA</div>
                  <div className="text-sm text-neutral-600">Ventas 24/7</div>
                </a>
              </div>
            </div>

            {/* No Tengo Tiempo */}
            <div className="bg-white p-6 rounded-lg border border-neutral-200 hover:border-primary-300 transition-colors duration-200">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">No Tengo Tiempo</h3>
                <p className="text-neutral-600 text-sm">Necesito resultados rápidos</p>
              </div>
              
              <div className="space-y-3">
                <a href="/blog/que-contenido-publicar-sin-tiempo-ni-equipo-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Contenido Sin Tiempo')}>
                  <div className="font-medium text-neutral-800">📝 Contenido Sin Tiempo</div>
                  <div className="text-sm text-neutral-600">30 min/semana máximo</div>
                </a>
                
                <a href="/blog/marketing-automatizado-ahorra-tiempo-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Marketing Rapido')}>
                  <div className="font-medium text-neutral-800">💨 Marketing Rápido</div>
                  <div className="text-sm text-neutral-600">Implementa en 1 hora</div>
                </a>

                <a href="/blog/contenido-organico-sin-esfuerzo-2025" 
                   className="block p-3 hover:bg-neutral-50 rounded transition-colors duration-200"
                   onClick={() => handleGuideClick('Contenido Organico')}>
                  <div className="font-medium text-neutral-800">🌱 Contenido Orgánico</div>
                  <div className="text-sm text-neutral-600">Sin esfuerzo constante</div>
                </a>
              </div>
            </div>
          </div>

          {/* Ver todas las guías */}
          <div className="text-center">
            <a href="/blog" className="inline-flex items-center justify-center bg-neutral-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-neutral-900 transition-colors duration-200">
              Ver Todas las Guías (40+)
            </a>
          </div>
        </div>
      </section>

      {/* Herramientas Simplificadas */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Herramientas Listas Para Usar
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Templates y scripts que ahorran horas cada semana
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Email Templates</h3>
              <p className="text-neutral-600 text-sm mb-4">15 plantillas probadas</p>
              <a href="/templates/email" className="text-primary-600 font-medium hover:text-primary-700">Descargar →</a>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">WhatsApp Scripts</h3>
              <p className="text-neutral-600 text-sm mb-4">Convierte más leads</p>
              <a href="/templates/whatsapp" className="text-primary-600 font-medium hover:text-primary-700">Descargar →</a>
            </div>

            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">Calculadora ROI</h3>
              <p className="text-neutral-600 text-sm mb-4">Mide tus resultados</p>
              <a href="/templates/roi-calculator" className="text-primary-600 font-medium hover:text-primary-700">Usar →</a>
            </div>
          </div>

          <div className="text-center">
            <a href="/templates" className="inline-flex items-center justify-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
              Ver Todas las Herramientas
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final Ultra-Simple */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Empieza Hoy Mismo
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Todo gratis. Resultados reales. Sin trucos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/blog" className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-colors duration-200">
                Ver Guías Gratis
              </a>
              <a href="/templates" className="inline-flex items-center justify-center bg-primary-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-800 transition-colors duration-200">
                Usar Herramientas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
