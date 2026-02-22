"use client";

import { useEffect, useState } from "react";
import { FiClock, FiMapPin } from "react-icons/fi";

export default function InfoBar() {
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

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <FiClock className="text-blue-500" />
            <span className="font-medium">{time || "Loading..."}</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
            <FiMapPin className="text-blue-500" />
            <span className="font-medium">Hyderabad, India</span>
          </div>
        </div>
      </div>
    </div>
  );
}
