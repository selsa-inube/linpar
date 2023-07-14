interface IBranches {
  id: string;
  value: string;
  isActive: boolean;
}

interface IProjects extends IBranches {}

interface IEvents extends IBranches {}

interface IAidBudgetUnits extends IBranches {}

interface IPayrolls extends IBranches {}

interface IGeneralInformation {
  id: string;
  userID: string;
  username: string;
  email: string;
  invitationDate: string;
  status: string;
  phone: string;
}

interface IFormsInvitation {
  generalInformation: { entries?: IGeneralInformation };
  branches: { entries: IBranches[] };
  projects: { entries: IProjects[] };
  events: { entries: IEvents[] };
  aidBudgetUnits: { entries: IAidBudgetUnits[] };
  payrolls: { entries: IPayrolls[] };
}

export type { IFormsInvitation };
