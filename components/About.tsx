"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/content";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: "var(--cream)" }}>
      {/* Top band — large quote */}
      <div
        className="border-b"
        style={{ borderColor: "var(--cream-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-28">
          <Reveal>
            <p
              className="font-light leading-tight max-w-3xl"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "var(--ink)",
                letterSpacing: "-0.01em",
              }}
            >
              "The best marketing doesn't just reach people —{" "}
              <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
                it moves them.
              </span>
              "
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main about grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Left label */}
          <div className="md:col-span-3">
            <Reveal>
              <div className="sticky top-28">
                <div
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                >
                  About
                </div>
                <h2
                  className="font-light leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--ink)",
                  }}
                >
                  Sathvika
                  <br />
                  <span style={{ fontStyle: "italic" }}>Manthena</span>
                </h2>
              </div>
            </Reveal>
          </div>

          {/* Right content */}
          <div className="md:col-span-9">
            <div className="flex flex-col gap-7">
              {about.paragraphs.map((para, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <p
                    className="leading-relaxed"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: i === 0 ? "1.125rem" : "1rem",
                      color: i === 0 ? "var(--ink)" : "var(--ink-light)",
                      borderLeft: i === 0 ? "2px solid var(--gold)" : "none",
                      paddingLeft: i === 0 ? "1.25rem" : "0",
                    }}
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>

            {/* Stats row */}
            <Reveal delay={0.35}>
              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-0 mt-16"
                style={{ borderTop: "1px solid var(--cream-dark)" }}
              >
                {about.stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className="py-8 pr-8"
                    style={{
                      borderRight: i < 3 ? "1px solid var(--cream-dark)" : "none",
                      borderBottom: i < 2 ? "1px solid var(--cream-dark)" : "none",
                    }}
                  >
                    <div
                      className="font-light leading-none mb-1"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "2.75rem",
                        color: "var(--ink)",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs tracking-wide uppercase"
                      style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
