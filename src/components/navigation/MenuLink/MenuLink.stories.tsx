import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";
import { BrowserRouter } from "react-router-dom";
import { MenuLink, MenuLinkprops } from ".";
import { StoryFn } from "@storybook/react";

const story = {
  component: [MenuLink],
  title: "components/navigation/MenuLink",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<MenuLinkprops> = (args) => <MenuLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: menuInvitationLinks[0].label,
  icon: menuInvitationLinks[0].icon,
  path: menuInvitationLinks[0].path,
};

export default story;
