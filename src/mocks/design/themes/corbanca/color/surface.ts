import { palette } from "./palette";

const surface = {
  primary: {
    regular: palette.red.R400,
    hover: palette.red.R300,
    clear: palette.red.R50,
    disabled: palette.neutral.N20,
  },
  error: {
    regular: palette.red.R400,
    hover: palette.red.R300,
    clear: palette.red.R50,
    disabled: palette.neutral.N20,
  },
  warning: {
    regular: palette.yellow.Y400,
    hover: palette.yellow.Y300,
    clear: palette.yellow.Y50,
    disabled: palette.neutral.N20,
  },
  success: {
    regular: palette.green.G400,
    hover: palette.green.G300,
    clear: palette.green.G50,
    disabled: palette.neutral.N20,
  },
  information: {
    regular: palette.blue.B400,
    hover: palette.blue.B300,
    clear: palette.blue.B50,
    disabled: palette.neutral.N20,
  },
  help: {
    regular: palette.purple.P400,
    hover: palette.purple.P300,
    clear: palette.purple.P50,
    disabled: palette.neutral.N20,
  },
  nav: {
    regular: palette.neutral.N10,
  },
  navLink: {
    regular: palette.neutralAlpha.N0A,
    hover: palette.neutral.N30,
    selected: palette.neutral.N30,
  },
  blanket: {
    regular: palette.neutralAlpha.N100A,
  },
  dark: {
    regular: palette.neutral.N900,
    hover: palette.neutral.N500,
    clear: palette.neutral.N30,
    disabled: palette.neutral.N20,
  },
  gray: {
    regular: palette.neutral.N30,
    hover: palette.neutral.N20,
    clear: palette.neutral.N10,
    disabled: palette.neutral.N20,
  },
  light: {
    regular: palette.neutral.N10,
    hover: palette.neutral.N0,
    clear: palette.neutral.N0,
    disabled: palette.neutral.N20,
  },
};

export { surface };
