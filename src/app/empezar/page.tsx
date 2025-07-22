'use client';

import { useState } from 'react';

export default function EmpezarPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tienda: '',
    telefono: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-green-50 via-white to-emerald-50/30 min-h-screen flex items-center">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">🛒✅</div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6">
              ¡Tu Tienda Ya Está en la Lista!
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
              Te contactaremos en las próximas 24 horas para tu 
              <strong className="text-green-600"> auditoría gratuita</strong> y empezar a recuperar esos carritos abandonados.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6">
              <p className="text-green-800 font-semibold text-sm sm:text-base">
                🎯 Revisa tu email para los próximos pasos hacia más ventas recurrentes.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section - E-commerce B2C Focus */}
      <section id="form" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 relative overflow-hidden min-h-screen flex items-center">
        
        {/* Background pattern sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxNmEzNGEiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              
              {/* Left Column - Value Proposition para E-commerce */}
              <div className="text-center lg:text-left order-2 lg:order-1">
                
                {/* Promo estacional + Urgencia */}
                <div className="inline-flex items-center bg-red-100 border border-red-300 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                  <span className="text-red-700 font-semibold text-xs sm:text-sm">
                    🛒 Promo Invierno 2025 • Solo 7 Tiendas Este Mes
                  </span>
                </div>
                
                {/* Headline - M-A-G-I-C Pattern para E-commerce B2C */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                  ¿Tu Tienda Online en Lima Pierde
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700 block">
                    60-70% de Ventas en Carritos?
                  </span>
                </h1>
                
                {/* Problem + Solution para E-commerce */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  <strong className="text-slate-800">Sistema Orgánico Simple DFY E-commerce</strong> - 
                  Programa de 60 días que convierte abandono de carrito en 
                  <strong className="text-green-600"> clientes leales recurrentes</strong> sin gastar fortunas en ads.
                </p>
                
                {/* Key Benefits específicos para E-commerce */}
                <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-green-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Recupera carritos abandonados</strong> - Hasta 35% más conversiones</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-green-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Sin ads costosos</strong> - Estrategias orgánicas mobile-first</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-green-600 font-bold mt-0.5 sm:mt-1 text-sm sm:text-base">✓</span>
                    <span className="text-slate-700 text-sm sm:text-base"><strong>Clientes que recompran</strong> - Email marketing que funciona</span>
                  </div>
                </div>
                
                {/* Social Proof para E-commerce */}
                <div className="bg-slate-50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8">
                  <p className="text-xs sm:text-sm text-slate-600 mb-1 sm:mb-2">
                    <strong>Para Tiendas Online en Lima</strong> (moda, belleza, electrónica, alimentos)
                  </p>
                  <p className="text-xs text-slate-500">
                    Ventas anuales S/50,000-S/300,000 • 2-10 empleados • Listas para escalar
                  </p>
                </div>
              </div>
              
              {/* Right Column - Lead Form optimizado para E-commerce */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-8 border border-slate-200 order-1 lg:order-2">
                
                {/* Form Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    Auditoría Gratuita de Tu Tienda
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600">
                    <strong>Valor: $497</strong> • Análisis completo de conversión
                  </p>
                </div>
                
                {/* Lead Form - Baja Fricción para E-commerce */}
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Email Principal *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="tienda" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Tu Tienda Online *
                    </label>
                    <input
                      type="text"
                      id="tienda"
                      name="tienda"
                      required
                      value={formData.tienda}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="www.tutienda.com o nombre de tu tienda"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="telefono" className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-slate-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="+51 999 xxx xxx (opcional)"
                    />
                  </div>
                  
                  {/* CTA Button específico para E-commerce */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold text-base sm:text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                        <span className="text-sm sm:text-base">Analizando tu tienda...</span>
                      </span>
                    ) : (
                      <span className="text-sm sm:text-base">Conseguir Mi Auditoría Gratuita →</span>
                    )}
                  </button>
                  
                  {/* Trust Elements para E-commerce */}
                  <div className="text-center pt-3 sm:pt-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      🛡️ Información 100% segura • 🚫 Sin spam • 📊 Solo insights valiosos para tu tienda
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section - E-commerce específico */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 sm:mb-6">
                Lo que Incluye Tu Sistema (Valor: &gt;$8,000)
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                Todo lo necesario para <strong>convertir abandono en ventas recurrentes</strong> sin gastar fortunas en ads
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
              
              {/* Componente 1: HVHC - E-commerce */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DFY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🛒</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Auditoría y Configuración Funnel E-commerce
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Done For You.</strong> Configuramos tu funnel completo para recuperar carritos abandonados mobile-first.
                </p>
                <div className="bg-green-100 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $1,497
                </div>
              </div>

              {/* Componente 2: HVHC - E-commerce */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 sm:p-8 text-center relative">
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-blue-600 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full">
                  DFY/DWY
                </div>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📈</div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3">
                  Soporte Optimización 60 Días
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  <strong>Colaboración directa.</strong> Ajustes personalizados para ventas recurrentes en poco tiempo.
                </p>
                <div className="bg-blue-100 text-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold">
                  Valor: $997
                </div>
              </div>

              {/* Componente 3: HVLC - Email E-commerce */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DWY/DIY
                </div>
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Plantillas Email E-commerce
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Scripts probados.</strong> Sequences que generan clientes leales con bajo esfuerzo.
                </p>
                <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $797
                </div>
              </div>

              {/* Componente 4: HVLC - Contenido */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DIY
                </div>
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Guía Contenido Mobile-First
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Módulos DIY.</strong> Posts orgánicos que atraen más clientes sin costo adicional.
                </p>
                <div className="bg-amber-100 text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $597
                </div>
              </div>

              {/* Componente 5: HVLC - Comunidad */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border-2 border-teal-200 rounded-xl p-8 text-center relative">
                <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DWY/DIY
                </div>
                <div className="text-4xl mb-4">👥</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  Comunidad E-commerce Q&A
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  <strong>Foro exclusivo.</strong> Tips e-commerce que funcionan "una y otra vez".
                </p>
                <div className="bg-teal-100 text-teal-700 px-4 py-2 rounded-lg text-sm font-semibold">
                  Valor: $497
                </div>
              </div>
              
              {/* Espacio vacío para centrar el grid cuando hay 5 elementos */}
              <div className="hidden lg:block"></div>
            </div>

            {/* Bonos específicos para E-commerce */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                Bonos Exclusivos (Solo Promo Invierno 2025)
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Bono 1: Carrito E-commerce */}
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 rounded-xl p-6 text-center relative">
                  <div className="absolute top-3 right-3 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-3xl mb-3">🛒</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Checklist Carrito Básico DFY
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>1 semana.</strong> Guía para recuperar ventas abandonadas en Lima.
                  </p>
                  <div className="bg-rose-100 text-rose-700 px-3 py-1 rounded text-xs font-semibold">
                    Valor: $397
                  </div>
                </div>

                {/* Bono 2: Automatización E-commerce */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-xl p-6 text-center relative">
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-3xl mb-3">🤖</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Módulo Email Automatización DWY
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>3 días.</strong> Sequences que generan compras recurrentes.
                  </p>
                  <div className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded text-xs font-semibold">
                    Valor: $397
                  </div>
                </div>

                {/* Bono 3: Contenido E-commerce */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6 text-center relative">
                  <div className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-3xl mb-3">📹</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Revisión Contenido DIY
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>1 día.</strong> Posts que atraen más clientes sin costo.
                  </p>
                  <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded text-xs font-semibold">
                    Valor: $397
                  </div>
                </div>

                {/* Bono 4: SEO E-commerce */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 border-2 border-emerald-200 rounded-xl p-6 text-center relative">
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    BONO
                  </div>
                  <div className="text-3xl mb-3">🔍</div>
                  <h4 className="text-lg font-bold text-slate-800 mb-2">
                    Plantillas SEO Avanzado DIY
                  </h4>
                  <p className="text-sm text-slate-600 mb-3">
                    <strong>7 días.</strong> Optimización que funciona "una y otra vez".
                  </p>
                  <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded text-xs font-semibold">
                    Valor: $397
                  </div>
                </div>
              </div>
            </div>

            {/* Value Summary para E-commerce */}
            <div className="text-center bg-gradient-to-r from-slate-50 to-green-50 p-12 rounded-2xl border-2 border-green-200">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                <span className="line-through text-slate-500">Valor Total: $8,973</span>
              </h3>
              <h4 className="text-4xl font-bold text-green-600 mb-4">
                Tu Precio Promo Invierno: $797
              </h4>
              <p className="text-sm text-slate-600 mb-6">
                <strong>Alternativa:</strong> $797 inicial + 4% de ventas incrementales (ético para recurrencia)
                <br />
                <strong>O</strong> $1,997 one-time (full DFY para quick wins)
              </p>
              
              {/* Urgency Counter específico E-commerce */}
              <div className="bg-red-100 border border-red-300 rounded-lg p-4 mb-6 inline-block">
                <p className="text-red-700 font-semibold text-sm">
                  ⏰ Pierdes ventas cada segundo en tu carrito • Solo quedan 7 tiendas este mes
                </p>
              </div>
              
              <a 
                href="#form" 
                className="inline-flex items-center justify-center bg-green-600 text-white px-12 py-5 text-xl font-bold rounded-xl hover:bg-green-700 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                Reservar Mi Auditoría Ahora →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section - E-commerce adaptado */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-cyan-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="text-6xl mb-6">🛡️</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              100% Libre de Riesgos para Tu Tienda
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border border-blue-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Garantía Incondicional (2 Semanas)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Si no estás completamente satisfecho con tu auditoría, te devolvemos el 100% sin preguntas.
                </p>
              </div>
              
              <div className="bg-white border border-green-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  Garantía "Mejor que Dinero" (30 Días)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Si implementas y no ves más ventas, continuamos gratis hasta que recuperes carritos abandonados.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-slate-700 mb-8">
              <strong>El único riesgo es seguir perdiendo ventas cada día que tu carrito permanezca vacío.</strong>
            </p>
            
            <a 
              href="#form" 
              className="inline-flex items-center justify-center bg-blue-600 text-white px-10 py-4 text-lg font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 shadow-lg"
            >
              Conseguir Mi Auditoría Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA - Countdown E-commerce */}
      <section className="section-padding bg-gradient-to-r from-red-600 to-orange-600 text-white text-center">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              5...4...3...2...1... ¡No Pierdas Más Ventas!
            </h2>
            <p className="text-xl text-red-100 mb-8 leading-relaxed">
              Cada carrito abandonado es dinero perdido. Cada segundo que esperas, 
              <strong> tus competidores están capturando esas ventas</strong>. Actúa ahora.
            </p>
            <a 
              href="#form" 
              className="inline-flex items-center justify-center bg-white text-red-600 px-12 py-5 text-xl font-bold rounded-xl hover:bg-red-50 transition-colors duration-200 shadow-xl"
            >
              Sí, Quiero Recuperar Mis Ventas Ahora →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
