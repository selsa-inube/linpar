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
}

export type { IAppContext };
