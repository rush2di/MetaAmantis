import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
import { ButtonProps } from "./Button.constants";

export type ButtonVariants = "bg" | "outline";
export type ButtonColors = "main" | "comp" | "twitter" | "discord";

export interface ButtonPropsType {
  variant: ButtonVariants;
  color: ButtonColors;
  children?: ReactNode;
  icon?: IconProp;
  href?: string;
}
