import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Lines } from "./index";

const story = {
  components: [Lines],
  title: "layouts/people/outlets/lines",
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

const Default = () => <Lines />;

export default story;

export { Default };
