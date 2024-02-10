import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, Stack, inube } from "@inube/design-system";
import {
  RenderContentFormSurfaceBlanket,
  RenderContentFormSurfaceBlanketProps,
} from ".";

const story = {
  components: [RenderContentFormSurfaceBlanket],
  title: "layouts/people/outlets/surfaces/form/RenderContentFormSurfaceBlanket",
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

const surfaceFormsConfig = {
  blanket: {
    description:
      "Las superficies de tipo primario se utilizan en componentes que están relacionados a acciones principales o comunican relación a la marca.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para resaltar acciones principales o el color de marca.",
      },
    },
  },
};

const formType = Object.keys(surfaceFormsConfig);

const Default = (args: RenderContentFormSurfaceBlanketProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderContentFormSurfaceBlanket {...args} token={selectedTheme} />
    </Stack>
  );
};

Default.args = {
  formType: formType,
  handleSubmit: () => {},
  token: "presente",
  surfaceConfig: surfaceFormsConfig,
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
    options: formType,
    control: { type: "select" },
    description: "the form that it'll be render",
    table: {
      defaultValue: { summary: "blanket" },
    },
  },
};
export default story;

export { Default };
