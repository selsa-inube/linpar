interface IAppOption {
  id: number;
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
}

interface IAppMenuProps {
  id: string;
  label: string;
  path: string;
  isActive?: boolean;
  size?: "small" | "large";
}

export type { IAppOption, IAppMenuProps };
