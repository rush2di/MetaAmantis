export type SectionIntroTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type SectionIntroVariant = "lg" | "md";

export interface SectionIntroPropsType {
  title: string;
  isCenter?: boolean;
  tag: SectionIntroTag;
  variant?: SectionIntroVariant;
  subtitle?: string;
  text?: string;
  animated?: boolean
}
