// 🎯 Type Definitions - MyPerú Landing
// Definiciones de tipos centralizadas para máxima type safety

export interface ContactFormData {
  readonly nombre: string;
  readonly email: string;
  readonly tipoNegocio: string;
  readonly problema?: string;
}

export interface BusinessType {
  readonly value: string;
  readonly label: string;
  readonly popular: boolean;
  readonly icon?: string;
}

export interface CommonProblem {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export interface SolutionStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly accentColor: string;
  readonly bgColor: string;
}

export interface Testimonial {
  readonly name: string;
  readonly business: string;
  readonly location: string;
  readonly rating: number;
  readonly text: string;
  readonly avatar: string;
  readonly result: string;
  readonly time: string;
  readonly category: string;
}

export interface StatItem {
  readonly value: string;
  readonly label: string;
  readonly subtext: string;
  readonly color: string;
  readonly bgColor: string;
}

export interface NavItem {
  readonly href: string;
  readonly label: string;
}

export interface SocialLink {
  readonly href: string;
  readonly label: string;
  readonly icon: string;
}

export interface ModalState {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

export interface AnimationConfig {
  readonly initial?: object;
  readonly animate?: object;
  readonly exit?: object;
  readonly transition?: object;
}
