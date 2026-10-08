"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { interests } from "@/lib/content";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const icons: Record<string, React.ReactNode> = {
  camera: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  eye: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  globe: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
};

export default function Interests() {
  return (
    <section
      className="py-24 md:py-36 relative overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 70% 50%, rgba(184,147,106,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Beyond the Brief
            </span>
          </div>
          <h2
            className="font-light leading-tight mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--white)",
              letterSpacing: "-0.01em",
            }}
          >
            The person{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
              behind the strategy
            </span>
          </h2>
          <p
            className="text-base max-w-xl mb-16 leading-relaxed"
            style={{ color: "rgba(247,244,239,0.6)", fontFamily: "var(--font-body)" }}
          >
            {interests.description}
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.items.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <div
                className="group p-8 rounded-2xl h-full flex flex-col gap-5 transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(247,244,239,0.05)",
                  border: "1px solid rgba(184,147,106,0.2)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(184,147,106,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,147,106,0.4)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(247,244,239,0.05)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(184,147,106,0.2)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(184,147,106,0.15)", color: "var(--gold)" }}
                >
                  {icons[item.icon]}
                </div>
                <div>
                  <h3
                    className="font-medium text-xl mb-3"
                    style={{ fontFamily: "var(--font-display)", color: "var(--white)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(247,244,239,0.6)", fontFamily: "var(--font-body)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
