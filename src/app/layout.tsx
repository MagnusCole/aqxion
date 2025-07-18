import type { Metadata } from "next";
import Script from 'next/script';
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AQXION - Growth Equity Partner",
  description: "Growth Equity Partner. Guías gratis para escalar PYMEs con IA/Ads + partnerships equity híbridos.",
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
        {children}
      </body>
    </html>
  );
}