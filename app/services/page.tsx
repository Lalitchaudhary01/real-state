import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { SERVICES } from "@/data/services";
import ServiceCard from "@/components/ui/ServiceCard";
import { Sparkles, Shield, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Architectural Services | Aura Exteriors & Estates — Facade Installation & Engineering",
  description: "Specialized exterior cladding services: HPL installation, ACP elevation engineering, building facade design, aerodynamic aluminium louvers, and turnkey architectural solutions.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#202020]">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#141414] text-[#F7F5F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Engineering Services"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Full-Cycle Architectural Services
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Facade Engineering & Specialized Installation
            </h1>
            <p className="text-base sm:text-lg text-[#E9E7E2]/80 font-light leading-relaxed">
              We execute building facades from structural CAD blueprints through laser-leveled sub-framing and zero-defect installation.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Specialized Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#202020] mt-1">
              8 Professional Facade Disciplines
            </h2>
            <p className="text-sm text-[#202020]/75 mt-2">
              Executed with certified European ventilated facade standards and written weatherproofing guarantees.
            </p>
          </div>

          <div>
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

