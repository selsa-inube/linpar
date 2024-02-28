import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Fonts } from "./index";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

const story = {
  components: [Fonts],
  title: "layouts/people/outlets/typography/fonts",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{
            tokenWithRef: presente,
            handleSubmit: () => {},
            loading: false,
          }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Fonts />;

export default story;

export { Default };
