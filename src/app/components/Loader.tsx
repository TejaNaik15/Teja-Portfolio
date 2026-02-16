"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      
      <div className="relative flex flex-col items-center gap-8">
        <AnimatePresence mode="wait">
          {!showName ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black animated-text-gradient px-4">
                {greetings[currentIndex]}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black animated-text-gradient px-4 text-center">
                This is Teja
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
