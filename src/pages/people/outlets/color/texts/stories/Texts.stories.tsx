import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Texts } from "..";
import { TokenContext } from "@context/TokenContext";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { props } from "./props";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof Texts> = {
  component: Texts,
  title: "layouts/people/outlets/color/texts",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: props,
  decorators: [
    (
      Story: StoryFn,
      context: { args: { clientName?: keyof typeof tokensWithReference } }
    ) => {
      const clientName = context.args.clientName || "presente";
      return (
        <BrowserRouter>
          <TokenContext.Provider
            value={{
              tokenWithRef: tokensWithReference[clientName],
              loading: false,
              handleSubmit: action("handleSubmit"),
            }}
          >
            <Story />
          </TokenContext.Provider>
        </BrowserRouter>
      );
    },
  ],
};
const Default: StoryFn = () => <Texts />;

Default.args = {
  clientName: "presente",
};

export default story;
export { Default };
