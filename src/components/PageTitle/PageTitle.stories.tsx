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
