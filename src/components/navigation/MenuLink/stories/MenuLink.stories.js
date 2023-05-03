import { MenuLink } from "../../MenuLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import { mockAppsConfig } from "../../../../pages/home/config/apps.config";
import { BrowserRouter } from "react-router-dom";

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
  label: mockAppsConfig[0].label,
  icon: mockAppsConfig[0].icon,
  icon2: <MdKeyboardArrowRight />,
  isSelected: false,
  url: mockAppsConfig[0].url,
};

export const Selected = Template.bind({});
Selected.args = {
  label: mockAppsConfig[0].label,
  icon: mockAppsConfig[0].icon,
  icon2: <MdKeyboardArrowRight />,
  isSelected: true,
  url: mockAppsConfig[0].url,
};

export default story;
