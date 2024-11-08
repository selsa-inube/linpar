const appereanceText = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "danger",
  "help",
  "dark",
  "gray",
  "light",
] as const;

export type TextAppearance = typeof appereanceText[number];
