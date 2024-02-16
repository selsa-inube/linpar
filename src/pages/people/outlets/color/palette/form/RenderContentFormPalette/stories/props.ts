import { inube } from "@inube/design-system";
const props = {
  formType: {
    options: Object.keys(inube.color.palette),
    control: { type: "select" },
    table: {
      defaultValue: { summary: "neutral" },
    },
  },
};
export { props };
