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
};

export default story;

export { Default };
