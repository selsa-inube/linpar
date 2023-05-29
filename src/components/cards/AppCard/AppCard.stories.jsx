import { AppCard } from "../AppCard";
import { appsConfig } from "@pages/home/config/apps.config";

import { BrowserRouter } from "react-router-dom";

const story = {
  component: [AppCard],
  title: "components/cards/AppCard",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: appsConfig[0].label,
  description: appsConfig[0].description,
  icon: appsConfig[0].icon,
  url: appsConfig[0].url,
};

export default story;
