interface IUser {
  id: string;
  username: string;
  code: string;
  userID: string;
  position: string;
  active: boolean;
  email: string;
  phone: string;
  clients: number[];
}

export type { IUser };
