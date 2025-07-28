import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DMCA - Derechos de Autor - AQXION',
  description: 'Política DMCA de derechos de autor de AQXION',
}

export default function DMCAPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header de navegación */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="text-lg sm:text-xl font-medium text-gray-900 hover:text-peru-red transition-colors duration-200"
            >
              AQXION
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-peru-red transition-colors duration-200 flex items-center gap-2"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-8 text-center">
            DMCA - Derechos de Autor
          </h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-800 font-medium">
                🛡️ AQXION respeta los derechos de propiedad intelectual conforme al Digital Millennium Copyright Act (DMCA)
              </p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Política de Derechos de Autor
              </h2>
              <p className="text-gray-600 mb-4">
                AQXION respeta los derechos de propiedad intelectual de terceros y espera que nuestros 
                usuarios hagan lo mismo. Responderemos a notificaciones de presunta infracción de 
                derechos de autor que cumplan con la DMCA.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Procedimiento de Notificación
              </h2>
              <p className="text-gray-600 mb-4">
                Si crees que tu trabajo protegido por derechos de autor ha sido infringido, 
                proporciona la siguiente información a nuestro agente designado:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Una firma física o electrónica del propietario de los derechos de autor</li>
                <li>• Identificación del trabajo protegido por derechos de autor que se alega ha sido infringido</li>
                <li>• Identificación del material que se alega infringe y su ubicación</li>
                <li>• Su información de contacto (dirección, teléfono y email)</li>
                <li>• Una declaración de buena fe de que el uso no está autorizado</li>
                <li>• Una declaración bajo pena de perjurio de que la información es exacta</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Agente Designado para Notificaciones DMCA
              </h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="space-y-3 text-gray-600">
                  <p><strong>Nombre:</strong> Agente DMCA - AQXION</p>
                  <p><strong>Email:</strong> <a href="mailto:dmca@aqxion.com" className="text-peru-red hover:underline">dmca@aqxion.com</a></p>
                  <p><strong>Dirección:</strong> Lima, Perú</p>
                  <p><strong>Teléfono:</strong> [Número de teléfono]</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Formulario de Notificación DMCA
              </h2>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm font-medium">🛡️</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Notificación Legal DMCA</h3>
                    <p className="text-sm text-gray-600">
                      Esta notificación se presenta bajo pena de perjurio conforme al Digital Millennium Copyright Act.
                    </p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nombre Completo <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Dirección <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Teléfono <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción del Trabajo Protegido <span className="text-peru-red">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 h-24 resize-none"
                    placeholder="Describe el trabajo protegido por derechos de autor que alega ha sido infringido"
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    URL del Material Infractor <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    placeholder="https://ejemplo.com/material-infractor"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción de la Infracción <span className="text-peru-red">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 h-32 resize-none"
                    placeholder="Explica cómo se está infringiendo tu trabajo protegido"
                    required
                  ></textarea>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h4 className="font-medium text-amber-800 mb-2">Declaraciones Legales Requeridas</h4>
                  <p className="text-sm text-amber-700">
                    Las siguientes declaraciones son obligatorias conforme al DMCA:
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Declaro bajo pena de perjurio que tengo una creencia de buena fe de que el uso del material 
                      descrito no está autorizado por el propietario de los derechos de autor, su agente o la ley. <span className="text-peru-red">*</span>
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Declaro bajo pena de perjurio que la información en esta notificación es exacta y que 
                      soy el propietario de los derechos de autor o estoy autorizado para actuar en nombre del propietario. <span className="text-peru-red">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span>Enviar Notificación DMCA</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Contranotificación
              </h2>
              <p className="text-gray-600 mb-4">
                Si su contenido fue eliminado por error o identificación errónea, puede presentar 
                una contranotificación. El proceso incluye proporcionar:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Su firma física o electrónica</li>
                <li>• Identificación del material eliminado y su ubicación anterior</li>
                <li>• Una declaración bajo pena de perjurio de buena fe</li>
                <li>• Su información de contacto y consentimiento a la jurisdicción</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Política de Infracciones Repetidas
              </h2>
              <p className="text-gray-600">
                AQXION se reserva el derecho de terminar las cuentas de usuarios que sean 
                infractores repetidos de derechos de autor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
