"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/content";

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

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 md:py-36"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Projects
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
            Selected{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>work</span>
          </h2>
        </FadeIn>

        {/* Featured projects — large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.1}>
              <div
                className="group relative p-8 rounded-2xl h-full flex flex-col justify-between overflow-hidden transition-all duration-300 cursor-default"
                style={{
                  background: "var(--cream)",
                  border: "1px solid transparent",
                  minHeight: "320px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-light)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Category + outcome */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                  >
                    {project.category}
                  </span>
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--gold-pale)",
                      color: "var(--gold)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {project.outcome}
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    className="font-medium text-xl mb-3 leading-snug"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink)",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        border: "1px solid var(--cream-dark)",
                        color: "var(--ink-light)",
                        fontFamily: "var(--font-body)",
                        background: "var(--white)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Decorative corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "var(--gold-pale)" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Rest — slim cards */}
        <div className="flex flex-col gap-4">
          {rest.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.08}>
              <div
                className="group p-6 rounded-2xl flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 cursor-default"
                style={{
                  background: "var(--cream)",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-light)";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="text-xs tracking-widest uppercase"
                      style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3
                    className="font-medium text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                  >
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span
                    className="text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
                    style={{
                      background: "var(--gold-pale)",
                      color: "var(--gold)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {project.outcome}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
