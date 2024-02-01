import { inube } from "@inube/design-system";

interface IHandleSubmitProps {
  domain: string;
  block: string;
  tokenUpdate: typeof inube;
}

interface ITokenContextProps {
  token: typeof inube;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

export type { IHandleSubmitProps, ITokenContextProps };
