import { TextAppearance } from "../types";

interface OptionsTextsTabs {
  id: TextAppearance;
  isDisabled: boolean;
  label: string;
}

type TextsTabsConfig = {
  [key in TextAppearance]: OptionsTextsTabs;
};

const textsTabsConfig: TextsTabsConfig = {
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
};

export { textsTabsConfig };
