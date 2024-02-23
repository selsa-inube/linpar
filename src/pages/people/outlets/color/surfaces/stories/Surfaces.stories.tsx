import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Surfaces } from "..";
import { TokenContext } from "@context/TokenContext";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { props } from "./props";
import { action } from "@storybook/addon-actions";

const story = {
  components: Surfaces,
  title: "layouts/people/outlets/color/surfaces",
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

const Default = () => <Surfaces />;
Default.args = {
  formType: "presente",
};

export default story;

export { Default };
