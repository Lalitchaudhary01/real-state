"use client";

import React from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useModals } from "@/components/ui/ModalContext";

interface Props {
  productTitle: string;
}

export default function ProductDetailActions({ productTitle }: Props) {
  const { openQuoteModal } = useModals();

  const handleWhatsApp = () => {
    const text = `Hello Aura Exteriors, I am interested in inquiring about ${encodeURIComponent(productTitle)}. Please share specifications, shade catalog, and preliminary pricing.`;
    window.open(`https://wa.me/919818847290?text=${text}`, "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-2">
      <button
        onClick={() => openQuoteModal({ product: productTitle })}
        className="flex-1 py-3.5 px-6 bg-[#202020] hover:bg-[#B79A72] hover:text-[#121212] text-[#F7F5F0] font-semibold text-xs tracking-widest uppercase rounded-lg transition-all flex items-center justify-center gap-2 shadow-md"
      >
        <span>Request Quotation for {productTitle.split("(")[0]}</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        onClick={handleWhatsApp}
        className="py-3.5 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Inquire on WhatsApp</span>
      </button>
    </div>
  );
}

