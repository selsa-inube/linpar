import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Stack, inube } from "@inube/design-system";
import {
  RenderContentFormSurfaceNav,
  RenderContentFormSurfaceNavProps,
} from ".";
import { surfaceFormsConfig } from "@pages/people/outlets/color/surfaces/config/surface.config";
import { TokenContext } from "@context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof RenderContentFormSurfaceNav> = {
  component: RenderContentFormSurfaceNav,
  title:
    "layouts/people/outlets/color/surfaces/form/RenderContentFormSurfaceNav",
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
            handleSubmit: action("handleSubmit"),
          }}
        >
          <Story />
        </TokenContext.Provider>
      </BrowserRouter>
    ),
  ],
};

const Default = (args: RenderContentFormSurfaceNavProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderContentFormSurfaceNav {...args} formType="nav" />
    </Stack>
  );
};

Default.args = {
  surfaceConfig: { nav: surfaceFormsConfig.nav },
};
export default story;

export { Default };
