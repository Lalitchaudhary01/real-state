"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Building2, ChevronDown } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { useModals } from "../ui/ModalContext";

export default function Hero() {
  const { openQuoteModal } = useModals();

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#121212] text-[#F7F5F0] overflow-hidden">
      {/* Background Architectural Image with Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern Architectural Exterior Facade Design"
          fill
          priority
          className="object-cover object-center scale-105 animate-pulse duration-10000"
          sizes="100vw"
        />
        {/* Subtle Dark Vignette & Brand Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/95 via-[#121212]/80 to-[#121212]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(#B79A72_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-12 w-full my-auto">
        <div className="max-w-3xl space-y-6">
          {/* Editorial Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#B79A72]/40 text-[#B79A72] text-[11px] sm:text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Architectural Façade & Exterior Solutions</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.12] text-[#F7F5F0] tracking-tight">
            Redefining Spaces Through{" "}
            <span className="italic font-serif text-[#B79A72] block sm:inline">
              Architectural Excellence.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="text-base sm:text-xl text-[#E9E7E2]/85 font-light leading-relaxed max-w-2xl">
            Premium architectural exterior solutions, innovative materials, and expert craftsmanship designed to transform modern spaces. Specializing in exterior-grade HPL, PVDF ACP, structural louvers, and turnkey facade engineering.
          </p>

          {/* CTA Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-4 bg-[#B79A72] hover:bg-[#D4BE9B] text-[#121212] font-semibold text-xs tracking-widest uppercase rounded transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-2 group"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="#products"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-[#F7F5F0] border border-white/20 hover:border-[#B79A72] font-semibold text-xs tracking-widest uppercase rounded backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Our Solutions</span>
              <ChevronDown className="w-4 h-4 text-[#B79A72]" />
            </Link>
          </div>

          {/* Trust bullet indicators */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#B79A72]" />
              <span>15-Year Weatherproof Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B79A72]" />
              <span>Concealed Substructure Dry Fixing</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B79A72]" />
              <span>RERA & ISO Certified Partner</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar at Bottom of Hero */}
      <div className="relative z-10 w-full bg-[#181818]/90 backdrop-blur-md border-t border-white/10 py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="flex flex-col border-l-2 border-[#B79A72]/60 pl-4">
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#B79A72] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-white/70 font-light mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

