"use client";

import { useEffect, useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof Errors) =>
    `w-full px-4 py-3 bg-cream border rounded-lg font-sans text-sm text-charcoal placeholder:text-charcoal-muted/50 focus:outline-none focus:ring-1 transition-all duration-200 ${
      errors[field]
        ? "border-red-400 focus:ring-red-200"
        : "border-border focus:border-crimson focus:ring-crimson/20"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-6">
              Say hello.
            </h2>

            <p className="font-sans text-charcoal-muted leading-relaxed mb-10 max-w-sm">
              Open to collaborations, research discussions, or just a conversation
              about data. I read every message.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:riupassacendia@gmail.com"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-charcoal-muted group-hover:border-crimson group-hover:text-crimson transition-colors duration-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal-muted">Email</p>
                  <p className="font-sans text-sm font-medium text-charcoal group-hover:text-crimson transition-colors duration-200">
                    riupassacendia@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://github.com/ascendiazorg"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-charcoal-muted group-hover:border-crimson group-hover:text-crimson transition-colors duration-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal-muted">GitHub</p>
                  <p className="font-sans text-sm font-medium text-charcoal group-hover:text-crimson transition-colors duration-200">
                    @ascendiazorg
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-charcoal-muted">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-xs text-charcoal-muted">Location</p>
                  <p className="font-sans text-sm font-medium text-charcoal">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {status === "success" ? (
              <div className="border border-border rounded-xl p-10 text-center">
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Got it.</h3>
                <p className="font-sans text-sm text-charcoal-muted mb-6">
                  Message received. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-medium text-crimson hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-border rounded-xl p-8 space-y-5 bg-cream-card"
              >
                <div>
                  <label className="block font-sans text-xs font-medium text-charcoal mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass("name")}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-medium text-charcoal mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass("email")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-sans text-xs font-medium text-charcoal mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500">Something went wrong. Try emailing me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3 bg-crimson text-cream font-sans font-medium text-sm rounded-lg hover:bg-crimson-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
