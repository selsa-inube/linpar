import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { presente, Stack, inube } from "@inube/design-system";
import {
  RenderContentFormSurfaceNav,
  RenderContentFormSurfaceNavProps,
} from ".";

const story = {
  components: [RenderContentFormSurfaceNav],
  title: "layouts/people/outlets/surfaces/form/RenderContentFormSurfaceNav",
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
  nav: {
    description:
      "Las superficies del Nav determinarán el color de fondo del menú de navegación lateral.",
    status: {
      regular: {
        title: "Regular",
        description:
          "La superficie tomará este color para darle contraste a los links de navegación.",
      },
    },
  },
};

const formType = Object.keys(surfaceFormsConfig);

const Default = (args: RenderContentFormSurfaceNavProps) => {
  const selectedTheme = themeMap[args.token as keyof typeof themeMap];

  return (
    <Stack padding="s300" direction="column" gap={selectedTheme.spacing.s400}>
      <RenderContentFormSurfaceNav {...args} token={selectedTheme} />
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
      defaultValue: { summary: "nav" },
    },
  },
};
export default story;

export { Default };
