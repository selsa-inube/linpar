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
  invitationDate: string;
  status: string;
  phone: string;
}

interface IFormsInvitation {
  generalInformation: { entries: IGeneralInformationEntry };
  branches: { entries: IAssignmentFormEntry[] };
  projects: { entries: IAssignmentFormEntry[] };
  events: { entries: IAssignmentFormEntry[] };
  aidBudgetUnits: { entries: IAssignmentFormEntry[] };
  payrolls: { entries: IAssignmentFormEntry[] };
}

export type { IFormsInvitation, IAssignmentFormEntry };
