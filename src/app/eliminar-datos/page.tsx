import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Eliminar Mis Datos - AQXION',
  description: 'Solicita la eliminación de tus datos personales conforme a la Ley de Protección de Datos',
}

export default function EliminarDatosPage() {
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
            Eliminar Mis Datos
          </h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-800 font-medium">
                🗑️ Derecho al Olvido - Solicitud de Eliminación de Datos Personales
              </p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Tu Derecho a la Eliminación
              </h2>
              <p className="text-gray-600 mb-4">
                Conforme a la Ley de Protección de Datos Personales del Perú (Ley N° 29733), 
                tienes derecho a solicitar la eliminación de tus datos personales cuando:
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• Los datos ya no son necesarios para los fines originales</li>
                <li>• Retiras tu consentimiento y no hay otra base legal</li>
                <li>• Los datos han sido tratados de manera ilícita</li>
                <li>• La eliminación es necesaria para cumplir una obligación legal</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Antes de Continuar
              </h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 mb-4">
                  <strong>Importante:</strong> La eliminación de tus datos es irreversible. Una vez procesada:
                </p>
                <ul className="text-gray-600 space-y-2 ml-4">
                  <li>• No podremos recuperar tu información</li>
                  <li>• Perderás acceso a servicios personalizados</li>
                  <li>• Se cancelarán servicios activos (si los hay)</li>
                  <li>• No podremos proporcionar soporte histórico</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Formulario de Solicitud de Eliminación
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombres *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Apellidos *
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Registrado *
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                    placeholder="El email que usaste para registrarte"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono (si lo proporcionaste)
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motivo de la Solicitud *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent" required>
                    <option value="">Seleccionar motivo</option>
                    <option value="no_necesarios">Los datos ya no son necesarios</option>
                    <option value="retiro_consentimiento">Retiro mi consentimiento</option>
                    <option value="tratamiento_ilicito">Tratamiento ilícito de datos</option>
                    <option value="obligacion_legal">Obligación legal</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Detalles Adicionales
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent h-24 resize-none"
                    placeholder="Proporciona información adicional sobre tu solicitud (opcional)"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Datos Específicos a Eliminar
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" name="datos_eliminar" value="todos" className="mr-3" />
                      <span className="text-gray-600">Todos mis datos personales</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="datos_eliminar" value="contacto" className="mr-3" />
                      <span className="text-gray-600">Solo información de contacto</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="datos_eliminar" value="comercial" className="mr-3" />
                      <span className="text-gray-600">Solo información comercial/marketing</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="datos_eliminar" value="servicios" className="mr-3" />
                      <span className="text-gray-600">Solo datos de servicios contratados</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Verificación de Identidad *
                  </label>
                  <p className="text-sm text-gray-500 mb-3">
                    Para procesar tu solicitud, necesitamos verificar tu identidad. 
                    Adjunta una foto o escaneo de tu documento de identidad.
                  </p>
                  <input 
                    type="file" 
                    accept="image/*,.pdf"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-gray-600">
                      Confirmo que soy el titular de los datos personales y que la información 
                      proporcionada es veraz y correcta.
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-gray-600">
                      Entiendo que esta acción es irreversible y que la eliminación de mis datos 
                      puede afectar los servicios que recibo de AQXION.
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1" required />
                    <span className="text-sm text-gray-600">
                      Acepto que AQXION puede conservar cierta información cuando sea requerido 
                      por ley o para propósitos legítimos de negocio.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl"
                >
                  Solicitar Eliminación de Datos
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Proceso y Tiempos
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>1. Verificación (1-3 días):</strong> Verificaremos tu identidad y 
                  validaremos la solicitud.
                </p>
                <p>
                  <strong>2. Evaluación (3-7 días):</strong> Revisaremos si existen obligaciones 
                  legales que requieran conservar ciertos datos.
                </p>
                <p>
                  <strong>3. Eliminación (7-15 días):</strong> Procederemos con la eliminación 
                  segura de tus datos de nuestros sistemas.
                </p>
                <p>
                  <strong>4. Confirmación:</strong> Te notificaremos una vez completado el proceso.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Contacto
              </h2>
              <p className="text-gray-600">
                Si tienes preguntas sobre este proceso, contáctanos:
              </p>
              <div className="mt-4 space-y-2 text-gray-600">
                <p>Email: <a href="mailto:privacidad@aqxion.com" className="text-peru-red hover:underline">privacidad@aqxion.com</a></p>
                <p>Asunto: "Solicitud de Eliminación de Datos"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
