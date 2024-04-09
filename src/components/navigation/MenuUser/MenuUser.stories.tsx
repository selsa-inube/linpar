import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuUser, MenuUserProps } from ".";

const story = {
  title: "design/navigation/MenuUser",
  components: [MenuUser],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default: StoryFn<MenuUserProps> = (args) => <MenuUser {...args} />;
Default.args = {
  userName: "Name",
  businessUnit: "Business Unit",
  avatar: true,
};

export default story;
