import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

import { SubjectSearchCard, SubjectSearchCardProps } from ".";

const story = {
  component: [SubjectSearchCard],
  title: "components/cards/SubjectSearchCard",
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

const Template: StoryFn<SubjectSearchCardProps> = (args) => (
  <SubjectSearchCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  subjectSearchData: data,
};

export default story;
