import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Lines } from "./index";
import { IPeopleColorProps } from "@src/routes/people";
import { presente } from "@inube/design-system";

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

const Default = (args: IPeopleColorProps) => <Lines {...args} />;
Default.args = {
  token: presente,
  handleSubmit: () => {},
};

export default story;

export { Default };
