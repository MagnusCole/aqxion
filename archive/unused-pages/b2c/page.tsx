import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Marketing Orgánico para Negocios Locales B2C Lima 2025 – Más Citas Recurrentes | AQXION',
  description: 'Sistema completo para PYMEs locales en Lima. Resuelve baja afluencia, publicidad costosa y poco tiempo. Más clientes leales con poco costo.',
  keywords: 'marketing orgánico locales Lima, citas recurrentes B2C Perú 2025, salón belleza Lima, dentista Lima, spa Lima, Google My Business',
  robots: 'noindex, nofollow', // Para uso interno
};

export default function B2CPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40 text-center relative overflow-hidden min-h-screen flex items-center">
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgNi00IDQgNnYxMmgtMTJ6Ci8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto">
            
            {/* Badge elegante */}
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              🏢 Para Negocios Locales en Lima
            </div>
            
            {/* H1 magnético con M-A-G-I-C */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 mb-10 leading-tight tracking-tight">
              ¡Llena Tu Negocio Local en Lima: 
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700">
                Más Clientes Leales
              </span>
              <br />
              Sin Ads Costosos!
            </h1>
            
            {/* Subtítulo que explica dolores y desires */}
            <p className="text-xl text-slate-700 mb-16 leading-relaxed max-w-3xl mx-auto">
              <strong className="text-slate-900">En Poco Tiempo y Una y Otra Vez</strong>
              <br />
              Sistema probado para salones, dentistas, spas y clínicas que resuelve baja afluencia, 
              subutilización de agendas y competencia feroz en Google Maps.
            </p>
            
            {/* Imagen descriptiva placeholder */}
            <div className="mb-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl p-8 max-w-4xl mx-auto">
              <p className="text-lg text-slate-600 italic">
                📸 Imagen: Fondo de Lima moderna con salones de belleza, consultorios dentales y spas exitosos. 
                Clientes felices saliendo de los negocios, agenda llena visible, reseñas 5 estrellas en Google.
              </p>
            </div>
            
            {/* CTA Principal con formulario */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl max-w-md mx-auto border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                🎯 Reserva Tu Auditoría Gratuita Ahora
              </h3>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Tu nombre completo" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Tu email principal" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none"
                  required 
                />
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none" required>
                  <option value="">¿Qué tipo de negocio tienes?</option>
                  <option value="salon">Salón de belleza</option>
                  <option value="dentista">Consultorio dental</option>
                  <option value="spa">Spa / Centro de estética</option>
                  <option value="clinica">Clínica / Centro médico</option>
                  <option value="otro">Otro negocio local</option>
                </select>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  🚀 QUIERO MI AUDITORÍA GRATIS AHORA
                </button>
              </form>
              
              <p className="text-xs text-slate-500 mt-4 text-center">
                ✅ 100% Gratis • ✅ Solo Lima • ✅ Resultados en 7 días
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Problemas/Dolores */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                ¿Te Suena Familiar Esta Realidad?
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">📉</div>
                <h3 className="text-lg font-bold text-red-800 mb-3">
                  50-60% Subutilización
                </h3>
                <p className="text-red-700">
                  Tu agenda tiene muchos espacios vacíos. Podrías atender el doble de clientes.
                </p>
              </div>
              
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">💸</div>
                <h3 className="text-lg font-bold text-orange-800 mb-3">
                  Ads Cada Vez Más Caros
                </h3>
                <p className="text-orange-700">
                  Facebook e Instagram Ads suben de precio y funcionan peor cada mes.
                </p>
              </div>
              
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-yellow-800 mb-3">
                  Falta de Tiempo
                </h3>
                <p className="text-yellow-700">
                  Atender clientes + marketing + administración = sin vida personal.
                </p>
              </div>
              
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-lg font-bold text-purple-800 mb-3">
                  Competencia en Google Maps
                </h3>
                <p className="text-purple-700">
                  Otros negocios aparecen antes que tú en búsquedas locales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Solución/Oferta */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-teal-50/40">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Sistema Orgánico Simple DFY Local B2C Lima
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                <strong className="text-emerald-700">Programa de 60 días</strong> diseñado específicamente 
                para PYMEs locales que resuelve baja afluencia, publicidad costosa y poco tiempo.
              </p>
            </div>
            
            {/* Componentes Principales con Valor Apilado */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
                Lo Que Incluye (Valor Total: $7,347)
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-emerald-800 mb-3">
                    🎯 Auditoría y Configuración Perfil Local DFY
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Nosotros configuramos tu Google My Business para máxima visibilidad local sin ads.
                  </p>
                  <p className="text-emerald-700 font-semibold">Valor: $1,297</p>
                </div>
                
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-teal-800 mb-3">
                    🔧 Soporte Optimización DFY/DWY
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Ajustes colaborativos para citas recurrentes en poco tiempo.
                  </p>
                  <p className="text-teal-700 font-semibold">Valor: $997</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-blue-800 mb-3">
                    📧 Plantillas Reviews Outreach DWY/DIY
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Herramientas para conseguir reseñas leales con poco costo.
                  </p>
                  <p className="text-blue-700 font-semibold">Valor: $797</p>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-green-800 mb-3">
                    📱 Guía Contenido Local DIY
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Módulos para posts orgánicos low-cost en redes sociales.
                  </p>
                  <p className="text-green-700 font-semibold">Valor: $697</p>
                </div>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-indigo-800 mb-3">
                    💬 Comunidad Q&A DWY/DIY
                  </h4>
                  <p className="text-slate-600 mb-3">
                    Foro exclusivo para tips locales una y otra vez.
                  </p>
                  <p className="text-indigo-700 font-semibold">Valor: $497</p>
                </div>
              </div>
            </div>
            
            {/* Bonos con intervalos cortos */}
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-8 text-white mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                🎁 Bonos Exclusivos (Solo Este Mes)
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">✅ Checklist Reviews Básico DFY</h4>
                  <p className="text-emerald-100 text-sm mb-2">
                    Guía de 1 Semana para Reseñas que Atraen Clientes Locales en Lima
                  </p>
                  <p className="font-semibold text-yellow-300">Valor: $397</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">🤖 Módulo Appointments Automatización DWY</h4>
                  <p className="text-emerald-100 text-sm mb-2">
                    Módulo de 3 Días para Sequences que Generan Citas Recurrentes
                  </p>
                  <p className="font-semibold text-yellow-300">Valor: $597</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">📝 Revisión Contenido DIY</h4>
                  <p className="text-emerald-100 text-sm mb-2">
                    Sesión de 1 Día para Posts que Atraen Más Clientes sin Costo
                  </p>
                  <p className="font-semibold text-yellow-300">Valor: $297</p>
                </div>
                
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <h4 className="font-bold mb-2">🔍 Plantillas Local SEO Avanzado DIY</h4>
                  <p className="text-emerald-100 text-sm mb-2">
                    Set de 7 Días para Optimización que Funciona Una y Otra Vez
                  </p>
                  <p className="font-semibold text-yellow-300">Valor: $497</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Beneficios con Tendencias 2025 */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                ¿Por Qué Funciona? (Tendencias 2025)
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Rápido
                </h3>
                <p className="text-slate-600">
                  Local SEO creció +15% en sector belleza Perú. 
                  Ves resultados en las primeras 2 semanas.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">😌</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Fácil
                </h3>
                <p className="text-slate-600">
                  Google Business Profile genera +25% más engagement. 
                  Nosotros lo configuramos por ti.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Creíble
                </h3>
                <p className="text-slate-600">
                  Estrategias probadas en cientos de negocios locales. 
                  Video testimonials de clientes reales.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Disfrutable
                </h3>
                <p className="text-slate-600">
                  Ve cómo tu agenda se llena naturalmente. 
                  Clientes que te buscan específicamente.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Sostenible
                </h3>
                <p className="text-slate-600">
                  Privacidad de datos y sostenibilidad. 
                  Construyes para el largo plazo.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Moderno
                </h3>
                <p className="text-slate-600">
                  Video content y engagement recurrente. 
                  Adapto a cambios del algoritmo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Lo Que Dicen Nuestros Clientes
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💇‍♀️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Ana Pérez</h4>
                    <p className="text-sm text-slate-600">Salón Bella, Miraflores</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-3">
                  "Mi salón de belleza duplicó citas recurrentes en 6 semanas. 
                  Ahora tengo lista de espera los fines de semana."
                </p>
                <div className="text-emerald-500">⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🦷</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Dr. Carlos Mendoza</h4>
                    <p className="text-sm text-slate-600">Clínica Dental, San Isidro</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-3">
                  "Pasé de 2-3 pacientes por día a agenda completa. 
                  El sistema realmente funciona para consultorios."
                </p>
                <div className="text-emerald-500">⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧘‍♀️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">María González</h4>
                    <p className="text-sm text-slate-600">Spa Relax, La Molina</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-3">
                  "En 3 semanas mi spa apareció primero en Google Maps. 
                  Los clientes vienen solos ahora."
                </p>
                <div className="text-emerald-500">⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-808">Dr. Luis Torres</h4>
                    <p className="text-sm text-slate-600">Clínica Estética, Surco</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-3">
                  "Dejé de gastar S/3,000 en Facebook Ads. 
                  Ahora tengo más pacientes y gasto menos."
                </p>
                <div className="text-emerald-500">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios y Valor Apilado */}
      <section className="section-padding bg-gradient-to-br from-slate-50 to-emerald-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Inversión (Menos Que Un Empleado Part-Time)
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Si Contrates Todo Por Separado:
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Configuración Google My Business</span>
                  <span className="font-bold text-slate-800">$1,297</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Optimización Continua</span>
                  <span className="font-bold text-slate-800">$997</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Templates Reviews</span>
                  <span className="font-bold text-slate-800">$797</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Guía Contenido Local</span>
                  <span className="font-bold text-slate-800">$697</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-slate-50 rounded-lg">
                  <span className="text-slate-700">Comunidad Privada</span>
                  <span className="font-bold text-slate-800">$497</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-yellow-100 rounded-lg">
                  <span className="text-slate-700">4 Bonos Exclusivos</span>
                  <span className="font-bold text-slate-800">$1,788</span>
                </div>
              </div>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-slate-800">Valor Total:</span>
                  <span className="text-emerald-600">$6,073</span>
                </div>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-500 rounded-2xl p-8 text-white border-4 border-yellow-400">
                <div className="text-yellow-300 font-bold mb-2 text-sm">⭐ POPULAR</div>
                <h3 className="text-2xl font-bold mb-4">Setup + Success Share</h3>
                <div className="text-4xl font-bold mb-2">$597</div>
                <p className="mb-4">inicial + 4% de ingresos incrementales</p>
                <p className="text-sm text-emerald-100">
                  Ético para recurrencia. Solo pagas más cuando ganas más.
                </p>
                <button className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold mt-4 hover:bg-emerald-50 transition-colors duration-200">
                  Elegir Este Plan
                </button>
              </div>
              
              <div className="bg-slate-600 rounded-2xl p-8 text-white">
                <div className="text-slate-300 font-bold mb-2 text-sm">🚀 QUICK WINS</div>
                <h3 className="text-2xl font-bold mb-4">Full DFY One-Time</h3>
                <div className="text-4xl font-bold mb-2">$1,497</div>
                <p className="mb-4">pago único, todo incluido</p>
                <p className="text-sm text-slate-300">
                  Para quick wins sin pagos recurrentes.
                </p>
                <button className="w-full bg-white text-slate-600 py-3 rounded-xl font-bold mt-4 hover:bg-slate-50 transition-colors duration-200">
                  Elegir Este Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12">
              Garantías Sin Riesgos
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Reembolso Incondicional
                </h3>
                <p className="text-green-700 mb-4">
                  Si en 2 semanas no estás satisfecho, 
                  te devolvemos todo tu dinero sin preguntas.
                </p>
                <p className="text-sm text-green-600">
                  ✅ 14 días de garantía total
                </p>
              </div>
              
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  Soporte Extra Condicional
                </h3>
                <p className="text-blue-700 mb-4">
                  Si completas todas las activaciones y no ves más citas en 30 días, 
                  continuamos gratis hasta que logres valor.
                </p>
                <p className="text-sm text-blue-600">
                  ✅ Soporte extra gratuito por 30 días
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-emerald-100 rounded-2xl p-6">
              <p className="text-xl text-emerald-800 font-semibold">
                "Si no logras más citas en 30 días, continuamos gratis hasta valor – 
                libre de riesgos, llevando a más clientes leales una y otra vez con poco costo"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Escasez/Urgencia */}
      <section className="section-padding bg-red-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              ⚠️ Solo 5 Spots Disponibles Este Mes
            </h2>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-xl mb-6">
                Para garantizar resultados de calidad, solo trabajamos con 
                5 negocios locales por mes en Lima.
              </p>
              
              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="bg-white text-red-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  5
                </div>
                <div className="text-4xl">...</div>
                <div className="bg-white text-red-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  4
                </div>
                <div className="text-4xl">...</div>
                <div className="bg-white text-red-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  3
                </div>
                <div className="text-4xl">...</div>
                <div className="bg-white text-red-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  2
                </div>
                <div className="text-4xl">...</div>
                <div className="bg-white text-red-600 rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">
                  1
                </div>
              </div>
              
              <p className="text-lg text-red-200 mb-4">
                El cohort inicia en 1 semana. Los bonos expiran el 31 de enero.
              </p>
              
              <div className="bg-yellow-400 text-black rounded-xl p-4">
                <h3 className="text-xl font-bold mb-2">
                  ¡Últimos Spots! Los Bonos Expiran en:
                </h3>
                <div className="flex justify-center gap-4 text-2xl font-bold">
                  <div className="text-center">
                    <div>06</div>
                    <div className="text-sm">DÍAS</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>14</div>
                    <div className="text-sm">HORAS</div>
                  </div>
                  <div>:</div>
                  <div className="text-center">
                    <div>23</div>
                    <div className="text-sm">MIN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-br from-emerald-600 to-green-600 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              ¡Únete Ahora y Logra Citas Una y Otra Vez!
            </h2>
            
            <p className="text-xl text-emerald-100 mb-12">
              No dejes que otro negocio tome tu lugar. 
              <strong>Reserva tu spot ahora</strong> antes que se acaben.
            </p>
            
            {/* Formulario Final */}
            <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                🚀 Formulario de Registro
              </h3>
              
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Nombre completo" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email principal" 
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800"
                  required 
                />
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800" required>
                  <option value="">Tipo de Negocio Local</option>
                  <option value="salon">Salón de belleza / Peluquería</option>
                  <option value="dentista">Consultorio dental / Ortodoncista</option>
                  <option value="spa">Spa / Centro de estética</option>
                  <option value="clinica">Clínica / Centro médico</option>
                  <option value="fisio">Fisioterapia / Rehabilitación</option>
                  <option value="otro">Otro negocio local</option>
                </select>
                <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none text-slate-800" required>
                  <option value="">Ingresos Aproximados (Mensual)</option>
                  <option value="s50k-s100k">S/50,000 - S/100,000</option>
                  <option value="s100k-s200k">S/100,000 - S/200,000</option>
                  <option value="s200k-s300k">S/200,000 - S/300,000</option>
                  <option value="s300k+">Más de S/300,000</option>
                </select>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-500 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-600 hover:to-emerald-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  🎯 ¡ÚNETE AHORA Y LOGRA CITAS UNA Y OTRA VEZ!
                </button>
              </form>
              
              <p className="text-xs text-slate-500 mt-4">
                ✅ Proceso seguro • ✅ Solo 5 spots/mes • ✅ Bonos expiran pronto
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-emerald-200 text-sm">
              <span>🔒 Información 100% segura</span>
              <span>•</span>
              <span>📞 Contacto inmediato</span>
              <span>•</span>
              <span>🎯 Solo negocios locales Lima</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding bg-slate-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="flex flex-wrap justify-center gap-4 text-slate-400 text-sm mb-6">
              <a href="/privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <span>|</span>
              <a href="/terminos" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <span>|</span>
              <a href="mailto:local@aqxion.com" className="hover:text-white transition-colors">
                📧 local@aqxion.com
              </a>
              <span>|</span>
              <a href="https://facebook.com/aqxion" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                📘 Facebook
              </a>
              <span>|</span>
              <a href="https://maps.google.com/aqxion" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                🗺️ Google My Business
              </a>
            </div>
            
            <p className="text-slate-500 text-sm">
              © 2025 AQXION - Sistema Orgánico Simple DFY Local B2C Lima
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
