'use client';

export default function Home() {
  return (
    <>
      {/* Hero optimizado para simplicity y empathy */}
      <section className="section-padding bg-white text-center">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge empathy-focused */}
            <div className="inline-flex items-center bg-gradient-to-r from-primary-600 to-calm-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg font-semibold">
              <span className="emoji-icon">✅</span>
              Más de 500 PYMEs creciendo con nuestras guías
            </div>
            
            {/* H1 enfocado en pain/empowerment */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-calm-700 mb-8 leading-tight">
              ¿Tu PYME Necesita
              <br />
              <span className="text-primary-600">Más Clientes?</span>
            </h1>
            
            {/* P enfocado en pains/empowerment */}
            <p className="text-lg sm:text-xl text-neutral-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              <strong>Guías step-by-step GRATIS</strong> para conseguir clientes sin quemar efectivo.
              <br />
              <span className="text-primary-600">Sin complicaciones. Sin presupuestos enormes. Resultados reales en 30 días.</span>
            </p>
            
            {/* Link a #guides */}
            <a 
              href="#guides" 
              className="inline-block text-primary-600 font-semibold text-lg hover:text-calm-600 transition-colors duration-200 hover:underline mb-12"
            >
              Ver Guías Disponibles ↓
            </a>
          </div>
        </div>
      </section>

      {/* Sección guías/herramientas */}
      <section id="guides" className="section-padding bg-gradient-to-br from-neutral-50 to-primary-50/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-calm-700 mb-12 text-center">
              Resuelve los Problemas Reales de Tu Negocio
            </h2>
            
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/guias" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  🎯 ¿No tienes suficientes clientes?
                </a>
                <p className="text-neutral-600 mt-3">Guías para atraer clientes locales sin gastar fortunas en publicidad</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">📖</span>
                  Ver guías de captación
                </span>
              </li>
              
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/guias" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  💸 ¿Gastas demasiado en marketing?
                </a>
                <p className="text-neutral-600 mt-3">Estrategias de marketing efectivas que no requieren grandes presupuestos</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">📢</span>
                  Ver guías de marketing
                </span>
              </li>
              
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/guias" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  ⏰ ¿Te falta tiempo para todo?
                </a>
                <p className="text-neutral-600 mt-3">Automatización e IA para ahorrar horas cada semana sin complicarte</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">🤖</span>
                  Ver guías de automatización
                </span>
              </li>
              
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/guias" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  📈 ¿Necesitas vender más?
                </a>
                <p className="text-neutral-600 mt-3">Técnicas probadas para convertir más visitantes en clientes que pagan</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">💰</span>
                  Ver guías de ventas
                </span>
              </li>
              
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/recursos" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  🚀 ¿Quieres acelerar resultados?
                </a>
                <p className="text-neutral-600 mt-3">Templates y herramientas listos para usar que aceleran tu implementación</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">⚡</span>
                  Ver recursos listos
                </span>
              </li>
              
              <li className="bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-primary-200 hover:shadow-lg transition-all duration-200">
                <a href="/cursos" className="block text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors duration-200">
                  🎓 ¿Necesitas formación profunda?
                </a>
                <p className="text-neutral-600 mt-3">Cursos en desarrollo para dominar marketing digital desde cero</p>
                <span className="inline-flex items-center mt-4 text-sm font-medium text-primary-600">
                  <span className="emoji-icon">📚</span>
                  Ver cursos (próximamente)
                </span>
              </li>
            </ul>
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
