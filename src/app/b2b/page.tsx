'use client';

import { useState } from 'react';

export default function B2BPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    tipoNegocio: 'B2B',
    ingresos: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío (aquí integrarías con tu CRM/email service)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
    }, 1500);
  };

  if (showThankYou) {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50/30 min-h-screen flex items-center">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">🚀✅</div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              ¡Tu Empresa B2B Ya Está Registrada!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Te contactaremos en las próximas 24 horas para tu 
              <strong className="text-blue-600"> auditoría estratégica gratuita</strong> y empezar a generar clientes recurrentes de alto valor.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
              <p className="text-blue-800 font-semibold text-sm sm:text-base">
                🎯 Revisa tu email para el análisis personalizado de tu modelo B2B.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section - B2B Focus */}
      <section id="form" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden min-h-screen flex items-center">
        
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyNTYzZWIiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Left Column - Value Proposition para B2B */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                
                {/* Promo estacional + Urgencia */}
                <div className="inline-flex items-center bg-red-100 border border-red-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                  <span className="text-red-700 font-semibold text-xs sm:text-sm">
                    🚀 Programa B2B 2025 • Solo 5 Empresas Este Mes
                  </span>
                </div>
                
                {/* Headline - M-A-G-I-C Pattern para B2B */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                  ¡Transforma Tu PYME B2B en Lima:
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 block">
                    Más Clientes de Alto Valor Sin Ads Costosos
                  </span>
                </h1>
                
                {/* Problem + Solution para B2B */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  <strong className="text-slate-800">Sistema Orgánico Simple DFY B2B</strong> - 
                  Programa de 60-90 días que convierte ciclos largos en 
                  <strong className="text-blue-600"> contratos recurrentes de alto valor</strong>, en poco tiempo y una y otra vez.
                </p>
                
                {/* Key Benefits específicos para B2B */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-blue-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Leads recurrentes data-driven</strong> - LinkedIn + outreach personalizado</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-blue-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Ciclos de venta más cortos</strong> - Automatización IA sin perder el toque personal</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-blue-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Contratos de mayor valor</strong> - Estrategias probadas para consultorías y agencias</span>
                  </div>
                </div>
                
                {/* Social Proof para B2B */}
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
                  <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">
                    <strong>Para Empresas B2B en Lima</strong> (consultorías, agencias, software, servicios profesionales)
                  </p>
                  <p className="text-xs text-slate-500">
                    Facturación anual S/50,000-S/400,000 • 2-7 empleados • Listas para escalar con IA
                  </p>
                </div>
              </div>
              
              {/* Right Column - Lead Form optimizado para B2B */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-slate-200 order-1 lg:order-2">
                
                {/* Form Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Auditoría Estratégica B2B Gratuita
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600">
                    <strong>Valor: $797</strong> • Análisis completo de tu modelo B2B
                  </p>
                </div>
                
                {/* Lead Form - Clasificación B2B */}
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                  
                  <div>
                    <label htmlFor="nombre" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Email Corporativo *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="tu@empresa.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="empresa" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Tu Empresa B2B *
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Nombre de tu consultora/agencia/empresa"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ingresos" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Facturación Anual Aproximada *
                    </label>
                    <select
                      id="ingresos"
                      name="ingresos"
                      required
                      value={formData.ingresos}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                    >
                      <option value="">Selecciona rango</option>
                      <option value="50k-100k">S/50,000 - S/100,000</option>
                      <option value="100k-200k">S/100,000 - S/200,000</option>
                      <option value="200k-400k">S/200,000 - S/400,000</option>
                      <option value="400k+">Más de S/400,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      WhatsApp Corporativo
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="+51 999 xxx xxx (opcional)"
                    />
                  </div>
                  
                  {/* CTA Button específico para B2B */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                        <span className="text-sm sm:text-base">Analizando tu modelo B2B...</span>
                      </span>
                    ) : (
                      <span className="text-sm sm:text-base">Reservar Mi Auditoría Estratégica →</span>
                    )}
                  </button>
                  
                  {/* Trust Elements para B2B */}
                  <div className="text-center pt-3 sm:pt-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      🛡️ Información confidencial • 🚫 Sin spam • 📊 Solo estrategias probadas para B2B
                    </p>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemas/Dolores Section - B2B específico */}
      <section className="py-12 sm:py-16 lg:py-20 bg-red-50/30">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 sm:mb-12">
              ¿Tu Empresa B2B Enfrenta Estos Problemas?
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              
              {/* Dolor 1: Ciclos largos */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-red-200">
                <div className="text-3xl sm:text-4xl mb-4">⏰</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  Ciclos de Venta Eternos
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>6-12 meses</strong> para cerrar un contrato. Leads que se enfrían. 
                  Competencia que cierra más rápido.
                </p>
              </div>
              
              {/* Dolor 2: Ads ineficientes */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-red-200">
                <div className="text-3xl sm:text-4xl mb-4">💸</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  LinkedIn Ads que No Convierten
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>$5,000+ mensuales</strong> en ads sin ROI claro. 
                  CPM altísimo, leads fríos, sin seguimiento efectivo.
                </p>
              </div>
              
              {/* Dolor 3: Dependencia de referidos */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-red-200">
                <div className="text-3xl sm:text-4xl mb-4">🔗</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  Solo Referidos y Networking
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>100% dependiente</strong> de contactos existentes. 
                  Sin sistema escalable para nuevos clientes B2B.
                </p>
              </div>
              
              {/* Dolor 4: Propuestas que no cierran */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-red-200">
                <div className="text-3xl sm:text-4xl mb-4">📄</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  Propuestas que Se Quedan en "Lo Vemos"
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  <strong>70% de propuestas</strong> sin respuesta. 
                  Procurement que alarga decisiones. Sin urgencia de compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solución/Oferta Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
                Sistema Orgánico Simple DFY B2B (Valor: &gt;$10,000)
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                <strong>En la auditoría inicial</strong>, personalizamos todo para B2B: leads recurrentes data-driven, 
                cycles más cortos, contratos de mayor valor - <strong>una y otra vez</strong>.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              
              {/* Componente 1: DFY Funnel B2B */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DFY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Auditoría y Funnel B2B Setup
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Done For You.</strong> Configuramos LinkedIn + outreach personalizado para leads B2B recurrentes.
                </p>
                <div className="bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $1,997
                </div>
              </div>

              {/* Componente 2: Optimización B2B */}
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-purple-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DFY/DWY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Optimización Data-Driven 90 Días
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Colaborativo.</strong> Ajustes basados en data para contratos recurrentes de alto valor.
                </p>
                <div className="bg-purple-100 text-purple-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $1,497
                </div>
              </div>

              {/* Componente 3: Plantillas Outreach */}
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DWY/DIY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Plantillas Outreach B2B
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Scripts probados.</strong> Sequences personalizadas que generan reuniones con decisores.
                </p>
                <div className="bg-emerald-100 text-emerald-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $997
                </div>
              </div>

              {/* Componente 4: Contenido LinkedIn */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DIY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Guía Contenido LinkedIn B2B
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Módulos DIY.</strong> Posts que posicionan tu expertise y atraen decisores de C-Level.
                </p>
                <div className="bg-amber-100 text-amber-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $797
                </div>
              </div>

              {/* Componente 5: Comunidad B2B */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-teal-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DWY/DIY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👥</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Comunidad B2B Lima
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Network exclusivo.</strong> Foro privado para tips, partnerships y referencias entre empresas B2B.
                </p>
                <div className="bg-teal-100 text-teal-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $597
                </div>
              </div>

              {/* Spacer para grid balance */}
              <div className="hidden lg:block"></div>
            </div>

            {/* Bonos Section */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                🎁 Bonos Exclusivos B2B (Si Te Unes Esta Semana)
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                
                {/* Bono 1: Copy B2B */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-4 sm:p-6 text-center relative">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">✍️</div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">
                    Checklist Copy B2B
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                    <strong>1 semana.</strong> Mensajes que atraen decisores C-Level en Lima.
                  </p>
                  <div className="bg-rose-100 text-rose-700 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-semibold">
                    Valor: $497
                  </div>
                </div>

                {/* Bono 2: Automatización IA */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-4 sm:p-6 text-center relative">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🤖</div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">
                    Automatización IA B2B
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                    <strong>3 días.</strong> Sequences que nutren prospects hasta cerrar contrato.
                  </p>
                  <div className="bg-indigo-100 text-indigo-700 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-semibold">
                    Valor: $797
                  </div>
                </div>

                {/* Bono 3: Revisión Contenido */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 sm:p-6 text-center relative">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">👁️</div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">
                    Revisión Contenido 1:1
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                    <strong>1 día.</strong> Sesión personal para optimizar tu LinkedIn B2B.
                  </p>
                  <div className="bg-green-100 text-green-700 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-semibold">
                    Valor: $397
                  </div>
                </div>

                {/* Bono 4: Funnel Avanzado */}
                <div className="bg-gradient-to-br from-violet-50 to-purple-50 border-2 border-violet-200 rounded-xl p-4 sm:p-6 text-center relative">
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🚀</div>
                  <h4 className="text-sm sm:text-lg font-bold text-slate-800 mb-1 sm:mb-2">
                    Funnel Avanzado B2B
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 sm:mb-3">
                    <strong>7 días.</strong> Templates para funnels que cierran contratos recurrentes.
                  </p>
                  <div className="bg-violet-100 text-violet-700 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs font-semibold">
                    Valor: $697
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
                Inversión Inteligente B2B
              </h2>
              
              {/* Valor total apilado */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-blue-200 mb-6 sm:mb-8">
                <p className="text-lg sm:text-xl text-slate-600 mb-4">
                  <span className="line-through text-slate-500">Valor Total: $10,973</span>
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
                  Tu Inversión Hoy:
                </p>
                <div className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                  <strong>$797 inicial</strong> (setup DFY común) + <strong>5% ingresos incrementales</strong><br/>
                  <strong>O</strong> $2,497 one-time (full DFY para escalado rápido)
                </div>
              </div>
              
              {/* Urgency Counter específico B2B */}
              <div className="bg-red-100 border border-red-300 rounded-lg p-3 sm:p-4 mb-6 inline-block">
                <p className="text-red-700 font-semibold text-sm sm:text-base">
                  ⚡ Solo 5 empresas B2B este mes • Cohort inicia próxima semana
                </p>
              </div>
              
              <a 
                href="#form" 
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Asegurar Mi Spot B2B Ahora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios B2B */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-5xl mx-auto">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 text-center">
              Empresas B2B que Ya Están Escalando
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Testimonio 1: Agencia */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-4">🏢</div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 italic leading-relaxed">
                  "Gracias a esto, nuestra agencia duplicó contratos recurrentes. De 3 clientes a 8 en 90 días."
                </p>
                <p className="font-semibold text-slate-800">
                  Juan Carlos M.<br/>
                  <span className="text-xs sm:text-sm text-slate-500">Agencia Digital, Miraflores</span>
                </p>
              </div>
              
              {/* Testimonio 2: Consultora */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-4">💼</div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 italic leading-relaxed">
                  "Mi consultora pasó de proyectos de $5K a contratos anuales de $25K. LinkedIn cambió todo."
                </p>
                <p className="font-semibold text-slate-800">
                  María Elena R.<br/>
                  <span className="text-xs sm:text-sm text-slate-500">Consultora RRHH, San Isidro</span>
                </p>
              </div>
              
              {/* Testimonio 3: Software */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-3xl sm:text-4xl mb-4">💻</div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 italic leading-relaxed">
                  "De vender 1 licencia/mes a cerrar 15 empresas nuevas. El sistema B2B funciona de verdad."
                </p>
                <p className="font-semibold text-slate-800">
                  Carlos A.<br/>
                  <span className="text-xs sm:text-sm text-slate-500">SaaS B2B, La Molina</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantías Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">
              100% Libre de Riesgos para Tu Empresa B2B
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              
              {/* Garantía 1: Reembolso */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-green-200">
                <div className="text-3xl sm:text-4xl mb-4">🛡️</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  Garantía Incondicional 14 Días
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Si no ves progreso tangible en tu pipeline B2B en 2 semanas, 
                  <strong className="text-green-600"> reembolso completo</strong> sin preguntas.
                </p>
              </div>
              
              {/* Garantía 2: Soporte extendido */}
              <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-green-200">
                <div className="text-3xl sm:text-4xl mb-4">🤝</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                  Soporte Extendido Gratuito
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Si completas todas las activaciones, <strong className="text-green-600">30 días extra gratis</strong> 
                  de soporte hasta que veas los primeros contratos cerrar.
                </p>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-xl p-6 sm:p-8 border border-green-300">
              <p className="text-base sm:text-lg text-green-800 font-semibold leading-relaxed">
                <strong>"Si no logras alivio en tus dolores B2B en poco tiempo, continuamos gratis hasta que veas valor – 
                libre de riesgos, llevando a más clientes de alto valor una y otra vez."</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl mx-auto text-center">
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Ya Tienes el Conocimiento B2B. Es Hora de Actuar.
            </h2>
            
            <p className="text-lg sm:text-xl mb-8 sm:mb-12 leading-relaxed opacity-90">
              <strong>5...4...3...2...1... ¡Hecho!</strong><br/>
              Los spots para empresas B2B se llenan rápido en Lima.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a 
                href="#form" 
                className="bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-blue-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
              >
                ¡Únete Ahora y Logra Clientes B2B Una y Otra Vez!
              </a>
              <a 
                href="#form" 
                className="text-white border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 w-full sm:w-auto"
              >
                Ver Más Detalles
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
