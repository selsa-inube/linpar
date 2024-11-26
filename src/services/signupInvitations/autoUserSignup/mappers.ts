import { IUsersSignupInvitation } from "./types";

const mapSignupInvitationEntityToApi = (
  signupInvitation: IUsersSignupInvitation
): Record<string, string | number | object> => {
  console.log("signupInvitation", signupInvitation);
  return {
    email: String(signupInvitation.email),
    invitationId: String(signupInvitation.invitationId),
    modifyJustification: String(signupInvitation.modifyJustification),
    password: String(signupInvitation.password),
    phoneNumber: String(signupInvitation.phoneNumber),
    userAccountId: String(signupInvitation.userAccountId),
    userName: String(signupInvitation.userName),
  };
};

export { mapSignupInvitationEntityToApi };
