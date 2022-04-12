export const defaultAnimationProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  transition: { delay: 0.6 },
  variants: {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
    hidden: { opacity: 0, scale: 0.9 },
  },
};
