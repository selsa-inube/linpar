import { Invite } from "./index";
import { BrowserRouter } from "react-router-dom";
import { StoryFn } from "@storybook/react";

const story = {
  components: [Invite],
  title: "layouts/privileges/outlets/users/invite",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Invite />;

export default story;

export { Default };
