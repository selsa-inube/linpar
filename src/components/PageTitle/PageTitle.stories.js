import { PageTitle } from "./index";
import { mockAppsConfig } from "../../pages/home/config/apps.config";

const story = {
  component: [PageTitle],
  title: "components/PageTitle",
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: mockAppsConfig[0].label,
  description: mockAppsConfig[0].description,
  icon: mockAppsConfig[0].icon,
};

export default story;
