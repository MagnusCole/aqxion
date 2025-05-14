import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


// Load fonts
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

// Page metadata (for SEO, sharing, branding)
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      data-theme="dark"
    >
      <body className="bg-[color:var(--color-bg)] text-[color:var(--color-text)] antialiased font-sans min-h-screen flex flex-col">
        {/* Accessibility shortcut */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:z-50 focus:bg-black focus:text-white"
        >
          Skip to main content
        </a>

        <Header />

        <main id="main" className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
