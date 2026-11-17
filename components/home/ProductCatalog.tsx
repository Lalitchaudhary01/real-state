"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "../ui/ProductCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { useModals } from "../ui/ModalContext";

const CATEGORIES = [
  "All",
  "Cladding Panels",
  "Louvers & Pergolas",
  "Decorative & CNC",
  "Substructures"
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { openQuoteModal } = useModals();

  const filteredProducts = activeCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#FBF9F5] text-[#202020] border-t border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Material Library</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal tracking-tight">
              Premium Exterior Products & Panels
            </h2>
            <p className="text-sm sm:text-base text-[#202020]/70 mt-2 max-w-2xl font-light">
              Engineered exterior-grade surfaces combining European architectural beauty with tropical climate endurance. Rigorously tested for UV stability, fire resistance, and structural longevity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-5 py-2.5 bg-[#B79A72] text-[#121212] font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#D4BE9B] transition-colors shadow-sm"
            >
              Download Brochure & Shade Cards
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#202020] text-[#F7F5F0] shadow-md"
                  : "bg-white text-[#202020]/70 hover:bg-[#E9E7E2] hover:text-[#202020] border border-[#E9E7E2]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 bg-[#181818] rounded-2xl text-[#F7F5F0] border border-[#B79A72]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl text-[#F7F5F0] font-normal">
              Looking for custom sheet sizes, CNC patterns, or special RAL shades?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              We fabricate bespoke dimensions up to 6000mm length and provide certified fire-retardant test certificates.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3 bg-[#B79A72] text-[#121212] font-semibold text-xs tracking-widest uppercase rounded hover:bg-[#D4BE9B] transition-colors whitespace-nowrap shadow-md inline-flex items-center gap-2"
          >
            <span>Talk to Material Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

