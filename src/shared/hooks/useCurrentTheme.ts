import { THEMES } from "../consts";
import { useTheme } from "./useTheme";

export const useCurrentTheme = () => {
  const { themeName } = useTheme();
  return THEMES[themeName];
};
