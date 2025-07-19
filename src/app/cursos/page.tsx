import Link from 'next/link';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      
      {/* Hero siguiendo la vibe: problem-focused, empathy-first */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle siguiendo el pattern de empathy */}
            <p className="text-lg text-slate-600 mb-6">
              Cursos Gratuitos En Desarrollo
            </p>
            
            {/* H1 problem-focused, siguiendo exact pattern homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Necesitas Dominar el
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
                Marketing Digital?
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-800">Cursos step-by-step (también gratuitos, en desarrollo).</strong>
              <br />Sistema completo de marketing digital para PYMEs.
            </p>
          </div>
        </div>
      </section>

      {/* Development Status - Honesty siguiendo la vibe */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
                Estado Actual del Proyecto
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Transparencia total: aquí está exactamente en qué estamos trabajando
              </p>
            </div>

            {/* Development Progress - Clear status siguiendo vibe honesty */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 mb-16">
              <div className="text-center">
                <div className="text-6xl mb-4">🔨</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-4">
                  En Construcción Activa
                </h3>
                <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed">
                  Estamos desarrollando el sistema de cursos completo. Será 100% gratuito como todo nuestro contenido.
                  <br />
                  <strong>Timeline estimado: Pronto...</strong>
                </p>
              </div>
            </div>

            {/* What's Coming - Clear preview siguiendo vibe transparency */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Sistema de Adquisición de Clientes
                </h3>
                <p className="text-neutral-600 mb-4">
                  Curso completo para generar leads constantes y convertirlos en clientes.
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  🔨 En desarrollo
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Automatización de Marketing
                </h3>
                <p className="text-neutral-600 mb-4">
                  Cómo automatizar tu marketing para trabajar menos y vender más.
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  🔨 En desarrollo
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Optimización de Conversiones
                </h3>
                <p className="text-neutral-600 mb-4">
                  Convierte más visitantes en clientes con técnicas probadas.
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  🔨 En desarrollo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternatives - Problem-solving siguiendo vibe helpfulness */}
      <section className="section-padding bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Necesitas Resultados Ahora?
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Mientras desarrollamos los cursos, tienes opciones para empezar hoy:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              
              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3">
                  41 Guías Gratuitas (Listas)
                </h3>
                <p className="text-neutral-400 mb-4">
                  Implementa estrategias específicas con nuestras guías step-by-step.
                </p>
                <Link 
                  href="/guias" 
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Ver Guías
                  <span className="ml-2">✅</span>
                </Link>
              </div>

              <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">
                  Templates y Herramientas (Listos)
                </h3>
                <p className="text-neutral-400 mb-4">
                  Acelera tu implementación con recursos listos para usar.
                </p>
                <Link 
                  href="/recursos" 
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
                >
                  Ver Recursos
                  <span className="ml-2">⚡</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter/Updates - Stay connected siguiendo vibe community */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              ¿Quieres ser el Primero en Acceder?
            </h2>
            
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Te avisaremos en cuanto estén listos los primeros cursos (sin spam, prometido).
            </p>

            {/* Simple email signup siguiendo vibe simplicity */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 max-w-md mx-auto">
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200"
                >
                  Avísame cuando estén listos
                </button>
              </form>
              
              <p className="text-sm text-neutral-500 mt-4">
                Cero spam. Solo actualizaciones importantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final siguiendo vibe empowerment */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Mientras Tanto, Empieza Hoy
            </h2>
            
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              No esperes a los cursos. Con las guías y recursos actuales ya puedes transformar tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guias" 
                className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Empezar con las Guías
                <span className="ml-2">🚀</span>
              </Link>
              
              <Link 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-green-800 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Ver Recursos Listos
                <span className="ml-2">⚡</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
