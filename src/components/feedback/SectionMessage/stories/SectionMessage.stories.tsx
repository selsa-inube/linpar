import { SectionMessage, SectionMessageProps } from "..";
import { MdWarning } from "react-icons/md";
import { action } from "@storybook/addon-actions";
import { StoryFn } from "@storybook/react";
import { EAppearance } from "@src/types/colors.types";

const argTypes = {
  appearance: {
    options: ["primary", "confirm", "warning", "remove", "help"],
    control: {
      type: "select",
      labels: {
        primary: "primary",
        confirm: "confirm",
        warning: "warning",
        remove: "remove",
        help: "help",
      },
    },
  },
};

const story = {
  title: "Components/Feedback/SectionMessage",
  component: SectionMessage,
  argTypes,
  icon: <MdWarning />,
  parameters: {
    layout: "fullscreen",
  },
};

const closeSectionMessage = () => {
  action("SectionMessage closed")();
};

const Template: StoryFn<SectionMessageProps> = (args) => (
  <SectionMessage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  icon: <MdWarning />,
  closeSectionMessage: closeSectionMessage,
};

export const WithDuration = Template.bind({});
WithDuration.args = {
  title: "Title",
  description: "Description",
  icon: <MdWarning />,
  duration: 10000,
  closeSectionMessage: closeSectionMessage,
};

export const WithFullText = Template.bind({});
WithFullText.args = {
  title: "Oops, something has gone wrong!",
  description:
    "We have presented problems when carrying out the user creation action. This can have many causes, the name does not meet the necessary requirements, the identification number does not contain the number of characters. so please try again.  (this text no longer appears because it exceeds the character limit of the component)",
  icon: <MdWarning />,
  appearance: EAppearance.REMOVE,
  closeSectionMessage: closeSectionMessage,
};

export default story;
