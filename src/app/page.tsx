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
      <section className="text-center py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-blueCalm mb-4 sm:mb-6 lg:mb-8">
            Guías Gratis para Hacer Crecer Tu Negocio
          </h1>
          <p className="mt-4 sm:mt-6 lg:mt-8 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-grayText">
            Tener un negocio es duro. Necesitas más clientes pero no tienes presupuesto enorme para marketing. 
            Quieres automatizar cosas pero no sabes por dónde empezar. 
            Aquí tienes lo que realmente funciona – sin relleno, solo cosas que puedes usar hoy.
          </p>
          <a href="#guides" className="mt-6 sm:mt-8 lg:mt-10 inline-block text-greenGrowth font-semibold text-lg sm:text-xl hover:underline">
            Ver las Guías
          </a>
        </div>
      </section>

      {/* Guías para Tu Crecimiento */}
      <section id="guides" className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blueCalm mb-6 sm:mb-8 lg:mb-10 text-center">Guías que realmente funcionan</h2>
          <ul className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 xl:gap-10">
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/google-maps-aparecer-top-3-zona-30-dias-2025" onClick={() => handleGuideClick('seo-local')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                SEO Local que funciona
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Pasos simples para implementar solo</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">📍</span>
                Potencial +3x visibilidad local
              </span>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/ia-para-negocios-2025-herramientas-workflows" onClick={() => handleGuideClick('ia-workflows')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                IA para automatizar ventas
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Herramientas simples que te ahorran horas cada semana</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">🤖</span>
                Potencial 5-10h ahorradas/semana
              </span>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/como-convertir-whatsapp-maquina-ventas-sin-bots-2025" onClick={() => handleGuideClick('whatsapp-ventas')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                WhatsApp para vender más
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Sistema para leads solos</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">💬</span>
                Sistema para leads solos
              </span>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/guia-generar-30-clientes-30-dias-sin-publicar-2025" onClick={() => handleGuideClick('30-clientes')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                30 clientes en 30 días
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Plan paso a paso implementable</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">📈</span>
                Plan paso a paso implementable
              </span>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/automatizacion-marketing-pequenos-negocios-2025" onClick={() => handleGuideClick('marketing-automatizado')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                Marketing que trabaja solo
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Setup en fin de semana</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">⚙️</span>
                Setup en fin de semana
              </span>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <a href="/blog/como-crear-marca-profesional-sin-gastar-diseno-2025" onClick={() => handleGuideClick('marca-profesional')} className="text-xl sm:text-2xl lg:text-2.5xl block mb-2 sm:mb-3 text-greenGrowth font-medium">
                Marca que se ve profesional
              </a>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2">Resultados en 2-3 horas</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3">
                <span className="emoji-icon">🎨</span>
                Resultados en 2-3 horas
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Tools para Escalar Solo */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blueCalm mb-6 sm:mb-8 lg:mb-10 text-center">Herramientas que Te Ahorran Horas Cada Semana</h2>
          <ul className="space-y-6 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:gap-10">
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <h3 className="text-xl sm:text-2xl lg:text-2.5xl text-greenGrowth font-medium mb-2 sm:mb-3">Emails que funcionan</h3>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2 mb-3">Templates listos para mandar a clientes potenciales que realmente te respondan</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3 mb-3">
                <span className="emoji-icon">🎯</span>
                Ahorro 2-3h por email
              </span>
              <a href="/templates/outreach-automatizado-sistema-completo-2025" className="text-lg sm:text-xl text-greenGrowth font-medium hover:text-blueCalm">
                Descargar templates →
              </a>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <h3 className="text-xl sm:text-2xl lg:text-2.5xl text-greenGrowth font-medium mb-2 sm:mb-3">Calcula si vale la pena</h3>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2 mb-3">Herramienta simple para saber si tu marketing realmente te está dando dinero</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3 mb-3">
                <span className="emoji-icon">📊</span>
                Claridad en 5 minutos
              </span>
              <a href="/templates/roi-calculator" className="text-lg sm:text-xl text-greenGrowth font-medium hover:text-blueCalm">
                Usar calculadora →
              </a>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <h3 className="text-xl sm:text-2xl lg:text-2.5xl text-greenGrowth font-medium mb-2 sm:mb-3">Mensajes para WhatsApp</h3>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2 mb-3">Qué escribir para vender por WhatsApp sin sonar raro o agresivo</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3 mb-3">
                <span className="emoji-icon">📱</span>
                Scripts probados
              </span>
              <a href="/templates/whatsapp-scripts" className="text-lg sm:text-xl text-greenGrowth font-medium hover:text-blueCalm">
                Ver mensajes →
              </a>
            </li>
            <li className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
              <h3 className="text-xl sm:text-2xl lg:text-2.5xl text-greenGrowth font-medium mb-2 sm:mb-3">IA que hace el trabajo</h3>
              <p className="text-sm sm:text-base lg:text-lg text-grayText mt-1 sm:mt-2 mb-3">Configurar ChatGPT para que haga tareas de marketing por ti</p>
              <span className="text-sm sm:text-base flex items-center mt-2 sm:mt-3 mb-3">
                <span className="emoji-icon">🔄</span>
                Setup en 1 hora, funciona siempre
              </span>
              <a href="/templates/ia-workflows" className="text-lg sm:text-xl text-greenGrowth font-medium hover:text-blueCalm">
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
