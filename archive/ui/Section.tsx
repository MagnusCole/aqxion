import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  withBackground?: boolean;
}

export default function Section({
  children,
  className = "",
  withBackground = false,
}: SectionProps) {
  return (
    <section className={`relative w-full py-20 md:py-28 lg:py-36 overflow-hidden ${className}`}>
      {withBackground && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-gray-100 to-white opacity-70 pointer-events-none" />
      )}
      {children}
    </section>
  );
}
