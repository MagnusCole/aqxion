import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistema E-commerce Orgánico | Más Clientes para Tiendas Online Lima | AQXION',
  description: 'Guía completa para tiendas online en Lima. Resuelve abandono de carrito, reduce costos de publicidad, consigue clientes leales de forma orgánica.',
  keywords: 'marketing orgánico e-commerce Lima, ventas recurrentes B2C Perú 2025, tienda online Lima, abandono carrito, mobile commerce',
  robots: 'index, follow',
};

export default function EmpezarPage() {
  return (
    <>
      {/* Hero elegante y centrado */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNnYxMmgtMTJ6Ci8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge elegante */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              🏪 Para Tiendas Online en Lima
            </div>
            
            {/* H1 elegante pero más impactante */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¿Tu Tienda Online Está
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Perdiendo Ventas?
              </span>
            </h1>
            
            {/* Subtitle que amplifica el desire */}
            <p className="text-xl text-slate-700 mb-16 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-900">Mientras algunas tiendas optimizan y crecen</strong>, 
              otras siguen dependiendo de publicidad cada vez más cara y menos efectiva.
            </p>
            
            {/* Pain points amplificados pero legibles */}
            <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-12 max-w-3xl mx-auto shadow-lg">
              <p className="text-lg text-red-800 font-semibold mb-6">
                ⚠️ Si esto te resulta familiar, es hora de evaluar tu estrategia:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-2xl">📉</span>
                  <span>La mayoría de visitantes <strong>abandonan el carrito</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-2xl">💸</span>
                  <span>El costo por cliente <strong>sigue aumentando</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-2xl">⏰</span>
                  <span>Inviertes más tiempo <strong>con menos resultados</strong></span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <span className="text-2xl">🏪</span>
                  <span>La competencia parece <strong>crecer más rápido</strong></span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                <p className="text-red-800 font-medium text-center">
                  � La buena noticia: estos problemas tienen solución
                </p>
              </div>
            </div>
            
            {/* CTA enfocado en lead capture */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 max-w-lg mx-auto text-white text-center">
                <h3 className="text-2xl font-bold mb-4">
                  🎯 Descubre Cómo Cambiar Esta Realidad
                </h3>
                <p className="text-emerald-100 mb-6">
                  Agenda una <strong>consultoría gratuita</strong> donde analizamos tu tienda 
                  y te mostramos oportunidades de mejora específicas.
                </p>
                <button className="w-full bg-white text-emerald-600 px-8 py-4 text-lg font-bold rounded-xl hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Agendar Consultoría Gratuita →
                </button>
                <p className="text-xs text-emerald-200 mt-3">
                  ✅ Consultoría gratuita • ✅ Solo tiendas en Lima • ✅ Sin compromiso
                </p>
              </div>
              
              <div className="text-center mt-6">
                <a 
                  href="#como-funciona" 
                  className="inline-flex items-center text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                >
                  O conoce más sobre el sistema ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de problemas específicos - amplificados pero elegantes */}
      <section id="como-funciona" className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Los Desafíos Más Comunes
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Estos son algunos patrones que vemos frecuentemente en tiendas online. 
                <strong className="text-emerald-700">Identificar el problema es el primer paso</strong> para solucionarlo.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-3xl mb-4">�</div>
                <h3 className="text-xl font-bold text-red-800 mb-3">
                  Cada Carrito Abandonado = S/100+ Perdidos
                </h3>
                <p className="text-red-700 mb-4">
                  Si tienes 100 visitantes al día y 70 abandonan el carrito, <strong>pierdes S/7,000 diarios</strong>. 
                  Eso son S/210,000 al mes que van a parar a tu competencia.
                </p>
                <div className="bg-white rounded-lg p-3 border border-red-300">
                  <p className="text-emerald-700 font-medium text-sm">
                    ✅ Imagina recuperar aunque sea el 30% de esos carritos...
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-3xl mb-4">�</div>
                <h3 className="text-xl font-bold text-orange-800 mb-3">
                  Tus Ads Cada Vez Cuestan Más y Venden Menos
                </h3>
                <p className="text-orange-700 mb-4">
                  Antes gastabas S/500 para conseguir 50 clientes. Ahora necesitas S/1,500 para los mismos 50. 
                  <strong>iOS 15 arruinó Facebook Ads</strong> y cada vez será peor.
                </p>
                <div className="bg-white rounded-lg p-3 border border-orange-300">
                  <p className="text-emerald-700 font-medium text-sm">
                    ✅ Imagina conseguir clientes SIN depender de publicidad cara...
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-3xl mb-4">😴</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Trabajas 12 Horas Para Ganar Lo Mismo
                </h3>
                <p className="text-blue-700 mb-4">
                  Atender clientes, crear contenido, gestionar inventario, hacer marketing... 
                  <strong>No hay horas suficientes en el día</strong> y tu familia te ve cada vez menos.
                </p>
                <div className="bg-white rounded-lg p-3 border border-blue-300">
                  <p className="text-emerald-700 font-medium text-sm">
                    ✅ Imagina que tu tienda venda mientras duermes...
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-200">
                <div className="text-3xl mb-4">⚔️</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Tus Competidores Te Están Robando Clientes
                </h3>
                <p className="text-purple-700 mb-4">
                  Mientras tú compites por precio en Mercado Libre, ellos tienen clientes que compran directo, 
                  <strong>pagan más y vuelven una y otra vez</strong>.
                </p>
                <div className="bg-white rounded-lg p-3 border border-purple-300">
                  <p className="text-emerald-700 font-medium text-sm">
                    ✅ Imagina tener clientes que te buscan a TI específicamente...
                  </p>
                </div>
              </div>
            </div>
            
            {/* Amplificador final */}
            <div className="mt-12 bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">
                🚨 La Realidad Cruda
              </h3>
              <p className="text-lg text-red-700 mb-4">
                Cada mes que pasa usando las mismas estrategias que no funcionan, 
                <strong>tu competencia se aleja más y será más difícil alcanzarlos</strong>.
              </p>
              <p className="text-emerald-700 font-bold text-xl">
                Pero aún puedes cambiar esta historia... si actúas HOY.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema completo - elegante */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Cómo Podemos Ayudarte
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Trabajamos contigo para identificar oportunidades específicas en tu tienda.
                <br />
                <strong className="text-emerald-700">Enfoque colaborativo y realista.</strong>
              </p>
            </div>
            
            {/* Componentes principales */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Áreas Donde Podemos Colaborar
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-emerald-800 mb-3">
                    🎯 Auditoría y Configuración Completa
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Analizamos tu tienda y configuramos el funnel de conversión optimizado para mobile.
                  </p>
                  <p className="text-emerald-700 font-semibold">
                    Nosotros lo hacemos por ti (DFY)
                  </p>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-teal-800 mb-3">
                    🔧 Optimización Continua
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Ajustes colaborativos basados en datos para maximizar las ventas recurrentes.
                  </p>
                  <p className="text-teal-700 font-semibold">
                    Trabajamos contigo (DWY)
                  </p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">
                    📧 Templates de Email Marketing
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Sequences probadas para recuperar carritos y generar compras repetidas.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    Herramientas listas para usar
                  </p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">
                    📱 Guía de Contenido Orgánico
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Módulos paso a paso para crear contenido que vende sin gastar en publicidad.
                  </p>
                  <p className="text-green-700 font-semibold">
                    Implementa tú mismo (DIY)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bonos elegantes */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Bonos Incluidos Este Mes
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold mb-2">✅ Checklist de Conversión</h4>
                  <p className="text-emerald-100 text-sm">
                    Guía de 1 semana para optimizar cada paso del proceso de compra
                  </p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold mb-2">🤖 Automatización de Emails</h4>
                  <p className="text-emerald-100 text-sm">
                    Sistema de 3 días para emails que generan ventas automáticamente
                  </p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold mb-2">📝 Revisión de Contenido</h4>
                  <p className="text-emerald-100 text-sm">
                    Sesión personalizada para optimizar tu contenido actual
                  </p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold mb-2">🔍 Templates SEO Local</h4>
                  <p className="text-emerald-100 text-sm">
                    Set completo para posicionarte en búsquedas locales de Lima
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué funciona - elegante */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Basado en Tendencias 2025
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Estrategias respaldadas por datos y adaptadas al mercado peruano.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Mobile Commerce +35%
                </h3>
                <p className="text-slate-600">
                  El crecimiento del comercio móvil en Perú requiere estrategias específicas para pantallas pequeñas.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Contenido Orgánico +25%
                </h3>
                <p className="text-slate-600">
                  El marketing orgánico genera 25% más engagement que la publicidad pagada.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Recuperación Inteligente
                </h3>
                <p className="text-slate-600">
                  Estrategias avanzadas convierten el 60-70% de abandono en oportunidades de venta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de mejoras realistas */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 to-green-50/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Resultados Que Buscamos Juntos
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Estas son las <strong className="text-emerald-700">mejoras realistas</strong> que trabajamos 
                para lograr en tiendas como la tuya:
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-emerald-800 mb-3">
                  Mejor Conversión de Carrito
                </h3>
                <p className="text-slate-600 mb-4">
                  Trabajamos estrategias para <strong>recuperar algunos carritos abandonados</strong> 
                  mediante emails de seguimiento y mejoras en el proceso de compra.
                </p>
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-emerald-700 font-medium text-sm">
                    � Cada carrito recuperado es una venta que antes se perdía
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-green-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">
                  Reducir Dependencia de Publicidad Pagada
                </h3>
                <p className="text-slate-600 mb-4">
                  Desarrollamos <strong>estrategias de contenido orgánico</strong> que atraen 
                  clientes potenciales sin depender completamente de ads costosos.
                </p>
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-green-700 font-medium text-sm">
                    💚 El objetivo es diversificar tus fuentes de tráfico
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-teal-200 rounded-2xl p-8 hover:border-teal-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-teal-800 mb-3">
                  Procesos Más Eficientes
                </h3>
                <p className="text-slate-600 mb-4">
                  Implementamos <strong>herramientas y procesos</strong> que te ayuden 
                  a gestionar tu tienda de forma más organizada y con menos tiempo manual.
                </p>
                <div className="bg-teal-50 rounded-lg p-3">
                  <p className="text-teal-700 font-medium text-sm">
                    ⏰ Para que puedas enfocarte en lo que más importa
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">
                  Mejorar el Valor Percibido
                </h3>
                <p className="text-slate-600 mb-4">
                  Trabajamos en el <strong>posicionamiento y comunicación</strong> de tu marca 
                  para que los clientes entiendan mejor el valor que ofreces.
                </p>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-blue-700 font-medium text-sm">
                    � Para competir por valor, no solo por precio
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">
                  Fomentar Compras Recurrentes
                </h3>
                <p className="text-slate-600 mb-4">
                  Desarrollamos <strong>estrategias de fidelización</strong> para que los clientes 
                  satisfechos regresen y recomienden tu tienda.
                </p>
                <div className="bg-purple-50 rounded-lg p-3">
                  <p className="text-purple-700 font-medium text-sm">
                    � El objetivo es crear relaciones a largo plazo
                  </p>
                </div>
              </div>
              
              <div className="bg-white border-2 border-rose-200 rounded-2xl p-8 hover:border-rose-300 hover:shadow-lg transition-all duration-200">
                <div className="text-4xl mb-4">�</div>
                <h3 className="text-xl font-bold text-rose-800 mb-3">
                  Diferenciarte de la Competencia
                </h3>
                <p className="text-slate-600 mb-4">
                  Encontramos formas de <strong>destacar tu propuesta de valor</strong> 
                  para que no tengas que competir únicamente por precio.
                </p>
                <div className="bg-rose-50 rounded-lg p-3">
                  <p className="text-rose-700 font-medium text-sm">
                    � Cada tienda tiene algo único que ofrecer
                  </p>
                </div>
              </div>
            </div>
            
            {/* Mensaje realista final */}
            <div className="mt-12 bg-white border-2 border-emerald-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-emerald-800">
                🤝 Trabajamos Juntos Hacia Estos Objetivos
              </h3>
              <p className="text-lg text-slate-600 mb-4">
                Estas mejoras requieren <strong>tiempo, esfuerzo y colaboración</strong>. 
                No hay soluciones mágicas, pero sí hay estrategias probadas.
              </p>
              <p className="text-emerald-700 font-medium">
                Hablemos sobre tu situación específica y veamos qué se puede lograr.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías elegantes */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Garantía Sin Riesgos
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Reembolso Completo en 14 Días
                </h3>
                <p className="text-green-700">
                  Si no estás satisfecho con los primeros resultados, 
                  te devolvemos el 100% de tu inversión sin preguntas.
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  Soporte Continuo
                </h3>
                <p className="text-blue-700">
                  Si implementas todo y no ves resultados en 30 días, 
                  continuamos trabajando sin costo adicional hasta lograrlo.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-emerald-100 rounded-2xl p-6">
              <p className="text-xl text-emerald-800 font-semibold">
                "Completamente libre de riesgos. Tu éxito es nuestra prioridad."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final - profesional y directo */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              � Conversemos Sobre Tu Tienda
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12">
              Si te identificaste con algunos de los desafíos mencionados, 
              <strong>agenda una conversación sin compromiso</strong> para ver cómo podemos ayudarte.
            </p>
            
            {/* Formulario profesional para lead capture */}
            <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                📅 Agendar Conversación Gratuita
              </h3>
              <p className="text-slate-600 mb-6 text-sm">
                En 30 minutos revisamos tu situación específica y te damos 
                <strong>recomendaciones iniciales, tengas o no interés en trabajar juntos</strong>.
              </p>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Tu nombre completo" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Tu email principal" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  required 
                />
                <input 
                  type="tel" 
                  placeholder="WhatsApp (para coordinación)" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  required 
                />
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800" required>
                  <option value="">¿Qué vendes principalmente?</option>
                  <option value="moda">Moda y ropa</option>
                  <option value="belleza">Belleza y cuidado personal</option>
                  <option value="electronica">Electrónica y tecnología</option>
                  <option value="hogar">Hogar y decoración</option>
                  <option value="alimentos">Alimentos y bebidas</option>
                  <option value="deportes">Deportes y fitness</option>
                  <option value="otro">Otro</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800" required>
                  <option value="">¿Cuántas ventas haces al mes?</option>
                  <option value="0-10">0-10 ventas</option>
                  <option value="11-50">11-50 ventas</option>
                  <option value="51-100">51-100 ventas</option>
                  <option value="100+">Más de 100 ventas</option>
                </select>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:emerald-red-800 hover:to-emerald-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🔥 SÍ, QUIERO MI AUDITORÍA GRATUITA
                </button>
              </form>
              
              <div className="mt-6 space-y-2">
                <p className="text-xs text-slate-500">
                  ✅ 100% gratis • ✅ Solo tiendas en Lima • ✅ Resultados en la llamada
                </p>
                <p className="text-xs text-emerald-600 font-medium">
                  📞 Te contactamos en 24h para coordinar tu auditoría
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-emerald-200 text-sm">
              <span>🔒 Información 100% segura</span>
              <span>•</span>
              <span>📱 Respuesta en 24h máximo</span>
              <span>•</span>
              <span>🎯 Solo para tiendas online en Lima</span>
            </div>
            
            {/* Urgencia sutil */}
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-emerald-100 text-sm">
                ⚠️ <strong>Spots restantes: 3 de 7</strong> • La siguiente disponibilidad sería para marzo
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
