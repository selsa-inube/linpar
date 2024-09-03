import { IInvitationsEntry } from "@services/users/invitation.types";

import { addLinixInvitation } from "@services/invitations/postInvitations";

export const saveLinixInvitations = async (
  addLinixInvitations: IInvitationsEntry
) => {
  const dateEnd = new Date();
  const nextMonth = new Date(dateEnd).getMonth() + 1;
  dateEnd.setMonth(nextMonth);

  const newLinixInvitation: IInvitationsEntry = {
    email: addLinixInvitations.email,
    phoneNumber: "221321",
    publicCode: "LINIX",
    userIdentification: "95248900",
  };
  let confirmationType = true;
  try {
    await addLinixInvitation(newLinixInvitation);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
