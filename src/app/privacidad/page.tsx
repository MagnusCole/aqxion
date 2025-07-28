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

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8">
            <p className="text-sm text-gray-500">
              Última actualización: 28 de julio de 2025
            </p>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-600 mb-4">
                En AQXION recopilamos información que nos proporcionas directamente cuando:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Te registras para una consulta estratégica</li>
                <li>• Nos contactas a través de formularios o email</li>
                <li>• Utilizas nuestros servicios de marketing digital</li>
                <li>• Navegas por nuestro sitio web (cookies y análisis)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">2. Cómo usamos tu información</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Proporcionar consultas estratégicas personalizadas</li>
                <li>• Desarrollar soluciones digitales para tu MYPE</li>
                <li>• Comunicarnos contigo sobre servicios y actualizaciones</li>
                <li>• Mejorar nuestros servicios basado en tu feedback</li>
                <li>• Cumplir con obligaciones legales y contractuales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">3. Protección de datos</h2>
              <p className="text-gray-600 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger 
                tu información personal contra acceso no autorizado, alteración, divulgación 
                o destrucción. Esto incluye:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Encriptación de datos sensibles</li>
                <li>• Acceso restringido solo a personal autorizado</li>
                <li>• Monitoreo continuo de seguridad</li>
                <li>• Respaldo seguro de información</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">4. Tus derechos</h2>
              <p className="text-gray-600 mb-4">
                Bajo la Ley de Protección de Datos Personales del Perú, tienes derecho a:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Acceder a tu información personal</li>
                <li>• Corregir datos inexactos o incompletos</li>
                <li>• Eliminar tu información (derecho al olvido)</li>
                <li>• Transferir tus datos a otro proveedor</li>
                <li>• Oponerte al procesamiento de tus datos</li>
              </ul>
              <p className="text-gray-600 mt-4">
                Para ejercer estos derechos, contáctanos en: <a href="mailto:privacidad@aqxion.com" className="text-peru-red hover:underline">privacidad@aqxion.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">5. Cookies y tecnologías similares</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes 
                gestionar las preferencias de cookies a través del banner de consentimiento.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">6. Retención de datos</h2>
              <p className="text-gray-600 mb-4">
                Conservamos tu información personal solo el tiempo necesario para cumplir 
                los propósitos para los cuales fue recopilada, o según lo requiera la ley.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">7. Contacto</h2>
              <p className="text-gray-600">
                Si tienes preguntas sobre esta política de privacidad, contáctanos:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:privacidad@aqxion.com" className="text-peru-red hover:underline">privacidad@aqxion.com</a></p>
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