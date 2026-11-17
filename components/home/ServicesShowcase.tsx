"use client";

import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/services";
import ServiceCard from "../ui/ServiceCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { useModals } from "../ui/ModalContext";

export default function ServicesShowcase() {
  const { openQuoteModal } = useModals();

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F7F5F0] text-[#202020] border-t border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turnkey Engineering & Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal tracking-tight">
            Comprehensive Architectural Services
          </h2>
          <p className="text-sm sm:text-base text-[#202020]/75 mt-3 font-light leading-relaxed">
            From computational facade engineering and 3D daylight modeling to precision laser sub-framing and certified installation, we deliver end-to-end building envelope solutions.
          </p>
        </div>

        {/* Services List (Alternating Editorial Layout) */}
        <div>
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom Consultation Link */}
        <div className="mt-16 text-center">
          <button
            onClick={() => openQuoteModal()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#202020] hover:bg-[#B79A72] hover:text-[#121212] text-[#F7F5F0] font-semibold text-xs tracking-widest uppercase rounded-lg transition-all shadow-lg"
          >
            <span>Book a Site Inspection & Feasibility Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

