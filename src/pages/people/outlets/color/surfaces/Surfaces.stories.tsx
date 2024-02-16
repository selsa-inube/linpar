import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Surfaces } from "./index";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

const story = {
  components: [Surfaces],
  title: "layouts/people/outlets/color/surfaces",
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

const Default = () => <Surfaces />;

export default story;

export { Default };
