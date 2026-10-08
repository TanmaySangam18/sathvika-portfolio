"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { contact, site, interests } from "@/lib/content";

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

export default function Contact() {
  return (
    <>
      {/* Interests band — dark */}
      <section style={{ background: "var(--deep)", borderTop: "1px solid var(--ghost)", borderBottom: "1px solid var(--ghost)" }}>
        <div style={{ padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)" }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
              <div style={{ width: 32, height: 1, background: "var(--gold)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
                Beyond the brief
              </span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {interests.items.map((item, i) => (
              <Reveal key={item.title} delay={0.05 + i * 0.1}>
                <div style={{ borderLeft: "1px solid var(--ghost)", paddingLeft: "1.25rem", transition: "border-left-color 0.3s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = "var(--gold)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderLeftColor = "var(--ghost)")}
                >
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", color: "var(--cream)", marginBottom: "0.5rem" }}>{item.title}</div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.8rem", lineHeight: 1.65, color: "var(--ash)" }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact — WINE background, big text */}
      <section
        id="contact"
        style={{ background: "var(--wine)", position: "relative", overflow: "hidden" }}
      >
        {/* BG noise */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "200px", pointerEvents: "none" }} />

        <div style={{ padding: "clamp(5rem, 10vw, 9rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 5vw, 4rem)", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "clamp(2rem, 5vw, 4rem)" }}>
              <div style={{ width: 32, height: 1, background: "rgba(243,237,227,0.4)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(243,237,227,0.6)" }}>
                Let's connect
              </span>
            </div>
          </Reveal>

          {/* Giant headline */}
          <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
            {["LET'S", "CREATE", "TOGETHER."].map((word, i) => (
              <div key={word} style={{ overflow: "hidden" }}>
                <motion.div
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(4rem, 12vw, 11rem)",
                    fontWeight: 300,
                    color: i === 2 ? "transparent" : "var(--cream)",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                    WebkitTextStroke: i === 2 ? "1px rgba(243,237,227,0.5)" : "none",
                    fontStyle: i === 2 ? "italic" : "normal",
                  }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.7, color: "rgba(243,237,227,0.6)", maxWidth: "40ch", marginBottom: "2.5rem" }}>
              {contact.description}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href={`mailto:${contact.email}`}
                data-cursor="Email"
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
                  background: "var(--cream)",
                  padding: "1rem 2rem",
                  borderRadius: 2,
                  transition: "background 0.25s, color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--cream)";
                }}
              >
                Send an Email
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 10h14M10 3l7 7-7 7" />
                </svg>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LinkedIn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--cream)",
                  textDecoration: "none",
                  border: "1px solid rgba(243,237,227,0.35)",
                  padding: "1rem 2rem",
                  borderRadius: 2,
                  transition: "border-color 0.25s, color 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--cream)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(243,237,227,0.35)";
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </Reveal>

          {/* Footer */}
          <Reveal delay={0.5} style={{ marginTop: "clamp(4rem, 8vw, 7rem)", borderTop: "1px solid rgba(243,237,227,0.12)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "rgba(243,237,227,0.3)", letterSpacing: "0.1em" }}>
              © {new Date().getFullYear()} {site.name}
            </span>
            <div style={{ display: "flex", gap: "2rem" }}>
              {["About", "Work", "Experience", "Education"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(243,237,227,0.3)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(243,237,227,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(243,237,227,0.3)")}
                >
                  {l}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
