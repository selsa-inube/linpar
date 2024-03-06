import { inube } from "@inube/design-system";

const excludedOptions = ["link"];
const filteredOptions = Object.keys(inube.color.text).filter(
  (option) => !excludedOptions.includes(option)
);
const props = {
  appearance: {
    options: filteredOptions,
    control: { type: "select" },
    description: "Select the appearance of the modal",
    table: {
      defaultValue: { summary: "primary" },
    },
  },
};

export { props };
