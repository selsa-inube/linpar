export interface IInvitation {
  id?: string;
  email: string;
  userIdentification: string;
  phoneNumber: string;
  userName?: string;
  invitationId?: string;
  customerId?: string;
}
export interface IInvitationsEntry {
  id?: string;
  customerId?: string;
  email: string;
  phoneNumber: string;
  publicCode?: string;
  status?: string;
  userIdentification: string;
  userName?: string;
  businessUnitPublicCode?: string;
  dateEnd?: string;
  dateStart?: string;
  invitationId?: string;
  password?: string;
  positionId?: string;
  position?: string;
  requestingUser?: string;
  userAccountId?: string;
  branches?: IOptionInitialiceEntry[];
  proyectsEvents?: IOptionInitialiceEntry[];
  aidBudgetUnits?: IOptionInitialiceEntry[];
  payrolls?: IOptionInitialiceEntry[];
}

export interface IOptionInitialiceEntry {
  id: string;
  value: string;
  isActive: boolean;
}

export interface IFormCompleteInvitation {
  generalInformation: {
    isValid: boolean;
    values: IInvitationsEntry;
  };
  branches: { isValid: boolean; values: IOptionInitialiceEntry[] };
  proyectsEvents: { isValid: boolean; values: IOptionInitialiceEntry[] };
  aidBudgetUnits: { isValid: boolean; values: IOptionInitialiceEntry[] };
  payrolls: { isValid: boolean; values: IOptionInitialiceEntry[] };
}

export type IHandleChangeFormData =
  | IInvitation
  | IInvitationsEntry
  | IOptionInitialiceEntry[];
