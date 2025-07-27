'use client';

import React, { useState, useCallback } from 'react';

// Import all sections from our consolidated sections folder
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  OfferSection,
  StatsSection,
  TestimonialsSection,
  CTASection,
} from '@/components/sections';

// Import shared components
import { 
  Header, 
  Footer, 
  CookieBanner, 
  ContactModal
} from '@/components/page-components/shared';

// Import new optimized calendar system
import { CalendarButton, ScheduleModal } from '@/components/ui';

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
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  // Contact modal handlers
  const handleModalOpen = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  // Schedule modal handlers
  const handleScheduleOpen = useCallback(() => {
    setIsScheduleModalOpen(true);
  }, []);

  const handleScheduleClose = useCallback(() => {
    setIsScheduleModalOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Navigation */}
      <Header onModalOpen={handleModalOpen} />
      
      {/* Main Content Sections - Sequential Flow */}
      <main>
        {/* Hero: First impression with optimized animations */}
        <HeroSection onModalOpen={handleModalOpen} />
        
        {/* Problem: Establish pain points and build empathy */}
        <ProblemSection />
        
        {/* Solution: Present our 3-step process */}
        <SolutionSection />
        
        {/* Offer: Detailed service breakdown */}
        <OfferSection />
        
        {/* Stats: Social proof with numbers */}
        <StatsSection />
        
        {/* Testimonials: Customer success stories */}
        <TestimonialsSection />
        
        {/* CTA: Final conversion push */}
        <CTASection onModalOpen={handleModalOpen} />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={handleModalClose} 
      />
      
      {/* Schedule Modal - Optimized Calendar System */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={handleScheduleClose}
      />
      
      {/* Floating Calendar Button - Bottom Right */}
      <CalendarButton onClick={handleScheduleOpen} />
      
      {/* Compliance */}
      <CookieBanner />
    </div>
  );
};

export default LandingPage;
