import { ThemeType } from "helpers/commonTypes";
import { THEME_DARK } from "helpers/constants";

const isDarkThemeALT = (theme: ThemeType) => {
  return theme === THEME_DARK;
};

export { isDarkThemeALT };
