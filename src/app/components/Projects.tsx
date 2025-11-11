"use client";
import React, { useEffect, useState } from "react";
import { projects } from "../data/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { fadeInRight, fadeInUp, fadeInUpDelay, fadeInUpLarge } from "../data/variants";

const Projects = React.forwardRef<HTMLElement, unknown>((props, ref) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-white dark:bg-neutral-950 flex flex-col justify-center items-center text-neutral-900 dark:text-neutral-100 py-6 sm:py-16"
    >
      <motion.h4
        variants={fadeInRight}
        initial="initial"
        whileInView="whileInView"
        className="text-[15px] text-center text-neutral-600 dark:text-neutral-300 font-medium"
      >
        EXPLORE MY CREATIONS
      </motion.h4>
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        className="text-3xl animated-text-gradient md:text-5xl font-semibold pt-2 pb-1 mb-6 md:mb-10 text-neutral-900 dark:text-neutral-100"
      >
        Projects
      </motion.h2>

      <motion.div
        variants={fadeInUpLarge}
        initial="hidden"
        whileInView="visible"
        className="px-4 lg:w-4xl "
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project flex max-lg:flex-col max-lg:pb-4 bg-white dark:bg-neutral-950 gap-4 my-4 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition sticky border border-neutral-300 dark:border-neutral-600"
            style={{
              top: `calc(72px + ${index * 30}px)`,
            }}
          >
            <motion.div
              variants={fadeInUpDelay}
              initial="hidden"
              whileInView="visible"
              className="projectinfo flex flex-1 flex-col p-4 md:p-8 h-96"
            >
              <h3 className="text-xl md:text-3xl border-b border-neutral-300 dark:border-neutral-600 pb-2 text-neutral-900 dark:text-neutral-100 font-semibold">
                {project.name}
              </h3>
              <p className="text-neutral-900 dark:text-neutral-100 mt-2">{project.description}</p>
              <ul>
                {project.points.map((listItem, index) => (
                  <li className="text-sm pt-2" key={index}>
                    - {listItem}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1 mt-4">
                {project.techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  const color = tech.color;                  
                  return (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-600"
                    >
                      <Icon style={{ color }} /> {tech.name}
                    </span>
                  );
                })}
              </div>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-300 dark:border-neutral-600 shadow-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-transform duration-6 ease-out hover:scale-105 hover:-translate-y-0.5"
                >
                  GitHub
                  <FaGithub />
                </a>

                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-xl flex justify-center items-center gap-2 text-sm border border-neutral-300 dark:border-neutral-600 shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 hover:text-white transition-transform duration-300 ease-out hover:scale-105 hover:-translate-y-0.5"
                >
                  Live Site
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUpDelay}
              initial="hidden"
              whileInView="visible"
              className="relative flex-1 overflow-visible"
            >
              <motion.div
                className="projectimg lg:absolute lg:top-20 lg:right-[-55%] w-full h-40 sm:h-80 md:h-96 lg:w-[167%] lg:border border-neutral-300 dark:border-neutral-600 rounded-xl lg:h-[22rem] hover:cursor-pointer"
                whileHover={isLargeScreen ? { x: -320, y: -65 } : {}}
                transition={
                  isLargeScreen
                    ? { duration: 0.3, ease: "easeOut", delay: 0.3 }
                    : {}
                }
              >
                <Image
                  src={project.image}
                  fill
                  className="rounded-xl object-contain border"
                  alt={`${project.name} screenshot`}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});
Projects.displayName = "Projects";

export default Projects;
