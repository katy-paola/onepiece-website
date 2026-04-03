import { createContext } from "react";
import type { ThemeName } from "../consts";

export type ThemeContextType = {
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType | null>(null);
