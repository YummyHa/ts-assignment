/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from "react";
import { setToLS } from "utils/storage";
import { ThemeDispatchContext } from "./ThemeProvider";

function useSetThemeContext() {
  const context = useContext(ThemeDispatchContext);
  if (context === undefined) {
    throw new Error('useSetThemeContext must be used within a ThemeProvider');
  }
  return context;
}

function useTheme() {
  const setThemeContext = useSetThemeContext();

  function setMode(mode) {
    setToLS("theme", mode);
    setThemeContext(mode);
  }

  return { setMode };
}

export { useTheme };
