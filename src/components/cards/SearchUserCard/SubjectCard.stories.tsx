import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";
import { SearchUserCard, SearchUserCardProps } from ".";

const story = {
  component: [SearchUserCard],
  title: "components/cards/SearchUserCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const data = {
  username: "David Leonardo Garzón",
  userID: "45645",
  mail: "lgarzon@gmail.com",
  invitationDate: "11/JUN/2022",
  status: "Sent",
  id: 10,
};

const Template: StoryFn<SearchUserCardProps> = (args) => (
  <SearchUserCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  userData: data,
  title: "User Information",
};

export default story;
