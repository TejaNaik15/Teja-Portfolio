import React from "react";
import { motion } from "framer-motion";
import { fadeInUpLeft } from "../data/variants";
import { certifications } from "../data/data";

const Certifications = () => {
  return (
    <motion.div
      variants={fadeInUpLeft}
      initial="hidden"
      whileInView="visible"
      className="pb-4 border-b border-neutral-300 dark:border-neutral-600"
    >
      <div className="flex flex-col">
        <h3 className="text-lg text-neutral-900 dark:text-neutral-100 font-semibold mb-4">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-lg p-3 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <Icon style={{ color: cert.color }} className="text-xl" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-neutral-900 dark:text-neutral-100 font-medium text-sm leading-tight mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs mb-1">
                      {cert.issuer}
                    </p>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Certifications;