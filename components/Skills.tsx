"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, achievements } from "@/lib/content";

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

const allSkills = [
  ...skills.marketing.map((s) => ({ label: s, type: "marketing" })),
  ...skills.tools.map((s) => ({ label: s, type: "tool" })),
  ...skills.soft.map((s) => ({ label: s, type: "soft" })),
];

export default function Skills() {
  return (
    <section data-light="true" style={{ background: "var(--paper)", color: "var(--void)", overflow: "hidden", position: "relative" }}>
      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)" }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              05 — Skills &amp; Achievements
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 5rem)" }}>
          {/* Skills cloud */}
          <Reveal delay={0.1}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--void)", letterSpacing: "-0.02em", marginBottom: "2rem", lineHeight: 1.1 }}>
                What I <span style={{ fontStyle: "italic", color: "var(--wine)" }}>bring</span>
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {allSkills.map((s, i) => (
                  <motion.span
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 + i * 0.025, duration: 0.4 }}
                    whileHover={{ scale: 1.06 }}
                    data-cursor="Skill"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.75rem",
                      fontWeight: s.type === "tool" ? 600 : 400,
                      letterSpacing: "0.06em",
                      padding: "0.45rem 1rem",
                      borderRadius: 2,
                      cursor: "none",
                      background: s.type === "tool" ? "var(--void)" : s.type === "soft" ? "var(--bone)" : "transparent",
                      color: s.type === "tool" ? "var(--gold)" : s.type === "soft" ? "var(--ash)" : "var(--void)",
                      border: s.type === "marketing" ? "1px solid var(--bone)" : "none",
                      transition: "background 0.2s, color 0.2s",
                    }}
                  >
                    {s.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Achievements */}
          <Reveal delay={0.2}>
            <div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--void)", letterSpacing: "-0.02em", marginBottom: "2rem", lineHeight: 1.1 }}>
                Recognition &amp; <span style={{ fontStyle: "italic", color: "var(--wine)" }}>honours</span>
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {achievements.map((item, i) => (
                  <div
                    key={item.title}
                    style={{ borderBottom: "1px solid var(--bone)", padding: "1.25rem 0", display: "flex", gap: "1.5rem", alignItems: "flex-start", transition: "padding-left 0.35s var(--ease-brand)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0.75rem")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
                  >
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 300, color: "rgba(10,9,9,0.15)", lineHeight: 1, flexShrink: 0, width: "2rem" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--void)", marginBottom: "0.2rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ash)" }}>
                        {item.context}{item.year ? ` · ${item.year}` : ""}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
