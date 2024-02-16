import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack, inube } from "@inube/design-system";
import { RenderTextContentForm, RenderTextContentFormProps } from "..";
import { textFormsConfig } from "../../../config/text.config";
import { props } from "./props";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

const story = {
  components: [RenderTextContentForm],
  title: "layouts/people/outlets/color/texts/form/RenderTextContentForm",
  parameters: {
    layout: "fullscreen",
  },
  argTypes: props,
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

const Default = (args: RenderTextContentFormProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderTextContentForm {...args} />
    </Stack>
  );
};

Default.args = {
  textConfig: { ...textFormsConfig },
  formType: "primary",
};
export default story;

export { Default };
