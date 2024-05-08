import { EMessageType, IMessage } from "@src/types/messages.types";

interface IAssignmentFormEntry {
  id: string;
  value: string;
  isActive: boolean;
}

interface IGeneralInformationEntry {
  id: string;
  k_Usuari: string;
  n_Usuari: string;
  k_Grupo: string;
  n_Grupo: string;
  a_Numnit: string;
  i_Activo: string;
  userID: string;
  username: string;
  email: string;
  phone: string;
  invitationDate?: string;
  status?: string;
  code?: string;
  position?: string;
}

interface IFormsInvitation {
  generalInformation: { entries?: IGeneralInformationEntry };
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
