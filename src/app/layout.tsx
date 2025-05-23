import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Header, NavItem } from "@/components/composables/navigation/Header";
import { FooterSection } from "@/sections/FooterSection";
import Link from "next/link";

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

// Placeholder Logo component
const Logo = () => (
  <Link href="/" className="text-[var(--font-size-xl)] font-semibold text-white">
    AQXION
  </Link>
);

// Placeholder navItems
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="light" // This will be dynamically managed later if needed
    >
      <body className="bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased font-sans min-h-screen flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-black focus:text-white"
        >
          Skip to main content
        </a>
        <Header items={navItems} logo={<Logo />} />
        <main id="main" className="flex-grow"> {/* Added flex-grow to main */}
          {children}
        </main>
        <FooterSection />
      </body>
    </html>
  );
}