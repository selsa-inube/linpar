import { AppCard } from "../AppCard";
import { mockAppsConfig } from "../../../pages/home/config/apps.config";
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
  label: mockAppsConfig[0].label,
  description: mockAppsConfig[0].description,
  icon: mockAppsConfig[0].icon,
  url: mockAppsConfig[0].url,
};

export default story;
