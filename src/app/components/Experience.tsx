"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { experience } from "../data/data";

const Experience = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="bg-neutral-950 w-full mx-auto pb-4 border-b border-neutral-600"
    >
      <div className=" gap-4 text-sm">
        <h2 className="text-lg font-semibold mb-2">Experience</h2>
        <h3 className=" text-neutral-100 flex justify-between items-center">
          <span className="font-semibold">{experience.companyName}</span>
          <span>{experience.duration}</span>
        </h3>
        <h3 className=" text-neutral-100 flex justify-between items-center">
          <span>{experience.position}</span>
          <span>{experience.location}</span>
        </h3>
      </div>

      <motion.ul
        className="mt-2 space-y-3 text-neutral-100 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {experience.achievements.map((point, index) => (
          <li key={index} className="border-l-3 border-neutral-200 pl-3">
            {point}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Experience;
