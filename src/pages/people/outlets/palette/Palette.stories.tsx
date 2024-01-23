import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Palette } from "./index";
import { presente } from "@inube/design-system";
import type { IPeopleColorProps } from "src/routes/people";

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

const Default = (args: IPeopleColorProps) => <Palette {...args} />;

Default.args = {
  token: presente,
  handleSubmit: () => null,
};

export default story;

export { Default };
