import { AppCard, AppCardProps } from "./index";
import { appsConfig } from "@pages/home/config/apps.config";
import { StoryFn } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";

const story = {
  component: [AppCard],
  title: "components/cards/AppCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Default = (args: AppCardProps) => <AppCard {...args} />;
Default.args = {
  label: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
  url: appsConfig[0].url,
};

export default story;
