/**
 * CalendarButton - Botón flotante de calendario optimizado
 * Diseño minimalista para reducir consumo de RAM
 */

import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { useSound } from '@/hooks';

interface CalendarButtonProps {
  onClick: () => void;
  onAutoOpen?: () => void; // Auto-open del popover
  className?: string;
  autoOpenDelay?: number;
}

/**
 * Botón de calendario flotante con diseño Peru optimizado
 * Sin animaciones complejas para mejor performance
 */
export const CalendarButton: React.FC<CalendarButtonProps> = React.memo(({ 
  onClick, 
  onAutoOpen,
  className = '',
  autoOpenDelay = 4000 // 4 segundos por defecto, optimizado para UX
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // Sound effect for button click
  const { play: playClickSound } = useSound('/notification-sound.mp3', {
    volume: 0.3,
    preload: true
  });

  // Auto-open logic con timing optimizado para UX
  useEffect(() => {
    // Hacer visible el botón primero con un pequeño delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 segundo para que se vea el botón

    // Auto-abrir popover después del delay especificado
    const autoOpenTimer = setTimeout(() => {
      if (!hasAutoOpened && onAutoOpen) {
        setHasAutoOpened(true);
        playClickSound();
        onAutoOpen(); // Abre el popover automáticamente
      }
    }, autoOpenDelay);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(autoOpenTimer);
    };
  }, [autoOpenDelay, hasAutoOpened, onAutoOpen, playClickSound]);

  const handleClick = React.useCallback(async () => {
    // Marcar que se abrió manualmente para evitar auto-open
    setHasAutoOpened(true);
    // Play sound effect
    await playClickSound();
    // Execute callback para click manual (abre popover también)
    onClick();
  }, [playClickSound, onClick]);
  return (
    <button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 
        bg-peru-red hover:bg-red-700
        text-white
        rounded-full shadow-lg
        flex items-center justify-center
        transition-all duration-500 ease-out
        focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'}
        ${className}
      `}
      aria-label="Agendar sesión 1 a 1"
      type="button"
    >
      <Calendar className="w-6 h-6" />
      
      {/* Indicador sutil de auto-open disponible */}
      {isVisible && !hasAutoOpened && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse">
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>
      )}
    </button>
  );
});

CalendarButton.displayName = 'CalendarButton';
