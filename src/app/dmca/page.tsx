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
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dirección *
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del Trabajo Protegido *
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent h-24 resize-none"
                    placeholder="Describe el trabajo protegido por derechos de autor que alega ha sido infringido"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL del Material Infractor *
                  </label>
                  <input 
                    type="url" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                    placeholder="https://ejemplo.com/material-infractor"
                    required 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción de la Infracción *
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent h-32 resize-none"
                    placeholder="Explica cómo se está infringiendo tu trabajo protegido"
                    required
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-gray-600">
                      Declaro bajo pena de perjurio que tengo una creencia de buena fe de que el uso del material 
                      descrito no está autorizado por el propietario de los derechos de autor, su agente o la ley.
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-gray-600">
                      Declaro bajo pena de perjurio que la información en esta notificación es exacta y que 
                      soy el propietario de los derechos de autor o estoy autorizado para actuar en nombre del propietario.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl"
                >
                  Enviar Notificación DMCA
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
