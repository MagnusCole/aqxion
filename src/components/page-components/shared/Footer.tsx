'use client';

import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white relative">
      
      {/* Seamless Narrative Bridge - Ultra Smooth */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-50/30 via-gray-50/15 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative">
        
        {/* Massive Typography Hero - Award Winning Design */}
        <div className="px-6 sm:px-8 lg:px-12 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Massive Brand Statement */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-gray-900 leading-none">
                  AQXION
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-peru-red"></div>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-medium">
                    Digital Business Strategy
                  </p>
                </div>
              </div>
              
              <div className="max-w-lg">
                <p className="text-xl lg:text-2xl leading-relaxed text-gray-600 font-light">
                  Transformamos MYPEs en historias de éxito digital
                </p>
                <p className="text-base leading-relaxed text-gray-500 mt-4">
                  Lima, Perú
                </p>
              </div>
            </div>

            {/* Contact & Navigation Grid */}
            <div className="lg:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                
                {/* Direct Contact */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                    Conecta
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <a 
                        href="mailto:deal@aqxion.com"
                        className="text-lg lg:text-xl text-gray-900 hover:text-peru-red transition-colors duration-300 font-light tracking-tight block"
                      >
                        deal@aqxion.com
                      </a>
                    </div>
                    
                    <a
                      href="https://www.linkedin.com/company/104506887/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 text-lg text-gray-900 hover:text-peru-red transition-colors duration-300 font-light"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Legal Navigation */}
                <div className="space-y-6">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium">
                    Legal
                  </h3>
                  
                  <div className="space-y-3">
                    <a href="/privacidad" className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">
                      Privacidad
                    </a>
                    <a href="/terminos" className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">
                      Términos
                    </a>
                    <a href="/reclamaciones" className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">
                      Reclamaciones
                    </a>
                    <a href="/dmca" className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">
                      DMCA
                    </a>
                    <a href="/eliminar-datos" className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300 font-light">
                      Eliminar Datos
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Minimal Copyright Bar */}
        <div className="border-t border-gray-100 px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-500 font-light">
              © 2025 AQXION — Todos los derechos reservados
            </div>
            <div className="text-sm text-gray-400 font-light">
              Hecho en Lima
            </div>
          </div>
        </div>

        {/* Transparent Legal Disclaimer - Always Visible */}
        <div className="border-t border-gray-100 px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-[0.3em] text-gray-400 font-medium mb-2">
                Transparencia Legal
              </h4>
              <div className="w-12 h-px bg-gray-200"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-700 tracking-tight">
                  Resultados Variables
                </h5>
                <p className="text-xs leading-relaxed text-gray-500">
                  Los resultados dependen de múltiples factores: dedicación, aplicación, experiencia y condiciones del mercado. Ningún resultado está garantizado.
                </p>
              </div>
              
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-700 tracking-tight">
                  Servicios de Consultoría
                </h5>
                <p className="text-xs leading-relaxed text-gray-500">
                  AQXION ofrece consultoría estratégica. Nuestra "garantía de por vida" se refiere al soporte continuo, no a resultados económicos específicos.
                </p>
              </div>
              
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-gray-700 tracking-tight">
                  Tu Responsabilidad
                </h5>
                <p className="text-xs leading-relaxed text-gray-500">
                  El éxito depende de tu esfuerzo y aplicación consistente de las estrategias recomendadas. AQXION facilita, tú ejecutas.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
