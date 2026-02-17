"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const greetings = [
  "Hola",
  "Bonjour",
  "Ciao",
  "Olá",
  "Hallo",
  "こんにちは",
  "안녕하세요",
  "नमस्ते",
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { 
          scale: 0.5, 
          opacity: 0,
          rotationX: -90,
          y: 50
        },
        { 
          scale: 1, 
          opacity: 1,
          rotationX: 0,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [currentIndex, showName]);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const nameTimer = setTimeout(() => setShowName(true), 200);
      const completeTimer = setTimeout(() => onComplete(), 1500);
      return () => {
        clearTimeout(nameTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-black"
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100dvh'
      }}
    >
      <div className="flex items-center justify-center w-full h-full">
        {!showName ? (
          <div
            ref={textRef}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black animated-text-gradient px-4 text-center"
          >
            {greetings[currentIndex]}
          </div>
        ) : (
          <div
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black animated-text-gradient px-4 text-center"
          >
            This is Teja
          </div>
        )}
      </div>
    </motion.div>
  );
}
