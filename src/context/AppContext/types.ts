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

export type { IAppContext, IClient, AppContextProviderProps };
