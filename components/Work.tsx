"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/content";

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

function ProjectRow({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.75, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="View"
      style={{
        borderBottom: "1px solid var(--ghost)",
        padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
        display: "grid",
        gridTemplateColumns: "3rem 1fr auto",
        alignItems: "start",
        gap: "1.5rem",
        transition: "padding-left 0.4s var(--ease-brand), background 0.4s",
        paddingLeft: hovered ? "1.5rem" : 0,
        background: hovered ? "rgba(123,43,62,0.12)" : "transparent",
        cursor: "none",
      }}
    >
      {/* Index */}
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.7rem",
          color: hovered ? "var(--gold)" : "var(--ash)",
          fontWeight: 500,
          letterSpacing: "0.1em",
          transition: "color 0.3s",
          paddingTop: 4,
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Content */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "0.5rem",
          }}
        >
          {project.category}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.4rem, 3.5vw, 2.5rem)",
            fontWeight: 300,
            color: hovered ? "var(--cream)" : "rgba(243,237,227,0.8)",
            transition: "color 0.3s",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: "0.75rem",
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.85rem",
            lineHeight: 1.65,
            color: hovered ? "rgba(243,237,227,0.55)" : "rgba(243,237,227,0.3)",
            transition: "color 0.3s",
            maxWidth: "55ch",
          }}
        >
          {project.description}
        </p>

        {/* Skills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
          {project.skills.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "0.3rem 0.75rem",
                border: `1px solid ${hovered ? "rgba(196,147,88,0.4)" : "rgba(243,237,227,0.1)"}`,
                color: hovered ? "var(--gold)" : "var(--ash)",
                borderRadius: 2,
                transition: "all 0.3s",
              }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Outcome badge */}
      <motion.div
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.65rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          padding: "0.5rem 1rem",
          background: hovered ? "var(--wine)" : "transparent",
          border: `1px solid ${hovered ? "var(--wine)" : "rgba(196,147,88,0.35)"}`,
          color: hovered ? "var(--cream)" : "var(--gold)",
          borderRadius: 2,
          transition: "all 0.35s",
          whiteSpace: "nowrap",
          marginTop: 4,
        }}
      >
        {project.outcome}
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section
      id="projects"
      style={{ background: "var(--void)", position: "relative", overflow: "hidden" }}
    >
      {/* Background 02 */}
      <div
        style={{
          position: "absolute",
          bottom: "-3rem",
          left: "-2rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 22vw, 20rem)",
          fontWeight: 300,
          color: "rgba(243,237,227,0.025)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        02
      </div>

      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(3rem, 6vw, 5rem)", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem" }}>
                <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
                  02 — Work
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                }}
              >
                Selected{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>projects</span>
              </h2>
            </div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", color: "var(--ash)", letterSpacing: "0.1em" }}>
              {projects.length} projects
            </span>
          </div>
        </Reveal>

        {/* Project list */}
        <div style={{ borderTop: "1px solid var(--ghost)" }}>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
