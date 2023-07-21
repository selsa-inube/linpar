enum EMessageType {
  SUCCESS = "success",
  FAILED = "failed",
}

interface IMessage {
  title?: string;
  description?: string;
  icon?: JSX.Element;
  appearance?: string;
}

export { EMessageType };
export type { IMessage };
