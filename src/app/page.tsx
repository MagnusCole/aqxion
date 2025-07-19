'use client';

export default function Home() {
  return (
    <>
      {/* Hero Ultra-Optimizado para PYMEs */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-neutral-50">
        <div className="container-padding text-center">
          <div className="max-w-5xl mx-auto">
            
            {/* Trust Badge Mejorado */}
            <div className="inline-flex items-center bg-green-100 border border-green-200 px-6 py-3 rounded-full mb-8 shadow-sm">
              <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-green-800 font-semibold">Más de 500 PYMEs ya están creciendo</span>
            </div>
            
            {/* Headline Potente y Claro */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-neutral-900 mb-8 tracking-tight leading-[0.9]">
              Más Clientes para
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                tu PYME
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-600">
                sin gastar fortunas
              </span>
            </h1>
            
            {/* Value Prop Ultra-Clara */}
            <p className="text-xl sm:text-2xl text-neutral-700 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              <strong>Guías step-by-step GRATIS</strong> para hacer crecer tu negocio local.
              <br />
              <span className="text-primary-600">Sin complicaciones técnicas. Sin presupuesto. Resultados en 30 días.</span>
            </p>
            
            {/* CTA Principal Potente */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/guias" 
                className="group inline-flex items-center justify-center bg-primary-600 text-white px-10 py-5 text-xl font-bold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-primary-600/25"
              >
                Ver Guías Gratuitas
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="/recursos" 
                className="group inline-flex items-center justify-center bg-white border-2 border-neutral-300 text-neutral-700 px-10 py-5 text-xl font-bold rounded-xl hover:border-primary-600 hover:text-primary-600 transition-all duration-200 shadow-lg"
              >
                Recursos Listos
                <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </div>

            {/* Social Proof Mejorado */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-500">
              <div className="flex items-center">
                <span className="font-semibold text-2xl text-green-600 mr-1">41</span>
                <span>Guías Gratuitas</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-2xl text-blue-600 mr-1">6</span>
                <span>Recursos Listos</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-2xl text-primary-600 mr-1">500+</span>
                <span>PYMEs Creciendo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section Mejorada */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                ¿Te suena familiar?
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Los problemas más comunes que enfrentan las PYMEs (y cómo los solucionamos)
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl border border-red-200 text-center">
                <div className="text-6xl mb-4">😤</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">No Llegan Clientes</h3>
                <p className="text-neutral-600 mb-6">Tu negocio es excelente, pero nadie te conoce. Necesitas visibilidad YA.</p>
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Marketing Local
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border border-yellow-200 text-center">
                <div className="text-6xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Publicidad Cara</h3>
                <p className="text-neutral-600 mb-6">Gastas en ads pero no ves retorno. El dinero se va y los clientes no llegan.</p>
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Estrategias Sin Presupuesto
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 text-center">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Falta Tiempo</h3>
                <p className="text-neutral-600 mb-6">No tienes tiempo para marketing complejo. Necesitas algo simple y efectivo.</p>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Automatización Simple
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-primary-50 to-blue-50 p-10 rounded-2xl border border-primary-200">
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                <strong>Nosotros también pasamos por esto.</strong>
              </h3>
              <p className="text-lg text-neutral-700 mb-8 max-w-3xl mx-auto">
                Por eso creamos guías que realmente funcionan. Step-by-step. Sin tecnicismos. Implementables hoy.
              </p>
              <a 
                href="/guias" 
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-primary-700 transform hover:scale-105 transition-all duration-200 shadow-xl"
              >
                Ver Todas las Soluciones →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview Mejorado */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Lo que vas a encontrar
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Todo lo que necesitas para hacer crecer tu PYME, organizado y listo para implementar
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-5xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Guías Paso-a-Paso</h3>
                <p className="text-neutral-600 text-sm mb-6">Instrucciones exactas que puedes seguir hoy mismo, sin experiencia técnica.</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">
                  41 Guías Disponibles
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Recursos Listos</h3>
                <p className="text-neutral-600 text-sm mb-6">Copia, pega y adapta. Emails, ads, scripts, todo listo para usar.</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                  Recursos Listos
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-200 text-center hover:shadow-xl transition-shadow duration-200">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">Sin Presupuesto</h3>
                <p className="text-neutral-600 text-sm mb-6">Estrategias que funcionan con $0 de inversión en herramientas.</p>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                  100% Gratis
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <a 
                  href="/guias" 
                  className="group bg-primary-600 text-white p-6 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold mb-2">Empezar con las Guías</h4>
                  <p className="text-primary-100 text-sm mb-4">41 guías paso-a-paso para hacer crecer tu negocio</p>
                  <div className="flex items-center justify-center text-sm font-semibold">
                    Ver Guías
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
                
                <a 
                  href="/recursos" 
                  className="group bg-neutral-900 text-white p-6 rounded-xl hover:bg-neutral-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold mb-2">Recursos Listos</h4>
                  <p className="text-neutral-300 text-sm mb-4">Scripts y herramientas para implementar hoy</p>
                  <div className="flex items-center justify-center text-sm font-semibold">
                    Ver Recursos
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a 
                  href="/cursos" 
                  className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <h4 className="text-lg font-bold mb-2">Cursos <span className="text-xs bg-white/20 px-2 py-1 rounded-full">WIP</span></h4>
                  <p className="text-purple-100 text-sm mb-4">Próximamente: Sistema completo de marketing</p>
                  <div className="flex items-center justify-center text-sm font-semibold">
                    Early Access
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
