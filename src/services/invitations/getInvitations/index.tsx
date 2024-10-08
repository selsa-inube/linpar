import { environment } from "@config/environment";
import { IInvitationsEntry } from "@services/users/invitation.types";
import { mapInvitationsApiToEntities } from "./mappers";

const getInvitations = async (): Promise<IInvitationsEntry[]> => {
  const requestUrl = `${environment.IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PROCESS_SERVICE}/users-signup-invitations/business-units/LINIX`;

  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "X-Action": "SearchAllUsersSignupInvitations",
        "X-Business-Unit": environment.TEMP_BUSINESS_UNIT,
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const res = await fetch(requestUrl, options);

    if (res.status === 204) {
      return [];
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error al obtener los datos: ${res.status}`);
    }

    const normalizedInvitation = Array.isArray(data)
      ? mapInvitationsApiToEntities(data)
      : [];

    return normalizedInvitation;
  } catch (error) {
    console.error(error);
  }

  return [];
};

export { getInvitations };
