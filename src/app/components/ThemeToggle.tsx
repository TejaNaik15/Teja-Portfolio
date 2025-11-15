"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { liVariants, tooltipVariants } from "../data/variants";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="navbar-li w-8 h-8" />
    );
  }

  return (
    <motion.li
      className="navbar-li cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={liVariants}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.span>
        {theme === "dark" ? (
          <FiSun className="text-neutral-900 dark:text-neutral-100 text-lg" />
        ) : (
          <FiMoon className="text-neutral-900 dark:text-neutral-100 text-lg" />
        )}
        <motion.span
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-white text-neutral-900 text-xs rounded-md whitespace-nowrap"
          variants={tooltipVariants}
          transition={{ duration: 0.2 }}
        >
          {theme === "dark" ? 'Light' : 'Dark'}
        </motion.span>
      </motion.span>
    </motion.li>
  );
}