import { IdeleteInvitations } from "@services/invitations/deleteInvitations/types";
import { deleteInvitation } from "@services/invitations/deleteInvitations";

const deleteInvitations = async (
  linixInvitation: string,
  businessUnitPublicCode: string
): Promise<boolean> => {
  let confirmationDelete = true;
  const linixInvitations: IdeleteInvitations = {
    invitationId: linixInvitation,
    invitationDescription: "Elimina",
    removalJustification: "Eliminacion",
  };
  try {
    await deleteInvitation(linixInvitations, businessUnitPublicCode);
  } catch (error) {
    confirmationDelete = false;
    throw error;
  }

  return confirmationDelete;
};

export { deleteInvitations };
