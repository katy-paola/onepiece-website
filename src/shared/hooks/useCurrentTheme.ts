import { THEMES } from "../consts";
import { useTheme } from "./useTheme";

export const useCurrentTheme = () => {
  const { themeName, setTheme } = useTheme();
  return {
    themeName,
    theme: THEMES[themeName],
    setTheme,
  };
};
