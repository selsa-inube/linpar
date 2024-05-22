import { IOptionInitialiceEntry } from "@src/pages/privileges/outlets/positions/add-position/types";

export interface IInvitationsEntry {
  customerId: string;
  email: string;
  phoneNumber: string;
  status: string;
  userIdentification: string;
  userName: string;
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
