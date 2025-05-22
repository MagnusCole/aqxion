// sections/StatsAndTrackRecordSection.tsx
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Section } from '../components/composables/layout/Section';
import { Container } from '../components/composables/layout/Container';
import { Text } from '../components/atoms/Text';
import { Heading } from '../components/atoms/Heading';
import { FeatureIcon } from '../components/composables/data-display/FeatureIcon';

/**
 * Sección combinada de Stats y TrackRecord - Rediseñada con estilo Apple
 * Implementa tarjetas a pantalla completa con desplazamiento horizontal
 */
// Estilos para las flechas de navegación y ocultar la barra de desplazamiento
const carouselStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;            /* Chrome, Safari and Opera */
  }
  
  .navigation-arrows {
     position: absolute;
     bottom: 1.5rem;
     right: 1rem;
     display: flex;
     gap: 0.75rem;
     z-index: 30;
   }
   
   .arrow-button {
     width: 40px;
     height: 40px;
     border-radius: 50%;
     background: rgba(255, 255, 255, 0.2);
     backdrop-filter: blur(8px);
     color: black;
     display: flex;
     align-items: center;
     justify-content: center;
     cursor: pointer;
     transition: all 0.3s ease;
     opacity: 0.9;
     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
   }
   
   .arrow-button:hover {
     background: rgba(255, 255, 255, 0.3);
     opacity: 1;
     transform: scale(1.05);
   }
   
   .arrow-button:focus {
     outline: none;
   }
   
   /* Eliminamos los indicadores de posición */
   
   
   @media (max-width: 768px) {
     .arrow-button {
       width: 36px;
       height: 36px;
     }
     
     .navigation-arrows {
       bottom: 1rem;
       right: 1rem;
     }
   }
`;

export const StatsAndTrackRecordSection = () => {
  // Referencias y estados para el carrusel
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [, setActiveIndex] = useState(0);
  
  // Función para desplazarse a la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };
  
  // Función para desplazarse a la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };
  
  // Función para verificar si mostrar las flechas y actualizar el índice activo
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      
      // Calcular el índice activo basado en la posición de scroll
      const cardWidth = 310; // Ancho aproximado de cada tarjeta en mobile
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };
  
  // Aplicamos los estilos para el carrusel
  useEffect(() => {
    // Crear elemento de estilo si no existe
    if (!document.getElementById('carousel-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'carousel-styles';
      styleElement.innerHTML = carouselStyles;
      document.head.appendChild(styleElement);
    }
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Verificar inicialmente
      checkScrollPosition();
    }
    
    // Limpieza al desmontar
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
      
      const styleElement = document.getElementById('carousel-styles');
      if (styleElement && document.querySelectorAll('.hide-scrollbar').length <= 1) {
        styleElement.remove();
      }
    };
  }, []);
  
  // Datos convertidos a formato de características para el carrusel
  const features = [
    {
      title: 'Inteligencia Empresarial',
      description: 'Adquisición y optimización de 15+ empresas con un crecimiento promedio del 40%.',
      icon: <FeatureIcon type="intelligence" className="text-white" />,
      bgClass: 'bg-zinc-900'
    },
    {
      title: 'Alcance Internacional',
      description: 'Presencia en 5 países con un equipo de más de 50 profesionales especializados.',
      icon: <FeatureIcon type="global" className="text-white" />,
      bgClass: 'bg-gradient-to-b from-blue-900 to-blue-950'
    },
    {
      title: 'Inversión Estratégica',
      description: 'Más de $25M de capital invertido y 20+ años de experiencia acumulada.',
      icon: <FeatureIcon type="investment" className="text-white" />,
      bgClass: 'bg-gradient-to-b from-emerald-900 to-emerald-950'
    },
    {
      title: 'Software B2B',
      description: 'Adquisición y mejora de infraestructura tecnológica con expansión de clientes del 40% en 12 meses.',
      icon: <FeatureIcon type="software" className="text-white" />,
      bgClass: 'bg-gradient-to-b from-purple-900 to-purple-950'
    },
    {
      title: 'Servicios Financieros',
      description: 'Transformación digital que redujo costos operativos en un 30% mediante soluciones tecnológicas.',
      icon: <FeatureIcon type="finance" className="text-white" />,
      bgClass: 'bg-gradient-to-b from-amber-900 to-amber-950'
    },
    {
      title: 'Marketing Digital',
      description: 'Escalamiento mediante procesos automatizados y expansión a nuevos mercados en LATAM.',
      icon: <FeatureIcon type="marketing" className="text-white" />,
      bgClass: 'bg-gradient-to-b from-red-900 to-red-950'
    }
  ]

  return (
    <Section 
      padding="xl" 
      data-anim-scroll-group="get to know gallery" 
      data-analytics-gallery-id="get to know gallery"
      className="overflow-hidden px-0"
    >
      <Container size="lg" className="px-0 md:px-0">
        <header className="section-header-row mb-10 md:mb-12">
          <Heading className="section-header-headline text-3xl md:text-4xl lg:text-5xl mb-3 font-bold">
            Trayectoria y Resultados
          </Heading>
          <Text variant="subheading" size="lg" className="text-lg md:text-xl opacity-80 max-w-2xl">
            Conoce nuestro impacto y los resultados que hemos logrado a través de nuestra experiencia
          </Text>
        </header>
      </Container>
      
      <div className="relative w-full px-0 md:px-0">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-16 snap-x snap-mandatory hide-scrollbar" 
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`min-w-[310px] md:min-w-[360px] h-[460px] md:h-[520px] mx-3 first:ml-0 last:mr-0 snap-center flex-shrink-0 transition-all duration-400`}
              style={{ scrollSnapAlign: 'center' }}
            >
              <div 
                className={`h-full flex flex-col justify-between rounded-[28px] overflow-hidden shadow-lg transition-all duration-400 hover:scale-[1.025] hover:shadow-xl p-8 md:p-10 backdrop-blur-sm bg-white/5 ${feature.bgClass}`}
              >
                <div className="flex justify-start items-center">
                  <div className="text-5xl text-white" style={{ filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.15))' }}>
                    {feature.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-base md:text-lg text-white/80 mt-3">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Eliminamos los indicadores de posición */}
        
        {/* Flechas de navegación */}
        <div className="navigation-arrows">
          {showLeftArrow && (
            <button 
              onClick={scrollLeft} 
              className="arrow-button"
              aria-label="Ver características anteriores"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={scrollRight} 
              className="arrow-button"
              aria-label="Ver más características"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};