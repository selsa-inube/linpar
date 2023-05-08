import { PageTitle } from "./index";
import { mockApps } from "../../mocks/home/apps.mock";

const story = {
  component: [PageTitle],
  title: "components/PageTitle",
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: mockApps[0].label,
  description: mockApps[0].description,
  icon: mockApps[0].icon,
};

export default story;
