import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Sling as Hamburger } from "hamburger-react";

import Button from "components/Button";
import Logo from "components/Logo";

import styles from "./Navbar.module.scss";
import { menuContent, mobileMenuButtons } from "./Navbar.constants";
import { useTheme } from "helpers/hooks";
import Link from "next/link";

const {
  itemSpacer,
  menuDark,
  menuLight,
  navbarDark,
  navbarLight,
  mobileNav,
  menuOpen,
  menuClosed,
  menuShown,
  menuHidden,
} = styles;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, isDarkTheme } = useTheme();

  const menuTheme = isDarkTheme(theme) ? menuDark : menuLight;
  const navbarTheme = isDarkTheme(theme) ? navbarDark : navbarLight;
  const toggleTheme = isDarkTheme(theme) ? "#FAFAFA" : "#181818";

  const isOpenDesktopStyles = isOpen ? menuShown : menuHidden;
  const isOpenMobileStyles = isOpen ? menuOpen : menuClosed;

  const toggleMenuBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`nav nav--compound ${navbarTheme} ${isOpenDesktopStyles}`}>
      <div className="container">
        <div className="nav__block nav--not-mobile nav__block--between align-center py-1">
          <Logo />
          <ul className="d-flex align-center font-weight-medium txt-btn --themed-nav">
            {menuContent.map(({ text, link }) => (
              <li
                key={uuidv4()}
                className={`nav__item-txt font-comp ${itemSpacer}`}
              >
                <Link href={link} scroll={false}>
                  <a onClick={() => setIsOpen(false)}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`nav__block nav--mobile nav__block--between align-center py-0-50 ${navbarTheme} ${mobileNav}`}
        >
          <Logo />
          <Hamburger
            toggled={isOpen}
            color={toggleTheme}
            toggle={toggleMenuBtn}
          />
        </div>
        <div
          className={`nav__block nav--mobile flex-column nav__block--center align-center ${menuTheme} ${isOpenMobileStyles}`}
        >
          <ul className="d-flex align-items flex-column txt-h6 pb-1 --themed-nav">
            {menuContent.map(({ text, link }) => (
              <li key={uuidv4()} className="nav__item-txt font-comp mb-1-75">
                <Link href={link} scroll={false}>
                  <a onClick={() => setIsOpen(false)}>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
          <hr className="my-0 --themed-hr" />
          <div className="py-2 w-100 d-flex alin-center flex-column">
            <p className="txt txt-label">Don’t miss our news, stay update!</p>
            <ul className="d-flex align-center flex-column w-xsm-100 mt-2">
              {mobileMenuButtons.map(({ buttonProps, buttonText }, index) => {
                const styles = `w-100 ${index != 0 ? "mt-1" : ""}`;
                return (
                  <li key={uuidv4()} className={styles}>
                    <Button {...buttonProps}>{buttonText}</Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
