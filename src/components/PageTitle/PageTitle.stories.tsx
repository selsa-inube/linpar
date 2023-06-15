import { BrowserRouter } from "react-router-dom";
import { PageTitle, PageTitleProps } from "./index";
import { appsConfig } from "@pages/home/config/apps.config";
import { StoryFn } from "@storybook/react";

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

export const Default = (args: PageTitleProps) => <PageTitle {...args} />;
Default.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
};

export const WithCustomIcon = (args: PageTitleProps) => <PageTitle {...args} />;
WithCustomIcon.args = {
  title: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
};

export default story;
