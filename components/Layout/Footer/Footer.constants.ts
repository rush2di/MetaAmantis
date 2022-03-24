import { MenuListProps } from "./types";

const menuLists: MenuListProps[] = [
  {
    menuTitle: "Learn more",
    menuItems: [
      { text: "Crypto Stallionz features", link: "#" },
      { text: "Roadmap", link: "#" },
      { text: "Staking", link: "#" },
    ],
  },
  {
    menuTitle: "Legal",
    menuItems: [
      { text: "Privacy Policy", link: "#" },
      { text: "Terms and Conditions", link: "#" },
      { text: "Risk Disclaimer", link: "#" },
    ],
  },
  {
    menuTitle: "Socials",
    menuItems: [
      { text: "Instagram", link: "#", icon: "instagram" },
      { text: "Telegram", link: "#", icon: "telegram-plane" },
      { text: "Discord", link: "#", icon: "discord" },
      { text: "Twitter", link: "#", icon: "twitter" },
    ],
  },
];

export { menuLists };
