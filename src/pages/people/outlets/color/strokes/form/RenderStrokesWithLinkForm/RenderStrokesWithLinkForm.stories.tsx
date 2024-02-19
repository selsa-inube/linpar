import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack, inube } from "@inube/design-system";
import { TokenContext } from "@src/context/TokenContext";
import { strokesFormsConfig } from "../../config/Strokes.config";
import { RenderStrokesWithLinkForm, RenderStrokesWithLinkFormProps } from ".";
import { presente } from "@src/mocks/design/tokensWithReference/presente";

const story = {
  components: [RenderStrokesWithLinkForm],
  title: "layouts/people/outlets/color/strokes/form/RenderStrokesWithLinkForm",
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

const Default = (args: RenderStrokesWithLinkFormProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderStrokesWithLinkForm {...args} formType="link" />
    </Stack>
  );
};

Default.args = {
  strokesConfig: { link: strokesFormsConfig.link },
};
export default story;

export { Default };
