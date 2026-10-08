"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), { ssr: false });

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Cursor />
      <SmoothScroll />
      <Preloader onDone={() => setLoaded(true)} />

      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
          pointerEvents: loaded ? "all" : "none",
        }}
      >
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
