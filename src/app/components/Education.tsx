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
          <div className="h-auto w-full flex flex-wrap items-center justify-center gap-8 py-8">
            {education.map((edu, index) => (
              <PinContainer
                key={index}
                title={edu.institution}
                href="#"
                containerClassName="h-[30rem] w-[20rem]"
              >
                <div className="flex flex-col h-full w-full justify-between p-2 tracking-tight text-neutral-100/50 sm:basis-1/2">
                  {/* Header */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-4xl">{getLevelIcon(edu.level)}</span>
                    </div>
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-neutral-100">
                      {edu.institution}
                    </h3>
                    <p className="text-xs !m-0 !p-0 font-normal text-neutral-400 mb-3">
                      {edu.level}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="text-sm !m-0 !p-0 font-normal">
                    {edu.degree && (
                      <div className="mb-3 p-3 rounded-lg bg-blue-900/40 border border-blue-500/30">
                        <span className="text-blue-300 font-semibold">
                          {edu.degree}
                        </span>
                      </div>
                    )}
                    <div className="space-y-2 text-xs text-neutral-400">
                      <div className="flex items-center gap-2">
                        <span>⏱️</span>
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span>📍</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Gradient accent */}
                  <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 opacity-60" />
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
