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
      <div className="py-4 container">
        <div className="d-flex justify-center align-center">
          <p className="txt color-light txt-center font-comp">
            © Meta Amantis 2022 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
