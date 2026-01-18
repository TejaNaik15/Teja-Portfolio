import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { education } from "../data/data";

const Education = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="pb-4 border-b border-neutral-300 dark:border-neutral-600"
    >
      <div className="flex flex-col space-y-4">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold">
          🎓 Education
        </h3>
        {Array.isArray(education) && education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="flex flex-col space-y-1 pl-2 border-l-2 border-neutral-400 dark:border-neutral-600">
              <p className="text-neutral-900 dark:text-neutral-100 text-sm font-semibold">
                {edu.institution}
              </p>
              {edu.degree && (
                <p className="text-neutral-700 dark:text-neutral-300 text-xs">
                  {edu.degree}
                </p>
              )}
              <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                {edu.duration}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs">
                📍 {edu.location}
              </p>
            </div>
          ))
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">No education data available</p>
        )}
      </div>
    </motion.div>
  );
};

export default Education;
