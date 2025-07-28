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
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 text-sm font-medium">🗑️</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Solicitud de Eliminación de Datos</h3>
                    <p className="text-sm text-gray-600">
                      Este proceso es irreversible. Asegúrate de leer toda la información antes de continuar.
                    </p>
                  </div>
                </div>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Nombres <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Apellidos <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email Registrado <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    placeholder="El email que usaste para registrarte"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Teléfono (si lo proporcionaste)
                  </label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    placeholder="+51 999 999 999"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Motivo de la Eliminación <span className="text-peru-red">*</span>
                  </label>
                  <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] pr-12" required>
                    <option value="">Seleccionar motivo</option>
                    <option value="no_necesarios">Los datos ya no son necesarios</option>
                    <option value="retiro_consentimiento">Retiro mi consentimiento</option>
                    <option value="tratamiento_ilicito">Tratamiento ilícito de datos</option>
                    <option value="obligacion_legal">Obligación legal</option>
                    <option value="otro">Otro motivo</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Detalles Adicionales
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 h-24 resize-none"
                    placeholder="Proporciona información adicional sobre tu solicitud (opcional)"
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Datos Específicos a Eliminar</h4>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="datos_eliminar" value="todos" className="mr-3 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" />
                      <span className="text-gray-600">Todos mis datos personales</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="datos_eliminar" value="contacto" className="mr-3 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" />
                      <span className="text-gray-600">Solo información de contacto</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="datos_eliminar" value="comercial" className="mr-3 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" />
                      <span className="text-gray-600">Solo información comercial/marketing</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" name="datos_eliminar" value="servicios" className="mr-3 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" />
                      <span className="text-gray-600">Solo datos de servicios contratados</span>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-gray-900">Verificación de Identidad <span className="text-peru-red">*</span></h4>
                  <p className="text-sm text-gray-500">
                    Para procesar tu solicitud, necesitamos verificar tu identidad. 
                    Proporciona al menos uno de los siguientes datos:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        DNI/CE
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                        placeholder="Número de documento"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Fecha de Última Interacción
                      </label>
                      <input 
                        type="date" 
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-medium text-red-800 mb-2">Confirmaciones Requeridas</h4>
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                      <span className="text-sm text-red-700 leading-relaxed">
                        Entiendo que esta acción es irreversible y que la eliminación de mis datos 
                        puede afectar los servicios que recibo de AQXION. <span className="text-peru-red">*</span>
                      </span>
                    </label>
                    
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                      <span className="text-sm text-red-700 leading-relaxed">
                        Acepto que AQXION puede conservar cierta información cuando sea requerido 
                        por ley o para propósitos legítimos de negocio. <span className="text-peru-red">*</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span>Solicitar Eliminación de Datos</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
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
                <p>Asunto: &quot;Solicitud de Eliminación de Datos&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
