import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { MenuOption } from "..";

const story = {
  component: [MenuOption],
  title: "components/navigation/MenuOption",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <MenuOption {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: menuInvitationLinks[0].label,
  icon: menuInvitationLinks[0].icon,
  option: () => action("Executed action")(),
};

export const Link = Template.bind({});
Link.args = {
  label: menuInvitationLinks[0].label,
  icon: menuInvitationLinks[0].icon,
  option: menuInvitationLinks[0].option,
};

export default story;
