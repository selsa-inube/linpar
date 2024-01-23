import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, inube, Stack } from "@inube/design-system";
import { linesFormsConfig } from "../../config/lines.config";
import { RenderLinesWithSpinnerForm, RenderLinesWithSpinnerFormProps } from ".";

const story = {
  components: [RenderLinesWithSpinnerForm],
  title: "layouts/people/outlets/lines/form/RenderLinesWithSpinnerForm",
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
const Default = (args: RenderLinesWithSpinnerFormProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderLinesWithSpinnerForm {...args} token={selectedTheme} />
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
