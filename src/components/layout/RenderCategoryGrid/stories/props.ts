import { inube } from "@inube/design-system";

const parameters = {
  docs: {
    description: {
      component:
        "Allow render grid that can be configured in order to show a list of colors.",
    },
  },
  controls: {
    exclude: ["templateRows", "templateColumns"],
  },
};
const categoryOptions = {
  "Neutral-Palette": JSON.stringify(inube.color.palette.neutral),
  Palette: JSON.stringify(
    Object.entries(inube.color.palette).map(([key, value]) => [key, value])
  ),
};
const props = {
  type: {
    options: ["colorPicker", "tokenPicker"],
    control: { type: "select" },
    description: "defines the size of the component",
  },
  categories: {
    options: Object.keys(categoryOptions),
    control: { type: "select" },
    description: "defines the size of the component",
  },
};

export { props, parameters, categoryOptions };
