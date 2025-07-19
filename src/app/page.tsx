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
      {/* Hero Section - Emotional Connect + Empowerment Inmediato */}
      <section className="text-center section-padding bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-calm-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Trust signal arriba */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-primary-200/50">
              <span className="text-primary-600 font-semibold mr-2">✅</span>
              <span className="text-calm-700 font-medium">Probado en 150+ PYMEs • Resultados en 30 días</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-calm-800 mb-8 tracking-tight leading-none">
              Más Clientes.
              <br />
              <span className="text-transparent bg-gradient-to-r from-primary-600 via-green-500 to-primary-700 bg-clip-text">
                Menos Estrés.
              </span>
            </h1>
            
            <p className="text-2xl sm:text-3xl lg:text-4xl text-calm-600 mb-12 font-medium leading-tight max-w-5xl mx-auto">
              Guías paso-a-paso para hacer crecer tu PYME
              <br />
              <span className="text-primary-600 font-semibold">sin gastar una fortuna ni contratar equipos</span>
            </p>
            
            {/* Progress empowerment indicators */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary-200/30">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-lg font-semibold text-calm-700 mb-1">Implementable Hoy</div>
                <div className="text-primary-600 font-medium">En 2-4 horas máximo</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary-200/30">
                <div className="text-3xl mb-3">🎯</div>
                <div className="text-lg font-semibold text-calm-700 mb-1">Sin Presupuesto</div>
                <div className="text-primary-600 font-medium">Estrategias orgánicas</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-primary-200/30">
                <div className="text-3xl mb-3">🚀</div>
                <div className="text-lg font-semibold text-calm-700 mb-1">Resultados Reales</div>
                <div className="text-primary-600 font-medium">Casos de éxito verificados</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="#guides" 
                className="group inline-flex items-center justify-center bg-gradient-to-r from-primary-600 to-green-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:from-primary-700 hover:to-green-700 transition-all duration-300 hover:scale-105 hover:shadow-xl transform"
              >
                <span className="mr-3">📚</span>
                Ver Guías Gratis
                <span className="ml-3 text-2xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">40+</div>
                  <div className="text-sm text-calm-600 font-medium">Guías Completas</div>
                </div>
                <div className="w-px h-12 bg-primary-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">150+</div>
                  <div className="text-sm text-calm-600 font-medium">PYMEs Exitosas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guías Organizadas por Pains - Psychology-Driven */}
      <section id="guides" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-calm-800 mb-6 font-bold tracking-tight">
              ¿Cuál es tu mayor dolor ahora?
            </h2>
            <p className="text-xl sm:text-2xl text-calm-600 max-w-3xl mx-auto mb-12">
              Elige tu situación y ve directo a la solución
            </p>
          </div>

          {/* Pain Categories */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
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
        <div className="container">
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
        <div className="container text-center">
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
