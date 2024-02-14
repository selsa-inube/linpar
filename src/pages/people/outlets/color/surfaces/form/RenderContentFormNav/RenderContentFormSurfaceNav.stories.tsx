import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, Stack, inube } from "@inube/design-system";
import {
  RenderContentFormSurfaceNav,
  RenderContentFormSurfaceNavProps,
} from ".";
import { surfaceFormsConfig } from "../../config/surface.config";
import { TokenContext } from "@src/context/TokenContext";

const story = {
  components: [RenderContentFormSurfaceNav],
  title:
    "layouts/people/outlets/color/surfaces/form/RenderContentFormSurfaceNav",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <TokenContext.Provider
          value={{ token: presente, handleSubmit: () => {} }}
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
