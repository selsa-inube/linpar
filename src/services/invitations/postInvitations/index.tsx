import { IInvitationsEntry } from "@services/users/invitation.types";
import { environment } from "@src/config/environment";
import { mapInvitationEntityToApi } from "./mappers";

const addLinixInvitation = async (
  linixInvitation: IInvitationsEntry,
  username: string
): Promise<IInvitationsEntry | undefined> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE}/users-signup-invitations`;

  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "X-Action": "AddUserSignupInvitation",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
        "X-User-Name": username,
      },
      body: JSON.stringify(mapInvitationEntityToApi(linixInvitation)),
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
      const errorMessage = `Error al crear la invitación. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add invitation:", error);
    throw error;
  }
};

export { addLinixInvitation };
