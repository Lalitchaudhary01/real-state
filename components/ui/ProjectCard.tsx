"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { MapPin, ArrowRight, Layers, Maximize2, X, Check } from "lucide-react";
import { useModals } from "./ModalContext";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const { openQuoteModal } = useModals();

  return (
    <>
      <div className="group relative bg-white border border-[#E9E7E2] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:border-[#B79A72]">
        {/* Top Image */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-[#161616]">
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category & Status badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="bg-[#141414]/85 backdrop-blur-sm text-[#B79A72] border border-[#B79A72]/40 text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <span className="bg-black/60 backdrop-blur-sm text-white/90 text-[10px] px-2.5 py-1 rounded-full">
              {project.status} • {project.year}
            </span>
          </div>

          {/* Location on image bottom */}
          <div className="absolute bottom-3 left-3 text-white flex items-center gap-1.5 text-xs">
            <MapPin className="w-3.5 h-3.5 text-[#B79A72]" />
            <span className="font-medium drop-shadow">{project.location}</span>
          </div>
        </div>

        {/* Content Details */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-xl font-serif text-[#202020] font-medium leading-snug group-hover:text-[#B79A72] transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#202020]/75 mt-2.5 line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Materials tags */}
            <div className="mt-4 pt-4 border-t border-[#E9E7E2] flex flex-wrap gap-1.5">
              {project.materials.slice(0, 3).map((mat, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 bg-[#F7F5F0] text-[#202020]/80 rounded border border-[#E9E7E2]"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Action trigger */}
          <div className="mt-5 pt-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-[#B79A72]">
              Area: {project.area}
            </span>

            <button
              onClick={() => setIsDetailOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#202020] hover:text-[#B79A72] transition-colors"
            >
              <span>View Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {isDetailOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setIsDetailOpen(false)}
          />

          <div className="relative bg-[#FBF9F5] border border-[#B79A72]/40 rounded-xl shadow-2xl max-w-3xl w-full p-6 sm:p-8 z-10 my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setIsDetailOpen(false)}
              className="absolute top-4 right-4 p-2 text-[#202020]/60 hover:text-[#202020] bg-white rounded-full border border-[#E9E7E2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
                {project.category} • {project.location}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#202020] font-normal mt-1">
                {project.title}
              </h2>
            </div>

            <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden mb-6 bg-black">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 900px"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-white rounded-lg border border-[#E9E7E2] mb-6 text-xs">
              <div>
                <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Year</span>
                <span className="font-medium text-[#202020]">{project.year}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Scope / Area</span>
                <span className="font-medium text-[#202020]">{project.area}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Status</span>
                <span className="font-medium text-[#202020]">{project.status}</span>
              </div>
              <div>
                <span className="text-[10px] text-[#B79A72] uppercase font-semibold block">Client</span>
                <span className="font-medium text-[#202020] truncate block">{project.client}</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#202020]/80 leading-relaxed mb-6">
              <p>{project.description}</p>
              <div>
                <strong className="text-[#202020] block mb-2 font-serif text-base">
                  Architectural Materials & Systems Specified:
                </strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.materials.map((mat, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-white rounded border border-[#E9E7E2]">
                      <Check className="w-3.5 h-3.5 text-[#B79A72]" />
                      <span>{mat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery thumbnails */}
            {project.galleryImages.length > 0 && (
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold block mb-2">
                  Additional Views & Elevations
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {project.galleryImages.map((img, i) => (
                    <div key={i} className="relative h-24 rounded overflow-hidden bg-black">
                      <Image src={img} alt={`${project.title} view ${i+1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[#E9E7E2] flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsDetailOpen(false);
                  openQuoteModal({ product: `Inquiry regarding ${project.title}` });
                }}
                className="flex-1 py-3 px-5 bg-[#202020] text-[#F7F5F0] hover:bg-[#B79A72] hover:text-[#121212] font-medium text-xs tracking-wider uppercase rounded-lg transition-colors text-center"
              >
                Inquire About Similar Elevation Design
              </button>
              <button
                onClick={() => setIsDetailOpen(false)}
                className="py-3 px-5 border border-[#E9E7E2] text-[#202020] text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-[#E9E7E2] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

