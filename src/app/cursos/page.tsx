import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50/40">
      
      {/* Hero siguiendo la vibe: problem-focused, empathy-first */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50/40">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Subtitle siguiendo el pattern de empathy */}
            <p className="text-lg text-slate-600 mb-8">
              Cursos Gratuitos En Desarrollo
            </p>
            
            {/* H1 problem-focused, siguiendo exact pattern homepage */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
              ¿Necesitas Dominar el
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
                Marketing Digital?
              </span>
            </h1>
            
            {/* Benefit-focused subtitle siguiendo la vibe */}
            <p className="text-xl text-slate-600 mb-16 leading-relaxed max-w-3xl mx-auto">
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
            
            <div className="text-center mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8">
                Estado Actual del Proyecto
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Transparencia total: aquí está exactamente en qué estamos trabajando
              </p>
            </div>

            {/* Development Progress - Clear status siguiendo vibe honesty */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-12 mb-20">
              <div className="text-center">
                <div className="text-7xl mb-6">🔨</div>
                <h3 className="text-2xl font-bold text-amber-800 mb-6">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              
              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-6">🎯</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Sistema de Adquisición de Clientes
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Curso completo para generar leads constantes y convertirlos en clientes.
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  🔨 En desarrollo
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-6">🤖</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Automatización de Marketing
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Cómo automatizar tu marketing para trabajar menos y vender más.
                </p>
                <div className="text-sm text-amber-600 font-semibold">
                  🔨 En desarrollo
                </div>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-6">📈</div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Optimización de Conversiones
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
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

      {/* Final Action CTA - Unified */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Mientras Tanto, Empieza Hoy
            </h2>
            
            <p className="text-xl text-amber-100 mb-8 leading-relaxed">
              No esperes a los cursos. Con las guías y recursos actuales ya puedes <strong>transformar tu negocio</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/guias" 
                className="inline-flex items-center justify-center bg-white text-amber-700 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Empezar con las Guías
                <span className="ml-2">🚀</span>
              </Link>
              
              <Link 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-amber-700 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-amber-800 transition-all duration-200 shadow-lg hover:scale-105"
              >
                Ver Recursos Listos
                <span className="ml-2">⚡</span>
              </Link>
            </div>

            {/* Email signup minimalista */}
            <div className="border-t border-amber-500/30 pt-8">
              <p className="text-amber-200 mb-4 text-sm">
                ¿Te avisamos cuando estén listos los cursos?
              </p>
              <EmailSignup 
                page="cursos"
                buttonText="Sí, avísame"
                theme="amber"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
