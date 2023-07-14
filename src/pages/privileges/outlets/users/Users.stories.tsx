import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Users } from "./index";

const story = {
  components: [Users],
  title: "layouts/privileges/outlets/users",
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

const Default = () => <Users />;

export default story;

export { Default };
