import { IInvitationsEntry } from "@services/users/invitation.types";

const mapInvitationsApiToEntity = (
  invitations: Record<string, string | number | object>
): IInvitationsEntry => {
  const builInvitations: IInvitationsEntry = {
    id: String(invitations.userIdentification),
    invitationId: String(invitations.invitationId),
    customerId: String(invitations.customerId),
    email: String(invitations.email),
    phoneNumber: String(invitations.phoneNumber),
    status: String(invitations.status),
    userIdentification: String(invitations.userIdentification),
    userName: String(invitations.userName),
    dateEnd: String(invitations.dateEnd),
    dateStart: String(invitations.dateStart),
    requestingUser: String(invitations.requestingUser),
  };
  return builInvitations;
};

const mapInvitationsApiToEntities = (
  users: Record<string, string | number | object>[]
): IInvitationsEntry[] => {
  return users.map(mapInvitationsApiToEntity);
};
export { mapInvitationsApiToEntities, mapInvitationsApiToEntity };
