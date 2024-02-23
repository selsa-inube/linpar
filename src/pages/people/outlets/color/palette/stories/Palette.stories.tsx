import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Palette } from "..";
import { TokenContext } from "@context/TokenContext";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { props } from "./props";
import { action } from "@storybook/addon-actions";

const story = {
  components: Palette,
  title: "layouts/people/outlets/color/palette",
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
            handleSubmit: action("handleSubmit"),
          }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = () => <Palette />;

Default.args = {
  formType: "presente",
};

export default story;

export { Default };
