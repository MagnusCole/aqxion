'use client';

export default function Home() {
  return (
    <>
      {/* Hero elegante y simple */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNnYxMmgtMTJ6Ci8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* H1 elegante */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Tu PYME Necesita
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                Más Clientes?
              </span>
            </h1>
            
            {/* Subtitle elegante y simple */}
            <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Recursos 100% Gratuitos</strong> para conseguir más clientes.
            </p>
            
            {/* CTA simple y elegante */}
            <div className="mb-20">
              <a 
                href="#guides" 
                className="inline-flex items-center bg-green-600 text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Ver Todas las Guías
              </a>
            </div>
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
            
            <div className="grid md:grid-cols-3 gap-10 mb-20">
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-10 text-center">
                <div className="text-7xl mb-6">😰</div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">No llegan clientes</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Tu negocio está listo pero los clientes no te encuentran o no confían lo suficiente.</p>
                <div className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-sm font-semibold">
                  Solución: Lead Generation
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-2xl p-10 text-center">
                <div className="text-7xl mb-6">💸</div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Publicidad Cara</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Gastas en ads pero no ves retorno. El dinero se va y los clientes no llegan.</p>
                <div className="bg-emerald-600 text-white px-6 py-3 rounded-lg text-sm font-semibold">
                  Solución: Estrategias Sin Presupuesto
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-10 text-center">
                <div className="text-7xl mb-6">⏰</div>
                <h3 className="text-xl font-bold text-slate-800 mb-6">Falta Tiempo</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">No tienes tiempo para marketing complejo. Necesitas algo simple y efectivo.</p>
                <div className="bg-teal-600 text-white px-6 py-3 rounded-lg text-sm font-semibold">
                  Solución: Automatización Simple
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-slate-50 to-blue-50 p-12 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                <strong>Todos pasamos por esto.</strong>
              </h3>
              <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto leading-relaxed">
                Por eso creamos guías que realmente funcionan. Step-by-step. Sin tecnicismos. Implementables hoy.
              </p>
              <a 
                href="/guias" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
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
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
              <a href="/guias" className="bg-white p-10 rounded-2xl shadow-lg border border-green-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1 group">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-600 to-teal-600 text-white px-4 py-2 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Guías Completas</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Guías paso-a-paso. Instrucciones exactas que puedes seguir hoy mismo, sin experiencia técnica.</p>
                <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-3 rounded-lg text-sm font-semibold">
                  ✓ Acceso Total Gratis
                </div>
              </a>
              
              <a href="/recursos" className="bg-white p-10 rounded-2xl shadow-lg border border-blue-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1 group">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-cyan-600 text-white px-4 py-2 text-xs font-bold rounded-bl-lg">
                  100% GRATIS
                </div>
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Recursos Listos</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Scripts, plantillas y herramientas. Copia, pega y adapta todo sin costo.</p>
                <div className="bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-lg text-sm font-semibold">
                  ✓ Descarga Gratis
                </div>
              </a>
              
              <a href="/cursos" className="bg-white p-10 rounded-2xl shadow-lg border border-amber-200 text-center hover:shadow-xl transition-all duration-300 relative overflow-hidden cursor-pointer hover:-translate-y-1 group">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-600 to-orange-600 text-white px-4 py-2 text-xs font-bold rounded-bl-lg">
                  EN DESARROLLO
                </div>
                <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Cursos Gratuitos</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">Sistema completo de marketing digital (también gratis, en desarrollo).</p>
                <div className="bg-amber-50 border border-amber-200 text-amber-700 px-6 py-3 rounded-lg text-sm font-semibold">
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
