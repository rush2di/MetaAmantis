import { v4 as uuidv4 } from "uuid";

import Logo from "components/Logo";

import styles from "./Footer.module.scss";
import { menuLists } from "./Footer.constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItemProps, MenuListProps } from "./types";

const { footerStyles, footerBlock, footerDecor } = styles;

const Footer = () => {
  return (
    <footer className={footerStyles}>
      <div className="footer container">
        <div className="d-flex justify-between align-start">
          <Logo />
          <div className={footerBlock}>
            {menuLists.map(({ menuTitle, menuItems }) => {
              return (
                <MenuList
                  key={uuidv4()}
                  menuTitle={menuTitle}
                  menuItems={menuItems}
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

const MenuList = ({ menuTitle, menuItems }: MenuListProps) => {
  return (
    <ul className="d-flex flex-column align-start">
      <li className="txt-light txt-h6 mb-1 font-comp">{menuTitle}</li>
      {menuItems.map(({ text, link, icon }) => {
        return <MenuItem key={uuidv4()} {...{ text, link, icon, menuTitle }} />;
      })}
    </ul>
  );
};

const MenuItem = ({ link, text, icon, menuTitle }: MenuItemProps) => {
  return menuTitle !== "Socials" ? (
    <li className="txt mb-0-75">
      <a href={link}>{text}</a>
    </li>
  ) : (
    <li className="txt mb-0-75">
      <a href={link} className="d-flex">
        <div className={footerDecor}>
          <FontAwesomeIcon icon={["fab", icon]} />
        </div>
        <p className="ml-0-50">{text}</p>
      </a>
    </li>
  );
};

export default Footer;
