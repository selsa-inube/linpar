import { IMessage } from "@src/types/messages.types";

interface IUsersRouteState {
  message?: IMessage;
  tab?: string;
}

interface IUsersMessage extends IMessage {
  visible: boolean;
}

export type { IUsersMessage, IUsersRouteState };
