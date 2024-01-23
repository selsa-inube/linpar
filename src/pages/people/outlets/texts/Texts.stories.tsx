import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Texts } from "./index";
import { IPeopleColorProps } from "@src/routes/people";
import { presente } from "@inube/design-system";

const story = {
  components: [Texts],
  title: "layouts/people/outlets/texts",
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

const Default = (args: IPeopleColorProps) => <Texts {...args} />;
Default.args = {
  token: presente,
  handleSubmit: () => {},
};

export default story;

export { Default };
