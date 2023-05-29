import { BrowserRouter } from "react-router-dom";
import { MenuLink } from "..";
import { menuInvitationLinks } from "../../../../pages/privileges/outlets/users/config/menuInvitation.config";

const story = {
  component: [MenuLink],
  title: "components/navigation/MenuLink",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <MenuLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: menuInvitationLinks[0].label,
  icon: menuInvitationLinks[0].icon,
  path: menuInvitationLinks[0].path,
};

export default story;
