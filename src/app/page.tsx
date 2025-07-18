'use client';

// Declaración de tipos para gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: { [key: string]: any }) => void;
  }
}

export default function Home() {
  const handleGuideClick = (guideName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click_guide', { 
        'guide_name': guideName
      });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container">
          <h1 className="text-4xl sm:text-5xl text-blueTrust mb-4">Guías Prácticas para Escalar Tu Negocio Solo</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Como dueño ambicioso, enfrentas desafíos como atraer clientes sin presupuesto o automatizar operaciones. 
            Aquí encuentras recursos gratis para resolverlos – tips accionables, workflows, strategies. 
            Empieza con lo que necesitas hoy.
          </p>
          <a href="#guides" className="bg-greenValue text-white py-3 px-6 rounded-md font-bold hover:bg-blueTrust transition-colors">
            Explora Guías
          </a>
        </div>
      </section>

      {/* Guías para Tu Crecimiento */}
      <section id="guides" className="py-12">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Guías para Tu Crecimiento</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/google-maps-aparecer-top-3-zona-30-dias-2025" onClick={() => handleGuideClick('seo-local')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                📍 SEO Local para Dueños
              </a>
              <p className="text-sm text-gray-500 mt-2">Potencial +3x visibilidad – pasos simples para implementar solo.</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/ia-para-negocios-2025-herramientas-workflows" onClick={() => handleGuideClick('ia-workflows')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                🤖 IA para Automatizar Ventas
              </a>
              <p className="text-sm text-gray-500 mt-2">Workflows que ahorran 20+ horas semanales sin complicaciones.</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/como-convertir-whatsapp-maquina-ventas-sin-bots-2025" onClick={() => handleGuideClick('whatsapp-ventas')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                💬 WhatsApp para Ventas
              </a>
              <p className="text-sm text-gray-500 mt-2">Sistema completo para convertir conversaciones en clientes.</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/guia-generar-30-clientes-30-dias-sin-publicar-2025" onClick={() => handleGuideClick('30-clientes')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                📈 30 Clientes en 30 Días
              </a>
              <p className="text-sm text-gray-500 mt-2">Estrategia probada sin publicidad – solo networking estratégico.</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/automatizacion-marketing-pequenos-negocios-2025" onClick={() => handleGuideClick('marketing-automatizado')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                ⚙️ Marketing Automatizado
              </a>
              <p className="text-sm text-gray-500 mt-2">Setup completo para marketing que funciona mientras duermes.</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/como-crear-marca-profesional-sin-gastar-diseno-2025" onClick={() => handleGuideClick('marca-profesional')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                🎨 Marca Profesional Gratis
              </a>
              <p className="text-sm text-gray-500 mt-2">Crea una identidad visual que vende sin diseñador ni presupuesto.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tools para Escalar Solo */}
      <section className="py-12 bg-greenValue/10">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Tools para Escalar Solo</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🎯 Template Outreach</h3>
              <p className="text-sm text-gray-500 mb-3">Sistema completo para conseguir leads vía email frío que convierte.</p>
              <a href="/templates/outreach-automatizado-sistema-completo-2025" className="text-blueTrust hover:underline font-medium">
                Descargar Template →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📊 Calculadora ROI</h3>
              <p className="text-sm text-gray-500 mb-3">Herramienta para calcular retorno real de tus inversiones en marketing.</p>
              <a href="/templates/roi-calculator" className="text-blueTrust hover:underline font-medium">
                Usar Calculadora →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📱 Scripts WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3">Plantillas probadas para cerrar ventas vía WhatsApp Business.</p>
              <a href="/templates/whatsapp-scripts" className="text-blueTrust hover:underline font-medium">
                Ver Scripts →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🔄 Workflow IA</h3>
              <p className="text-sm text-gray-500 mb-3">Automatizaciones listas para implementar con ChatGPT y Zapier.</p>
              <a href="/templates/ia-workflows" className="text-blueTrust hover:underline font-medium">
                Implementar Workflows →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📈 Plan 90 Días</h3>
              <p className="text-sm text-gray-500 mb-3">Roadmap completo para escalar de 0 a 6 cifras en 3 meses.</p>
              <a href="/templates/plan-90-dias" className="text-blueTrust hover:underline font-medium">
                Descargar Plan →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🎯 Checklist SEO</h3>
              <p className="text-sm text-gray-500 mb-3">Lista verificable para optimizar tu sitio web y aparecer en Google.</p>
              <a href="/templates/seo-checklist" className="text-blueTrust hover:underline font-medium">
                Usar Checklist →
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Más Recursos */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Más Recursos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📚 Todas las Guías</h3>
              <p className="text-gray-600 mb-4">
                Acceso completo a +40 guías paso a paso para hacer crecer tu negocio sin depender de nadie.
              </p>
              <a href="/blog" className="bg-greenValue text-white py-2 px-4 rounded-md hover:bg-blueTrust transition-colors">
                Ver Todas las Guías
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🛠️ Todos los Templates</h3>
              <p className="text-gray-600 mb-4">
                Herramientas, scripts y plantillas listas para usar en tu negocio hoy mismo.
              </p>
              <a href="/templates" className="bg-greenValue text-white py-2 px-4 rounded-md hover:bg-blueTrust transition-colors">
                Ver Todos los Tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
