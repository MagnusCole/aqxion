// sections/AboutSection.tsx
"use client"

import React from 'react'

export interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: React.ReactNode | string;
  secondaryDescription?: React.ReactNode | string;
  className?: string;
}

/**
 * Sección About - Simplificada para mantener congruencia con el resto de la UI
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Sobre AQXION",
  subtitle = "Nuestra misión",
  description = "AQXION es una plataforma de adquisición estratégica enfocada en comprar, mejorar y escalar empresas de servicios en Latinoamérica.",
  secondaryDescription = "Con más de 120 años de experiencia conjunta y transacciones por más de $500 millones, nuestro equipo aporta capital paciente y una visión de largo plazo. Nos especializamos en empresas de servicios B2B con flujos de caja estables y potencial de digitalización.",
  className = ""
}) => {
  const features = [
    {
      title: "Adquisición",
      text: 'Adquirimos empresas de servicios rentables en LATAM'
    },
    {
      title: "Mejora",
      text: 'Mejoramos operaciones con tecnología y excelencia operativa'
    },
    {
      title: "Escalamiento",
      text: 'Escalamos negocios con capital estratégico y experiencia'
    },
    {
      title: "Preservación",
      text: 'Preservamos el legado mientras impulsamos el crecimiento'
    }
  ];

  return (
    <section id="about" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado centrado - Basado en regla de tercios */}
        <div className="max-w-[61.8%] mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Contenido principal - Grid usando proporción áurea */}
        <div className="grid grid-cols-1 lg:grid-cols-[61.8%_38.2%] gap-10 items-center">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl mb-6 text-gray-800 leading-[1.618]">
              {description}
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-[1.618]">
              {secondaryDescription}
            </p>
            
            {/* Stats en proporción áurea */}
            <div className="grid grid-cols-2 gap-6 mt-[1.618rem] pt-6 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">120+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">$500M+</div>
                <div className="text-sm text-gray-600">En transacciones</div>
              </div>
            </div>
          </div>
          
          {/* Tarjetas en grid con proporción áurea */}
          <div className="grid grid-cols-2 gap-[0.618rem]">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-md flex flex-col"
                style={{aspectRatio: "1/1"}} // Aproximación de proporción áurea vertical
              >
                <h3 className="font-bold text-lg mb-2 text-blue-600">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}