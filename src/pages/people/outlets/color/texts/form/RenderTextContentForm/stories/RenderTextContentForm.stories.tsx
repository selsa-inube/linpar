import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack, inube } from "@inube/design-system";
import { RenderTextContentForm, RenderTextContentFormProps } from "..";
import { textFormsConfig } from "@pages/people/outlets/color/texts/config/text.config";
import { props } from "./props";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof RenderTextContentForm> = {
  component: RenderTextContentForm,
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
            handleSubmit: action("handleSubmit"),
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
