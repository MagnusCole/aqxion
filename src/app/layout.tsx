import type { Metadata } from "next";
import Script from 'next/script';
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AQXION - Growth Equity Partner",
  description: "Growth Equity Partner. Guías gratis para escalar PYMEs con IA/Ads + partnerships equity híbridos. Keywords: socios equity PYMEs, guías IA gratis, automatización marketing 2025.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-WKYR96FC8K`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-WKYR96FC8K');
        `}
      </Script>
      <body>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold text-blueTrust hover:text-greenValue transition-colors">
                AQXION
              </a>
              <div className="space-x-6">
                <a href="/blog" className="text-gray-700 hover:text-greenValue transition-colors">Guías</a>
                <a href="/#contact" className="bg-goldCTA text-white px-4 py-2 rounded-md hover:bg-greenValue transition-colors">Contacto</a>
              </div>
            </div>
          </nav>
        </header>
        
        {children}
        
        <footer className="bg-gray-100 py-6 text-center text-gray-600 border-t">
          <div className="container mx-auto px-4">
            <p>&copy; 2025 AQXION - Growth Equity Partner. Resultados no garantizados.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}