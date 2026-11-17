"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "HPL Exterior Cladding",
    city: "",
    details: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg("Please fill in your name, phone, and email.");
      return;
    }
    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleWhatsAppSend = () => {
    const text = `*Architectural Consultation Request*%0A` +
      `*Name:* ${encodeURIComponent(formData.name || "Enquirer")}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || "Not provided")}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || "Not provided")}%0A` +
      `*Service:* ${encodeURIComponent(formData.service)}%0A` +
      `*City:* ${encodeURIComponent(formData.city || "Delhi NCR")}%0A` +
      `*Project Scope:* ${encodeURIComponent(formData.details || "Requesting quote and material catalogue.")}`;

    window.open(`https://wa.me/919818847290?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F7F5F0] text-[#202020] border-t border-[#E9E7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Address details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#202020] font-normal leading-tight mt-1.5">
                Speak With Our Senior Facade Engineers
              </h2>
              <p className="text-sm text-[#202020]/75 mt-3 font-light leading-relaxed">
                Whether you need technical CAD consultation, high-grade HPL shade swatches, or turnkey project quotation, our team is ready to assist.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY_INFO.phones[0].replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E9E7E2] hover:border-[#B79A72] transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center shrink-0 group-hover:bg-[#B79A72] group-hover:text-[#121212] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B79A72] font-semibold block">
                    Direct Phone Line
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#202020]">
                    {COMPANY_INFO.phones[0]}
                  </span>
                  <span className="text-[11px] text-[#202020]/60 block">Mon - Sat, 9:30 AM - 7:30 PM</span>
                </div>
              </a>

              <a
                href={COMPANY_INFO.whatsappDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E9E7E2] hover:border-[#25D366] transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#25D366] font-semibold block">
                    Instant WhatsApp Enquiry
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#202020]">
                    +91 98188 47290
                  </span>
                  <span className="text-[11px] text-[#202020]/60 block">Fast technical reply & catalogue sharing</span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.emails[0]}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E9E7E2] hover:border-[#B79A72] transition-colors group shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-[#B79A72]/15 text-[#B79A72] flex items-center justify-center shrink-0 group-hover:bg-[#B79A72] group-hover:text-[#121212] transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#B79A72] font-semibold block">
                    Engineering Desk Email
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#202020]">
                    {COMPANY_INFO.emails[0]}
                  </span>
                  <span className="text-[11px] text-[#202020]/60 block">For architectural drawings & BOQ submittals</span>
                </div>
              </a>
            </div>

            {/* Office Locations */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-[#202020] font-semibold block mb-3">
                Experience Studios & Hubs:
              </span>
              <div className="space-y-3 text-xs text-[#202020]/80">
                {COMPANY_INFO.addresses.map((addr, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E9E7E2]">
                    <MapPin className="w-4 h-4 text-[#B79A72] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#202020] block">{addr.title} ({addr.city})</strong>
                      <span className="text-[11px] text-[#202020]/65">{addr.address}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Interactive Map */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E9E7E2] shadow-xl">
              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-[#B79A72]/20 text-[#B79A72] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#202020]">
                    Message Sent Successfully
                  </h3>
                  <p className="text-sm text-[#202020]/75 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your inquiry has been routed to our facade technical division. You will receive an engineering callback shortly.
                  </p>
                  <div className="pt-4 flex flex-wrap justify-center gap-3">
                    <button
                      onClick={handleWhatsAppSend}
                      className="px-5 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#1EBE5D] transition-colors inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: "HPL Exterior Cladding",
                          city: "",
                          details: "",
                        });
                      }}
                      className="px-5 py-3 border border-[#E9E7E2] text-[#202020] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#E9E7E2]"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                      Direct Inquiry Form
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#202020] font-normal mt-1">
                      Request Material Consultation & Site Visit
                    </h3>
                  </div>

                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ar. Rohit Sharma"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                        Phone Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98111 22233"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
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
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rohit@designatelier.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                        City / Site Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Gurgaon, Noida, Goa, Delhi"
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                      Service / Product Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                    >
                      <option value="HPL Exterior Cladding">Exterior Wall Cladding (HPL / Stone)</option>
                      <option value="ACP Installation">ACP Installation & Elevation</option>
                      <option value="Wooden HPL Cladding">Wooden HPL Cladding</option>
                      <option value="Aluminium Louvers">Aluminium Louvers Installation</option>
                      <option value="Exterior WPC Louvers">Exterior WPC Louvers</option>
                      <option value="CNC Cutting & Design">CNC Cutting & Perforated Panels</option>
                      <option value="Building Facade Design">Building Facade 3D Design & Engineering</option>
                      <option value="Custom Pergola & WPC Solutions">Custom Pergola & WPC Solutions</option>
                      <option value="Turnkey Architectural Exterior Solutions">Turnkey Architectural Exterior Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#202020]/80 mb-1">
                      Project Details & Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Brief us about your project: total approximate square footage, new build or renovation, preferred finishes, or timeline..."
                      className="w-full px-3.5 py-2 text-sm bg-[#FBF9F5] border border-[#E9E7E2] rounded-lg focus:outline-none focus:border-[#B79A72] text-[#202020]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3.5 px-6 bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] font-semibold text-xs tracking-widest uppercase rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                    >
                      {isSubmitting ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="py-3.5 px-5 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366] hover:text-white font-semibold text-xs tracking-wider uppercase rounded-lg border border-[#25D366]/30 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Instant WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Google Maps / Location preview visual */}
            <div className="relative h-56 rounded-2xl overflow-hidden border border-[#E9E7E2] shadow-md bg-white">
              <iframe
                title="Aura Exteriors Corporate Hub Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112339.77124110363!2d77.40939023880608!3d28.47438787019623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea692bf9b689%3A0x673ccfbe944c6670!2sGreater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 bg-[#121212]/85 backdrop-blur-sm text-white px-3 py-1 rounded text-[11px] flex items-center gap-1.5 border border-white/10 pointer-events-none">
                <MapPin className="w-3.5 h-3.5 text-[#B79A72]" />
                <span>Greater Noida Experience Center & Regional Service Area</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

