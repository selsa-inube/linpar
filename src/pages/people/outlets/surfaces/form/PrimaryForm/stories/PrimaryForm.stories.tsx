import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { useState } from "react";
import { inube } from "@inube/design-system";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

import { ThemeProvider } from "styled-components";
import { PrimaryForm } from "..";
import { surfaceFormsConfig } from "../../../config/surface.config";
import { StyledPrimaryFormContainer } from "./styles";

const story = {
  components: [PrimaryForm],
  title: "layouts/people/outlets/surfaces/form/PrimaryForm",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: StoryFn) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Default = () => {
  const [surfaceConfig, setSurfaceConfig] = useState(
    JSON.parse(JSON.stringify(inube.color))
  );
  const [originalTextConfig] = useState(inube.color);
  const handleTextConfigUpdate = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    const updatedTextConfig = { ...surfaceConfig.surface };

    if (
      updatedTextConfig[appearance] &&
      updatedTextConfig[appearance][category]
    ) {
      updatedTextConfig[appearance][category] = getTokenColor(updatedTokenName);
    }
    const updatedInubeColor = {
      ...inube.color,
      surface: { ...updatedTextConfig },
    };

    setSurfaceConfig(updatedInubeColor);
  };

  return (
    <ThemeProvider theme={inube}>
      <StyledPrimaryFormContainer>
        <PrimaryForm
          surfaceConfig={surfaceFormsConfig.primary}
          palette={inube.color.palette}
          onChange={handleTextConfigUpdate}
          originalTextConfig={originalTextConfig}
          surfaceTokens={surfaceConfig}
        />
      </StyledPrimaryFormContainer>
    </ThemeProvider>
  );
};

export default story;

export { Default };
