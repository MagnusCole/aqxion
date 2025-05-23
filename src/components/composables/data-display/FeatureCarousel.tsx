// components/macros/FeatureCarousel.tsx
import React, { useState, useRef, useEffect } from 'react'
import { FeatureCardProps } from './FeatureCard'
import { Heading } from '../../atoms/Heading'
import { Text } from '../../atoms/Text'

// Estilos para ocultar la barra de desplazamiento manteniendo la funcionalidad
const scrollbarHideStyles = `
  .hide-scrollbar {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;     /* Firefox */
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;            /* Chrome, Safari and Opera */
  }
  
  .feature-card {
    transition: transform 0.3s ease;
  }
  
  .navigation-arrow {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 10px;
    z-index: 10;
  }
  
  .arrow-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s ease;
  }
  
  .arrow-button:hover {
    background: rgba(0, 0, 0, 0.9);
  }
`

export interface FeatureCarouselProps {
  features: Omit<FeatureCardProps, 'className'>[];
  className?: string;
}

export const FeatureCarousel = ({ 
  features, 
  className = '' 
}: FeatureCarouselProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  // Función para desplazarse a la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };
  
  // Función para desplazarse a la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };
  
  // Función para verificar si mostrar las flechas
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  
  // Aplicamos los estilos para ocultar la barra de desplazamiento
  useEffect(() => {
    // Crear elemento de estilo si no existe
    if (!document.getElementById('scrollbar-hide-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'scrollbar-hide-styles';
      styleElement.innerHTML = scrollbarHideStyles;
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
      
      const styleElement = document.getElementById('scrollbar-hide-styles');
      if (styleElement && document.querySelectorAll('.hide-scrollbar').length <= 1) {
        styleElement.remove();
      }
    };
  }, []);
  
  return (
    <div 
      className={`w-full py-[var(--spacing-6)] bg-white ${className} relative`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Contenedor de tarjetas en vista horizontal con scroll */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-[var(--spacing-6)] snap-x snap-mandatory hide-scrollbar"
        >
          <div className="flex gap-[var(--spacing-3)] md:gap-[var(--spacing-4)] pr-[var(--spacing-2)]">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card min-w-[340px] md:min-w-[520px] lg:min-w-[640px] snap-start bg-white border border-gray-100 rounded-[var(--radius-lg)] p-[var(--spacing-4)] flex flex-col items-start h-full hover:shadow-lg"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)' }}
              >                {feature.icon && (
                  <div className="mb-[var(--spacing-5)]">
                    {feature.icon}
                  </div>
                )}<Heading 
                  level="h3" 
                  size="xl" 
                  className="text-[#000] mb-[var(--spacing-3)] font-medium"
                >
                  {feature.title}
                </Heading>                <Text 
                  variant="body" 
                  size="base" 
                  className="text-gray-600"
                >
                  {feature.description}
                </Text>
              </div>
            ))}
          </div>
        </div>
        
        {/* Flechas de navegación en la esquina inferior derecha */}
        <div className="navigation-arrow">
          {showLeftArrow && (
            <button 
              onClick={scrollLeft} 
              className="arrow-button"
              aria-label="Desplazar a la izquierda"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          )}
          {showRightArrow && (
            <button 
              onClick={scrollRight} 
              className="arrow-button"
              aria-label="Desplazar a la derecha"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};