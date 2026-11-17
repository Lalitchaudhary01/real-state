import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Experience Studios | Aura Exteriors & Estates",
  description: "Connect with Aura Exteriors: Corporate experience studio in Greater Noida, Gurgaon real estate atelier, and Goa studio. Request technical facade consultation.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#F7F5F0] text-[#202020] min-h-screen">
      {/* Header */}
      <section className="relative py-20 sm:py-28 bg-[#141414] text-[#F7F5F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Contact Studio"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Consultation & Regional Studios
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Connect With Our Facade Specialists
            </h1>
            <p className="text-base sm:text-lg text-[#E9E7E2]/80 font-light leading-relaxed">
              Schedule an in-person design consultation, request shade cards, or speak directly with our senior structural facade engineers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
}

