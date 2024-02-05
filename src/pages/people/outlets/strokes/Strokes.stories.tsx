import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Strokes } from "./index";
import { IPeopleColorProps } from "@src/routes/people";
import { presente } from "@inube/design-system";

const story = {
  components: [Strokes],
  title: "layouts/people/outlets/strokes",
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

const Default = (args: IPeopleColorProps) => <Strokes {...args} />;
Default.args = {
  token: presente,
  handleSubmit: () => {},
};

export default story;

export { Default };
