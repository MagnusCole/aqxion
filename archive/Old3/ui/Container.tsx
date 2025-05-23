// src/components/ui/Container.tsx
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: Props) {
  return (
    <div className={`w-full max-w-[95%] md:max-w-[90%] lg:max-w-full mx-auto px-4 sm:px-6 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
