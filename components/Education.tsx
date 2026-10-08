"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/lib/content";

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

export default function Education() {
  return (
    <section
      id="education"
      style={{ background: "var(--smoke)", position: "relative", overflow: "hidden" }}
    >
      <div style={{ position: "absolute", bottom: "-3rem", right: "-1rem", fontFamily: "var(--font-display)", fontSize: "clamp(8rem, 22vw, 20rem)", fontWeight: 300, color: "rgba(243,237,227,0.025)", lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.05em" }}>
        04
      </div>

      <div style={{ padding: "clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 4rem)", position: "relative", zIndex: 2 }}>
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              04 — Education &amp; Credentials
            </span>
          </div>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(3rem, 6vw, 5rem)", alignItems: "start" }}>
          {/* Education */}
          <div>
            <Reveal>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.02em", marginBottom: "2.5rem", lineHeight: 1.1 }}>
                Academic
                <br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>foundation</span>
              </h3>
            </Reveal>

            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={0.1 + i * 0.1}>
                <div style={{ borderLeft: "1px solid var(--ghost)", paddingLeft: "1.5rem", marginBottom: "2.5rem" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = "var(--ghost)")}
                >
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.5rem" }}>
                    {edu.period} · {edu.status}
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "1.4rem", fontWeight: 400, color: "var(--cream)", marginBottom: "0.25rem" }}>
                    {edu.degree}
                  </h4>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "var(--gold)", marginBottom: "0.5rem" }}>
                    {edu.specialisation}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "var(--ash)", marginBottom: "0.75rem" }}>
                    {edu.institution}{edu.gpa ? ` · ${edu.gpa}` : ""}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", lineHeight: 1.65, color: "rgba(243,237,227,0.35)" }}>
                    {edu.details}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <Reveal delay={0.1}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300, color: "var(--cream)", letterSpacing: "-0.02em", marginBottom: "2.5rem", lineHeight: 1.1 }}>
                Certifications &amp;
                <br />
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>programmes</span>
              </h3>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {certifications.map((cert, i) => (
                <Reveal key={cert.title} delay={0.15 + i * 0.07}>
                  <div
                    style={{
                      borderBottom: "1px solid var(--ghost)",
                      padding: "1.25rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      transition: "padding-left 0.35s var(--ease-brand)",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "1rem")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.paddingLeft = "0")}
                  >
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: "1.05rem", color: "var(--cream)", marginBottom: "0.2rem" }}>
                        {cert.title}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--ash)" }}>
                        {cert.issuer}
                      </div>
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "var(--gold)", letterSpacing: "0.1em", whiteSpace: "nowrap", flexShrink: 0 }}>
                      {cert.date}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
