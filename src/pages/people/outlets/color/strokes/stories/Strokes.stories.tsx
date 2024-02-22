import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Strokes } from "..";
import { TokenContext } from "@context/TokenContext";
import { props } from "./props";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";

const story = {
  components: Strokes,
  title: "layouts/people/outlets/color/strokes",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: props,
  decorators: [
    (
      Story: StoryFn,
      context: { args: { formType: keyof typeof tokensWithReference } }
    ) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{
            tokenWithRef: tokensWithReference[context.args.formType],
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

Default.args = {
  formType: "presente",
};

export default story;

export { Default };
