import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { PrimaryForm } from "./index";
import { useState } from "react";
import { inube } from "@inube/design-system";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { surfaceFormsConfig } from "../../config/surface.config";
import { ThemeProvider } from "styled-components";

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
  console.log(surfaceConfig, originalTextConfig, surfaceFormsConfig);
  return (
    <ThemeProvider theme={inube}>
      <PrimaryForm
        surfaceConfig={surfaceFormsConfig.primary}
        palette={inube.color.palette}
        onChange={handleTextConfigUpdate}
        originalTextConfig={originalTextConfig}
        surfaceTokens={surfaceConfig}
      />
    </ThemeProvider>
  );
};

export default story;

export { Default };
