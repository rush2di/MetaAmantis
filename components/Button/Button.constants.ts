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
    grads: "grads",
    outline_grads: "out-grads",
  } as { [key: string]: ButtonVariants },
};

export { ButtonProps };
