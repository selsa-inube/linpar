import { inube } from "@inubekit/foundations";

const excludedOptions = ["link"];
const filteredOptions = Object.keys(inube.text).filter(
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
