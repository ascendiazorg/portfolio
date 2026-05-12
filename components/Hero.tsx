"use client";

import { useEffect, useRef } from "react";

const roles = ["Data Scientist", "ML Developer", "Researcher", "Front-End Developer"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function type() {
      const current = roles[roleIdx];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeout = setTimeout(type, 400);
          return;
        }
      }
      timeout = setTimeout(type, deleting ? 60 : 90);
    }

    timeout = setTimeout(type, 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #E2D9CE 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <p className="font-sans text-xs font-medium tracking-[0.25em] uppercase text-charcoal-muted mb-10 animate-fade-in">
            Based in Jakarta
          </p>

          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-charcoal leading-none tracking-tight mb-6 animate-slide-up">
            Ascendiazorg
            <br />
            <span
              className="italic"
              style={{
                background: "linear-gradient(135deg, #8B1A1A 0%, #B22222 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Riupassa
            </span>
          </h1>

          <div className="flex items-center gap-2 mb-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="font-sans text-lg md:text-xl text-charcoal-muted font-light">
              I&apos;m a{" "}
            </span>
            <span
              ref={roleRef}
              className="font-sans text-lg md:text-xl font-semibold text-crimson border-r-2 border-crimson pr-1"
            />
          </div>

          <p
            className="font-sans text-base text-charcoal-muted leading-relaxed max-w-lg mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            I like turning messy data into something useful. Sometimes that&apos;s a
            machine learning model, sometimes it&apos;s a chart, sometimes it&apos;s a
            website. Published at{" "}
            <span className="text-crimson font-medium">ICIMTech 2024</span> in Bali.
          </p>

          <div
            className="flex flex-wrap gap-4 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <button
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-7 py-3 bg-crimson text-cream font-sans font-medium text-sm rounded-lg hover:bg-crimson-light transition-colors duration-200"
            >
              See my work
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <a
              href="https://github.com/ascendiazorg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 border border-border text-charcoal-muted font-sans font-medium text-sm rounded-lg hover:border-crimson hover:text-crimson transition-colors duration-200"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
