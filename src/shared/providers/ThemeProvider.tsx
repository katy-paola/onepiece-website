import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import type { ThemeName } from "../consts";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setTheme] = useState<ThemeName>(() => {
    const saved = localStorage.getItem("theme") as ThemeName | null;
    return saved ?? "default";
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
