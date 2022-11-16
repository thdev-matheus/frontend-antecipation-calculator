import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "styled-components";
import { DarkTheme, ligthTheme } from "./themes";
import { useDarkMode } from "./contexts/DarkMode";

export const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? DarkTheme : ligthTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
