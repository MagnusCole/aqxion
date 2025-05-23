import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header, NavItem } from "@/components/composables/navigation/Header";
import { FooterSection } from "@/sections/FooterSection";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AQXION – Strategic Acquisitions",
  description: "Next-generation acquisition firm for legacy business owners across LATAM.",
  openGraph: {
    title: "AQXION",
    description: "Strategic Acquisitions Across LATAM",
    url: "https://aqxion.com",
    siteName: "AQXION",
    type: "website",
  },
};

// Logo component using the file from /public
const Logo = () => (
  <Link href="/" className="flex items-center">
    <div className="flex items-center gap-3">
      <Image 
        src="/assets/logo/aqxion_logo.svg" 
        alt="AQXION" 
        width={250} 
        height={250} 
        priority
        className="w-8 h-auto sm:w-10 md:w-12"
      />
      <span className="text-lg sm:text-xl md:text-2xl">
        <span className="font-bold">AQXION</span>.com
      </span>
    </div>
  </Link>
);

// Placeholder navItems
const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre Nosotros", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="light" // This will be dynamically managed later if needed
    >
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-sans min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-black focus:text-white"
        >
          Saltar al contenido principal
        </a>
        <Header items={navItems} logo={<Logo />} showCTA={true} />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}