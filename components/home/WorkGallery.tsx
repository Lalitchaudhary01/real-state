"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { useModals } from "../ui/ModalContext";
import { Sparkles, Maximize2, MapPin } from "lucide-react";

const FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Exterior Cladding",
  "ACP Work",
  "HPL Work",
  "Louvers & Facades"
];

export default function WorkGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { openLightbox } = useModals();

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#181818] text-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Gallery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F5F0] font-normal tracking-tight">
              Our Work & Elevation Gallery
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 max-w-2xl font-light">
              Click on any photograph to inspect detailed elevation finishes, material grain resolution, and architectural details in full-screen high definition.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#B79A72] text-[#121212] font-bold"
                    : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer bg-black border border-white/10 hover:border-[#B79A72] transition-all duration-300 shadow-lg"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-[#B79A72] bg-[#121212]/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#B79A72]/30">
                  {item.category}
                </span>
              </div>

              {/* Hover Fullscreen Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-[#B79A72]" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <h4 className="text-base sm:text-lg font-serif text-white font-medium group-hover:text-[#B79A72] transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <div className="flex items-center justify-between text-xs text-white/70">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B79A72]" />
                    {item.location}
                  </span>
                  <span className="text-[11px] text-[#B79A72] font-medium">
                    Click to Inspect
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

