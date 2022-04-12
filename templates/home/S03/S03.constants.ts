const TITLE = `Genesis Collection 
Release Date:`;
const SUBTITLE = `April 2022`;

export const ImageAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.45,
        duration: 1.25,
        type: "spring",
        stiffness: 40,
      },
    },
    hidden: { opacity: 0, y: 90 },
  },
};

const wrapperAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.3,
        delayChildren: 0.25,
      },
    },
  },
};

const textAnimation = {
  variants: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  },
};

export { TITLE, SUBTITLE, wrapperAnimation, textAnimation };
