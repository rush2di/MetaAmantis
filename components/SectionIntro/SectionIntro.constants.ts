import { SectionIntroTag, SectionIntroVariant } from "./types";

const SectionIntroProps = {
  tag: { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6" } as {
    [key: string]: SectionIntroTag;
  },
  variant: { lg: "lg", md: "md" } as { [key: string]: SectionIntroVariant },
  isCenter: { true: true, false: false },
};

export { SectionIntroProps };
