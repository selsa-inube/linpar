import { PageTitle } from "./index";
import { appsConfig } from "../../pages/home/config/apps.config";

const story = {
  component: [PageTitle],
  title: "components/PageTitle",
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
};

export default story;
