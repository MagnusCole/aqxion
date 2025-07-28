'use client';

import React, { useState, useCallback } from 'react';

// Import all sections from our consolidated sections folder
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  OfferSection,
  CTASection,
} from '@/components/sections';

// Import shared components
import { 
  Header, 
  Footer
} from '@/components/page-components/shared';

// Import CookieBanner from correct location
import { CookieBanner } from '@/components/ui/CookieBanner';

// Import ContactModal
import { ContactModal } from '../../sections/ContactModal';

/**
 * 🏠 **LandingPage Component**
 * 
 * Main landing page component that orchestrates all sections in the correct order.
 * Uses the new consolidated sections architecture for better maintainability.
 * 
 * Features:
 * - Consolidated section imports from sections/ folder
 * - Full page layout with header and footer
 * - Contact modal state management
 * - Optimized calendar scheduling system for 1-on-1 sessions
 * - Cookie compliance banner
 * - Reduced animations for better RAM performance (<200MB)
 * - Peru market focused design
 * 
 * @returns {JSX.Element} Complete landing page layout
 */
const LandingPage: React.FC = () => {
  // Modal state management
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Contact modal handlers
  const handleModalOpen = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <Header onModalOpen={handleModalOpen} />
      
      {/* Main Content Sections - Sequential Flow with Better Spacing */}
      <main>
        {/* Hero: First impression with optimized animations */}
        <section className="bg-white">
          <HeroSection onModalOpen={handleModalOpen} />
        </section>
        
        {/* Problem: Establish pain points and build empathy */}
        <section className="bg-gradient-to-b from-white to-gray-50/50">
          <ProblemSection />
        </section>
        
        {/* Solution: Present our 3-step process */}
        <section className="bg-gray-50/50">
          <SolutionSection />
        </section>
        
        {/* Offer: Detailed service breakdown */}
        <section className="bg-gradient-to-b from-gray-50/50 to-white">
          <OfferSection />
        </section>
        
        {/* CTA: Final conversion push */}
        <section className="bg-white">
          <CTASection />
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleModalClose} 
      />
      
      {/* Compliance */}
      <CookieBanner />
    </div>
  );
};

export default LandingPage;
