import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Strokes } from "./index";
import { presente } from "@inube/design-system";
import { TokenContext } from "@src/context/TokenContext";

const story = {
  components: [Strokes],
  title: "layouts/people/outlets/color/strokes",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{ token: presente, handleSubmit: () => {} }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Strokes />;
Default.args = {};

export default story;

export { Default };
