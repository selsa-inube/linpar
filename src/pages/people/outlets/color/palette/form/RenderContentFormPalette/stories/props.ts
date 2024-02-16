import { inube } from "@inube/design-system";
import { PaletteAppearance } from "@pages/people/outlets/color/palette/types";

const props = {
  formType: {
    options: Object.keys(inube.color.palette) as PaletteAppearance[],
    control: { type: "select" },
    table: {
      defaultValue: { summary: "neutral" },
    },
  },
};
export { props };
