import { inube } from "@inube/design-system";
import { SurfaceAppearance } from "@pages/people/outlets/color/surfaces/types";

const excludedOptions = ["nav", "blanket"];
const filteredOptions = Object.keys(inube.color.surface).filter(
  (option) => !excludedOptions.includes(option)
) as SurfaceAppearance[];
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
