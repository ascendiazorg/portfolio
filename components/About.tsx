"use client";

import { useEffect, useRef } from "react";

const timeline = [
  {
    year: "2024",
    title: "Published at ICIMTech",
    desc: "Co-authored a research paper on sleep health analysis using Lasso Regression. Presented at the International Conference on Information Management and Technology in Bali.",
  },
  {
    year: "2024",
    title: "Netflix Subscriptions Forecasting",
    desc: "Built an ARIMA-based time series model to forecast Netflix subscriber growth. Turned out ARIMA handles streaming data surprisingly well.",
  },
  {
    year: "2023",
    title: "Splittr — Front-End Dev",
    desc: "Helped build the frontend for Splittr, a cost-splitting app for subscriptions and group trips. Pure HTML, CSS, and JavaScript.",
  },
  {
    year: "2023",
    title: "Indonesia Visitor Analysis",
    desc: "Analyzed ASEAN visitor data using R and ggplot2. Malaysia leads at 23.7% — and 2020 was predictably rough.",
  },
  {
    year: "2023",
    title: "Health Insurance ML App",
    desc: "Built a Streamlit web app that predicts US health insurance costs using a trained ML model on public datasets.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("is-visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-cream-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="reveal font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-8">
              A bit about me
            </h2>

            <div className="reveal space-y-5 font-sans text-charcoal-muted leading-relaxed">
              <p>
                I&apos;m a developer and data person from Indonesia. Most of my work
                sits at the intersection of machine learning and practical
                problem-solving — building things that actually answer a question
                or solve something real.
              </p>
              <p>
                Python and R are my main tools. I spend a lot of time in Jupyter
                and RStudio, occasionally writing frontend code when a project
                needs it. In 2024 I co-authored a research paper that got
                accepted at{" "}
                <span className="text-crimson font-medium">ICIMTech</span> — a
                good reminder that writing clearly about data is just as important
                as the model itself.
              </p>
              <p>
                Outside of projects, I&apos;m interested in how statistical methods
                hold up on messy real-world data (spoiler: it&apos;s complicated).
              </p>
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-2">
              {["Python", "R", "Machine Learning", "Data Visualization", "HTML/CSS/JS", "Research"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-sans text-crimson bg-crimson/10 border border-crimson/20 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="reveal font-sans text-xs font-semibold tracking-[0.2em] uppercase text-charcoal-muted mb-8">
              Timeline
            </p>

            <div className="relative">
              <div className="absolute left-3 top-0 bottom-0 w-px bg-border" />

              <ul className="space-y-8">
                {timeline.map((item, i) => (
                  <li key={i} className={`reveal relative pl-10`}>
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-cream-alt border-2 border-crimson flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-crimson" />
                    </div>

                    <div>
                      <span className="font-sans text-xs font-bold tracking-widest text-crimson uppercase">
                        {item.year}
                      </span>
                      <h3 className="font-serif text-base font-semibold text-charcoal mt-0.5 mb-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-charcoal-muted leading-relaxed" style={{ maxWidth: "none" }}>
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
