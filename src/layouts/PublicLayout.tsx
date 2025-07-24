'use client';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Layout simple para páginas públicas - sin navigation sidebar */}
      {children}
    </div>
  );
}
