import { IInvitationsEntry } from "@services/users/invitation.types";

import { addLinixInvitation } from "@services/invitations/postInvitations";

export const saveLinixInvitations = async (
  addLinixInvitations: IInvitationsEntry,
  user: string,
  businessUnitPublicCode: string
) => {
  const dateEnd = new Date();
  const nextMonth = new Date(dateEnd).getMonth() + 1;
  dateEnd.setMonth(nextMonth);

  const newLinixInvitation: IInvitationsEntry = {
    email: addLinixInvitations.email,
    phoneNumber: addLinixInvitations.phoneNumber,
    businessUnitPublicCode: businessUnitPublicCode,
    userIdentification: addLinixInvitations.userIdentification,
  };
  let confirmationType = true;
  try {
    await addLinixInvitation(newLinixInvitation, user, businessUnitPublicCode);
  } catch (error) {
    confirmationType = false;

    throw error;
  }

  return confirmationType;
};
