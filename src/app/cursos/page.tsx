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
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 text-center mb-16">
              <p className="text-amber-700 text-lg">
                <strong>¿Cuándo estarán listos?</strong> No lo sabemos exactamente.
                <br />Mientras tanto, tienes 41 guías gratuitas que ya funcionan.
              </p>
            </div>

            {/* Call to action simple */}
            <div className="text-center">
              <Link
                href="/guias"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-bold text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                Ver Guías Disponibles Ahora
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Navigation unificada */}
      <section className="section-padding bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              
              {/* Left: Cross-link a Guías */}
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Guías Listas
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  41 guías step-by-step ya funcionan
                </p>
                <Link 
                  href="/guias"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Ver Guías
                </Link>
              </div>

              {/* Center: Email signup */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Acceso Anticipado
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Te avisamos cuando estén listos, sin spam
                </p>
                <EmailSignup 
                  page="cursos"
                  buttonText="Avisar Cuando Esté"
                  theme="amber"
                />
              </div>

              {/* Right: Cross-link a Resources */}
              <div className="text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Templates Listos
                </h3>
                <p className="text-gray-300 mb-6 text-sm">
                  Acelera con recursos descargables
                </p>
                <Link 
                  href="/recursos"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200"
                >
                  Ver Recursos
                </Link>
              </div>

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
            
            <p className="text-xl text-amber-50 mb-12">
              Tienes 41 guías gratuitas y templates listos para implementar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guias"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 rounded-xl font-bold text-lg hover:bg-amber-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                Ver Guías Gratuitas
              </Link>
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-amber-600 transition-all duration-200 hover:-translate-y-1"
              >
                Descargar Templates
              </Link>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
