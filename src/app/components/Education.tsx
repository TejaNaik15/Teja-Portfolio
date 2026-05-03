"use client";
import React from "react";
import { education } from "../data/data";

const colors = ["#E8E8E8", "#D0D0D0", "#B8B8B8"];
const rotations = ["rotate-2", "rotate-0", "-rotate-2"];

const Education = () => {
  return (
    <div className="pb-6 border-b border-neutral-300 dark:border-neutral-600">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-bold">🎓 Education</h3>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent" />
      </div>

      <div className="relative">
        {education.map((edu, i) => (
          <div key={i} className="sticky top-20 mb-4">
            <article
              className={`${rotations[i % rotations.length]} rounded-2xl p-5 shadow-lg transition-transform duration-300 hover:rotate-0`}
              style={{ backgroundColor: colors[i % colors.length] }}
            >
              <h4 className="text-base font-bold text-neutral-900 mb-1">{edu.institution}</h4>
              <p className="text-xs font-semibold text-neutral-600 mb-1">{edu.level}</p>
              {edu.degree && <p className="text-xs text-neutral-700 mb-2">{edu.degree}</p>}
              <div className="flex items-center justify-between text-xs text-neutral-500">
                <span>📍 {edu.location}</span>
                <span>{edu.duration}</span>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
