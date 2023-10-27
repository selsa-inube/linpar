const sizes = ["large", "small"] as const;

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
  size?: typeof sizes;
}

export type { IAppOption, IRoute };
