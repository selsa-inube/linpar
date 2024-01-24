const appearances = [
  "primary",
  "error",
  "warning",
  "success",
  "information",
  "help",
  "light",
  "gray",
  "dark",
] as const;

const buttonTypes = ["outlined", "filled", "none"] as const;

export type Appearance = typeof appearances[number];
export type ButtonType = typeof buttonTypes[number];
