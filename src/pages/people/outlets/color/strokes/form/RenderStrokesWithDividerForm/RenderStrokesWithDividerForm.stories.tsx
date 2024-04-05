import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { inube, Stack } from "@inube/design-system";

import {
  RenderStrokesWithDividerForm,
  RenderStrokesWithDividerFormProps,
} from ".";
import { strokesFormsConfig } from "@pages/people/outlets/color/strokes/config/Strokes.config";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof RenderStrokesWithDividerForm> = {
  component: RenderStrokesWithDividerForm,
  title:
    "layouts/people/outlets/color/strokes/form/RenderStrokesWithDividerForm",
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

const Default = (args: RenderStrokesWithDividerFormProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderStrokesWithDividerForm {...args} formType="divider" />
    </Stack>
  );
};

Default.args = {
  strokesConfig: { divider: strokesFormsConfig.divider },
};

export default story;

export { Default };
