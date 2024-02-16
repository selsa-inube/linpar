import { inube } from "@inube/design-system";

const excludedOptions = ["spinner", "link", "divider"];
const filteredOptions = Object.keys(inube.color.stroke).filter(
  (option) => !excludedOptions.includes(option)
);
const props = {
  formType: {
    options: filteredOptions,
    control: { type: "select" },
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};
export { props };
