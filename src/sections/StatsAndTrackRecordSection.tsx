// sections/StatsAndTrackRecordSection.tsx
"use client";

import React from 'react';

/**
 * Interfaces para parametrización de StatsAndTrackRecordSection
 */
export interface StatsAndTrackRecordSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * Sección de Estadísticas y Trayectoria - Simplificada
 */
export const StatsAndTrackRecordSection: React.FC<StatsAndTrackRecordSectionProps> = ({
  title = "Nuestra Trayectoria Comprobada",
  subtitle = "Resultados tangibles que respaldan nuestra capacidad para preservar tu legado y crear valor",
  className = ""
}) => {
  // Datos simplificados
  const features = [
    {
      title: 'Inteligencia Empresarial',
      description: 'Adquisición y optimización de 15+ empresas con un crecimiento promedio del 40% en menos de 2 años.'
    },
    {
      title: 'Alcance Internacional',
      description: 'Presencia operativa en 5 países con un equipo de más de 50 profesionales especializados en M&A.'
    },
    {
      title: 'Capital Estratégico',
      description: 'Más de $25M de capital invertido en empresas adquiridas y 20+ años de experiencia en crecimiento.'
    },
    {
      title: 'Transformación Digital',
      description: 'Mejora de infraestructura tecnológica con expansión de clientes del 40% en solo 12 meses.'
    },
    {
      title: 'Preservación de Legado',
      description: 'Mantenimiento del 90% del equipo original en empresas adquiridas con mejoras estructurales.'
    },
    {
      title: 'Crecimiento Sostenible',
      description: 'Desarrollo de nuevos mercados en LATAM con incrementos de hasta 65% en la rentabilidad.'
    }
  ];

  return (
    <section id="track-record" className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Encabezado usando proporción áurea para espaciado */}
        <header className="text-center mb-[2.618rem]">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-[0.618rem] tracking-tight leading-[1.2]">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-[61.8%] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </header>

        {/* Grid siguiendo principio de ley de Hick (agrupación visual óptima) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.272rem]">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg border border-gray-100 transition-shadow duration-300 hover:shadow-md"
              style={{minHeight: "calc(120px * 1.618)"}} // Altura mínima basada en proporción áurea
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-[0.618rem]">{feature.title}</h3>
              <p className="text-gray-600 leading-[1.618]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};