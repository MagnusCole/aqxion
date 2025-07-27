/**
 * Component Type Definitions - Landing Page
 * Centralized interfaces for all React components following strict typing conventions
 */

import { ReactNode, ComponentPropsWithoutRef, ElementType } from 'react';

// ===== BASE COMPONENT INTERFACES =====

/** Base props for all components */
export interface BaseComponentProps {
  /** Additional CSS classes */
  className?: string;
  /** Unique identifier for testing/analytics */
  'data-testid'?: string;
}

/** Props for components that can render children */
export interface WithChildren extends BaseComponentProps {
  children: ReactNode;
}

/** Props for interactive components */
export interface InteractiveProps extends BaseComponentProps {
  /** Loading state indicator */
  isLoading?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** ARIA label for accessibility */
  'aria-label'?: string;
}

// ===== MODAL & OVERLAY INTERFACES =====

/** Standard modal component props */
export interface ModalProps extends BaseComponentProps {
  /** Controls modal visibility */
  isOpen: boolean;
  /** Callback when modal should close */
  onClose: () => void;
  /** Modal title for accessibility */
  title?: string;
  /** Whether modal can be closed by clicking backdrop */
  closeOnBackdrop?: boolean;
}

/** Contact modal specific props */
export interface ContactModalProps extends ModalProps {
  /** Initial form values */
  initialValues?: Partial<ContactFormData>;
  /** Success callback after form submission */
  onSuccess?: () => void;
}

// ===== FORM & INPUT INTERFACES =====

/** Contact form data structure */
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly business: string;
  readonly interest: BusinessInterest;
  readonly message?: string;
}

/** Business interest categories */
export type BusinessInterest = 
  | 'plan-mype' 
  | 'marketing-digital' 
  | 'automatizacion' 
  | 'consultoria'
  | 'otro';

/** Form submission hook options */
export interface FormSubmissionOptions {
  /** Success callback */
  onSuccess?: (data: ContactFormData) => void;
  /** Error callback */
  onError?: (error: Error) => void;
  /** Custom Google Script URL */
  googleScriptUrl?: string;
  /** Analytics tracking enabled */
  enableTracking?: boolean;
}

// ===== INPUT COMPONENT INTERFACES =====

/** Input component size definitions */
export type InputSize = 'sm' | 'md' | 'lg';

/** Input component type definitions */
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'search' | 'number';

/** Input component properties with accessibility and validation */
export interface InputProps extends BaseComponentProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Label text */
  label?: string;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Left icon component */
  leftIcon?: React.ElementType;
  /** Right icon component */
  rightIcon?: React.ElementType;
  /** Input size variant */
  size?: InputSize;
  /** Input type */
  type?: InputType;
}

// ===== NAVIGATION & HEADER INTERFACES =====

/** Navigation item structure */
export interface NavItem {
  readonly href: string;
  readonly label: string;
  readonly external?: boolean;
  readonly 'aria-label'?: string;
}

/** Header component props */
export interface HeaderProps extends BaseComponentProps {
  /** Callback to open contact modal */
  onModalOpen: () => void;
  /** Navigation items override */
  navItems?: readonly NavItem[];
  /** Show logo */
  showLogo?: boolean;
}

// ===== SECTION COMPONENT INTERFACES =====

/** Hero section props */
export interface HeroSectionProps extends BaseComponentProps {
  /** Callback to open contact modal */
  onModalOpen: () => void;
  /** Custom headline */
  headline?: string;
  /** Custom subheadline */
  subheadline?: string;
}

/** Generic section props */
export interface SectionProps extends WithChildren {
  /** Section HTML id for anchor links */
  id?: string;
  /** Section background variant */
  variant?: 'default' | 'gray' | 'gradient';
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg';
}

// ===== UI COMPONENT INTERFACES =====

/** Button component props */
export interface ButtonProps extends InteractiveProps, ComponentPropsWithoutRef<'button'> {
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Left icon component */
  leftIcon?: ElementType;
  /** Right icon component */
  rightIcon?: ElementType;
  /** Full width button */
  fullWidth?: boolean;
}

/** Card component props */
export interface CardProps extends WithChildren {
  /** Enable hover effects */
  hover?: boolean;
  /** Card variant */
  variant?: 'default' | 'elevated' | 'outlined';
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg';
}

// ===== ANIMATION & TRANSITION INTERFACES =====

/** Framer Motion animation configuration */
export interface AnimationConfig {
  readonly initial?: Record<string, unknown>;
  readonly animate?: Record<string, unknown>;
  readonly exit?: Record<string, unknown>;
  readonly transition?: Record<string, unknown>;
  readonly viewport?: { once?: boolean; margin?: string };
}

/** Component with animation props */
export interface WithAnimation extends BaseComponentProps {
  /** Custom animation configuration */
  animation?: AnimationConfig;
  /** Disable animations */
  noAnimation?: boolean;
}

// ===== ANALYTICS & TRACKING INTERFACES =====

/** Analytics event data */
export interface AnalyticsEvent {
  readonly action: string;
  readonly category: string;
  readonly label?: string;
  readonly value?: number;
}

/** Component with analytics tracking */
export interface WithAnalytics extends BaseComponentProps {
  /** Analytics event to track */
  trackingEvent?: AnalyticsEvent;
  /** Track on view */
  trackOnView?: boolean;
}

// ===== RESPONSIVE & ACCESSIBILITY INTERFACES =====

/** Responsive breakpoint values */
export interface ResponsiveValue<T> {
  readonly base: T;
  readonly sm?: T;
  readonly md?: T;
  readonly lg?: T;
  readonly xl?: T;
}

/** Accessibility props */
export interface AccessibilityProps {
  /** ARIA role */
  role?: string;
  /** ARIA label */
  'aria-label'?: string;
  /** ARIA description */
  'aria-describedby'?: string;
  /** Tab index */
  tabIndex?: number;
}

// ===== UTILITY TYPE HELPERS =====

/** Make all properties optional recursively */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** Extract component props from React component */
export type ComponentProps<T extends ElementType> = ComponentPropsWithoutRef<T> & BaseComponentProps;

/** Polymorphic component props */
export interface PolymorphicProps<T extends ElementType = ElementType> extends BaseComponentProps {
  /** HTML element or React component to render */
  as?: T;
}

/** Combine polymorphic props with specific element props */
export type PolymorphicComponentProps<T extends ElementType, P = {}> = 
  PolymorphicProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof PolymorphicProps> & P;
