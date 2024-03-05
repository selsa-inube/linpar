import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Strokes } from "..";
import { TokenContext } from "@context/TokenContext";
import { props } from "./props";
import { tokensWithReference } from "@src/mocks/design/tokensWithReference";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof Strokes> = {
  component: Strokes,
  title: "layouts/people/outlets/color/strokes",
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

const Default = () => <Strokes />;

Default.args = {
  clientName: "presente",
};

export default story;

export { Default };
