import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";
import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { MenuOption, MenuOptionProps } from ".";

const story = {
  component: [MenuOption],
  title: "components/navigation/MenuOption",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<MenuOptionProps> = (args) => <MenuOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: menuInvitationLinks[0].label,
  icon: menuInvitationLinks[0].icon,
  handleClick: () => action("Executed action")(),
};

export default story;
