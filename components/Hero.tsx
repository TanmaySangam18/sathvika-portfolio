"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

/* Reveal each character individually */
function SplitText({
  text,
  delay = 0,
  className = "",
  style = {},
}: {
  text: string;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={className} style={{ display: "inline-block", ...style }}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ display: "inline-block", overflow: "hidden" }}>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ y: "115%", rotateX: -20 }}
            animate={{ y: "0%", rotateX: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100svh",
        background: "var(--void)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "clamp(1.5rem, 4vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      {/* Noise grain overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
          pointerEvents: "none",
          opacity: 0.6,
        }}
      />

      {/* Top bar */}
      <div style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)" }}
        >
          {site.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block", animation: "blink 2s ease infinite" }} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ash)" }}>
            Available for work
          </span>
        </motion.div>
      </div>

      {/* Center — Name */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Role label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.6 }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "clamp(1.5rem, 4vw, 3rem)",
          }}
        >
          Marketing &amp; Brand Strategist
        </motion.div>

        {/* SATHVIKA */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 14vw, 13rem)",
            fontWeight: 300,
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
            color: "var(--cream)",
          }}
        >
          <SplitText text="SATHVIKA" delay={2.2} />
        </div>

        {/* MANTHENA — italic, gold tint */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4.5rem, 14vw, 13rem)",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-0.03em",
            lineHeight: 0.9,
            color: "var(--gold)",
            marginBottom: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          <SplitText text="MANTHENA" delay={2.4} />
        </div>

        {/* Gold divider line */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "clamp(1.5rem, 3vw, 2.5rem)" }}>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ height: 1, width: "clamp(4rem, 12vw, 10rem)", background: "var(--gold)", transformOrigin: "center" }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.0, duration: 0.8 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.5vw, 1.6rem)",
            fontStyle: "italic",
            color: "var(--ash)",
            letterSpacing: "0.01em",
          }}
        >
          Building brand stories that convert.
        </motion.p>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        style={{ position: "relative", zIndex: 2, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
      >
        {/* Stats */}
        <div style={{ display: "flex", gap: "clamp(1.5rem, 4vw, 3.5rem)" }}>
          {[
            { value: "3", label: "Internships" },
            { value: "50+", label: "Leads" },
            { value: "#1", label: "Cohort Rank" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 300, color: "var(--cream)", lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ash)", marginTop: 4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--ash)", textTransform: "uppercase" }}
          >
            Scroll
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.1 }}
            style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--ash), transparent)" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
