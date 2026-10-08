"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/content";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  /* raw mouse position (0–100%) */
  const rawX = useMotionValue(50);
  /* spring-damped version */
  const splitX = useSpring(rawX, { stiffness: 110, damping: 22, mass: 0.9 });

  /* Derive clip-path strings and left position from the same spring */
  const leftClip = useTransform(
    splitX,
    (pct) => `inset(0 ${100 - pct}% 0 0)`
  );
  const rightClip = useTransform(
    splitX,
    (pct) => `inset(0 0 0 ${pct}%)`
  );
  const dividerLeft = useTransform(splitX, (pct) => `${pct}%`);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    rawX.set(Math.max(18, Math.min(82, pct)));
  };

  const handleMouseLeave = () => rawX.set(50);

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        height: "100svh",
        minHeight: 600,
        overflow: "hidden",
        cursor: "none",
      }}
    >
      {/* ── LEFT PANEL — Strategist (dark) ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: leftClip,
          background: "var(--side-a)",
          willChange: "clip-path",
        }}
        className="flex flex-col justify-between p-10 md:p-16 pointer-events-none"
      >
        {/* Subtle column grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "12.5% 100%",
          }}
        />
        <div className="relative z-10">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.25rem",
              color: "rgba(245,242,238,0.3)",
            }}
          >
            SM
          </span>
        </div>
        <div className="relative z-10">
          <p
            className="mb-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
          >
            Strategy &amp; Campaigns
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              color: "var(--cream)",
              letterSpacing: "-0.025em",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Strategist
          </h2>
          <p
            className="mt-5 text-sm leading-relaxed"
            style={{
              color: "rgba(245,242,238,0.4)",
              fontFamily: "var(--font-body)",
              maxWidth: "22rem",
            }}
          >
            Data-driven campaigns, audience segmentation, and brand architecture that converts.
          </p>
        </div>
        <div />
      </motion.div>

      {/* ── RIGHT PANEL — Creator (light) ── */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: rightClip,
          background: "var(--cream)",
          willChange: "clip-path",
        }}
        className="flex flex-col justify-between p-10 md:p-16 pointer-events-none"
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, var(--cream-dark) 1.5px, transparent 1.5px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        <div className="relative z-10 flex justify-end">
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--ink-light)",
            }}
          >
            {site.location}
          </span>
        </div>
        <div
          className="relative z-10"
          style={{ marginLeft: "auto", maxWidth: "28rem" }}
        >
          <p
            className="mb-4 text-xs tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
          >
            Brand &amp; Visual Story
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 6vw, 6rem)",
              color: "var(--ink)",
              letterSpacing: "-0.025em",
              fontWeight: 300,
              lineHeight: 1,
              fontStyle: "italic",
            }}
          >
            Creator.
          </h2>
          <p
            className="mt-5 text-sm leading-relaxed"
            style={{
              color: "var(--ink-light)",
              fontFamily: "var(--font-body)",
              maxWidth: "22rem",
            }}
          >
            Visual storytelling, content direction, and brand identity that connects on a human level.
          </p>
        </div>
        <div />
      </motion.div>

      {/* ── VERTICAL DIVIDER + cursor dot ── */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: dividerLeft,
          x: "-50%",
          width: 1,
          background: "rgba(200,168,130,0.4)",
          willChange: "left",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: dividerLeft,
          x: "-50%",
          y: "-50%",
          width: 56,
          height: 56,
          borderRadius: "50%",
          background: "var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "left",
          zIndex: 10,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" />
        </svg>
      </motion.div>

      {/* ── Name + scroll CTA ── */}
      <motion.div
        className="absolute left-0 right-0 flex flex-col items-center gap-2 z-20"
        style={{ bottom: "2.5rem", pointerEvents: "none" }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
            letterSpacing: "0.22em",
            fontWeight: 300,
            background:
              "linear-gradient(90deg, var(--cream) 0%, var(--gold) 50%, var(--ink) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          SATHVIKA MANTHENA
        </span>
        <a
          href="#about"
          style={{
            color: "rgba(200,168,130,0.75)",
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            pointerEvents: "all",
          }}
        >
          Scroll to explore ↓
        </a>
      </motion.div>

      {/* ── Hire Me — interactive, above panels ── */}
      <div
        className="absolute z-30"
        style={{ top: "2.5rem", right: "2.5rem", pointerEvents: "all" }}
      >
        <a
          href={`mailto:${site.email}`}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
            background: "rgba(200,168,130,0.12)",
            border: "1px solid rgba(200,168,130,0.3)",
            padding: "0.5rem 1.1rem",
            borderRadius: "99px",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLElement).style.color = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(200,168,130,0.12)";
            (e.currentTarget as HTMLElement).style.color = "var(--gold)";
          }}
        >
          Hire Me
        </a>
      </div>

      {/* ── MOBILE override — stacked layout ── */}
      <style>{`
        @media (hover: none), (max-width: 767px) {
          #hero { cursor: default !important; }
        }
      `}</style>
    </section>
  );
}
