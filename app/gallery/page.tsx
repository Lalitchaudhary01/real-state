"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { useModals } from "@/components/ui/ModalContext";
import { Maximize2, MapPin, Sparkles, Layers } from "lucide-react";

const FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Exterior Cladding",
  "ACP Work",
  "HPL Work",
  "Louvers & Facades"
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openLightbox } = useModals();

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-[#141414] text-[#F7F5F0] min-h-screen">
      {/* Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Gallery Archive"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Photographic Archive
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Architectural Elevation Gallery
            </h1>
            <p className="text-base sm:text-lg text-[#E9E7E2]/80 font-light leading-relaxed">
              High-definition photographic documentation of our facade panel installations, CNC jali facades, and luxury architectural exteriors. Click any image to view in full resolution.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#B79A72] text-[#121212] font-bold"
                    : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative h-80 rounded-xl overflow-hidden cursor-pointer bg-black border border-white/10 hover:border-[#B79A72] transition-all duration-300 shadow-xl"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#B79A72] bg-[#121212]/85 backdrop-blur-sm px-3 py-1 rounded-full border border-[#B79A72]/30">
                    {item.category}
                  </span>
                </div>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#B79A72]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="text-lg font-serif text-white font-medium group-hover:text-[#B79A72] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#B79A72]" />
                      {item.location}
                    </span>
                    <span className="text-[11px] text-[#B79A72]">
                      {item.material.split("&")[0]}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

