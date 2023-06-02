import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";
import { action } from "@storybook/addon-actions";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";

const story = {
  title: "components/navigation/Menu",
  component: [Menu],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Menu {...args} />;

const menuOptions = [
  {
    id: menuInvitationLinks[0].id,
    label: menuInvitationLinks[0].label,
    icon: menuInvitationLinks[0].icon,
    handleClick: () => action("Executed action")(),
  },
];

export const Default = Template.bind({});
Default.args = {
  options: menuOptions,
  title: "Menú",
};

export const Links = Template.bind({});
Links.args = {
  options: menuInvitationLinks,
  title: "Menú",
};

export default story;
