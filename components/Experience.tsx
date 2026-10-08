"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/content";

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

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-36"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Experience
            </span>
          </div>
          <h2
            className="font-light leading-tight mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Where I've{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>made an impact</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, var(--gold), transparent)", opacity: 0.3 }}
          />

          <div className="flex flex-col gap-1">
            {experience.map((role, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="group md:pl-10 relative">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 top-6 w-2 h-2 rounded-full -translate-x-0.5 hidden md:block transition-transform duration-300 group-hover:scale-150"
                    style={{ background: "var(--gold)" }}
                  />

                  <div
                    className="p-7 md:p-8 rounded-2xl mb-6 transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background: "var(--white)",
                      border: "1px solid transparent",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-light)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                      <div>
                        <h3
                          className="font-medium text-xl mb-1"
                          style={{
                            fontFamily: "var(--font-display)",
                            color: "var(--ink)",
                          }}
                        >
                          {role.role}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                          >
                            {role.company}
                          </span>
                          <span style={{ color: "var(--ink-light)" }}>·</span>
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
                        }}
                      >
                        {role.period}
                      </span>
                    </div>

                    <ul className="flex flex-col gap-2.5">
                      {role.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className="w-1 h-1 rounded-full mt-2.5 shrink-0"
                            style={{ background: "var(--gold)" }}
                          />
                          <span
                            className="text-sm leading-relaxed"
                            style={{
                              color: "var(--ink-light)",
                              fontFamily: "var(--font-body)",
                            }}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
