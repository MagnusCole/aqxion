import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad - AQXION',
  description: 'Política de privacidad y manejo de datos de AQXION',
}

export default function PrivacidadPage() {
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

      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center animate-in slide-in-from-top duration-700">
            Política de Privacidad
          </h1>
          
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 lg:space-y-10 animate-in slide-in-from-bottom duration-700 delay-200">
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 border border-gray-100 shadow-sm">
              <p className="text-xs sm:text-sm text-gray-500 font-medium">
                📅 Última actualización: 28 de julio de 2025
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xs sm:text-sm font-medium">📊</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">1. Información que recopilamos</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                En AQXION recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
                <li>• Te registras para una consulta estratégica</li>
                <li>• Nos contactas a través de formularios o email</li>
                <li>• Utilizas nuestros servicios de marketing digital</li>
                <li>• Navegas por nuestro sitio web (cookies y análisis)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 text-xs sm:text-sm font-medium">⚡</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">2. Cómo usamos tu información</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
                <li>• Proporcionar consultas estratégicas personalizadas</li>
                <li>• Desarrollar soluciones digitales para tu MYPE</li>
                <li>• Comunicarnos contigo sobre servicios y actualizaciones</li>
                <li>• Mejorar nuestros servicios basado en tu feedback</li>
                <li>• Cumplir con obligaciones legales y contractuales</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-peru-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-peru-red text-xs sm:text-sm font-medium">🔒</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">3. Protección de datos</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger 
                tu información personal contra acceso no autorizado, alteración, divulgación 
                o destrucción. Esto incluye:
              </p>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
                <li>• Encriptación de datos sensibles</li>
                <li>• Acceso restringido solo a personal autorizado</li>
                <li>• Monitoreo continuo de seguridad</li>
                <li>• Respaldo seguro de información</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 text-xs sm:text-sm font-medium">⚖️</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">4. Tus derechos</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Bajo la Ley de Protección de Datos Personales del Perú, tienes derecho a:
              </p>
              <ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2 ml-4">
                <li>• Acceder a tu información personal</li>
                <li>• Corregir datos inexactos o incompletos</li>
                <li>• Eliminar tu información (derecho al olvido)</li>
                <li>• Transferir tus datos a otro proveedor</li>
                <li>• Oponerte al procesamiento de tus datos</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:privacidad@aqxion.com" className="text-peru-red hover:underline font-medium">privacidad@aqxion.com</a>
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 text-xs sm:text-sm font-medium">🍪</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">5. Cookies y tecnologías similares</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes 
                gestionar las preferencias de cookies a través del banner de consentimiento.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-gray-600 text-xs sm:text-sm font-medium">⏰</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">6. Retención de datos</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600">
                Conservamos tu información personal solo el tiempo necesario para cumplir 
                los propósitos para los cuales fue recopilada, o según lo requiera la ley.
              </p>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-7 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-start space-x-3 mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-peru-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-peru-red text-xs sm:text-sm font-medium">📧</span>
                </div>
                <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">7. Contacto</h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                Si tienes preguntas sobre esta política de privacidad, contáctanos:
              </p>
              <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-600">
                <p>Email: <a href="mailto:privacidad@aqxion.com" className="text-peru-red hover:underline font-medium">privacidad@aqxion.com</a></p>
                <p>Responsable: AQXION S.A.C.</p>
                <p>Dirección: Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}