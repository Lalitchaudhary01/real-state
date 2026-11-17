import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ModalProvider } from "@/components/ui/ModalContext";
import QuoteModal from "@/components/ui/QuoteModal";
import LightboxModal from "@/components/ui/LightboxModal";
import FloatingContactButtons from "@/components/ui/FloatingContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Exteriors & Estates | Architectural Facades, HPL & Real Estate Solutions",
  description: "Premier architectural exterior solutions and facade engineering. Specializing in exterior-grade HPL cladding, PVDF ACP sheets, structural aluminium louvers, WPC pergolas, and luxury real estate elevations across Delhi NCR, Gurgaon, and Goa.",
  keywords: [
    "HPL Cladding",
    "ACP Sheets",
    "Aluminium Composite Panels",
    "Exterior Wall Cladding",
    "Aluminium Louvers",
    "WPC Louvers",
    "Building Facade Design",
    "Wooden Pergolas",
    "CNC Jali Facades",
    "Luxury Real Estate Elevation",
    "Greater Noida HPL Decor",
    "Gurgaon Luxury Architecture"
  ],
  authors: [{ name: "Aura Exteriors & Estates" }],
  openGraph: {
    title: "Aura Exteriors & Estates — Redefining Spaces Through Architectural Excellence",
    description: "Premium architectural exterior solutions, innovative materials, and expert craftsmanship for luxury residential estates and commercial landmarks.",
    url: "https://auraexteriors.in",
    siteName: "Aura Exteriors & Estates",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Aura Architectural Exteriors & Estates",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aura Exteriors & Estates | Architectural Facades & Real Estate",
    description: "Engineered exterior solutions: HPL cladding, ACP sheets, louvers, pergolas, and luxury facades.",
    images: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#F7F5F0] text-[#202020] min-h-screen flex flex-col font-sans-clean antialiased selection:bg-[#B79A72] selection:text-[#121212]">
        <ModalProvider>
          <Header />
          <main className="flex-1 w-full">
            {children}
          </main>
          <Footer />
          <QuoteModal />
          <LightboxModal />
          <FloatingContactButtons />
        </ModalProvider>
      </body>
    </html>
  );
}
