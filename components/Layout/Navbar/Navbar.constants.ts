import { IconName } from "@fortawesome/fontawesome-svg-core";
import { ButtonProps } from "components/Button";
import { ButtonPropsType } from "components/Button/types";

const menuContent = [
  { text: "Careers", link: "#" },
  { text: "Game Features", link: "#" },
  { text: "Tokonomics", link: "#" },
  { text: "Roadmap", link: "#" },
  { text: "Whitepaper", link: "#" },
];

const mobileMenuButtons = [
  {
    buttonText: "Join our Twitter",
    buttonProps: {
      href: "#",
      icon: ["fab", "twitter"],
      color: ButtonProps.color.twitter,
      variant: ButtonProps.variant.fill,
    } as ButtonPropsType,
  },
  {
    buttonText: "Join our Discord",
    buttonProps: {
      href: "#",
      icon: ["fab", "discord"],
      color: ButtonProps.color.discord,
      variant: ButtonProps.variant.fill,
    } as ButtonPropsType,
  },
];

export { menuContent, mobileMenuButtons };
