"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

/* Cursor-tracking split effect */
function SplitHero() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5); // 0–1 across container

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    animate(mouseX, 0.5, { duration: 0.6, ease: [0.22, 1, 0.36, 1] });
  };

  const leftWidth = useTransform(
    mouseX,
    [0, 0.5, 1],
    ["65%", "50%", "35%"]
  );
  const rightWidth = useTransform(
    mouseX,
    [0, 0.5, 1],
    ["35%", "50%", "65%"]
  );

  return (
    <div
      ref={containerRef}
      className="flex h-screen relative overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT — Strategist (dark) */}
      <motion.div
        style={{ width: leftWidth }}
        className="relative flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        onMouseEnter={() => setHovered("left")}
      >
        {/* Background */}
        <div className="absolute inset-0" style={{ background: "var(--side-a)" }} />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px"
              style={{ left: `${(i + 1) * 16.66}%`, background: "var(--cream)" }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Nav brand */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm tracking-widest uppercase"
            style={{ color: "rgba(245,242,238,0.4)", fontFamily: "var(--font-body)" }}
          >
            SM
          </motion.span>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Strategy &amp; Campaigns
            </div>
            <h2
              className="font-light leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--cream)",
                letterSpacing: "-0.02em",
              }}
            >
              Strategist
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "rgba(245,242,238,0.5)", fontFamily: "var(--font-body)" }}
            >
              Data-driven campaigns, audience segmentation, and brand architecture that converts.
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: hovered === "left" ? "3rem" : "1.5rem" }}
            transition={{ duration: 0.4 }}
            className="h-px"
            style={{ background: "var(--gold)" }}
          />
        </div>

        <div className="relative z-10" />
      </motion.div>

      {/* Divider line + cursor dot */}
      <div className="absolute inset-y-0 z-30 flex items-center pointer-events-none"
        style={{ left: "50%", transform: "translateX(-50%)" }}>
        <motion.div
          className="w-px bg-white opacity-20 h-full" />
        <motion.div
          className="absolute w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            background: "var(--gold)",
            left: "50%",
            transform: "translateX(-50%)",
            top: "50%",
            marginTop: "-1.5rem",
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="white">
            <path d="M8 4l-6 6 6 6M12 4l6 6-6 6" strokeWidth="0" />
            <path d="M6.5 10h7M3 10l3.5-3.5M3 10l3.5 3.5M17 10l-3.5-3.5M17 10l-3.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </div>

      {/* RIGHT — Creator (light) */}
      <motion.div
        style={{ width: rightWidth }}
        className="relative flex flex-col justify-between p-8 md:p-14 select-none overflow-hidden"
        onMouseEnter={() => setHovered("right")}
      >
        <div className="absolute inset-0" style={{ background: "var(--cream)" }} />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, var(--cream-dark) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 flex justify-end">
          <motion.a
            href={`mailto:${site.email}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-sm tracking-widest uppercase transition-colors duration-200"
            style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-light)")}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="mb-3 text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Brand &amp; Visual Story
            </div>
            <h2
              className="font-light leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                fontStyle: "italic",
              }}
            >
              Creator.
            </h2>
            <p
              className="mt-4 text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
            >
              Visual storytelling, content direction, and brand identity that connects on a human level.
            </p>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: hovered === "right" ? "3rem" : "1.5rem" }}
            transition={{ duration: 0.4 }}
            className="h-px"
            style={{ background: "var(--gold)" }}
          />
        </div>

        <div className="relative z-10" />
      </motion.div>

      {/* Full-name overlay at bottom */}
      <motion.div
        className="absolute bottom-8 md:bottom-14 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
      >
        <div className="text-center">
          <div
            className="font-light"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
              letterSpacing: "0.15em",
              color: "transparent",
              background: "linear-gradient(90deg, var(--cream) 0%, var(--ink) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            SATHVIKA MANTHENA
          </div>
          <div className="flex justify-center gap-6 mt-3">
            <a
              href="#about"
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "rgba(245,242,238,0.5)", fontFamily: "var(--font-body)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,238,0.5)")}
            >
              See My Work ↓
            </a>
          </div>
        </div>
      </motion.div>

      {/* Mobile fallback */}
      <style>{`
        @media (max-width: 768px) {
          .split-hero-container { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}

/* Mobile hero — stacked */
function MobileHero() {
  return (
    <div className="min-h-screen flex flex-col md:hidden">
      <div className="flex-1 flex flex-col justify-center px-8 py-16" style={{ background: "var(--side-a)" }}>
        <div className="mb-2 text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          Strategy &amp; Campaigns
        </div>
        <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "var(--cream)", letterSpacing: "-0.02em" }}>
          Strategist
        </h2>
      </div>
      <div className="flex-1 flex flex-col justify-center px-8 py-16" style={{ background: "var(--cream)" }}>
        <div className="mb-2 text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          Brand &amp; Visual Story
        </div>
        <h2 className="font-light" style={{ fontFamily: "var(--font-display)", fontSize: "3.5rem", color: "var(--ink)", letterSpacing: "-0.02em", fontStyle: "italic" }}>
          Creator.
        </h2>
        <p className="mt-4 text-sm" style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}>Sathvika Manthena — Marketing &amp; Brand Strategist</p>
        <a href="#about" className="mt-6 inline-block text-xs tracking-widest uppercase" style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}>
          See My Work ↓
        </a>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero">
      <div className="hidden md:block">
        <SplitHero />
      </div>
      <MobileHero />
    </section>
  );
}
