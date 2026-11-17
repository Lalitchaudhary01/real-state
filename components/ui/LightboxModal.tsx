"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useModals } from "./ModalContext";
import { X, MapPin, Layers, ArrowRight } from "lucide-react";

export default function LightboxModal() {
  const { lightboxItem, closeLightbox, openQuoteModal } = useModals();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightboxItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxItem, closeLightbox]);

  if (!lightboxItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
      {/* Close button */}
      <button
        onClick={closeLightbox}
        className="absolute top-5 right-5 z-20 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#161616] border border-[#B79A72]/30 rounded-xl overflow-hidden shadow-2xl">
        {/* Main Image Container */}
        <div className="relative w-full h-[55vh] sm:h-[68vh] bg-black">
          <Image
            src={lightboxItem.imageUrl}
            alt={lightboxItem.title}
            fill
            className="object-contain"
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="p-4 sm:p-6 bg-[#1A1A1A] border-t border-[#333] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B79A72] bg-[#B79A72]/15 px-2.5 py-0.5 rounded-full">
                {lightboxItem.category}
              </span>
              <span className="text-xs text-white/50 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B79A72]" />
                {lightboxItem.location}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
              {lightboxItem.title}
            </h3>
            <p className="text-xs text-white/70 flex items-center gap-1.5 mt-1">
              <Layers className="w-3.5 h-3.5 text-[#B79A72]" />
              Material: {lightboxItem.material}
            </p>
          </div>

          <button
            onClick={() => {
              closeLightbox();
              openQuoteModal({ product: lightboxItem.title });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B79A72] hover:bg-[#D4BE9B] text-[#121212] font-medium text-xs tracking-wide uppercase rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Inquire for Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

