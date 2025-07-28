import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - AQXION',
  description: 'Términos y condiciones del servicio AQXION',
}

export default function TermsPage() {
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
            Términos y Condiciones
          </h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8">
            <p className="text-sm text-gray-500">
              Última actualización: 28 de julio de 2025
            </p>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-gray-600 mb-4">
                Al acceder y utilizar los servicios de AQXION, usted acepta estar sujeto a estos 
                términos y condiciones. Si no está de acuerdo con estos términos, no utilice nuestros servicios.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                2. Descripción del Servicio
              </h2>
              <p className="text-gray-600 mb-4">
                AQXION proporciona servicios de consultoría en marketing digital y desarrollo 
                de presencia digital para micro y pequeñas empresas (MYPEs) en Perú.
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Consultas estratégicas gratuitas</li>
                <li>• Desarrollo de sitios web y landing pages</li>
                <li>• Campañas de marketing digital</li>
                <li>• Gestión de redes sociales</li>
                <li>• Optimización para motores de búsqueda (SEO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                3. Responsabilidades del Usuario
              </h2>
              <p className="text-gray-600 mb-4">
                Al utilizar nuestros servicios, usted se compromete a:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Proporcionar información veraz y actualizada</li>
                <li>• No utilizar los servicios para fines ilegales</li>
                <li>• Respetar los derechos de propiedad intelectual</li>
                <li>• Mantener la confidencialidad de sus credenciales</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                4. Propiedad Intelectual
              </h2>
              <p className="text-gray-600 mb-4">
                Todos los contenidos, diseños, código y materiales desarrollados por AQXION 
                permanecen bajo nuestra propiedad intelectual hasta el pago completo del servicio.
                Una vez completado el pago, se transfieren los derechos de uso al cliente.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                5. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-600 mb-4">
                AQXION no será responsable por daños indirectos, incidentales o consecuenciales 
                que puedan surgir del uso de nuestros servicios. Nuestra responsabilidad total 
                no excederá el monto pagado por el servicio específico.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                6. Modificaciones
              </h2>
              <p className="text-gray-600 mb-4">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. 
                Las modificaciones entrarán en vigor inmediatamente después de su publicación 
                en nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                7. Ley Aplicable
              </h2>
              <p className="text-gray-600 mb-4">
                Estos términos se rigen por las leyes de la República del Perú. 
                Cualquier disputa será resuelta en los tribunales de Lima, Perú.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                8. Contacto
              </h2>
              <p className="text-gray-600">
                Para preguntas sobre estos términos, contáctanos:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:legal@aqxion.com" className="text-peru-red hover:underline">legal@aqxion.com</a></p>
                <p>Empresa: AQXION S.A.C.</p>
                <p>Dirección: Lima, Perú</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
