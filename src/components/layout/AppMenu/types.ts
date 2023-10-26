const sizes = ["large", "small"] as const;
type Sizes = typeof sizes[number];

interface IAppOption {
  id: number;
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
}

interface IRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: Sizes;
}

export type { IAppOption, IRoute };
