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
          <h1 className="text-4xl sm:text-5xl text-blueTrust mb-4">Guías gratis para hacer crecer tu negocio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Tener un negocio es duro. Necesitas más clientes pero no tienes presupuesto enorme para marketing. 
            Quieres automatizar cosas pero no sabes por dónde empezar. 
            Aquí tienes lo que realmente funciona - sin relleno, solo cosas que puedes usar hoy.
          </p>
          <a href="#guides" className="bg-greenValue text-white py-3 px-6 rounded-md font-bold hover:bg-blueTrust transition-colors">
            Ver las guías
          </a>
        </div>
      </section>

      {/* Guías para Tu Crecimiento */}
      <section id="guides" className="py-12">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Esto te puede ayudar</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/google-maps-aparecer-top-3-zona-30-dias-2025" onClick={() => handleGuideClick('seo-local')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                📍 SEO Local que funciona
              </a>
              <p className="text-sm text-gray-500 mt-2">Cómo aparecer en Google Maps cuando la gente busca tu tipo de negocio</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/ia-para-negocios-2025-herramientas-workflows" onClick={() => handleGuideClick('ia-workflows')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                🤖 IA para automatizar ventas
              </a>
              <p className="text-sm text-gray-500 mt-2">Herramientas que te ahorran horas cada semana sin complicarte</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/como-convertir-whatsapp-maquina-ventas-sin-bots-2025" onClick={() => handleGuideClick('whatsapp-ventas')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                💬 WhatsApp para vender más
              </a>
              <p className="text-sm text-gray-500 mt-2">Cómo convertir chats en clientes sin sonar como robot</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/guia-generar-30-clientes-30-dias-sin-publicar-2025" onClick={() => handleGuideClick('30-clientes')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                📈 30 clientes en 30 días
              </a>
              <p className="text-sm text-gray-500 mt-2">Sin publicidad - solo contactos inteligentes que funcionan</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/automatizacion-marketing-pequenos-negocios-2025" onClick={() => handleGuideClick('marketing-automatizado')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                ⚙️ Marketing que trabaja solo
              </a>
              <p className="text-sm text-gray-500 mt-2">Configuras una vez y funciona mientras duermes</p>
            </li>
            <li className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <a href="/blog/como-crear-marca-profesional-sin-gastar-diseno-2025" onClick={() => handleGuideClick('marca-profesional')} className="text-greenValue text-lg font-semibold hover:text-blueTrust">
                🎨 Marca que se ve profesional
              </a>
              <p className="text-sm text-gray-500 mt-2">Sin diseñador ni presupuesto - solo herramientas gratis</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Tools para Escalar Solo */}
      <section className="py-12 bg-greenValue/10">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Herramientas que puedes usar ya</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🎯 Emails que funcionan</h3>
              <p className="text-sm text-gray-500 mb-3">Templates para mandar emails a clientes potenciales y que te respondan</p>
              <a href="/templates/outreach-automatizado-sistema-completo-2025" className="text-blueTrust hover:underline font-medium">
                Descargar templates →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📊 Calcula si vale la pena</h3>
              <p className="text-sm text-gray-500 mb-3">Saber si tu marketing realmente te está dando dinero</p>
              <a href="/templates/roi-calculator" className="text-blueTrust hover:underline font-medium">
                Usar calculadora →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📱 Mensajes para WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3">Qué escribir para vender por WhatsApp sin sonar raro</p>
              <a href="/templates/whatsapp-scripts" className="text-blueTrust hover:underline font-medium">
                Ver mensajes →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🔄 IA que hace el trabajo</h3>
              <p className="text-sm text-gray-500 mb-3">Configurar ChatGPT para que haga tareas de marketing por ti</p>
              <a href="/templates/ia-workflows" className="text-blueTrust hover:underline font-medium">
                Ver cómo hacerlo →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">📈 Plan para 3 meses</h3>
              <p className="text-sm text-gray-500 mb-3">Qué hacer cada mes para hacer crecer tu negocio</p>
              <a href="/templates/plan-90-dias" className="text-blueTrust hover:underline font-medium">
                Descargar plan →
              </a>
            </li>
            <li className="p-4 bg-white border rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-greenValue text-lg font-semibold mb-2">🎯 Lista para SEO</h3>
              <p className="text-sm text-gray-500 mb-3">Qué revisar en tu web para que Google te encuentre</p>
              <a href="/templates/seo-checklist" className="text-blueTrust hover:underline font-medium">
                Ver lista →
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Más Recursos */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-3xl text-blueTrust mb-6 text-center">Si quieres más</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">📚 Todas las guías</h3>
              <p className="text-gray-600 mb-4">
                Más de 40 guías para hacer crecer tu negocio. Todo paso a paso, sin complicaciones.
              </p>
              <a href="/blog" className="bg-greenValue text-white py-2 px-4 rounded-md hover:bg-blueTrust transition-colors">
                Ver todas las guías
              </a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">🛠️ Todas las herramientas</h3>
              <p className="text-gray-600 mb-4">
                Templates, scripts y herramientas que puedes usar hoy mismo en tu negocio.
              </p>
              <a href="/templates" className="bg-greenValue text-white py-2 px-4 rounded-md hover:bg-blueTrust transition-colors">
                Ver herramientas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
