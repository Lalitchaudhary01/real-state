"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModals } from "../ui/ModalContext";

export default function CtaBanner() {
  const { openQuoteModal } = useModals();

  return (
    <section className="relative py-24 sm:py-32 bg-[#121212] text-[#F7F5F0] overflow-hidden">
      {/* Background Architectural Texture with Warm Glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
          alt="Architectural Cladding Luxury"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/90 to-[#121212]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(#B79A72_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B79A72]/20 border border-[#B79A72]/40 text-[#B79A72] text-xs font-semibold tracking-widest uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Start Your Architectural Journey</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F7F5F0] font-normal leading-tight tracking-tight max-w-3xl mx-auto">
          Let&apos;s Build Something Extraordinary Together.
        </h2>

        <p className="text-base sm:text-xl text-[#E9E7E2]/80 max-w-2xl mx-auto mt-6 font-light leading-relaxed">
          Have a project in mind? Talk to our experts and discover the right architectural solution for your space.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openQuoteModal()}
            className="w-full sm:w-auto px-8 py-4 bg-[#B79A72] hover:bg-[#D4BE9B] text-[#121212] font-semibold text-xs tracking-widest uppercase rounded shadow-2xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={COMPANY_INFO.whatsappDirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-4 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-widest uppercase rounded shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs tracking-widest uppercase rounded transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#B79A72]" />
            <span>Direct Call</span>
          </a>
        </div>
      </div>
    </section>
  );
}

