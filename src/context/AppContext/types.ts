interface IbusinessManager {
  name: string;
  logo: string;
}

interface IUser {
  username: string;
  id: string;
  company: string;
  businessManager: IbusinessManager;
}

interface IClient {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

interface IAppContext {
  linparContext: IUser;
  handleClientChange: (client: IClient) => void;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

interface ILinparData {
  abbreviatedName: string;
  staffPortalCatalogId: string;
  businessManagerId: string;
  publicCode: string;
  urlBrand: string;
  urlLogo: string;
  user: IUser;
  handleClientChange?: (client: IClient) => void;
}

interface ILinparContext {
  linparData: ILinparData;
  clientSigla: string;
  setLinparData: React.Dispatch<React.SetStateAction<ILinparData>>;
  setClientSigla: React.Dispatch<React.SetStateAction<string>>;
}

export type {
  IAppContext,
  IClient,
  AppContextProviderProps,
  ILinparData,
  ILinparContext,
};
