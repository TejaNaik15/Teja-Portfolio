"use client";
import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "../data/variants";
import { personalInfo, socialLinks } from "../data/data";


const Hero = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <main
      ref={ref}
      className="relative flex flex-col overflow-hidden gap-y-4 pt-24 md:pt-32 items-center min-h-screen mx-auto text-center bg-[linear-gradient(to_bottom,#fff,#ffffff_50%,#e8e8e8_88%)] dark:bg-[linear-gradient(to_bottom,#000,#0000_30%,#898e8e_78%,#ffffff_99%_50%)] rounded-b-xl"
    >
      
      <div className="absolute -z-10 inset-0 opacity-80 h-[600px] w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:6rem_5rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      
      <div className="absolute left-1/2 top-[calc(100%-120px)] lg:top-[calc(100%-180px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%] -translate-x-1/2 rounded-[100%] border-[#B48CDE] bg-white dark:bg-black bg-[radial-gradient(closest-side,#fff_82%,#000000)] dark:bg-[radial-gradient(closest-side,#000_82%,#ffffff)]" />
      
    
      <div className="relative z-10 flex flex-col gap-y-4 items-center text-neutral-900 dark:text-neutral-50">
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeInDown}
        viewport={{ once: true }}
        className="text-xs border border-neutral-300 dark:border-neutral-600 rounded-full px-4 py-1.5 flex justify-center items-center gap-2 relative shine"
      >
        {personalInfo.availability}
      </motion.p>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold leading-12 px-4 sm:leading-18 w-full sm:max-w-2xl md:max-w-[52rem]"
      >
        {personalInfo.tagline}
      </motion.h1>

      <motion.h4
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="md:text-xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 md:max-w-3xl"
      >
        Hey, I'm <span className="animated-text-gradient">Keloth Teja Naik</span>, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.
      </motion.h4>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="flex max-sm:flex-col w-full px-8 justify-center mt-2 gap-4 md:gap-6"
      >
        <motion.a
          className="px-8 flex group items-center justify-center gap-2 py-2 rounded-full border border-neutral-300 dark:border-neutral-600 text-sm md:text-lg cursor-pointer"
          whileHover="hover"
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hover: { scale: 1.05 },
          }}
        >
          <motion.span
            variants={{
              hover: { rotate: [0, 15, -15, 0, 15, 0] },
            }}
            transition={{ duration: 0.5 }}
          >
            👋
          </motion.span>
          Let&apos;s Connect
        </motion.a>

        <motion.a
          whileHover="hover"
          variants={{
            hover: { scale: 1.05 },
          }}
          href={socialLinks.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 flex justify-center items-center gap-2 py-2 rounded-full border border-neutral-300 dark:border-neutral-600 text-sm md:text-lg cursor-pointer"
        >
          My Resume{" "}
          <motion.span
            variants={{
              hover: {
                y: [0, 4, -2, 4, 0],
              },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HiOutlineArrowDown className="md:text-lg" />
          </motion.span>
        </motion.a>
      </motion.div>
      </div>
    </main>
  );
});

Hero.displayName = "Hero";
export default Hero;
