import { BrowserRouter } from "react-router-dom";
import { MenuLink } from "..";
import { appsConfig } from "../../../../pages/home/config/apps.config";

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
  label: appsConfig[0].label,
  icon: appsConfig[0].icon,
  path: appsConfig[0].url,
};

export const Selected = Template.bind({});
Selected.args = {
  label: appsConfig[0].label,
  icon: appsConfig[0].icon,
  path: appsConfig[0].url,
};

export default story;
