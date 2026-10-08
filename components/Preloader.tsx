"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("hold"), 600);
    const t2 = setTimeout(() => setPhase("out"), 1600);
    const t3 = setTimeout(() => onDone(), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "out" ? (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--void)",
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Initials */}
          <div style={{ overflow: "hidden" }}>
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: phase === "hold" ? 0 : "110%" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(4rem, 12vw, 9rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1,
                color: "var(--cream)",
              }}
            >
              SM
            </motion.div>
          </div>

          {/* Gold underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase === "hold" ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 1,
              width: "4rem",
              background: "var(--gold)",
              transformOrigin: "left",
            }}
          />

          {/* Counter line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === "hold" ? 1 : 0 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--ash)",
            }}
          >
            Sathvika Manthena
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
