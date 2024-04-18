const menuItemSpacing = ["wide", "compact"] as const;

type MenuItemSpacingType = typeof menuItemSpacing[number];

export type { MenuItemSpacingType };
export { menuItemSpacing };
