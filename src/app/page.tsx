'use client';

export default function Home() {
  return (
    <>
      {/* Hero elegante y simple */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-green-50/30 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNnYxMmgtMTJ6Ci8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* H1 elegante */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Tu PYME Necesita
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
                Más Clientes?
              </span>
            </h1>
            
            {/* Subtitle elegante y simple */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">41 Guías Step-by-Step 100% Gratuitas</strong> para conseguir más clientes.
            </p>
            
            {/* CTA simple y elegante */}
            <div className="mb-16">
              <a 
                href="#guides" 
                className="inline-flex items-center bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200"
              >
                Ver Todas las Guías
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección guías simplificada */}
      <section id="guides" className="section-padding bg-gradient-to-br from-slate-50 to-green-50/20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Resuelve los Problemas Reales de Tu Negocio
              </h2>
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
                <a href="/recursos" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    📄 ¿Necesitas plantillas listas?
                  </h3>
                  <p className="text-neutral-600 mb-4">Recursos descargables para implementar las estrategias de inmediato</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">⬇️</span>
                    Ver recursos listos
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/cursos" className="group block bg-white border-2 border-amber-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-amber-700 font-semibold text-lg mb-3 group-hover:text-amber-800 transition-colors duration-200">
                    🎓 ¿Necesitas formación profunda?
                  </h3>
                  <p className="text-neutral-600 mb-4">Cursos gratuitos en desarrollo para dominar marketing digital</p>
                  <span className="inline-flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700 transition-colors duration-200">
                    <span className="emoji-icon">📚</span>
                    Cursos (en desarrollo)
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              </li>
              
              <li>
                <a href="/guias" className="group block bg-white border-2 border-neutral-200 rounded-xl p-6 hover:border-green-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <h3 className="text-green-700 font-semibold text-lg mb-3 group-hover:text-green-800 transition-colors duration-200">
                    🔧 ¿Buscas herramientas específicas?
                  </h3>
                  <p className="text-neutral-600 mb-4">Guías sobre las mejores herramientas gratuitas para PYMEs</p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-200">
                    <span className="emoji-icon">🛠️</span>
                    Ver herramientas
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

      {/* Sección Pain Points */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Los Problemas Que Todos Enfrentamos
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Como dueño de PYME, estos son los dolores de cabeza más comunes. Te ayudamos a resolverlos.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">😰</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">No llegan clientes</h3>
                <p className="text-slate-600 mb-6">Tu negocio está listo pero los clientes no te encuentran o no confían lo suficiente.</p>
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Lead Generation
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">💸</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Publicidad Cara</h3>
                <p className="text-slate-600 mb-6">Gastas en ads pero no ves retorno. El dinero se va y los clientes no llegan.</p>
                <div className="bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Estrategias Sin Presupuesto
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">⏰</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Falta Tiempo</h3>
                <p className="text-slate-600 mb-6">No tienes tiempo para marketing complejo. Necesitas algo simple y efectivo.</p>
                <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  Solución: Automatización Simple
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 p-10 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                <strong>Nosotros también pasamos por esto.</strong>
              </h3>
              <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
                Por eso creamos guías que realmente funcionan. Step-by-step. Sin tecnicismos. Implementables hoy.
              </p>
              <a 
                href="/guias" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 shadow-lg"
              >
                Ver Todas las Soluciones →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
        <div className="container-padding">
          <div className="max-w-7xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Lo que vas a encontrar
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Todo lo que necesitas para hacer crecer tu PYME, organizado y listo para implementar
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <a href="/guias" className="bg-white p-8 rounded-2xl shadow-lg border border-green-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-green-600 to-emerald-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Guías Completas</h3>
                <p className="text-slate-600 text-sm mb-6">41 guías paso-a-paso. Instrucciones exactas que puedes seguir hoy mismo, sin experiencia técnica.</p>
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Acceso Total Gratis
                </div>
              </a>
              
              <a href="/recursos" className="bg-white p-8 rounded-2xl shadow-lg border border-blue-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-cyan-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-6xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Recursos Listos</h3>
                <p className="text-slate-600 text-sm mb-6">Scripts, plantillas y herramientas. Copia, pega y adapta todo sin costo.</p>
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  ✓ Descarga Gratis
                </div>
              </a>
              
              <a href="/cursos" className="bg-white p-8 rounded-2xl shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-orange-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg">
                  EN DESARROLLO
                </div>
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Cursos Gratuitos</h3>
                <p className="text-slate-600 text-sm mb-6">Sistema completo de marketing digital (también gratis, en desarrollo).</p>
                <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  🔨 Trabajando en ello
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
