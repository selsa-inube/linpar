import { inube } from "@inube/design-system";

const excludedOptions = ["nav", "blanket"];
const filteredOptions = Object.keys(inube.color.surface).filter(
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
