import { inube } from "@inube/design-system";
import { StrokeAppearance } from "@pages/people/outlets/color/strokes/types";
const excludedOptions = ["spinner", "link", "divider"];
const filteredOptions = Object.keys(inube.color.stroke).filter(
  (option) => !excludedOptions.includes(option)
) as StrokeAppearance[];
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
