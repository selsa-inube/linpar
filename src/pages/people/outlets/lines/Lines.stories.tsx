import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Lines } from "./index";
import { TokenContext } from "@src/context/TokenContext";
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
        <TokenContext.Provider
          value={{ token: presente, handleSubmit: () => {} }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Lines />;

export default story;

export { Default };
