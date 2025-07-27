/**
 * CalendarButton - Botón flotante de calendario optimizado
 * Diseño minimalista para reducir consumo de RAM
 */

import React from 'react';
import { Calendar } from 'lucide-react';

interface CalendarButtonProps {
  onClick: () => void;
  className?: string;
}

/**
 * Botón de calendario flotante con diseño Peru optimizado
 * Sin animaciones complejas para mejor performance
 */
export const CalendarButton: React.FC<CalendarButtonProps> = React.memo(({ 
  onClick, 
  className = '' 
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14 
        bg-peru-red hover:bg-red-700
        text-white
        rounded-full shadow-lg
        flex items-center justify-center
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-peru-red focus:ring-offset-2
        ${className}
      `}
      aria-label="Agendar sesión 1 a 1"
      type="button"
    >
      <Calendar className="w-6 h-6" />
    </button>
  );
});

CalendarButton.displayName = 'CalendarButton';
