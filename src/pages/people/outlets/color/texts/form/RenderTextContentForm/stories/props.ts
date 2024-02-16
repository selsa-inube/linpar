import { inube } from "@inube/design-system";

const excludedOptions = ["link"];
const filteredOptions = Object.keys(inube.color.text).filter(
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
