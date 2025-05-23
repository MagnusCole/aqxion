"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '../../atoms/Button';

interface PersistentCTAProps {
  desktopLabel?: string;
  mobileLabel?: string;
  onClick?: () => void;
  className?: string;
  showAfterScroll?: boolean;
  scrollThreshold?: number;
}

export const PersistentCTA: React.FC<PersistentCTAProps> = ({
  desktopLabel = "Agenda 15 minutos",
  mobileLabel = "Hablar",
  onClick = () => window.open('https://calendly.com/aqxion/15min', '_blank'),
  className = "",
  showAfterScroll = true,
  scrollThreshold = 300
}) => {
  const [isVisible, setIsVisible] = useState(!showAfterScroll);

  useEffect(() => {
    if (!showAfterScroll) return;

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfterScroll, scrollThreshold]);

  return (
    <>
      {/* Desktop Version - Shown in navbar */}
      <Button
        variant="primary"
        size="md"
        onClick={onClick}
        className={`hidden md:flex items-center transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${className} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        data-analytics-click="cta:desktop"
      >
        {desktopLabel}
      </Button>

      {/* Mobile Version - Fixed at bottom */}
      <div 
        className={`fixed bottom-6 right-6 md:hidden z-50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
        data-analytics-element="mobile-cta"
      >
        <Button
          variant="primary"
          size="md"
          onClick={onClick}
          className="shadow-lg rounded-full px-6 py-3 font-semibold"
          data-analytics-click="cta:mobile"
        >
          {mobileLabel}
        </Button>
      </div>
    </>
  );
};
