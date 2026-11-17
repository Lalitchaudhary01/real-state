"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import ProjectCard from "../ui/ProjectCard";
import { Sparkles, ArrowRight } from "lucide-react";

const CATEGORIES = ["All", "Residential", "Commercial", "Hospitality & Retail"];

export default function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#161616] text-[#F7F5F0] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#B79A72] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F7F5F0] font-normal tracking-tight">
              Featured Landmarks & Estates
            </h2>
            <p className="text-sm sm:text-base text-white/70 mt-2 max-w-2xl font-light">
              Explore our landmark residential villas, corporate headquarters, and luxury coastal estates executed with uncompromising craftsmanship across Delhi NCR, Gurgaon, and Goa.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-[#B79A72] text-[#121212] font-bold"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Action Link */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-[#B79A72] text-[#B79A72] hover:bg-[#B79A72] hover:text-[#121212] font-semibold text-xs tracking-widest uppercase rounded transition-all"
          >
            <span>Explore Full Project Archives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

