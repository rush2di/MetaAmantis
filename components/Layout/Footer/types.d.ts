import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface MenuListProps {
  menuTitle: string;
  menuItems: MenuItemProps[];
}

export interface MenuItemProps {
  link: string;
  text: string;
  icon?: IconName;
  menuTitle?: string;
}
