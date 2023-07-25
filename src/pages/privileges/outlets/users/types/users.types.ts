import { IMessage } from "@src/types/messages.types";

interface IUsersMessage {
  visible: boolean;
  data?: IMessage;
}

export type { IUsersMessage };
