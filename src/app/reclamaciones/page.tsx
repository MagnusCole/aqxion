import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libro de Reclamaciones - AQXION',
  description: 'Libro de reclamaciones INDECOPI - AQXION',
}

export default function ReclamacionesPage() {
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
            Libro de Reclamaciones
          </h1>
          
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 space-y-8">
            <div className="bg-peru-red/10 border border-peru-red/20 rounded-xl p-4">
              <p className="text-peru-red font-medium">
                📖 Libro de Reclamaciones conforme a la normativa peruana (INDECOPI)
              </p>
            </div>
            
            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Tus Derechos como Consumidor
              </h2>
              <p className="text-gray-600 mb-4">
                Conforme al Código de Protección y Defensa del Consumidor (Ley N° 29571), 
                tienes derecho a presentar reclamos y quejas sobre nuestros servicios.
              </p>
              <ul className="text-gray-600 space-y-2 ml-4">
                <li>• <strong>Reclamo:</strong> Disconformidad relacionada con el servicio prestado</li>
                <li>• <strong>Queja:</strong> Disconformidad no relacionada con el servicio sino con la atención</li>
                <li>• <strong>Plazo de respuesta:</strong> Máximo 30 días calendario</li>
                <li>• <strong>Gratuito:</strong> No tiene costo alguno para el consumidor</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Formulario de Reclamo/Queja
              </h2>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-8 h-8 bg-peru-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-peru-red text-sm font-medium">📋</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Antes de continuar</h3>
                    <p className="text-sm text-gray-600">
                      Este formulario es oficial y está protegido por la normativa peruana. 
                      Toda la información será tratada con confidencialidad.
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      DNI/CE <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Teléfono <span className="text-peru-red">*</span>
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Dirección <span className="text-peru-red">*</span>
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Tipo de Solicitud <span className="text-peru-red">*</span>
                    </label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQgNkw4IDEwTDEyIDYiIHN0cm9rZT0iIzZCNzI4MCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K')] pr-12" required>
                      <option value="">Seleccionar</option>
                      <option value="reclamo">Reclamo</option>
                      <option value="queja">Queja</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Fecha del Incidente
                    </label>
                    <input 
                      type="date" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Servicio Contratado
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400"
                    placeholder="Descripción del servicio relacionado con el reclamo/queja"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Detalle del Reclamo/Queja <span className="text-peru-red">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 h-32 resize-none"
                    placeholder="Describe detalladamente los hechos que motivan tu reclamo o queja"
                    required
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Pedido Concreto <span className="text-peru-red">*</span>
                  </label>
                  <textarea 
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-peru-red focus:border-transparent transition-all duration-150 hover:border-gray-400 h-24 resize-none"
                    placeholder="¿Qué solución específica solicitas?"
                    required
                  ></textarea>
                </div>

                <div className="space-y-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Declaro que la información proporcionada es veraz y autorizo su tratamiento 
                      conforme a la Ley de Protección de Datos Personales. <span className="text-peru-red">*</span>
                    </span>
                  </label>
                  
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-peru-red border-gray-300 rounded focus:ring-peru-red focus:ring-2" required />
                    <span className="text-sm text-gray-600 leading-relaxed">
                      Entiendo que AQXION tiene un plazo máximo de 30 días calendario para 
                      responder a mi solicitud. <span className="text-peru-red">*</span>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-peru-red text-white font-medium rounded-xl hover:bg-red-700 active:scale-95 transition-all duration-150 shadow-lg hover:shadow-xl inline-flex items-center justify-center"
                >
                  <span>Enviar Reclamo/Queja</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Información Importante
              </h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <ul className="text-gray-600 space-y-3">
                  <li>• La presentación del reclamo no impide acudir a otras vías de solución de controversias</li>
                  <li>• Puedes acudir directamente a INDECOPI si no estás conforme con nuestra respuesta</li>
                  <li>• Conserva una copia de tu reclamo y la respuesta para futuros trámites</li>
                  <li>• El reclamo debe presentarse dentro de los 30 días de ocurrido el hecho</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Datos de la Empresa
              </h2>
              <div className="bg-white rounded-xl p-6 border border-gray-200 space-y-3">
                <p><strong>Razón Social:</strong> AQXION S.A.C.</p>
                <p><strong>RUC:</strong> [Número de RUC]</p>
                <p><strong>Dirección:</strong> Lima, Perú</p>
                <p><strong>Teléfono:</strong> [Número de teléfono]</p>
                <p><strong>Email:</strong> <a href="mailto:reclamos@aqxion.com" className="text-peru-red hover:underline">reclamos@aqxion.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-900 mb-4">
                Contacto INDECOPI
              </h2>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <p className="text-gray-600 mb-3">
                  Si no estás conforme con nuestra respuesta, puedes acudir a INDECOPI:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Teléfono:</strong> 224-7777</p>
                  <p><strong>Web:</strong> <a href="https://www.indecopi.gob.pe" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.indecopi.gob.pe</a></p>
                  <p><strong>Email:</strong> <a href="mailto:sacreclamo@indecopi.gob.pe" className="text-blue-600 hover:underline">sacreclamo@indecopi.gob.pe</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
