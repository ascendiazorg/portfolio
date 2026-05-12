"use client";

import { useEffect, useRef, useState } from "react";
import { techStack } from "@/data/skills";

const groups = [
  { label: "Languages", items: techStack.languages },
  { label: "ML & Data Science", items: techStack.mlAndData },
  { label: "Tools & Platforms", items: techStack.tools },
  { label: "Research", items: techStack.research },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-cream-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-2">
            What I work with
          </h2>
          <p className="font-sans text-sm text-charcoal-muted">
            Tools and technologies I&apos;ve used across projects and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {groups.map((group, gi) => (
            <div
              key={group.label}
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${0.15 + gi * 0.1}s` }}
            >
              <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-crimson mb-4">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-sans text-charcoal border border-border rounded-lg bg-cream hover:border-crimson hover:text-crimson transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
