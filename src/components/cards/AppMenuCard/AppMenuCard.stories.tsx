import { AppMenuCard, AppMenuCardProps } from "./index";
import { appsConfig } from "@pages/home/config/apps.config";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

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
};

export default story;

export { Default };
