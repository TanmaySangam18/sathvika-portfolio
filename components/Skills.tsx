"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, achievements } from "@/lib/content";

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

function SkillGroup({ title, items, delay = 0 }: { title: string; items: string[]; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <div>
        <h3
          className="text-xs tracking-widest uppercase mb-5"
          style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
        >
          {title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="text-sm px-4 py-2 rounded-full cursor-default transition-colors duration-200"
              style={{
                background: "var(--white)",
                color: "var(--ink)",
                border: "1px solid var(--cream-dark)",
                fontFamily: "var(--font-body)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--gold-pale)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-light)";
                (e.currentTarget as HTMLElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--white)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--cream-dark)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-36"
      style={{ background: "var(--white)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Skills */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                >
                  Skills
                </span>
              </div>
              <h2
                className="font-light leading-tight mb-12"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                What I{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>bring</span>
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-10">
              <SkillGroup title="Marketing" items={skills.marketing} delay={0.1} />
              <SkillGroup title="Tools & Platforms" items={skills.tools} delay={0.2} />
              <SkillGroup title="Competencies" items={skills.soft} delay={0.3} />
            </div>
          </div>

          {/* Achievements */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                >
                  Achievements
                </span>
              </div>
              <h2
                className="font-light leading-tight mb-12"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--ink)",
                  letterSpacing: "-0.01em",
                }}
              >
                Recognition &{" "}
                <span style={{ fontStyle: "italic", color: "var(--gold)" }}>honours</span>
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-4">
              {achievements.map((item, i) => (
                <FadeIn key={item.title} delay={0.1 + i * 0.08}>
                  <div
                    className="p-6 rounded-2xl flex items-start gap-4 transition-all duration-300"
                    style={{ background: "var(--cream)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    }}
                  >
                    <div
                      className="text-2xl font-light leading-none shrink-0"
                      style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4
                        className="font-medium text-base mb-0.5"
                        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "var(--ink-light)", fontFamily: "var(--font-body)" }}
                      >
                        {item.context}
                        {item.year ? ` · ${item.year}` : ""}
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
