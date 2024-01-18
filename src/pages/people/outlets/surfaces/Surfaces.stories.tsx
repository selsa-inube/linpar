import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Surfaces } from "./index";
import { IPeopleColorProps } from "@src/routes/people";
import { presente } from "@inube/design-system";

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

const Default = (args: IPeopleColorProps) => <Surfaces {...args} />;
Default.args = {
  token: presente,
  handleSubmit: () => {},
};

export default story;

export { Default };
