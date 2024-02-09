interface IRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: "large" | "small";
}

export type { IRoute };
