import { tokensWithReference } from "@src/mocks/design/tokensWithReference";

const props = {
  formType: {
    options: Object.keys(tokensWithReference),
    control: { type: "select" },
    description: "Select the form type to render",
    table: {
      defaultValue: { summary: "presente" },
    },
  },
};

export { props };
