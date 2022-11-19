import { createRoot } from "react-dom/client";
import { App } from "./App";
import { GlobalStyle } from "./styles/global";
import { Contexts } from "./contexts";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <Contexts>
    <GlobalStyle />
    <App />
  </Contexts>
);
