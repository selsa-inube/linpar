import { inube } from "@inubekit/foundations";
import { color } from "@mocks/design/tokensWithReference/sistemasEnlinea/color/color";
import { spacing } from "@mocks/design/tokensWithReference/sistemasEnlinea/spacing/spacing";
import { typography } from "@mocks/design/tokensWithReference/sistemasEnlinea/typography/typography";

const sistemasenlinea = {
  color,
  spacing,
  typography,
  card: {
    content: {
      color: {
        regular: inube.palette.neutral.N90,
        hover: inube.palette.neutral.N30,
        highlight: inube.palette.yellow.Y200,
      },
    },
    shadow: {
      color: {
        regular: inube.palette.neutral.N200,
      },
    },
  },
  icon: {
    primary: {
      content: {
        color: {
          regular: inube.palette.yellow.Y400,
          disabled: inube.palette.neutral.N90,
          hover: inube.palette.yellow.Y300,
        },
      },
      background: {
        color: {
          regular: inube.palette.yellow.Y400,
          disabled: inube.palette.neutral.N20,
          hover: inube.palette.yellow.Y300,
        },
      },
      contrast: {
        color: {
          regular: inube.palette.neutral.N10,
          disabled: inube.palette.neutral.N90,
          hover: inube.palette.neutral.N10,
        },
      },
    },
  },
};

export { sistemasenlinea };
