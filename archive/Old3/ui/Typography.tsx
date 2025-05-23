import { ReactNode, ElementType } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * HeadingHero - Montserrat Bold 36px
 * Para títulos principales como "We Acquire Businesses in LATAM"
 */
export function HeadingHero({
  children,
  className = "",
  as: Tag = "h1",
}: HeadingProps) {
  return (
    <Tag 
      className={`font-primary text-[36px] leading-[1.2] font-bold text-text-primary ${className}`}
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      {children}
    </Tag>
  );
}

/**
 * HeadingSection - Montserrat Bold 24px
 * Para títulos de secciones como "What We Do", "Track Record"
 */
export function HeadingSection({
  children,
  className = "",
  as: Tag = "h2",
}: HeadingProps) {
  return (
    <Tag 
      className={`font-primary text-[24px] leading-[1.2] font-bold text-text-primary ${className}`}
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      {children}
    </Tag>
  );
}

/**
 * Subheading - Inter Medium 18px
 * Para subtítulos como "We buy, improve, and grow..."
 */
export function Subheading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p 
      className={`font-secondary text-[18px] leading-[1.3] font-medium text-text-secondary ${className}`}
      style={{ fontFamily: 'var(--font-secondary)' }}
    >
      {children}
    </p>
  );
}

/**
 * BodyText - Inter Regular 16px
 * Para cuerpos de texto y descripciones
 */
export function BodyText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p 
      className={`font-secondary text-[16px] leading-[1.5] font-normal text-text-secondary ${className}`}
      style={{ fontFamily: 'var(--font-secondary)' }}
    >
      {children}
    </p>
  );
}

/**
 * CTAText - Montserrat SemiBold 16px
 * Para botones y llamadas a la acción
 */
export function CTAText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span 
      className={`font-primary text-[16px] leading-[1.2] font-semibold ${className}`}
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      {children}
    </span>
  );
}

/**
 * MetricText - Montserrat SemiBold 20px
 * Para métricas destacadas como "35% Growth"
 */
export function MetricText({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span 
      className={`font-primary text-[20px] leading-[1.2] font-semibold text-accent-secondary ${className}`}
      style={{ fontFamily: 'var(--font-primary)' }}
    >
      {children}
    </span>
  );
}
