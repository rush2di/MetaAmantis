const INTRO_SUBTITLE = "Companionship with no strings attached";

const INTRO_TITLE = "Immerse Yourself in the Metaverse of Virtual Amantis";

const INTRO_TEXT =
  "Virtual Amantis are much more than just bots - they're your perfect companions that'll never judge or shame you, that will listen to you when you need them most.";

const BUTTON_WHITEPAPER_HREF = "#whitepaper";

const BUTTON_TOKONOMICS_HREF = "#tokonomics";

const buttonsWrapperAnimation = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.85,
        staggerChildren: 0.3,
        delayChildren: 0.95,
      },
    },
  },
};

const buttonAnimation = {
  variants: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  },
};

export {
  INTRO_SUBTITLE,
  INTRO_TITLE,
  INTRO_TEXT,
  BUTTON_WHITEPAPER_HREF,
  BUTTON_TOKONOMICS_HREF,
  buttonsWrapperAnimation,
  buttonAnimation,
};
