"use client";
import React, { RefObject } from "react";
import { motion } from "framer-motion";
import { fadeInRight } from "../data/variants";
import { personalInfo, currentYear, contactInfo, footerSocialLinks } from "../data/data";
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

interface FooterProps {
  sectionRefs?: Record<string, RefObject<HTMLElement | null>>;
}

const Footer: React.FC<FooterProps> = ({ sectionRefs }) => {
  const handleScroll = (section: string) => {
    if (sectionRefs && sectionRefs[section]) {
      sectionRefs[section]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-950 border-t border-neutral-300 dark:border-neutral-600 text-neutral-900 dark:text-neutral-100 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("projects")}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                  suppressHydrationWarning
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Social Links</h3>
            <div className="space-y-3">
              <a
                href={footerSocialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
                <span>{footerSocialLinks.linkedin.name}</span>
              </a>
              <a
                href={footerSocialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span>{footerSocialLinks.github.name}</span>
              </a>
              <a
                href={footerSocialLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
                <span>{footerSocialLinks.instagram.name}</span>
              </a>
              <a
                href={footerSocialLinks.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-neutral-600 dark:text-neutral-300 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
                <span>{footerSocialLinks.twitter.name}</span>
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900 dark:text-neutral-100">Contact Info</h3>
            <div className="space-y-2 text-neutral-600 dark:text-neutral-300">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.whatsappNumber}</p>
              <p>{contactInfo.phoneNumber}</p>
              <p>{contactInfo.location}</p>
            </div>
          </div>
        </div>

    
        <div className="mt-8 pt-8 border-t border-neutral-300 dark:border-neutral-600 text-center text-sm text-neutral-500 dark:text-neutral-400">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;