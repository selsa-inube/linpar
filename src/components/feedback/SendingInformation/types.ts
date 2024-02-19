const buttonTypes = ["outlined", "filled", "none"] as const;

export type ButtonType = typeof buttonTypes[number];
