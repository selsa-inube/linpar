import { IdeleteInvitations } from "./types";

const mapInvitationsDeleteEntityToApi = (
  deleteInvitations: IdeleteInvitations
): Record<string, string | number | object> => {
  return {
    removeUserSignupInvitation: [
      {
        invitationId: String(deleteInvitations.invitationId),
        invitationDescription: String(deleteInvitations.invitationDescription),
        removalJustification: String(deleteInvitations.removalJustification),
      },
    ],
  };
};

export { mapInvitationsDeleteEntityToApi };
