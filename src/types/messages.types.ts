import { EAppearance } from "./colors.types";

enum EMessageType {
  SUCCESS = "success",
  FAILED = "failed",
  DELETE = "delete",
  ACTIVATION = "activation",
  DEACTIVATION = "deactivation",
  DELETION = "DELETION",
}

interface IMessage {
  show?: boolean;
  title: string;
  description: string;
  icon: JSX.Element;
  appearance: EAppearance;
}

export { EMessageType };
export type { IMessage };
