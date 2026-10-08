"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contact, site } from "@/lib/content";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
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
      className="py-24 md:py-36"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="max-w-2xl">
          <FadeIn>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
              >
                Contact
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              className="font-light leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Let's{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
                work
              </span>{" "}
              together.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p
              className="text-base leading-relaxed mb-12"
              style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
            >
              {contact.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: "var(--ink)",
                  color: "var(--cream)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {contact.email}
              </a>

              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  border: "1px solid var(--ink-light)",
                  color: "var(--ink)",
                  fontFamily: "var(--font-body)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-light)";
                  (e.currentTarget as HTMLElement).style.color = "var(--ink)";
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
          </FadeIn>
        </div>

        {/* Footer strip */}
        <FadeIn delay={0.4}>
          <div
            className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            style={{ borderTop: "1px solid var(--cream-dark)" }}
          >
            <span
              className="text-sm"
              style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
            >
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </span>
            <div className="flex gap-6">
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#experience" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#education" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-wide uppercase transition-colors duration-200"
                  style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-light)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
