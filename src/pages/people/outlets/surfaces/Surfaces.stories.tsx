import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Surfaces } from "./index";

const story = {
  components: [Surfaces],
  title: "layouts/people/outlets/surfaces",
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

const Default = () => <Surfaces />;

export default story;

export { Default };
