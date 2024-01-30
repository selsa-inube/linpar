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
  handelAssignClient: (clientName: string) => void;
  clients: {
    id: number;
    name: string;
    sigla: string;
    logo: string;
  }[];
}

export type { IAppContext };
