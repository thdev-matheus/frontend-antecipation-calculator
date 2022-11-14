import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "styled-components";
import { DarkTheme, ligthTheme } from "./themes";

export const App = () => {
  // fazer um contexto de dark theme para mudar o tema
  return (
    <ThemeProvider theme={ligthTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
