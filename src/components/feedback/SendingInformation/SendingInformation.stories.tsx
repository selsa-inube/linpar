import { ISendInformationMessageProps, SendInformationMessage } from "./index";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

const story = {
  components: [SendInformationMessage],
  title: "Components/Feedback/SendInformationMessage",
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = (args: ISendInformationMessageProps) => (
  <SendInformationMessage {...args} />
);

Default.args = {
  appearance: "primary",
  buttonType: "outlined",
};

Default.argTypes = {
  appearance: {
    options: [
      "primary",
      "error",
      "warning",
      "success",
      "information",
      "help",
      "light",
      "gray",
      "dark",
    ],
    control: { type: "select" },
    description: "The apperance of the Section Message.",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
  buttonType: {
    options: ["outlined", "filled", "none"],
    control: { type: "select" },
    description: "The type of button of the Section Message.",
    table: {
      defaultValue: { summary: "buttonType" },
    },
  },
};

export default story;

export { Default };
