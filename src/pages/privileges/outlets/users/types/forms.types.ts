import { EApparence } from "@src/types/colors.types";
import { EMessageType } from "@src/types/messages.types";

interface IAssignmentFormEntry {
  id: string;
  value: string;
  isActive: boolean;
}

interface IGeneralInformationEntry {
  id: string;
  userID: string;
  username: string;
  email: string;
  invitationDate?: string;
  status: string;
  phone: string;
  code?: string;
  position?: string;
  active?: boolean;
}

interface IFormsInvitation {
  generalInformation: { entries: IGeneralInformationEntry };
  branches: { entries: IAssignmentFormEntry[] };
  projects: { entries: IAssignmentFormEntry[] };
  events: { entries: IAssignmentFormEntry[] };
  aidBudgetUnits: { entries: IAssignmentFormEntry[] };
  payrolls: { entries: IAssignmentFormEntry[] };
}

interface IInitialMessage {
  show?: boolean;
  title: string;
  description: string;
  icon: string | JSX.Element;
  appearance: EApparence;
}

interface IMessageState {
  visible: boolean;
  type: EMessageType;
}

export type {
  IFormsInvitation,
  IAssignmentFormEntry,
  IGeneralInformationEntry,
  IInitialMessage,
  IMessageState,
};
