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
  setClient: (client: IClient) => void;
}

interface IClient {
  id: number;
  name: string;
  sigla: string;
  logo: string;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export type { IAppContext, IClient, AppContextProviderProps };
