import { motion } from "framer-motion";
import { fadeInUpRight } from "../data/variants";
import Image from "next/image";
import { personalInfo } from "../data/data";
import { GrLocation } from "react-icons/gr";

const PersonalInfo = () => {
  return (
    <motion.div className="lg:w-1/3 lg:max-w-3xl text-center flex flex-col items-center gap-3 pt-6 lg:px-6">
      <motion.div
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.profileImageAlt}
          width={170}
          height={170}
        />
      </motion.div>
      <motion.p
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-600 pb-2"
      >
        {personalInfo.summary}
      </motion.p>
      <motion.div
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        className="text-neutral-600 dark:text-neutral-300 text-sm"
      >
        Age: {personalInfo.age}
      </motion.div>
      <motion.div
        variants={fadeInUpRight}
        initial="hidden"
        whileInView="visible"
        className="hidden lg:flex items-center gap-2 text-neutral-900 dark:text-neutral-100 "
      >
        <GrLocation className="text-neutral-900 dark:text-neutral-100" />
        <span>{personalInfo.location}</span>
      </motion.div>
    </motion.div>
  );
};

export default PersonalInfo;
