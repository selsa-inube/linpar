import { editSignupInvitations } from "@services/signupInvitations/autoUserSignup";
import { IUsersSignupInvitation } from "@services/signupInvitations/autoUserSignup/types";
import { ISearchByTokenUserSignupInvitationResponse } from "@services/signupInvitations/searchByTokenUserSignupInvitation/types";

export const invitation = async (
  data: ISearchByTokenUserSignupInvitationResponse,
  invitationId: string
) => {
  const newinvitation: IUsersSignupInvitation = {
    invitationId: invitationId || "",
    modifyJustification: "Porque es requerido",
    password: data.password || "",
    email: data.email || "",
    phoneNumber: data.phoneNumber || "",
    userAccountId: data.userAccountId || "",
    userName: data.userName || "",
  };

  let confirmationType = true;

  try {
    await editSignupInvitations(newinvitation);
  } catch (error) {
    confirmationType = false;
    throw error;
  }

  return confirmationType;
};
