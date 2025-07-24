import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio | AQXION',
  description: 'Términos y condiciones de uso de los servicios y contenido de AQXION. Conoce tus derechos y responsabilidades.',
  robots: 'index, follow',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/30">
      {/* Hero Section */}
      <section className="section-padding bg-white border-b">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              ⚖️ Términos Legales
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Términos de Servicio
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              Condiciones de uso de nuestros servicios y contenido
            </p>
            
            <p className="text-sm text-slate-500">
              Última actualización: 19 de enero, 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8 sm:p-12">
            
            {/* Introducción */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introducción y Aceptación</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Bienvenido a AQXION. Al acceder y utilizar nuestro sitio web, servicios y contenido, 
                  usted acepta estar sujeto a estos términos de servicio y todas las leyes y 
                  regulaciones aplicables.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Si no está de acuerdo con alguno de estos términos, le prohibimos utilizar 
                  o acceder a este sitio.
                </p>
              </div>
            </div>

            {/* Servicios */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Descripción de Servicios</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  AQXION proporciona:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-4">
                  <li>Guías educativas gratuitas para crecimiento empresarial</li>
                  <li>Recursos descargables (plantillas, herramientas)</li>
                  <li>Contenido educativo sobre marketing y ventas</li>
                  <li>Servicios de consultoría (cuando aplicable)</li>
                </ul>
                <p className="text-slate-600 leading-relaxed">
                  Nos reservamos el derecho de modificar o descontinuar cualquier servicio 
                  en cualquier momento sin previo aviso.
                </p>
              </div>
            </div>

            {/* Uso Aceptable */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Uso Aceptable</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Está permitido:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-6">
                  <li>Descargar y utilizar nuestros recursos para fines comerciales legítimos</li>
                  <li>Compartir nuestro contenido con atribución apropiada</li>
                  <li>Implementar las estrategias descritas en nuestras guías</li>
                </ul>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Está prohibido:</strong>
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li>Revender nuestro contenido gratuito como propio</li>
                  <li>Utilizar nuestros servicios para actividades ilegales</li>
                  <li>Copiar íntegramente nuestro contenido sin autorización</li>
                  <li>Interferir con el funcionamiento del sitio web</li>
                </ul>
              </div>
            </div>

            {/* Propiedad Intelectual */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Propiedad Intelectual</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos, 
                  íconos, imágenes, clips de audio, downloads digitales y compilaciones de datos, 
                  es propiedad de AQXION y está protegido por las leyes de derechos de autor.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Los recursos marcados como "gratuitos" pueden ser utilizados para fines 
                  comerciales con atribución apropiada a AQXION.
                </p>
              </div>
            </div>

            {/* Limitaciones de Responsabilidad */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Limitaciones de Responsabilidad</h2>
              <div className="prose prose-slate max-w-none">
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-amber-800 mb-2">⚠️ Aviso Importante</h3>
                  <p className="text-amber-700 text-sm">
                    El contenido se proporciona únicamente con fines informativos y educativos. 
                    No constituye asesoramiento profesional específico.
                  </p>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Sin Garantías de Resultados:</strong> No garantizamos resultados específicos, 
                  niveles de ingresos o éxito comercial. Los resultados dependen de múltiples factores 
                  incluyendo esfuerzo personal, condiciones del mercado y implementación correcta.
                </p>
                
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Limitación de Daños:</strong> AQXION no será responsable por daños directos, 
                  indirectos, incidentales, especiales o consecuenciales que resulten del uso de 
                  nuestros servicios o contenido.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  <strong>Decisiones Comerciales:</strong> Usted es totalmente responsable de evaluar 
                  la idoneidad de nuestro contenido para sus circunstancias específicas y de consultar 
                  con profesionales cualificados antes de tomar decisiones comerciales importantes.
                </p>
              </div>
            </div>

            {/* Privacidad y Datos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Privacidad y Protección de Datos</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Su privacidad es importante para nosotros. Consulte nuestra{' '}
                  <a href="/privacidad" className="text-green-600 hover:underline font-medium">
                    Política de Privacidad
                  </a>{' '}
                  para información detallada sobre cómo recopilamos, usamos y protegemos sus datos personales.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  Al utilizar nuestros servicios, usted consiente al procesamiento de sus datos 
                  de acuerdo con nuestra política de privacidad y las leyes aplicables de protección de datos.
                </p>
              </div>
            </div>

            {/* Modificaciones */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Modificaciones a los Términos</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nos reservamos el derecho de revisar estos términos en cualquier momento. 
                  Las modificaciones serán efectivas inmediatamente después de su publicación en el sitio web.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  Su uso continuado del sitio después de dichas modificaciones constituirá 
                  su aceptación de los términos revisados.
                </p>
              </div>
            </div>

            {/* Jurisdicción */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Ley Aplicable y Jurisdicción</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Estos términos se rigen por las leyes de España y la Unión Europea. 
                  Cualquier disputa será resuelta en los tribunales competentes de España.
                </p>
                
                <p className="text-slate-600 leading-relaxed">
                  Si alguna disposición de estos términos se considera inválida o inaplicable, 
                  las disposiciones restantes seguirán en pleno vigor y efecto.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-slate-50 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-4">¿Preguntas sobre estos Términos?</h3>
              <p className="text-slate-600 mb-6">
                Si tiene preguntas sobre estos términos de servicio, contáctenos:
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:deal@aqxion.com"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  📧 deal@aqxion.com
                </a>
                <p className="text-sm text-slate-500">
                  Respuesta en 24-48 horas laborables
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
