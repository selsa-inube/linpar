import { IOptionInitialiceEntry } from "@pages/privileges/outlets/positions/add-position/types";

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
  projects?: IOptionInitialiceEntry[];
  events?: IOptionInitialiceEntry[];
  aidBudgetUnits?: IOptionInitialiceEntry[];
  payrolls?: IOptionInitialiceEntry[];
}
