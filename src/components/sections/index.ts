/**
 * Sections Barrel Export - MyPerú Landing
 * 
 * Centralized exports for all landing page sections
 * following atomic design and functional component patterns.
 */

// Core landing sections
export { HeroSection } from './HeroSection';
export { ContactModal } from './ContactModal';

// Landing page sections (reorganized)
export { ProblemSection } from './ProblemSection';
export { SolutionSection } from './SolutionSection';
export { OfferSection } from './OfferSection';
export { StatsSection } from './StatsSection';
export { TestimonialsSection } from './TestimonialsSection';
export { CTASection } from './CTASection';

// Shared components (to be moved here after refactoring)
export { Header } from '../page-components/shared/Header';
export { Footer } from '../page-components/shared/Footer';
export { HermesIAChat } from '../page-components/shared/HermesIAChat';
export { CookieBanner } from '../page-components/shared/CookieBanner';
