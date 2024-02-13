import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, Stack, inube } from "@inube/design-system";
import { RenderContentFormPalette, RenderContentFormPaletteProps } from ".";
import { categoryTranslations } from "../../config/palette.config";

const story = {
  components: [RenderContentFormPalette],
  title: "layouts/people/outlets/color/palette/form/RenderContentFormPalette",
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
const Default = (args: RenderContentFormPaletteProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderContentFormPalette {...args} token={selectedTheme} />
    </Stack>
  );
};

Default.args = {
  formType: "red",

  handleSubmit: () => {},
  token: "presente",
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
    options: Object.keys(categoryTranslations).filter(
      (option) => option !== "neutral" && option !== "neutralAlpha"
    ),
    description: "the form that it'll be render",
    control: { type: "select" },
    table: {
      defaultValue: { summary: "red" },
    },
  },
};
export default story;

export { Default };
