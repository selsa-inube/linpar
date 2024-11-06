import { IInvitationsEntry, IUser } from "@services/users/invitation.types";
import { environment } from "@config/environment";
import { mapInvitationEntityToApi } from "./mappers";

const addLinixCompletion = async (
  linixInvitation: IUser,
  businessUnitPublicCode: string
): Promise<IInvitationsEntry | undefined> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE}/users-signup-invitations`;

  try {
    const options: RequestInit = {
      method: "PATCH",
      headers: {
        "X-Action": "CompleteUserSignup",
        "X-Business-Unit": businessUnitPublicCode,
        "Content-type": "application/json; charset=UTF-8",
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
      const errorMessage = `Error al completar la invitación. Status: ${
        res.status
      }, Data: ${JSON.stringify(data)}`;
      throw new Error(errorMessage);
    }
    return data;
  } catch (error) {
    console.error("Failed to add completion:", error);
    throw error;
  }
};

export { addLinixCompletion };
