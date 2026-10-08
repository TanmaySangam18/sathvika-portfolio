"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(247,244,239,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,147,106,0.15)" : "none",
          transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#hero"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            className="text-xl font-medium tracking-tight hover:opacity-70 transition-opacity"
          >
            SM
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm tracking-wide uppercase transition-colors duration-200"
                  style={{
                    color: "var(--ink-light)",
                    fontFamily: "var(--font-body)",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ink-light)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${site.email}`}
            className="hidden md:inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-full transition-all duration-200"
            style={{
              background: "var(--ink)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
            }}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-transform duration-300"
              style={{
                background: "var(--ink)",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              className="block w-6 h-0.5 transition-opacity duration-300"
              style={{ background: "var(--ink)", opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-transform duration-300"
              style={{
                background: "var(--ink)",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-24 px-8"
            style={{ background: "var(--cream)" }}
          >
            <ul className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-4xl font-light"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--ink)",
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href={`mailto:${site.email}`}
                style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
                className="text-sm tracking-wider uppercase"
              >
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
