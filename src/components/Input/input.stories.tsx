// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "./";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Componentes/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

/* export const Primary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="Button" />
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="😄👍😍💯" />
);

export const Tertiary: ComponentStory<typeof Button> = () => (
  <Button backgroundColor="#ff0" label="📚📕📈🤓" />
); */
