"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Sparkles, Search, Download, Filter, ArrowRight } from "lucide-react";
import { useModals } from "@/components/ui/ModalContext";

const CATEGORIES = [
  "All",
  "Cladding Panels",
  "Louvers & Pergolas",
  "Decorative & CNC",
  "Substructures"
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { openQuoteModal } = useModals();

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FBF9F5] text-[#202020]">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 bg-[#141414] text-[#F7F5F0] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Products Portfolio"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Engineered Exterior Catalogue
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Architectural Materials & Facade Systems
            </h1>
            <p className="text-base sm:text-lg text-[#E9E7E2]/80 font-light leading-relaxed">
              Explore our full catalogue of 11 exterior-grade cladding panels, louvers, CNC jalis, and heavy-gauge structural aluminium framing.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-[#E9E7E2] sticky top-[69px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#202020] text-[#F7F5F0]"
                    : "bg-[#F7F5F0] text-[#202020]/75 hover:bg-[#E9E7E2] hover:text-[#202020]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-[#202020]/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs bg-[#F7F5F0] border border-[#E9E7E2] rounded-full focus:outline-none focus:border-[#B79A72] text-[#202020]"
              />
            </div>

            <button
              onClick={() => openQuoteModal()}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#B79A72] text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#D4BE9B] transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Full Spec Sheet</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="mb-6 flex items-center justify-between text-xs text-[#202020]/60">
            <span>Showing {filteredProducts.length} architectural products</span>
            <span>All materials ASTM & EN Certified</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-xl border border-[#E9E7E2]">
              <p className="text-lg font-serif text-[#202020]">No products match your search criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider bg-[#202020] text-white rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#161616] text-[#F7F5F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-[#F7F5F0]">
              Need physical samples or shade cards delivered?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1">
              We dispatch complimentary sample kits to architects and project directors within 24 hours.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal()}
            className="px-6 py-3.5 bg-[#B79A72] text-[#121212] font-semibold text-xs tracking-wider uppercase rounded-lg hover:bg-[#D4BE9B] transition-colors whitespace-nowrap"
          >
            Order Sample Presentation Kit
          </button>
        </div>
      </section>
    </div>
  );
}

