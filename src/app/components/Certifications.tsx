"use client";
import React from "react";
import { certifications } from "../data/data";

const certColors = ["#E8E8E8", "#DCDCDC", "#D0D0D0", "#C4C4C4", "#B8B8B8", "#ACACAC"];
const certRotations = ["rotate-2", "-rotate-1", "rotate-3", "-rotate-2", "rotate-1", "-rotate-3"];

const Certifications = () => {
  return (
    <div className="pb-4 border-b border-neutral-300 dark:border-neutral-600">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          🏆 Certifications
        </h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      <div className="relative">
        {certifications.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <div key={i} className="sticky mb-3" style={{ top: `${72 + i * 8}px` }}>
              <a
                href={cert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-2xl p-4 shadow-md transition-transform duration-300 hover:rotate-0 hover:scale-[1.02] hover:shadow-xl ${certRotations[i % certRotations.length]}`}
                style={{ backgroundColor: certColors[i % certColors.length] }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-white/60">
                    <Icon style={{ color: cert.color }} className="text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-neutral-900 font-semibold text-sm leading-tight">{cert.name}</h4>
                    <div className="flex items-center justify-between mt-0.5">
                      <p className="text-neutral-600 text-xs">{cert.issuer}</p>
                      <span className="text-xs text-neutral-500">{cert.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certifications;