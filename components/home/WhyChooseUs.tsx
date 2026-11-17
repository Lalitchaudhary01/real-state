"use client";

import React from "react";
import { ShieldCheck, Users, PenTool, Clock, Wrench, HeartHandshake, Sparkles } from "lucide-react";

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    description: "Certified ASTM Class-1 fire-rated and EN 438-6 exterior-grade laminates and high-tensile aluminium engineered for extreme climates."
  },
  {
    icon: Users,
    title: "Experienced Professionals",
    description: "Over 14 years of master facade engineers, in-house CAD draughtsmen, and certified installation crews with 480+ delivered landmarks."
  },
  {
    icon: PenTool,
    title: "Custom Design Solutions",
    description: "Bespoke 3D daylight visualization, parametric CNC perforations, and customized panel sizes to realize signature architectural visions."
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description: "Precision automated fabrication schedules, on-time material staging, and disciplined project milestones with zero completion delays."
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Concealed sub-frame bracket fixing, laser leveling, and expansion joint engineering guaranteeing zero visible screws or panel cupping."
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description: "Unconditional 10 to 15-year weather-tightness warranties, direct post-handover inspections, and 100% transparent client communication."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F5F0] text-[#202020] border-t border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aura Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal tracking-tight">
            Why Visionary Architects & Estates Trust Us
          </h2>
          <p className="text-sm sm:text-base text-[#202020]/75 mt-3 font-light leading-relaxed">
            Building facade envelopes require zero-compromise precision. Here is why India’s most demanding property owners, architects, and builders partner with Aura.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, i) => {
            const Icon = adv.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-[#E9E7E2] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#B79A72] group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center mb-6 group-hover:bg-[#B79A72] group-hover:text-[#121212] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif text-[#202020] font-medium mb-2.5">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#202020]/75 leading-relaxed font-light">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E7E2]/60 flex items-center justify-between text-[11px] text-[#B79A72] font-semibold uppercase tracking-wider">
                  <span>Standard 0{i + 1}</span>
                  <span>Verified Benchmark</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

