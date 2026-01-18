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
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold mb-2">
          Education
        </h3>
        {education.map((edu, index) => (
          <div key={index} className="flex flex-col space-y-1">
            <p className="text-neutral-900 dark:text-neutral-100 text-sm flex justify-between">
              <span className="font-semibold">{edu.institution}</span>
              <span className="text-neutral-600 dark:text-neutral-400">{edu.duration}</span>
            </p>
            {edu.degree && (
              <p className="text-neutral-700 dark:text-neutral-300 text-xs">
                {edu.degree}
              </p>
            )}
            <p className="text-neutral-600 dark:text-neutral-400 text-xs">
              {edu.location}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
