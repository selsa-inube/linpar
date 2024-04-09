import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuHeading, MenuHeadingProps } from ".";

const story = {
  title: "design/navigation/MenuHeading",
  components: [MenuHeading],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<MenuHeadingProps> = (args) => (
  <MenuHeading {...args} />
);
Default.args = {
  title: "Title",
};

export default story;
