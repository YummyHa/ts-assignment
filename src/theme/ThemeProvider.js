/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import GlobalStyles from "./globalStyles";
import { getFromLS } from "utils/storage";

const ThemeDispatchContext = React.createContext();

function ThemeProvider({ children }) {
  const allThemes = getFromLS('all-themes');
  const [theme, setTheme] = useState(allThemes.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(allThemes.light);
    setThemeLoaded(true);
  }, []);

  return (
    themeLoaded && (
      <SCThemeProvider theme={theme}>
        <ThemeDispatchContext.Provider value={setTheme}>
          <GlobalStyles />
          {children}
        </ThemeDispatchContext.Provider>
      </SCThemeProvider>
    )
  );
}

export { ThemeProvider, ThemeDispatchContext };
