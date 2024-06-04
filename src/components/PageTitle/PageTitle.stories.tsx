import { BrowserRouter } from "react-router-dom";
import { PageTitle, PageTitleProps } from "./index";

import { StoryFn } from "@storybook/react";
import { appsConfig } from "../layout/AppPage/config/apps.config";

const story = {
  component: [PageTitle],
  title: "components/PageTitle",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
};

export default story;
