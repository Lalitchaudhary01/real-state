"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { ArrowRight, Layers, ShieldCheck, ChevronRight } from "lucide-react";
import { useModals } from "./ModalContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { openQuoteModal } = useModals();

  return (
    <div className="group relative bg-white border border-[#E9E7E2] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:border-[#B79A72]/60">
      <div>
        {/* Image Container with hover zoom */}
        <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-[#202020]">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

          {/* Category Badge */}
          <span className="absolute top-3 left-3 bg-[#161616]/85 backdrop-blur-sm text-[#B79A72] border border-[#B79A72]/30 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
            {product.category}
          </span>

          {/* Fire Rating / Warranty tag */}
          <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white/90 text-[10px] px-2 py-0.5 rounded flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#B79A72]" />
            {product.specs.warranty}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          <h3 className="text-lg sm:text-xl font-serif text-[#202020] font-medium leading-snug group-hover:text-[#B79A72] transition-colors line-clamp-1">
            {product.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#202020]/75 mt-2 line-clamp-2 leading-relaxed">
            {product.shortDesc}
          </p>

          {/* Quick Spec Highlights */}
          <div className="mt-4 pt-4 border-t border-[#E9E7E2] grid grid-cols-2 gap-2 text-[11px] text-[#202020]/70">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#B79A72] font-semibold">
                Thickness
              </span>
              <span className="font-medium text-[#202020] truncate block">
                {product.specs.thickness}
              </span>
            </div>
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-[#B79A72] font-semibold">
                Fire Rating
              </span>
              <span className="font-medium text-[#202020] truncate block">
                {product.specs.fireRating.split("&")[0]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 sm:p-6 sm:pt-0 flex items-center gap-2.5">
        <Link
          href={`/products/${product.slug}`}
          className="flex-1 py-2.5 px-3.5 text-center text-xs font-semibold tracking-wider uppercase text-[#202020] bg-[#F7F5F0] hover:bg-[#E9E7E2] rounded-lg transition-colors border border-[#E9E7E2] inline-flex items-center justify-center gap-1.5"
        >
          <span>Explore More</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>

        <button
          onClick={() => openQuoteModal({ product: product.title })}
          className="py-2.5 px-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#202020] hover:bg-[#B79A72] hover:text-[#121212] rounded-lg transition-colors whitespace-nowrap"
        >
          Enquire Now
        </button>
      </div>
    </div>
  );
}

