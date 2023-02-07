import { Menu } from "../Menu";
import { mockApps } from "../../mocks/home/apps.mock";

const story = {
  component: [Menu],
  title: "components/Menu",
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: mockApps,
  title: "Menú",
};

export default story;
