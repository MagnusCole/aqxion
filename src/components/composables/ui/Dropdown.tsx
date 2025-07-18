"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export interface DropdownItem {
  label: string;
  href: string;
  description?: string;
  isLeadMagnet?: boolean;
  modalTitle?: string;
  modalDescription?: string;
}

export interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  className?: string;
  dropdownClassName?: string;
  onLeadMagnetClick?: (_item: DropdownItem) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  className = '',
  dropdownClassName = '',
  onLeadMagnetClick
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleTriggerClick = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <div 
      ref={dropdownRef}
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        onClick={handleTriggerClick}
        className="cursor-pointer flex items-center"
      >
        {trigger}
      </div>
      
      <div
        className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-[-10px] invisible'
        } ${dropdownClassName}`}
      >
        <div className="py-2">
          {items.map((item, index) => (
            item.isLeadMagnet ? (
              <button
                key={index}
                onClick={() => {
                  onLeadMagnetClick?.(item);
                  setIsOpen(false);
                }}
                aria-label={`Descargar lead magnet: ${item.label}`}
                className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              >
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                )}
              </button>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <div className="font-medium">{item.label}</div>
                {item.description && (
                  <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                )}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};
