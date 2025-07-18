// LLM-OPTIMIZED: Página de términos y privacidad para AQXION
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Privacidad | AQXION",
  description: "Términos de servicio y política de privacidad de AQXION. Transparencia total en el uso de datos para automatización IA.",
  robots: "noindex",
};

export default function TerminosPrivacidadPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Términos de Servicio y Política de Privacidad
          </h1>
          
          <p className="text-center mb-12 text-lg text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Términos de Servicio</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Servicios de Automatización IA</h3>
                <p>AQXION proporciona servicios de automatización IA incluyendo agentes autónomos, campañas automatizadas y consultoría estratégica.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Responsabilidades</h3>
                <p>El cliente se compromete a proporcionar información precisa y cumplir con todas las leyes aplicables.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Política de Privacidad</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Datos y IA</h3>
                <p>Procesamos datos de forma segura bajo estrictos protocolos de privacidad para nuestros servicios de automatización IA.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Sus Derechos</h3>
                <p>Puede acceder, rectificar o solicitar eliminación de sus datos contactando legal@aqxion.com</p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contacto</h2>
            <p className="mb-4 text-gray-700">Para consultas legales: legal@aqxion.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
