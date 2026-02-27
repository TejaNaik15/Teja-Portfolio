"use client";

import { motion } from "framer-motion";
import VapourText from "./VapourText";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <VapourText text="TEJA NAIK" onComplete={onComplete} />
      </div>
    </motion.div>
  );
}
