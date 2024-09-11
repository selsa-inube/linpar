import { BrowserRouter } from "react-router-dom";
import { StoryFn, Meta } from "@storybook/react";

import { AppCard, AppCardProps } from "..";
import { MdContacts } from "react-icons/md";

const meta: Meta<typeof AppCard> = {
  component: AppCard,
  title: "components/navigation/AppCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template: StoryFn<AppCardProps> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Card Title",
  description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  icon: <MdContacts />,
  url: "/privileges",
};

export default meta;
