"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Shield, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { useModals } from "../ui/ModalContext";

export default function AboutPreview() {
  const { openQuoteModal } = useModals();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F5F0] text-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase: Overlapping Architectural Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-[#E9E7E2]">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
                alt="Contemporary Villa Facade Engineering"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Floating Inset Card */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-64 bg-[#181818] text-[#F7F5F0] p-6 rounded-xl shadow-2xl border border-[#B79A72]/40">
              <span className="font-serif text-3xl text-[#B79A72] font-normal block">
                100%
              </span>
              <span className="text-xs uppercase tracking-wider font-semibold text-white/90 block mt-1">
                Precision Sub-Framing
              </span>
              <p className="text-[11px] text-white/60 mt-1 leading-relaxed">
                Zero visible screws, laser-leveled concealed bracket systems calibrated for thermal expansion.
              </p>
            </div>

            {/* Subtle Brand Tag Badge */}
            <div className="absolute top-6 left-6 bg-[#161616]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#B79A72]/30 text-[#B79A72] text-[11px] font-semibold tracking-wider uppercase">
              Atelier of Facade Craftsmanship
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                About Aura Exteriors & Estates
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal leading-tight mt-1.5">
                Elevating Structures Into Timeless Architectural Landmarks.
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#202020]/75 leading-relaxed font-light">
              Founded at the intersection of architectural engineering and luxury building materials, Aura Exteriors & Estates bridges industrial durability with couture aesthetics. We specialize in exterior-grade High Pressure Laminates (HPL), fire-retardant Aluminium Composite Panels (ACP), aerodynamic louvers, and bespoke CNC facades.
            </p>

            {/* 3 Pillars: Expertise, Mission, Commitment to Quality */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E9E7E2]">
                <div className="w-9 h-9 rounded-full bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Our Expertise</h4>
                  <p className="text-xs text-[#202020]/70 mt-0.5">
                    14+ years of structural facade engineering, parametric CNC modeling, wind-tunnel compliance, and concealed rainscreen systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E9E7E2]">
                <div className="w-9 h-9 rounded-full bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Our Mission</h4>
                  <p className="text-xs text-[#202020]/70 mt-0.5">
                    To deliver zero-maintenance building envelopes that shield structures against intense tropical heat, monsoon rain, and pollution while adding exponential real estate value.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-white border border-[#E9E7E2]">
                <div className="w-9 h-9 rounded-full bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#202020]">Our Commitment to Quality</h4>
                  <p className="text-xs text-[#202020]/70 mt-0.5">
                    We exclusively partner with certified ASTM Class-1 fire-rated and ISO 9001 certified manufacturers with written 10-15 year warranties.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3.5 bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] font-semibold text-xs tracking-wider uppercase rounded transition-all flex items-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => openQuoteModal()}
                className="px-6 py-3.5 border border-[#B79A72] text-[#202020] hover:bg-[#B79A72] hover:text-[#121212] font-semibold text-xs tracking-wider uppercase rounded transition-all"
              >
                Request Material Samples
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

