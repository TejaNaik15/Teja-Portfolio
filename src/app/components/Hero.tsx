"use client";
import React from "react";
import { HiOutlineArrowDown } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeInDown, fadeInUp } from "../data/variants";
import { personalInfo, socialLinks } from "../data/data";
import { LiquidButton } from "../ui/liquid-glass-button";


const Hero = React.forwardRef<HTMLElement, unknown>((_, ref) => {
  return (
    <main
      ref={ref}
      className="relative flex flex-col gap-y-4 pt-24 md:pt-32 items-center min-h-screen w-full text-center rounded-b-xl"
    >
      {/* Fullscreen looping background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
      />

      {/* 50% black overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[1]" />

      {/* Bottom fade to blend with next section */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent z-[2]" />

      <div className="relative z-[3] flex flex-col gap-y-4 items-center text-white">
      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={fadeInDown}
        viewport={{ once: true }}
        className="text-xs border border-white/30 text-white/80 rounded-full px-4 py-1.5 flex justify-center items-center gap-2 relative shine"
      >
        {personalInfo.availability}
      </motion.p>

      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold px-4 w-full sm:max-w-2xl md:max-w-[52rem]"
        style={{
          background: "linear-gradient(144.5deg, #ffffff 28%, rgba(0,0,0,0) 115%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1.28,
        }}
      >
        {personalInfo.tagline}
      </motion.h1>

      <motion.h4
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.2 }}
        className="md:text-xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 md:max-w-3xl text-white/70"
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
        <LiquidButton
          className="text-sm md:text-base"
          onClick={() => window.open(socialLinks.linkedin, "_blank", "noopener,noreferrer")}
        >
          Let&apos;s Connect
        </LiquidButton>

        <LiquidButton
          className="text-sm md:text-base"
          onClick={() => window.open(socialLinks.resumeLink, "_blank", "noopener,noreferrer")}
        >
          <span className="inline-flex items-center gap-2">My Resume <HiOutlineArrowDown /></span>
        </LiquidButton>
      </motion.div>
      </div>
    </main>
  );
});

Hero.displayName = "Hero";
export default Hero;
