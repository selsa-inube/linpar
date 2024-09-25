interface IUser {
  id: string;
  username: string;
  code: string;
  userID: string;
  position: string;
  active: boolean;
  email: string;
  phone: string;
  businessUnits: number[];
}

interface IBusinessUnit {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

export type { IUser, IBusinessUnit };
