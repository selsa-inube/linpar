import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, Stack, inube } from "@inube/design-system";
import {
  RenderContentFormNeutralPalette,
  RenderContentFormNeutralPaletteProps,
} from ".";
import { paletteConfig } from "../../config/palette.config";

const story = {
  components: [RenderContentFormNeutralPalette],
  title: "layouts/people/outlets/palette/form/RenderContentFormNeutralPalette",
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

const themeMap = {
  presente: presente,
  inube: inube,
};
const Default = (args: RenderContentFormNeutralPaletteProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderContentFormNeutralPalette {...args} token={selectedTheme} />
    </Stack>
  );
};

Default.args = {
  formType: "neutral",
  handleSubmit: () => {},
  token: "presente",
  paletteConfig: paletteConfig,
};
Default.argTypes = {
  token: {
    options: ["presente", "inube"],
    control: { type: "select" },
    description: "the theme that it be use to render",
    table: {
      defaultValue: { summary: "inube" },
    },
  },
  formType: {
    options: Object.keys(paletteConfig),
    control: { type: "select" },
    description: "the form that it'll be render",
    table: {
      defaultValue: { summary: "neutral" },
    },
  },
};
export default story;

export { Default };
