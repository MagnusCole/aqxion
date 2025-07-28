// CalendarButton optimizado
'use client';
import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

interface CalendarButtonProps {
  onClick: () => void;
  onAutoOpen?: () => void;
  className?: string;
  autoOpenDelay?: number;
}

export const CalendarButton: React.FC<CalendarButtonProps> = ({ 
  onClick, 
  onAutoOpen,
  className = '',
  autoOpenDelay = 4000
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible && !hasAutoOpened && onAutoOpen) {
      const autoOpenTimer = setTimeout(() => {
        setHasAutoOpened(true);
        onAutoOpen();
      }, autoOpenDelay);

      return () => clearTimeout(autoOpenTimer);
    }
  }, [isVisible, hasAutoOpened, onAutoOpen, autoOpenDelay]);

  if (!isVisible) return null;

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 right-6 w-14 h-14 bg-peru-red text-white rounded-full shadow-lg hover:shadow-xl hover:bg-red-700 active:scale-95 transition-all duration-150 z-40 flex items-center justify-center group`}
      aria-label='Abrir calendario'
    >
      <Calendar className='w-6 h-6 group-hover:scale-110 transition-transform duration-150' />
      
      <span className='absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150 whitespace-nowrap'>
        Agenda una llamada
      </span>
    </button>
  );
};
