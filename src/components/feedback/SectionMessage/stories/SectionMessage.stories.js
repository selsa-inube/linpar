import { SectionMessage } from "..";
import { MdWarning } from "react-icons/md";

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
};

const Template = (args) => <SectionMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Title",
  description: "Description",
  icon: <MdWarning />,
};

export const WithDuration = Template.bind({});
WithDuration.args = {
  title: "Title",
  description: "Description",
  icon: <MdWarning />,
  duration: 10000,
};

export const WithFullText = Template.bind({});
WithFullText.args = {
  title: "Oops, something has gone wrong!",
  description:
    "We have presented problems when carrying out the user creation action. This can have many causes, the name does not meet the necessary requirements, the identification number does not contain the number of characters. so please try again.  (this text no longer appears because it exceeds the character limit of the component)",
  icon: <MdWarning />,
  appearance: "remove",
};

export default story;
