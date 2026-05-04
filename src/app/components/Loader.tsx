"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1] as const;
const WORDS = ["Teja Naik", "తేజ నాయక్", "तेजा नाइक", "தேஜா நாயக்"];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Rotating words — stop at last word
  useEffect(() => {
    if (wordIndex >= WORDS.length - 1) return;
    const id = setInterval(() => {
      setWordIndex((i) => {
        if (i >= WORDS.length - 1) { clearInterval(id); return i; }
        return i + 1;
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  // Counter via rAF
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const DURATION = 2700;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => onCompleteRef.current(), 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{ position: "fixed", inset: 0, zIndex: 9999, backgroundColor: "#0a0a0a" }}
    >
      {/* Portfolio label — top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{ position: "absolute", top: "clamp(2rem,4vw,3rem)", left: "clamp(2rem,4vw,3rem)", color: "#888888" }}
        className="text-xs md:text-sm uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Rotating name — center */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="text-4xl md:text-6xl lg:text-7xl italic"
            style={{
              fontFamily: "var(--font-instrument-serif), 'Instrument Serif', serif",
              color: "rgba(245,245,245,0.8)",
              fontWeight: 400,
            }}
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Counter — bottom right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{ position: "absolute", bottom: "clamp(2rem,4vw,3rem)", right: "clamp(2rem,4vw,3rem)" }}
      >
        <span
          className="text-6xl md:text-8xl lg:text-9xl tabular-nums"
          style={{ fontFamily: "var(--font-instrument-serif), 'Instrument Serif', serif", color: "#f5f5f5", fontWeight: 400 }}
        >
          {Math.round(progress).toString().padStart(3, "0")}
        </span>
      </motion.div>

      {/* Progress bar — bottom edge */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, backgroundColor: "rgba(31,31,31,0.5)" }}>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.1, ease: "linear" }}
          style={{
            height: "100%",
            transformOrigin: "left",
            background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            boxShadow: "0 0 8px rgba(137,170,204,0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
