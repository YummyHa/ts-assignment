import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "theme/ThemeProvider";
import * as themes from "theme/schema.json";
import { setToLS } from "utils/storage";

const AllTheProviders = ({ children }) => {
  setToLS("all-themes", themes.default);
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
