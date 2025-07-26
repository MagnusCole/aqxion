import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | MyPerú',
  description: 'Términos y condiciones del servicio MyPerú',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Términos y Condiciones
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              Última actualización: 24 de julio de 2025
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              1. Aceptación de los Términos
            </h2>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar los servicios de MyPerú, usted acepta estar sujeto a estos términos y condiciones.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              2. Descripción del Servicio
            </h2>
            <p className="text-gray-700 mb-4">
              MyPerú proporciona servicios de marketing digital y crecimiento empresarial para MYPES.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              3. Responsabilidades del Usuario
            </h2>
            <p className="text-gray-700 mb-4">
              El usuario se compromete a utilizar los servicios de manera responsable y conforme a la ley.
            </p>
            
            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">
              4. Contacto
            </h2>
            <p className="text-gray-700">
              Para consultas sobre estos términos, contacte: legal@myperu.pe
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
