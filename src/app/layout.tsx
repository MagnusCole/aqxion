import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/components/providers";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AQXION | Tu MYPE convertida en imán de clientes",
  description: "Transformamos tu negocio en una máquina de atraer clientes. Consultoría estratégica especializada en MYPEs peruanas. Nosotros lo hacemos, tú recibes los resultados.",
  keywords: "consultoría estratégica, mypes peru, marketing digital, atraer clientes, transformación digital, crecimiento empresarial, aqxion",
  authors: [{ name: "AQXION" }],
  creator: "AQXION",
  publisher: "AQXION",
  robots: "index, follow",
  openGraph: {
    title: "AQXION | Tu MYPE convertida en imán de clientes",
    description: "Transformamos tu negocio en una máquina de atraer clientes. Consultoría estratégica para MYPEs peruanas.",
    type: "website",
    locale: "es_PE",
    siteName: "AQXION",
  },
  twitter: {
    card: "summary_large_image",
    title: "AQXION | Tu MYPE convertida en imán de clientes",
    description: "Transformamos tu negocio en una máquina de atraer clientes. Consultoría estratégica para MYPEs peruanas.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="font" type="font/woff2" href="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff2" crossOrigin="anonymous" />
        
        {/* Favicon con bordes redondeados */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-rounded.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <meta name="theme-color" content="#dc2626" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="font-inter">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
