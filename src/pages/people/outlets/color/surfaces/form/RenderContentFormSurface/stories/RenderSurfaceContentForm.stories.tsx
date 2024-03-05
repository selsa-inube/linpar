import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack, inube } from "@inube/design-system";
import { RenderSurfaceContentForm, RenderSurfaceContentFormProps } from "..";
import { TokenContext } from "@src/context/TokenContext";
import { action } from "@storybook/addon-actions";
import { props } from "./props";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { surfaceFormsConfig } from "@pages/people/outlets/color/surfaces/config/surface.config";

const story: Meta<typeof RenderSurfaceContentForm> = {
  component: RenderSurfaceContentForm,
  title: "layouts/people/outlets/color/surfaces/form/RenderContentFormSurface",
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

const Default = (args: RenderSurfaceContentFormProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderSurfaceContentForm {...args} />
    </Stack>
  );
};

Default.args = {
  surfaceConfig: { ...surfaceFormsConfig },
  formType: "primary",
};

export default story;

export { Default };
