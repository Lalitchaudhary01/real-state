"use client";

import React from "react";
import { MessageSquareText, Palette, Hammer, CheckCircle, Sparkles } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Consultation & Site Evaluation",
    icon: MessageSquareText,
    desc: "Comprehensive on-site laser measurements, architectural feasibility audit, elevation assessment, and structural wind-load study."
  },
  {
    step: "02",
    title: "Design & Material Selection",
    icon: Palette,
    desc: "Creation of photorealistic 3D daylight renderings, panel division optimization, structural shop drawings, and curation of physical shade samples."
  },
  {
    step: "03",
    title: "Fabrication & Precision Installation",
    icon: Hammer,
    desc: "Automated 5-axis CNC routing, heavy-gauge aluminium sub-framing erection, and certified concealed bracket or color-matched rivet installation."
  },
  {
    step: "04",
    title: "Final Delivery & Warranty Handover",
    icon: CheckCircle,
    desc: "Thermal imaging leakage audit, acoustic checks, laser joint alignment verification, and official 10-15 year written warranty issuance."
  }
];

export default function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] text-[#202020] border-t border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodical Execution</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal tracking-tight">
            Our 4-Step Seamless Process
          </h2>
          <p className="text-sm sm:text-base text-[#202020]/75 mt-3 font-light leading-relaxed">
            Delivering flawless exterior facades through disciplined architectural protocols from initial blueprint to final warranty handover.
          </p>
        </div>

        {/* 4 Process Cards with Connected Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative bg-white p-6 sm:p-7 rounded-xl border border-[#E9E7E2] shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#B79A72] flex flex-col justify-between group"
              >
                {/* Step indicator watermark */}
                <div className="font-serif text-5xl font-light text-[#E9E7E2] group-hover:text-[#B79A72]/20 transition-colors absolute top-4 right-4 select-none">
                  {item.step}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center mb-6 group-hover:bg-[#B79A72] group-hover:text-[#121212] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#B79A72] block mb-1">
                    Phase {item.step}
                  </span>

                  <h3 className="text-lg font-serif text-[#202020] font-medium mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#202020]/75 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9E7E2] flex items-center justify-between text-[11px] text-[#202020]/60">
                  <span>Milestone {item.step}</span>
                  <span className="font-medium text-[#B79A72]">Certified Audit</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

