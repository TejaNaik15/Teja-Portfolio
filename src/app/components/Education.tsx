"use client";
import React from "react";
import { education } from "../data/data";
import ChromaGrid from "./ChromaGrid";
import { FaSchool, FaFlask, FaLaptopCode } from "react-icons/fa";

const eduIcons = [FaSchool, FaFlask, FaLaptopCode];
const eduGradients = [
  "linear-gradient(145deg, #1a3a5c, #000)",
  "linear-gradient(145deg, #1a4a2e, #000)",
  "linear-gradient(145deg, #3a1a5c, #000)",
];
const eduBorders = ["#3B82F6", "#10B981", "#8B5CF6"];

const Education = () => {
  const items = education.map((edu, i) => ({
    icon: eduIcons[i % eduIcons.length],
    iconColor: eduBorders[i % eduBorders.length],
    title: edu.institution,
    subtitle: edu.degree || edu.level,
    handle: `${edu.duration} · ${edu.location}`,
    borderColor: eduBorders[i % eduBorders.length],
    gradient: eduGradients[i % eduGradients.length],
  }));

  return (
    <div className="pb-6 border-b border-neutral-300 dark:border-neutral-600">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-bold">🎓 Education</h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>
      <div style={{ height: 220 }}>
        <ChromaGrid items={items} columns={3} radius={200} />
      </div>
    </div>
  );
};

export default Education;
