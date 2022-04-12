import { SectionIntroTag, SectionIntroVariant } from "./types";

const SectionIntroProps = {
  tag: { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6" } as {
    [key: string]: SectionIntroTag;
  },
  variant: { lg: "lg", md: "md" } as { [key: string]: SectionIntroVariant },
  isCenter: { true: true, false: false },
  animated: { true: true, false: false },
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
        stiffness: 40
      },
    },
  },
};

export { SectionIntroProps, wrapperAnimation, textAnimation };
