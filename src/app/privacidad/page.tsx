import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - AQXION',
  description: 'Política de privacidad y manejo de datos de AQXION',
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Política de Privacidad
          </h1>
          
          <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Información que recopilamos</h2>
              <p className="text-gray-600 mb-4">
                En AQXION recopilamos información que nos proporcionas directamente, como:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Información de registro (nombre, email, empresa)</li>
                <li>• Información de contacto y comunicación</li>
                <li>• Datos de uso de nuestros servicios</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Cómo usamos tu información</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos tu información para:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Proporcionar y mejorar nuestros servicios</li>
                <li>• Comunicarnos contigo sobre tu cuenta y servicios</li>
                <li>• Personalizar tu experiencia</li>
                <li>• Cumplir con obligaciones legales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Protección de datos</h2>
              <p className="text-gray-600">
                Implementamos medidas de seguridad técnicas y organizativas para proteger 
                tu información personal contra acceso no autorizado, alteración, divulgación 
                o destrucción.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Tus derechos</h2>
              <p className="text-gray-600">
                Tienes derecho a acceder, corregir, eliminar o transferir tu información personal. 
                Para ejercer estos derechos, contáctanos en privacy@aqxion.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Contacto</h2>
              <p className="text-gray-600">
                Si tienes preguntas sobre esta política de privacidad, contáctanos en:
                <br />
                Email: privacy@aqxion.com
                <br />
                Última actualización: Enero 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}