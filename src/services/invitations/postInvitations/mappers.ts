import { IInvitationsEntry } from "@services/users/invitation.types";

const mapInvitationEntityToApi = (
  invitation: IInvitationsEntry
): Record<string, string | number | object> => {
  return {
    email: String(invitation.email),
    phoneNumber: "221321",
    publicCode: "LINIX",
    userIdentification: "9525392",
  };
};

export { mapInvitationEntityToApi };
