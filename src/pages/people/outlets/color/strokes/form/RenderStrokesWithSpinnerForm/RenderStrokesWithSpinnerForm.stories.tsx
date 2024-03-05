import { StoryFn, Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { inube, Stack } from "@inube/design-system";

import {
  RenderStrokesWithSpinnerForm,
  RenderStrokesWithSpinnerFormProps,
} from ".";
import { strokesFormsConfig } from "@pages/people/outlets/color/strokes/config/Strokes.config";
import { TokenContext } from "@src/context/TokenContext";
import { presente } from "@src/mocks/design/tokensWithReference/presente";
import { action } from "@storybook/addon-actions";

const story: Meta<typeof RenderStrokesWithSpinnerForm> = {
  component: RenderStrokesWithSpinnerForm,
  title:
    "layouts/people/outlets/color/strokes/form/RenderStrokesWithSpinnerForm",
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

const Default = (args: RenderStrokesWithSpinnerFormProps) => {
  return (
    <Stack padding="s300" direction="column" gap={inube.spacing.s400}>
      <RenderStrokesWithSpinnerForm {...args} formType="spinner" />
    </Stack>
  );
};

Default.args = {
  strokesConfig: { spinner: strokesFormsConfig.spinner },
};

export default story;

export { Default };
