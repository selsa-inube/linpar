import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, inube, Stack } from "@inube/design-system";
import { RenderStrokesContentForm, RenderStrokesContentFormProps } from ".";
import { strokesFormsConfig } from "../../config/Strokes.config";

const story = {
  components: [RenderStrokesContentForm],
  title: "layouts/people/outlets/color/strokes/form/RenderStrokesContentForm",
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
const Default = (args: RenderStrokesContentFormProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderStrokesContentForm {...args} token={selectedTheme} />
    </Stack>
  );
};

Default.args = {
  formType: "primary",
  handleSubmit: () => {},
  token: "presente",
  strokesConfig: strokesFormsConfig,
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
    options: Object.keys(strokesFormsConfig),
    control: { type: "select" },
    description: "the form that it'll be render",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};

export default story;

export { Default };
