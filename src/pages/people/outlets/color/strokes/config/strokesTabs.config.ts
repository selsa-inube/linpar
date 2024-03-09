import { StrokeAppearance } from "../types";

type StrokeConfigItem = {
  id: StrokeAppearance;
  isDisabled: boolean;
  label: string;
};
type IStrokesTabsConfig = {
  [key in StrokeAppearance]: StrokeConfigItem;
};

const strokesTabsConfig: IStrokesTabsConfig = {
  primary: {
    id: "primary",
    isDisabled: false,
    label: "Primario",
  },
  error: {
    id: "error",
    isDisabled: false,
    label: "Error",
  },
  warning: {
    id: "warning",
    isDisabled: false,
    label: "Advertencia",
  },
  success: {
    id: "success",
    isDisabled: false,
    label: "Éxito",
  },
  information: {
    id: "information",
    isDisabled: false,
    label: "Información",
  },
  help: {
    id: "help",
    isDisabled: false,
    label: "Ayuda",
  },
  divider: {
    id: "divider",
    isDisabled: false,
    label: "Divisor",
  },
  spinner: {
    id: "spinner",
    isDisabled: false,
    label: "Spinner",
  },
  dark: {
    id: "dark",
    isDisabled: false,
    label: "Oscuro",
  },
  gray: {
    id: "gray",
    isDisabled: false,
    label: "Gris",
  },
  light: {
    id: "light",
    isDisabled: false,
    label: "Claro",
  },
  link: {
    id: "link",
    isDisabled: false,
    label: "Link",
  },
};

export { strokesTabsConfig };
