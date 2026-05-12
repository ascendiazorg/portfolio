"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl font-bold text-cream mb-3">
              AR<span className="text-crimson-light">.</span>
            </p>
            <p className="font-sans text-sm text-cream/60 leading-relaxed">
              Data Scientist & Developer specializing in Machine Learning, Data Visualization, and Web Development.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(`#${item.toLowerCase()}`)
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-sans text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.25em] uppercase text-cream/40 mb-4">
              Projects
            </p>
            <ul className="space-y-2">
              {[
                "Health Insurance Prediction",
                "Indonesia Visitor Analysis",
                "Netflix Forecasting",
                "Splittr",
                "Sleep Health Research",
              ].map((proj) => (
                <li key={proj}>
                  <span className="font-sans text-sm text-cream/70">{proj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-cream/40">
            © {year} Ascendiazorg Riupassa. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ascendiazorg"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-xs text-cream/50 hover:text-cream transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="mailto:riupassacendia@gmail.com"
              className="font-sans text-xs text-cream/50 hover:text-cream transition-colors duration-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
