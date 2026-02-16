"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Ciao", lang: "Italian" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Hallo", lang: "German" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "مرحبا", lang: "Arabic" },
];

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    if (currentIndex < greetings.length) {
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 300);
      return () => clearTimeout(timer);
    } else {
      const nameTimer = setTimeout(() => setShowName(true), 200);
      const completeTimer = setTimeout(() => onComplete(), 1200);
      return () => {
        clearTimeout(nameTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(45,126,255,0.1),transparent_50%)]" />
      
      <div className="relative flex flex-col items-center gap-8">
        <AnimatePresence mode="wait">
          {!showName ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {greetings[currentIndex]?.text}
              </div>
              <div className="text-sm md:text-base text-neutral-400 mt-2">
                {greetings[currentIndex]?.lang}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="name"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-center"
            >
              <motion.div
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 200%" }}
              >
                TEJA
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
