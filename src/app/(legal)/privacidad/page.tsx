import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | AQXION',
  description: 'Política de privacidad y protección de datos de AQXION. Conoce cómo recopilamos, usamos y protegemos tu información personal.',
  robots: 'index, follow',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50/30">
      {/* Hero Section */}
      <section className="section-padding bg-white border-b">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🔒 Privacidad Protegida
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Política de Privacidad
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              Transparencia total sobre cómo manejamos tu información
            </p>
            
            <p className="text-sm text-slate-500">
              Última actualización: 19 de enero, 2025 • Compatible con GDPR
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
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introducción</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  En AQXION, respetamos y protegemos su privacidad. Esta política explica qué información 
                  personal recopilamos, cómo la utilizamos, compartimos y protegemos cuando utiliza 
                  nuestro sitio web y servicios.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 mb-2">🛡️ Nuestro Compromiso</h3>
                  <p className="text-green-700 text-sm">
                    Solo recopilamos información necesaria para brindarle el mejor servicio. 
                    Nunca vendemos sus datos personales a terceros.
                  </p>
                </div>
              </div>
            </div>

            {/* Información que Recopilamos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Información que Recopilamos</h2>
              <div className="prose prose-slate max-w-none">
                
                <h3 className="text-lg font-semibold text-slate-700 mb-3">2.1 Información que Proporciona Directamente</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-6">
                  <li><strong>Datos de Contacto:</strong> Nombre, email, teléfono (cuando se suscribe o contacta)</li>
                  <li><strong>Información Empresarial:</strong> Nombre del negocio, sector, tamaño de empresa</li>
                  <li><strong>Preferencias:</strong> Intereses de contenido, preferencias de comunicación</li>
                  <li><strong>Consultas:</strong> Mensajes y preguntas que nos envía</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">2.2 Información Recopilada Automáticamente</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-6">
                  <li><strong>Datos de Navegación:</strong> Páginas visitadas, tiempo de permanencia, referrals</li>
                  <li><strong>Información Técnica:</strong> Dirección IP, tipo de navegador, dispositivo</li>
                  <li><strong>Cookies:</strong> Según sus preferencias de consentimiento de cookies</li>
                  <li><strong>Analytics:</strong> Métricas de uso del sitio web (cuando consiente)</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">2.3 Información de Terceros</h3>
                <p className="text-slate-600 leading-relaxed">
                  Podemos recibir información de plataformas de redes sociales cuando interactúa 
                  con nuestro contenido o servicios de analytics que utilizamos (solo con su consentimiento).
                </p>
              </div>
            </div>

            {/* Cómo Usamos la Información */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Cómo Usamos su Información</h2>
              <div className="prose prose-slate max-w-none">
                
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3">📧 Comunicación</h3>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Enviar guías y recursos solicitados</li>
                      <li>• Newsletter con contenido relevante</li>
                      <li>• Responder consultas y soporte</li>
                      <li>• Notificaciones de actualizaciones</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3">📊 Mejora del Servicio</h3>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Personalizar contenido relevante</li>
                      <li>• Mejorar experiencia del usuario</li>
                      <li>• Desarrollar nuevos recursos</li>
                      <li>• Análisis de rendimiento del sitio</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">3.1 Base Legal para el Procesamiento (GDPR)</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                  <li><strong>Consentimiento:</strong> Para marketing, cookies no esenciales y analytics</li>
                  <li><strong>Interés Legítimo:</strong> Para mejorar nuestros servicios y prevenir fraude</li>
                  <li><strong>Ejecución de Contrato:</strong> Para proporcionar servicios solicitados</li>
                  <li><strong>Obligación Legal:</strong> Para cumplir con requisitos legales aplicables</li>
                </ul>
              </div>
            </div>

            {/* Cookies y Tecnologías de Seguimiento */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Cookies y Tecnologías de Seguimiento</h2>
              <div className="prose prose-slate max-w-none">
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-amber-800 mb-2">🍪 Control Total de Cookies</h3>
                  <p className="text-amber-700 text-sm">
                    Usted tiene control completo sobre las cookies. Puede modificar sus preferencias 
                    en cualquier momento a través de nuestro banner de cookies.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">Tipos de Cookies que Utilizamos:</h3>
                
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">🔧 Cookies Estrictamente Necesarias</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Propósito:</strong> Funcionamiento básico del sitio web
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Duración:</strong> Sesión y hasta 1 año
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Base Legal:</strong> Interés legítimo (siempre activas)
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">📊 Cookies Analíticas</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Propósito:</strong> Análisis de rendimiento y mejoras del sitio
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Duración:</strong> Hasta 2 años
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Base Legal:</strong> Consentimiento (Google Analytics)
                    </p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-semibold text-slate-700 mb-2">🎯 Cookies de Marketing</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Propósito:</strong> Personalización de contenido y publicidad
                    </p>
                    <p className="text-sm text-slate-600 mb-2">
                      <strong>Duración:</strong> Hasta 1 año
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Base Legal:</strong> Consentimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compartir Información */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">5. Compartir y Divulgación de Información</h2>
              <div className="prose prose-slate max-w-none">
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-red-800 mb-2">🚫 Lo que NO Hacemos</h3>
                  <p className="text-red-700 text-sm">
                    Nunca vendemos, alquilamos o comercializamos su información personal a terceros 
                    para sus propios fines de marketing.
                  </p>
                </div>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">Podemos Compartir Información Con:</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-6">
                  <li><strong>Proveedores de Servicios:</strong> Para hosting, email marketing, analytics (con acuerdos de procesamiento)</li>
                  <li><strong>Socios Comerciales:</strong> Solo cuando usted solicita específicamente información de terceros</li>
                  <li><strong>Obligaciones Legales:</strong> Cuando sea requerido por ley o proceso legal</li>
                  <li><strong>Protección:</strong> Para proteger nuestros derechos, propiedad o seguridad</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">Transferencias Internacionales</h3>
                <p className="text-slate-600 leading-relaxed">
                  Algunos de nuestros proveedores de servicios pueden estar ubicados fuera de la UE. 
                  En estos casos, nos aseguramos de que existan salvaguardas adecuadas según GDPR.
                </p>
              </div>
            </div>

            {/* Sus Derechos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">6. Sus Derechos de Privacidad</h2>
              <div className="prose prose-slate max-w-none">
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">🔐 Derechos GDPR</h3>
                  <p className="text-blue-700 text-sm">
                    Bajo GDPR, usted tiene derechos específicos sobre sus datos personales. 
                    Puede ejercer estos derechos contactándonos en cualquier momento.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">👁️ Derecho de Acceso</h4>
                    <p className="text-sm text-slate-600">
                      Conocer qué datos personales tenemos sobre usted y cómo los procesamos.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">✏️ Derecho de Rectificación</h4>
                    <p className="text-sm text-slate-600">
                      Corregir información personal inexacta o incompleta.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">🗑️ Derecho de Supresión</h4>
                    <p className="text-sm text-slate-600">
                      Solicitar la eliminación de sus datos personales bajo ciertas circunstancias.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">⏸️ Derecho de Limitación</h4>
                    <p className="text-sm text-slate-600">
                      Restringir el procesamiento de sus datos personales bajo ciertas condiciones.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">📦 Derecho de Portabilidad</h4>
                    <p className="text-sm text-slate-600">
                      Recibir sus datos personales en formato estructurado y legible.
                    </p>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">🚫 Derecho de Oposición</h4>
                    <p className="text-sm text-slate-600">
                      Oponerse al procesamiento de sus datos para marketing directo.
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-700 mb-3">Cómo Ejercer sus Derechos</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Para ejercer cualquiera de estos derechos, contáctenos en{' '}
                  <a href="mailto:deal@aqxion.com" className="text-blue-600 hover:underline font-medium">
                    deal@aqxion.com
                  </a>. 
                  Responderemos dentro de 1 mes (o 3 meses en casos complejos).
                </p>

                <p className="text-slate-600 leading-relaxed">
                  También tiene derecho a presentar una queja ante la autoridad de supervisión 
                  de protección de datos de su país si considera que hemos procesado sus datos incorrectamente.
                </p>
              </div>
            </div>

            {/* Seguridad */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">7. Seguridad de Datos</h2>
              <div className="prose prose-slate max-w-none">
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl mb-2">🔒</div>
                    <h4 className="font-semibold text-green-800 mb-1">Encriptación SSL</h4>
                    <p className="text-sm text-green-700">Todas las comunicaciones protegidas</p>
                  </div>

                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🛡️</div>
                    <h4 className="font-semibold text-blue-800 mb-1">Acceso Limitado</h4>
                    <p className="text-sm text-blue-700">Solo personal autorizado</p>
                  </div>

                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <h4 className="font-semibold text-purple-800 mb-1">Auditorías Regulares</h4>
                    <p className="text-sm text-purple-700">Revisiones de seguridad constantes</p>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger su información 
                  personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Sin embargo, ningún sistema de transmisión por internet es 100% seguro. 
                  Mientras nos esforzamos por proteger su información, no podemos garantizar 
                  su seguridad absoluta.
                </p>
              </div>
            </div>

            {/* Retención de Datos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">8. Retención de Datos</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Conservamos su información personal solo durante el tiempo necesario para 
                  cumplir los propósitos para los cuales fue recopilada, incluyendo:
                </p>

                <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4 mb-6">
                  <li><strong>Datos de Contacto:</strong> Hasta que solicite su eliminación o se desuscriba</li>
                  <li><strong>Datos de Analytics:</strong> Máximo 26 meses (Google Analytics estándar)</li>
                  <li><strong>Cookies:</strong> Según la duración especificada para cada tipo</li>
                  <li><strong>Registros de Comunicación:</strong> Hasta 3 años para soporte y mejora del servicio</li>
                </ul>

                <p className="text-slate-600 leading-relaxed">
                  Después de estos períodos, eliminamos o anonimizamos sus datos de manera segura, 
                  excepto cuando la ley nos requiera conservarlos por más tiempo.
                </p>
              </div>
            </div>

            {/* Menores de Edad */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">9. Menores de Edad</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Nuestros servicios están dirigidos a profesionales y empresas. No recopilamos 
                  intencionalmente información personal de menores de 16 años.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Si descubrimos que hemos recopilado información de un menor sin consentimiento parental 
                  apropiado, tomaremos medidas para eliminar esa información de nuestros sistemas.
                </p>
              </div>
            </div>

            {/* Cambios en la Política */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">10. Cambios en Esta Política</h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  Podemos actualizar esta política de privacidad ocasionalmente para reflejar 
                  cambios en nuestras prácticas o por razones legales, operativas o regulatorias.
                </p>

                <p className="text-slate-600 leading-relaxed">
                  Le notificaremos sobre cambios significativos por email o mediante un 
                  aviso prominente en nuestro sitio web antes de que los cambios entren en vigor.
                </p>
              </div>
            </div>

            {/* Contacto */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Contacto y Preguntas</h3>
              <p className="text-slate-600 mb-6">
                Para cualquier pregunta sobre esta política de privacidad o para ejercer sus derechos:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                <a 
                  href="mailto:deal@aqxion.com"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  📧 deal@aqxion.com
                </a>
                <a 
                  href="mailto:deal@aqxion.com"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  📞 deal@aqxion.com
                </a>
              </div>
              
              <p className="text-sm text-slate-500 mt-4">
                Respuesta garantizada en 24-48 horas laborables
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
