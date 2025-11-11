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
      <div className="flex flex-col">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold mb-2">
          Education
        </h3>
        <p className="text-neutral-900 dark:text-neutral-100 text-sm flex justify-between">
          <span className="font-semibold">{education.institution}</span>{" "}
          <span>{education.duration}</span>
        </p>
        <p className="text-neutral-900 dark:text-neutral-100 text-sm flex justify-between">
          <span>{education.degree}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Education;
