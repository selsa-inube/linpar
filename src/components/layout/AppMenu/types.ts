import { inube } from "@inube/design-system";
interface IAppOption {
  id: number;
  icon: JSX.Element;
  label: string;
  description: string;
  url: string;
  domain: keyof typeof inube;
}

interface IRoute {
  path: string;
  label: string;
  id: string;
  isActive?: boolean;
  size?: "large" | "small";
}

export type { IAppOption, IRoute };
