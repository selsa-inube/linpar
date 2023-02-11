import { MenuLink } from "../../MenuLink";
import { MdKeyboardArrowRight } from "react-icons/md";
import { mockApps } from "../../../../mocks/home/apps.mock";
import { BrowserRouter } from "react-router-dom";

const story = {
  component: [MenuLink],
  title: "components/MenuLink",
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
  label: mockApps[0].label,
  icon: mockApps[0].icon,
  icon2: <MdKeyboardArrowRight />,
  selected: true,
  url: mockApps[0].url,
};

export default story;
