"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1] as const;
const WORDS = ["Teja Naik", "తేజ నాయక్", "तेजा नाइक"];
const DURATION = 2700;

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  const completedRef = useRef(false);
  onCompleteRef.current = onComplete;

  // Word cycling — runs once, stops at last index
  useEffect(() => {
    let count = 0;
    const id = setInterval(() => {
      count++;
      setWordIndex(count);
      if (count >= WORDS.length - 1) clearInterval(id);
    }, 900);
    return () => clearInterval(id);
  }, []);

  // rAF counter — guarded so onComplete fires exactly once
  useEffect(() => {
    let raf: number;
    let start: number | null = null;

    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min(((ts - start) / DURATION) * 100, 100);
      setProgress(p);

      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        if (!completedRef.current) {
          completedRef.current = true;
          setTimeout(() => onCompleteRef.current(), 400);
        }
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      // If unmounted before completion (e.g. HMR), still fire onComplete
      if (!completedRef.current) {
        completedRef.current = true;
        onCompleteRef.current();
      }
    };
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: EASE }}
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        height: "100dvh",
        zIndex: 9999,
        backgroundColor: "#0a0a0a",
        overflow: "hidden",
      }}
    >
      {/* Portfolio label — top left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
        style={{
          position: "absolute",
          top: "clamp(1.25rem, 5vw, 3rem)",
          left: "clamp(1.25rem, 5vw, 3rem)",
          color: "#888888",
        }}
        className="text-xs md:text-sm uppercase tracking-[0.3em]"
      >
        Portfolio
      </motion.div>

      {/* Rotating name — center */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 1rem" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: EASE }}
            style={{
              fontFamily: "var(--font-instrument-serif), 'Instrument Serif', serif",
              color: "rgba(245,245,245,0.8)",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 10vw, 5rem)",
              textAlign: "center",
              display: "block",
              maxWidth: "100%",
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
        style={{
          position: "absolute",
          bottom: "clamp(1.25rem, 5vw, 3rem)",
          right: "clamp(1.25rem, 5vw, 3rem)",
        }}
      >
        <span
          className="tabular-nums"
          style={{
            fontFamily: "var(--font-instrument-serif), 'Instrument Serif', serif",
            color: "#f5f5f5",
            fontWeight: 400,
            fontSize: "clamp(3rem, 15vw, 8rem)",
            lineHeight: 1,
          }}
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
