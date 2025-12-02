

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaPython } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiSocketdotio,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
  FaFigma,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
  SiPostman,
  SiVercel,
  SiJavascript,
  SiOpenai
} from "react-icons/si";
import { TbFileSpreadsheet, TbChartBar } from "react-icons/tb";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";


export const personalInfo = {
  
  name: "Keloth Teja Naik", 
  title: "Full Stack Developer", 
  tagline: "Crafting Dynamic Web Experiences With Motion & Meaning",
  description:
    "Hey, I'm Keloth Teja Naik, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.", 

  
  profileImage: "/img/profilepic.webp",
  profileImageAlt: "Teja Naik Profile Picture", 
  summary:
    "I'm a passionate Full-Stack Developer who enjoys building and exploring new technologies. Always learning and creating innovative solutions.", 
  age: 22,
  location: "Hyderabad, India", 

  
  availability: "Actively Seeking Job Opportunities",
  experience: "0 years of experience", 

  
  keywords: [
    "Keloth Teja Naik", 
    "Full Stack Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "TypeScript",
    "JavaScript",
  ],
};


export const siteConfig = {
  
  siteUrl: "https://teja-portfolio-yrei.vercel.app/", 
  siteName: "Keloth Teja Naik Portfolio", 

  
  seoDescription:
    "Building scalable and performant web applications with modern technologies.",

  
  previewImage: "/img/preview.png",
};


export const contactInfo = {
  email: "tinkuteja740@gmail.com", 
  whatsappNumber: "8106873661", 
  phoneNumber: "7569474682", 
  location: "Hyderabad, India", 
  whatsappMessage: "Hi! I'm interested in working with you. Can we chat?", 

  
  web3formsAccessKey: "YOUR_ACCESS_KEY", 
};


export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/teja-naik-0b3021282/", 
  github: "https://github.com/TejaNaik15", 
  resumeLink: "https://drive.google.com/file/d/YOUR_RESUME_ID/view", 
};


export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "#C9D1D9" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redux Toolkit", icon: SiRedux, color: "#764ABC" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "C++", icon: FaCuttlefish, color: "#00599C" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Excel", icon: TbFileSpreadsheet, color: "#217346" },
  { name: "Power BI", icon: TbChartBar, color: "#F2C811" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
];


type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};

export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: socialLinks.linkedin,
    size: "18px",
  },
  {
    name: "GitHub",
    type: "link",
    icon: FaGithub,
    url: socialLinks.github,
    size: "18px",
  },

];


