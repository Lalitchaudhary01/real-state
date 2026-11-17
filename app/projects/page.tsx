"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import { Sparkles, Building, MapPin } from "lucide-react";

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality & Retail"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#141414] text-[#F7F5F0] min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Aura Projects Archives"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#B79A72] font-semibold">
              Curated Architectural Portfolio
            </span>
            <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F5F0] font-normal leading-tight">
              Landmark Estates & Commercial Facades
            </h1>
            <p className="text-base sm:text-lg text-[#E9E7E2]/80 font-light leading-relaxed">
              Discover our completed and ongoing projects spanning luxury residences, commercial high-rises, and coastal retreats across India.
            </p>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Filters */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#B79A72] text-[#121212] font-bold"
                      : "bg-white/10 text-white/75 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs text-white/60">
              Showing {filteredProjects.length} Architectural Projects
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

