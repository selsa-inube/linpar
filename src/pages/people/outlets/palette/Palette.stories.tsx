import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Palette } from "./index";

const story = {
  components: [Palette],
  title: "layouts/people/outlets/palette",
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

const Default = () => <Palette />;

export default story;

export { Default };
