"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const BuyMeCoffeeButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");
      
      if (aboutSection && projectsSection) {
        const aboutTop = aboutSection.offsetTop;
        const projectsBottom = projectsSection.offsetTop + projectsSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        setIsVisible(scrollPosition >= aboutTop && scrollPosition <= projectsBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50"
    >
      <motion.a
        href="https://buymeacoffee.com/tejanaik15"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-[#2d7eff] via-[#833ab4] via-[#d24977] via-[#ff4242] to-[#ffa82f] text-white font-medium px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl bg-[length:300%_300%] animate-gradient-shift"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">☕</span>
        <span className="hidden sm:inline text-sm font-semibold">Buy Me a Coffee</span>
        <span className="sm:hidden text-sm font-semibold">Coffee</span>
      </motion.a>
    </motion.div>
  );
};

export default BuyMeCoffeeButton;