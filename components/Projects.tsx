"use client";

import { useEffect, useRef, useState } from "react";
import { projects, categories } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`transition-all duration-700 mb-10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Projects
            </h2>
            <p className="font-sans text-sm text-charcoal-muted max-w-xs leading-relaxed">
              Data science, machine learning, and web work — from ML models to published research.
            </p>
          </div>
        </div>

        {/* Category filter */}
        <div
          className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-xs font-semibold font-sans tracking-wide rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-crimson text-cream border-crimson shadow-glow-sm"
                  : "bg-transparent text-charcoal-muted border-border hover:border-crimson hover:text-crimson"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.3 + i * 0.1}s` }}
            >
              <ProjectCard project={project} index={i} />
            </div>
          ))}
        </div>

        <div className={`mt-14 transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="https://github.com/ascendiazorg"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-charcoal-muted hover:text-crimson transition-colors duration-200"
          >
            More on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
