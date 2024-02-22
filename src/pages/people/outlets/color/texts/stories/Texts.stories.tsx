import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Texts } from "..";
import { TokenContext } from "@context/TokenContext";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { props } from "./props";

const story = {
  components: Texts,
  title: "layouts/people/outlets/color/texts",
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
const Default = () => <Texts />;

Default.args = {
  formType: "presente",
};

export default story;
export { Default };
