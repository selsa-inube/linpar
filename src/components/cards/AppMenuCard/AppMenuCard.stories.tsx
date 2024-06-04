import { AppMenuCard, AppMenuCardProps } from "./index";

import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { appsConfig } from "@components/layout/AppPage/config/apps.config";

const story = {
  components: [AppMenuCard],
  title: "components/cards/AppMenuCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: AppMenuCardProps) => <AppMenuCard {...args} />;

Default.args = {
  icon: appsConfig[0].icon,
  label: "users",
  description: "invite, edit, activate and delete Linix users",
  url: "/",
  domain: "color",
};

export default story;

export { Default };
