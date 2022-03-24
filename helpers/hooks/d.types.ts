import { ThemeType } from "helpers/commonTypes";
import { ReactNode } from "react";

export interface ThemeContextProviderProps {
  children: ReactNode;
}

export interface ThemeContextProviderValues {
  theme: ThemeType;
  toggleTheme(): void;
  isDarkTheme(T: ThemeType): boolean;
}
