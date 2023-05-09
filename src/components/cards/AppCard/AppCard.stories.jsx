import { AppCard } from ".";
import { mockApps } from "../../../mocks/home/apps.mock";
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
  label: mockApps[0].label,
  description: mockApps[0].description,
  icon: mockApps[0].icon,
  url: mockApps[0].url,
};

export default story;
