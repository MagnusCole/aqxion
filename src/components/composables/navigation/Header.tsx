"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import { Dropdown, DropdownItem } from '../ui/Dropdown';
import { LeadMagnetModal } from '../forms/LeadMagnetModal';

/**
 * Header Premium - Encabezado elevado de alto nivel profesional
 * LLM-OPTIMIZED: Premium header design with immersive UX and advanced animations
 * Elevated features: Glassmorphism, premium CTAs, advanced micro-interactions
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
    { 
      label: "Equity Partnership", 
      href: "#", 
      dropdown: [
        { 
          label: "🤝 Equity Partnership", 
          href: "/equity-partnership",
          description: "Adquirimos equity en tu empresa y escalamos juntos.",
        },
        { 
          label: "📈 Casos de Éxito Equity", 
          href: "/equity-success-cases",
          description: "Resultados reales donde equity partnership logró growth 300-500%.",
        },
        { 
          label: "📊 Equity Calculator", 
          href: "#",
          description: "Calcula el potencial de equity partnership para tu empresa.",
          isLeadMagnet: true,
          modalTitle: "Equity Partnership Calculator",
          modalDescription: "Descubre si tu empresa califica para nuestro modelo de equity partnership."
        }
      ]
    },
    { label: "Servicios", href: "/servicios" },
    { label: "Casos de Éxito", href: "/case-studies" },
    { label: "Precios", href: "/precios" },
    { 
      label: "Recursos", 
      href: "#", 
      dropdown: [
        { 
          label: "📊 Equity Partnership Guide", 
          href: "#",
          description: "Todo lo que necesitas saber sobre equity partnerships en growth.",
          isLeadMagnet: true,
          modalTitle: "Equity Partnership Guide",
          modalDescription: "Descubre cómo funciona un equity partnership y si es para tu empresa."
        },
        { 
          label: "💰 Due Diligence Checklist", 
          href: "#",
          description: "Prepara tu empresa para el proceso de due diligence de equity partners.",
          isLeadMagnet: true,
          modalTitle: "Due Diligence Checklist",
          modalDescription: "Prepara tu empresa para el proceso de due diligence de equity partners."
        },
        { 
          label: "📈 Growth Valuation Calculator", 
          href: "#",
          description: "Estima la valuación de tu empresa y potencial de equity partnership.",
          isLeadMagnet: true,
          modalTitle: "Growth Valuation Calculator",
          modalDescription: "Calcula la valuación de tu empresa y potencial de crecimiento con equity partners."
        },
        { 
          label: "🎯 Equity Terms Framework", 
          href: "#",
          description: "Entiende términos clave en equity partnerships y negociaciones.",
          isLeadMagnet: true,
          modalTitle: "Equity Terms Framework",
          modalDescription: "Entiende términos clave en equity partnerships y negociaciones."
        },
        { 
          label: "⚖️ FAQ Equity Legal", 
          href: "/faq",
          description: "Preguntas legales frecuentes sobre equity partnerships.",
        }
      ]
    },
    { label: "Blog", href: "/blog" }
  ],
  logo,
  className = ''
})=> {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<{
    title: string;
    description: string;
  } | null>(null);
  const { ref } = useScrollAnimation({ delay: 100 });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      
      // Calculate scroll progress for premium progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    
    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-white/20' 
          : 'bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur-sm'
      } ${className}`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)'
          : 'linear-gradient(180deg, rgba(255,255,255,0.90) 0%, rgba(255,255,255,0.70) 50%, transparent 100%)'
      }}
    >
      {/* Premium glassmorphism overlay */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} 
      style={{
        background: 'linear-gradient(135deg, rgba(0,122,255,0.03) 0%, rgba(52,211,153,0.03) 100%)',
        backdropFilter: 'blur(20px) saturate(1.2)',
      }} />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-18 md:h-24">
          {/* Logo Section - Enhanced */}
          <div className="flex items-center space-x-3 group">
            {logo ? (
              <div className="transform transition-all duration-300 group-hover:scale-105 logo-premium">
                {logo}
              </div>
            ) : (
              <Link href="/" className="flex items-center space-x-3 logo-premium focus-premium">
                {/* Premium AQXION Logo */}
                <div className="relative header-premium-glow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--ia-blue)] via-blue-500 to-[var(--auto-green)] rounded-xl shadow-lg flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-300 hover-premium-lift">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden md:block">
                  <div className="text-2xl font-bold text-premium-gradient">
                    AQXION
                  </div>
                  <div className="text-xs text-gray-600 font-medium -mt-1">
                    Automated Growth
                  </div>
                </div>
              </Link>
            )}
          </div>          {/* Desktop Navigation - Premium Elevated */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              {items.map((item, index) => (
                <div key={index} className="relative group">
                  {item.dropdown ? (
                    <Dropdown
                      trigger={
                        <span className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 group ${
                          item.isActive 
                            ? 'text-[var(--ia-blue)] font-bold' 
                            : 'text-gray-700 hover:text-[var(--ia-blue)]'
                        }`}>
                          {item.label}
                          <svg 
                            className="w-4 h-4 transition-all duration-300 group-hover:rotate-180" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          {/* Premium hover effect */}
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--ia-blue)]/5 to-[var(--auto-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                        </span>
                      }
                      items={item.dropdown}
                      onLeadMagnetClick={handleLeadMagnetClick}
                    />
                  ) : (
                    <Link
                      href={item.href}
                      className={`nav-link-premium relative px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 group focus-premium ${
                        item.isActive 
                          ? 'text-[var(--ia-blue)] font-bold' 
                          : 'text-gray-700 hover:text-[var(--ia-blue)]'
                      }`}
                      {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {item.label}
                      {/* Premium glow effect */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--ia-blue)]/5 to-[var(--auto-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
          
          {/* Premium CTA Button - Elevated Design */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Secondary CTA - Phone/Consultation */}
            <Link
              href="/contacto?type=call"
              className="group flex items-center space-x-2 px-4 py-2 text-[var(--ia-blue)] hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden xl:inline">Llamada</span>
            </Link>

            {/* Primary CTA - Premium Design */}
            <Link
              href="/contacto"
              className="group relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[var(--equity-gold)] via-[var(--equity-blue)] to-[var(--equity-gold)] text-black font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 cta-premium-pulse header-premium-glow focus-premium"
              style={{
                boxShadow: '0 10px 40px rgba(255,193,7,0.3), 0 6px 20px rgba(13,110,253,0.2)'
              }}
            >
              {/* Premium shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Premium glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--equity-gold)] to-[var(--equity-blue)] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500 -z-10"></div>
              
              <span className="relative flex items-center space-x-2">
                <span>�</span>
                <span>Apply Partnership</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Premium Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group border border-white/20 hover:border-white/40"
            aria-label="Toggle menu"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)'
            }}
          >
            <svg
              className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
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
        </div>        {/* Premium Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav 
            className="py-6 mx-4 mb-4 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.95) 100%)',
              backdropFilter: 'blur(20px) saturate(1.2)',
            }}
          >
            {/* Premium CTA Button - Mobile */}
            <div className="px-6 py-4 border-b border-gray-100/50">
              <Link
                href="/contacto"
                className="group relative overflow-hidden block w-full text-center px-6 py-4 bg-gradient-to-r from-[var(--ia-blue)] via-blue-600 to-[var(--auto-green)] text-white font-bold rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  boxShadow: '0 8px 32px rgba(0,122,255,0.3), 0 4px 16px rgba(52,211,153,0.2)'
                }}
              >
                {/* Premium shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-active:translate-x-full transition-transform duration-500"></div>
                
                <span className="relative flex items-center justify-center space-x-2">
                  <span>🚀</span>
                  <span>Generar Leads Ahora</span>
                </span>
              </Link>
            </div>
            
            {items.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div className="border-b border-gray-100/50 last:border-b-0">
                    <div className="px-6 py-4 text-lg font-bold text-gray-800 bg-gradient-to-r from-gray-50 to-transparent">
                      {item.label}
                    </div>                    {item.dropdown.map((dropdownItem, dropdownIndex) => (
                      dropdownItem.isLeadMagnet ? (
                        <button
                          key={dropdownIndex}
                          aria-label={`Descargar: ${dropdownItem.label}`}
                          onClick={() => handleMobileLeadMagnetClick(dropdownItem)}
                          className="w-full text-left block px-8 py-3 text-sm text-gray-700 hover:text-[var(--ia-blue)] hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 group"
                        >
                          <div className="font-semibold group-hover:translate-x-1 transition-transform duration-300">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600">{dropdownItem.description}</div>
                          )}
                        </button>
                      ) : (
                        <Link
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block px-8 py-3 text-sm text-gray-700 hover:text-[var(--ia-blue)] hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 group"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="font-semibold group-hover:translate-x-1 transition-transform duration-300">{dropdownItem.label}</div>
                          {dropdownItem.description && (
                            <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-600">{dropdownItem.description}</div>
                          )}
                        </Link>
                      )
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="group block px-6 py-4 text-lg font-semibold text-gray-700 hover:text-[var(--ia-blue)] hover:bg-gradient-to-r hover:from-blue-50 hover:to-green-50 transition-all duration-300 border-b border-gray-100/50 last:border-b-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 inline-block">
                      {item.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>        </div>
      </div>
      
      {/* Premium Scroll Progress Bar */}
      <div 
        className={`absolute bottom-0 left-0 h-1 scroll-progress-premium transition-all duration-300 ${
          isScrolled && scrollProgress > 0 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ 
          width: `${scrollProgress}%`,
          boxShadow: '0 0 20px rgba(0,122,255,0.5)'
        }}
      />
      
      {/* Premium bottom glow effect */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
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
