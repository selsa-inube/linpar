interface IOption {
  id: string;
  label: string;
  icon?: JSX.Element;
  path?: string;
  handleClick?: () => void;
}

export type { IOption };
