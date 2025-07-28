'use client';

import { Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid - Awwwards Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 lg:py-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-light tracking-tight text-gray-900">
                  AQXION
                </h2>
                <p className="text-sm uppercase tracking-wider text-gray-500 mt-2 font-medium">
                  Digital Strategy Studio
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-gray-600 max-w-sm">
                Estrategias digitales personalizadas para MYPEs peruanas que buscan crecimiento sostenible.
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                Contacto
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</p>
                  <a 
                    href="mailto:hola@aqxion.com"
                    className="text-lg text-gray-900 hover:text-peru-red transition-colors duration-300 font-light"
                  >
                    hola@aqxion.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Ubicación</p>
                  <p className="text-lg text-gray-900 font-light">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Links Column */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-wider text-gray-400 font-medium">
                Síguenos
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/company/104506887/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg text-gray-900 hover:text-peru-red transition-colors duration-300 font-light group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  LinkedIn
                </a>
              </div>

              {/* Legal Links */}
              <div className="pt-4">
                <div className="space-y-2">
                  <a href="/privacidad" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Política de Privacidad
                  </a>
                  <a href="/terminos" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Términos de Uso
                  </a>
                  <a href="#" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">
                    Libro de Reclamaciones
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Minimal */}
        <div className="border-t border-gray-100 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            
            <div className="text-sm text-gray-500">
              © 2025 AQXION. Todos los derechos reservados.
            </div>
            
            <div className="text-sm text-gray-400">
              Hecho en Lima con dedicación
            </div>
          </div>
        </div>

        {/* Disclaimer - Siempre Visible */}
        <div className="border-t border-gray-100 py-8">
          <div className="max-w-5xl mx-auto">
            <h4 className="text-sm uppercase tracking-wider text-gray-400 font-medium mb-6">
              Aviso Legal
            </h4>
            
            <div className="prose prose-sm prose-gray max-w-none">
              <div className="text-xs text-gray-500 leading-relaxed space-y-4 grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-medium text-gray-600 mb-2">Resultados no garantizados</p>
                  <p>
                    Los resultados mostrados no son típicos y dependen de múltiples factores incluyendo dedicación, aplicación, experiencia y condiciones del mercado.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-600 mb-2">Servicios de consultoría</p>
                  <p>
                    AQXION ofrece servicios de consultoría estratégica. Nuestra "garantía de por vida" se refiere al soporte continuo, no a resultados económicos específicos.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-gray-600 mb-2">Responsabilidad</p>
                  <p>
                    El éxito de tu negocio depende principalmente de tu esfuerzo y aplicación consistente de las estrategias recomendadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
