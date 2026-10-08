"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/content";

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

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-32">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Sticky label */}
          <div className="md:col-span-3">
            <Reveal>
              <div className="sticky top-28">
                <div
                  className="text-xs tracking-widest uppercase mb-4"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                >
                  Experience
                </div>
                <h2
                  className="font-light leading-tight"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    color: "var(--ink)",
                  }}
                >
                  Where I've
                  <br />
                  <span style={{ fontStyle: "italic" }}>made an impact</span>
                </h2>
              </div>
            </Reveal>
          </div>

          {/* Cards */}
          <div className="md:col-span-9 flex flex-col gap-6">
            {experience.map((role, i) => (
              <Reveal key={role.company} delay={i * 0.1}>
                <div
                  className="group"
                  style={{
                    borderTop: "1px solid var(--cream-dark)",
                    paddingTop: "1.75rem",
                    paddingBottom: "1.75rem",
                    transition: "padding-left 0.3s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <h3
                        className="font-light text-2xl leading-snug"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        {role.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className="text-sm"
                          style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                        >
                          {role.company}
                        </span>
                        <span style={{ color: "var(--cream-dark)" }}>·</span>
                        <span
                          className="text-sm"
                          style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                        >
                          {role.location}
                        </span>
                      </div>
                    </div>
                    <span
                      className="text-xs px-3 py-1.5 rounded-full shrink-0 self-start"
                      style={{
                        background: "var(--gold-pale)",
                        color: "var(--gold)",
                        fontFamily: "var(--font-body)",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {role.period}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2">
                    {role.highlights.map((point, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: "var(--gold)" }}
                        />
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
