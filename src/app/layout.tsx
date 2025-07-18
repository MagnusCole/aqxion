import type { Metadata } from "next";
import Script from 'next/script';
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AQXION",
  description: "Growth Equity Partner",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-PLACEHOLDER`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PLACEHOLDER');
        `}
      </Script>
      <body>
        {children}
      </body>
    </html>
  );
}