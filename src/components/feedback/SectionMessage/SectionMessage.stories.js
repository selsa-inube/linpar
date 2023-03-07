import { SectionMessage } from "../SectionMessage";
import { MdWarning } from "react-icons/md";

const argTypes = {
  appearance: {
    options: ["primary", "confirm", "warning", "remove"],
    control: {
      type: "select",
      labels: {
        primary: "Primary",
        confirm: "Confirm",
        warning: "Warning",
        remove: "Remove",
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
  title: "Oh no! Something has happened...",
  description: "We could not get the values of the query, please try again",
  icon: <MdWarning />,
  appearance: "warning",
};

export default story;
