"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Dropdown, DropdownItem } from '../ui/Dropdown';
import { LeadMagnetModal } from '../forms/LeadMagnetModal';

/**
 * Componente Header - Encabezado simplificado de la página
 */

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
  dropdown?: DropdownItem[];
  isLeadMagnet?: boolean;
  modalTitle?: string;
  modalDescription?: string;
}

export interface HeaderProps {
  items?: NavItem[];
  logo?: React.ReactNode;
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({  items = [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/about-us" },
    { 
      label: "Recursos", 
      href: "#", 
      dropdown: [
        { 
          label: "Guía de Marketing Local", 
          href: "#",
          description: "Estrategias probadas para negocios locales",
          isLeadMagnet: true,
          modalTitle: "Guía de Marketing Local",
          modalDescription: "Estrategias probadas para negocios locales"
        },
        { 
          label: "Templates de Email", 
          href: "#",
          description: "Plantillas de email marketing efectivas",
          isLeadMagnet: true,
          modalTitle: "Templates de Email Marketing",
          modalDescription: "Plantillas de email marketing efectivas"
        },
        { 
          label: "Checklist SEO", 
          href: "#",
          description: "Lista completa para optimizar tu sitio",
          isLeadMagnet: true,
          modalTitle: "Checklist SEO Local",
          modalDescription: "Lista completa para optimizar tu sitio"
        },
        { 
          label: "Calculadora ROI", 
          href: "#",
          description: "Calcula el retorno de inversión en marketing",
          isLeadMagnet: true,
          modalTitle: "Calculadora ROI Marketing",
          modalDescription: "Calcula el retorno de inversión en marketing"
        }
      ]
    },
    { label: "Blog", href: "/blog" }
  ],
  logo,
  className = ''
})=> {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const { ref } = useScrollAnimation({ delay: 100 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLeadMagnetClick = (item: DropdownItem) => {
    setSelectedResource({
      title: item.modalTitle || item.label,
      description: item.modalDescription || item.description || ''
    });
    setIsModalOpen(true);
  };

  const handleMobileLeadMagnetClick = (item: DropdownItem) => {
    setSelectedResource({
      title: item.modalTitle || item.label,
      description: item.modalDescription || item.description || ''
    });
    setIsModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center">
            {logo}
          </div>          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {items.map((item, index) => (
                <div key={index}>                  {item.dropdown ? (
                    <Dropdown
                      trigger={
                        <span className={`px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 flex items-center gap-1 ${
                          item.isActive 
                            ? 'text-blue-600 font-semibold' 
                            : 'text-gray-700'
                        }`}>
                          {item.label}
                          <svg 
                            className="w-4 h-4 transition-transform duration-200" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </span>
                      }
                      items={item.dropdown}
                      onLeadMagnetClick={handleLeadMagnetClick}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-2 py-1 text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                        item.isActive 
                          ? 'text-blue-600 font-semibold' 
                          : 'text-gray-700'
                      }`}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          {/* Spacer div for balance */}
          <div className="w-[100px]"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-3 bg-white border-t mt-2">
            {items.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div className="border-b border-gray-100 last:border-b-0">
                    <div className="px-4 py-2 text-base font-medium text-gray-700 bg-gray-50">
                      {item.label}
                    </div>                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      dropdownItem.isLeadMagnet ? (
                        <button
                          key={dropdownIndex}
                          onClick={() => handleMobileLeadMagnetClick(dropdownItem)}
                          className="w-full text-left block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                        >
                          <div className="font-medium">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </button>
                      ) : (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-medium">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-500 mt-1">{dropdownItem.description}</div>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>        </div>
      </div>
      
      {/* Lead Magnet Modal */}
      {selectedResource && (
        <LeadMagnetModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedResource(null);
          }}
          resourceTitle={selectedResource.title}
          resourceDescription={selectedResource.description}
        />
      )}
    </header>
  );
};
