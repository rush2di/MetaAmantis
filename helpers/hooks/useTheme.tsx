import { useState, createContext, useEffect, useContext } from "react";

import {
  THEME_DARK,
  THEME_LIGHT,
  PREFERS_DARK_COLOR_SCHEME,
} from "helpers/constants";
import { ThemeType } from "helpers/commonTypes";
import {
  ThemeContextProviderProps,
  ThemeContextProviderValues,
} from "./d.types";

const defaultContextState = {
  theme: THEME_DARK as ThemeType,
};

const ThemeContext =
  createContext<Partial<ThemeContextProviderValues>>(defaultContextState);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(THEME_DARK);

  const toggleTheme = () => {
    theme === THEME_DARK ? setTheme(THEME_LIGHT) : setTheme(THEME_DARK);
  };

  const isDarkTheme = (theme: ThemeType) => theme === THEME_DARK;

  useEffect(() => {
    const darkTheme = window.matchMedia(PREFERS_DARK_COLOR_SCHEME);

    if (darkTheme.matches) {
      setTheme(THEME_DARK);
    } else {
      setTheme(THEME_LIGHT);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider, useTheme };
