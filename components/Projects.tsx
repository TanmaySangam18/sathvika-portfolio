"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/content";

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

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ background: "var(--side-a)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-14 py-20 md:py-32">
        {/* Header */}
        <div
          className="flex items-end justify-between mb-16 pb-8"
          style={{ borderBottom: "1px solid rgba(245,242,238,0.1)" }}
        >
          <Reveal>
            <div>
              <div
                className="text-xs tracking-widest uppercase mb-3"
                style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
              >
                Work
              </div>
              <h2
                className="font-light leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "var(--cream)",
                  letterSpacing: "-0.02em",
                }}
              >
                Selected{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>projects</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span
              className="text-sm hidden md:block"
              style={{ color: "rgba(245,242,238,0.3)", fontFamily: "var(--font-body)" }}
            >
              {projects.length} projects
            </span>
          </Reveal>
        </div>

        {/* Project list — table style like adham's */}
        <div>
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <div
                className="group grid md:grid-cols-12 gap-4 md:gap-8 py-10 cursor-default"
                style={{
                  borderBottom: "1px solid rgba(245,242,238,0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "1rem";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                }}
              >
                {/* Number */}
                <div className="md:col-span-1 flex items-start pt-1">
                  <span
                    className="text-sm"
                    style={{
                      color: "rgba(245,242,238,0.2)",
                      fontFamily: "var(--font-body)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Category */}
                <div className="md:col-span-2 flex items-start">
                  <span
                    className="text-xs tracking-wider uppercase mt-1"
                    style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title + description */}
                <div className="md:col-span-6">
                  <h3
                    className="font-light leading-snug mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--cream)",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream)")}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,242,238,0.45)", fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-3 py-1 rounded-full"
                        style={{
                          border: "1px solid rgba(245,242,238,0.12)",
                          color: "rgba(245,242,238,0.4)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="md:col-span-3 flex md:justify-end items-start">
                  <div
                    className="text-right"
                  >
                    <span
                      className="text-sm font-medium px-4 py-2 rounded-full"
                      style={{
                        background: "rgba(200,168,130,0.15)",
                        color: "var(--gold)",
                        fontFamily: "var(--font-body)",
                        border: "1px solid rgba(200,168,130,0.25)",
                      }}
                    >
                      {project.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
