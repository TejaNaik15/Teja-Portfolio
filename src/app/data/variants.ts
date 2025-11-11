export const headerVariants = {
  initial: { y: -5, opacity: 0, rotateY: 45 },
  whileInView: {
    y: 0,
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.5 },
  },
  whileHover: {
    scaleX: 1.01,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

export const liVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.09 },
};

export const tooltipVariants = {
  rest: { opacity: 0, y: -5, display: "none" },
  hover: { opacity: 1, y: 0, display: "block" },
};

export const fadeInRight = {
  initial: { clipPath: "inset(0% 100% 0% 0%)", opacity: 0 },
  whileInView: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeInUpLarge = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const fadeInUpRight = {
  hidden: { opacity: 0, y: 30, x: -30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const fadeInUpLeft = {
  hidden: { opacity: 0, y: 30, x: 30 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export const fadeInUpDelay = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

export const rotateYVariant = {
  initial: { opacity: 0, rotateY: 45 },
  whileInView: {
    opacity: 1,
    rotateY: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
};