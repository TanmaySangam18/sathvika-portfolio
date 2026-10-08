"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/content";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 md:py-36"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left: Section label + stats */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                >
                  About
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2
                className="font-light leading-tight mb-12"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Strategist.{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
                  Creator.
                </span>{" "}
                Builder.
              </h2>
            </FadeIn>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {about.stats.map((stat, i) => (
                <FadeIn key={stat.label} delay={0.2 + i * 0.08}>
                  <div
                    className="p-5 rounded-2xl"
                    style={{ background: "var(--cream)" }}
                  >
                    <div
                      className="font-light leading-none mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.5rem",
                        color: "var(--gold)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs tracking-wide uppercase"
                      style={{
                        color: "var(--ink-light)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: Paragraphs */}
          <div className="flex flex-col gap-6 pt-16 md:pt-28">
            {about.paragraphs.map((para, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.1}>
                <p
                  className="leading-relaxed text-base md:text-lg"
                  style={{
                    color: i === 0 ? "var(--ink)" : "var(--ink-light)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {para}
                </p>
              </FadeIn>
            ))}

            <FadeIn delay={0.5}>
              <div className="mt-4 flex flex-wrap gap-3">
                {["Hyderabad, India", "MBA Candidate 2027", "Open to Opportunities"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs px-4 py-2 rounded-full"
                      style={{
                        border: "1px solid var(--gold-light)",
                        color: "var(--ink-light)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
