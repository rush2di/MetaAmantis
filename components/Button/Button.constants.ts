import { ButtonColors, ButtonVariants } from "./types";

const ButtonProps = {
  color: {
    main: "main",
    comp: "comp",
    twitter: "twitter",
    discord: "discord",
  } as { [key: string]: ButtonColors },
  variant: {
    fill: "bg",
    outline: "outline",
  } as { [key: string]: ButtonVariants },
};

export { ButtonProps };
