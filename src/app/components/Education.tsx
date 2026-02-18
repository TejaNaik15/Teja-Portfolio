import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";
import { AnimatedList } from "./AnimatedList";

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

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Schooling":
        return "#FF6B6B";
      case "Intermediate":
        return "#4ECDC4";
      case "Bachelor of Technology":
        return "#FFD93D";
      default:
        return "#95E1D3";
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
          <div className="relative flex h-auto w-full flex-col overflow-hidden p-2">
            <AnimatedList delay={800}>
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%] bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)]"
                >
                  <div className="flex flex-row items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-2xl"
                      style={{ backgroundColor: getLevelColor(edu.level) }}
                    >
                      <span className="text-2xl">{getLevelIcon(edu.level)}</span>
                    </div>
                    <div className="flex flex-col overflow-hidden flex-1">
                      <div className="flex flex-row items-center text-lg font-medium whitespace-pre dark:text-white">
                        <span className="text-sm sm:text-base font-bold">{edu.institution}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{edu.duration}</span>
                      </div>
                      <p className="text-xs font-semibold text-neutral-600 dark:text-white/80">
                        {edu.level}
                      </p>
                      {edu.degree && (
                        <p className="text-xs font-normal text-neutral-500 dark:text-white/60 mt-1">
                          {edu.degree}
                        </p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">📍 {edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </AnimatedList>
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
