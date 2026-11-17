"use client";

import React, { useState, useEffect } from "react";
import { useModals } from "./ModalContext";
import { X, CheckCircle, Send, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteModal() {
  const { isQuoteOpen, closeQuoteModal, quoteInitialProduct, quoteInitialService } = useModals();

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [city, setCity] = useState("");
  const [approxArea, setApproxArea] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (quoteInitialProduct) {
      setInterest(`Product: ${quoteInitialProduct}`);
    } else if (quoteInitialService) {
      setInterest(`Service: ${quoteInitialService}`);
    } else {
      setInterest("Architectural Exterior Solutions");
    }
    setIsSuccess(false);
    setErrorMsg("");
  }, [quoteInitialProduct, quoteInitialService, isQuoteOpen]);

  if (!isQuoteOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setErrorMsg("Please fill in your name, contact phone, and email.");
      return;
    }

    if (phone.trim().length < 8) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleSendWhatsApp = () => {
    const text = `*New Architectural Exterior Enquiry*%0A` +
      `*Name:* ${encodeURIComponent(fullName || "Not provided")}%0A` +
      `*Phone:* ${encodeURIComponent(phone || "Not provided")}%0A` +
      `*Email:* ${encodeURIComponent(email || "Not provided")}%0A` +
      `*Interested In:* ${encodeURIComponent(interest)}%0A` +
      `*City/Location:* ${encodeURIComponent(city || "Delhi NCR")}%0A` +
      `*Approx Area:* ${encodeURIComponent(approxArea ? approxArea + " Sq. Ft." : "To be calculated")}%0A` +
      `*Details:* ${encodeURIComponent(message || "Requesting consultation and quotation.")}`;

    window.open(`https://wa.me/919818847290?text=${text}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#121212]/80 backdrop-blur-sm transition-opacity"
        onClick={closeQuoteModal}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#FBF9F5] border border-[#B79A72]/40 rounded-xl shadow-2xl max-w-xl w-full p-6 sm:p-8 z-10 my-8">
        {/* Close Button */}
        <button
          onClick={closeQuoteModal}
          className="absolute top-4 right-4 p-2 text-[#202020]/60 hover:text-[#202020] hover:bg-[#E9E7E2] rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#B79A72]/20 text-[#B79A72] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-[#202020] font-medium mb-3">
              Consultation Request Received
            </h3>
            <p className="text-sm text-[#202020]/75 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <strong className="text-[#202020]">{fullName}</strong>. Our senior facade engineer will review your project details and contact you within 2 business hours with technical specifications and preliminary estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleSendWhatsApp}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-medium text-sm rounded-lg hover:bg-[#1EBE5D] transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Continue on WhatsApp
              </button>
              <button
                onClick={closeQuoteModal}
                className="px-5 py-3 border border-[#B79A72] text-[#202020] font-medium text-sm rounded-lg hover:bg-[#E9E7E2] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                Expert Architectural Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#202020] font-normal mt-1">
                Request a Custom Quotation
              </h2>
              <p className="text-xs sm:text-sm text-[#202020]/70 mt-1">
                Share your facade, cladding, or pergola requirements for accurate engineering estimates.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ar. Vikram Singhal"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vikram@domain.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Project City / Location
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Gurgaon, Noida, Goa, Delhi"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Material / Service Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  >
                    <option value="HPL Sheets & Cladding">HPL Sheets & Exterior Cladding</option>
                    <option value="ACP Cladding & Elevation">ACP Cladding & Elevation</option>
                    <option value="Wooden HPL Cladding">Wooden HPL Cladding</option>
                    <option value="Aluminium Louvers">Aluminium Louvers</option>
                    <option value="Exterior WPC Louvers">Exterior WPC Louvers</option>
                    <option value="Marble HPL Sheets">Marble HPL Sheets</option>
                    <option value="Aluminium Sections & Framing">Aluminium Sections & Framing</option>
                    <option value="WPC Jali & Privacy Screens">WPC Jali & Privacy Screens</option>
                    <option value="Wooden & WPC Pergolas">Wooden & WPC Pergolas</option>
                    <option value="CNC Designed Architectural Panels">CNC Designed Architectural Panels</option>
                    <option value="Turnkey Architectural Exterior Solutions">Turnkey Architectural Exterior Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                    Approximate Area (Sq. Ft.)
                  </label>
                  <input
                    type="text"
                    value={approxArea}
                    onChange={(e) => setApproxArea(e.target.value)}
                    placeholder="e.g. 2,500 Sq. Ft."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                  Project Notes / Architectural Scope
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your elevation, building type (residential/commercial), structural height, or specific shade requirements..."
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-5 bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] font-medium text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white font-medium text-sm rounded-lg border border-[#25D366]/30 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-[#202020]/50 text-center pt-1">
                Your data is strictly confidential. No spam. You will be assigned a certified facade technical engineer.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

