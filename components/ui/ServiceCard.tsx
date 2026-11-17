"use client";

import React from "react";
import Image from "next/image";
import { Service } from "@/types";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { useModals } from "./ModalContext";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 1;
  const { openQuoteModal } = useModals();

  return (
    <div
      className={`flex flex-col ${
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-14 py-10 lg:py-14 border-b border-[#E9E7E2] last:border-b-0`}
    >
      {/* Image container */}
      <div className="w-full lg:w-1/2 relative">
        <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg border border-[#E9E7E2] group">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

          {/* Number badge */}
          <div className="absolute top-4 left-4 bg-[#141414]/85 backdrop-blur-sm text-[#B79A72] border border-[#B79A72]/30 font-serif text-sm font-semibold px-3 py-1 rounded">
            {String(index + 1).padStart(2, "0")} / SERVICE
          </div>
        </div>
      </div>

      {/* Content description */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-[#B79A72]">
            Architectural Engineering
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#202020] font-normal mt-1">
            {service.title}
          </h3>
        </div>

        <p className="text-sm sm:text-base text-[#202020]/75 leading-relaxed">
          {service.fullDesc}
        </p>

        {/* Deliverables list */}
        <div className="pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#202020] block mb-2.5">
            Key Engineering Deliverables:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#202020]/80">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B79A72] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance standards */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-[#202020]/60">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B79A72]" />
          <span>Compliance:</span>
          {service.standards.map((std, i) => (
            <span
              key={i}
              className="bg-[#E9E7E2]/70 px-2 py-0.5 rounded text-[#202020]/80 font-medium"
            >
              {std}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-3">
          <button
            onClick={() => openQuoteModal({ service: service.title })}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#202020] hover:bg-[#B79A72] hover:text-[#121212] text-[#F7F5F0] text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shadow-sm"
          >
            <span>Consult on {service.title.split("&")[0]}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