export const projects = [
  {
    name: "AI-Content Generator",
    description: "AI-Content Generator is a powerful content generation platform that allows users to create high-quality articles, blogs, and social media posts.",
    points: [
      "Generates AI blog posts with adjustable tone and category.",
      "Lets users sign in and use credits for content generation.",
      "Offers fully responsive, mobile-optimized UI.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
    liveLink: "https://ai-content-generator-woad-nine.vercel.app/",
    githubLink: "https://github.com/TejaNaik15/AI-Content-Generator",
    image: "/img/ai-content.png", 
  },
  {
    name: "AI-Developer Assistant",
    description: "AI-Developer Assistant is an innovative tool designed to help developers streamline their coding process by providing intelligent code suggestions, debugging assistance, and project management features.",
    points: [
      "Secure user login and private chat history via Firebase.",
      "Real-time AI coding chat powered by Google Gemini.",
      " Responsive design for seamless use on all devices.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  
    
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28"  },
    ],
    liveLink: "https://code-mentor-ai-neir.vercel.app/",
    githubLink: "https://github.com/TejaNaik15/CodeMentorAI",
    image: "/img/ai-assistant.png", 
  },
  {
    name: "AI-Resume Analyzer",
    description: "AI-Resume Analyzer  that leverages artificial intelligence to evaluate and enhance resumes, providing users with personalized feedbacks.",
    points: [
      "Upload and store resumes seamlessly on Puter Cloud.",
      " AI-driven resume analysis and improvement suggestions.",
      " Intuitive UI for easy navigation and use.",
    ],
    techStack: [
      { name: "React router", icon: FaReact, color: "#61DAFB" },
      { name: "puter.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "typeScript", icon: SiTypescript, color: "#3178C6" },
      
    ],
    liveLink: "https://resume-analyzer-ai-two.vercel.app/",
    githubLink: "https://github.com/TejaNaik15/resume-analyzer-ai",
    image: "/img/airesume.png", 
  },
  {
    name: "CodeInsights AI",
    description: "CodeInsights AI that uses advanced AI  to analyze and optimize code, providing valuable insights and suggestions for code quality, performance.",
    points: [
      "Analyze code snippets for improvements.",
      " Get AI-generated suggestions.",
      " Clean, user-friendly interface.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "#C9D1D9" },
    ],
    liveLink: "#",
    githubLink: "#",
    image: "/img/code.png", 
  },
];


export const education = {
  institution: "CMR Institute of Technology",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  
  duration: "2021 - 2025",
  location: "Hyderabad,   India",
};


export const experience = {
  companyName: "Fresher",
  position: "Full Stack Developer",
  duration: "Currently Seeking Opportunities",
  location: "Hyderabad, India",
  achievements: [
    "Passionate about building modern web applications with cutting-edge technologies.",
    "Actively learning and exploring new frameworks and tools.",
    "Building personal projects to showcase technical skills."
  ]
};


export const certifications = [
  {
    name: "Data Structures and Algorithms in JavaScript",
    issuer: "GeeksForGeeks",
    date: "2025",
    credentialId: "GFG-DSA-JS-2025",
    icon: SiJavascript,
    color: "#F7DF1E",
    certificateUrl: "https://drive.google.com/file/d/1yn6eXkYdlIzdYvRaM6rl20XW1ek8NRP8/view?usp=sharing"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UDEMY-FULLSTACK-2025",
    icon: FaReact,
    color: "#61DAFB",
    certificateUrl: "https://drive.google.com/file/d/1X2NX3sGv2ks7W9zKqxUNXAx_nT37aHQC/view?usp=sharing"
  },
  {
    name: "C++ Certification",
    issuer: "GeeksForGeeks",
    date: "2024",
    credentialId: "GFG-CPP-2024",
    icon: FaCuttlefish,
    color: "#00599C",
    certificateUrl: "https://drive.google.com/file/d/1uMmbPIfIujG0CA_GkEQcqr8Ko-0u8f8a/view?usp=sharing"
  },
  {
    name: "next.js Certification",
    issuer: "GeeksForGeeks",
    date: "2025",
    credentialId: "GFG-NEXTJS-2025",
    icon: SiNextdotjs,
    color: "#ffffff",
    certificateUrl: "https://drive.google.com/file/d/1rS0y9dHkNdZcHwdlMgcRjkDDgzN0lmqs/view?usp=sharing"
  },
  {
    name: "python for data science",
    issuer: "IBM",
    date: "2025",
    credentialId: "IBM-PY-DS-2025",
    icon: FaPython,
    color: "#3776AB",
    certificateUrl: "https://drive.google.com/file/d/1dn7JK7JbSb2n3fJsmm26UstyBvPsSp5H/view?usp=sharing"
  },
  {
    name: "Generative AI and ChatGPT",
    issuer: "GeeksForGeeks",
    date: "2025",
    credentialId: "OPENAI-GENAI-2025",
    icon: SiOpenai,
    color: "#10A37F",
    certificateUrl: "https://drive.google.com/file/d/1Ea_bOV-A_oSQe1zgv_zLFPjpl3cR23oA/view?usp=sharing"
  }
];


export const currentYear = new Date().getFullYear();


export const footerSocialLinks = {
  linkedin: { url: "https://www.linkedin.com/in/teja-naik-0b3021282/", name: "LinkedIn" },
  github: { url: "https://github.com/TejaNaik15", name: "GitHub" },
  instagram: { url: "https://www.instagram.com/eren_yeager9_", name: "Instagram" },
  twitter: { url: "https://x.com/TEJA_NAIKK", name: "Twitter" }
};
