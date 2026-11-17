"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModals } from "../ui/ModalContext";
import MobileNav from "./MobileNav";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { openQuoteModal } = useModals();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full transition-all duration-300">
        {/* Top bar for corporate trust & direct contact */}
        <div className="bg-[#141414] text-[#E9E7E2] text-[11px] py-1.5 px-4 sm:px-8 border-b border-white/5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-[#B79A72]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 & ASTM Certified Façade Engineering</span>
              </span>
              <span className="sm:hidden text-white/70">
                Premium Façade & Exterior Architecture
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                <span className="hidden xs:inline">WhatsApp Expert</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-[#E9E7E2] hover:text-[#B79A72] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#B79A72]" />
                <span>{COMPANY_INFO.phones[0]}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`px-4 sm:px-8 transition-all duration-300 ${
            isScrolled
              ? "bg-[#181818]/95 backdrop-blur-md py-3.5 shadow-xl border-b border-white/10"
              : "bg-[#181818]/90 backdrop-blur-sm py-4 border-b border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border border-[#B79A72] flex items-center justify-center bg-[#202020] text-[#B79A72] font-serif font-bold text-xl tracking-tighter group-hover:bg-[#B79A72] group-hover:text-[#121212] transition-colors">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-normal tracking-[0.08em] text-[#F7F5F0]">
                  AURA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.28em] text-[#B79A72] uppercase font-medium -mt-0.5">
                  Exteriors & Estates
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-[#B79A72] font-semibold"
                        : "text-[#E9E7E2]/85 hover:text-[#B79A72]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Header Right Action CTA */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => openQuoteModal()}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#B79A72] text-[#121212] font-medium text-xs tracking-wider uppercase rounded hover:bg-[#D4BE9B] transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#F7F5F0] hover:text-[#B79A72] bg-white/5 rounded transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

