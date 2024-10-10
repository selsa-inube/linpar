interface IPortal {
  abbreviatedName: string;
  staffPortalCatalogId: string;
  businessManagerId: string;
  publicCode: string;
}
interface IBusinessManager {
  publicCode: string;
  abbreviatedName: string;
  urlBrand: string;
  urlLogo: string;
}

interface IUser {
  userAccount: string;
  userName: string;
}

interface IBusinessUnit {
  businessUnitPublicCode: string;
  abbreviatedName: string;
  urlLogo: string;
  languageId?: string;
  descriptionUse?: string;
  firstMonthOfFiscalYear?: string;
}
interface ILinparData {
  portal: IPortal;
  businessManager: IBusinessManager;
  businessUnit: IBusinessUnit;
  user: IUser;
}

interface ILinparContext {
  linparData: ILinparData;
  businessUnitSigla: string;
  setLinparData: React.Dispatch<React.SetStateAction<ILinparData>>;
  setBusinessUnitSigla: React.Dispatch<React.SetStateAction<string>>;
}

export type { ILinparData, ILinparContext, IBusinessUnit };
