import { inube } from "@inube/design-system";

interface IHandleSubmitProps {
  domain: string;
  block: string;
  tokenUpdate: typeof inube;
}

interface ITokenContextProps {
  token: typeof inube;
  tokenWithRef: typeof inube;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

interface SetTokenAction {
  type: actionTypes.SET_TOKEN;
  payload: typeof inube;
}

interface UpdateTokenAction {
  type: actionTypes.UPDATE_TOKEN;
  payload: IHandleSubmitProps;
}

enum actionTypes {
  SET_TOKEN = "SET_TOKEN",
  UPDATE_TOKEN = "UPDATE_TOKEN",
}

type TokenActions = SetTokenAction | UpdateTokenAction;

export type { IHandleSubmitProps, ITokenContextProps, TokenActions };
export { actionTypes };
