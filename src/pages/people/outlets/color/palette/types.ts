const appereanceText = [
  "neutral",
  "neutralAlpha",
  "red",
  "yellow",
  "green",
  "blue",
  "teal",
  "purple",
] as const;

export type PaletteAppearance = typeof appereanceText[number];
