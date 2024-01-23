import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, inube, Stack } from "@inube/design-system";
import { RenderLinesContentForm, RenderLinesContentFormProps } from ".";
import { linesFormsConfig } from "../../config/lines.config";

const story = {
  components: [RenderLinesContentForm],
  title: "layouts/people/outlets/lines/form/RenderLinesContentForm",
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
const Default = (args: RenderLinesContentFormProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderLinesContentForm {...args} token={selectedTheme} />
    </Stack>
  );
};

Default.args = {
  formType: "primary",
  handleSubmit: () => {},
  token: "presente",
  linesConfig: linesFormsConfig,
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
    options: Object.keys(linesFormsConfig),
    control: { type: "select" },
    description: "the form that it'll be render",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};

export default story;

export { Default };
