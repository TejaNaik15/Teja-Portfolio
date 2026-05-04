"use client";
import React from "react";
import { certifications } from "../data/data";
import ChromaGrid from "./ChromaGrid";

const gradients = [
  "linear-gradient(145deg, #1a2a1a, #000)",
  "linear-gradient(165deg, #1a1a3a, #000)",
  "linear-gradient(135deg, #2a1a1a, #000)",
  "linear-gradient(155deg, #1a2a2a, #000)",
  "linear-gradient(175deg, #2a2a1a, #000)",
  "linear-gradient(125deg, #1a1a2a, #000)",
];

const Certifications = () => {
  const items = certifications.map((cert, i) => ({
    icon: cert.icon,
    iconColor: cert.color,
    title: cert.name,
    subtitle: `${cert.issuer} · ${cert.date}`,
    borderColor: cert.color,
    gradient: gradients[i % gradients.length],
    url: cert.certificateUrl,
  }));

  return (
    <div className="pb-4 border-b border-neutral-300 dark:border-neutral-600">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          🏆 Certifications
        </h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>
      <div style={{ height: 380 }}>
        <ChromaGrid items={items} columns={3} radius={220} />
      </div>
    </div>
  );
};

export default Certifications;
