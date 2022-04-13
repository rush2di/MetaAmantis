import { ButtonProps } from "components/Button";
import { ButtonPropsType } from "components/Button/types";

const menuContent = [
  { text: "Vision", link: "#vision" },
  { text: "Initial Collection", link: "#initial-collection" },
  { text: "Roadmap", link: "#roadmap" },
  { text: "FAQ", link: "#faq" },
  { text: "Whitepaper", link: "#whitepaper" },
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
