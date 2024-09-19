interface IClient {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

interface IPortal {
  abbreviatedName: string;
  staffPortalCatalogId: string;
  businessManagerId: string;
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
  publicCode: string;
  abbreviatedName: string;
  businessUnit: string;
  urlLogo: string;
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

export type { IClient, ILinparData, ILinparContext };
