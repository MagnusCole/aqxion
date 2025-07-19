export default function CursosPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Work in Progress */}
      <section className="section-padding bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container-padding">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Badge Work in Progress */}
            <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full mb-8 shadow-lg">
              <svg className="w-6 h-6 mr-3 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-lg">WORK IN PROGRESS</span>
            </div>
            
            <div className="text-6xl mb-8">🚧</div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 mb-8 tracking-tight leading-tight">
              Cursos
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                en Desarrollo
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
              Estamos creando cursos <strong>súper prácticos</strong> para que domines el marketing digital 
              y consigas clientes de forma <span className="text-purple-600">sistemática y predecible.</span>
            </p>

            {/* What's Coming Preview */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-purple-200 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">🎯 Lo que estamos preparando:</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">📈</div>
                    <h4 className="font-bold text-purple-900">Marketing Sistema</h4>
                  </div>
                  <p className="text-sm text-purple-700">
                    Sistema completo para conseguir clientes predeciblemente. Desde 0 hasta $10K/mes.
                  </p>
                  <div className="mt-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full inline-block">
                    Listo en 30 días
                  </div>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-200">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">🤖</div>
                    <h4 className="font-bold text-indigo-900">IA para Negocios</h4>
                  </div>
                  <p className="text-sm text-indigo-700">
                    Automatiza marketing, ventas y operaciones con IA. Ahorra 20+ horas por semana.
                  </p>
                  <div className="mt-2 text-xs bg-indigo-200 text-indigo-800 px-2 py-1 rounded-full inline-block">
                    En desarrollo
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">💰</div>
                    <h4 className="font-bold text-green-900">Escalado Inteligente</h4>
                  </div>
                  <p className="text-sm text-green-700">
                    De $10K a $100K/mes sin quemar efectivo. Equity, partnerships y growth hacking.
                  </p>
                  <div className="mt-2 text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full inline-block">
                    Planificando
                  </div>
                </div>
                
                <div className="p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="flex items-center mb-3">
                    <div className="text-2xl mr-3">🎯</div>
                    <h4 className="font-bold text-orange-900">Casos Reales</h4>
                  </div>
                  <p className="text-sm text-orange-700">
                    Análisis paso a paso de negocios que escalaron de 0 a 6 cifras en 12 meses.
                  </p>
                  <div className="mt-2 text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full inline-block">
                    Investigando
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section className="section-padding bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="text-4xl mb-6">🚀</div>
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Quieres Acceso Anticipado?
            </h2>
            
            <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
              Los primeros <strong>100 usuarios</strong> tendrán acceso gratuito a todos los cursos 
              mientras los desarrollamos. <span className="text-purple-400">Solo necesitas implementar y darnos feedback.</span>
            </p>

            <div className="bg-white/10 p-8 rounded-2xl mb-8 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">🎁 Beneficios Early Access:</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Acceso gratuito de por vida</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Feedback directo con fundadores</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Casos de estudio exclusivos</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Comunidad privada</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:cursos@aqxion.com?subject=Quiero%20acceso%20anticipado%20a%20cursos&body=Hola!%20Quiero%20ser%20parte%20del%20early%20access%20de%20cursos.%0A%0AMi%20negocio:%0AFacturación%20actual:%0APrincipal%20desafío:" 
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 text-lg font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Quiero Acceso Anticipado
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg"
              >
                Mientras tanto, ve nuestras Guías
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </div>
            
            <div className="mt-8 text-sm text-neutral-400">
              <p>
                📧 <strong>cursos@aqxion.com</strong> • 
                💬 Solo 47 espacios disponibles
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
                🗓️ Roadmap de Desarrollo
              </h2>
              <p className="text-lg text-neutral-600">
                Transparencia total sobre cuándo estará listo cada curso
              </p>
            </div>

            <div className="space-y-8">
              {/* Enero 2025 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-green-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    AGO 2025
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      📈 Marketing Sistema - BETA
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Sistema completo de marketing digital para PYMEs. Desde lead generation hasta automatización de ventas.
                    </p>
                    <div className="flex items-center text-sm text-green-600">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>En desarrollo activo</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Febrero 2025 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    SEP 2025
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">
                      🤖 IA para Negocios
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Automatización completa con IA: marketing, ventas, customer service y operaciones.
                    </p>
                    <div className="flex items-center text-sm text-blue-600">
                      <svg className="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Investigando herramientas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Marzo 2025 */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-purple-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    OCT 2025
                  </div>
                </div>
                <div className="ml-6 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-purple-800 mb-2">
                      💰 Escalado Inteligente
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      Growth hacking, partnerships estratégicos y modelos de equity para escalar sin quemar efectivo.
                    </p>
                    <div className="flex items-center text-sm text-purple-600">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span>En planificación</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-full inline-block">
                <span className="font-bold">⚡ Actualizaciones cada semana en el blog</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container-padding text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-4xl mb-6">🎯</div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              ¿Tu negocio no puede esperar?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Si necesitas resultados <strong>ahora mismo</strong>, nuestras guías y recursos 
              ya están disponibles para implementar hoy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/recursos" 
                className="inline-flex items-center justify-center bg-white text-neutral-900 px-8 py-4 text-lg font-bold rounded-xl hover:bg-neutral-50 transition-all duration-200 shadow-lg"
              >
                Ver Recursos Disponibles
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <a 
                href="/blog" 
                className="inline-flex items-center justify-center bg-green-800 text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-green-900 transition-all duration-200 shadow-lg"
              >
                Leer Guías Completas
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
