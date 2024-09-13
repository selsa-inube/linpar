interface IOperator {
  name: string;
  logo: string;
}

interface IUser {
  username: string;
  id: string;
  company: string;
  operator: IOperator;
}

interface IBussinessUnit {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

interface IAppContext {
  user: IUser;
  handleBussinessUnitChange: (bussinessUnit: IBussinessUnit) => void;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

export type { IAppContext, IBussinessUnit, AppContextProviderProps };
