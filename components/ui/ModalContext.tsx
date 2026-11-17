"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { GalleryItem } from "@/types";

interface ModalContextType {
  isQuoteOpen: boolean;
  quoteInitialProduct: string;
  quoteInitialService: string;
  openQuoteModal: (options?: { product?: string; service?: string }) => void;
  closeQuoteModal: () => void;
  lightboxItem: GalleryItem | null;
  openLightbox: (item: GalleryItem) => void;
  closeLightbox: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialProduct, setQuoteInitialProduct] = useState("");
  const [quoteInitialService, setQuoteInitialService] = useState("");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const openQuoteModal = (options?: { product?: string; service?: string }) => {
    setQuoteInitialProduct(options?.product || "");
    setQuoteInitialService(options?.service || "");
    setIsQuoteOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteOpen(false);
    setQuoteInitialProduct("");
    setQuoteInitialService("");
  };

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <ModalContext.Provider
      value={{
        isQuoteOpen,
        quoteInitialProduct,
        quoteInitialService,
        openQuoteModal,
        closeQuoteModal,
        lightboxItem,
        openLightbox,
        closeLightbox,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModals() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModals must be used within a ModalProvider");
  }
  return context;
}

