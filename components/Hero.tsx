"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, site } from "@/lib/content";

const WORDS = ["convert.", "connect.", "compel.", "endure."];

function AnimatedTagline() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="text-base md:text-lg max-w-lg leading-relaxed"
      style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
    >
      Building brand stories that{" "}
      <RotatingWord words={WORDS} />
    </motion.p>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  return (
    <span className="inline-block relative overflow-hidden" style={{ minWidth: "6rem" }}>
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="block absolute left-0"
          style={{ color: "var(--gold)", fontStyle: "italic", fontFamily: "var(--font-display)" }}
          initial={{ y: 30, opacity: 0 }}
          animate={{
            y: [30, 0, 0, -30],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            delay: i * 2.5 + 1.5,
            repeat: Infinity,
            repeatDelay: (words.length - 1) * 2.5,
            ease: "easeInOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, var(--gold-pale) 0%, transparent 60%)",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--gold-pale) 0%, transparent 70%)",
          opacity: 0.6,
          transform: "translate(-30%, 30%)",
        }}
      />

      {/* Vertical rule line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-8 md:left-16 top-1/4 bottom-1/4 w-px origin-top"
        style={{ background: "var(--gold)", opacity: 0.3 }}
      />

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-6xl mx-auto px-6 md:px-16 pt-32 pb-20"
      >
        <div className="max-w-3xl">
          {/* Greeting label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Marketing & Brand Strategist
            </span>
          </motion.div>

          {/* Main headline */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="font-light leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
              }}
            >
              Sathvika
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: 120 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
              className="font-light leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                color: "var(--ink)",
                letterSpacing: "-0.02em",
                fontStyle: "italic",
              }}
            >
              Manthena
            </motion.h1>
          </div>

          <AnimatedTagline />

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: "var(--ink)",
                color: "var(--cream)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--ink)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              See My Work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                border: "1px solid var(--ink-light)",
                color: "var(--ink)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--ink-light)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              LinkedIn
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="flex items-center gap-3 mt-16"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border flex items-start justify-center pt-1"
              style={{ borderColor: "var(--ink-light)" }}
            >
              <div className="w-1 h-2 rounded-full" style={{ background: "var(--gold)" }} />
            </motion.div>
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
            >
              Scroll
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
