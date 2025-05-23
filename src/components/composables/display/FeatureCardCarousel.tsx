// components/composables/display/FeatureCardCarousel.tsx
"use client"

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { FeatureCard, FeatureCardProps } from '../data-display/FeatureCard'

export interface FeatureCardCarouselProps {
  items: FeatureCardProps[];
  cardSize?: 'sm' | 'md' | 'lg';
  showIndicators?: boolean;
  showArrows?: boolean;
  className?: string;
  containerClassName?: string;
  arrowsClassName?: string;
  indicatorsClassName?: string;
}

/**
 * Componente FeatureCardCarousel - Carrusel para mostrar tarjetas de características
 */
export const FeatureCardCarousel: React.FC<FeatureCardCarouselProps> = ({
  items,
  cardSize = 'md',
  showIndicators = true,
  showArrows = true,
  className = "",
  containerClassName = "",
  arrowsClassName = "",
  indicatorsClassName = ""
}) => {
  // Referencias y estados para el carrusel
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  
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
      bottom: 2rem;
      right: 2rem;
      display: flex;
      gap: 1rem;
      z-index: 30;
    }
    
    .arrow-button {
      width: 48px;
      height: 48px;
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
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }
    
    .arrow-button:hover {
      background: rgba(255, 255, 255, 0.3);
      opacity: 1;
      transform: scale(1.05);
    }
    
    .arrow-button:focus {
      outline: none;
    }
    
    .arrow-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    
    /* Indicadores de posición con mejor espaciado */
    .card-indicator {
      display: flex;
      justify-content: center;
      gap: 8px;
      position: absolute;
      bottom: 24px;
      left: 0;
      right: 0;
      z-index: 20;
    }
    
    .card-indicator div {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .card-indicator div.active {
      background: rgba(255, 255, 255, 0.9);
      transform: scale(1.2);
    }
    
    @media (max-width: 768px) {
      .arrow-button {
        width: 40px;
        height: 40px;
      }
      
      .navigation-arrows {
        bottom: 1.5rem;
        right: 1.5rem;
      }
      
      .card-indicator {
        bottom: 16px;
      }
    }
  `;

  // Función para obtener el ancho de tarjeta según tamaño y pantalla
  const getCardWidth = useCallback(() => {
    const width = window.innerWidth;
    
    if (cardSize === 'sm') {
      return 280;
    } else if (cardSize === 'lg') {
      return width >= 1024 ? 560 : width >= 768 ? 480 : 360;
    } else {
      return width >= 1024 ? 480 : width >= 768 ? 400 : 320;
    }
  }, [cardSize]);

  // Función para desplazarse a la izquierda
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Usar el ancho de tarjeta correcto según el tamaño de pantalla y tipo de tarjeta
      const cardWidth = getCardWidth();
      scrollContainerRef.current.scrollBy({ left: -cardWidth - 16, behavior: 'smooth' });
    }
  };
  
  // Función para desplazarse a la derecha
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Usar el ancho de tarjeta correcto según el tamaño de pantalla y tipo de tarjeta
      const cardWidth = getCardWidth();
      scrollContainerRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
    }
  };
  
  // Efecto para aplicar los estilos para el carrusel
  useEffect(() => {
    // Crear elemento de estilo si no existe
    if (!document.getElementById('carousel-styles')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'carousel-styles';
      styleElement.innerHTML = carouselStyles;
      document.head.appendChild(styleElement);
    }
    
    // Función para verificar si mostrar las flechas y actualizar el índice activo
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        
        // Mostrar/ocultar flechas según la posición de desplazamiento
        setShowLeftArrow(scrollLeft > 20);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
        
        // Calcular el índice activo basado en la posición de desplazamiento
        const cardWidth = getCardWidth();
        const spacing = 16; // mx-4 equivale a 16px
        const currentIndex = Math.round(scrollLeft / (cardWidth + spacing));
        setActiveIndex(currentIndex);
      }
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Verificar inicialmente
      checkScrollPosition();
    
      // Limpieza al desmontar
      return () => {
        if (scrollContainer) {
          scrollContainer.removeEventListener('scroll', checkScrollPosition);
        }
      };
    }
  }, [carouselStyles, getCardWidth]);
  
  // Efecto para actualizar los indicadores cuando cambia el índice activo
  useEffect(() => {
    const indicators = document.querySelectorAll('.card-indicator div');
    indicators.forEach((indicator, idx) => {
      if (idx === activeIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }, [activeIndex]);

  return (
    <div className={`relative w-full ${className}`}>
      <div 
        ref={scrollContainerRef}
        className={`flex overflow-x-auto pb-24 snap-x snap-mandatory hide-scrollbar ${containerClassName}`}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingTop: '8px',
        }}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`mx-4 first:ml-6 last:mr-6 snap-center flex-shrink-0 transition-all duration-400`}
            style={{ scrollSnapAlign: 'center' }}
          >
            <FeatureCard
              title={item.title}
              description={item.description}
              icon={item.icon}
              variant={item.variant}
              size={cardSize}
              className={item.className}
              iconClassName={item.iconClassName}
              titleClassName={item.titleClassName}
              descriptionClassName={item.descriptionClassName}
              onClick={item.onClick}
            />
          </div>
        ))}
      </div>
      
      {/* Flechas de navegación */}
      {showArrows && (
        <div className={`navigation-arrows ${arrowsClassName}`}>
          <button 
            className="arrow-button" 
            onClick={scrollLeft}
            aria-label="Anterior"
            disabled={!showLeftArrow}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="arrow-button" 
            onClick={scrollRight}
            aria-label="Siguiente"
            disabled={!showRightArrow}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
      
      {/* Indicadores de posición */}
      {showIndicators && items.length > 1 && (
        <div className={`card-indicator ${indicatorsClassName}`}>
          {items.map((_, index) => (
            <div 
              key={index} 
              className={index === activeIndex ? 'active' : ''}
              aria-label={`Elemento ${index + 1}`}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const cardWidth = getCardWidth();
                  const spacing = 16; // mx-4 equivale a 16px
                  const offset = index * (cardWidth + spacing);
                  scrollContainerRef.current.scrollLeft = offset;
                  setActiveIndex(index);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  if (scrollContainerRef.current) {
                    const cardWidth = getCardWidth();
                    const spacing = 16;
                    const offset = index * (cardWidth + spacing);
                    scrollContainerRef.current.scrollLeft = offset;
                    setActiveIndex(index);
                  }
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
