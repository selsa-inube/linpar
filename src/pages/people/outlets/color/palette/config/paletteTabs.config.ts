import { PaletteAppearance } from "../types";

interface optionPaletteTabsConfig {
  id: PaletteAppearance;
  isDisabled: boolean;
  label: string;
}

export type tpaletteTabsConfig = {
  [color in PaletteAppearance]: optionPaletteTabsConfig;
};

const paletteTabsConfig: tpaletteTabsConfig = {
  neutral: {
    id: "neutral",
    isDisabled: false,
    label: "Neutrales",
  },
  neutralAlpha: {
    id: "neutralAlpha",
    isDisabled: false,
    label: "Neutral alfa",
  },
  red: {
    id: "red",
    isDisabled: false,
    label: "Rojos",
  },
  yellow: {
    id: "yellow",
    isDisabled: false,
    label: "Amarillos",
  },
  green: {
    id: "green",
    isDisabled: false,
    label: "Verdes",
  },
  blue: {
    id: "blue",
    isDisabled: false,
    label: "Azules",
  },
  teal: {
    id: "teal",
    isDisabled: false,
    label: "Verde azulados",
  },
  purple: {
    id: "purple",
    isDisabled: false,
    label: "Morados",
  },
};

export { paletteTabsConfig };
