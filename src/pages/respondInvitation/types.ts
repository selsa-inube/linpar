export interface IClient {
  id: string;
  name: string;
  sigla: string;
  logo: string;
}

export interface IGeneralInformation {
  invitationId: string;
  businessUnit: string;
  email: string;
  password: string;
  phoneNumber: string;
  userAccountId: string;
  dateStart: string;
  dateEnd: string;
  requestingUser: string;
  status: string;
  userIdentification: string;
  userName: string;
}

export interface IFormEditRespondIvitation {
  generalInformation: {
    isValid: boolean;
    values: IGeneralInformation;
  };
}
