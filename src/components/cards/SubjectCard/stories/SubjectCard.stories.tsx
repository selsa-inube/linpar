import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { SubjectCard, SubjectCardProps } from "..";

const story = {
  component: [SubjectCard],
  title: "components/cards/SubjectCard",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const data = {
  Name: "David Leonardo Garzón Páramo",
  Identification: "1013614213",
  Phone: "3205510052",
  Mail: "d.garzon@sistemasenlinea.com.co",
};

const Template: StoryFn<SubjectCardProps> = (args) => <SubjectCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  subjectData: data,
  title: "User Information",
};

export default story;
