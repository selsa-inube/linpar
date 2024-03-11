import { StoryFn } from "@storybook/react";
import { DropdownMenu, DropdownMenuProps } from ".";
import { props } from "./props";

import { fondecom } from "@mocks/design/themes/fondecom";
import { ThemeProvider } from "styled-components";

const story = {
  title: "components/inputs/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {
    ...props,
  },
};

export const Default: StoryFn<DropdownMenuProps> = (args) => (
  <DropdownMenu {...args} />
);
Default.args = {
  options: [
    {
      id: "CE995433",
      isFocused: false,
      value: "Crédito educativo - CE995433",
    },
    {
      id: "CL002807",
      isFocused: false,
      value: "Crédito libre inversión - CL002807",
    },
    {
      id: "CL002808",
      isDisabled: true,
      value: "Crédito libre inversión - CL002808",
    },
  ],
};

const theme = {
  ...fondecom,
};

export const Themed: StoryFn<DropdownMenuProps> = (args) => (
  <ThemeProvider theme={theme}>
    <DropdownMenu {...args} />
  </ThemeProvider>
);
Themed.args = {
  ...Default.args,
};

export default story;
