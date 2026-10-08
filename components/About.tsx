"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { about } from "@/lib/content";

function Reveal({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      data-light="true"
      style={{ background: "var(--paper)", color: "var(--void)", position: "relative", overflow: "hidden" }}
    >
      {/* Section number */}
      <div
        style={{
          position: "absolute",
          top: "-2rem",
          right: "-1rem",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(8rem, 20vw, 18rem)",
          fontWeight: 300,
          color: "rgba(10,9,9,0.04)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.05em",
        }}
      >
        01
      </div>

      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
        {/* Label */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              01 — About
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Pull quote */}
          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.15,
                color: "var(--void)",
                letterSpacing: "-0.02em",
                maxWidth: "22ch",
                borderLeft: "3px solid var(--gold)",
                paddingLeft: "clamp(1rem, 3vw, 2.5rem)",
              }}
            >
              "The best marketing doesn't just reach people —{" "}
              <span style={{ color: "var(--wine)" }}>it moves them.</span>"
            </h2>
          </Reveal>

          {/* Two-column: bio + meta */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(2rem, 5vw, 5rem)",
              paddingTop: "clamp(1rem, 3vw, 2rem)",
            }}
          >
            <Reveal delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {about.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: i === 0 ? "1.1rem" : "0.95rem",
                      lineHeight: 1.75,
                      color: i === 0 ? "var(--void)" : "var(--ash)",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            {/* Tags + CTA */}
            <Reveal delay={0.3}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem", paddingTop: "0.5rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                  {["Hyderabad, India", "MBA Candidate 2027", "3 Internships", "AWS Certified", "Open to Opportunities"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.45rem 1rem",
                        border: "1px solid var(--bone)",
                        color: "var(--ash)",
                        borderRadius: 2,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  data-cursor="Talk"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--void)",
                    textDecoration: "none",
                    borderBottom: "2px solid var(--gold)",
                    paddingBottom: "0.25rem",
                    width: "fit-content",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--wine)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--void)")}
                >
                  Let's work together
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M3 10h14M10 3l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats band */}
        <Reveal delay={0.4} style={{ marginTop: "clamp(4rem, 8vw, 7rem)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              borderTop: "1px solid var(--bone)",
            }}
          >
            {about.stats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: "clamp(1.5rem, 3vw, 2.5rem) 0",
                  borderRight: i < about.stats.length - 1 ? "1px solid var(--bone)" : "none",
                  paddingRight: "clamp(1rem, 3vw, 2.5rem)",
                  paddingLeft: i > 0 ? "clamp(1rem, 3vw, 2.5rem)" : 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 300,
                    color: "var(--void)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--ash)",
                    marginTop: "0.4rem",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
