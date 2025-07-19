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
      {/* Hero Section - Pure Empowerment Focus */}
      <section className="text-center section-padding bg-white relative">
        <div className="container-padding relative">
          <div className="max-w-4xl mx-auto">
            {/* Simplified trust signal */}
            <div className="inline-flex items-center bg-primary-50 px-4 py-2 rounded-full mb-6">
              <span className="text-primary-600 font-medium">✓ Probado • Resultados reales</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 tracking-tight leading-tight">
              Más Clientes.
              <br />
              <span className="text-primary-600">
                Sin Estrés.
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 font-medium leading-relaxed max-w-3xl mx-auto">
              Guías paso-a-paso para hacer crecer tu PYME
              <span className="block text-primary-600 font-semibold mt-2">sin gastar una fortuna</span>
            </p>
            
            
            {/* Simplified value props */}
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
            
            {/* Single powerful CTA */}
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

      {/* Guías Simplificadas por Problemas */}
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

          {/* Simplified Pain Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Pain 1: Necesito más clientes */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 lg:p-10 rounded-3xl border-2 border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl group">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">�</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4">
                  "Necesito Más Clientes"
                </h3>
                <p className="text-lg text-red-600 mb-8">
                  Tienes un buen producto/servicio pero no suficientes clientes que lo conozcan
                </p>
                
                <div className="space-y-4 text-left">
                  <a href="/blog/google-maps-aparecer-top-3-zona-30-dias-2025" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">📍</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">SEO Local que Funciona</div>
                      <div className="text-sm text-red-600">3x más visibilidad en 30 días</div>
                    </div>
                  </a>
                  
                  <a href="/blog/guia-generar-30-clientes-30-dias-sin-publicar-2025" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">🚀</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">30 Clientes en 30 Días</div>
                      <div className="text-sm text-red-600">Sin gastar en publicidad</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Pain 2: Quiero automatizar */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 lg:p-10 rounded-3xl border-2 border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">😵‍�</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
                  "Quiero Automatizar"
                </h3>
                <p className="text-lg text-blue-600 mb-8">
                  Estás cansado de hacer todo manual y quieres que funcione solo
                </p>
                
                <div className="space-y-4 text-left">
                  <a href="/blog/ia-para-negocios-2025-herramientas-workflows" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">🤖</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">IA para Automatizar Ventas</div>
                      <div className="text-sm text-blue-600">Ahorra 10+ horas/semana</div>
                    </div>
                  </a>
                  
                  <a href="/blog/automatizacion-marketing-pequenos-negocios-2025" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">⚙️</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">Marketing que Trabaja Solo</div>
                      <div className="text-sm text-blue-600">Setup fin de semana</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Pain 3: Me falta tiempo */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 lg:p-10 rounded-3xl border-2 border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl group">
              <div className="text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⏰</div>
                <h3 className="text-2xl sm:text-3xl font-bold text-green-700 mb-4">
                  "Me Falta Tiempo"
                </h3>
                <p className="text-lg text-green-600 mb-8">
                  Tienes mil cosas que hacer y necesitas herramientas rápidas que funcionen
                </p>
                
                <div className="space-y-4 text-left">
                  <a href="/blog/como-convertir-whatsapp-maquina-ventas-sin-bots-2025" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">💬</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">WhatsApp que Vende Solo</div>
                      <div className="text-sm text-green-600">Setup en 2 horas</div>
                    </div>
                  </a>
                  
                  <a href="/blog/como-crear-marca-profesional-sin-gastar-diseno-2025" className="flex items-center group/item hover:bg-white/50 p-4 rounded-xl transition-colors duration-200">
                    <div className="text-3xl mr-4 group-hover/item:scale-110 transition-transform duration-200">🎨</div>
                    <div>
                      <div className="font-semibold text-calm-700 mb-1">Marca Profesional</div>
                      <div className="text-sm text-green-600">Listo en 3 horas</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA para todas las guías */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-calm-50 to-primary-50 p-8 rounded-3xl border-2 border-calm-200">
              <h3 className="text-2xl sm:text-3xl font-bold text-calm-700 mb-4">
                ¿Quieres Ver Todas las 40+ Guías?
              </h3>
              <p className="text-lg text-calm-600 mb-6">
                Email marketing, análisis competencia, customer retention, copy que convierte y mucho más
              </p>
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center bg-calm-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-calm-700 transition-all duration-300 hover:scale-105 group"
              >
                Ver Biblioteca Completa
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">📚</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas Touch-Optimized - Mobile Excellence */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-calm-800 mb-6 font-bold tracking-tight">
              Herramientas Listas Para Usar
            </h2>
            <p className="text-xl sm:text-2xl text-calm-600 max-w-3xl mx-auto">
              Templates y scripts que ahorran horas cada semana
            </p>
          </div>

          {/* Mobile-optimized tools grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Tool 1 - Touch optimized */}
            <div className="group bg-white p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 touch-manipulation">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-calm-700 mb-4">
                  Emails que Funcionan
                </h3>
                <p className="text-lg text-calm-600 mb-6 leading-relaxed">
                  Scripts para conseguir reuniones con clientes potenciales
                </p>
                
                {/* Progress indicator */}
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center text-green-700 font-semibold">
                    <span className="text-xl mr-2">⚡</span>
                    <span>Implementable en 30 minutos</span>
                  </div>
                </div>
                
                <a 
                  href="/templates/outreach-automatizado-sistema-completo-2025" 
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center justify-center">
                    <span className="mr-2">📥</span>
                    Descargar Templates
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-2xl font-bold text-calm-700 mb-4">
                Scripts para WhatsApp
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Mensajes probados para vender sin sonar agresivo.
              </p>
              <div className="flex items-center text-primary-600 font-semibold mb-6">
                <span className="text-xl mr-2">�</span>
                3x mejores conversiones
              </div>
              <a 
                href="/templates/whatsapp-scripts" 
                className="inline-flex items-center justify-center w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300 group"
              >
                Ver Scripts
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-neutral-200 hover:border-primary-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-2xl font-bold text-calm-700 mb-4">
                Calculadora ROI
              </h3>
              <p className="text-lg text-neutral-600 mb-6">
                Saber si tu marketing realmente da dinero.
              </p>
              <div className="flex items-center text-primary-600 font-semibold mb-6">
                <span className="text-xl mr-2">⏱️</span>
                Claridad en 5 minutos
              </div>
              <a 
                href="/templates/roi-calculator" 
                className="inline-flex items-center justify-center w-full bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300 group"
              >
                Usar Calculadora
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/templates" 
              className="inline-flex items-center justify-center bg-calm-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-calm-700 transition-all duration-300 hover:scale-105 group"
            >
              Ver Todas las Herramientas
              <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - World Class Simplicity */}
      <section className="section-padding bg-gradient-to-r from-calm-600 to-primary-600 text-white">
        <div className="container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              Empieza Hoy Mismo
            </h2>
            <p className="text-xl sm:text-2xl mb-12 opacity-90">
              Todo está aquí. Solo tienes que implementar.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center bg-white text-calm-700 px-8 py-4 rounded-xl font-bold text-xl hover:bg-neutral-100 transition-all duration-300 hover:scale-105 group"
              >
                40+ Guías Completas
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">📚</span>
              </a>
              <a 
                href="/templates" 
                className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-xl hover:bg-white hover:text-calm-700 transition-all duration-300 hover:scale-105 group"
              >
                Herramientas Listas
                <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">🛠️</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
