'use client';

export default function Home() {
  return (
    <>
      {/* Hero elegante con gradient premium y animaciones */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Premium background pattern con animación sutil */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNnYxMmgtMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
        </div>
        
        {/* Floating elegant elements para depth */}
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-green-200/15 to-emerald-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/5 w-32 h-32 bg-gradient-to-br from-blue-200/10 to-cyan-200/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge premium con micro-animaciones */}
            <div className="inline-flex items-center bg-gradient-to-r from-green-600/95 to-emerald-700/95 backdrop-blur-sm text-white px-8 py-4 rounded-full mb-10 shadow-2xl font-semibold border border-white/30 hover:scale-105 transition-all duration-500 cursor-default">
              <span className="text-xl mr-3 animate-bounce delay-500">✅</span>
              <span className="text-sm font-bold tracking-wide uppercase">Hub Gratuito para PYMEs Ambiciosas</span>
              <span className="text-xl ml-3 animate-bounce delay-700">🚀</span>
            </div>
            
            {/* H1 premium con typography de clase mundial */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Tu PYME Necesita
              <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 animate-pulse">
                  Más Clientes?
                </span>
                {/* Elegant underline effect */}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 rounded-full transform scale-x-0 animate-pulse origin-left"></div>
              </span>
            </h1>
            
            {/* Subtitle premium con mejor jerarquía visual */}
            <p className="text-xl sm:text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              <strong className="text-slate-800 font-bold">41 Guías Step-by-Step 100% GRATIS</strong> para conseguir clientes sin quemar efectivo.
              <br />
              <span className="text-green-700 font-semibold bg-green-50 px-2 py-1 rounded-lg">Sin complicaciones. Sin presupuestos enormes. Resultados reales en 30 días.</span>
            </p>
            
            {/* CTA principal premium con animaciones de clase mundial */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a 
                href="#guides" 
                className="group inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-700 text-white px-10 py-5 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/25 hover:from-green-700 hover:to-emerald-800 transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-white/20"
              >
                <span className="text-2xl mr-3 group-hover:animate-bounce">🎯</span>
                Ver Todas las Guías Gratis
                <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#problems" 
                className="group inline-flex items-center text-slate-700 font-semibold text-lg hover:text-green-700 transition-all duration-300 hover:scale-105"
              >
                <span className="mr-2 text-xl group-hover:animate-pulse">🔍</span>
                Explorar por Problemas
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección guías con personalización mejorada */}
      <section id="guides" className="section-padding bg-gradient-to-br from-slate-50 to-green-50/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Resuelve los Problemas Reales de Tu Negocio
              </h2>
              
              {/* Filtro personalizado para starting users */}
              <div className="inline-flex items-center bg-white border border-slate-200 rounded-full px-6 py-3 shadow-sm mb-8">
                <span className="text-slate-600 mr-3">Filtrar por situación:</span>
                <select className="bg-transparent text-green-700 font-semibold focus:outline-none cursor-pointer">
                  <option value="all">Todos los problemas</option>
                  <option value="starting">🌱 Emprendedores iniciales</option>
                  <option value="growing">📈 Negocios creciendo</option>
                  <option value="scaling">🚀 Listos para escalar</option>
                </select>
              </div>
              
              <p className="text-slate-600 text-lg">Encuentra exactamente lo que necesitas para tu situación</p>
            </div>
            
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <li>
                <a href="/guias" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    🎯 ¿No tienes suficientes clientes?
                  </h3>
                  <p className="text-neutral-600 mb-4">Guías para atraer clientes locales sin gastar fortunas en publicidad</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">📖</span>
                    Ver guías de captación
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/guias" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    💸 ¿Gastas demasiado en marketing?
                  </h3>
                  <p className="text-neutral-600 mb-4">Estrategias de marketing efectivas que no requieren grandes presupuestos</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">📢</span>
                    Ver guías de marketing
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/guias" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    ⏰ ¿Te falta tiempo para todo?
                  </h3>
                  <p className="text-neutral-600 mb-4">Automatización e IA para ahorrar horas cada semana sin complicarte</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">🤖</span>
                    Ver guías de automatización
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/guias" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    📈 ¿Necesitas vender más?
                  </h3>
                  <p className="text-neutral-600 mb-4">Técnicas probadas para convertir más visitantes en clientes que pagan</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">💰</span>
                    Ver guías de ventas
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/recursos" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    🚀 ¿Quieres acelerar resultados?
                  </h3>
                  <p className="text-neutral-600 mb-4">Templates y herramientas listos para usar que aceleran tu implementación</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">⚡</span>
                    Ver recursos listos
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/cursos" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    🎓 ¿Necesitas formación profunda?
                  </h3>
                  <p className="text-neutral-600 mb-4">Cursos en desarrollo para dominar marketing digital desde cero</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">📚</span>
                    Ver cursos (próximamente)
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
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
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-green-600 to-emerald-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Guías Completas</h3>
                <p className="text-slate-600 text-sm mb-6">41 guías paso-a-paso. Instrucciones exactas que puedes seguir hoy mismo, sin experiencia técnica.</p>
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Acceso Total Gratis
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-cyan-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Recursos Listos</h3>
                <p className="text-slate-600 text-sm mb-6">Scripts, plantillas y herramientas. Copia, pega y adapta todo sin costo.</p>
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Descarga Gratis
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  PRÓXIMAMENTE
                </div>
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cursos Premium</h3>
                <p className="text-slate-600 text-sm mb-6">Sistema completo de marketing con acompañamiento personalizado.</p>
                <div className="bg-purple-50 border border-purple-200 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  💡 Early Access Lista
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <a 
                  href="/guias" 
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <div className="text-xs bg-white/20 px-3 py-1 rounded-full mb-4 font-bold">100% GRATIS</div>
                  <h4 className="text-xl font-bold mb-3">Ver Todas las Guías</h4>
                  <p className="text-green-100 text-sm mb-6 leading-relaxed">Acceso completo a las 41 guías. Sin registro, sin costos ocultos.</p>
                  <div className="flex items-center justify-center text-base font-bold">
                    Empezar Ahora
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
                
                <a 
                  href="/recursos" 
                  className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <div className="text-xs bg-white/20 px-3 py-1 rounded-full mb-4 font-bold">100% GRATIS</div>
                  <h4 className="text-xl font-bold mb-3">Descargar Recursos</h4>
                  <p className="text-blue-100 text-sm mb-6 leading-relaxed">Scripts, plantillas y herramientas listas. Descarga directa.</p>
                  <div className="flex items-center justify-center text-base font-bold">
                    Descargar Ya
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </a>

                <div className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-2xl border-2 border-purple-400 relative overflow-hidden opacity-75">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
                  <div className="relative">
                    <div className="text-xs bg-purple-500 px-3 py-1 rounded-full mb-4 font-bold">PRÓXIMAMENTE</div>
                    <h4 className="text-xl font-bold mb-3">Cursos Premium</h4>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">Sistema completo con acompañamiento. Notificamos cuando esté listo.</p>
                    <div className="flex items-center justify-center text-base font-bold text-purple-300">
                      Apuntarme a Lista
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
