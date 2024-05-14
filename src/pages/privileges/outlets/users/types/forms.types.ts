import { IInvitationsEntry } from "@src/services/users/invitation.types";
import { EMessageType, IMessage } from "@src/types/messages.types";

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
  phone: string;
  invitationDate?: string;
  status?: string;
  code?: string;
  position?: string;
  active?: boolean;
}

interface IFormsInvitation {
  generalInformation: { entries?: IInvitationsEntry };
  branches: { entries: IAssignmentFormEntry[] };
  projects: { entries: IAssignmentFormEntry[] };
  events: { entries: IAssignmentFormEntry[] };
  aidBudgetUnits: { entries: IAssignmentFormEntry[] };
  payrolls: { entries: IAssignmentFormEntry[] };
}

interface IMessageState {
  visible: boolean;
  data?: IMessage;
  type?: EMessageType;
}

export type {
  IFormsInvitation,
  IAssignmentFormEntry,
  IGeneralInformationEntry,
  IMessageState,
};
