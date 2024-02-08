import { palette } from "./palette";

const stroke = {
  primary: {
    regular: palette.blue.B400,
    hover: palette.blue.B300,
    focus: palette.blue.B300,
    disabled: palette.neutral.N70,
  },
  error: {
    regular: palette.red.R400,
    hover: palette.red.R300,
    disabled: palette.neutral.N70,
  },
  warning: {
    regular: palette.yellow.Y400,
    hover: palette.yellow.Y300,
    disabled: palette.neutral.N70,
  },
  success: {
    regular: palette.green.G400,
    hover: palette.green.G300,
    disabled: palette.neutral.N70,
  },
  information: {
    regular: palette.blue.B400,
    hover: palette.blue.B300,
    disabled: palette.neutral.N70,
  },
  help: {
    regular: palette.purple.P400,
    hover: palette.purple.P300,
    disabled: palette.neutral.N70,
  },
  divider: {
    regular: palette.neutral.N40,
  },
  spinner: {
    regular: palette.neutral.N30,
    transparent: palette.neutralAlpha.N0A,
  },
  dark: {
    regular: palette.neutral.N900,
    hover: palette.neutral.N500,
    disabled: palette.neutral.N70,
  },
  gray: {
    regular: palette.neutral.N200,
    hover: palette.neutral.N90,
    disabled: palette.neutral.N70,
  },
  light: {
    regular: palette.neutral.N10,
    hover: palette.neutral.N0,
    disabled: palette.neutral.N60,
  },
  link: {
    regular: palette.blue.B400,
    hover: palette.blue.B300,
    disabled: palette.neutral.N70,
  },
};

export { stroke };
