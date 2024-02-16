interface IAppContext {
  user: {
    username: string;
    id: string;
    company: string;
    operator: {
      name: string;
      logo: string;
    };
  };
  handleClientChange: (client: IClient) => void;
}

interface IClient {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export type { IAppContext, IClient, AppContextProviderProps };
