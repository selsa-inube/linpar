import { StoryFn } from "@storybook/react";
import { DropdownItem, DropdownItemProps } from ".";
import { props } from "./props";

import { fondecom } from "@mocks/design/themes/fondecom";
import { ThemeProvider } from "styled-components";

const story = {
  title: "components/inputs/DropdownItem",
  component: DropdownItem,
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
};

export const Default: StoryFn<DropdownItemProps> = (args) => (
  <DropdownItem {...args} />
);
Default.args = {
  isDisabled: false,
  isFocused: false,
  id: "CL002807",
  value: "Crédito libre inversión CL002807",
};

const theme = {
  ...fondecom,
};

export const Themed: StoryFn<DropdownItemProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DropdownItem {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export default story;
