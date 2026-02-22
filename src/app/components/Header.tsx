"use client";

import React, { RefObject, useEffect, useState } from "react";
import { navbarData } from "../data/data";
import { motion } from "framer-motion";
import { liVariants, tooltipVariants } from "../data/variants";
import { MusicToggle } from "./MusicToggle";
import { smoothScrollTo } from "../utils/smoothScroll";
import { FiClock, FiMapPin } from "react-icons/fi";

interface HeaderProps {
  sectionRefs: Record<string, RefObject<HTMLElement | null>>;
}
const Header: React.FC<HeaderProps> = ({ sectionRefs }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const indianTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(indianTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (
    section: string,
    type: "scroll" | "link",
    url?: string
  ) => {
    if (type === "scroll") {
      smoothScrollTo(sectionRefs[section]?.current);
    } else if (type === "link" && url) {
      window.open(url, "_blank");
    }
  };

  return (
    <nav className="fixed text-sm w-full top-0 pt-4 z-50 bg-gradient-to-b from-white dark:from-neutral-950 via-white/70 dark:via-neutral-950/70 to-transparent">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        {/* Time */}
        <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
          <FiClock className="text-blue-500" />
          <span className="font-medium hidden sm:inline">{time || "--:--:--"}</span>
        </div>

        {/* Navbar */}
        <motion.ul
          initial={{ y: -5, opacity: 0, rotateY: 45 }}
          whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
          className="flex items-center gap-2 md:gap-3 w-fit bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-600 rounded-full px-3 py-1 navbar"
          whileHover={{
            scaleX: 1.01,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 5,
          }}
        >
        {navbarData.map((item, index) => {
          const Icon = item.icon;
          const size = item.size;
          return (
            <div key={index} className="relative">
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
                onClick={() =>
                  handleScroll(item.name.toLowerCase(), item.type, item.url)
                }
              >
                <motion.span>
                  {React.createElement(Icon as any, {
                    className: "text-neutral-900 dark:text-neutral-100 text-lg"
                  })}
                  <motion.span
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2 py-1 bg-neutral-900 dark:bg-white text-neutral-100 dark:text-neutral-900 text-xs rounded-md whitespace-nowrap"
                    variants={tooltipVariants}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                </motion.span>
              </motion.li>
            </div>
          );
        })}

        <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-600 mx-1"></div>
        <MusicToggle />
        </motion.ul>

        {/* Location */}
        <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
          <FiMapPin className="text-blue-500" />
          <span className="font-medium hidden sm:inline">Hyderabad, India</span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
