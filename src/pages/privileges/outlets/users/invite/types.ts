interface IInviteFormValues {
  userName: string;
  userIdentification: string;
  phoneNumber: string;
  email: string;
}

interface IUserEntry {
  id: string;
  username: string;
  code: string;
  userID: string;
  position: string;
  active: boolean;
  email: string;
  phone: string;
}

interface IInvitationUser {
  id: string;
  userName: string;
  userIdentification: string;
  phoneNumber: string;
  email: string;
}

export type { IInviteFormValues, IUserEntry, IInvitationUser };
