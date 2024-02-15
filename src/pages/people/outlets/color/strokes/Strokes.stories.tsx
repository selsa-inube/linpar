import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Strokes } from "./index";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

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
          value={{
            tokenWithRef: presente,
            loading: false,
            handleSubmit: () => {},
          }}
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
