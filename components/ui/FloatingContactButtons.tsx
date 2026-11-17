"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, FileText, ChevronUp } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModals } from "./ModalContext";

export default function FloatingContactButtons() {
  const { openQuoteModal } = useModals();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 text-[#202020] border border-[#E9E7E2] shadow-lg flex items-center justify-center hover:bg-[#B79A72] hover:text-white transition-all transform hover:-translate-y-1"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Quote Pill */}
      <button
        onClick={() => openQuoteModal()}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] rounded-full shadow-xl text-xs font-semibold tracking-wider uppercase border border-[#B79A72]/40 transition-all transform hover:-translate-y-0.5"
      >
        <FileText className="w-3.5 h-3.5 text-[#B79A72]" />
        <span>Get A Quote</span>
      </button>

      {/* Phone Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
        aria-label="Direct Phone Call"
        className="pointer-events-auto w-12 h-12 rounded-full bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] shadow-xl flex items-center justify-center transition-all transform hover:scale-105 border border-[#B79A72]/40"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button with Ping badge */}
      <a
        href={COMPANY_INFO.whatsappDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl flex items-center justify-center transition-all transform hover:scale-110"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
        </span>
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
}

