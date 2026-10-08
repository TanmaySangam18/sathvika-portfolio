"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contact, site } from "@/lib/content";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: "var(--side-a)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-36">
        <Reveal>
          <div
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
          >
            Contact
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            className="font-light leading-none mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--cream)",
              letterSpacing: "-0.03em",
            }}
          >
            Let's{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
              talk.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            className="text-base leading-relaxed max-w-lg mb-12"
            style={{ color: "rgba(245,242,238,0.5)", fontFamily: "var(--font-body)" }}
          >
            {contact.description}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 mb-24">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: "var(--gold)",
                color: "var(--ink)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Send an Email
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3 10h14M10 3l7 7-7 7" />
              </svg>
            </a>

            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                border: "1px solid rgba(245,242,238,0.2)",
                color: "rgba(245,242,238,0.8)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,242,238,0.2)";
                (e.currentTarget as HTMLElement).style.color = "rgba(245,242,238,0.8)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Footer */}
        <Reveal delay={0.4}>
          <div
            className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(245,242,238,0.08)" }}
          >
            <span
              className="text-sm"
              style={{ color: "rgba(245,242,238,0.25)", fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} {site.name}
            </span>
            <div className="flex gap-6">
              {["About", "Work", "Education", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-xs tracking-wide uppercase transition-colors duration-200"
                  style={{ color: "rgba(245,242,238,0.25)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,238,0.25)")}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
