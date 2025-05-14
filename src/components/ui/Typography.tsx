import { ReactNode, ElementType } from "react";

type HeadingProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function HeadingHero({
  children,
  className = "",
  as: Tag = "h1",
}: HeadingProps) {
  return (
    <Tag className={`heading-hero text-white ${className}`}>
      {children}
    </Tag>
  );
}

export function Subheading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`paragraph-lead text-gray-400 ${className}`}>
      {children}
    </p>
  );
}
