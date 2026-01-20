import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";
import { PinContainer } from "../ui/3d-pin";

const Education = () => {
  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Schooling":
        return "🎒";
      case "Intermediate":
        return "📚";
      case "Bachelor of Technology":
        return "🎓";
      default:
        return "📖";
    }
  };

  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="pb-6 border-b border-neutral-300 dark:border-neutral-600"
    >
      <div className="flex flex-col space-y-8">
        <div className="flex items-center gap-2">
          <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-bold">
            🎓 Education
          </h3>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        {Array.isArray(education) && education.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <PinContainer
                key={index}
                title={edu.institution}
                href="#"
                containerClassName="w-full"
              >
                <div className="flex flex-col h-full w-full space-y-3">
                  {/* Icon and Level */}
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{getLevelIcon(edu.level)}</span>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest">
                        {edu.level}
                      </p>
                    </div>
                  </div>

                  {/* Institution Name */}
                  <div>
                    <p className="text-sm font-bold text-neutral-100 leading-tight">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Degree */}
                  {edu.degree && (
                    <div className="py-2 px-3 rounded-lg bg-blue-900/30 border border-blue-500/30">
                      <p className="text-xs font-semibold text-blue-300">
                        {edu.degree}
                      </p>
                    </div>
                  )}

                  {/* Duration and Location */}
                  <div className="pt-2 space-y-2 border-t border-neutral-700">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span>⏱️</span>
                      <span className="font-medium">{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span>📍</span>
                      <span className="font-medium">{edu.location}</span>
                    </div>
                  </div>
                </div>
              </PinContainer>
            ))}
          </div>
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            No education data available
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Education;
