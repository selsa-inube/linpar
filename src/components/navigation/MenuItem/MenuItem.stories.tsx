import { StoryFn } from "@storybook/react";
import { MdAndroid } from "react-icons/md";
import { BrowserRouter } from "react-router-dom";
import { MenuItem, MenuItemProps } from ".";

const story = {
  title: "design/navigation/MenuItem",
  components: [MenuItem],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<MenuItemProps> = (args) => <MenuItem {...args} />;
Default.args = {
  title: "Title",
  description: "Description",
  iconBefore: <MdAndroid />,
  spacing: "wide",

  isDisabled: false,
};

export const IconAfter: StoryFn<MenuItemProps> = (args) => (
  <MenuItem {...args} />
);
IconAfter.args = {
  title: "Title",
  description: "Description",
  iconAfter: <MdAndroid />,
  spacing: "wide",
  isDisabled: false,
};

export const Disabled: StoryFn<MenuItemProps> = (args) => (
  <MenuItem {...args} />
);
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

export default story;
