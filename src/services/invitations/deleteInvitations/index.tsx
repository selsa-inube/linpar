import { environment } from "@config/environment";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { IdeleteInvitations } from "./types";
import { mapInvitationsDeleteEntityToApi } from "./mappers";

const deleteInvitation = async (
  deleteInvitation: IdeleteInvitations
): Promise<IInvitationsEntry | undefined> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE}/users-signup-invitations`;

  try {
    const options: RequestInit = {
      method: "DELETE",
      headers: {
        "X-Action": "RemoveUserSignupInvitation",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(mapInvitationsDeleteEntityToApi(deleteInvitation)),
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return;
    }

    let data;
    try {
      data = await res.json();
    } catch (error) {
      throw new Error("Failed to parse response JSON");
    }

    if (!res.ok) {
      const errorMessage = `Error al eliminar la invitacion: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to delete invitacion:", error);
    throw error;
  }
};

export { deleteInvitation };
