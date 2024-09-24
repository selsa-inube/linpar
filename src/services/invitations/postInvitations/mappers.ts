import { IInvitationsEntry } from "@services/users/invitation.types";

const mapInvitationEntityToApi = (
  invitation: IInvitationsEntry
): Record<string, string | number | object> => {
  return {
    email: String(invitation.email),
    phoneNumber: String(invitation.phoneNumber),
    businessUnitPublicCode: "LINIX",
    userIdentification: String(invitation.userIdentification),
  };
};

export { mapInvitationEntityToApi };
