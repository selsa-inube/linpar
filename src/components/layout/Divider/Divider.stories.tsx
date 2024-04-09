import { Divider, DividerProps } from ".";

import { props } from "./props";

import { themes } from "@mocks/design/themes";
import { StoryFn } from "@storybook/react";
import { ThemeProvider } from "styled-components";

const story = {
  title: "design/input/Divider",
  component: [Divider],
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
};

export const Default: StoryFn<DividerProps> = (args) => <Divider {...args} />;
Default.args = {
  dashed: true,
};

const theme = {
  ...themes["fondecom"],
};

export const Themed: StoryFn<DividerProps> = (args) => (
  <ThemeProvider theme={theme}>
    <Divider {...args} />
  </ThemeProvider>
);

Themed.args = {
  ...Default.args,
};

export default story;
