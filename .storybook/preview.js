import React from "react";
import { ThemeProvider } from "styled-components";
import { Contexts } from "../src/contexts";

export const decorators = [(Story) => <Contexts>{Story()}</Contexts>];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
