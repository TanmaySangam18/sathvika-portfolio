"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/content";

function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }} style={style}>
      {children}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      data-light="true"
      style={{ background: "var(--paper)", color: "var(--void)", position: "relative", overflow: "hidden" }}
    >
      {/* BG number */}
      <div style={{ position: "absolute", top: "-3rem", right: "-2rem", fontFamily: "var(--font-display)", fontSize: "clamp(8rem, 22vw, 20rem)", fontWeight: 300, color: "rgba(10,9,9,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>
        03
      </div>

      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              03 — Experience
            </span>
          </div>
        </Reveal>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {experience.map((role, i) => (
            <Reveal key={role.company} delay={i * 0.12} style={{ borderBottom: "1px solid var(--bone)" }}>
              <div
                style={{ padding: "clamp(2rem, 4vw, 3.5rem) 0", display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "1.5rem")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", transition: "padding-left 0.4s var(--ease-brand)" }}>
                  <div>
                    {/* Company name — BIG */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2rem, 5vw, 4rem)",
                        fontWeight: 300,
                        color: "var(--void)",
                        lineHeight: 1,
                        letterSpacing: "-0.025em",
                        marginBottom: "0.4rem",
                      }}
                    >
                      {role.company}
                    </h3>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--gold)", fontWeight: 500 }}>
                        {role.role}
                      </span>
                      <span style={{ color: "var(--bone)" }}>·</span>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--ash)" }}>
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.45rem 1.1rem",
                      background: "var(--bone)",
                      color: "var(--void)",
                      borderRadius: 2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                {/* Bullets */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", paddingLeft: 0 }}>
                  {role.highlights.map((pt, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", marginTop: 9, flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.65, color: "var(--ash)" }}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
