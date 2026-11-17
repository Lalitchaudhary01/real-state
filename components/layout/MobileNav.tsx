"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Phone, MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModals } from "../ui/ModalContext";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const { openQuoteModal } = useModals();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-sm bg-[#161616] text-[#F7F5F0] h-full shadow-2xl flex flex-col justify-between p-6 z-10 overflow-y-auto border-l border-[#B79A72]/30">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="font-serif text-xl tracking-wider text-[#F7F5F0] font-medium block">
                AURA
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#B79A72] uppercase block">
                Exteriors & Estates
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white bg-white/5 rounded-full"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#B79A72] bg-white/5 font-semibold"
                      : "text-white/80 hover:text-[#B79A72] hover:bg-white/5"
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                openQuoteModal();
              }}
              className="w-full py-3 px-4 bg-[#B79A72] text-[#121212] font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#D4BE9B] transition-colors text-center"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="pt-8 border-t border-white/10 space-y-3 text-xs text-white/70">
          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            className="flex items-center gap-2.5 hover:text-[#B79A72] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B79A72]" />
            <span>{COMPANY_INFO.phones[0]}</span>
          </a>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-[#25D366] hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.emails[0]}`}
            className="flex items-center gap-2.5 hover:text-[#B79A72] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#B79A72]" />
            <span>{COMPANY_INFO.emails[0]}</span>
          </a>

          <div className="flex items-start gap-2.5 text-white/50 pt-2 text-[11px] leading-relaxed">
            <MapPin className="w-4 h-4 text-[#B79A72] shrink-0 mt-0.5" />
            <span>Delhi NCR (Greater Noida & Gurgaon) | Goa Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
}

