"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }}>
        {children}
      </div>
    </>
  );
}
