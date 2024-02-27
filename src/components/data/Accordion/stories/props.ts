export const parameters = {
  docs: {
    description: {
      component:
        "Accordion component is used to display a list of items that can be expanded or collapsed.",
    },
  },
};

export const props = {
  title: {
    description: "Title of the accordion",
  },
  defaultOpen: {
    options: [false, true],
    control: {
      type: "boolean",
    },
    description: "Whether the accordion is open by default",
    table: {
      defaultValue: { summary: true },
    },
  },
  children: {
    description:
      "Content to be displayed when the accordion is open, it can be a single element or an array of elements JAX",
  },
};
