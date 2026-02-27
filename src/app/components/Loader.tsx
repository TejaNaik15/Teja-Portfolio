"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Circles */}
        <div className="relative w-32 h-32">
          {[...Array(8)].map((_, i) => {
            const angle = (i * 360) / 8;
            const delay = i * 0.1;
            return (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                  left: '50%',
                  top: '50%',
                  marginLeft: '-8px',
                  marginTop: '-8px',
                }}
                animate={{
                  x: [0, Math.cos((angle * Math.PI) / 180) * 50, 0],
                  y: [0, Math.sin((angle * Math.PI) / 180) * 50, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Progress Text */}
        <div className="text-center">
          <motion.div
            className="text-6xl font-black animated-text-gradient"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            {progress}%
          </motion.div>
          <motion.p
            className="text-sm text-neutral-600 dark:text-neutral-400 mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Teja's Portfolio
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
}
