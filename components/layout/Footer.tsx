"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Shield, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { SERVICES } from "@/data/services";
import { useModals } from "../ui/ModalContext";

// Clean custom SVG icons for social networks
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
      <polygon points="10 15 15 12 10 9 10 15"/>
    </svg>
  );
}

export default function Footer() {
  const { openQuoteModal } = useModals();

  return (
    <footer className="bg-[#121212] text-[#E9E7E2] pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Banner / Consultation Callout */}
        <div className="pb-12 mb-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Partner with Industry Leaders
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0] mt-1 font-normal">
              Have an upcoming facade or estate project?
            </h3>
            <p className="text-sm text-white/60 mt-1 max-w-xl">
              Consult with our architectural facade specialists for material shade cards, 3D renderings, and precise wind-load engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="px-6 py-3 bg-[#B79A72] text-[#121212] font-medium text-xs tracking-wider uppercase rounded hover:bg-[#D4BE9B] transition-colors"
            >
              Request Free Consultation
            </button>
            <a
              href={COMPANY_INFO.whatsappDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366] hover:text-white font-medium text-xs tracking-wider uppercase rounded border border-[#25D366]/30 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#B79A72] flex items-center justify-center bg-[#1F1F1F] text-[#B79A72] font-serif font-bold text-lg">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg tracking-[0.08em] text-[#F7F5F0]">
                  AURA
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#B79A72] uppercase font-medium -mt-0.5">
                  Exteriors & Estates
                </span>
              </div>
            </Link>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Aura Exteriors & Estates is a premier architectural exterior solutions and facade engineering firm. We combine the tactile warmth of HPL and WPC with the structural precision of PVDF ACP and extruded aluminium louvers for luxury estates and commercial towers.
            </p>

            <div className="pt-2">
              <div className="text-xs font-semibold text-white/90 uppercase tracking-wider mb-2">
                Certified Quality Standards
              </div>
              <div className="flex flex-wrap gap-2 text-[11px] text-[#B79A72]">
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  <Shield className="w-3 h-3" /> ISO 9001:2015
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  <Shield className="w-3 h-3" /> ASTM E84 Class 1
                </span>
                <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  <Shield className="w-3 h-3" /> RERA Partner Network
                </span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#B79A72] hover:text-[#121212] flex items-center justify-center transition-colors text-white/70"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#B79A72] hover:text-[#121212] flex items-center justify-center transition-colors text-white/70"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#B79A72] hover:text-[#121212] flex items-center justify-center transition-colors text-white/70"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Products */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-4">
              Core Products
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {PRODUCTS.slice(0, 7).map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-[#B79A72] transition-colors flex items-center justify-between group"
                  >
                    <span>{product.title.split("(")[0]}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-[#B79A72] hover:underline font-medium inline-block pt-1"
                >
                  View All 11 Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="hover:text-[#B79A72] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-[#B79A72] hover:underline font-medium inline-block pt-1"
                >
                  Explore All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Regional Studios */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-4">
              Regional Experience Studios
            </h4>
            <div className="space-y-4 text-xs text-white/70">
              <div>
                <strong className="text-white block font-medium">Delhi NCR Experience Center</strong>
                <p className="text-[11px] text-white/60 mt-0.5">Harsha Commercial Complex, Alpha 1, Greater Noida, UP</p>
              </div>

              <div>
                <strong className="text-white block font-medium">Gurgaon Real Estate Atelier</strong>
                <p className="text-[11px] text-white/60 mt-0.5">Golf Course Extension Rd, Sector 65, Gurgaon</p>
              </div>

              <div>
                <strong className="text-white block font-medium">Goa Coastal Design Hub</strong>
                <p className="text-[11px] text-white/60 mt-0.5">Miramar Promenade, Panaji, Goa</p>
              </div>

              <div className="pt-2 border-t border-white/10 space-y-1.5">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 hover:text-[#B79A72] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B79A72]" />
                  <span>{COMPANY_INFO.phones[0]}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.emails[0]}`}
                  className="flex items-center gap-2 hover:text-[#B79A72] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#B79A72]" />
                  <span>{COMPANY_INFO.emails[0]}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved. Architectural exterior solutions & facade engineering.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-white transition-colors">
              Company Overview
            </Link>
            <Link href="/projects" className="hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
