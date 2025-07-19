import Link from 'next/link';
import EmailSignup from '@/components/EmailSignup';

export default function CursosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50/40">
      
      {/* Hero simple y directo */}
      <section className="section-padding bg-gradient-to-br from-amber-50 via-white to-orange-50/40">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <p className="text-lg text-slate-600 mb-8">
              Cursos Gratuitos En Desarrollo
            </p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-12 leading-tight tracking-tight">
              ¿Necesitas 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700">
                Dominar Marketing?
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-16 leading-relaxed">
              <strong className="text-slate-800">Buenos cursos están llegando.</strong>
              <br />Te ayudarán con tus 3 problemas principales.
            </p>
            
          </div>
        </div>
      </section>

      {/* Main content simple */}
      <section className="bg-white section-padding">
        <div className="container">
          <div className="max-w-5xl mx-auto">

            {/* Status simple */}
            <div className="text-center mb-20">
              <div className="text-8xl mb-8">🔨</div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">
                En Desarrollo
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Estamos creando cursos que resuelvan tus problemas reales.
                <br />Como siempre, serán 100% gratuitos.
              </p>
            </div>

            {/* Los 3 pain points simples */}
            <div className="text-center mb-20">
              <h3 className="text-2xl font-bold text-slate-800 mb-12">
                Te Ayudarán Con:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-8">
                  <div className="text-5xl mb-4">🎯</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    Conseguir Clientes
                  </h4>
                  <p className="text-slate-600">
                    Si no tienes suficientes clientes
                  </p>
                </div>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                  <div className="text-5xl mb-4">💸</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    Gastar Menos
                  </h4>
                  <p className="text-slate-600">
                    Si gastas mucho en marketing
                  </p>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
                  <div className="text-5xl mb-4">⏰</div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">
                    Ahorrar Tiempo
                  </h4>
                  <p className="text-slate-600">
                    Si te falta tiempo para todo
                  </p>
                </div>

              </div>
            </div>

            {/* Timeline honesto */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center mb-20">
              <p className="text-amber-700 text-lg">
                <strong>¿Cuándo estarán listos?</strong> No lo sabemos exactamente.
                <br />Mientras tanto, tienes contenido gratuito que ya funciona.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
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
