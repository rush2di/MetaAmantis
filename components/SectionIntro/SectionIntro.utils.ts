import { SectionIntroVariant } from "./types";

const { SectionIntroProps } = require("./SectionIntro.constants");

const setClassName = (variant: SectionIntroVariant) => {
  return SectionIntroProps.variant.lg === variant
    ? "font-comp txt-display-main mb-1 --themed-titles"
    : "font-comp txt-display-comp mb-1 --themed-titles";
};

export { setClassName };
