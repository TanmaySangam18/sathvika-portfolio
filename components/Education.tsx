"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { education, certifications } from "@/lib/content";

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

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 md:py-36"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <FadeIn>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              Education & Credentials
            </span>
          </div>
          <h2
            className="font-light leading-tight mb-16"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--ink)",
              letterSpacing: "-0.01em",
            }}
          >
            Built on a{" "}
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>
              strong foundation
            </span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <FadeIn>
              <h3
                className="text-sm tracking-widest uppercase mb-8"
                style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
              >
                Academic
              </h3>
            </FadeIn>
            <div className="flex flex-col gap-6">
              {education.map((edu, i) => (
                <FadeIn key={edu.degree} delay={i * 0.1}>
                  <div
                    className="p-7 rounded-2xl transition-all duration-300"
                    style={{ background: "var(--white)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(184,147,106,0.12)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4
                        className="font-medium text-lg leading-tight"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        {edu.degree}
                      </h4>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full shrink-0"
                        style={{
                          background: edu.status === "In Progress" ? "var(--gold-pale)" : "var(--cream)",
                          color: edu.status === "In Progress" ? "var(--gold)" : "var(--ink-light)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {edu.status}
                      </span>
                    </div>
                    <p
                      className="text-sm font-medium mb-1"
                      style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                    >
                      {edu.specialisation}
                    </p>
                    <p
                      className="text-sm mb-1"
                      style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                    >
                      {edu.institution} · {edu.period}
                    </p>
                    {edu.gpa && (
                      <p
                        className="text-sm mb-3"
                        style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                      >
                        {edu.gpa}
                      </p>
                    )}
                    <p
                      className="text-sm leading-relaxed mt-3"
                      style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                    >
                      {edu.details}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <FadeIn>
              <h3
                className="text-sm tracking-widest uppercase mb-8"
                style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
              >
                Certifications
              </h3>
            </FadeIn>
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <FadeIn key={cert.title} delay={i * 0.07}>
                  <div
                    className="p-5 rounded-xl flex items-start gap-4 transition-all duration-300"
                    style={{ background: "var(--white)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "var(--gold-pale)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--gold)" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4
                        className="font-medium text-base mb-0.5"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        {cert.title}
                      </h4>
                      <p
                        className="text-xs mb-1"
                        style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                      >
                        {cert.issuer} · {cert.date}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                      >
                        {cert.note}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
