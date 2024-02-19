import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Texts } from ".";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

const story = {
  components: [Texts],
  title: "layouts/people/outlets/color/texts",
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

const Default = () => <Texts />;

export default story;
export { Default };
