import { ProgressBar } from "..";

const argTypes = {
  colorToken: {
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
  title: "Components/Feedback/ProgressBar",
  component: ProgressBar,
  argTypes,
};

const Template = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 10,
};

export default story;
