import { BrowserRouter } from "react-router-dom";
import { PageTitle } from "./index";
import { appsConfig } from "@pages/home/config/apps.config";

const story = {
  component: [PageTitle],
  title: "components/PageTitle",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
};

export const navigateBack = Template.bind({});
navigateBack.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
};

export default story;
