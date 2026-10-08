"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 400, damping: 36, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 400, damping: 36, mass: 0.5 });

  const [label, setLabel] = useState("");
  const [scale, setScale] = useState(1);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("a, button, [data-cursor]");
      if (interactive) {
        const txt = (interactive as HTMLElement).dataset.cursor ?? "View";
        setLabel(txt);
        setScale(2.8);
        setIsLight(!!el.closest("[data-light]"));
      } else {
        setLabel("");
        setScale(1);
        setIsLight(false);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [rawX, rawY]);

  return (
    <motion.div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
        pointerEvents: "none",
      }}
    >
      <motion.div
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: isLight ? "var(--void)" : "var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.3rem",
              color: "var(--void)",
              fontWeight: 700,
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
