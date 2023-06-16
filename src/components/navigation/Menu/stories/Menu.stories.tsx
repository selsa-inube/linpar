import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { Menu, OptionProps, MenuProps } from "..";
import { StoryFn } from "@storybook/react";

const story = {
  title: "components/navigation/Menu",
  component: [Menu],
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<MenuProps> = (args) => <Menu {...args} />;

const menuOptions: OptionProps[] = [
  {
    id: menuInvitationLinks[0].id,
    label: menuInvitationLinks[0].label,
    icon: menuInvitationLinks[0].icon,
    handleClick: () => action("Executed action")(menuOptions),
  },
];

export const Default = Template.bind({});
Default.args = {
  options: menuOptions,
};

export const Links = Template.bind({});
Links.args = {
  options: menuInvitationLinks,
};

export default story;
