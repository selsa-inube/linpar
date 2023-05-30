import { BrowserRouter } from "react-router-dom";
import { Menu } from "..";
import { menuInvitationLinks } from "@pages/privileges/outlets/users/config/menuInvitation.config";

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

export const Default = Template.bind({});
Default.args = {
  links: menuInvitationLinks,
  title: "Menú",
};

export default story;
