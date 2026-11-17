"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#141414] text-[#F7F5F0] overflow-hidden relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F5F0] font-normal tracking-tight">
            Trusted by Elite Architects & Developers
          </h2>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-[#1A1A1A] border border-[#B79A72]/30 rounded-2xl p-8 sm:p-12 shadow-2xl">
          {/* Quote Mark Watermark */}
          <div className="absolute top-6 right-8 text-[#B79A72]/20">
            <Quote className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <div className="space-y-6">
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-[#B79A72]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="font-serif text-lg sm:text-2xl text-[#E9E7E2] leading-relaxed font-normal italic">
              &ldquo;{current.content}&rdquo;
            </p>

            {/* Client Profile Details */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#B79A72]/60">
                  <Image
                    src={current.avatarUrl}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-medium">
                    {current.name}
                  </h4>
                  <p className="text-xs text-[#B79A72] font-medium">
                    {current.role} • {current.company}
                  </p>
                  <p className="text-[11px] text-white/50 mt-0.5">
                    Project: {current.projectType}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B79A72] hover:text-[#121212] text-white flex items-center justify-center transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#B79A72] hover:text-[#121212] text-white flex items-center justify-center transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i ? "w-8 bg-[#B79A72]" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

