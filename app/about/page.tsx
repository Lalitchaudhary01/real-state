import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ShieldCheck, Award, Users, Compass, Building, Wrench, Sparkles, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Aura Exteriors & Estates — Architectural Facade Heritage",
  description: "Learn about Aura Exteriors & Estates: over 14 years of architectural excellence, precision CNC fabrication, certified exterior HPL, and luxury facade engineering.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#202020]">
      {/* Hero Header */}
      <section className="relative py-24 sm:py-32 bg-[#141414] text-[#F7F5F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Architectural Heritage"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Our Legacy & Philosophy
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Architectural Mastery in Exterior Building Envelopes.
            </h1>
            <p className="text-base sm:text-xl text-[#E9E7E2]/80 font-light leading-relaxed">
              Bridging structural integrity, sustainable composite science, and haute architectural design since 2011.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Workshop Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#202020] font-normal leading-snug">
                Born From a Passion for Structural Elegance and Climate Resilience.
              </h2>
              <p className="text-sm sm:text-base text-[#202020]/75 leading-relaxed font-light">
                What began as a specialized facade installation contractor in Greater Noida has evolved into one of India’s foremost architectural exterior solutions and luxury real estate elevation consultants.
              </p>
              <p className="text-sm sm:text-base text-[#202020]/75 leading-relaxed font-light">
                We observed that while architects envisioned iconic facades with natural timber, monolithic marble, and fluid geometries, traditional building materials deteriorated rapidly under India’s unforgiving sun, torrential monsoons, and urban dust. We dedicated our research to high-pressure compact phenolic laminates (HPL), fire-rated composite panels (ACP), and extruded architectural louvers that endure for decades without requiring maintenance.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E9E7E2]">
                <div>
                  <span className="font-serif text-3xl text-[#B79A72] font-normal">14+</span>
                  <span className="text-xs text-[#202020]/70 block mt-1">Years Continuous Operations</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-[#B79A72] font-normal">480+</span>
                  <span className="text-xs text-[#202020]/70 block mt-1">Completed Facade Landmarks</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative h-[440px] sm:h-[520px] rounded-2xl overflow-hidden shadow-2xl border border-[#E9E7E2]">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80"
                  alt="Aura Facade Engineering Workshop"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Operational Standards */}
      <section className="py-20 bg-[#161616] text-[#F7F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Our Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F5F0] font-normal mt-2">
              Uncompromising Standards of Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#202020] rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#B79A72]/20 text-[#B79A72] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white">BIM & 3D Computational Design</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                Every panel layout, rivet position, and substructure bracket is mathematically modeled in 3D CAD before fabrication, eliminating on-site wastage and ensuring hairline-thin joint consistency.
              </p>
            </div>

            <div className="p-8 bg-[#202020] rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#B79A72]/20 text-[#B79A72] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white">Certified Fire & Weather Standards</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                We strictly deploy ASTM E84 Class-1 and EN 13501-1 certified materials. Every installation undergoes rigorous water penetration and wind shear testing.
              </p>
            </div>

            <div className="p-8 bg-[#202020] rounded-xl border border-white/10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#B79A72]/20 text-[#B79A72] flex items-center justify-center">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-white">In-House Master Technicians</h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">
                We do not outsource critical facade installation. Our 80+ certified facade technicians and master welders are directly employed and trained to European facade installation guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#F7F5F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#202020]">
            Experience Our Materials In Person
          </h2>
          <p className="text-sm sm:text-base text-[#202020]/75 max-w-xl mx-auto font-light leading-relaxed">
            Visit our corporate showroom in Greater Noida or request a curated physical sample presentation box at your architectural studio or residence in Delhi NCR or Goa.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#202020] hover:bg-[#B79A72] hover:text-[#121212] text-[#F7F5F0] font-semibold text-xs tracking-widest uppercase rounded-lg transition-colors"
            >
              Schedule Studio Visit
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 border border-[#B79A72] text-[#202020] hover:bg-[#B79A72] hover:text-[#121212] font-semibold text-xs tracking-widest uppercase rounded-lg transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

