const props = {
  formType: {
    options: [
      "primary",
      "error",
      "warning",
      "success",
      "information",
      "help",
      "dark",
      "gray",
      "light",
    ],
    control: { type: "select" },
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};
export { props };
