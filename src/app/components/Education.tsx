import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";

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
      <div className="flex flex-col space-y-5">
        <div className="flex items-center gap-2">
          <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-bold">
            🎓 Education
          </h3>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        {Array.isArray(education) && education.length > 0 ? (
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800 p-4 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/30"
              >
                {/* Background accent */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-400 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Header with icon and level */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getLevelIcon(edu.level)}</span>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                          {edu.level}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 text-sm font-bold mt-1">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-200 dark:bg-neutral-700 px-3 py-1 rounded-full whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>

                  {/* Degree if exists */}
                  {edu.degree && (
                    <div className="ml-11 mb-2">
                      <p className="text-neutral-700 dark:text-neutral-300 text-xs font-semibold bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded w-fit">
                        {edu.degree}
                      </p>
                    </div>
                  )}

                  {/* Location */}
                  <div className="ml-11 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 text-xs">
                    <span>📍</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </motion.div>
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
